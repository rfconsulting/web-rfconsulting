# Alcance del proyecto RFCPTY

## 1. Objetivo

Reconstruir `rfcpty.com` como sitio institucional rápido, accesible, seguro,
medible y administrable, capaz de explicar la oferta completa de RF Consulting,
preservar la autoridad SEO útil y convertir visitantes en oportunidades
comerciales calificadas.

## 2. Resultado esperado

El MVP entregará una experiencia pública responsive, un blog administrable, un
canal de contacto protegido, analítica de conversiones, migración curada de
contenido y una transición controlada desde WordPress.

## 3. Actores

| Actor | Necesidad |
| --- | --- |
| Visitante/prospecto | Comprender la oferta, validar confianza y contactar fácilmente |
| Cliente existente | Encontrar soporte y canales de atención |
| Editor | Crear, revisar, publicar y actualizar contenido y SEO |
| Administrador | Gestionar usuarios, medios, categorías y configuración permitida |
| Responsable de negocio | Observar conversiones y aceptar resultados |
| Responsable técnico | Operar, desplegar, auditar y evolucionar el sistema |

## 4. Alcance funcional del MVP

### 4.1 Sitio público

- Inicio institucional completamente nuevo.
- Nosotros.
- Índice de especialidades.
- Sistemas empresariales.
- Integraciones y automatización.
- Desarrollo de software.
- Soporte tecnológico.
- Servicios web y sus líneas: hosting, dominios, correo y diseño/desarrollo web.
- Página puente de Facturación Electrónica hacia `facturaelectronica.clic`.
- Blog, categoría, artículo, autor y búsqueda básica si el volumen la justifica.
- Contacto.
- Política de privacidad y términos.
- Página 404 y estados de error coherentes.
- Navegación, pie de página, breadcrumbs donde aporten contexto y CTAs relacionados.

### 4.2 Gestión de contenido

- Autenticación para usuarios internos.
- Roles mínimos: administrador y editor.
- CRUD de páginas, artículos, categorías, autores y medios.
- Estados borrador y publicado; vista previa antes de publicar.
- Slug único y fecha de publicación.
- Campos SEO normalizados: título, descripción, canonical, index/follow y Open Graph.
- Texto alternativo y metadatos esenciales de imágenes.
- Historial básico de actualización mediante auditoría; el versionado editorial
  completo queda para una iteración posterior.

### 4.3 Captación y medición

- Formulario con consentimiento, validación de servidor, antispam y protección
  contra abuso.
- Envío confiable al canal aprobado por negocio y registro mínimo de trazabilidad.
- Enlaces directos a WhatsApp, teléfono y correo.
- Eventos de conversión definidos en el modelo de negocio.
- Google Search Console y una solución analítica aprobada.
- Política de cookies solo si las tecnologías finalmente usadas lo requieren.

### 4.4 SEO técnico

- HTML semántico renderizado en servidor.
- Metadatos, canonical, Open Graph y datos estructurados pertinentes.
- `sitemap.xml` y `robots.txt`.
- URLs legibles y estabilidad de slugs.
- Mapa explícito de redirecciones 301.
- Respuestas 404 y 410 deliberadas cuando correspondan.
- Feed del blog solo si existe una necesidad confirmada.

### 4.5 Migración curada

- Procesar el WXR como fuente de extracción, no como importación ciega.
- Normalizar las 7 páginas y 13 entradas identificadas en un JSON intermedio.
- Auditar las 35 referencias de medios y obtener los archivos físicos antes de
  retirar WordPress.
- Conservar, reescribir, fusionar, mover o retirar cada contenido conforme a una
  matriz aprobada.
- Migrar el contenido fiscal seleccionado a `facturaelectronica.clic` mediante
  un proyecto coordinado; si la otra propiedad no está lista, mantener una
  transición segura sin producir enlaces rotos.
- Fusionar las entradas duplicadas sobre el Facturador Gratuito.
- No migrar metadata de Elementor, Astra, Jetpack, Yoast o AIOSEO como modelo interno.
- Respaldar WordPress, base de datos y medios antes del cambio de producción.

## 5. Inventario editorial inicial

### Conservar o reconstruir en RFCPTY

- Inicio: reemplazo completo.
- Nosotros: conservar identidad útil y reescribir.
- Contacto: reemplazo completo.
- Blog: índice dinámico nuevo.
- Software y Sistemas Empresariales: separar y reestructurar.
- Soporte Técnico Empresarial: mejorar, corregir horario y validar precios.
- Política de Privacidad: revisar y conservar.
- Artículos de soporte y rendimiento de PC: actualizar y conservar.
- Sociedades de Emprendimiento: actualizar, conservar y someter a revisión de contenido.
- Diseño de Sitio Web Startup: convertir en página o contenido sustantivo de servicios web.

### Mover, fusionar o retirar

- Cluster de Facturación Electrónica: mover a la vertical especializada con 301.
- Dos artículos del Facturador Gratuito: fusionar en una URL canónica.
- Artículo promocional de Astra 4.11.0: retirar mediante 410 o redirección
  contextual según evidencia de Search Console y backlinks.
- Tags y taxonomías redundantes: no migrar inicialmente.

## 6. Requisitos no funcionales

### Rendimiento

- Experiencia mobile-first y progressive enhancement.
- Objetivo de Core Web Vitals en el percentil 75: LCP ≤ 2.5 s, INP ≤ 200 ms y CLS ≤ 0.1.
- Presupuesto inicial por página pública: JavaScript propio comprimido ≤ 150 KB;
  imágenes hero optimizadas ≤ 250 KB cuando sea viable; evitar librerías sin valor demostrado.
