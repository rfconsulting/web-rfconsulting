# Iteración: política de privacidad

## Objetivo

Publicar una política comprensible y coherente con el comportamiento verificable de rfcpty.com, tomando como referencia la Ley 81 de 2019 y el Decreto Ejecutivo 285 de 2021 de Panamá.

## Alcance implementado

- Ruta canónica `/politica-de-privacidad` y redirección permanente desde `/privacidad`.
- Identificación de los datos introducidos en el formulario y de los posibles registros técnicos de infraestructura.
- Explicación explícita de que el formulario solo valida y prepara enlaces; no almacena ni envía la consulta automáticamente.
- Finalidades, bases de tratamiento, periodos de conservación, proveedores, transferencias y medidas de seguridad.
- Mecanismo para ejercer derechos ARCO y portabilidad mediante `soporte@rfcpty.com`.
- Referencias a fuentes oficiales de ANTAI y Gaceta Oficial.
- Enlace contextual desde el consentimiento del formulario de contacto.

## Decisiones y restricciones

- No se heredó el texto genérico de WordPress sobre comentarios, Gravatar, perfiles, cookies o contenido incrustado porque esas funciones no existen en la implementación actual.
- No se declara certificación ISO/IEC 27001 ni cumplimiento certificado sin evidencia documental.
- La política compromete una conservación máxima de 24 meses para consultas enviadas y 90 días para registros técnicos, salvo obligaciones legales, contractuales o investigación de incidentes.
- La identidad legal completa, domicilio y proveedores definitivos deberán revisarse con asesoría jurídica antes de producción si la operación requiere que se publiquen o cambian los tratamientos descritos.

## Criterios de aceptación

- La página responde `200` y el alias responde `301` hacia la ruta canónica.
- El contenido menciona las normas panameñas, el canal de privacidad y los derechos del titular.
- No aparecen cláusulas heredadas incompatibles ni certificaciones no demostradas.
- El formulario enlaza a la política antes de preparar la consulta.
- Typecheck, pruebas automatizadas y build terminan correctamente.
