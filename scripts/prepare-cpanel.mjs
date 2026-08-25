import { cp, mkdir, rm } from "node:fs/promises";
import path from "node:path";

const releaseRoot = path.resolve("release", "cpanel");

await rm(releaseRoot, { recursive: true, force: true });
await mkdir(releaseRoot, { recursive: true });

await Promise.all([
  cp(path.resolve("dist"), path.join(releaseRoot, "dist"), { recursive: true }),
  cp(path.resolve("app.js"), path.join(releaseRoot, "app.js")),
  cp(path.resolve("package.json"), path.join(releaseRoot, "package.json")),
  cp(path.resolve("package-lock.json"), path.join(releaseRoot, "package-lock.json"))
]);

console.log(`Paquete cPanel preparado en ${releaseRoot}`);
