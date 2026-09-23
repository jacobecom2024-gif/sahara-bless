# Auditoría y selección de activos visuales · Sahara Bless Travel

**Fase de dirección de arte. Sin cambios de código.** Este documento es solo diagnóstico,
inventario y propuesta de compra. Nada de lo que hay aquí se ha aplicado al sitio.

Rama de trabajo actual: `hero-jerarquia` (sin commit). Fecha: 2026-09-21.
Búsquedas hechas directamente en stock.adobe.com; todos los IDs, dimensiones y tipos de
licencia de este informe están leídos de la ficha real del activo, no estimados.

---

## 0 · Dos correcciones de partida (antes de leer el resto)

**1. En el proyecto no hay ningún vídeo.** El hero de Inicio usa una **fotografía fija**:
`campamento-dunas-dron.jpg` (1844 × 853 px), el campamento de jaimas blancas visto desde
el aire, al atardecer, con la hoguera encendida. Es decir, el asset del hero *es* una toma
de dron, no una alternativa a una toma de dron.

El encargo dice que el hero usa "un vídeo real (campamento con hoguera al anochecer)" en
lugar de "un vídeo de dron genérico sobre dunas que se descartó". Lo que está montado hoy
es una sola imagen que reúne las dos descripciones: dron **y** campamento con hoguera.
No la toco y no propongo sustituirla — pero conviene que sepas qué hay exactamente ahí,
porque si en algún momento se habló de un vídeo, ese vídeo no llegó nunca al repositorio.

**2. En el proyecto no hay ninguna foto de camello.** El encargo la menciona en el
inventario ("campamento aéreo, té en la duna, camello, equipo con té…"). Se examinaron
tres fotos con camellos en la ronda de selección de material propio y las tres se
descartaron por la regla del cliché. No existe ese activo en `fotos-originales/`.

---

## 1 · Diagnóstico de la identidad visual actual

**Lo que ya funciona y no hay que tocar:**

- Sistema de color reducido y bien medido (base `#F7F4EE`, arena `#E8DFCE`, texto
  `#2A2621`, terracota `#8B5240`, atlántico `#4A6670`, oliva `#5E6A48`), con un acento por
  sección y contraste verificado. La paleta está exactamente donde debe estar para una
  marca editorial y sobria: nada de oro brillante, nada de degradados decorativos.
- Fraunces + Karla, sin Inter, con un titular de portada en dos tamaños (crescendo).
- Proporción foto/texto ya cercana al 70/30 pedido, con al menos una foto casi a pantalla
  completa por página y la regla T1/T2 (plano abierto / plano cercano) documentada.
- El grano de papel al 3,5 % sobre las superficies planas: es lo que hace convivir fotos
  de móvil con fotos de réflex sin que el conjunto se vea desigual.

**Los tres problemas reales del material fotográfico actual:**

1. **Densidad desigual.** Conviven originales de 6000 px con originales de 595 px. Cinco
   fotos están por debajo de lo que pide el sitio (ver inventario) y una de ellas,
   `te-patio-puerta-azul`, ocupa una franja a sangre en Contacto con 595 px de ancho.
2. **Falta el interior.** Hay muchísimo paisaje y muy poca experiencia: no existe ni una
   sola foto del interior de una jaima, de una mesa servida dentro del campamento, de una
   cama, de un baño, de la llegada de un grupo. Para una web que vende "operación privada
   y campamento propio", esa ausencia se nota.
3. **El carril B2B no tiene imaginería propia.** Todo lo que hay es viaje; nada es
   *operación*: ni vehículos preparados, ni equipo trabajando, ni logística, ni
   documentación. La página de Agencias se sostiene hoy con fotos de paisaje.

**Riesgo principal al introducir stock:** la marca se apoya en autenticidad. En cuanto
una foto de banco aparece junto a un texto que dice "nuestro campamento" o "nuestro
equipo", la promesa se rompe. Por eso todo el apartado 6 lleva regla de etiquetado.

---

## 2 · Inventario de activos propios (49 archivos en `fotos-originales/`)

Clasificación: **C** conservar · **M** mejorar técnicamente · **S** sustituir ·
**N** no utilizar.

### 2.1 · Desierto, campamento y experiencia

| Archivo | Px | Uso actual | Clas. | Nota |
|---|---|---|---|---|
| `campamento-dunas-dron` | 1844×853 | **Hero de Inicio**, foto a sangre de Viajeros | **C** | El activo más valioso del set. Pide 2.500 px de ancho si existe el original |
| `te-sobre-la-duna` | 2500×1667 | Foto a sangre de Inicio, Imperial Journey | **C** | Es la imagen de "experiencia" de la marca |
| `hoguera-noche` | 2362×1575 | Nomad Route | **C** | El único plano cercano nocturno real |
| `mesa-para-dos-dunas` | 2500×1668 | Viajeros, Desert Journey | **C** | |
| `familia-duna-atardecer` | 2500×1881 | Manifiesto de Inicio, cierre de Rutas | **C** | Presencia humana real, sin pose |
| `jaimas-negras-dunas` | 1920×1080 | Erg Chigaga en Inicio | **C** | |
| `campamento-hora-azul` | 2000×1328 | Atlantic, Agencias, Historia | **C** | |
| `campamento-jaimas` | 2121×1414 | Hero de Nomad Route | **C** | |
| `campamento-alfombras` | 900×600 | Viajeros | **M** | 900 px: se rompe en cualquier uso grande |
| `dunas-chigaga` | 1920×1280 (142 KB) | 6 usos, incl. hero de Agencias | **M** | Sobre-comprimida para ser la foto más usada del sitio |
| `dunas-erg-chebbi` | 2500×1669 | Hero de Historia y Desiertos | **C** | |
| `4x4-hacia-las-dunas` | 1536×1024 | Hero de Atlantic + 4 usos | **M** | Es *la* foto del acceso privado y tiene 1.536 px |
| `4x4-llanura-sur` | 1920×1280 | Voz de Abdoul en Historia | **C** | |
| `carretera-hamada` | 2121×1414 | Hero de Rutas, Viajeros | **C** | |

