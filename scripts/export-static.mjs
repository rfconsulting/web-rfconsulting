import { cp, mkdir, readdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createApp } from "../dist/app.js";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const output = path.join(root, "site");
const app = createApp();
const server = app.listen(0, "127.0.0.1");

await new Promise((resolve, reject) => {
  server.once("listening", resolve);
  server.once("error", reject);
});

try {
  const address = server.address();
  if (!address || typeof address === "string") throw new Error("No se pudo iniciar el exportador.");
  const origin = `http://127.0.0.1:${address.port}`;

  await mkdir(output, { recursive: true });
  for (const entry of await readdir(output)) {
    await rm(path.join(output, entry), { recursive: true, force: true });
  }
  await cp(path.join(root, "dist", "web", "public"), path.join(output, "assets"), {
    recursive: true
  });

  const sitemapResponse = await fetch(`${origin}/sitemap.xml`);
  const sitemap = await sitemapResponse.text();
  const paths = [...sitemap.matchAll(/<loc>https:\/\/www\.rfcpty\.com([^<]*)<\/loc>/g)]
    .map((match) => match[1] || "/");

  for (const route of paths) {
    const response = await fetch(`${origin}${route}`);
    if (!response.ok) throw new Error(`Error ${response.status} al exportar ${route}`);
    const html = (await response.text())
      .replace('action="/contacto" method="post"', 'action="#" method="post" data-contact-form');
    const directory = route === "/" ? output : path.join(output, route.slice(1));
    await mkdir(directory, { recursive: true });
    await writeFile(path.join(directory, "index.html"), html, "utf8");
  }

  const notFound = await fetch(`${origin}/pagina-no-existente`);
  await writeFile(path.join(output, "404.html"), await notFound.text(), "utf8");
  await writeFile(path.join(output, "sitemap.xml"), sitemap, "utf8");
  await writeFile(path.join(output, "robots.txt"), await (await fetch(`${origin}/robots.txt`)).text(), "utf8");
} finally {
  await new Promise((resolve) => server.close(resolve));
}
