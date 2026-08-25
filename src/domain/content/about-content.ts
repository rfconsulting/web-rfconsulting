export interface AboutValue {
  readonly number: string;
  readonly title: string;
  readonly description: string;
}

export interface AboutStep {
  readonly number: string;
  readonly title: string;
  readonly description: string;
  readonly outcome: string;
}

export interface AboutContent {
  readonly meta: {
    readonly title: string;
    readonly description: string;
  };
  readonly capabilities: readonly string[];
  readonly values: readonly AboutValue[];
  readonly process: readonly AboutStep[];
  readonly differentiators: readonly string[];
}

export const aboutContent: AboutContent = {
  meta: {
    title: "Nosotros | RF Consulting",
    description:
      "Conoce a RF Consulting, empresa panameña de soluciones tecnológicas empresariales, su método de trabajo y los valores que orientan cada proyecto."
  },
  capabilities: [
    "Consultoría en sistemas administrativos y contables",
    "Integraciones y Facturación Electrónica",
    "Desarrollo web y soluciones digitales",
    "Infraestructura y soporte tecnológico",
    "Formación y capacitación empresarial"
  ],
  values: [
    { number: "01", title: "Confianza", description: "Hacemos visible el alcance, las decisiones y el estado real de cada trabajo." },
    { number: "02", title: "Excelencia", description: "Cuidamos la calidad técnica y el resultado empresarial de cada entrega." },
    { number: "03", title: "Servicio", description: "Atendemos con cercanía, claridad y sentido de responsabilidad." },
    { number: "04", title: "Innovación", description: "Adoptamos soluciones modernas cuando resuelven una necesidad, no por moda." },
    { number: "05", title: "Integridad", description: "Actuamos con ética y comunicamos límites, riesgos y compromisos con honestidad." },
    { number: "06", title: "Formación continua", description: "Aprendemos, documentamos y compartimos conocimiento para dejar capacidad instalada." }
  ],
  process: [
    { number: "01", title: "Diagnóstico con propósito", description: "Escuchamos, preguntamos y analizamos cómo funciona hoy tu operación.", outcome: "Contexto compartido" },
    { number: "02", title: "Diseño adaptado", description: "Comparamos alternativas y proponemos una solución adecuada a tu realidad.", outcome: "Decisión fundamentada" },
    { number: "03", title: "Implementación guiada", description: "Configuramos, probamos y capacitamos en incrementos que pueden verificarse.", outcome: "Solución operativa" },
    { number: "04", title: "Soporte y evolución", description: "Damos seguimiento, mantenemos y priorizamos mejoras a partir de evidencia.", outcome: "Continuidad y aprendizaje" }
  ],
  differentiators: [
    "Acompañamiento de principio a fin",
    "Adaptación real a la operación y sus restricciones",
    "Soluciones integradas en lugar de productos aislados",
    "Tecnología con propósito y criterios explícitos",
    "Capacitación para que el conocimiento permanezca en la empresa"
  ]
};