### 2.2 · Personas y relación local

| Archivo | Px | Uso actual | Clas. | Nota |
|---|---|---|---|---|
| `abdoul-y-xenia` | 1536×2040 | Encuentro en Historia | **C** | Único retrato de los dos juntos utilizable |
| `retrato-dunas-panuelo` | 1600×786 | Voz de Xènia en Historia | **M** | Proporción 2,03:1: cualquier recorte vertical la parte |
| `xenia-abdoul-atardecer` | 1024×576 | Agencias | **M** | 1.024 px |
| `equipo-te-jaima` | 2048×1536 | Pilares de Inicio | **C** | La foto más "equipo" que existe |
| `te-familia-oasis` | 2048×1152 | Agencias, Nomad, Historia | **C** | |
| `te-patio-puerta-azul` | 595×397 | **Franja a sangre de Contacto** | **S** | 595 px a pantalla completa. Es la sustitución más urgente |

### 2.3 · Ciudades, costa y paisaje (todo **C** salvo lo indicado)

`essaouira-skala-barcas` (1600×1200, hero de Moroccan Soul) · `essaouira-murallas` ·
`essaouira-puerto-atardecer` · `essaouira-puerta-pinturas` (1200×1600) ·
`playa-sidi-kaouki` · `marrakech-jemaa-atardecer` · `marrakech-terrazas-atlas` ·
`marrakech-koutoubia` (2500×3746) · `fez-medina` · `fez-curtidurias` · `casablanca` ·
`ait-ben-haddou` · `ait-ben-haddou-atardecer` · `kasbah-valle-draa` (1280×850, **M**) ·
`skoura-kasbah-palmeral` · `oasis-fint` · `palmeral-montana` · `gargantas-dades` ·
`taroudant-murallas` · `valle-atlas-nieve` · `valle-ouirgane` · `pueblo-atlas-nieve` ·
`riad-patio-noche` · `riad-patio-naranjos` · `riad-patio-verde`.

**Sin uso en el sitio (4):** `ait-ben-haddou-amanecer`, `ait-ben-haddou-panoramica`,
`ourika-montanas`, `dades-curvas`. Clasificación **C** como reserva; no estorban.

**N (no utilizar), ya descartadas en la selección previa y fuera del repositorio:** las
tres imágenes generadas con IA ("ChatGPT Image…"), las dos de Pexels, las tres con
camellos, la del grupo grande, la de pose de modelo, el banner de 1600×393 y
`atlantic to sahara.jpg` (1024 px y virado teal-naranja).

### 2.4 · Asignación recomendada por sección clave

| Sección | Activo propio | Por qué |
|---|---|---|
| **Hero de Inicio** | `campamento-dunas-dron` | **No se toca.** Validado en rondas anteriores |
| **Erg Chigaga (Inicio)** | `jaimas-negras-dunas` + `te-sobre-la-duna` a sangre | Territorio + experiencia, ambas propias |
| **Erg Chigaga (página propia)** | `dunas-chigaga` mejorada, `4x4-hacia-las-dunas` mejorada, `hoguera-noche` | El acceso y la noche son argumento B2B |
| **Equipo / Dos miradas** | `abdoul-y-xenia`, `retrato-dunas-panuelo`, `4x4-llanura-sur`, `equipo-te-jaima` | **Solo propias. Aquí no entra stock, en ningún caso** |
| **Cierre de Inicio** | `dunas-chigaga` (mejorada) | Ya está y funciona |
| **Contacto** | sustituir `te-patio-puerta-azul` | 595 px a sangre |

---

## 3 · Carencias reales

### 3.1 · Lo que **no** puede cubrir el stock (hay que fotografiarlo)

1. **Interior del campamento propio**: jaima por dentro, cama hecha, baño, mesa servida,
   zona común. Es el activo que más falta para vender "operación privada" y **ninguna
   foto de banco puede ocupar ese hueco** sin mentir.
2. **Abdoul solo, de frente y reconocible**, para la columna "Abdoul" de Dos miradas.
   Hoy esa columna la ocupa una escena con un 4x4 mientras la de Xènia es un retrato: las
   dos voces no pesan igual.
