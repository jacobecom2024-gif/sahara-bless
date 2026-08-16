# 03 · Dirección creativa — Sahara Bless Travel

Fase 3. Tres direcciones reales, una elegida. Input: `01-strategy.md` + `02-content-architecture.md`
+ las 156 fotografías entregadas.

---

## Lo que restringe la decisión antes de empezar

1. **"Premium pero humano. No estética de agencia de lujo tradicional."** Esto descarta
   de entrada el kit habitual del sector: dorado, Cormorant/Playfair en itálica fina,
   fondos negros con letras espaciadas, "Luxury Desert Experiences".
2. **La fotografía manda.** 156 fotos entregadas. El diseño es el marco, no el
   protagonista. Cualquier dirección que compita con la foto está mal.
3. **Ritmo impuesto**: titular → 2-4 líneas → foto grande → bloque pequeño → aire → CTA.
   La dirección tiene que *aguantar mucho aire* sin parecer vacía.
4. **Dos públicos en un mismo sitio.** Necesita un mecanismo visual —no solo textual—
   para que agencia y viajero sepan en qué carril están.

Se consultó el generador de `ui-ux-pro-max`
(`search.py "editorial travel photography-led warm desert premium human" --design-system`).
Devolvió *Vintage Analog / Retro Film* con paleta blanco/negro puro y Calistoga+Inter.
**Se descarta la paleta y la tipografía** (el negro puro y una display redonda de peso
único no encajan con una web de fotografía cálida), pero **se retiene una idea útil**:
el grano y la calidez analógica como textura de fondo, que es exactamente lo que hace
que las fotos de móvil de Xènia y Abdoul convivan con las fotos profesionales de dunas
sin que se note el salto de calidad.

Paleta y tipografía se derivan directamente de las fotos, no de la base de datos.

---

## Dirección A · "Cuaderno de campo"

**Sensación.** Un libro de viajes impreso. Papel hueso, tinta marrón, filetes finos,
márgenes muy generosos, pies de foto en versalitas. Todo el texto en una serif de lectura,
incluida la interfaz. Fotos a un ancho de columna, casi nunca a sangre.

**Paleta.** Papel `#F4EFE5` · Tinta `#2B2320` · Filete `#D8CDBB` · Sepia `#8A6A4B`
**Tipografía.** Newsreader (display + cuerpo), una sola familia en dos ópticas.
**Forma.** Esquinas rectas. Cero sombras. Reglas horizontales de 1px como única separación.

**Por qué encaja.** Es la dirección más humana de las tres y la que mejor sostiene
"Nuestra historia". Cero riesgo de parecer un tour operador.

**Por qué no.** Una agencia B2B escanea; no lee. Una web enteramente tipográfica y sin
contraste de superficie obliga a leer para orientarse, y la página de Agencias —la más
importante— necesita bloques escaneables. Además desperdicia las fotos de dunas a
sangre, que son el mejor activo del proyecto.

---

## Dirección B · "Hamada" ← **ELEGIDA**

*(hamada: la meseta pedregosa que hay que cruzar antes de llegar a las dunas)*

**Sensación.** Fotografía a sangre, a pantalla completa, alternando con superficies
planas de arena y de noche. Sin marcos, sin tarjetas flotantes, sin sombras: las
secciones se separan por **cambio de superficie**, no por cajas. Titulares grandes en
una serif variable cálida, texto corto en sans humanista. El sitio respira como un
reportaje: foto — silencio — frase — silencio.

**Paleta** (muestreada de las fotos entregadas):

| Rol | Hex | De dónde sale |
|---|---|---|
| Arena (fondo principal) | `#F7F2E9` | lona del campamento a mediodía |
| Hueso (superficie alterna) | `#EFE7D8` | arena en sombra |
| Tinta (texto + fondo oscuro) | `#1B1714` | dunas de noche |
| Noche del desierto | `#1E2A35` | hora azul en Erg Chigaga |
| Terracota (acento / CTA) | `#9E4523` | adobe de Aït Ben Haddou |
| Ocre (acento cálido, filetes) | `#B8823A` | luz de los faroles |
| Palmeral (acento frío puntual) | `#4F6350` | oasis de Fint |
| Filete | `#DED2BE` | — |

