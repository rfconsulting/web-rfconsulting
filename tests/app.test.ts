import request from "supertest";
import { describe, expect, it } from "vitest";
import { createApp, getAssetCacheOptions } from "../src/app.js";
import { prepareContact } from "../src/application/contact/prepare-contact.js";

describe("sitio público", () => {
  it("renderiza el home con contenido institucional y headers seguros", async () => {
    const response = await request(createApp()).get("/");

    expect(response.status).toBe(200);
    expect(response.type).toContain("html");
    expect(response.text).toContain("Tecnología empresarial que funciona con tu operación.");
    expect(response.text).toContain("Sistemas empresariales");
    expect(response.text).toContain("logo-rf-consulting-black.png");
    expect(response.text).toContain("logo-rf-consulting-white.png");
    expect(response.text).toContain("Be Strong Ministries");
    expect(response.text).toContain("facturaelectronica.click");
    expect(response.headers["x-content-type-options"]).toBe("nosniff");
    expect(response.headers["content-security-policy"]).toContain("default-src 'self'");
    expect(response.headers["content-security-policy"]).toMatch(/script-src 'self' 'nonce-[^']+'/);
    expect(response.headers["x-powered-by"]).toBeUndefined();
    expect(response.text).toContain('<link rel="canonical" href="https://www.rfcpty.com/">');
    expect(response.text).toContain('property="og:title"');
    expect(response.text).toContain('type="application/ld+json"');
  });

  it("redirige el dominio raíz hacia el host canónico www", async () => {
    const response = await request(createApp()).get("/blog?origen=legacy").set("Host", "rfcpty.com");
    expect(response.status).toBe(301);
    expect(response.headers.location).toBe("https://www.rfcpty.com/blog?origen=legacy");
  });

  it("no marca assets sin fingerprint como inmutables", () => {
    expect(getAssetCacheOptions("production")).toEqual({ immutable: false, maxAge: "1h", fallthrough: false });
  });

  it("expone una señal de salud mínima", async () => {
    const response = await request(createApp()).get("/salud");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ status: "ok" });
  });

  it("publica un sitemap XML con las rutas canónicas indexables", async () => {
    const response = await request(createApp()).get("/sitemap.xml");
    expect(response.status).toBe(200);
    expect(response.type).toContain("application/xml");
    expect(response.text).toContain("https://www.rfcpty.com/especialidades/sistemas-empresariales");
    expect(response.text).toContain("https://www.rfcpty.com/blog/sociedades-de-emprendimiento-en-panama");
    expect(response.text).toContain("https://www.rfcpty.com/politica-de-privacidad");
    expect(response.text).not.toContain("/salud");
    expect(response.text).not.toContain("/privacidad</loc>");
  });

  it("publica robots.txt con acceso general y referencia al sitemap", async () => {
    const response = await request(createApp()).get("/robots.txt");
    expect(response.status).toBe(200);
    expect(response.type).toContain("text/plain");
    expect(response.text).toContain("User-agent: *");
    expect(response.text).toContain("Sitemap: https://www.rfcpty.com/sitemap.xml");
  });

  it.each([
    ["/software_y_sistemas_empresariales", "/especialidades/sistemas-empresariales"],
    ["/5-errores-comunes-en-soporte", "/blog/errores-comunes-soporte-tecnico-empresarial"],
    ["/facturador-gratuito-dgi", "https://facturaelectronica.click/facturador-gratuito-dgi/"]
  ])("redirige la URL histórica %s", async (from, to) => {
    const response = await request(createApp()).get(from);
    expect(response.status).toBe(301);
    expect(response.headers.location).toBe(to);
  });

  it("responde 410 para contenido histórico retirado sin reemplazo", async () => {
    const response = await request(createApp()).get("/productos");
    expect(response.status).toBe(410);
    expect(response.text).toContain("Contenido retirado");
  });

  it("renderiza Nosotros con contenido curado del WXR", async () => {
    const response = await request(createApp()).get("/nosotros");

    expect(response.status).toBe(200);
    expect(response.text).toContain("Somos una empresa panameña");
    expect(response.text).toContain("Diagnóstico con propósito");
    expect(response.text).toContain("Formación continua");
    expect(response.text).not.toContain("más de 50 empresas");
    expect(response.text).not.toContain("elementor");
  });

  it("renderiza el índice de especialidades y enlaza sus cuatro detalles", async () => {
    const response = await request(createApp()).get("/especialidades");

    expect(response.status).toBe(200);
    expect(response.text).toContain("Cuatro capacidades. Un mismo criterio.");
    expect(response.text).toContain("/especialidades/sistemas-empresariales");
    expect(response.text).toContain("/especialidades/integraciones-automatizacion");
    expect(response.text).toContain("/especialidades/desarrollo-software");
    expect(response.text).toContain("/especialidades/soporte-tecnologico");
  });

  it.each([
    ["sistemas-empresariales", "Diagnóstico funcional"],
    ["integraciones-automatizacion", "API y conectores"],
    ["desarrollo-software", "Implementación incremental"],
    ["soporte-tecnologico", "Soporte presencial"]
  ])("renderiza la especialidad %s", async (slug, expectedContent) => {
    const response = await request(createApp()).get(`/especialidades/${slug}`);
    expect(response.status).toBe(200);
    expect(response.text).toContain(expectedContent);
    expect(response.text).toContain("Resultado buscado");
  });

  it("no convierte slugs desconocidos en especialidades silenciosas", async () => {
    const response = await request(createApp()).get("/especialidades/desconocida");
    expect(response.status).toBe(404);
  });

  it("renderiza el índice de servicios web y enlaza sus cuatro detalles", async () => {
    const response = await request(createApp()).get("/servicios-web");

    expect(response.status).toBe(200);
    expect(response.text).toContain("Una presencia digital con base empresarial.");
    expect(response.text).toContain("/servicios-web/dominios");
    expect(response.text).toContain("/servicios-web/correo-corporativo");
    expect(response.text).toContain("/servicios-web/hosting");
    expect(response.text).toContain("/servicios-web/diseno-desarrollo-web");
    expect(response.text).toContain('href="#proyectos"');
    expect(response.text).toContain('href="#aplicaciones"');
    expect(response.text).toContain("Plataforma Psicoeducándonos");
  });

  it("agrupa proyectos y aplicaciones bajo Servicios web en la navegación", async () => {
    const response = await request(createApp()).get("/nosotros");
    const navigation = response.text.match(/<nav class="main-navigation"[\s\S]*?<\/nav>/)?.[0] ?? "";
    expect(navigation).toContain('href="/servicios-web"');
    expect(navigation).not.toContain('href="/proyectos"');
    expect(navigation).not.toContain('href="/aplicaciones-web"');

    const projectPage = await request(createApp()).get("/proyectos");
    expect(projectPage.text).toContain('href="/servicios-web" aria-current="page"');
  });

  it.each([
    ["dominios", "Configuración DNS"],
    ["correo-corporativo", "Migración acompañada"],
    ["hosting", "Seguridad y respaldo"],
    ["diseno-desarrollo-web", "Diseño de experiencia"]
  ])("renderiza el servicio web %s", async (slug, expectedContent) => {
    const response = await request(createApp()).get(`/servicios-web/${slug}`);
    expect(response.status).toBe(200);
    expect(response.text).toContain(expectedContent);
    expect(response.text).toContain("Resultado buscado");
  });

  it("responde 404 para un servicio web desconocido", async () => {
    const response = await request(createApp()).get("/servicios-web/desconocido");
    expect(response.status).toBe(404);
  });

  it("publica el portafolio con los cinco proyectos suministrados", async () => {
    const response = await request(createApp()).get("/proyectos");

    expect(response.status).toBe(200);
    expect(response.text).toContain("https://bestrongministries.com/");
    expect(response.text).toContain("https://bbrothersautomotiveusa.com/");
    expect(response.text).toContain("https://facturaelectronica.click/");
    expect(response.text).toContain("https://psicoeducandonos.org/");
    expect(response.text).toContain("https://diosadmirablepanama.com/");
    expect(response.text.match(/rel="external noopener"/g)).toHaveLength(5);
  });

  it("incluye el portafolio completo dentro de Servicios Web", async () => {
    const response = await request(createApp()).get("/servicios-web");
    expect(response.status).toBe(200);
    expect(response.text).toContain("Webs con propósitos diferentes.");
    expect(response.text).toContain("Psicoeducándonos");
    expect(response.text).toContain("Dios Admirable Panamá");
  });

  it("presenta aplicaciones web y el caso público de Psicoeducándonos", async () => {
    const response = await request(createApp()).get("/aplicaciones-web");

    expect(response.status).toBe(200);
    expect(response.text).toContain("Software que acompaña un proceso");
    expect(response.text).toContain("Acceso y perfiles");
    expect(response.text).toContain("Plataforma Psicoeducándonos");
    expect(response.text).toContain("https://psicoeducandonos.org/login.html");
    expect(response.text).toContain("rel=" + '"external noopener"');
  });

  it("renderiza el centro de conocimiento con artículos revisados", async () => {
    const response = await request(createApp()).get("/blog");

    expect(response.status).toBe(200);
    expect(response.text).toContain("Ideas útiles para decisiones reales.");
    expect(response.text).toContain("/blog/errores-comunes-soporte-tecnico-empresarial");
    expect(response.text).toContain("/blog/optimizar-rendimiento-pc-empresa");
    expect(response.text).toContain("/blog/sociedades-de-emprendimiento-en-panama");
  });

  it.each([
    ["errores-comunes-soporte-tecnico-empresarial", "Resolver sin documentar"],
    ["optimizar-rendimiento-pc-empresa", "Protege la información primero"],
    ["sociedades-de-emprendimiento-en-panama", "Fuentes oficiales consultadas"]
  ])("renderiza el artículo %s", async (slug, expectedContent) => {
    const response = await request(createApp()).get(`/blog/${slug}`);
    expect(response.status).toBe(200);
    expect(response.text).toContain(expectedContent);
    expect(response.text).toContain("Contenido revisado");
  });

  it("incluye fuentes y advertencia en el artículo legal", async () => {
    const response = await request(createApp()).get("/blog/sociedades-de-emprendimiento-en-panama");
    expect(response.text).toContain("No constituye asesoría legal, fiscal ni contable");
    expect(response.text).toContain("ampyme.gob.pa");
    expect(response.text).toContain("gacetaoficial.gob.pa");
  });

  it("responde 404 para un artículo desconocido", async () => {
    const response = await request(createApp()).get("/blog/desconocido");
    expect(response.status).toBe(404);
  });

  it("renderiza Contacto con canales confirmados y explicación de entrega", async () => {
    const response = await request(createApp()).get("/contacto");
    expect(response.status).toBe(200);
    expect(response.text).toContain("+507 6155-5815");
    expect(response.text).toContain("ventas@rfcpty.com");
    expect(response.text).toContain("soporte@rfcpty.com");
    expect(response.text).toContain("Soporte para clientes");
    expect(response.text).toContain("no almacena ni envía datos automáticamente");
    expect(response.text).toContain('href="/politica-de-privacidad"');
  });

  it("publica una política de privacidad ajustada al comportamiento real del sitio", async () => {
    const response = await request(createApp()).get("/politica-de-privacidad");
    expect(response.status).toBe(200);
    expect(response.text).toContain("Ley 81 de 2019");
    expect(response.text).toContain("Decreto Ejecutivo 285 de 2021");
    expect(response.text).toContain("soporte@rfcpty.com");
    expect(response.text).toContain("no se conserva en una base de datos del sitio");
    expect(response.text).toContain("derechos ARCO");
    expect(response.text).not.toContain("Gravatar");
    expect(response.text).not.toContain("ISO/IEC 27001");
  });

  it("redirige el alias corto a la URL canónica de privacidad", async () => {
    const response = await request(createApp()).get("/privacidad");
    expect(response.status).toBe(301);
    expect(response.headers.location).toBe("/politica-de-privacidad");
  });

  it("rechaza una consulta incompleta sin generar enlaces de envío", async () => {
    const response = await request(createApp()).post("/contacto").type("form").send({ name: "A", email: "incorrecto" });
    expect(response.status).toBe(422);
    expect(response.text).toContain("Revisa la información marcada");
    expect(response.text).not.toContain("Abrir WhatsApp");
  });

  it("prepara una consulta válida para WhatsApp y correo sin almacenarla", async () => {
    const response = await request(createApp()).post("/contacto").type("form").send({
      name: "Ana Pérez",
      company: "Empresa de prueba",
      email: "ana@example.com",
      phone: "+507 6000-0000",
      service: "integraciones",
      message: "Necesitamos conectar ventas con nuestro sistema administrativo.",
      consent: "yes",
      website: ""
    });
    expect(response.status).toBe(200);
    expect(response.text).toContain("Consulta preparada");
    expect(response.text).toContain("Abrir WhatsApp");
    expect(response.text).toContain("mailto:ventas@rfcpty.com");
  });

  it("neutraliza el honeypot aunque los demás datos sean válidos", () => {
    const result = prepareContact({ name: "Bot válido", email: "bot@example.com", service: "web", message: "Mensaje suficientemente largo para validar.", consent: "yes", website: "spam.example" });
    expect(result.errors.form).toBeDefined();
    expect(result.whatsappUrl).toBeUndefined();
  });

  it("responde con una página 404 accesible", async () => {
    const response = await request(createApp()).get("/ruta-inexistente");
    expect(response.status).toBe(404);
    expect(response.text).toContain("Esta página no está disponible.");
    expect(response.text).toContain("Volver al inicio");
  });
});
