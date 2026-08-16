# Sahara Bless Travel

Web de Sahara Bless Travel: partner local en Marruecos para agencias (B2B, prioritario)
y viajes a medida para viajeros (B2C).

Vite + React + React Router. CSS plano con custom properties, sin Tailwind y sin
librerías de componentes, iconos o animación.

---

## Poner en marcha

```bash
npm install
npm run dev        # http://localhost:5174
npm run build      # genera dist/
npm run preview    # sirve el build
npm run lint
```

## Publicar

**Producción: Vercel.** Detecta Vite solo (build `npm run build`, salida `dist`);
lo único que no adivina va en `vercel.json`: el fallback de la SPA —sin él, entrar
directo en `/agencias` da 404— y la caché de assets y fotos.

**Previsualización en un hosting Apache** (cPanel/FTP): `npm run build` y se sube el
contenido de `dist/` a la raíz del dominio. El `.htaccess` viaja dentro y hace el
mismo trabajo que los `rewrites` de Vercel. Ojo: el gestor de archivos de cPanel
oculta los dotfiles por defecto, así que hay que activar "mostrar archivos ocultos"
para comprobar que llegó.

> `robots.txt` está en **modo previsualización** (`Disallow: /`) a propósito. El
> propio archivo explica qué poner cuando la web sea definitiva.

## Antes de publicar — tres cosas obligatorias

1. **Datos de contacto.** Rellenar `WHATSAPP` y `EMAIL` en `src/datos/marca.js`.
   Están vacíos a propósito: mientras lo estén, los enlaces de WhatsApp y correo
   no se muestran en lugar de apuntar a un número inventado.
2. **Destino del formulario.** `src/paginas/Contacto.jsx`, función `enviar()`, bloque
   marcado con `TODO`. Ahora valida y confirma, pero no envía nada a ninguna parte.
3. **Dominio en `public/robots.txt`** (línea `Sitemap:`) y páginas legales
   (aviso legal, privacidad, cookies), que no existen todavía.

## Estructura

```
design/           las 7 fases del proceso: por qué es así y no de otra manera
fotos-originales/ los 36 JPEG extraídos de los PDF del cliente (NO se publican)
public/fotos/     los 72 WebP que sí se sirven (36 fotos x 2 anchos)
scripts/          optimizar-fotos.mjs: JPEG -> WebP 800 y 1600
src/datos/        todo el texto y el catálogo de fotos. Editar aquí, no en los .jsx
src/componentes/  Cabecera, Hero, Foto, Boton, TarjetaRuta, BloqueCTA...
src/paginas/      una por ruta
src/estilos/      tokens · base · componentes · paginas
```

## Dónde se cambia el texto

Todo el copy vive en `src/datos/`. Las páginas no llevan texto escrito dentro:

- `contenido.js` — Inicio, Rutas (índice), Viajeros, Agencias, Nuestra historia,
  Erg Chigaga o Merzouga, Contacto, menú y etiquetas de los CTA.
- `rutas.js` — las 5 rutas con su itinerario día a día.
- `fotos.js` — catálogo de fotos con su texto alternativo.
- `marca.js` — nombre, territorio y datos de contacto.

## Fotografías

`npm run` no las procesa. Cuando cambien:

```bash
node scripts/optimizar-fotos.mjs
```

Lee `fotos-originales/*.jpg` y escribe `public/fotos/<nombre>-800.webp` y `-1600.webp`.
Después hay que dar de alta la foto en `src/datos/fotos.js` con sus dimensiones
reales y un `alt` que describa **lo que se ve**, no lo que dice la sección.

## Reglas del proyecto que no son negociables

Vienen del brief del cliente y están razonadas en `design/`:

- Premium **pero humano**. Nada de dorado, cristal, sombras difusas ni gradientes.
- Fotografía real. Nunca banco de imágenes.
- Los CTA son siempre específicos. Prohibidos *Más información*, *Saber más*,
  *Enviar*, *Contactar* y *Reservar ahora*.
- Los mensajes B2B y B2C no se mezclan dentro del mismo bloque. El carril B2B se
  reconoce por la superficie oscura (`--sup-noche`), no solo por el texto.
- Las rutas son puntos de partida, no viajes cerrados.
- WhatsApp visible, pero no un botón gigante en cada sección.
- Ritmo: titular → 2-4 líneas → foto grande → bloque pequeño → aire → CTA.

## Dos trampas de este código

- **`backdrop-filter` está prohibido.** Crea bloque contenedor y haría que el panel
  móvil (`position: fixed`) se dimensione contra la cabecera en lugar de contra el
  viewport. La cabecera con scroll usa color sólido.
- **La altura de la cabecera no se escribe a mano.** La mide un `ResizeObserver` y la
  publica en `--altura-cabecera`. Cambia con el tamaño de fuente y con el idioma.
