export interface SpecialtyCapability {
  readonly title: string;
  readonly description: string;
}

export interface SpecialtyDetail {
  readonly slug: string;
  readonly number: string;
  readonly title: string;
  readonly eyebrow: string;
  readonly summary: string;
  readonly problem: string;
  readonly outcome: string;
  readonly capabilities: readonly SpecialtyCapability[];
  readonly idealFor: readonly string[];
  readonly steps: readonly string[];
  readonly related: readonly string[];
  readonly cta: string;
  readonly meta: {
    readonly title: string;
    readonly description: string;
  };
}

export const specialtyDetails: readonly SpecialtyDetail[] = [
  {
    slug: "sistemas-empresariales",
    number: "01",
    title: "Sistemas empresariales",
    eyebrow: "Control y continuidad operativa",
    summary: "Organiza ventas, inventario, contabilidad y administración alrededor de información más clara y procesos conectados.",
    problem: "Cuando cada área trabaja con herramientas aisladas, la empresa duplica tareas, pierde visibilidad y toma decisiones con información tardía.",
    outcome: "Un sistema alineado con la operación, acompañado por configuración, adopción y soporte.",
    capabilities: [
      { title: "Diagnóstico funcional", description: "Mapeamos procesos, responsables, datos y puntos de fricción antes de recomendar una plataforma." },
      { title: "Selección y configuración", description: "Comparamos alternativas y configuramos módulos administrativos, contables, comerciales y de inventario." },
      { title: "Migración e integración", description: "Planificamos la transición de datos y las conexiones necesarias sin interrumpir la operación innecesariamente." },
      { title: "Adopción y soporte", description: "Capacitamos a las personas usuarias y acompañamos la evolución después de la puesta en marcha." }
    ],
    idealFor: ["Empresas que superaron el control mediante hojas de cálculo", "Operaciones con información duplicada entre áreas", "Negocios que necesitan reemplazar o reorganizar su sistema actual", "Equipos que requieren acompañamiento durante la adopción"],
    steps: ["Comprender procesos y fuentes de verdad", "Evaluar alternativas y alcance", "Configurar, migrar y probar", "Capacitar, operar y evolucionar"],
    related: ["ERP y administración", "Contabilidad", "Inventario y ventas", "Reportes e integración"],
    cta: "Evaluar mi sistema actual",
    meta: { title: "Sistemas empresariales en Panamá | RF Consulting", description: "Consultoría, implementación e integración de sistemas administrativos, contables, de inventario y ventas para empresas en Panamá." }
  },
  {
    slug: "integraciones-automatizacion",
    number: "02",
    title: "Integraciones y automatización",
    eyebrow: "Sistemas que trabajan juntos",
    summary: "Conecta plataformas, reduce reprocesos y mueve información de forma controlada entre los sistemas de tu empresa.",
    problem: "Copiar datos manualmente entre aplicaciones aumenta tiempos, errores y dependencia de tareas que no aportan valor.",
    outcome: "Flujos trazables que conectan la operación sin reemplazar componentes que todavía funcionan bien.",
    capabilities: [
      { title: "Análisis de integración", description: "Identificamos fuentes, destinos, contratos de datos, frecuencia, excepciones y responsables." },
      { title: "API y conectores", description: "Implementamos conexiones con autenticación, validación, límites y manejo explícito de errores." },
      { title: "Automatización de procesos", description: "Transformamos tareas repetitivas en flujos observables con intervención humana donde aporta criterio." },
      { title: "Monitoreo y evolución", description: "Registramos fallos, medimos el comportamiento y ajustamos la integración conforme cambian los sistemas." }
    ],
    idealFor: ["Empresas que recapturan la misma información", "Procesos que dependen de exportar e importar archivos", "Operaciones con sistemas válidos pero desconectados", "Equipos que necesitan trazabilidad entre plataformas"],
    steps: ["Delimitar sistemas y datos", "Diseñar contratos y excepciones", "Implementar y probar extremos", "Observar y mejorar el flujo"],
    related: ["API", "Conectores", "Webhooks", "Automatización administrativa"],
    cta: "Evaluar una integración",
    meta: { title: "Integraciones y automatización | RF Consulting", description: "Diseño de API, conectores y automatización de procesos empresariales con validación, trazabilidad y soporte." }
  },
  {
    slug: "desarrollo-software",
    number: "03",
    title: "Desarrollo de software",
    eyebrow: "Soluciones enfocadas",
    summary: "Diseña y construye software cuando la necesidad de tu empresa no cabe correctamente en un producto estándar.",
    problem: "Forzar procesos particulares dentro de herramientas genéricas puede crear más excepciones, trabajo manual y dependencia que el problema original.",
    outcome: "Software mantenible y verificable, construido alrededor de un problema empresarial delimitado.",
    capabilities: [
      { title: "Descubrimiento y especificación", description: "Convertimos la necesidad en requisitos, restricciones y criterios de aceptación comprensibles." },
      { title: "Diseño de solución", description: "Evaluamos construir, comprar o integrar y documentamos las decisiones de mayor impacto." },
      { title: "Implementación incremental", description: "Entregamos cambios pequeños, revisables y respaldados por pruebas en lugar de una gran entrega opaca." },
      { title: "Operación y mantenimiento", description: "Preparamos despliegue, observabilidad, respaldo y evolución desde el diseño." }
    ],
    idealFor: ["Procesos diferenciadores sin una solución estándar adecuada", "Equipos que necesitan extender sistemas existentes", "Empresas con flujos internos que requieren trazabilidad", "Proyectos que necesitan evolución y mantenimiento responsable"],
    steps: ["Definir problema y resultado", "Diseñar arquitectura y límites", "Construir y validar incrementos", "Desplegar, observar y evolucionar"],
    related: ["Aplicaciones empresariales", "Portales y herramientas internas", "Servicios web", "Modernización e integración"],
    cta: "Conversar sobre un proyecto",
    meta: { title: "Desarrollo de software empresarial | RF Consulting", description: "Diseño y desarrollo de soluciones empresariales, integraciones y aplicaciones mantenibles alineadas con procesos reales." }
  },
  {
    slug: "soporte-tecnologico",
    number: "04",
    title: "Soporte tecnológico",
    eyebrow: "Continuidad para tu empresa",
    summary: "Atiende incidentes, mantiene infraestructura y reduce interrupciones con soporte remoto, presencial y atención prioritaria.",
    problem: "Resolver cada incidente de forma improvisada prolonga las interrupciones y evita reconocer problemas recurrentes.",
    outcome: "Atención clara, diagnóstico documentado y acciones orientadas a recuperar y proteger la operación.",
    capabilities: [
      { title: "Soporte remoto", description: "Diagnóstico y atención de software, configuración y fallos que pueden resolverse de forma segura a distancia." },
      { title: "Soporte presencial", description: "Atención en sitio para equipos, redes, impresoras, servidores y situaciones que requieren intervención física." },
      { title: "Incidentes críticos", description: "Priorización acordada para eventos que afectan procesos esenciales de la empresa." },
      { title: "Prevención y mejora", description: "Identificamos recurrencias, documentamos soluciones y recomendamos acciones de mantenimiento." }
    ],
    idealFor: ["Empresas que no cuentan con un equipo técnico interno completo", "Operaciones que necesitan atención remota y presencial", "Equipos con incidentes repetitivos sin documentación", "Negocios que requieren condiciones y prioridades claras"],
    steps: ["Registrar contexto e impacto", "Diagnosticar y acordar intervención", "Resolver y verificar el servicio", "Documentar y prevenir recurrencias"],
    related: ["Soporte remoto", "Atención presencial", "Redes e infraestructura", "Mantenimiento preventivo"],
    cta: "Solicitar soporte",
    meta: { title: "Soporte tecnológico empresarial en Panamá | RF Consulting", description: "Soporte técnico remoto y presencial, atención de incidentes e infraestructura para la continuidad de empresas en Panamá." }
  }
] as const;

export const specialtiesIndex = {
  meta: {
    title: "Especialidades tecnológicas | RF Consulting",
    description: "Sistemas empresariales, integraciones, desarrollo de software y soporte tecnológico para empresas en Panamá."
  },
  items: specialtyDetails
} as const;

export function findSpecialty(slug: string): SpecialtyDetail | undefined {
  return specialtyDetails.find((specialty) => specialty.slug === slug);
}