- Caché y compresión HTTP configuradas en producción.

### Accesibilidad y compatibilidad

- Objetivo WCAG 2.2 nivel AA para flujos y plantillas públicas.
- Navegación completa por teclado, foco visible, reflujo, contraste y etiquetas de formulario.
- Viewports desde 320 px y versiones vigentes de Chrome, Edge, Firefox y Safari.
- Formularios utilizables con tacto y tecnologías asistivas.

### Seguridad y privacidad

- HTTPS obligatorio, encabezados de seguridad y cookies seguras cuando existan.
- Contraseñas con hash robusto; sesiones protegidas y expiración definida.
- Autorización validada en servidor para cada operación administrativa.
- Validación, límites de tamaño, tipo y almacenamiento seguro de uploads.
- CSRF, rate limiting, mitigación de inyección y XSS.
- Secretos solo mediante variables de entorno o gestor aprobado.
- Recolección mínima de datos personales, retención definida y acceso auditado.
- Backups cifrados y restauración probada.

### Operación

- Entornos separados de desarrollo y producción; staging es recomendado antes del corte.
- Despliegue reproducible, migraciones explícitas y rollback documentado.
- Logs estructurados sin secretos ni contenido innecesario de formularios.
- Health check, monitoreo de disponibilidad y alertas para errores críticos.
- Propiedad de dominio, DNS, cuentas analíticas y datos bajo control de RF Consulting.

## 7. Fuera de alcance del MVP

- Comercio electrónico, pagos y facturación desde RFCPTY.
- Portal de clientes, mesa de ayuda o seguimiento de tickets.
- CRM construido a medida.
- Comentarios, likes, perfiles sociales, suscripciones, pingbacks o trackbacks.
- Aplicación móvil nativa.
- Soporte multilingüe, salvo decisión comercial posterior.
- Integración automática con todos los ERP o PAC mencionados en el contenido.
- Importador genérico y reutilizable de WordPress.
- Personalización visual tipo page builder.
- Migración indiscriminada de templates, widgets, shortcodes o metadata de plugins.
- Garantizar posiciones SEO específicas; se preservará y optimizará la base técnica.

## 8. Fases e incrementos

### Fase 0 — descubrimiento y línea base

- Aprobar brief, responsables, objetivos, fuentes de verdad y restricciones.
- Obtener WXR original, archivos de medios, URLs, Search Console y analítica.
- Validar oferta, precios, datos de contacto, claims y arquitectura de marca.

### Fase 1 — diseño y arquitectura

- Inventario y modelo de contenido.
- Sitemap, recorridos, wireframes y sistema visual.
- Modelo de datos, amenazas, ADR y contratos.
- Plan de migración, redirecciones, backup y rollback.

### Fase 2 — plataforma base

- Estructura del repositorio, CI, configuración y base de datos.
- Componentes públicos, autenticación y administración mínima.
- Contenido semilla y pruebas automatizadas.

### Fase 3 — contenido, SEO y captación

- Migración curada y redacción final.
- Formularios, correo, antispam, analítica, sitemap y datos estructurados.
- Auditorías de accesibilidad, rendimiento, seguridad y SEO.

### Fase 4 — transición a producción

- Ensayo de migración y restauración.
- Congelación editorial breve, backup, despliegue y 301.
- Verificación de URLs, formularios, eventos, indexación y salud.
- Observación intensiva y rollback si se superan los umbrales acordados.

### Fase 5 — aprendizaje

- Comparar conversiones y consultas con la línea base.
- Corregir contenido, recorridos y rendimiento con evidencia.
- Priorizar integraciones, casos de éxito y capacidades editoriales futuras.

## 9. Criterios de aceptación del MVP

- Todos los contenidos aprobados están publicados en su destino previsto.
- Cada URL histórica relevante responde con contenido válido o la redirección/estado aprobado.
- No hay enlaces internos rotos ni assets esenciales dependientes del WordPress retirado.
- Los flujos de contacto funcionan, resisten entradas inválidas y generan trazabilidad.
- Los roles administrativos no pueden ejecutar operaciones fuera de su autorización.
- Sitemap, canonical, robots y metadatos corresponden al entorno de producción.
- Los eventos comerciales se observan en la herramienta analítica aprobada.
- Las plantillas públicas cumplen los objetivos acordados de accesibilidad y rendimiento.
- Escáner de secretos, análisis de dependencias, pruebas y auditoría técnica no dejan
  riesgos críticos o altos sin remediación o aceptación humana explícita.
- Backup y rollback fueron ensayados y documentados.
- El responsable de negocio acepta textos, oferta, CTAs y recorrido principal.
- Otra persona puede desplegar y verificar el sistema usando la documentación.

## 10. Definition of Ready para implementación

La primera iteración no está lista hasta que:

- existan responsables de negocio y técnico;
- se aprueben el objetivo, MVP y prioridades;
- se obtengan los medios y el inventario completo de URLs;
- se resuelvan o acepten las decisiones abiertas de stack;
- se definan criterios de aceptación y pruebas del incremento;
- exista un ADR para cada decisión arquitectónica de alto impacto.

## 11. Preguntas y dependencias abiertas

- Acceso al XML WXR original, `wp-content/uploads`, base de datos y configuración actual.
- Acceso a Search Console, DNS, hosting y analítica.
- Destino operativo de formularios y responsable de los leads.
- Proveedor de infraestructura, correo transaccional y almacenamiento.
- Identidad visual, logotipo fuente, fotografías y permisos de publicación.
- Revisión legal de privacidad, términos y artículos regulatorios.
- Alcance y calendario coordinado de `facturaelectronica.clic`.