3. **Equipo real trabajando en destino** (chóferes, cocina, montaje del campamento).
4. **Vehículos propios preparados** para la sección de acceso privado.
5. **Una operación white-label real**: documentación o material con marca de agencia. Sin
   esto, el punto 05 de los pilares es solo texto.
6. **Llegada de un grupo pequeño** (sin caras identificables o con permiso firmado).

### 3.2 · Lo que sí puede cubrir el stock (y es lo que se compra)

- Texturas de arena, luz y sombra para transiciones y fondos.
- Una versión vertical del desierto para móvil.
- Detalle de té, fuego y textiles cuando el plano no diga "este es nuestro campamento".
- Atmósfera de Marrakech (patio, puerta, muro de arcilla) y costa atlántica.
- Manos de artesanía y telar para páginas secundarias.

---

## 4 · Vídeos: 2 búsquedas y candidatos

Recordatorio: el hero no se toca. Se reserva el tercer vídeo de la prueba.

### Vídeo A — experiencia íntima

Búsquedas hechas: `moroccan tea desert campfire night`, `moroccan mint tea pouring slow
motion` (13 clips, ninguno en 4K), `moroccan tea pouring traditional` (233 clips, todos
HD y en su mayoría turcos o de estudio).

| ID | Título | Res. | Licencia | Valoración |
|---|---|---|---|---|
| **666673022** | *Close up of metal kettle on coals in a campfire. Brew bedouin tea in the desert at night* | 3840×2160 | Estándar (HD y 4K) | **Seleccionado.** Tetera sobre brasas, primer plano, sin caras, sin lugar identificable. Es exactamente "detalle humano, té, fuego" |
| 304734264 | *fire with slowmotion and ashes flying* | 1920×1080 | Estándar | Alternativa: hoguera con teteras alrededor. Solo HD |
| 315099022 | *Timelapse of Camping in Sahara desert* | 3840×2160 | Estándar | Descartado: timelapse (movimiento acelerado, prohibido por el brief) y campamento identificable |
| 124033746 | *Female hands with oriental tray* | 1920×1080 | Estándar | Descartado: bandeja de bazar, rojo saturado, estética orientalista |

### Vídeo B — acceso y territorio

Búsquedas hechas: `4x4 driving desert dunes morocco` (347 clips), `4x4 desert track
sahara morocco aerial 4k` (56 clips), `sahara desert morocco dunes aerial` (4.505 clips).

| ID | Título | Res. | Licencia | Valoración |
|---|---|---|---|---|
| **117114019** | *off road vehicle in the sahara desert* | 1920×1080 | Estándar | **Seleccionado.** Pista abierta hacia el horizonte, conducción tranquila, hamada de Marruecos. Comunica distancia sin épica de aventura |
| 117113938 | *off road in the sahara desert morocco* | 1920×1080 | Estándar | Suplente directo del anterior, mismo autor y serie |
| 240477959 | *Aerial view from a drone flying next to dunes* | 3840×2160 | Estándar | 4K y muy bello, pero es dron sobre dunas: repite el lenguaje del hero y no cuenta "acceso" |
| 313542282 | *Jeeps on a off road trip in a dunes desert* | 3840×2160 | Estándar | Descartado: convoy de jeeps = excursión organizada, justo lo contrario de "operación privada" |
| 80481530 | *Driving in the desert with a 4wd car* | 1920×1080 | Estándar | Descartado: capó en cuadro, punto de vista de aventura |

> Aviso honesto: en Marruecos concreto, el material de "acceso 4x4" bueno está casi todo
> en HD. Si prefieres 4K obligatorio, la única vía es 240477959 (dron sobre dunas) y
> entonces el vídeo B deja de hablar de acceso. Mi recomendación es 117114019 en HD: en un
> fondo de sección a 1920 px se ve perfectamente.

---

## 5 · Imágenes: búsquedas realizadas y candidatos

Todas las búsquedas se filtraron a fotografía, se excluyeron los resultados marcados como
generados con IA (`is_gentech`) y los de menos de 3.000 px. Entre paréntesis, el número
de resultados que devolvió Adobe.

| # | Búsqueda | Candidatos retenidos |
|---|---|---|
| S1 | `erg chigaga morocco dunes`, horizontal (326) | 39981038, 85580889, 162701621, 162704771, 39321859, 125059919, 125155954 |
| S2 | `sahara dunes sunrise morocco minimal` (101) | 235286391, 167489018*, 270908570*, 403105270, 870094115 |
| S3 | `desert track 4x4 morocco sahara`, horizontal (154) | 136967637, 26671076, 85582513, 95879252 |
| S4 | `sahara desert night stars camp morocco` (169) | 68466066, 187489153, 187483539 |
| S5 | `sahara dunes morocco`, vertical (8.442) | 28007996, 58036987, 30183795, 29259327 |
| S6 | `moroccan tent interior textiles lantern` (36) | 2057754030, 2057730772, 2057751427 |
| S7 | `moroccan mint tea pouring hands traditional` (128) | 298135494, 369131788, 271080968, 333748481 |
| S8 | `berber man desert turban portrait morocco` (152) | 4736105, 658909419, 340874419 |
| S9 | `moroccan artisan hands craft workshop` (226) | 240605772, 270548540, 314270220, 266187066 |
| S10 | `moroccan berber rug wool textile detail` (52) | 99993594, 99993825, 162701648, 114906376 |
| S11 | `marrakech riad courtyard natural light` (105) | 1068955571, 997421237, 709604255*, 1948411356 |
| S12 | `essaouira morocco atlantic coast` (4.905) | 97688701, 124166235, 126826410 |
| S13 | `sand dune shadow abstract minimal texture` (3.515) | 2067695061, 1963196788, 2167399328, 603137272*, 2165552763 |
| S14 | `marrakech riad courtyard natural light`, vertical (19) | 2156687620, 1948411359, 1068953646 |

