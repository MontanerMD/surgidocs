# Plantillario CGAD

Web-app para la consulta (pensada para escritorio y adaptada a móvil) que permite gestionar, rellenar y copiar plantillas clínicas de **Cirugía General y del Aparato Digestivo**: informes de urgencias, protocolos quirúrgicos, consulta y bloques reutilizables.

En escritorio trabaja en tres columnas: las plantillas a la izquierda, los campos en el centro y, a la derecha, el texto exacto que se copiará, actualizado mientras rellenas.

**Abrir la app:** https://montanermd.github.io/surgidocs/

## Qué incluye

- **49 plantillas** de SurgiDocs: 12 de urgencias, 30 protocolos quirúrgicos, 5 campos comunes (antecedentes, exploración normal, pruebas normales, evolución y circunstancias al alta) y 2 de consulta.
- **Organización:** búsqueda y filtros por tipo y por sección del servicio (CCP, CEG, CHP, CEM, General), además de favoritas.
- **Rellenado guiado:** los huecos se convierten en campos, las alternativas en botones y los pasos opcionales en casillas. La vista previa se actualiza al momento.
- **Texto editable:** el texto que se copiará se puede escribir y borrar directamente con el teclado. Lo escrito a mano se mantiene aunque sigas rellenando campos, y **Reiniciar plantilla** la devuelve a su estado original.
- **Dos cuadros separados:** el informe (técnica quirúrgica o valoración) y las **recomendaciones al alta**, cada uno con su botón de copiar.
- **Atajos de teclado:** `/` busca, `Ctrl/⌘ + Intro` copia el informe y `Ctrl/⌘ + Mayús + Intro` copia las recomendaciones.
- **Edición:** editor para crear, duplicar y modificar plantillas.
- **Importar y exportar:** importación desde texto o JSON y exportación de una copia de seguridad.

## Sintaxis de las plantillas

| Escribe | Resultado |
|---|---|
| `{{Edad}}` | Campo de texto libre (equivale a la **X**) |
| `{{Lado: derecha \| izquierda}}` | Botones para elegir una opción (equivale a la **/**) |
| `{{Hallazgos*: a \| b \| c}}` | Selección múltiple |
| `{{Fiebre: Afebril \| Fiebre de … ºC}}` | La opción con «…» abre un hueco para completarla |
| `{{Fecha}}` | Calendario |
| `[[- Drenaje de Penrose…]]` | Paso opcional: solo se copia si se marca (equivale al **\***) |

Si el mismo nombre de campo aparece varias veces, se rellena una sola vez.

Para importar en texto, cada plantilla empieza con `# Título`. Debajo pueden ir las líneas `tipo:`, `sección:` y `etiquetas:`. Una línea `Recomendaciones al alta:` separa automáticamente el segundo cuadro.

## Privacidad

- **Plantillas:** la app funciona entera en el navegador, sin servidor ni base de datos externa. Las plantillas que crees o modifiques se guardan solo en ese navegador (`localStorage`). Usa **Importar → Descargar .json** para hacer copias de seguridad o pasarlas a otro dispositivo.
- **Datos que rellenas:** lo que escribes al rellenar una plantilla **no se guarda en ningún sitio** y se pierde al recargar la página.
- **Pacientes:** no introduzcas datos identificativos de pacientes en las plantillas.

## Archivos

- `index.html`: la aplicación completa, en un solo archivo.
- `plantillas.json`: plantillas iniciales que se cargan la primera vez que se abre la app (o desde **Importar → Restaurar plantillas iniciales**).

## Aviso

Herramienta de ayuda a la redacción de informes. No es un producto sanitario ni sustituye el juicio clínico. Revisa cada informe antes de firmarlo y adáptalo a los hallazgos y a la técnica realmente realizada.
