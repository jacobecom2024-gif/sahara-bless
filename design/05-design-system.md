# 05 · Design system — Sahara Bless Travel

Fase 5. Traduce la dirección **"Hamada"** (03) a tokens y contratos de componente.
Implementación: CSS plano con custom properties en `src/styles/tokens.css`.
**No se usa Tailwind** — ver "Decisiones de implementación" al final.

Todos los pares de color de este documento están **medidos**, no estimados
(script de contraste en el scratchpad de la sesión).

---

## 1 · Color

### Superficies

| Token | Hex | Uso |
|---|---|---|
| `--sup-arena` | `#F7F2E9` | fondo por defecto de todo el sitio (carril B2C) |
| `--sup-hueso` | `#EFE7D8` | sección alterna, para marcar cambio de bloque sin caja |
| `--sup-tinta` | `#1B1714` | secciones oscuras editoriales (cierres, citas) |
| `--sup-noche` | `#1E2A35` | **carril B2B**: página Agencias y todo bloque para agencias |

Regla: las secciones **no llevan borde ni sombra**. Se separan por cambio de superficie.
Nunca dos superficies iguales seguidas sin una foto a sangre entre medias.

### Texto

| Token | Hex | Sobre | Ratio |
|---|---|---|---|
| `--txt-fuerte` | `#1B1714` | arena / hueso | 15.97 / 14.49 ✓ |
| `--txt-apagado` | `#5B5147` | arena | 6.94 ✓ |
| `--txt-inv-fuerte` | `#F7F2E9` | tinta / noche | 15.97 / 13.10 ✓ |
| `--txt-inv-apagado` | `#B3A996` | tinta / noche | — / 6.28 ✓ |

### Acentos

| Token | Hex | Uso permitido | Ratio |
|---|---|---|---|
| `--ac-terracota` | `#9E4523` | texto de enlace y fondo de botón primario **solo sobre claro** | 5.66 sobre arena ✓ · blanco encima 6.31 ✓ |
| `--ac-ocre-claro` | `#C89346` | acento **solo sobre oscuro** (etiquetas, enlaces en noche/tinta) | 5.37 sobre noche ✓ |
| `--ac-ocre` | `#B8823A` | **decoración exclusivamente**: filetes, subrayados, fondo de botón con texto tinta (5.34 ✓) | ⚠️ 2.99 sobre arena — **prohibido como color de texto sobre claro** |
| `--ac-palmeral` | `#4F6350` | acento frío puntual (páginas de oasis/montaña) | 5.82 sobre arena ✓ |

> ⚠️ `--ac-terracota` sobre `--sup-noche` da 2.32 → **prohibido**. En superficie oscura el
> acento es siempre `--ac-ocre-claro`. Esta es la trampa más fácil de este sistema: el
> mismo botón "primario" no puede pintarse igual en los dos carriles.

### Líneas

| Token | Hex | Uso |
|---|---|---|
| `--linea-suave` | `#DED2BE` | filete decorativo sobre claro (1.34 — **nunca** borde de control) |
| `--linea-control` | `#8A7C66` | borde de botón/campo sobre claro (≥3:1 ✓) |
| `--linea-suave-inv` | `#33404B` | filete decorativo sobre oscuro |
| `--linea-control-inv` | `#6B7E8C` | borde de botón/campo sobre oscuro (≥3:1 ✓) |

### Velos sobre fotografía

Todo texto sobre foto lleva velo obligatorio. Nunca texto directo sobre la imagen.

```css
--velo-hero: linear-gradient(180deg,
  rgba(27,23,20,.45) 0%, rgba(27,23,20,.28) 38%, rgba(27,23,20,.80) 100%);
--velo-tarjeta: linear-gradient(180deg,
  rgba(27,23,20,0) 30%, rgba(27,23,20,.82) 100%);
```

El texto se ancla siempre en la **zona inferior**, donde el velo está en ≥.78 → blanco a
más de 10:1 incluso sobre la foto más clara del set (medido con la duna a mediodía).

### Grano

`--grano`: SVG `feTurbulence` en `background-image`, opacidad **0.035**, `pointer-events:none`,
solo sobre superficies planas (nunca sobre fotos). Es lo que hace convivir las fotos de
móvil con las profesionales. Se desactiva en `print`.

---

## 2 · Tipografía

