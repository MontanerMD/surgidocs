# Plantillario CGAD

Web-app para la consulta (pensada para escritorio y adaptada a móvil) que permite gestionar, rellenar y copiar plantillas clínicas de **Cirugía General y del Aparato Digestivo**: informes de urgencias, protocolos quirúrgicos, consulta y bloques reutilizables.

Las plantillas están a la izquierda y, a la derecha, solo el texto que se copiará. Todo se rellena dentro del propio texto: los huecos pendientes aparecen en rosa, las opciones se eligen con un pequeño menú y los pasos opcionales se incluyen con un botón «+».

**Abrir la app:** https://montanermd.github.io/surgidocs/

## Qué incluye

- **50 plantillas** de SurgiDocs: 12 de urgencias, 31 protocolos quirúrgicos, 5 campos comunes (antecedentes, exploración normal, pruebas normales, evolución y circunstancias al alta) y 2 de consulta.
- **Organización:** búsqueda y filtros por tipo y por sección del servicio (CCP, CEG, CHP, CEM, General), además de favoritas.
- **Rellenado en el propio texto:** pulsa un hueco rosa y escribe; pulsa una opción (▾) y elígela con el ratón o con las teclas 1–9; pulsa «+» para incluir un paso opcional. `Tab` salta al siguiente hueco pendiente.
- **Texto libre:** todo el texto se puede escribir y borrar con el teclado. **Reiniciar plantilla** la devuelve a su estado original.
- **Dos cuadros separados:** el informe (técnica quirúrgica o valoración) y las **recomendaciones al alta**, cada uno con su botón de copiar.
- **Atajos de teclado:** `/` busca, `Tab` va al siguiente hueco, `Ctrl/⌘ + Intro` copia el informe y `Ctrl/⌘ + Mayús + Intro` copia las recomendaciones.
- **Editor visual:** se escribe o pega el texto tal como saldrá; se selecciona lo que cambia y se pulsa «Hueco para escribir», «Opciones a elegir», «Fecha» o «Paso opcional». Los campos se editan pulsándolos. Sin sintaxis que aprender (hay un modo «Ver código» para usuarios avanzados).
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

## Guardado en la nube (Cloudflare)

Si la app se publica en Cloudflare Pages con un espacio KV, las plantillas se guardan en la nube y se ven iguales en todos los ordenadores. Consultar es libre y editar pide una contraseña. Instrucciones en [CLOUDFLARE.md](CLOUDFLARE.md). En GitHub Pages la app funciona igual, pero los cambios se guardan solo en cada navegador.

## Privacidad

- **Plantillas:** la app funciona entera en el navegador, sin servidor ni base de datos externa. Las plantillas que crees o modifiques se guardan solo en ese navegador (`localStorage`). Usa **Importar → Descargar .json** para hacer copias de seguridad o pasarlas a otro dispositivo.
- **Datos que rellenas:** lo que escribes al rellenar una plantilla **no se guarda en ningún sitio** y se pierde al recargar la página.
- **Pacientes:** no introduzcas datos identificativos de pacientes en las plantillas.

## Archivos

- `index.html`: la aplicación completa, en un solo archivo.
- `plantillas.json`: plantillas iniciales que se cargan la primera vez que se abre la app (o desde **Importar → Restaurar plantillas iniciales**).

## Aviso

Herramienta de ayuda a la redacción de informes. No es un producto sanitario ni sustituye el juicio clínico. Revisa cada informe antes de firmarlo y adáptalo a los hallazgos y a la técnica realmente realizada.
