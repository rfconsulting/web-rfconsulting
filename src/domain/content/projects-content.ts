export interface ProjectPreview {
  readonly number: string;
  readonly name: string;
  readonly sector: string;
  readonly description: string;
  readonly url: string;
  readonly domain: string;
  readonly tone: "blue" | "red" | "teal" | "violet" | "orange";
}

export const projects: readonly ProjectPreview[] = [
  {
    number: "01",
    name: "Be Strong Ministries",
    sector: "Ministerio y comunidad",
    description: "Presencia digital para comunicar la misión, organizar contenido y facilitar la conexión con su comunidad.",
    url: "https://bestrongministries.com/",
    domain: "bestrongministries.com",
    tone: "blue"
  },
  {
    number: "02",
    name: "BBrothers Automotive",
    sector: "Servicios automotrices",
    description: "Sitio comercial para presentar servicios de mantenimiento y reparación de vehículos y facilitar el contacto en Texas.",
    url: "https://bbrothersautomotiveusa.com/",
    domain: "bbrothersautomotiveusa.com",
    tone: "red"
  },
  {
    number: "03",
    name: "Factura Electrónica",
    sector: "Tecnología y cumplimiento fiscal",
    description: "Vertical de contenido especializado sobre Facturación Electrónica en Panamá, procesos, herramientas y orientación práctica.",
    url: "https://facturaelectronica.click/",
    domain: "facturaelectronica.click",
    tone: "teal"
  },
  {
    number: "04",
    name: "Psicoeducándonos",
    sector: "Educación y salud mental",
    description: "Plataforma educativa para presentar programas, acercar conocimiento de salud mental y ofrecer acceso a su comunidad formativa.",
    url: "https://psicoeducandonos.org/",
    domain: "psicoeducandonos.org",
    tone: "violet"
  },
  {
    number: "05",
    name: "Dios Admirable Panamá",
    sector: "Comunidad de fe",
    description: "Sitio institucional para comunicar enseñanza bíblica, vida en comunidad, discipulado y actividades de la organización.",
    url: "https://diosadmirablepanama.com/",
    domain: "diosadmirablepanama.com",
    tone: "orange"
  }
] as const;

export const projectsPage = {
  meta: {
    title: "Proyectos web desarrollados | RF Consulting",
    description: "Una selección de sitios y plataformas web desarrollados por RF Consulting para organizaciones de distintos sectores."
  },
  items: projects
} as const;

export const featuredProjects = projects.slice(0, 3);