`*` = activo **Enhanced/Premium**: no entra en la prueba gratuita ni en un plan estándar
(p. ej. 270908570 cuesta 249,99 US$ suelto). Los tres se han excluido de la selección
final por ese motivo, no por criterio visual.

---

## 6 · Selección final recomendada · 25 imágenes + 2 vídeos

URL de ficha: `https://stock.adobe.com/images/x/<ID>` · vídeo:
`https://stock.adobe.com/video/x/<ID>`. Todas las imágenes son **licencia estándar
(comercial) + ampliada disponible**, ninguna es editorial-only, ninguna es premium y
ninguna está marcada como generada con IA.

**Regla de etiquetado, obligatoria para las 27:**

```jsx
// EN EL CATÁLOGO: marcar el origen junto a la entrada
stockDunaAmanecer: f('stock-duna-amanecer', 6016, 4016,
  'Dunas del Sahara al amanecer con una figura pequeña caminando por la cresta',
  { origen: 'stock', fuente: 'Adobe Stock #235286391' }),
```

```html
<!-- EN EL MARCADO: origen visible para cualquiera que lea el HTML -->
<img data-origen="stock" data-fuente="adobe-235286391" alt="Dunas del Sahara al amanecer…">
<img data-origen="propia" alt="Campamento de jaimas blancas en un claro entre dunas…">
```

`alt` genérico y descriptivo siempre. **Prohibido** en cualquier activo de stock:
"nuestro campamento", "nuestro equipo", "Xènia", "Abdoul", "Erg Chigaga" como afirmación
de lugar. Se describe lo que se ve, nunca de quién es.

### Grupo 1 · Erg Chigaga y desierto (8)

| # | ID | Qué es | Px · orientación | Uso recomendado | Motivo | Riesgo |
|---|---|---|---|---|---|---|
| 1 | 39981038 | Cresta de duna con luz rasante y sombra larga | 3431×1930 · horiz. | Cabecera de sección con texto encima (espacio negativo en el cielo) | Sobriedad, un solo acento cálido, cero postal | Bajo |
| 2 | 85580889 | Duna única, luz suave, sin nada más | 5760×3840 · horiz. | Fondo de sección en la página de Erg Chigaga | Silencio; encaja con la paleta arena | Bajo |
| 3 | 162701621 | Panorámica de dunas de Erg Chigaga | 6015×3343 · pano | Franja a sangre ancha | Es Erg Chigaga de verdad, proporción 1,8:1 | Bajo |
| 4 | 235286391 | Amanecer, dunas en sombra, figura mínima | 6016×4016 · horiz. | Bloque "amanecer entre dunas" | Escala humana sin protagonismo | Bajo |
| 5 | 125155954 | Siluetas sobre la cresta, enorme espacio negativo | 3853×2560 · horiz. | Cabecera con titular sobre la zona lisa | Sustituye al premium 270908570 con la misma función | Medio: son personas; siluetas, sin rasgos |
| 6 | 28007996 | Mar de dunas con bruma, vertical | 4032×6048 · vert. | **Versión móvil** de cabecera | Falta crítica del set propio | Bajo |
| 7 | 58036987 | Huellas subiendo una cresta (Erg Chigaga) | 2848×4272 · vert. | Móvil / transición | Rastro humano sin personas | Bajo |
| 8 | 136967637 | Pista de tierra hacia el horizonte | 6000×4000 · horiz. | Sección "acceso privado en 4x4" | Distancia y aislamiento, sin vehículo de marca | Bajo |

### Grupo 2 · Campamento y hospitalidad (6)

| # | ID | Qué es | Px · orientación | Uso recomendado | Motivo | Riesgo |
|---|---|---|---|---|---|---|
| 9 | 2057754030 | Farol colgado del techo de una jaima | 6000×4000 · horiz. | Transición entre secciones | Detalle abstracto: no identifica ningún campamento | Bajo |
| 10 | 2057730772 | Techo de jaima a contraluz, radial | 6240×4160 · horiz. | Fondo de cita o separador | Textura pura, cero riesgo de autoría | Bajo |
| 11 | 298135494 | Té cayendo en el vaso, con vapor | 3577×2386 · horiz. | Bloque de hospitalidad | Sin caras, gesto real | Bajo |
| 12 | 369131788 | Manos sirviendo té de tetera a vasos | 5760×3840 · horiz. | Bloque de hospitalidad (alternativa) | Manos, no retratos | Bajo |
| 13 | 162701648 | Detalle de kilim bereber, tonos tierra | 4863×2979 · horiz. | Banda de textura | Colores dentro de paleta | Bajo |
| 14 | 99993594 | Kilim beige y marrón, vertical | 3438×5152 · vert. | Columna de textura en móvil | El más sobrio de todos los textiles | Bajo |

