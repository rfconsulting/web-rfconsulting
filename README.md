# RFCPTY — sitio institucional de RF Consulting

Aplicación web SSR para la presencia institucional y comercial de
[www.rfcpty.com](https://www.rfcpty.com). Presenta la empresa, sus especialidades,
servicios web, proyectos, aplicaciones, conocimiento y canales de contacto.

El proyecto sigue el enfoque *engineering first* del
[AI-Assisted Software Engineering Playbook](https://github.com/rfconsulting/AI-Assisted-Software-Engineering-Playbook):
comprender el dominio, explicitar restricciones, implementar en incrementos y
validar cada entrega con evidencia.

## Estado del proyecto

**Fase actual:** implementación funcional en validación previa a producción.

El sitio público, la política de privacidad, el sitemap, robots.txt y las
pruebas HTTP están implementados. Permanecen fuera de este incremento un CMS,
base de datos, analítica, autenticación pública y entrega automática del
formulario.

## Funcionalidad

- Home institucional y página Nosotros.
- Cuatro especialidades con páginas de detalle.
- Servicios de dominios, correo corporativo, hosting y desarrollo web.
- Proyectos y aplicaciones dentro de la jerarquía de Servicios web, con vistas
  ampliadas que conservan profundidad y URLs existentes.
- Centro de conocimiento con tres artículos revisados.
- Contacto comercial mediante `ventas@rfcpty.com` y soporte para clientes en
  `soporte@rfcpty.com`.
- Formulario validado en servidor que prepara enlaces para WhatsApp o correo;
  no almacena ni envía datos automáticamente.
- Política de privacidad basada en el comportamiento actual del sistema.
- `/sitemap.xml`, `/robots.txt`, `/salud`, página 404 y cabeceras de seguridad.

## Stack

- Node.js 24 LTS y TypeScript estricto.
- Express 5 y Nunjucks para renderizado SSR.
- HTML semántico, CSS responsive y JavaScript progresivo sin framework cliente.
- Vitest y Supertest para pruebas automatizadas.

## Estructura

```text
src/
  application/       Casos de uso y validación de entradas
  config/            Configuración del entorno
  domain/content/    Contenido estructurado y catálogo de URLs
  web/
    middleware/      Controles HTTP
    public/          CSS, JavaScript e imágenes publicados
    routes/          Rutas públicas
    views/           Layouts, páginas y parciales Nunjucks
docs/                Decisiones, alcance y especificaciones por iteración
scripts/             Preparación del artefacto de distribución
tests/               Pruebas HTTP y de aplicación
```

## Desarrollo local

Requisitos: Node.js 22 LTS o una versión posterior compatible hasta Node.js 24,
y npm.

```bash
npm install
npm run dev
```

El sitio queda disponible por defecto en `http://localhost:3000`.

| Variable | Valor por defecto | Propósito |
|---|---|---|
| `NODE_ENV` | `development` | Entorno de ejecución |
| `PORT` | `3000` | Puerto HTTP |
| `PUBLIC_ORIGIN` | `http://localhost:PORT` | Origen mostrado al iniciar |

Usa [.env.example](.env.example) como referencia. La aplicación no carga
archivos `.env` por sí sola; las variables deben ser proporcionadas por el
entorno de ejecución o por la herramienta de desarrollo.

## Comandos

```bash
npm run dev        # servidor con recarga
npm run typecheck  # validación estática
npm test           # pruebas automatizadas
npm run build      # compila y copia vistas/assets a dist
npm run package:cpanel # prepara release/cpanel para Passenger
npm start          # ejecuta el artefacto compilado
npm run check      # typecheck + pruebas + build
```

Antes de entregar un cambio debe completarse `npm run check`.

## Rutas públicas

| Área | Rutas |
|---|---|
| Institucional | `/`, `/nosotros`, `/contacto` |
| Especialidades | `/especialidades`, `/especialidades/:slug` |
| Servicios web | `/servicios-web`, `/servicios-web/:slug` |
| Vistas ampliadas | `/proyectos`, `/aplicaciones-web` |
| Conocimiento | `/blog`, `/blog/:slug` |
| Legal y descubrimiento | `/politica-de-privacidad`, `/sitemap.xml`, `/robots.txt` |
| Operación | `/salud` |

`/privacidad` redirige permanentemente hacia la ruta legal canónica. Las rutas
técnicas, alias y errores no se publican en el sitemap.

## Documentación

- [Modelo de negocio](docs/01-modelo-de-negocio.md)
- [Alcance del proyecto](docs/02-alcance-del-proyecto.md)
- [Stack y arquitectura](docs/03-stack-y-arquitectura.md)
- [Identidad visual](docs/04-identidad-visual.md)
- [Iteración del home](docs/05-especificacion-iteracion-home.md)
- [Política de privacidad](docs/10-especificacion-iteracion-privacidad.md)
- [Indexación técnica](docs/11-especificacion-iteracion-indexacion.md)
- [Jerarquía de Servicios web](docs/12-especificacion-iteracion-navegacion-servicios-web.md)
- [Matriz de redirecciones WordPress](docs/13-matriz-redirecciones-wordpress.md)
- [ADR-0001: monolito modular SSR](docs/adr/0001-monolito-modular-ssr.md)
- [ADR-0002: dominio canónico](docs/adr/0002-dominio-canonico.md)
- [Despliegue en cPanel](docs/14-despliegue-cpanel.md)

`migration/source/facturaelectrnicaenpanam.WordPress.2026-08-25.xml` se conserva
localmente como fuente histórica de migración, está ignorado por Git y no se
sirve en producción.

## Criterios operativos

- No afirmar cifras, certificaciones o alianzas sin evidencia verificable.
- Mantener dominio, cuentas, accesos y proveedores bajo control de la empresa.
- Actualizar la política de privacidad antes de introducir cookies, analítica,
  cuentas, almacenamiento de formularios o nuevos proveedores de datos.
- Incorporar cada nueva página indexable a `sitemapEntries`; las páginas basadas
  en catálogos se agregan automáticamente.
