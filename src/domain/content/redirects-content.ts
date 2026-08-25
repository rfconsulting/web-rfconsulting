export interface LegacyRedirect {
  readonly from: string;
  readonly to: string;
  readonly reason: string;
}

export const legacyRedirects: readonly LegacyRedirect[] = [
  { from: "/inicio", to: "/", reason: "Portada anterior" },
  { from: "/inicio-2", to: "/", reason: "Portada anterior duplicada" },
  { from: "/soluciones-tecnologicas-empresariales-2", to: "/", reason: "Portada institucional anterior" },
  { from: "/software_y_sistemas_empresariales", to: "/especialidades/sistemas-empresariales", reason: "Servicio equivalente" },
  { from: "/software-y-sistemas-empresariales", to: "/especialidades/sistemas-empresariales", reason: "Variante legible del slug anterior" },
  { from: "/soporte-tecnico-empresarial", to: "/especialidades/soporte-tecnologico", reason: "Servicio equivalente" },
  { from: "/5-errores-comunes-en-soporte", to: "/blog/errores-comunes-soporte-tecnico-empresarial", reason: "Artículo reeditado" },
  { from: "/%f0%9f%8e%89-astra-4-11-0-una-experiencia-de-personalizacion-renovada-y-mas-accesible", to: "/blog", reason: "Nota de producto obsoleta; se conserva contexto editorial" },
  { from: "/%f0%9f%9a%80-sociedades-de-emprendimiento-en-panama", to: "/blog/sociedades-de-emprendimiento-en-panama", reason: "Artículo reeditado" },
  { from: "/%e2%9a%a1-como-optimizar-el-rendimiento-de-tu-pc-sin-gastar-en-nuevo-hardware", to: "/blog/optimizar-rendimiento-pc-empresa", reason: "Artículo reeditado" },
  { from: "/diseno-de-sitio-web-startup", to: "/servicios-web/diseno-desarrollo-web", reason: "Servicio equivalente" }
] as const;

export const electronicInvoiceRedirects: readonly LegacyRedirect[] = [{
  from: "/facturador-gratuito-dgi",
  to: "https://facturaelectronica.click/facturador-gratuito-dgi/",
  reason: "Contenido trasladado al sitio especializado"
}];

export const goneLegacyPaths = ["/productos", "/productos-2"] as const;
