import { Router } from "express";
import { emptyContactValues, prepareContact } from "../../application/contact/prepare-contact.js";
import { aboutContent } from "../../domain/content/about-content.js";
import { findArticle, knowledgeIndex } from "../../domain/content/articles-content.js";
import { homeContent } from "../../domain/content/home-content.js";
import { featuredProjects, projectsPage } from "../../domain/content/projects-content.js";
import { findSpecialty, specialtiesIndex } from "../../domain/content/specialties-content.js";
import { findWebService, webServicesIndex } from "../../domain/content/web-services-content.js";
import { webApplicationsContent } from "../../domain/content/web-applications-content.js";
import { contactContent } from "../../domain/content/contact-content.js";
import { privacyContent } from "../../domain/content/privacy-content.js";
import { createRobotsTxt, createSitemapXml } from "../../domain/content/search-index.js";

export function createPublicRouter(): Router {
  const router = Router();

  router.get("/sitemap.xml", (_request, response) => {
    response.type("application/xml").send(createSitemapXml());
  });

  router.get("/robots.txt", (_request, response) => {
    response.type("text/plain").send(createRobotsTxt());
  });

  router.get("/", (_request, response) => {
    response.render("pages/home.njk", {
      page: homeContent,
      projects: featuredProjects,
      currentPath: "/",
      currentYear: new Date().getFullYear()
    });
  });

  router.get("/nosotros", (_request, response) => {
    response.render("pages/about.njk", {
      page: aboutContent,
      currentPath: "/nosotros",
      currentYear: new Date().getFullYear()
    });
  });

  router.get("/especialidades", (_request, response) => {
    response.render("pages/specialties.njk", {
      page: specialtiesIndex,
      currentPath: "/especialidades",
      currentSection: "especialidades",
      currentYear: new Date().getFullYear()
    });
  });

  router.get("/especialidades/:slug", (request, response, next) => {
    const specialty = findSpecialty(request.params.slug);
    if (!specialty) {
      next();
      return;
    }

    response.render("pages/specialty-detail.njk", {
      page: specialty,
      currentPath: `/especialidades/${specialty.slug}`,
      currentSection: "especialidades",
      currentYear: new Date().getFullYear()
    });
  });

  router.get("/servicios-web", (_request, response) => {
    response.render("pages/web-services.njk", {
      page: webServicesIndex,
      projects: projectsPage.items,
      applications: webApplicationsContent,
      currentPath: "/servicios-web",
      currentSection: "servicios-web",
      currentYear: new Date().getFullYear()
    });
  });

  router.get("/servicios-web/:slug", (request, response, next) => {
    const service = findWebService(request.params.slug);
    if (!service) {
      next();
      return;
    }

    response.render("pages/web-service-detail.njk", {
      page: service,
      currentPath: `/servicios-web/${service.slug}`,
      currentSection: "servicios-web",
      currentYear: new Date().getFullYear()
    });
  });

  router.get("/proyectos", (_request, response) => {
    response.render("pages/projects.njk", {
      page: projectsPage,
      currentPath: "/proyectos",
      currentSection: "servicios-web",
      currentYear: new Date().getFullYear()
    });
  });

  router.get("/aplicaciones-web", (_request, response) => {
    response.render("pages/web-applications.njk", {
      page: webApplicationsContent,
      currentPath: "/aplicaciones-web",
      currentSection: "servicios-web",
      currentYear: new Date().getFullYear()
    });
  });

  router.get("/blog", (_request, response) => {
    response.render("pages/knowledge.njk", {
      page: knowledgeIndex,
      currentPath: "/blog",
      currentSection: "blog",
      currentYear: new Date().getFullYear()
    });
  });

  router.get("/blog/:slug", (request, response, next) => {
    const article = findArticle(request.params.slug);
    if (!article) {
      next();
      return;
    }

    response.render("pages/article.njk", {
      page: article,
      currentPath: `/blog/${article.slug}`,
      currentSection: "blog",
      currentYear: new Date().getFullYear()
    });
  });

  router.get("/contacto", (_request, response) => {
    response.render("pages/contact.njk", {
      page: contactContent,
      values: emptyContactValues(),
      errors: {},
      currentPath: "/contacto",
      currentSection: "contacto",
      currentYear: new Date().getFullYear()
    });
  });

  router.post("/contacto", (request, response) => {
    const result = prepareContact(request.body);
    const isPrepared = Boolean(result.whatsappUrl && result.emailUrl);

    response.status(isPrepared ? 200 : 422).render("pages/contact.njk", {
      page: contactContent,
      ...result,
      isPrepared,
      currentPath: "/contacto",
      currentSection: "contacto",
      currentYear: new Date().getFullYear()
    });
  });

  router.get("/privacidad", (_request, response) => {
    response.redirect(301, "/politica-de-privacidad");
  });

  router.get("/politica-de-privacidad", (_request, response) => {
    response.render("pages/privacy.njk", {
      page: privacyContent,
      currentPath: "/politica-de-privacidad",
      currentYear: new Date().getFullYear()
    });
  });

  router.get("/salud", (_request, response) => {
    response.status(200).json({ status: "ok" });
  });

  return router;
}
