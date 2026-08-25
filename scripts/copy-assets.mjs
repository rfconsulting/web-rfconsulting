import { cp, mkdir } from "node:fs/promises";
import path from "node:path";

const sourceRoot = path.resolve("src", "web");
const destinationRoot = path.resolve("dist", "web");

await mkdir(destinationRoot, { recursive: true });
await Promise.all([
  cp(path.join(sourceRoot, "views"), path.join(destinationRoot, "views"), {
    recursive: true
  }),
  cp(path.join(sourceRoot, "public"), path.join(destinationRoot, "public"), {
    recursive: true
  })
]);

