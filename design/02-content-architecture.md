# 02 · Arquitectura de contenido — Sahara Bless Travel

Fase 2. El copy **ya existe** y lo escribió el cliente. Este documento no lo reescribe:
decide el mapa de páginas, el trabajo de cada sección, la jerarquía de CTAs, y resuelve
las contradicciones del material de origen.

El copy literal vive en `src/data/content.js` (fuente única). Aquí van los titulares y
las decisiones.

---

## A · Mapa del sitio

| Ruta | Página | Público | Acción primaria |
|---|---|---|---|
| `/` | Inicio | ambos (bifurca) | Diseñar mi viaje / Soy agencia |
| `/rutas` | Rutas (índice de 5) | B2C | Ver la ruta |
| `/rutas/the-desert-journey` | Ficha de ruta | B2C | Quiero esta ruta |
| `/rutas/atlantic-to-sahara` | Ficha de ruta | B2C | Quiero esta ruta |
| `/rutas/the-nomad-route` | Ficha de ruta | B2C | Quiero esta ruta |
| `/rutas/moroccan-soul` | Ficha de ruta | B2C | Quiero esta ruta |
| `/rutas/the-imperial-journey` | Ficha de ruta | B2C | Quiero esta ruta |
| `/viajeros` | Viajeros | B2C | Quiero diseñar mi viaje |
| `/agencias` | Agencias | **B2B** | Agendar una videollamada |
| `/nuestra-historia` | Nuestra historia | ambos | Conocer Marruecos con vosotros |
| `/erg-chigaga-o-merzouga` | Guía de decisión | B2C (+B2B) | Quiero saber cuál encaja con mi viaje |
| `/contacto` | Contacto | ambos (bifurca) | según rama del formulario |

**Menú** (el brief lo quiere corto): Inicio · Rutas · Viajeros · Agencias · Nuestra
historia · Contacto. Botón permanente destacado: **Hablar con nosotros** → `/contacto`.

`/erg-chigaga-o-merzouga` **no entra en el menú** — es una página de apoyo. Se enlaza
desde Home, Viajeros, Agencias, las fichas de ruta con Sahara y el footer. Motivo: meterla
en el menú rompe la regla de "menú muy sencillo" y la convierte en categoría cuando en
realidad es una respuesta a una duda concreta.

---

## B · Jerarquía de CTAs

**Primarios** (uno por sección de cierre, alto contraste):

| Contexto | Etiqueta | Destino |
|---|---|---|
| B2C general | Quiero diseñar mi viaje → | `/contacto?perfil=viajero` |
| Ficha de ruta (intermedio) | Quiero esta ruta → | `/contacto?perfil=viajero&ruta=<slug>` |
| Ficha de ruta (final) | Hablemos de esta ruta → | idem |
| B2B | Agendar una videollamada → | `/contacto?perfil=agencia` |
| Historia | Quiero conocer Marruecos con vosotros → | `/contacto?perfil=viajero` |

**Secundarios** (bajo contraste, nunca compiten): Ver nuestras rutas → · Conocer nuestra
historia → · Descubrir Erg Chigaga → · Ver la ruta →

**Terciario**: Escribir por WhatsApp — presente en el header móvil y en Contacto.
No se repite en cada sección (regla 11 del brief).

**Prohibidos**: Más información · Saber más · Enviar · Contactar · Reservar ahora.

> ⚠️ **Contradicción del material**: el PDF de Contacto termina el formulario con
> `[ENVIAR →]`, que la regla 14 prohíbe expresamente. Se resuelve a favor de la regla:
> el botón dice **"Empezar a diseñar mi viaje →"** (rama viajero) y
> **"Solicitar una videollamada →"** (rama agencia).

El parámetro `?perfil=` preselecciona la rama del formulario de Contacto, de modo que
quien llega desde Agencias no tiene que volver a declararse. Es la única "inteligencia"
del sitio y ahorra el paso que más abandono causa.

---

## C · Página por página

### 1 · Inicio (`/`)

