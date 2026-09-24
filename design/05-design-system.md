# 05 · Design system — Sahara Bless Travel

Fase 5. Dirección visual vigente: **"Editorial de viaje con las manos en la tierra."**
Implementación: CSS plano con custom properties en `src/estilos/tokens.css`.
**No se usa Tailwind** — ver "Decisiones de implementación" al final.

Este documento y `tokens.css` son la misma fuente de verdad: **un color o una fuente
que no esté aquí no se usa en el sitio**. Todos los contrastes están medidos (WCAG 2.1),
no estimados.

> Revisión 2026-09: sustituye a la dirección anterior ("Hamada": arena/hueso/tinta/noche,
> ocre, velos en degradado y carril B2B oscuro). Lo que aquel documento llamaba
> superficies oscuras dominantes, degradados y oro brillante está hoy **prohibido**.

---

## 0 · Jerarquía del sitio (revisión 2026-09-20)

**La portada habla primero a agencias.** Aproximadamente 70 % del peso visual y de
contenido en clave B2B y 30 % en clave B2C: el hero, el primer argumento, el producto
insignia (Erg Chigaga) y el CTA principal se dirigen a agencias; la vía para viajeros
particulares aparece después del bloque de agencias, con sección propia, superficie arena
y su propio CTA — presente y digna, nunca escondida ni repetida en cada sección.

Medido en la portada (alturas reales a 1440 px): 6.693 px de secciones B2B, 556 px de la
entrada B2C y 2.745 px de secciones de marca (manifiesto, foto a sangre, las dos
miradas).

Nombres: **Abdoul** (no "Abdellah") y **Erg Chigaga** (no "Erg Chegaga"), en contenido,
`alt`, metadatos y URLs.

---

## 1 · Color

Paleta semántica: los tokens se llaman por lo que significan, no por su tono.

### Superficies

| Token | Hex | Uso |
|---|---|---|
| `--color-base` | `#F7F4EE` | blanco roto. Fondo dominante: **~80 % del sitio** |
| `--color-arena` | `#E8DFCE` | fondo secundario, para marcar cambio de bloque sin caja |
| `--color-superficie-inversa` | `= --color-texto` | **solo el pie de página** |

Clases: `.sup-base`, `.sup-arena`, `.sup-inversa`.

Reglas:
- Las secciones **no llevan borde ni sombra**: se separan por cambio de superficie y por aire.
- Arena se usa **con cuentagotas**, una o dos veces por página como mucho.
- **Ningún fondo oscuro dominante.** La superficie inversa es solo el pie.

### Texto

| Token | Hex | Sobre | Ratio |
|---|---|---|---|
| `--color-texto` | `#2A2621` | base / arena | 13.69 ✓ / 11.36 ✓ |
| `--color-texto-suave` | `#5D5A54` | base / arena | 6.26 ✓ / 5.20 ✓ |
| `--color-texto-inverso` | `= --color-base` | superficie inversa | 13.69 ✓ |
| `--color-texto-inverso-suave` | `#AFACA6` | superficie inversa | 6.64 ✓ |

**Nunca `#000`.** El texto es un negro cálido; el negro puro rompe el papel.

### Acentos — uno por sección

| Token | Hex | Uso permitido | Ratio |
|---|---|---|---|
| `--color-acento-terracota` | `#8B5240` | CTA, enlaces, etiquetas, detalles puntuales | 5.66 base ✓ · 4.70 arena ✓ · base encima 5.66 ✓ |
| `--color-acento-atlantico` | `#4A6670` | **solo contenido de Essaouira / Atlántico** | 5.58 base ✓ · 4.63 arena ✓ |
| `--color-acento-oliva` | `#5E6A48` | **solo vegetación / oasis** en contexto | 5.27 base ✓ · 4.37 arena (solo texto grande) |

> Regla dura: **un acento por sección**, nunca dos en la misma pantalla. El acento por
> defecto del sitio es terracota; atlántico y oliva son excepciones temáticas, no
> alternativas de estilo.