- **Display**: `Fraunces` variable, ejes `opsz` y `wght` (300–600), `SOFT` 20 para
  redondear ligeramente los remates. Nunca itálica de display (cliché de lujo).
- **Cuerpo/UI**: `Karla`, 400 / 500 / 600.
- Carga: `display=swap`, preconnect a `fonts.gstatic.com`, y `font-size-adjust` para
  reducir el salto.

### Escala (fluida, `clamp`)

| Token | Móvil → Escritorio | Familia | Uso |
|---|---|---|---|
| `--t-hero` | 2.5rem → 4.75rem | Fraunces 400 | h1 de hero |
| `--t-h1` | 2rem → 3.25rem | Fraunces 400 | h1 de página |
| `--t-h2` | 1.6rem → 2.5rem | Fraunces 400 | títulos de sección |
| `--t-h3` | 1.25rem → 1.55rem | Fraunces 500 | subtítulos, títulos de día |
| `--t-lead` | 1.125rem → 1.3rem | Karla 400 | entradilla bajo titular |
| `--t-cuerpo` | 1.0625rem → 1.125rem | Karla 400 | cuerpo (mín. 17px móvil) |
| `--t-menor` | 0.9375rem | Karla 400 | pies de foto, notas |
| `--t-etiqueta` | 0.75rem | Karla 600, `letter-spacing:.14em`, mayúsculas | versalitas: `DÍA 3 ·`, `AGENCIAS`, pies |

- `line-height`: 1.05 en hero, 1.12 en h1/h2, **1.65 en cuerpo**.
- Medida: `--medida: 62ch` general; `--medida-relato: 54ch` en Nuestra historia.
- `text-wrap: balance` en titulares, `pretty` en párrafos.
- Los titulares del cliente vienen en MAYÚSCULAS en los PDFs. **Se escriben en caso
  normal en el HTML** y las mayúsculas se aplican con CSS solo en las etiquetas
  (`--t-etiqueta`). Motivo: un lector de pantalla deletrea las mayúsculas literales,
  y los titulares largos en caja alta son ilegibles en móvil.

---

## 3 · Espacio y ritmo

Escala base 4px: `4 8 12 16 24 32 48 64 96 128 160`.

| Token | Valor | Uso |
|---|---|---|
| `--gutter` | `clamp(20px, 5vw, 40px)` | margen lateral de página |
| `--ancho-pagina` | `1200px` | contenedor por defecto |
| `--ancho-texto` | `680px` | bloques de sólo texto |
| `--seccion-y` | `clamp(72px, 11vw, 152px)` | separación vertical entre secciones |
| `--bloque-y` | `clamp(32px, 5vw, 56px)` | dentro de una sección |

El "ritmo" obligatorio del brief se implementa como un patrón repetible:
`titular (h2) → 2-4 líneas (max 62ch) → foto a sangre o casi → bloque menor → aire → CTA`.
Una sección **nunca** encadena dos párrafos de más de 4 líneas.

Nombres deliberadamente fuera de cualquier espacio de nombres de framework, para que
ningún generador de utilidades pueda pisarlos.

---

## 4 · Forma, elevación, movimiento

- Radios: `--r-nada: 0` · `--r-suave: 3px` (imágenes, campos) · `--r-pildora: 999px` (botones).
- **Sombras: una sola.** `--sombra-header: 0 1px 0 rgba(27,23,20,.10), 0 8px 24px -18px rgba(27,23,20,.5)`,
  y únicamente en el header cuando hay scroll. Las tarjetas no llevan sombra.
- **`backdrop-filter` prohibido** en todo el proyecto (crea bloque contenedor y rompe
  los `position: fixed` hijos — es un fallo conocido de este pack). El header con scroll
  usa color sólido, no cristal.
- Movimiento: entrada `opacity 0→1` + `translateY(12px→0)`, 350ms `cubic-bezier(.22,.61,.36,1)`,
  escalonado 60ms en listas. Hero: `scale(1→1.06)` en 18s. Nada más.
- `@media (prefers-reduced-motion: reduce)`: todo a 0.01ms y sin transform.

---

## 5 · Contratos de componente

### Botón

