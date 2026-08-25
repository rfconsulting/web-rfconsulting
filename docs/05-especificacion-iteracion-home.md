# Especificación de iteración 01 — estructura y presencia institucional

## Objetivo

Construir la base ejecutable del sitio, una portada SSR y la página institucional
Nosotros para representar la identidad, explicar las especialidades y ofrecer un
siguiente paso claro sin depender de WordPress, base de datos o JavaScript cliente
para el contenido.

## Alcance incluido

- Proyecto Node.js 24 LTS, TypeScript estricto, Express 5 y Nunjucks.
- Separación inicial de configuración, dominio de contenido, web y assets.
- Layout, navegación, footer, portada, Nosotros, especialidades, Servicios Web, aplicaciones web, portafolio, Conocimiento, Contacto y página 404.
- Health check operativo.
- Tokens y componentes visuales responsive.
- Navegación móvil progresiva y `prefers-reduced-motion`.
- Headers de seguridad iniciales.
- Pruebas de integración HTTP de home, salud y 404.

## Fuera de alcance

- CMS, autenticación, MySQL y migraciones.
- Entrega transaccional de formularios, CRM y analítica.
- Páginas internas enlazadas desde el home, salvo Nosotros, especialidades y Servicios Web.
- Archivo vectorial maestro, fotografías e iconos de terceros.
- Importación de contenido WordPress.
- Infraestructura y despliegue de producción.

Los enlaces internos no implementados forman parte de la arquitectura de
información aprobada y responderán 404 hasta sus respectivas iteraciones.

## Decisiones y restricciones

- El home se renderiza completamente en servidor.
- El contenido de esta iteración vive en un módulo tipado sustituible por un
  repositorio MySQL futuro.
- No se introduce un framework CSS ni una SPA.
- El header y el footer utilizan las variantes PNG negra y blanca suministradas;
  el archivo vectorial maestro continúa pendiente.
- No se publican cifras, clientes, testimonios, precios ni certificaciones sin evidencia.
- El gráfico principal se construye con HTML/CSS y no comunica datos reales.

## Casos de prueba

1. `GET /` responde 200, HTML, propuesta institucional y especialidades.
2. El HTML incorpora headers de seguridad y no revela Express.
3. `GET /salud` responde 200 con `{ "status": "ok" }`.
4. Una ruta desconocida responde 404 y ofrece regreso al inicio.
5. El proyecto supera tipos, pruebas y build con versiones fijadas.
6. La portada conserva orden y acceso funcional a 320 px, teclado y movimiento reducido.

## Riesgo

**Nivel:** medio. La mayor incertidumbre no es técnica sino visual/editorial:
faltan logotipo original, activos institucionales y aprobación humana del copy.

## Reversión

Esta iteración no modifica producción ni datos. Puede revertirse eliminando el
incremento completo antes de integrarlo. Una futura transición desde WordPress
tendrá un plan de rollback separado.

## Definition of Done

- Estructura y home implementados.
- Dependencias instaladas con lockfile.
- Typecheck, pruebas y build reproducibles.
- Revisión responsive y visual básica realizada.
- README actualizado con ejecución y límites.
- Decisiones provisionales identificadas como tales.
