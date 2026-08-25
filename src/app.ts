import path from "node:path";
import { fileURLToPath } from "node:url";
import express, { type Express } from "express";
import nunjucks from "nunjucks";
import { securityHeaders } from "./web/middleware/security-headers.js";
import { createPublicRouter } from "./web/routes/public-routes.js";

const currentDirectory = path.dirname(fileURLToPath(import.meta.url));

export function createApp(): Express {
  const app = express();
  const viewsDirectory = path.join(currentDirectory, "web", "views");
  const publicDirectory = path.join(currentDirectory, "web", "public");

  app.disable("x-powered-by");
  app.set("view engine", "njk");

  nunjucks.configure(viewsDirectory, {
    autoescape: true,
    express: app,
    noCache: process.env.NODE_ENV !== "production"
  });

  app.use(securityHeaders);
  app.use(express.urlencoded({ extended: false, limit: "20kb" }));
  app.use(
    "/assets",
    express.static(publicDirectory, {
      immutable: process.env.NODE_ENV === "production",
      maxAge: process.env.NODE_ENV === "production" ? "1y" : 0,
      fallthrough: false
    })
  );
  app.use(createPublicRouter());

  app.use((_request, response) => {
    response.status(404).render("pages/not-found.njk", {
      page: {
        meta: {
          title: "Página no encontrada | RF Consulting",
          description: "La página solicitada no está disponible."
        }
      },
      currentPath: "",
      currentYear: new Date().getFullYear()
    });
  });

  return app;
}
