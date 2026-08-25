import { articles } from "./articles-content.js";
import { specialtyDetails } from "./specialties-content.js";
import { webServiceDetails } from "./web-services-content.js";

export const canonicalOrigin = "https://www.rfcpty.com";

const updatedAt = "2026-08-25";

export const sitemapEntries = [
  { path: "/", lastModified: updatedAt },
  { path: "/nosotros", lastModified: updatedAt },
  { path: "/especialidades", lastModified: updatedAt },
  ...specialtyDetails.map((specialty) => ({ path: `/especialidades/${specialty.slug}`, lastModified: updatedAt })),
  { path: "/servicios-web", lastModified: updatedAt },
  ...webServiceDetails.map((service) => ({ path: `/servicios-web/${service.slug}`, lastModified: updatedAt })),
  { path: "/proyectos", lastModified: updatedAt },
  { path: "/aplicaciones-web", lastModified: updatedAt },
  { path: "/blog", lastModified: updatedAt },
  ...articles.map((article) => ({ path: `/blog/${article.slug}`, lastModified: updatedAt })),
  { path: "/contacto", lastModified: updatedAt },
  { path: "/politica-de-privacidad", lastModified: updatedAt }
] as const;

export function createSitemapXml(): string {
  const urls = sitemapEntries
    .map(({ path, lastModified }) => `  <url>\n    <loc>${canonicalOrigin}${path}</loc>\n    <lastmod>${lastModified}</lastmod>\n  </url>`)
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

export function createRobotsTxt(): string {
  return `User-agent: *\nAllow: /\n\nSitemap: ${canonicalOrigin}/sitemap.xml\n`;
}
