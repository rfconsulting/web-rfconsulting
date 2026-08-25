# Matriz de redirecciones WordPress

Fuente de inventario: WXR privado en `migration/source/`. La fuente contiene
configuraciones históricas y no se versiona; esta matriz sí es evidencia
canónica y revisable.

| URL histórica | Acción | Destino o resultado |
|---|---:|---|
| `/inicio`, `/inicio-2` | 301 | `/` |
| `/soluciones-tecnologicas-empresariales-2` | 301 | `/` |
| `/software_y_sistemas_empresariales` | 301 | `/especialidades/sistemas-empresariales` |
| `/software-y-sistemas-empresariales` | 301 | `/especialidades/sistemas-empresariales` |
| `/soporte-tecnico-empresarial` | 301 | `/especialidades/soporte-tecnologico` |
| `/5-errores-comunes-en-soporte` | 301 | `/blog/errores-comunes-soporte-tecnico-empresarial` |
| Antiguo artículo de Sociedades de Emprendimiento | 301 | `/blog/sociedades-de-emprendimiento-en-panama` |
| Antiguo artículo para optimizar una PC | 301 | `/blog/optimizar-rendimiento-pc-empresa` |
| `/diseno-de-sitio-web-startup` | 301 | `/servicios-web/diseno-desarrollo-web` |
| `/facturador-gratuito-dgi` | 301 | `https://facturaelectronica.click/facturador-gratuito-dgi/` (verificado el 25-08-2026) |
| `/productos`, `/productos-2` | 410 | Retirado sin reemplazo directo |

La fuente ejecutable es `src/domain/content/redirects-content.ts`. Toda nueva
decisión debe actualizar código, pruebas y esta matriz en el mismo cambio.

## Pendientes de validación

Los siguientes slugs de facturación electrónica aparecen publicados en el WXR,
pero no reciben una redirección permanente hasta confirmar que su equivalente
existe en `facturaelectronica.click`:

- `/factura-electronica-en-panama-todo-lo-que-necesitas-saber-inicialmente`
- `/la-factura-electronica-en-panama-es-legal-y-versatil`
- `/que-es-la-facturacion-electronica-en-panama`
- `/facturador-gratuito-dgi-2`
- `/como-gestionar-la-firma-electronica-de-mi-negocio-ante-el-registro-publico`
- `/nuestro-compromiso-con-la-educacion-y-el-soporte-tecnologico-claves-para-una-transicion-digital-exitosa-en-la-facturacion-electronica`
- `/factura-electronica-quienes-deben-aplicar-a-la-fecha`
