export interface WebServiceFeature {
  readonly title: string;
  readonly description: string;
}

export interface WebServiceDetail {
  readonly slug: string;
  readonly number: string;
  readonly title: string;
  readonly eyebrow: string;
  readonly summary: string;
  readonly problem: string;
  readonly outcome: string;
  readonly features: readonly WebServiceFeature[];
  readonly considerations: readonly string[];
  readonly steps: readonly string[];
  readonly cta: string;
  readonly meta: {
    readonly title: string;
    readonly description: string;
  };
}

export const webServiceDetails: readonly WebServiceDetail[] = [
  {
    slug: "dominios",
    number: "01",
    title: "Dominios",
    eyebrow: "La dirección de tu empresa en internet",
    summary: "Registra y administra el dominio empresarial con propiedad, renovación y configuración claramente documentadas.",
    problem: "Un dominio registrado sin control institucional, fechas visibles o accesos documentados puede convertirse en un riesgo para toda la presencia digital.",
    outcome: "Un dominio bajo control de la empresa, correctamente configurado y preparado para correo, web y futuros servicios.",
    features: [
      { title: "Búsqueda y registro", description: "Evaluamos alternativas de nombre y extensión de acuerdo con la marca y el uso previsto." },
      { title: "Configuración DNS", description: "Conectamos los registros necesarios para sitio web, correo y verificaciones de servicios." },
      { title: "Transferencia y orden", description: "Ayudamos a recuperar o trasladar dominios conservando accesos y continuidad." },
      { title: "Renovación documentada", description: "Definimos responsables, fechas y condiciones para reducir vencimientos accidentales." }
    ],
    considerations: ["El titular debe ser la persona o empresa que realmente controla la marca", "Los accesos no deben depender exclusivamente de un proveedor", "DNS, correo y hosting deben documentarse como servicios relacionados", "La renovación requiere responsable y canal de notificación válidos"],
    steps: ["Confirmar nombre y titular", "Registrar o transferir", "Configurar y verificar DNS", "Documentar propiedad y renovación"],
    cta: "Consultar por un dominio",
    meta: { title: "Registro y administración de dominios | RF Consulting", description: "Registro, transferencia, configuración DNS y administración de dominios empresariales con control y documentación." }
  },
  {
    slug: "correo-corporativo",
    number: "02",
    title: "Correo corporativo",
    eyebrow: "Comunicación con identidad empresarial",
    summary: "Organiza cuentas de correo con tu propio dominio, configuración segura y una transición comprensible para el equipo.",
    problem: "Usar cuentas personales o configuraciones no documentadas dificulta controlar accesos, identidad, continuidad y recuperación.",
    outcome: "Correo corporativo administrable, vinculado al dominio de la empresa y configurado para una entrega confiable.",
    features: [
      { title: "Diseño de cuentas", description: "Definimos usuarios, alias y buzones compartidos según las responsabilidades del equipo." },
      { title: "Configuración del dominio", description: "Aplicamos y verificamos los registros necesarios para identidad y entrega del correo." },
      { title: "Migración acompañada", description: "Planificamos el traslado de cuentas y mensajes según las capacidades del proveedor elegido." },
      { title: "Configuración y adopción", description: "Preparamos dispositivos, recuperación y orientaciones de uso para el equipo." }
    ],
    considerations: ["Cada persona debe usar una identidad individual cuando necesite trazabilidad", "El acceso requiere autenticación multifactor cuando el proveedor lo permita", "La recuperación debe pertenecer a la organización", "Retención, respaldo y archivo se definen según la necesidad real"],
    steps: ["Inventariar personas y cuentas", "Seleccionar servicio y plan", "Configurar dominio y migrar", "Verificar entrega y capacitar"],
    cta: "Organizar el correo empresarial",
    meta: { title: "Correo corporativo para empresas | RF Consulting", description: "Configuración, migración y soporte de correo corporativo con dominio propio para empresas en Panamá." }
  },
  {
    slug: "hosting",
    number: "03",
    title: "Hosting",
    eyebrow: "Infraestructura para una presencia disponible",
    summary: "Selecciona y opera alojamiento web de acuerdo con el tráfico, la aplicación, el soporte y el nivel de control que realmente necesitas.",
    problem: "Elegir hosting solo por precio o capacidad anunciada suele ocultar límites de soporte, respaldo, seguridad y crecimiento.",
    outcome: "Una base de alojamiento adecuada al sistema, con responsabilidades operativas y recuperación definidas.",
    features: [
      { title: "Evaluación técnica", description: "Revisamos aplicación, tráfico, almacenamiento, correo, base de datos y necesidades operativas." },
      { title: "Configuración y migración", description: "Preparamos el entorno y trasladamos el sitio mediante un plan verificable." },
      { title: "Seguridad y respaldo", description: "Acordamos TLS, actualizaciones, copias, retención y pruebas de restauración." },
      { title: "Operación y monitoreo", description: "Definimos salud, alertas, mantenimiento y responsabilidades entre las partes." }
    ],
    considerations: ["La arquitectura debe determinar el hosting, no al revés", "Un backup sin restauración probada no constituye recuperación", "Los accesos y secretos deben permanecer bajo control empresarial", "Disponibilidad, soporte y recuperación necesitan condiciones explícitas"],
    steps: ["Evaluar aplicación y operación", "Seleccionar arquitectura y proveedor", "Migrar y verificar", "Monitorear, respaldar y evolucionar"],
    cta: "Evaluar opciones de hosting",
    meta: { title: "Hosting y alojamiento web empresarial | RF Consulting", description: "Evaluación, migración y operación de hosting empresarial con seguridad, respaldo y responsabilidades claras." }
  },
  {
    slug: "diseno-desarrollo-web",
    number: "04",
    title: "Diseño y desarrollo web",
    eyebrow: "Una web que explica y convierte",
    summary: "Construye una presencia rápida, accesible y medible alrededor del negocio, no de una plantilla genérica.",
    problem: "Un sitio puede verse moderno y aun así no explicar la oferta, no generar confianza o depender de una plataforma difícil de mantener.",
    outcome: "Una experiencia web alineada con la marca, el contenido, la captación y la capacidad técnica de la empresa.",
    features: [
      { title: "Estrategia y contenido", description: "Definimos públicos, recorridos, arquitectura de información y acciones comerciales antes del diseño." },
      { title: "Diseño de experiencia", description: "Construimos jerarquía, componentes y estados responsive con accesibilidad desde el inicio." },
      { title: "Desarrollo mantenible", description: "Implementamos una solución proporcionada al alcance, cuidando rendimiento, SEO y seguridad." },
      { title: "Medición y evolución", description: "Configuramos eventos útiles y mejoramos el sitio a partir de comportamiento real." }
    ],
    considerations: ["El contenido y la oferta deben preceder a la decoración", "La experiencia móvil y la accesibilidad forman parte del alcance", "El equipo debe conservar control sobre dominio, datos y cuentas", "SEO requiere contenido útil, estabilidad técnica y seguimiento"],
    steps: ["Comprender negocio y audiencia", "Diseñar contenido y experiencia", "Desarrollar y validar", "Publicar, medir y evolucionar"],
    cta: "Conversar sobre una web",
    meta: { title: "Diseño y desarrollo web empresarial | RF Consulting", description: "Sitios web empresariales rápidos, accesibles, medibles y alineados con la estrategia del negocio." }
  }
] as const;

export const webServicesIndex = {
  meta: {
    title: "Servicios web empresariales | RF Consulting",
    description: "Dominios, correo corporativo, hosting y desarrollo web organizados como una infraestructura digital coherente."
  },
  items: webServiceDetails
} as const;

export function findWebService(slug: string): WebServiceDetail | undefined {
  return webServiceDetails.find((service) => service.slug === slug);
}

