# ADR-0002: `www.rfcpty.com` como dominio canónico

- Estado: aceptado
- Fecha: 25 de agosto de 2026
- Responsables: RF Consulting

## Decisión

`https://www.rfcpty.com` es el único origen canónico público. Las solicitudes a
`rfcpty.com` reciben una redirección permanente `301` que conserva ruta y query.
Sitemap, robots.txt, etiquetas canonical, OpenGraph y datos estructurados usan
el mismo origen.

## Consecuencias operativas

- DNS y TLS deben cubrir ambos hosts.
- El proxy debe conservar el host original al entregar solicitudes a Express.
- No se debe servir contenido `200` equivalente desde ambos hosts.
