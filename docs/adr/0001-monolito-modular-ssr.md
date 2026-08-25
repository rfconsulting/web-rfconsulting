# ADR-0001: monolito modular con renderizado SSR

- Estado: aceptado
- Fecha: 25 de agosto de 2026
- Responsables: RF Consulting

## Contexto

RFCPTY necesita una presencia institucional rápida, indexable, accesible y
mantenible por un equipo pequeño. El alcance actual es mayoritariamente de
lectura, con un formulario que prepara una comunicación sin persistencia.

## Decisión

Se adopta Node.js 24 LTS, TypeScript estricto, Express 5 y Nunjucks dentro de un
monolito modular con HTML renderizado en servidor. El JavaScript del navegador
se limita a mejoras progresivas. El contenido permanece estructurado detrás de
objetos de dominio para permitir sustituir su fuente por consultas y
repositorios sin reescribir las vistas.

## Consecuencias

- El contenido público funciona sin depender de una SPA.
- Rutas, seguridad HTTP y SEO se controlan en una única aplicación.
- La implementación actual no autoriza por sí misma MySQL, CMS, autenticación o
  analítica; cada ampliación requiere su propia decisión y modelo de amenazas.
- El build debe compilar TypeScript y copiar vistas y activos al artefacto.

## Alternativas consideradas

- WordPress: descartado para la nueva base por el acoplamiento y contenido
  heredado que el proyecto busca normalizar.
- SPA: descartada porque añade ejecución cliente sin aportar valor proporcional
  al sitio institucional.
- Microservicios: descartados por complejidad operativa injustificada.
