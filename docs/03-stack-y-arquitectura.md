# Stack y arquitectura

## 1. Estado de la decisión

**Estado:** aceptada para la Fase 1 mediante
[ADR-0001](adr/0001-monolito-modular-ssr.md). Las capacidades futuras que aún
no están implementadas continúan sujetas a decisiones separadas.

El stack se deriva del problema, el alcance y las restricciones. La selección
prioriza HTML renderizado para SEO, bajo peso en el navegador, mantenibilidad,
seguridad del panel editorial y operación sencilla. La instrucción inicial de
usar HTML, CSS, JavaScript, Node.js, Express y MySQL se conserva, pero se concreta
en versiones y límites verificables durante la implementación.

## 2. Principios arquitectónicos

- Monolito modular antes que microservicios: un único equipo, un dominio acotado
  y necesidades operativas que no justifican distribución.
- Renderizado en servidor para contenido público; JavaScript del cliente solo
  para interacciones que mejoren la experiencia.
- Separación explícita entre dominio, aplicación, infraestructura y presentación.
- Contenido estructurado y SEO normalizado, sin reproducir el modelo de WordPress.
- Seguridad, accesibilidad, rendimiento y observabilidad como requisitos de diseño.
- Migraciones, backups y redirecciones tratados como código y evidencia versionada.
- Dependencias externas detrás de adaptadores para permitir sustitución.

## 3. Vista de contexto

```text
Visitantes y buscadores
          │ HTTPS
          ▼
Reverse proxy / CDN
          │
          ▼
Aplicación web Node.js + Express
  ├── Sitio público SSR
  ├── Administración autenticada
  ├── API interna y formularios
  ├── SEO, sitemap y redirects
  └── Adaptadores de correo, analítica y medios
          │
          ├── MySQL
          ├── Almacenamiento de medios
          └── Servicios externos aprobados
```

## 4. Stack propuesto

| Capa | Selección | Justificación y límite |
| --- | --- | --- |
| Runtime | Node.js LTS vigente al iniciar implementación | Soporte estable; versión fijada en repositorio y CI |
| Lenguaje | TypeScript estricto | Reduce contratos implícitos en backend, vistas y migración |
| Framework HTTP | Express, versión estable compatible | Pequeño, conocido y suficiente para un monolito modular |
| Renderizado | Plantillas SSR con Nunjucks | HTML visible sin JS y composición sencilla; decisión revisable por ADR |
| Frontend | HTML semántico, CSS propio y TypeScript progresivo | Evita una SPA innecesaria y protege rendimiento/SEO |
| Estilos | CSS moderno con tokens, capas y componentes | Sistema visual controlado sin framework pesado por defecto |
| Base de datos | MySQL 8.x | Alineación con la decisión inicial y hosting empresarial común |
| Acceso a datos | Driver MySQL + capa de repositorios; migrador explícito | SQL visible y control de cambios; ORM solo si demuestra valor |
| Validación | Esquemas compartidos con Zod o equivalente | Validación obligatoria en límites de entrada |
| Autenticación | Sesión de servidor, cookie `HttpOnly`, `Secure`, `SameSite` | Panel interno; evita complejidad innecesaria de JWT en navegador |
| Medios | Almacenamiento local persistente o S3-compatible detrás de adaptador | La elección depende del proveedor de infraestructura |
| Correo | Proveedor transaccional detrás de adaptador | Reintentos, trazabilidad y sustitución sin acoplar el dominio |
| Pruebas | Vitest para unidad/integración y Playwright para flujos críticos | Cobertura rápida más evidencia en navegador real |
| Calidad | ESLint, Prettier, `tsc`, auditoría de dependencias y secretos | Puerta automatizada antes de integrar y desplegar |
| Despliegue | Contenedor OCI, reverse proxy y CI/CD | Artefacto reproducible; destino concreto aún por decidir |
| Observabilidad | Logs JSON, health check, monitoreo de uptime y errores | Diagnóstico mínimo sin registrar secretos o PII innecesaria |