**Tipografía.** Display **Fraunces** (variable, 300-600, con óptica: cálida, un punto
irregular, nada de serif de lujo genérica). Cuerpo e interfaz **Karla** (humanista,
carácter propio, muy legible a 17px).

**Forma.** Radios casi nulos (2-4px) salvo en los botones (999px, un guiño humano
contra la rigidez editorial). Un solo tipo de sombra, y solo en el header al hacer scroll.

**Mecanismo de los dos públicos.** El carril B2C vive sobre **arena**; el carril B2B
vive sobre **noche del desierto**. La página de Agencias abre en oscuro y los bloques
B2B de otras páginas usan esa misma superficie. El usuario reconoce su carril por el
color del suelo antes de leer una palabra.

**Movimiento.** Casi nada: fade + 12px de subida al entrar en viewport, 350ms, y un
`scale` muy lento en la foto del hero (18s). Nada más. `prefers-reduced-motion` lo apaga.

**Textura.** Un grano SVG al 3-4% de opacidad sobre las superficies planas. Es lo que
unifica fotos de móvil con fotos profesionales y lo que impide que el hueso plano
parezca "sin terminar".

---

## Dirección C · "Zellige"

**Sensación.** La geometría marroquí como estructura: retículas de mosaico, bloques de
color plano en terracota, turquesa y azafrán, patrones de zellige como separadores,
tarjetas con arcos. Enérgica, artesanal, con mucho color.

**Paleta.** Terracota `#C05621` · Turquesa `#2C7A7B` · Azafrán `#D69E2E` · Yeso `#FFFCF5`
**Tipografía.** Display geométrica + sans redonda.

**Por qué encaja.** Es la más memorable y la que menos se parece a la competencia.

**Por qué no.** Es exactamente la trampa que el brief describe: *"no queremos vender
Marruecos, queremos vender la forma en que Sahara Bless Travel hace posible vivir
Marruecos"*. El zellige y el arco son la postal — decoran el país, no cuentan a estas
dos personas. Además el patrón compite con la fotografía, que es el activo real, y una
agencia B2B leería "producto turístico", no "partner operativo".

---

## Decisión

**Dirección B · "Hamada".**

Razones, atadas a la estrategia:

1. **Sostiene el activo real.** El proyecto tiene 156 fotos y cero testimonios (01, §5).
   Sin prueba social, la credibilidad tiene que venir de la imagen y del dato concreto.
   B es la única dirección que pone la foto a sangre y calla alrededor.
2. **Resuelve los dos públicos con un mecanismo visual**, no con más texto. Cumple la
   regla 3 del brief (no mezclar mensajes) a nivel de diseño, no solo de redacción.
3. **"Premium pero humano" es literalmente su tensión**: superficies planas y editoriales
   (premium) + serif cálida con irregularidad + botones redondos + grano (humano).
   A se queda en humano y pierde escaneabilidad B2B; C se va a artesanal-turístico.
4. **Aguanta el aire.** El ritmo obligatorio del brief deja mucho espacio vacío; el
   cambio de superficie y el grano hacen que ese vacío se lea como decisión y no como
   sección sin terminar.

**Tomado de A**: los pies de foto en versalitas, los filetes de 1px y la medida de línea
estrecha en "Nuestra historia".
**Tomado de C**: nada estructural. El color terracota sobrevive, pero como acento
mínimo (CTA y filetes), no como bloque de color.

**Explícitamente prohibido en implementación** (para que no se cuele por inercia):
dorado metálico, glassmorphism, `backdrop-filter`, sombras difusas de tarjeta, gradientes
de marca, iconos emoji, itálicas finas de display, y cualquier imagen que no venga de la
carpeta del cliente.

---

## Fase 4 · Stitch — **saltada**

Los tools `mcp__stitch__*` están declarados en la sesión, pero según
`CLAUDE.local.md` `generate_screen_from_text` agota el tiempo de espera de forma
sistemática y `list_screens` queda vacío, así que no puede producir la referencia
visual que justificaría la fase. Se salta explícitamente; no se sustituye por nada
inventado. La dirección queda documentada aquí y se valida en la fase 8 (visual-qa)
contra el navegador real.