| # | Sección | Trabajo | Titular |
|---|---|---|---|
| 1 | Hero | Promesa en una línea + bifurcar los dos caminos desde el primer scroll | **Marruecos, desde dentro.** |
| 2 | Tira de categorías | Decir en 6 palabras qué se opera | Viajes a medida · Grupos privados · Retiros · Experiencias para agencias |
| 3 | Manifiesto | Cambiar el eje de "dónde" a "cómo" | **No se trata solo de dónde vas. Sino de cómo lo vives.** |
| 4 | Erg Chigaga | Soltar el diferenciador más fuerte, pronto | **Marruecos es nuestro territorio. Erg Chigaga, nuestra raíz.** |
| 5 | Cuatro pilares | Hacer tangible la forma de trabajar | A tu medida · Con personas locales · Con calma · Con la tranquilidad de estar acompañado |
| 6 | **Bifurcación** | Separar limpiamente los dos públicos | **Para quienes viajan. Y para quienes hacen viajar.** |
| 7 | Trayectoria | Responder la objeción "¿son nuevos?" | **Más de 15 años caminando por Marruecos** |
| 8 | Cierre emocional | Elevar antes de pedir | **Marruecos no termina cuando termina el viaje.** |
| 9 | CTA final | Bajar la fricción al mínimo | **¿Empezamos?** → Hablemos de tu viaje → |

Hero: los dos CTAs conviven **solo aquí**. `Diseñar mi viaje` es sólido; `Soy agencia →`
es fantasma con borde. Iguales en tamaño, distintos en peso — el brief pide los dos
caminos visibles, la estrategia dice que B2B es prioridad pero B2C es el volumen.

La sección 6 es el único punto de la Home donde los dos mensajes se tocan, y lo hacen
en columnas separadas, no mezclados en el mismo párrafo (regla 3 del brief).

---

### 2 · Rutas (`/rutas`)

| # | Sección | Trabajo | Titular |
|---|---|---|---|
| 1 | Hero editorial | Reencuadrar: no es un catálogo, es ayuda para elegir | **Rutas por Marruecos** / **Cinco maneras de entrar en Marruecos** |
| 2 | 5 tarjetas | Que la foto haga querer entrar | nombre · duración · lugares · 2 líneas · **Ver la ruta →** |
| 3 | Adaptación | Desactivar el miedo al circuito cerrado | **Tu viaje, tu manera.** |
| 4 | Ayuda | Recoger al indeciso | **¿No sabes cuál elegir?** → Quiero diseñar mi viaje → |

Una foto grande por ruta, nunca collage (nota final del PDF de Rutas). Para
*The Desert Journey*, *Atlantic to Sahara* y *The Nomad Route* la foto es de Erg Chigaga,
para que el Sahara no parezca una excursión más del circuito.

---

### 3 · Fichas de ruta (5 páginas)

Estructura fija: **hero visual → introducción → itinerario → CTA intermedio → bloque
"Nuestro Sahara" (solo rutas con desierto) → personalización → CTA final → puerta B2B**.

- Cada día: `DÍA N · LUGAR` + título corto + 2-4 líneas + fotografía. Nunca bloque
  de texto largo.
- CTA intermedio **una sola vez**, hacia la mitad: *¿Te imaginas haciendo esta ruta?*
  → **Quiero esta ruta →**. Nunca después de cada día.
- CTA final: *¿La hacemos a vuestra manera?* → **Hablemos de esta ruta →**.
- Cierre B2B discreto (solo un bloque, al final, tono distinto): *¿Eres agencia?
  Puedes ofrecer esta ruta a tus clientes.* → **Quiero ofrecer esta ruta a mis clientes →**.
  Está en el PDF de Atlantic to Sahara y se generaliza a las cinco: es el punto donde
  un agente que ha llegado buscando producto puede convertir.