### Grupo 3 · Personas y relación local (5) — *solo páginas secundarias*

| # | ID | Qué es | Px · orientación | Uso recomendado | Motivo | Riesgo |
|---|---|---|---|---|---|---|
| 15 | 4736105 | Persona sentada de espaldas sobre la arena | 3843×2550 · horiz. | Atmósfera en Viajeros | Anónima; imposible leerla como "el equipo" | Medio |
| 16 | 658909419 | Figura lejana caminando entre dunas | 3598×5408 · vert. | Móvil, transición | Escala humana, sin rostro | Bajo |
| 17 | 240605772 | Manos pintando cerámica | 4396×2930 · horiz. | Página cultural / artesanía | Oficio real, sin pose | Bajo |
| 18 | 270548540 | Detalle de telar tradicional | 5472×3648 · horiz. | Textura de sección | Documental, sin personas | Bajo |
| 19 | 314270220 | Hilos y urdimbre de un telar | 5472×3648 · horiz. | Banda de transición | Color cálido dentro de paleta | Bajo |

> Ninguna de estas cinco puede aparecer en Nuestra historia, en "Dos miradas", ni en
> ningún bloque que hable del equipo. Si se usan, van con `data-origen="stock"` y `alt`
> genérico.

### Grupo 4 · Marrakech y Essaouira (4)

| # | ID | Qué es | Px · orientación | Uso recomendado | Motivo | Riesgo |
|---|---|---|---|---|---|---|
| 20 | 1068955571 | Puerta tallada sobre muro de arcilla rosada | 9529×6232 · horiz. | Cabecera de bloque urbano | Terracota y arcilla exactos de la paleta | Bajo |
| 21 | 2156687620 | Patio de riad con arco y fuente, vertical | 3792×5504 · vert. | Móvil / ficha de ruta imperial | Sustituye al premium 709604255 | Bajo |
| 22 | 997421237 | Puerta de riad con vegetación, luz suave | 5285×3523 · horiz. | Bloque de alojamiento | Calma; nada de lujo artificial | Bajo |
| 23 | 97688701 | Playa atlántica vacía con nubes bajas | 5572×3715 · horiz. | Sección Essaouira / Atlántico | Único sitio donde el acento atlántico es natural | Bajo |

### Grupo 5 · Texturas y transiciones (2)

| # | ID | Qué es | Px · orientación | Uso recomendado | Motivo | Riesgo |
|---|---|---|---|---|---|---|
| 24 | 2067695061 | Sombra de hoja de palmera sobre arena | 7000×4667 · horiz. | Separador entre secciones, fondo de cita | Casi monocromo, arena pura | Nulo |
| 25 | 1963196788 | Duna monocroma, textura de viento | 8192×5464 · horiz. | Fondo de bloque oscuro o separador | Es color de marca en estado puro | Nulo |

### Vídeos (2)

| # | ID | Qué es | Res. | Uso recomendado | Riesgo |
|---|---|---|---|---|---|
| V1 | 666673022 | Tetera sobre brasas, primer plano, noche | 3840×2160 | Transición a experiencias; fondo corto en Erg Chigaga | Bajo: sin caras ni lugar identificable |
| V2 | 117114019 | 4x4 por pista abierta del Sahara | 1920×1080 | Sección de acceso privado | Medio: es HD, no 4K |

**Tercer vídeo de la prueba: sin gastar**, como pediste. Mi consejo es reservarlo hasta
que se grabe material propio del campamento: si esa grabación no llega, el hueco de
"interior de campamento" es el que más merece ese crédito.

---

## 7 · Examinados y **no** recomendados

| ID / grupo | Por qué no |
|---|---|
| 270908570, 167489018, 709604255, 603137272 | **Enhanced / premium**: fuera de la prueba y del plan estándar (249,99 US$ el primero) |
| 66652191, 118491704, 162630147, 68466066, 187489153 | Campamentos de jaimas identificables: se pueden confundir con el campamento propio |
| 119374649, 157831127, 39472098, 63986635, 167241243, 7618230, 39860482 | Camello como protagonista |
| 74727871 | Vía láctea en violeta saturado: HDR evidente |
| 375776174, 223683010, 2177626359 | Amarillo/rojo sobresaturado, fuera de paleta |
| 742769581, 1306781817, 25624605 | Palmera solitaria y reflejo: postal genérica; una parece compuesta |
| 113303115, 206579180, 369317680, 384857224, 1179018386 | Modelos posando disfrazados de "bereber": exactamente lo que el brief prohíbe |
| 266676108, 141017070, 141017074, 313542282 | Sandboard, quads y convoy de jeeps: turismo de aventura y grupos |
| 30105226, 80481530 | Conducción agresiva / capó en cuadro |
| 264547489 | Pie de foto con fecha y lugar: uso editorial, no comercial |
| 2183502391 | Salón boho blanco: estética boho genérica |
| 32248760, 378295852, 101336700, 131854471 | Té de estudio, orientalista o directamente turco |
| 2112701903 | Virado teal-naranja |
| 122413972 | Atlas en rojo/violeta irreal |
| 53975889, 108871125, 126826410, 77381490 | Essaouira azul postal: ya tenemos Essaouira propia y mejor |
| 83518939, 85237541, 91102698 | Namibia, no Marruecos |
| 443354507, y los 13 resultados marcados `is_gentech` en la búsqueda de dunas | Ilustración 3D o imagen generada con IA |

