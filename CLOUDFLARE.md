# Publicar en Cloudflare con guardado en la nube

Con Cloudflare, las plantillas se guardan en un único sitio y cualquier ordenador ve siempre la última versión. Consultar no pide contraseña. Crear, editar o borrar plantillas pide una **contraseña de edición**, que solo se escribe una vez en cada ordenador.

Todo cabe en el plan gratuito de Cloudflare.

## 1. Crear el proyecto

1. Entra en [dash.cloudflare.com](https://dash.cloudflare.com) y ve a **Workers y Pages → Crear → Pages → Conectar a Git**.
2. Autoriza a Cloudflare a ver el repositorio **MontanerMD/surgidocs** y elígelo.
3. En la configuración de compilación:
   - **Preajuste de framework:** Ninguno
   - **Comando de compilación:** (vacío)
   - **Directorio de salida de compilación:** `/`
4. Pulsa **Guardar e implementar**.

## 2. Crear el almacenamiento

1. Ve a **Almacenamiento y bases de datos → KV → Crear espacio de nombres**.
2. Ponle de nombre `plantillario`.

## 3. Vincularlo al proyecto

En el proyecto de Pages, entra en **Configuración → Enlaces** (Bindings):

- **Añadir → Espacio de nombres KV.** Nombre de la variable: `PLANTILLAS`. Espacio de nombres: `plantillario`.

En **Configuración → Variables y secretos**:

- **Añadir → Tipo: Secreto.** Nombre: `EDIT_KEY`. Valor: la contraseña de edición que tú elijas.

Haz ambas cosas en el entorno de **Producción**.

## 4. Volver a implementar

En **Implementaciones**, pulsa **Volver a intentar la implementación** en la última, para que tome el almacenamiento y la contraseña.

La app quedará en `https://<nombre-del-proyecto>.pages.dev`. Al abrirla, en la parte inferior izquierda aparecerá «guardadas en la nube». Pulsa **Activar edición** y escribe tu contraseña.

## Cómo funciona

- La primera vez, la app carga las plantillas de `plantillas.json`. Desde el primer guardado, las plantillas viven en el almacenamiento de Cloudflare.
- Cada vez que guardas, se conserva una copia de la versión anterior (clave `data:prev` del espacio KV).
- Cada vez que haces `git push` al repositorio, Cloudflare publica la nueva versión de la app sin tocar tus plantillas.
- En un ordenador compartido, desactiva la edición al terminar en **Importar → Desactivar la edición**.
- Para cambiar la contraseña, cambia el secreto `EDIT_KEY` y vuelve a implementar. Los ordenadores que tenían la antigua tendrán que escribir la nueva.
