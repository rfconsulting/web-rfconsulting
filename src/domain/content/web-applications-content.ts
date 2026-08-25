export const webApplicationsContent = {
  meta: {
    title: "Desarrollo de aplicaciones web | RF Consulting",
    description: "Diseño y desarrollo de aplicaciones web con autenticación, flujos de usuario, datos y operación adaptados al negocio."
  },
  capabilities: [
    { title: "Acceso y perfiles", description: "Registro, inicio de sesión, recuperación de acceso y permisos acordes con cada tipo de usuario." },
    { title: "Procesos y estados", description: "Flujos de trabajo que hacen visibles las acciones, decisiones y excepciones de la operación." },
    { title: "Datos e integraciones", description: "Información estructurada, validación en servidor y conexión controlada con otros sistemas." },
    { title: "Operación y evolución", description: "Seguridad, pruebas, despliegue, observabilidad y cambios incrementales después de publicar." }
  ],
  indicators: [
    "Las personas necesitan una cuenta o un perfil propio",
    "La experiencia cambia según permisos, estado o historial",
    "Existen procesos que deben registrarse y continuar en el tiempo",
    "La organización necesita administrar información, contenido o usuarios",
    "El sistema debe integrarse con servicios o datos existentes"
  ],
  process: ["Comprender el dominio y los actores", "Definir requisitos, datos y límites", "Diseñar y probar los flujos críticos", "Implementar, desplegar y observar"],
  caseStudy: {
    name: "Plataforma Psicoeducándonos",
    url: "https://psicoeducandonos.org/login.html",
    domain: "psicoeducandonos.org",
    description: "Experiencia de acceso para una comunidad formativa que permite a sus participantes ingresar, registrarse, recuperar su contraseña y continuar su proceso educativo.",
    visibleFeatures: ["Inicio de sesión con correo", "Registro de participantes", "Recuperación de contraseña", "Acceso a formación y comunidad"],
    note: "Las funciones descritas corresponden a recorridos visibles públicamente; los detalles internos y datos de la plataforma no se exponen."
  }
} as const;