---

## 8 · Si hay que priorizar por presupuesto

**Primera compra (7 activos, cubre lo que hoy está roto o ausente):**

1. `28007996` — vertical de dunas para móvil. *No existe nada equivalente en el set propio.*
2. `2067695061` — sombra de palmera sobre arena. Textura de transición para todo el sitio.
3. `666673022` (vídeo A) — el único activo que aporta un lenguaje nuevo, no una foto más.
4. `136967637` — pista al horizonte: sostiene el argumento de acceso privado en el carril B2B.
5. `162701621` — panorámica de Erg Chigaga para franja ancha.
6. `1963196788` — duna monocroma: fondo neutro reutilizable en cualquier bloque.
7. `2057754030` — farol de jaima: el detalle de hospitalidad con riesgo cero de autoría.

**Segunda compra:** 235286391, 85580889, 298135494, 162701648, 1068955571, 97688701,
117114019 (vídeo B).

**Tercera compra (prescindible si el presupuesto aprieta):** el grupo 3 entero (personas
y artesanía). Es el que menos aporta al argumento B2B y el que más riesgo de autenticidad
tiene.

**Y por encima de todo:** las siete escenas del apartado 3.1 valen más que las 25
imágenes de este informe juntas. Una sesión de medio día en el campamento —interior de
jaima, mesa servida, equipo montando, Abdoul de frente— resuelve carencias que ningún
banco de imágenes puede cubrir sin mentir.

---

## 9 · Qué falta por decidir antes de aplicar nada

1. ¿Confirmas que el hero sigue siendo la **foto** `campamento-dunas-dron` y que no hay
   ningún vídeo pendiente de incorporar?
2. ¿Existen originales a mayor resolución de `campamento-dunas-dron` (hoy 1844 px),
   `4x4-hacia-las-dunas` (1536 px), `te-patio-puerta-azul` (595 px) y
   `campamento-alfombras` (900 px)? Si existen, mejorarlos es gratis y vale más que
   comprar.
3. ¿Se puede programar la sesión del apartado 3.1, aunque sea con móvil? Con el ajuste de
   color que ya usa el proyecto, el material de móvil convive bien con el resto.
4. ¿Apruebas la convención `data-origen="stock|propia"` para dejar el origen escrito en el
   propio HTML?

Nada de esto se implementa hasta que lo apruebes.

---
---

# Segunda tanda · Material entregado el 2026-09-23

**Esta parte sí está implementada**, en la rama `material-visual-octubre`. La clienta no
siguió los IDs recomendados en la primera tanda: eligió por su cuenta. Lo que sigue es la
auditoría del material **real** de la carpeta, archivo por archivo, no una comprobación
contra la lista anterior.

Total revisado: **25 archivos nuevos de imagen** (los otros 40 del ZIP son la primera
tanda, ya auditada arriba) más **dos vídeos**.

## 10 · Vídeo

| Archivo | Original | Servido | Dónde | Origen |
|---|---|---|---|---|
| `home.mov` | H.264 1920×1080, 13,5 s, **83 MB** (51 Mbps) | `public/video/hero-hoguera.mp4`, **4,9 MB** + póster 103 KB | **Hero de Inicio**, en sustitución de la foto `campamento-dunas-dron` | stock |
| `AdobeStock_117114019.mov` | ProRes 1920×1080, 17,4 s, **386 MB** (177 Mbps) | `public/video/pista-hamada.mp4`, **6,7 MB** + póster 67 KB | Fondo de la sección **Erg Chigaga** de Inicio | stock `adobe-117114019` |

Ambos: H.264 alto perfil, CRF 27, `faststart`, **sin pista de audio** (no es que esté
silenciado: el archivo no tiene sonido), `loop`, `playsinline` y sin controles. Reducción
total: de 469 MB a 11,6 MB.

**`prefers-reduced-motion`**: el componente `VideoFondo` no descarga ni reproduce el
vídeo; pinta el póster como imagen fija.

> **Esto fue lo que hizo pensar que el vídeo estaba roto (2026-09-23).** El archivo
> servido siempre fue el MP4 correcto (H.264 High, `video/mp4`, 4,88 MB, HTTP 200) y los
> atributos `autoplay muted loop playsinline` estaban puestos; no había ningún `.mov` en
> el repositorio ni error en consola. Lo que ocurría es que Windows trae desactivados los
> efectos de animación en muchos equipos, y entonces el componente servía el póster: una
> imagen fija, exactamente como se veía.
>
> Arreglado sin romper la accesibilidad: el póster lleva ahora un botón **"Reproducir el
> vídeo"**, y mientras se reproduce el botón pasa a **"Pausar el vídeo"** (WCAG 2.2.2
> exige poder parar cualquier movimiento automático de más de cinco segundos, así que el
> control estaba pendiente de todos modos).