> ⚠️ **Contradicciones de datos entre el índice y las fichas.** Se resuelve **a favor de
> la ficha individual**, que es el documento más detallado y posterior:
>
> | Ruta | Índice dice | Ficha dice | Se usa |
> |---|---|---|---|
> | Atlantic to Sahara | 10 días | **11 días** | 11 días ⚠️ *pendiente de confirmar por el cliente* |
> | The Desert Journey | sin Oasis de Fint | con Oasis de Fint | con Oasis de Fint |
> | The Nomad Route | orden: Aït Ben Haddou → Fint → Drâa → Chigaga | orden: Fint → Drâa → Chigaga → Aït Ben Haddou | orden de la ficha |
> | The Imperial Journey | Casablanca/Fez · Dades · Sahara · Fint · Marrakech | + Aït Ben Haddou | con Aït Ben Haddou |
>
> El itinerario de *The Desert Journey* está numerado por días (1-8); los otros cuatro
> agrupan días (`01–02`, `03`, …). Se respeta cada formato tal cual: agrupar significa
> "estas dos noches son el mismo lugar", y uniformarlo perdería información.

---

### 4 · Viajeros (`/viajeros`)

| # | Sección | Trabajo | Titular |
|---|---|---|---|
| 1 | Hero | Prometer lo contrario del circuito | **Marruecos, a vuestra manera** |
| 2 | 6 motivaciones | Que cada perfil se reconozca | Familia · Sahara · Mar y montaña · Cultural · Celebrar · Vuestro propio recorrido |
| 3 | Dos caminos | Dar salida al que no está listo para pedir | *¿Queréis inspiraros?* → Ver nuestras rutas · *¿Queréis conocernos?* → Nuestra historia |
| 4 | Anti-circuito | Matar la objeción 6 | **No vendemos viajes cerrados** |
| 5 | Erg Chigaga | Pieza propia del diferenciador (aquí: Xènia, 18 años volviendo) | **Marruecos desde dentro** → Descubrir Erg Chigaga → |
| 6 | CTA final | Permiso explícito para no tenerlo claro | **¿No sabéis por dónde empezar?** → Quiero diseñar mi viaje → |

Página corta por mandato del brief. Las 6 motivaciones son visuales (foto + etiqueta +
una línea), no párrafos.

---

### 5 · Agencias (`/agencias`) — la página más importante

| # | Sección | Trabajo | Titular |
|---|---|---|---|
| 1 | Hero | Definir el reparto de papeles en dos frases | **Tú conoces a tus clientes. Nosotros conocemos Marruecos.** |
| 2 | Cómo trabajamos | Quitar el miedo a perder al cliente | **Vuestra agencia. Nuestro equipo en Marruecos.** |
| 3 | 5 garantías | Objeciones 1 y 2, en bloques escaneables | Equipo local · Flexibilidad real · Comunicación directa · Conocimiento local · Cuidado de vuestros clientes |
| 4 | Erg Chigaga | El diferenciador, con foto potente | **Erg Chigaga es nuestro territorio** |
| 5 | 6 tipos de cliente | "Esto aplica a mi cartera" | Familias · Grupos privados · Retiros · Incentivos · Lunas de miel · A medida |
| 6 | Desde 2009 | Trayectoria + foto de Xènia y Abdoul | **Una relación construida desde 2009** → Conoce nuestra historia → |
| 7 | Reputación | La objeción 2, dicha con todas las letras | **Vuestros clientes están en buenas manos** |
| 8 | CTA final | Bajar el compromiso de la primera llamada | **¿Hablamos?** → Agendar una videollamada → |

Cero mensajes B2C en toda la página. El único enlace que sale del carril B2B es hacia
Nuestra historia, y es deliberado: la historia es prueba de trayectoria.

Los bloques 3 y 5 usan iconos/estructura visual, nunca párrafos largos (brief, bloque 2).

---

### 6 · Nuestra historia (`/nuestra-historia`)

Página deliberadamente distinta: **aquí no se vende**. Medida de línea estrecha, mucho
aire, pocas fotos pero grandes, ritmo de lectura largo.

Siete movimientos, y cada uno responde al anterior (estructura que el propio cliente
valida al final del PDF):

1. **Todo empezó en el Sahara** — el encuentro
2. *(el silencio)* — el vínculo
3. **El camino fue creciendo** — 2009, Erg Chigaga como casa de los dos
4. **Durante años hicimos esto para otros** — el oficio
5. **Hasta que sentimos que era el momento** — la decisión
6. **Volver al lugar donde todo empezó** — el bazar de Ouarzazate = la agencia. Cierra el círculo.
7. **Y aquí estamos** — presente