Las versiones implementadas están fijadas en `package.json` y
`package-lock.json`. “Latest” no es una política de producción.

## 5. Módulos del sistema

```text
src/
├── domain/
│   ├── content
│   ├── identity
│   ├── leads
│   ├── media
│   └── seo
├── application/
│   ├── commands
│   ├── queries
│   └── ports
├── infrastructure/
│   ├── database
│   ├── email
│   ├── analytics
│   ├── storage
│   └── security
├── web/
│   ├── public
│   ├── admin
│   ├── middleware
│   └── views
└── shared/
```

La estructura es una dirección, no una obligación de crear carpetas vacías. Los
módulos aparecen cuando existe comportamiento y deben mantener dependencias
hacia adentro: infraestructura implementa puertos de aplicación, no gobierna el dominio.

## 6. Modelo de datos conceptual

### Entidades principales

- **User:** identidad interna, rol, estado y credenciales.
- **Author:** perfil editorial público, separado de la cuenta cuando corresponda.
- **Page:** página institucional estructurada.
- **Post:** artículo, estado editorial y fechas.
- **Category:** clasificación única y controlada del blog.
- **Media:** archivo, dimensiones, tipo, texto alternativo y procedencia.
- **SeoMetadata:** título, descripción, canonical, robots y Open Graph.
- **Lead:** datos mínimos de una solicitud, consentimiento, origen y estado técnico.
- **Redirect:** ruta origen única, destino o estado HTTP y motivo.
- **AuditEvent:** actor, acción, recurso, fecha y metadatos no sensibles.

### Reglas iniciales

- Los slugs publicados son únicos dentro de su tipo y no cambian sin redirect.
- Un artículo pertenece inicialmente a una categoría; no se migran tags.
- Solo contenido publicado y dentro de su fecha es visible públicamente.
- Canonical debe pertenecer a un host aprobado o quedar vacío para autogenerarse.
- Un medio no puede ejecutarse como código y debe validarse antes de persistir.
- Los leads almacenarán únicamente los datos necesarios y se eliminarán conforme
  a la política de retención validada antes de habilitar su persistencia.
- Las operaciones de publicación, usuarios y redirects generan auditoría.

## 7. Flujo de solicitud pública

1. El proxy termina TLS, aplica límites y reenvía la solicitud.
2. Express asigna un identificador de correlación y aplica encabezados seguros.
3. El router resuelve página, artículo, redirect o estado no encontrado.
4. La aplicación consulta contenido publicado mediante repositorios.
5. La vista produce HTML semántico, canonical y datos estructurados.
6. Los assets versionados se sirven con caché; el HTML usa una política adecuada
   para permitir correcciones editoriales.

## 8. Flujo de contacto y límites de confianza

```text
Navegador no confiable
  → límite de tamaño + rate limit + antispam
  → validación y normalización en servidor
  → persistencia mínima / auditoría técnica
  → adaptador de correo o CRM
  → respuesta genérica sin filtrar detalles internos
```

- Nunca se confía en validación del navegador.
- Los tokens antispam se verifican en servidor.
- No se escriben mensajes completos ni credenciales en logs.
- Los fallos del proveedor externo deben permitir reintento controlado o una
  señal operativa, sin duplicar oportunidades silenciosamente.

## 9. Migración de WordPress

La migración será una herramienta *one-shot* fuera del runtime público:

```text
WXR tolerante + medios + inventario de URLs
                 │
                 ▼
        extracción y saneamiento
                 │
                 ▼
          JSON intermedio versionable
                 │
                 ▼
          revisión humana y matriz
                 │
                 ▼
        importación transaccional MySQL
```

El parser debe tolerar NUL y metadata dañada sin convertir la tolerancia en una
regla del sistema permanente. El JSON intermedio permite revisar títulos,
slugs, contenido, destino, categoría, fechas y SEO antes de afectar la base de
datos. Los binarios se inventarían por hash y se optimizan conservando originales
en el respaldo.

## 10. Estrategia de pruebas

### Unidad