### El vídeo del 4x4, tal y como pediste revisar

Va **detrás del texto**, no como pieza aislada: la sección mantiene su titular, su lista
de cinco puntos y su CTA encima, y el vídeo ocupa el fondo completo. Sin música, sin
efectos, sin controles, sin reproducción a pantalla completa.

El velo está medido sobre los **nueve fotogramas reales** del clip:

| Ajuste | Peor contraste del texto | Luminosidad del vídeo conservada |
|---|---|---|
| Fuerte | 10,98:1 | 32 % |
| **Aplicado** | **7,44:1** | **45 %** |
| Suave | 5,54:1 | 55 % |

Se aplicó el intermedio. Si al verlo te parece que el vídeo pesa demasiado, se sube al
fuerte; si te parece que casi no se ve, se baja al suave. Es un cambio de dos líneas.

## 11 · Auditoría de las 25 imágenes nuevas

### Conservar e integradas (7)

| Archivo | Px | Origen | Dónde ha ido | Por qué |
|---|---|---|---|---|
| `equipo.jpg` | 2362×1575 | **propia** | **Pilares de Inicio** ("Trabajar con nosotros") y **"cómo trabajamos" de Agencias** | Resuelve la carencia nº 3 del informe. Es la única foto del equipo completo; va en las dos secciones que argumentan el trabajo con agencias |
| `persona sola en dunas.jpeg` | 6016×4016 → 2500 | stock `adobe-235286391` | Cierre de Inicio | Amanecer con figura mínima: escala humana sin protagonismo |
| `morocco tea.jpeg` | 5760×3840 → 2500 | stock `adobe-369131788` | Franja a sangre de **Contacto** | Sustituye a `te-patio-puerta-azul`, que tenía 595 px a pantalla completa |
| `night camp.jpeg` | 6000×4000 → 2500 | stock `adobe-187489153` | Atlantic to Sahara, "Dos noches para vivir el Sahara" | El plano nocturno que faltaba en esa ruta |
| `essaouira.jpeg` | 5807×3877 → 2500 | stock `adobe-124166235` | Moroccan Soul, día 04 | Sustituye `essaouira-puerto` (2048 px) |
| `AdobeStock_568887277.jpeg` | 8368×4151 → 2500 | stock `adobe-568887277` | **Hero de Agencias** | Colinas doradas, muy sobrio; sustituye `dunas-chigaga` (1920 px y sobre-comprimida) |
| `AdobeStock_326394681.jpeg` | 6000×3375 → 2500 | stock `adobe-326394681` | The Imperial Journey, días 07–08 | Kasbah sobre valle; sustituye `skoura-kasbah` (2048 px) |

Todas pasaron por el mismo ajuste de color que el resto del sitio (normalización mínima
hacia el rango del catálogo). `night camp` se dejó **sin tocar**: su luz baja es el motivo.

### No utilizar (8)

| Archivo | Motivo |
|---|---|
| Los 3 `ChatGPT Image….png` | Generadas con IA. Confirmado |
| `AdobeStock_2102641671.jpeg` | **Confirmo tu sospecha: es generativa.** Ampliada al 100 %, las hojas no tienen nervadura y se funden con el fondo, el farol de la izquierda está a medio formar, los motivos de la alfombra no cierran la simetría y las macetas se derriten sobre los escalones. A 6.880 px no hay detalle fino: eso no pasa en una fotografía real de ese tamaño |
| `Chefchaouen.jpeg` | Saturación 195 y calidez −143 (el catálogo se mueve en 82–120 y 0–48). Azul de postal, fuera de paleta, y Chefchaouen no está en ninguna ruta |
| `atlas.jpeg` | Saturación 147, calidez −56. Mismo problema |
| `essaouira panoramic.jpeg` | HDR evidente en cielo y agua, pese a sus 9.104 px |
| `Captura de pantalla 2026-09-23….jpg` | Es una captura de pantalla: 1.024 px y origen/derechos sin determinar |
| `IMG-20240409-WA0042.jpg` | 524×619 px |
| `cuadro mapa nomada.jpg` | Es la foto de un cuadro: derechos del autor de la obra, y además lleva camellos ilustrados |

### Reserva — publicada el 2026-09-23 por encargo de la clienta (9 de 11)

Nueve entraron con hueco propio, casi todas sustituyendo fotos de menor resolución:

| Archivo | Slug | Dónde | Normalización aplicada |
|---|---|---|---|
| `Kasbah in Ait-Ben-Haddou,.jpeg` | `stock-kasbah-panoramica` | Desert Journey, día 3 | ninguna |
| `Fez arqhitecture.jpeg` | `stock-fez-puerta` | **Hero de The Imperial Journey** | sat +10 %, calidez +3 % (venía en −28) |
| `tintes hombre.jpeg` | `stock-tintes-fez` | Imperial, días 02–03 | sat 126 → 118 |
| `tintes.jpeg` | `stock-tintes-cubas` | Viajeros, "Marruecos más cultural" | sat +12 %, gamma 1.25 |
| `especies.jpeg` | `stock-especias` | Desert Journey, día 2 | sat 132 → 121 |
| `rhiad.jpeg` | `stock-riad-interior` | Nomad Route, días 01–02 | sat 157 → 118 |
| `rhiad 2.jpeg` | `stock-riad-mesa` | Atlantic to Sahara, día 10 | sat 146 → 121 |
| `rhiad 3.jpeg` | `stock-riad-patio` | Moroccan Soul, día 01 | sat 124 → 123 |
| `atlas pueblo.jpeg` | `stock-pueblo-atlas` | Moroccan Soul, día 06 | ninguna |