| Variante | Sobre claro | Sobre oscuro |
|---|---|---|
| **Primario** | fondo `--ac-terracota`, texto blanco | fondo `--ac-ocre-claro`, texto `#1B1714` |
| **Secundario** | transparente, borde 1px `--linea-control`, texto `--txt-fuerte` | transparente, borde 1px `--linea-control-inv`, texto `--txt-inv-fuerte` |
| **Enlace-flecha** | texto `--ac-terracota` + `→`, subrayado que crece al hover | texto `--ac-ocre-claro` + `→` |

- Altura mínima **48px**, padding `14px 28px`, `--t-cuerpo` peso 600, píldora.
- Estados: `hover` oscurece 6% + la flecha se desplaza 3px; `active` escala 0.98;
  `focus-visible` anillo de 3px `--ac-terracota` (o `--ac-ocre-claro` en oscuro) con
  2px de separación; `disabled` opacidad .5 + `cursor:not-allowed`.
- La flecha `→` va en un `<span aria-hidden="true">`, nunca dentro del texto accesible.

### Tarjeta de ruta

Foto 3:2 a sangre dentro de la tarjeta, sin marco ni sombra. Sobre la foto, en la zona
inferior y con `--velo-tarjeta`: nombre de ruta (Fraunces) y duración. Debajo, sobre
superficie: lugares en `--t-etiqueta`, 2 líneas de descripción, `Ver la ruta →`.
Toda la tarjeta es clicable (enlace envolvente); el CTA visual no es un segundo enlace
anidado, es un `<span>` decorativo.
Hover: la imagen escala a 1.03 en 500ms; el texto no se mueve.

### Día de itinerario

`DÍA 3 · MARRAKECH → AÏT BEN HADDOU` (etiqueta) / título corto (h3) / 2-4 líneas /
fotografía. Alterna el lado de la foto en escritorio (par/impar); en móvil siempre
texto→foto. Filete `--linea-suave` de 1px como separador entre días.

### Bloque B2B

Superficie `--sup-noche` obligatoria + etiqueta `PARA AGENCIAS` en `--ac-ocre-claro`.
Es el marcador de carril: si un bloque habla a agencias y no está sobre noche, está mal.

### Header

Altura medida en tiempo real con `ResizeObserver` → `--altura-header`.
**Nunca** se codifica a mano un valor de altura (fallo conocido del pack).
Transparente sobre el hero, sólido `--sup-arena` a partir de 40px de scroll.
Móvil: panel a pantalla completa (`position: fixed; inset: 0`), sin `backdrop-filter`,
con foco atrapado y cierre con `Esc`.

### Campo de formulario

Etiqueta visible siempre (nunca solo `placeholder`). Borde 1px `--linea-control`,
altura mínima 48px, `--r-suave`. Error debajo del campo con `role="alert"`, texto
`#8C2F1B` (≥4.5 sobre arena) y borde del campo en el mismo color. `inputmode`/`type`
correctos para que el móvil abra el teclado adecuado.

### Pie de foto

`--t-etiqueta`, `--txt-apagado`, alineado a la izquierda bajo la imagen, 8px de
separación. Tomado de la dirección A.

---

## 6 · Decisiones de implementación

**Sin Tailwind, CSS plano con custom properties.** Razón concreta: los fallos
documentados en este pack por Tailwind v4 (declarar claves propias en `@theme` mata
espacios de nombres enteros de utilidades sin ningún error en build, y el escaneo toma
el cwd del proceso y no el del CSS). Este proyecto es fotográfico y tiene pocos
componentes muy repetidos; el coste de escribir CSS a mano es bajo y elimina de raíz esa
clase de fallo silencioso.

**Sin librería de componentes.** No hay ni un patrón en este sitio (tarjeta, itinerario,
formulario bifurcado) que se beneficie de una dependencia. Fase 6 (`component-curation`)
se salta con este motivo explícito.

**Iconografía**: SVG en línea dibujados a mano en el propio repo (flecha, WhatsApp,
menú, cerrar, check). Sin librería de iconos y **sin emoji** — el brief pide iconos en
Agencias, y el material del cliente usa `●` y `📷` como marcas de redacción, no como
iconografía final.

**Imágenes**: `loading="lazy"` salvo el hero de cada página (`fetchpriority="high"`),
`width`/`height` o `aspect-ratio` siempre declarados para no provocar CLS, y `alt`
descriptivo escrito a mano para cada foto usada.
