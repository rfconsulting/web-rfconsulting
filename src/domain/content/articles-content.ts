export interface ArticleSection {
  readonly title: string;
  readonly paragraphs: readonly string[];
  readonly items?: readonly string[];
  readonly note?: string;
}

export interface ArticleSource {
  readonly label: string;
  readonly url: string;
}

export interface Article {
  readonly slug: string;
  readonly category: string;
  readonly categorySlug: string;
  readonly title: string;
  readonly summary: string;
  readonly publishedAt: string;
  readonly updatedAt: string;
  readonly readingTime: string;
  readonly introduction: readonly string[];
  readonly sections: readonly ArticleSection[];
  readonly conclusion: string;
  readonly relatedService: { readonly label: string; readonly href: string };
  readonly sources?: readonly ArticleSource[];
  readonly disclaimer?: string;
  readonly meta: { readonly title: string; readonly description: string };
}

export const articles: readonly Article[] = [
  {
    slug: "errores-comunes-soporte-tecnico-empresarial",
    category: "Soporte e infraestructura",
    categorySlug: "soporte-infraestructura",
    title: "Cinco errores comunes en soporte técnico empresarial",
    summary: "Cómo reducir interrupciones, recurrencia e improvisación mediante documentación, prioridades y mantenimiento.",
    publishedAt: "22 de octubre de 2024",
    updatedAt: "25 de agosto de 2026",
    readingTime: "7 min de lectura",
    introduction: [
      "El soporte técnico influye directamente en la continuidad de una empresa. Sin embargo, atender incidentes no consiste únicamente en reaccionar cuando una computadora, una red o una aplicación deja de funcionar.",
      "Estos cinco errores convierten problemas manejables en interrupciones recurrentes y dificultan aprender de cada incidente."
    ],
    sections: [
      { title: "1. Resolver sin documentar", paragraphs: ["Cuando la solución queda únicamente en la memoria de quien atendió el incidente, el siguiente técnico debe investigar el mismo problema desde cero."], items: ["Registrar síntoma, causa y solución aplicada", "Anotar equipos, servicios y personas afectadas", "Actualizar la guía cuando el procedimiento cambie"], note: "La documentación debe ser útil durante un incidente: breve, localizable y verificable." },
      { title: "2. Priorizar por orden de llegada", paragraphs: ["No todas las solicitudes tienen el mismo impacto. Una falla que detiene facturación o ventas necesita un tratamiento distinto a una consulta que permite continuar trabajando."], items: ["Evaluar impacto sobre la operación", "Determinar cuántas personas están afectadas", "Acordar urgencia, responsable y siguiente actualización"] },
      { title: "3. Depender de conocimiento que no se actualiza", paragraphs: ["Los sistemas, amenazas y necesidades cambian. La capacitación continua debe incluir tecnología, procedimientos internos y comunicación con las personas usuarias."], items: ["Revisar incidentes que el equipo no pudo resolver con rapidez", "Practicar recuperación y escalamiento", "Compartir aprendizajes después de cambios importantes"] },
      { title: "4. Trabajar únicamente de forma reactiva", paragraphs: ["Esperar a que algo falle suele aumentar el tiempo de interrupción. El mantenimiento preventivo permite identificar capacidad insuficiente, software sin soporte y respaldos que no pueden restaurarse."], items: ["Mantener inventario y responsables", "Planificar actualizaciones y ventanas de mantenimiento", "Probar restauración, no solo creación de backups"] },
      { title: "5. No medir el servicio", paragraphs: ["Sin datos es difícil distinguir percepción de comportamiento real. Las métricas deben ayudar a decidir, no castigar a quien atiende."], items: ["Tiempo hasta la primera respuesta útil", "Tiempo hasta recuperación del servicio", "Incidentes recurrentes y causa", "Solicitudes reabiertas y satisfacción"] }
    ],
    conclusion: "Un soporte efectivo transforma cada incidente en conocimiento: atiende según impacto, verifica la recuperación y reduce la posibilidad de repetición.",
    relatedService: { label: "Conocer soporte tecnológico", href: "/especialidades/soporte-tecnologico" },
    meta: { title: "5 errores comunes en soporte técnico empresarial", description: "Errores de documentación, prioridad, formación, mantenimiento y medición que afectan el soporte técnico de una empresa." }
  },
  {
    slug: "optimizar-rendimiento-pc-empresa",
    category: "Soporte e infraestructura",
    categorySlug: "soporte-infraestructura",
    title: "Cómo optimizar el rendimiento de una PC antes de reemplazarla",
    summary: "Un recorrido seguro para identificar lentitud, liberar recursos y decidir con evidencia si el equipo necesita una mejora.",
    publishedAt: "7 de mayo de 2025",
    updatedAt: "25 de agosto de 2026",
    readingTime: "6 min de lectura",
    introduction: [
      "Una computadora lenta no siempre necesita reemplazo. También puede estar limitada por programas de inicio, almacenamiento insuficiente, actualizaciones pendientes o una carga de trabajo que cambió.",
      "Antes de borrar archivos o instalar herramientas de limpieza, protege la información y observa qué recurso está causando el problema."
    ],
    sections: [
      { title: "1. Protege la información primero", paragraphs: ["Cualquier mantenimiento debe comenzar confirmando que los archivos importantes tienen respaldo y pueden recuperarse."], items: ["Identificar documentos y aplicaciones críticas", "Confirmar que el backup terminó correctamente", "No guardar la única copia en el mismo equipo"] },
      { title: "2. Observa antes de desinstalar", paragraphs: ["Revisa el uso de procesador, memoria, disco y espacio disponible mientras ocurre la lentitud. Esto evita aplicar soluciones genéricas al componente equivocado."], items: ["Anotar cuándo comenzó el problema", "Comparar rendimiento al iniciar y durante la tarea lenta", "Revisar procesos desconocidos antes de cerrarlos"] },
      { title: "3. Reduce programas de inicio", paragraphs: ["Algunas aplicaciones se cargan automáticamente aunque no sean necesarias para trabajar. Deshabilita únicamente las que reconoces y vuelve a medir el arranque."], note: "No deshabilites servicios de seguridad, controladores o componentes que no hayas identificado." },
      { title: "4. Recupera espacio de forma segura", paragraphs: ["Elimina temporales mediante herramientas del sistema y desinstala aplicaciones que la empresa ya no utiliza. Evita utilidades que prometen acelerar el equipo modificando el registro sin explicar sus acciones."], items: ["Vaciar temporales y papelera después de revisar", "Archivar material antiguo según la política de la empresa", "Mantener espacio libre para actualizaciones y operación"] },
      { title: "5. Actualiza y reinicia con control", paragraphs: ["Las actualizaciones pueden corregir seguridad, estabilidad y compatibilidad. Aplícalas dentro de una ventana apropiada y confirma después que las aplicaciones críticas siguen funcionando."], items: ["Usar fuentes oficiales", "Reiniciar cuando el cambio lo requiera", "Verificar periféricos y aplicaciones de trabajo"] },
      { title: "6. Decide si el límite es físico", paragraphs: ["Si el equipo continúa lento después de medir y ordenar el software, compara memoria, almacenamiento y procesador con la carga actual. Una ampliación puntual puede ser suficiente; en otros casos, reemplazar será la decisión responsable."] }
    ],
    conclusion: "Optimizar no significa ejecutar una lista a ciegas. Significa proteger datos, medir el cuello de botella, cambiar una variable y comprobar si el resultado mejoró.",
    relatedService: { label: "Solicitar una evaluación técnica", href: "/especialidades/soporte-tecnologico" },
    meta: { title: "Cómo optimizar el rendimiento de una PC empresarial", description: "Pasos seguros para diagnosticar y mejorar una computadora lenta antes de invertir en nuevo hardware." }
  },
  {
    slug: "sociedades-de-emprendimiento-en-panama",
    category: "Tecnología para empresas",
    categorySlug: "tecnologia-empresas",
    title: "Sociedades de Emprendimiento en Panamá: una guía inicial",
    summary: "Qué es esta figura, cuáles requisitos conviene confirmar y qué base digital necesita una empresa desde su formalización.",
    publishedAt: "7 de mayo de 2025",
    updatedAt: "25 de agosto de 2026",
    readingTime: "8 min de lectura",
    introduction: [
      "La Sociedad de Emprendimiento fue regulada por la Ley 186 de 2020 como una figura para facilitar la formalización empresarial en Panamá. La normativa fue modificada en 2024, por lo que una guía anterior puede contener requisitos que ya no describen el marco vigente.",
      "Esta síntesis sirve como punto de partida. Antes de constituir o transformar una sociedad, confirma el procedimiento con AMPYME y busca asesoría legal y contable aplicable a tu caso."
    ],
    sections: [
      { title: "¿Quiénes pueden constituirla?", paragraphs: ["La modificación de 2024 establece que pueden otorgarla entre dos y diez personas naturales mayores de edad, de cualquier nacionalidad, con residencia permanente en Panamá, sujetas a las limitaciones de la ley."], note: "Una persona que ya forme parte de una Sociedad de Emprendimiento no puede participar como socio, apoderado o representante legal en una nueva de esta clase." },
      { title: "Información y documentos iniciales", paragraphs: ["AMPYME publica una lista operativa de requisitos que debe confirmarse al momento de iniciar el trámite."], items: ["Identificación y constancia de residencia de integrantes", "Nombre, capital social y objeto de la sociedad", "Constancia del lugar de funcionamiento", "Capital social mínimo publicado de B/.500.00"] },
      { title: "Objeto y actividades", paragraphs: ["La reforma permite desarrollar cualquier objeto lícito, pero mantiene limitaciones para determinadas actividades y faculta a la Ventanilla Única a aceptar o rechazar documentos según las actividades declaradas."], note: "El texto original de 2025 describía este punto de forma más restrictiva; fue corregido para reflejar la reforma publicada el 31 de octubre de 2024." },
      { title: "Beneficios y condiciones", paragraphs: ["AMPYME enumera beneficios de formalización y tributación. Estos beneficios tienen condiciones, períodos y posibles cambios regulatorios, por lo que no deben tratarse como asesoría fiscal automática."], items: ["Facilitación mediante Ventanilla Única", "Tratamiento de tasa única anual durante los primeros dos años según la reforma", "Posibilidad de convenios municipales", "Registros y obligaciones que permanecen aplicables"] },
      { title: "La base tecnológica después de formalizar", paragraphs: ["Constituir la empresa es solo el comienzo. Conviene establecer desde temprano quién controla y recupera sus activos digitales."], items: ["Dominio registrado a nombre o bajo control de la empresa", "Correo corporativo con cuentas individuales", "Accesos con autenticación multifactor", "Sistema administrativo y facturación adecuados", "Inventario de proveedores, renovaciones y respaldos"] }
    ],
    conclusion: "La figura puede facilitar la formalización, pero cada decisión jurídica, tributaria y operativa debe validarse con fuentes vigentes. La tecnología aporta cuando deja propiedad, accesos y procesos claramente organizados desde el inicio.",
    relatedService: { label: "Preparar la base digital de mi empresa", href: "/servicios-web" },
    sources: [
      { label: "AMPYME — Sociedad de Emprendimiento", url: "https://ampyme.gob.pa/?page_id=34920" },
      { label: "Gaceta Oficial — Ley 186 de 2020", url: "https://www.gacetaoficial.gob.pa/pdfTemp/29167_B/GacetaNo_29167b_20201202.pdf" },
      { label: "Gaceta Oficial — reforma publicada el 31 de octubre de 2024", url: "https://www.gacetaoficial.gob.pa/pdfTemp/30152_A/108545.pdf" }
    ],
    disclaimer: "Contenido informativo. No constituye asesoría legal, fiscal ni contable. Revisa las fuentes oficiales y consulta profesionales calificados antes de tomar decisiones.",
    meta: { title: "Sociedades de Emprendimiento en Panamá | Guía inicial", description: "Resumen actualizado sobre Sociedades de Emprendimiento en Panamá, requisitos publicados, reforma de 2024 y base tecnológica." }
  }
] as const;

export const knowledgeIndex = {
  meta: { title: "Conocimiento empresarial | RF Consulting", description: "Artículos prácticos sobre sistemas, soporte, infraestructura, desarrollo y tecnología para empresas." },
  articles
} as const;

export function findArticle(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