### Derivados (mezclas de la paleta, no colores nuevos)

| Token | Hex | Uso |
|---|---|---|
| `--color-linea` | `#DAD7D1` | filete decorativo. **Nunca** borde de control |
| `--color-linea-control` | `#7C7873` | borde de botón/campo sobre claro (≥3:1 ✓) |
| `--color-linea-inversa` | `#433F3A` | filete sobre superficie inversa |
| `--color-acento-terracota-hover` | `#7A4A3A` | hover del primario |
| `--color-error` | `#86412B` | error de formulario · 6.82 base ✓ · 5.66 arena ✓ |

### Prohibido

Oro brillante · degradados decorativos · naranja turístico saturado · azul corporativo
genérico · glassmorphism y `backdrop-filter` · fondos oscuros como superficie dominante.

### Excepciones acordadas

1. `--color-whatsapp: #1F7A4D` y el blanco de su glifo y su anillo de foco: es el
   identificador de un servicio externo, no un color de marca del sitio. Se usa una
   versión más oscura y menos saturada que la oficial (#25D366) para que el flotante no
   sea el color más intenso de la pantalla: el glifo blanco pasa de 1.98:1 a **5.32:1**.
   El botón mide 46px y su comportamiento no cambia: `position: fixed`, visible siempre.
2. Una sola sombra suave, **únicamente en los elementos flotantes** (botón de WhatsApp y
   CTA flotante): `0 2px 10px -4px rgba(42,38,33,.35)`. Entre secciones, cero sombras.
3. **El velo del hero** (revisión 2026-09-20, por encargo de la clienta): el único
   degradado del sitio. Sustituye al bloque opaco que tapaba media portada. No es
   decoración: es la condición para poder escribir sobre la foto sin ocultarla. Sus dos
   capas y sus contrastes medidos están en "Hero" (§6).
4. **Una sola pantalla oscura por página como mucho**, además del pie: el "momento de
   cita" (§6). No es una superficie de uso general.

### Grano

`.grano::after`: ruido `feTurbulence` en `background-image`, opacidad **0.035**,
`pointer-events:none`, **solo sobre superficies planas, nunca sobre fotografía**. Es la
"tierra" del concepto y lo que hace convivir las fotos de móvil con las profesionales.
Se desactiva en `print`. No es un degradado.

---

## 2 · Tipografía

- **Display**: `Fraunces` variable, pesos **400–600**, `font-optical-sizing: auto` y
  `font-variation-settings: 'SOFT' 20, 'opsz' 144` en h1, h2 y titulares de hero y cierre
  (opsz alto = remates de revista). Nunca itálica de display.
- **Cuerpo / UI**: `Karla`, **400–500**, y **600 solo en etiquetas y botones**.
- **Sin Inter** en ningún punto del sitio, ni como fallback.
- Carga: `display=swap`, preconnect a `fonts.gstatic.com`.

| Token | Móvil → Escritorio | Familia | Uso |
|---|---|---|---|
| `--t-hero` | 2.75rem → 5.75rem | Fraunces 400 | h1 de hero |
| `--t-h1` | 2rem → 3.25rem | Fraunces 400 | h1 de página |
| `--t-h2` | 1.6rem → 2.5rem | Fraunces 400 | títulos de sección |
| `--t-h3` | 1.25rem → 1.55rem | Fraunces 500 | subtítulos, títulos de día |
| `--t-lead` | 1.125rem → 1.3rem | Karla 400 | entradilla |
| `--t-cuerpo` | 1.0625rem → 1.125rem | Karla 400 | cuerpo (mín. 17px en móvil) |
| `--t-menor` | 0.9375rem | Karla 400 | pies de foto, notas |
| `--t-etiqueta` | 0.75rem | Karla 600, `letter-spacing:.14em`, mayúsculas | versalitas |

- `line-height`: 1.05 en hero, 1.12 en h1/h2, **1.65 en cuerpo**.
- Medida: `--medida: 62ch`; `--medida-relato: 54ch` en Nuestra historia.
- `text-wrap: balance` en titulares, `pretty` en párrafos.
- Los titulares del cliente vienen en MAYÚSCULAS en los PDF: **se escriben en caso normal
  en el HTML** y las mayúsculas se aplican por CSS solo en etiquetas (un lector de
  pantalla deletrea las mayúsculas literales).

---

## 3 · Espacio y ritmo

| Token | Valor | Uso |
|---|---|---|
| `--spacing-section` | `clamp(88px, 12vw, 168px)` | separación vertical entre secciones |
| `--spacing-bloque` | `clamp(32px, 5vw, 56px)` | dentro de una sección |
| `--gutter` | `clamp(20px, 5vw, 40px)` | margen lateral |
| `--ancho-pagina` | `1200px` | contenedor por defecto |
| `--ancho-texto` | `680px` | bloques de solo texto |

El aire es el principal recurso expresivo del sistema: **el espacio entre secciones es
generoso y deliberado**, y sustituye a bordes, cajas y sombras.

Ritmo de página: `titular (h2) → 2-4 líneas (máx. 62ch) → foto a sangre o casi → bloque
menor → aire → CTA`. Una sección nunca encadena dos párrafos de más de 3 líneas, y se
lee entera en menos de 15 segundos.

**Variedad obligatoria** (revisión 2026-09-20): una página no puede encadenar la misma
composición "columna de texto + columna de foto" de arriba abajo. Cada página larga
alterna al menos tres pesos distintos: bloque de texto, dos columnas, foto a sangre sola
y —cuando el contenido lo pide— un momento de cita a pantalla oscura. En Inicio la
secuencia es 823 · 76 · 483 · 1225 · 788 · 996 · 2049 · 808 · 762 · 769 · 756 px:
ninguna sección pesa lo mismo que la anterior.

Nombres deliberadamente fuera de cualquier espacio de nombres de framework.

---

## 4 · Fotografía

La fotografía es el color del sitio. Por eso la paleta es sobria: **el acento cromático
lo pone la foto, no la interfaz**.

### Alternancia obligatoria T1 / T2

| Tipo | Qué es | Función |
|---|---|---|
| **T1** | plano abierto y compuesto: dunas, campamento, kasbah, carretera | sitúa, da escala |
| **T2** | plano cercano con textura y presencia humana real: manos, té, fuego, una puerta, un rostro de perfil | da verdad |

**Ninguna página puede apoyarse en un solo tipo.** Toda página con más de una foto
alterna T1 y T2; si una página se queda solo con planos abiertos (p. ej. el índice de
rutas, donde las cinco tarjetas son T1), el plano cercano lo pone su cierre.

Además: al menos **una foto casi a pantalla completa por página** (`.hero`,
`.cierre--foto` o `.foto-plena`, `min(84svh, 780px)`). Nada de rejillas de catálogo
con fotos pequeñas.

### Exclusiones

Sin modelos posando · sin grupos turísticos grandes · sin el cliché del camello ·
sin aspecto de banco de imágenes · **sin imagen generada por IA**.

### Tratamiento de color

Las fotos llegan de fuentes muy distintas (PDF, móvil, réflex, retoques previos), así que
antes de entrar en `fotos-originales/` pasan por un ajuste **mínimo y medido**, no por un
filtro de estilo: cada foto se acerca a medias al rango del catálogo existente
(saturación p25–p75 ≈ 82–120, calidez R−B ≈ 0–48, luz mediana ≈ 127), con topes de
±12 % de saturación y ±3 % de balance R/B, y gamma solo si está sobreexpuesta.
Criterio: que convivan en la misma página sin que se note la corrección.

### Texto sobre foto

- **Hero**: el texto va sobre la foto, protegido por el velo de dos capas (§6). La foto
  se ve entera; lo que se oscurece es la esquina donde se apoya el texto.
- **Cierre con foto** (`BloqueCTA`): sigue con el texto en un panel de `--color-base`.
  Ahí el bloque no tapa el motivo, porque la foto es panorámica y el panel va al pie.
- Nunca texto claro sobre foto **sin** velo, y nunca velo sobre una foto que no lleve
  texto encima.

### Técnica

`loading="lazy"` salvo el hero de cada página (`fetchpriority="high"`), `width`/`height`
o `aspect-ratio` siempre declarados (cero CLS), dos WebP por foto (`-800`, `-1600`)
generados por `scripts/optimizar-fotos.mjs`, y `alt` escrito a mano que describe **lo que
se ve**, sin atribuir identidades que no podamos confirmar.

---

## 5 · Forma, elevación, movimiento

- Radios: `--r-suave: 3px` (imágenes, campos) · `--r-pildora: 999px` (botones).
- **Sombras**: solo la de los elementos flotantes (ver excepciones). Secciones y tarjetas,
  ninguna.
- **`backdrop-filter` prohibido** en todo el proyecto (crea bloque contenedor y rompe los
  `position: fixed` hijos — fallo conocido de este pack), además de por dirección visual.
- Movimiento (sin cambios respecto a la dirección anterior): entrada `opacity 0→1` +
  `translateY(12px→0)`, `--dur 350ms` con `--curva cubic-bezier(.22,.61,.36,1)`,
  escalonado de 60ms en listas. Hero: `scale(1→1.06)` en 18s. **Nada más.**
- `@media (prefers-reduced-motion: reduce)`: todo a 0.01ms y sin transform.

---

## 6 · Contratos de componente

### Botón

| Variante | Sobre claro |
|---|---|
| **Primario** | fondo `--color-acento-terracota`, texto `--color-base` (5.66 ✓) |
| **Secundario** | transparente, borde 1px `--color-linea-control`, texto `--color-texto` |
| **Enlace-flecha** | texto `--color-acento-terracota` + `→`, subrayado que crece al hover |

- Altura mínima **48px**, padding `14px 28px`, `--t-cuerpo` peso `--peso-ui` (600), píldora.
- Estados: `hover` → `--color-acento-terracota-hover` y la flecha avanza 3px; `active`
  escala 0.98; `focus-visible` anillo de 3px con 2px de separación; `disabled` opacidad .5.
- La flecha `→` va en un `<span aria-hidden="true">`.

### Cabecera

**Siempre sólida**: fondo `--color-base`, filete inferior de 1px `--color-linea`, sin
sombra y sin estado transparente. Texto siempre `--color-texto`.
Altura medida en tiempo real con `ResizeObserver` → `--altura-cabecera` (nunca se codifica
a mano). Compacta desde 2026-09-24: **53 px** en escritorio (antes 78), porque le comía
altura al vídeo del hero. Móvil: panel a pantalla completa (`position: fixed; inset: 0`), sin
`backdrop-filter`, con foco atrapado y cierre con `Esc`.

### Hero

Foto a sangre. El **titular domina la pantalla** (`--t-hero`, hasta 92px a 1440) y es lo
único que compite con la imagen: las acciones de portada viven en la sección siguiente,
no dentro del hero.

**Dos velos, uno por tipo de hero.** El bloque de texto de la portada ocupa 420 px de un
hero de 900; el de una página interior, 450 px de uno de 714. El mismo degradado no puede
servir para los dos.

*Páginas interiores* (`.hero__velo`), en píxeles desde abajo, no en porcentaje — el bloque
de texto no escala con el alto del hero:

```css
linear-gradient(to top, rgb(42 38 33/.93) 0, rgb(42 38 33/.88) 180px,
                rgb(42 38 33/.74) 360px, rgb(42 38 33/.50) 520px,
                rgb(42 38 33/.18) 660px, transparent 780px),
linear-gradient(90deg, rgb(42 38 33/.62) 0%, rgb(42 38 33/.34) 30%, transparent 58%)
```

Contraste medido pixel a pixel sobre la franja real de texto: **mínimo 5.93:1** (Agencias).

*Portada* (`.hero--completo .hero__velo`), degradados localizados (valores de la clienta,
2026-09-21): la foto es el argumento y tiene que verse.

```css
linear-gradient(90deg, rgb(22 18 14/.55) 0%, rgb(22 18 14/.28) 42%, transparent 78%),
linear-gradient(0deg, rgb(22 18 14/.50) 0%, rgb(22 18 14/.26) 32%, transparent 66%)
```

Uno entra por la izquierda (la columna del texto) y otro apoya el pie de la foto para
coser el hero con la sección siguiente. La imagen conserva el **76 %** de su luminosidad
original. Medido por elemento sobre la foto real: titular de entrada 5.01:1, titular
grande 3.36:1 (umbral 3 por tamaño), confirmación 10.9:1, descripción 11.3:1.

Como este velo es flojo a propósito, el texto del hero lleva `text-shadow` de apoyo por
encima de 720px. La sombra no cuenta para WCAG: los números de arriba son sin ella.

Sobre foto, el subtítulo y la etiqueta usan el mismo tono claro que el titular y **no** el
tono suave (que caía a 2.90:1); el secundario del hero toma borde y texto inversos.

### Composición del hero de portada

Orden de lectura: **titular → confirmación comercial → descripción**. La línea "Partner
local para agencias de viajes" va debajo del titular, no encima: confirma lo que el
titular promete en vez de anunciarlo.

**Crescendo** (`crescendo` en el componente, solo con `titulo` de dos elementos): el
titular llega en dos tamaños, `clamp(1.5rem, 1rem + 1.9vw, 2.6rem)` la entrada y
`clamp(2.5rem, 1.2rem + 4.7vw, 4.25rem)` el remate — 61 % frente a 100 % a 1440px. El
remate es el elemento más grande de toda la pantalla.

**Sin acciones dentro del hero de portada**: los dos CTA viven en la sección siguiente,
sobre fondo claro.

**Titular largo**: si el titular pasa de 48 caracteres, el componente le pone
`.hero__titulo--largo` y baja a `clamp(2.1rem, 1rem + 3.2vw, 2.85rem)`. No es un capricho
tipográfico: con el titular de portada a 92 px el bloque empezaba al 15 % de alto, fuera
de la zona protegida, y tapaba la foto entera otra vez.

Alturas: `completo` `min(100svh - cabecera, 900px)`, `medio` `min(88svh - cabecera, 780px)`.
Bajo 720px no hay velo: la foto ocupa 62svh y el texto baja debajo, sobre base, con la
etiqueta otra vez en terracota y el subtítulo en `--color-texto-suave` (variables
`--hero-etiqueta` y `--hero-subtitulo`).

### Foto a sangre con pie (`.foto-plena--con-pie`)

Una foto sola, a `min(84svh, 780px)`, sin texto encima ni columna al lado, con un pie
discreto debajo. Es la ruptura obligatoria del patrón "texto + foto": al menos una por
página larga (Inicio y Viajeros la tienen).

### Cuatro pilares

Lista **vertical**, no cuadrícula: cada punto en su línea, separados por filete de 1px,
con el título en `--t-h2` (Fraunces) y el número en Fraunces a `clamp(4.5rem, 12vw, 9rem)`
con `opacity: .07`, absoluto a la derecha y `aria-hidden`. Es marca de agua, no texto.

### CTA

**Frase única B2B**: todo CTA principal dirigido a agencias dice
**"Hablemos de vuestra agencia"** (`CTA.agencia`) — sección de reputación de la portada,
bloque de "cómo trabajamos", hero y cierre de Agencias. No se inventa una variante por
sección.

**Única excepción**: la cabecera usa la variante corta **"Para agencias"**
(`CTA.agenciasPagina`), que lleva a `/agencias` — el rótulo coincide con la página de
destino. No hay ninguna otra variante corta en el sitio.
El carril B2C mantiene "Diseñar mi viaje" / "Quiero diseñar mi viaje" (`CTA.viajero`).

Cuando las dos vías conviven en un mismo bloque, la secundaria es **un enlace**, nunca un
segundo botón: `.hero__enlace` y `.cierre__secundario`.

**Flecha (regla de todo el sitio, 2026-09-24):** botón sólido → **sin** flecha; enlace de
texto subrayado → **con** flecha. El fondo ya dice que se puede pulsar; la flecha es lo
que convierte un texto en acción. Lo decide la variante en `Boton.jsx`, no cada página.

**La cabecera no lleva CTA.** El botón "Para agencias" llevaba al mismo sitio que el
enlace "Agencias" del menú, a dos centímetros de distancia. El carril de viajeros tiene su
botón en el panel móvil y su CTA flotante en las páginas B2C.

### Pasos (cómo trabajamos)

Tres columnas en escritorio, una en móvil. Número en `--t-etiqueta` terracota, filete
superior de 1px, una frase por paso y un solo CTA al final del bloque. Sin flechas ni
diagramas.

### Momento de cita

Una sección por página como mucho. Superficie inversa, `padding-block`
`clamp(120px, 18vw, 240px)`, titular en `clamp(2.25rem, 1.1rem + 5.2vw, 5rem)` centrado y
**nada más**: sin foto, sin botón, sin enlace. Es el silencio antes del CTA.
En Inicio es "Marruecos no termina…"; en Nuestra historia, el compromiso compartido.

### Tarjeta de ruta

Formato único para las cinco (2026-09-24): **título → foto 3:2 → pie con el nombre y las
paradas**. Ninguna es más grande que las demás; antes la primera ocupaba el ancho completo
y creaba una jerarquía que no existe.

Toda la tarjeta es **un solo enlace** envolvente, aunque el título y el pie se vean como
enlaces: dos `<a>` al mismo destino duplican la parada de tabulación.

**Hover**: fundido de 900 ms a una segunda foto de la misma ruta (`fotoAlterna`), y vuelta
al salir. Nada de zoom. Solo con `hover: hover` y `pointer: fine`; en táctil la segunda
foto ni se pinta ni se descarga, y con `prefers-reduced-motion` desaparece.

### Día de itinerario

Etiqueta (`DÍA 3 · MARRAKECH → AÏT BEN HADDOU`) / título corto (h3) / el relato del día
plegado en un `<details class="dia__detalle">` nativo / fotografía. Alterna el lado de la
foto en escritorio; en móvil siempre texto→foto.

### Cierre de página (`BloqueCTA`)

Con foto: foto a sangre (`min(84svh, 780px)`) y el texto en panel base — **nunca sobre
fondo oscuro**. Sin foto: superficie `base` o `arena`. Un solo CTA.

### Bloque B2B

Ya **no** existe carril oscuro. Un bloque para agencias se marca con la etiqueta
`PARA AGENCIAS` en terracota y, como mucho, superficie arena.

### Campo de formulario

Etiqueta visible siempre (nunca solo `placeholder`). Borde 1px `--color-linea-control`,
altura mínima 48px, `--r-suave`. Error debajo del campo con `role="alert"` en
`--color-error`. `inputmode`/`type` correctos.

### Pie de foto

`--t-etiqueta`, `--color-texto-suave`, alineado a la izquierda bajo la imagen, 8px de
separación.

---

## 7 · Decisiones de implementación

**Sin Tailwind, CSS plano con custom properties.** Razón concreta: los fallos documentados
en este pack por Tailwind v4 (declarar claves propias en `@theme` mata espacios de nombres
enteros de utilidades sin error en build; el escaneo toma el cwd del proceso y no el del
CSS). Este proyecto es fotográfico y tiene pocos componentes muy repetidos.

**Sin librería de componentes.** Ningún patrón del sitio se beneficia de una dependencia;
la fase 6 (`component-curation`) se salta con este motivo explícito.

**Iconografía**: SVG en línea dibujados en el propio repo (flecha, WhatsApp, menú, cerrar,
check). Sin librería de iconos y **sin emoji**.
