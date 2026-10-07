# Sahara Bless Travel — código completo para Vercel

Esta carpeta contiene la versión 3 publicada de **Sahara Bless Travel — Revisión 2**, recuperada del repositorio del proyecto. Es una web estática: los archivos HTML, CSS y JavaScript son el código editable completo. No necesita React, WordPress, base de datos ni compilación.

Los 68 archivos de `dist/` se conservan idénticos a la versión recuperada. Corregida la congelación en las transiciones de los vídeos de la home (`dist/hero-reel.js`). El resto de archivos sigue idéntico a la versión recuperada.

## Publicar en Vercel

1. Descomprime el ZIP.
2. Crea un repositorio en tu GitHub y sube **el contenido** de la carpeta `sahara-bless-vercel`. En la raíz del repositorio deben quedar `vercel.json`, `README.md` y la carpeta `dist/`. Conserva todas las subcarpetas y nombres de archivo.
3. En Vercel, elige **Add New → Project** e importa ese repositorio.
4. Usa estos ajustes si Vercel los solicita:

| Ajuste | Valor |
| --- | --- |
| Framework Preset | Other |
| Root Directory | Raíz del repositorio, donde está `vercel.json` |
| Build Command | Vacío; activar Override si hace falta |
| Output Directory | `dist` |
| Install Command | Vacío; no hay dependencias que instalar |
| Variables de entorno | Ninguna |

5. Pulsa **Deploy**. `vercel.json` ya configura la salida estática.

No selecciones `dist` como Root Directory: el archivo de configuración está un nivel por encima. Si has subido la carpeta exterior completa, selecciona `sahara-bless-vercel` como Root Directory.

Referencia oficial: https://vercel.com/docs/builds/configure-a-build

## Qué incluye

- 12 páginas HTML: home, rutas, viajeros, agencias, historia, contacto, cinco itinerarios y la comparativa Erg Chigaga/Merzouga.
- `dist/styles.css`: estilos, colores, tipografías y adaptación a móvil.
- `dist/site.js`: navegación y comportamiento del formulario.
- `dist/hero-reel.js`: secuencia de vídeos de la home.
- 44 imágenes y 7 archivos MP4: seis en `videos/` y el vídeo anterior `images/moment.mp4`.
- `robots.txt` y `sitemap.xml`.
- `docs/`: tres notas originales de diseño, cambios y fotografías pendientes. Son documentación histórica y algunas describen etapas anteriores del diseño.
- `SHA256SUMS.txt`: huellas de los 68 archivos recuperados, para comprobar su integridad.

Las fotos y los vídeos utilizados están incluidos en sus versiones web. No incluye originales de cámara o archivos subidos al chat que nunca formaron parte de la web publicada. Las tipografías Playfair Display y DM Sans se cargan desde Google Fonts y requieren conexión a internet.

## Verla en tu ordenador

Con Python instalado, abre una terminal en esta carpeta y ejecuta:

```sh
python3 -m http.server 8000 --directory dist
```

En Windows también puedes usar `python` o `py` en lugar de `python3`. Abre http://localhost:8000 en el navegador. Para detener el servidor, pulsa Ctrl+C.

## Dominio propio y metadatos

Después de desplegar, añade tu dominio desde la configuración del proyecto en Vercel y aplica en tu proveedor DNS los valores que Vercel te indique.

(Ya aplicado: el dominio es https://www.saharablesstravel.com, con sitemap, robots.txt, imágenes para compartir y etiquetas canónicas.) Antes apuntaban al dominio original de Sites, porque se ha conservado la versión publicada sin modificar. Para adaptarlos al dominio que vayas a usar, con Node.js instalado ejecuta desde esta carpeta:

```sh
node configurar-dominio.mjs https://www.tu-dominio.com
```

Sustituye el ejemplo por tu dominio real, o por la URL de Vercel. El comando solo actualiza los metadatos de dominio en los HTML, `robots.txt` y `sitemap.xml`; no cambia el diseño ni conecta el DNS. Sube los archivos modificados al repositorio para que Vercel los publique. Las huellas originales de `SHA256SUMS.txt` dejarán de coincidir en los archivos que modifiques, como es normal.

## Funciones que siguen pendientes

**Formulario de contacto: falta pegar tu enlace de Formspree.** Está preparado para enviar a info@saharablesstravel.com mediante Formspree. En `dist/contacto.html`, la etiqueta `<form>` tiene `data-endpoint="https://formspree.io/f/PEGA_AQUI_TU_ID"`: sustituye `PEGA_AQUI_TU_ID` por el tuyo. Mientras no lo hagas, el formulario abre el correo del visitante con la consulta redactada.

El botón flotante de WhatsApp (+34 626 841 247) ya está añadido: el número y el mensaje se cambian al final de `dist/site.js`. Siguen pendientes las páginas legales y de cookies. La congelación de las transiciones de vídeo ya está corregida en esta copia.

## Origen de esta copia

- Proyecto: Sahara Bless Travel — Revisión 2.
- Versión publicada recuperada: 3.
- Commit: `60e7031b59bf8c608d5edf06dab3fca6404b58a4`.
- Fecha de exportación: 7 de octubre de 2026.
- Dominio original: https://sahara-bless-travel-revision-2.jacobortega.chatgpt.site

Se han añadido únicamente esta documentación, la configuración para Vercel, el script opcional de dominio y el inventario de integridad. No se han incluido credenciales, el historial Git ni la configuración interna de Sites. No se ha realizado ningún despliegue nuevo.


## Cambios de la versión v2-fotos

En las 5 páginas de ruta se han repartido las fotografías para que cada día tenga una imagen distinta (de 19 fotos distintas a 38). Se añaden 17 imágenes nuevas en `dist/images/`, procedentes de la carpeta de fotos del proyecto y de Adobe Stock, con su texto alternativo. No se han tocado la home, rutas, viajeros, agencias, historia ni contacto. La versión anterior se conserva intacta en `sahara-bless-vercel`.

## Idiomas (ES / EN / FR)

La web está en tres idiomas en carpetas separadas: español en la raíz (`dist/`), inglés en `dist/en/` y francés en `dist/fr/`. Cada página tiene su equivalente en los otros idiomas, selector de idioma (ES · EN · FR) en el menú, etiquetas `hreflang` y `canonical`, y el `sitemap.xml` incluye las 36 direcciones. Las direcciones traducidas son, por ejemplo, `/en/travellers.html` y `/fr/voyageurs.html`. El botón de WhatsApp y los mensajes del formulario también cambian de idioma. Conviene que un hablante nativo revise las traducciones al francés y al inglés antes de publicar.