CTA final, uno solo, después del punto final:
**Ahora conoces nuestra historia. ¿Nos dejas formar parte de la tuya?**
→ Quiero conocer Marruecos con vosotros →

Fotos previstas por el cliente: una antigua de los dos / el desierto de Abdoul / Xènia
en el desierto / el trabajo juntos / el bazar de Ouarzazate hoy. **De estas solo existe
la de los dos en el desierto.** Las otras cuatro son huecos declarados (ver 01, §5).

---

### 7 · Erg Chigaga o Merzouga (`/erg-chigaga-o-merzouga`)

Página de ayuda, **no comercial**. El cliente pide explícitamente **no** poner tabla
comparativa de datos técnicos ("demasiado fría"): comparación visual, dos bloques
grandes uno sobre otro.

1. Hero — **¿Erg Chigaga o Merzouga?** / *Dos desiertos. Dos maneras de vivir el Sahara.*
2. **Merzouga · Erg Chebbi** — el desierto más accesible + 4 viñetas "puede encajar contigo si…"
3. **Erg Chigaga** — el Sahara más remoto + 5 viñetas
4. **Y aquí hay algo que para nosotros importa** — Abdoul, el campamento, Xènia y sus 18 años
5. **Entonces, ¿cuál es mejor?** → *No hay uno mejor. Hay uno que encaja mejor con vuestro viaje.*
6. CTA → **Quiero saber cuál encaja con mi viaje →**

El valor de conversión de esta página está en el punto 5: recomendar Merzouga cuando
procede es lo que hace creíble todo lo demás.

---

### 8 · Contacto (`/contacto`)

Orden: **B2B primero** (prioridad declarada), B2C después, formulario, WhatsApp.

1. **Hablemos de Marruecos** (hero corto)
2. *¿Eres una agencia y buscas un partner local?* → **Hablar de una colaboración →** (ancla al formulario, rama agencia)
3. *¿Estás pensando en viajar a Marruecos?* → **Diseñar mi viaje →** (ancla, rama viajero)
4. **Formulario bifurcado** — primera pregunta obligatoria, todo lo demás depende de ella:

   **Soy:** ( ) Agencia ( ) Viajero

   | Viajero | Agencia |
   |---|---|
   | Nombre | Nombre |
   | Email / WhatsApp | Agencia |
   | ¿Cuándo te gustaría viajar? | Web |
   | ¿Con quién viajas? | Email / WhatsApp |
   | Duración aproximada | Tipo de clientes |
   | ¿Qué te gustaría vivir? | ¿Qué buscas de un partner en Marruecos? |
   | → **Empezar a diseñar mi viaje →** | → **Solicitar una videollamada →** |

   Nada es obligatorio salvo nombre y una vía de contacto: el mensaje del cliente es
   "no necesitas preparar un briefing".
5. *¿Prefieres hablar directamente?* → **Escribir por WhatsApp →**
6. Pie de página de marca: *Sahara Bless Travel · Marruecos · España*

> ⚠️ **Falta el destino real del formulario** (no hay email, ni número de WhatsApp, ni
> endpoint). Se implementa con la lógica y validación completas y un envío inerte marcado
> en el código, más constantes `WHATSAPP_NUMERO` / `EMAIL_CONTACTO` en un solo sitio para
> rellenar. No se inventa ningún dato de contacto.

---

## D · Reglas de voz aplicadas

- Frases cortas. Párrafos de 2-4 líneas. Nunca un bloque de más de 5 líneas seguidas.
- Se conserva el **voseo del cliente tal cual está**: la web tutea al viajero en unas
  páginas y usa "vosotros" en otras (Viajeros y Agencias hablan de "vosotros"; Home y
  las rutas tutean). Es del original y da la sensación de conversación real, no de
  copy corporativo uniformado. No se normaliza.
- Cero adjetivos de relleno: nada de *exclusivo, único, inolvidable, mágico, de ensueño*.
  El material del cliente ya está limpio de eso; no se le añade.
- Cero cifras inventadas. Las únicas que aparecen —2009, 18 años, 15 años, 7 años,
  5 rutas, número de días y noches— salen literalmente de los PDFs.