- Slugs, estados editoriales, redirects y sanitización.
- Autorización por rol.
- Construcción de metadata y canonical.
- Normalización del contenido importado.

### Integración

- Repositorios y migraciones contra MySQL real efímero.
- Login, sesión, CSRF y permisos positivos/negativos.
- Publicación y resolución de rutas.
- Formulario, rate limiting y adaptadores simulados.

### End-to-end

- Visitar Inicio → Especialidad → Contacto → envío válido.
- Navegación móvil, teclado, foco y errores de formulario.
- Crear borrador → previsualizar → publicar → verificar página pública.
- URL antigua → 301 → destino canónico.
- Usuario editor intentando una operación exclusiva de administrador.

### Controles adicionales

- Análisis estático, dependencias y secretos.
- Auditoría automatizada de accesibilidad complementada con revisión manual.
- Medición reproducible de rendimiento móvil.
- Verificación de enlaces, sitemap, robots y headers.
- Ensayo de backup, restore, despliegue y rollback.

## 11. CI/CD y puertas de calidad

La puerta implementada en la Fase 1 ejecuta instalación reproducible, tipos,
pruebas, build y auditoría de dependencias de producción. Formato, lint y
escaneo especializado de secretos deben incorporarse antes de producción; no se
consideran controles existentes hasta que estén automatizados.
El despliegue de producción requiere además:

- artefacto inmutable identificado por commit;
- migraciones revisadas y backup aplicable;
- aprobación humana;
- smoke tests de salud, páginas, login y contacto;
- monitoreo posterior y criterio cuantitativo de rollback.

## 12. Alternativas consideradas

### WordPress renovado

- **Ventajas:** edición familiar, ecosistema amplio y menor desarrollo inicial.
- **Desventajas:** conserva dependencia de plugins y parte de la deuda que se
  busca retirar; superficie de ataque y operación mayores si no se gobierna bien.
- **Decisión propuesta:** descartar para este proyecto, manteniendo un respaldo
  consultable durante la transición.

### Generador estático sin base de datos

- **Ventajas:** rendimiento, seguridad y operación simples.
- **Desventajas:** flujo editorial menos amigable y formularios/administración
  dependientes de servicios adicionales.
- **Decisión propuesta:** no usar como arquitectura principal porque el alcance
  incluye CMS interno; reevaluar si se elimina ese requisito.

### SPA con framework cliente

- **Ventajas:** interacciones ricas y ecosistema de componentes.
- **Desventajas:** JavaScript y complejidad innecesarios para contenido y
  captación; requiere disciplina adicional para SEO y resiliencia.
- **Decisión propuesta:** descartar en el MVP; usar JavaScript progresivo.

### Headless CMS externo

- **Ventajas:** reduce construcción del panel y ofrece flujo editorial maduro.
- **Desventajas:** costo, dependencia de proveedor, límites operativos y dos
  superficies que administrar.
- **Decisión propuesta:** alternativa válida que debe compararse con el CMS
  propio antes de aprobar arquitectura, especialmente según presupuesto y equipo.

## 13. Registro de decisiones

Aceptadas:

1. [Monolito modular con Express y Nunjucks SSR](adr/0001-monolito-modular-ssr.md).
2. [`www.rfcpty.com` como dominio canónico](adr/0002-dominio-canonico.md).

Pendientes antes de implementar la capacidad correspondiente:

1. Acceso a MySQL y herramienta de migraciones.
2. Almacenamiento y transformación de medios.
3. Proveedor de correo y destino de oportunidades.
4. Hosting, CDN/proxy, backups y estrategia de despliegue.
5. Analítica, consentimiento y política de retención.
6. Estrategia coordinada entre RFCPTY y FacturaElectronica.click.

## 14. Criterio de salida de arquitectura

La arquitectura de la Fase 1 queda lista al demostrar build reproducible, rutas
SSR, controles HTTP, pruebas y operación del artefacto. La arquitectura futura
de CMS y MySQL no queda aprobada hasta completar su ADR, modelo de amenazas,
migraciones, backup, restauración y capacidad operativa.
