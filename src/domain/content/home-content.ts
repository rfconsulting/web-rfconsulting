export interface Link {
  readonly label: string;
  readonly href: string;
}

export interface Specialty {
  readonly number: string;
  readonly title: string;
  readonly description: string;
  readonly capabilities: readonly string[];
  readonly link: Link;
}

export interface ProcessStep {
  readonly number: string;
  readonly title: string;
  readonly description: string;
}

export interface ArticlePreview {
  readonly category: string;
  readonly title: string;
  readonly summary: string;
  readonly href: string;
  readonly readingTime: string;
}

export interface HomeContent {
  readonly meta: {
    readonly title: string;
    readonly description: string;
  };
  readonly hero: {
    readonly eyebrow: string;
    readonly title: string;
    readonly description: string;
    readonly primaryAction: Link;
    readonly secondaryAction: Link;
  };
  readonly specialties: readonly Specialty[];
  readonly process: readonly ProcessStep[];
  readonly articles: readonly ArticlePreview[];
}

export const homeContent: HomeContent = {
  meta: {
    title: "RF Consulting | Tecnología empresarial en Panamá",
    description:
      "Consultoría, sistemas empresariales, integraciones, desarrollo y soporte tecnológico para empresas en Panamá."
  },
  hero: {
    eyebrow: "Consultoría y soluciones tecnológicas para empresas",
    title: "Tecnología empresarial que funciona con tu operación.",
    description:
      "Seleccionamos, integramos, implementamos y mantenemos sistemas que ayudan a tu empresa a trabajar con más claridad y continuidad.",
    primaryAction: { label: "Solicitar un diagnóstico", href: "/contacto" },
    secondaryAction: { label: "Explorar especialidades", href: "#especialidades" }
  },
  specialties: [
    {
      number: "01",
      title: "Sistemas empresariales",
      description:
        "Organiza ventas, inventario, contabilidad y administración alrededor de una operación más confiable.",
      capabilities: ["ERP y sistemas administrativos", "Contabilidad e inventario", "Implementación y capacitación"],
      link: { label: "Explorar sistemas empresariales", href: "/especialidades/sistemas-empresariales" }
    },
    {
      number: "02",
      title: "Integraciones y automatización",
      description:
        "Conecta herramientas y reduce el trabajo repetitivo sin reemplazar procesos que ya aportan valor.",
      capabilities: ["API y conectores", "Automatización de procesos", "Flujos entre plataformas"],
      link: { label: "Evaluar una integración", href: "/especialidades/integraciones-automatizacion" }
    },
    {
      number: "03",
      title: "Desarrollo de software",
      description:
        "Construye soluciones enfocadas cuando un producto estándar no responde a las necesidades de tu empresa.",
      capabilities: ["Aplicaciones empresariales", "Soluciones web", "Evolución de sistemas"],
      link: { label: "Conversar sobre un proyecto", href: "/especialidades/desarrollo-software" }
    },
    {
      number: "04",
      title: "Soporte tecnológico",
      description:
        "Mantén la continuidad de tu operación con atención remota, presencial y respuesta para incidentes críticos.",
      capabilities: ["Soporte remoto", "Atención presencial", "Continuidad operativa"],
      link: { label: "Ver opciones de soporte", href: "/especialidades/soporte-tecnologico" }
    }
  ],
  process: [
    { number: "01", title: "Comprender", description: "Estudiamos la operación, el problema y las restricciones antes de recomendar." },
    { number: "02", title: "Diseñar", description: "Comparamos alternativas y definimos una solución con alcance y criterios claros." },
    { number: "03", title: "Implementar", description: "Configuramos, integramos o construimos en incrementos verificables." },
    { number: "04", title: "Evolucionar", description: "Acompañamos la operación, medimos resultados y priorizamos mejoras." }
  ],
  articles: [
    {
      category: "Soporte e infraestructura",
      title: "Cinco errores comunes en soporte técnico empresarial",
      summary: "Cómo reducir interrupciones, improvisación y costos evitables en la atención tecnológica.",
      href: "/blog/errores-comunes-soporte-tecnico-empresarial",
      readingTime: "6 min de lectura"
    },
    {
      category: "Tecnología para empresas",
      title: "Cómo optimizar el rendimiento de tu equipo de trabajo",
      summary: "Una guía práctica para identificar lentitud antes de reemplazar computadoras o software.",
      href: "/blog/optimizar-rendimiento-pc-empresa",
      readingTime: "5 min de lectura"
    },
    {
      category: "Negocios y tecnología",
      title: "Sociedades de emprendimiento en Panamá",
      summary: "Qué conviene revisar al formalizar una empresa y preparar su base tecnológica.",
      href: "/blog/sociedades-de-emprendimiento-en-panama",
      readingTime: "8 min de lectura"
    }
  ]
};