Las que siguen sin id llevan `data-fuente="adobe-pendiente"`, un marcador rastreable con
una búsqueda. **No hay ni un id inventado en el código.**

**Dos quedaron fuera, y no por el id:**

- `dunes.jpeg`: saturación 191. Tras seis pasadas de normalización se queda en 138, aún
  por encima del rango del catálogo (82–120). El naranja está incrustado en la imagen y
  bajarlo más la deja gris. El sitio ya tiene dunas de sobra.
- `textura.jpeg`: gris azulado desvaído, fuera de la paleta tierra, y sin un hueco donde
  aporte algo.

**IDs (actualizado 2026-09-23, tarde).** La clienta volvió a bajar parte del material con
su nombre original, así que ahora hay ID para diez de estas imágenes. Emparejadas por
hash MD5 del archivo, no por parecido:

| Archivo de trabajo | ID real |
|---|---|
| `essaouira.jpeg` | `AdobeStock_124166235` |
| `night camp.jpeg` | `AdobeStock_187489153` |
| `morocco tea.jpeg` | `AdobeStock_361627684` |
| `tintes.jpeg` | `AdobeStock_1974350951` |
| `especies.jpeg` | `AdobeStock_271850256` |
| `rhiad 2.jpeg` | `AdobeStock_2191218784` |
| `Fez arqhitecture.jpeg` | `AdobeStock_658652942` |
| `textura.jpeg` | `AdobeStock_644375920` |
| `Chefchaouen.jpeg` | `AdobeStock_196802849` (descartada igualmente) |
| `essaouira panoramic.jpeg` | `AdobeStock_266702188` (descartada igualmente) |

⚠️ **Una corrección importante.** A `morocco tea.jpeg` le había puesto `369131788`,
deducido porque sus dimensiones coincidían con una candidata de la primera tanda. El ID
real es **361627684**. Comparando la imagen con la miniatura de Adobe de `369131788`, la
diferencia es de 144 sobre 256 puntos de huella: no es la misma foto. Ya está corregido en
el catálogo. Los otros dos IDs deducidos (`235286391` para la duna al amanecer y
`187489153` para el campamento de noche) sí dan distancia 0 y 2 contra sus miniaturas, o
sea que eran correctos — pero el método era frágil y no se repite: **de aquí en adelante,
si no hay ID, la imagen no entra.**

**Siguen sin ID (7 imágenes + 1 vídeo):** `Kasbah in Ait-Ben-Haddou,.jpeg`,
`atlas pueblo.jpeg`, `atlas.jpeg`, `dunes.jpeg`, `rhiad.jpeg`, `rhiad 3.jpeg`,
`tintes hombre.jpeg` y el vídeo del hero (`home.mov`, hoy etiquetado
`data-fuente="adobe-home-mov"` como marcador provisional).

Además, `AdobeStock_644375920 (1).jpeg` es una descarga duplicada de `textura.jpeg`: se
puede borrar.

### Pexels

Las dos `pexels-elodie-*.jpg` siguen sin usarse. No hizo falta: todos los huecos se
cubrieron con material propio o de Adobe Stock, que es el orden que pediste.

## 12 · Convención de origen, ya aplicada

Implementada en el catálogo y en los componentes:

```js
// src/datos/fotos.js
stockDunaAmanecer: s('stock-duna-amanecer', 2500, 1669,
  'Dunas del Sahara al amanecer, con una figura pequeña caminando por la cresta',
  'adobe-235286391'),
```

```html
<img data-origen="stock" data-fuente="adobe-235286391" alt="Dunas del Sahara al amanecer…">
<img data-origen="propia" alt="El equipo de Sahara Bless Travel, con vestimenta tradicional…">
<video data-origen="stock" data-fuente="adobe-117114019" muted loop playsinline>
```

Los archivos de banco llevan además el prefijo `stock-` en el nombre, así que el origen se
ve incluso en la lista de archivos. Ninguna imagen de stock tiene un `alt` que diga
"nuestro", ni nombra a Xènia o a Abdoul. La única foto nueva con `alt` que nombra a la
empresa es `equipo.jpg`, que es vuestra.

## 13 · Qué sigue pendiente para la sesión de finales de octubre

Sin cambios respecto al apartado 3.1, salvo una carencia menos:

- ~~Equipo real trabajando en destino~~ → **resuelta** con `equipo.jpg`.
- Interior del campamento propio (jaima por dentro, cama, mesa servida).
- Abdoul solo, de frente, para la columna "Abdoul" de Dos miradas.
- Vehículos propios de cerca.
- Una operación white-label real (documentación con marca de agencia).

Ninguna bloquea el MVP.
