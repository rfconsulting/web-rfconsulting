# Despliegue en cPanel con Node.js y Passenger

## Requisito bloqueante

La cuenta debe ofrecer una de estas interfaces:

- **Application Manager** en la sección Software;
- **Setup Node.js App**, habitual en servidores con CloudLinux;
- **Web Apps / Websites > Node.js**, disponible en versiones recientes de
  cPanel con el tema Meridian.

Si ninguna aparece al buscar “Node.js” o “Application Manager”, el proveedor
debe habilitar Passenger y Node.js para la cuenta. Subir `dist/` a
`public_html` no ejecutará esta aplicación.

## Compatibilidad

El proyecto admite Node.js 22, 23 y 24. Para cPanel se recomienda Node.js 22,
que es una versión ofrecida oficialmente por los paquetes EasyApache actuales.
Passenger busca `app.js` como archivo de inicio; este repositorio lo incluye y
carga el artefacto compilado desde `dist/server.js`.

## Preparar la versión

En el equipo de desarrollo:

```bash
npm ci
npm run check
npm run package:cpanel
```

El último comando crea `release/cpanel/` con estos elementos:

```text
app.js
dist/
package.json
package-lock.json
```

No se deben subir `.env`, `node_modules`, `migration/source`, `.git` ni los
archivos TypeScript de desarrollo cuando se utiliza un paquete compilado.

## Registrar mediante Application Manager

1. Crear fuera de `public_html` un directorio como `apps/rfcpty`.
2. Subir allí los cuatro elementos del paquete compilado.
3. Abrir **Application Manager** y registrar la aplicación.
4. Seleccionar `www.rfcpty.com` como dominio de despliegue y `/` como URL base.
5. Usar `apps/rfcpty` como ruta de aplicación, relativa al directorio principal
   de la cuenta.
6. Seleccionar **Production** y Node.js 22.
7. Configurar las variables:

   | Variable | Valor |
   |---|---|
   | `NODE_ENV` | `production` |
   | `PUBLIC_ORIGIN` | `https://www.rfcpty.com` |

   Passenger administra el puerto. No debe fijarse `PORT` manualmente salvo que
   la interfaz específica del proveedor lo solicite.
8. Ejecutar **Enable Dependencies** o, desde la terminal de la aplicación:

   ```bash
   npm ci --omit=dev
   ```

9. Desplegar o reiniciar la aplicación.

## Actualizaciones

1. Ejecutar localmente `npm ci && npm run check`.
2. Reemplazar `app.js`, `dist/`, `package.json` y `package-lock.json`.
3. Ejecutar `npm ci --omit=dev` si cambiaron dependencias.
4. Reiniciar desde cPanel. En Passenger clásico también puede crearse o tocarse
   `tmp/restart.txt` dentro de la raíz de la aplicación.

## Verificación posterior

- `https://www.rfcpty.com/salud` responde `{"status":"ok"}`.
- `https://www.rfcpty.com/` responde HTML y carga CSS, JavaScript y logos.
- `https://www.rfcpty.com/sitemap.xml` usa el host canónico.
- `https://rfcpty.com/...` redirige mediante `301` a `www` conservando la ruta.
- El certificado TLS cubre `rfcpty.com` y `www.rfcpty.com`.
- Los logs no muestran errores de módulos, permisos o versión de Node.js.

## Rollback

Conservar el paquete compilado anterior fuera de la raíz activa. Si falla una
publicación, restaurar esos archivos, ejecutar `npm ci --omit=dev` con su
lockfile y reiniciar Passenger.
