# Iteración: indexación técnica

## Objetivo

Facilitar el descubrimiento de las páginas públicas de `https://www.rfcpty.com` por motores de búsqueda sin exponer rutas técnicas ni URLs duplicadas.

## Alcance implementado

- `GET /sitemap.xml` con las páginas públicas y sus URLs canónicas absolutas.
- `GET /robots.txt` con acceso general y referencia al sitemap.
- Generación de detalles a partir de los mismos catálogos de especialidades, servicios web y artículos utilizados por el sitio.
- Fecha `lastmod` expresada en formato ISO 8601 (`YYYY-MM-DD`).

## Exclusiones deliberadas

- `/salud`, porque es una ruta técnica.
- `/privacidad`, porque redirige hacia `/politica-de-privacidad`.
- Páginas 404, archivos estáticos y rutas dinámicas inexistentes.
- `changefreq` y `priority`, porque no aportan una señal verificable sobre el contenido real.

## Operación

Al agregar una página pública estática debe incorporarse a `sitemapEntries`. Los detalles basados en catálogos se incorporan automáticamente cuando se añade un nuevo elemento a su fuente de contenido.
