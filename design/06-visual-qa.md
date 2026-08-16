# 06 · QA en navegador — Sahara Bless Travel

Fase 8. Sitio abierto en el navegador contra el servidor de desarrollo
(`http://localhost:5174`), inspeccionado y corregido.

---

## ⚠️ Limitación de esta sesión — leer antes que nada

El panel de navegador de esta sesión **no estaba visible**, y un navegador que no
compone fotogramas se comporta distinto de uno real. Consecuencias medidas:

| Síntoma | Efecto en la revisión |
|---|---|
| `screenshot` falla ("the Browser pane is not displayed") | **No hay ninguna captura.** Ni una. |
| Las unidades de viewport (`vw`, `svh`) se resuelven a 0 | Todo `clamp()` colapsa a su valor mínimo: el gutter mide 20px en vez de 40, la sección 72px en vez de 139, el hero 319px en vez de 720. **La escala tipográfica y el ritmo vertical reales no se han podido ver.** |
| Las imágenes no se decodifican (`naturalWidth === 0`) | El recorte y el encuadre de las 36 fotos no se han visto renderizados. |
| Los elementos `position: fixed` no recalculan estilo tras un cambio de clase posterior al montaje | Un fallo real (cabecera) se manifestó y se corrigió, pero requirió deducirlo. |

**Lo que sigue pendiente de revisión humana**, y no se puede dar por bueno desde aquí:
proporción y encuadre de cada fotografía, peso visual del titular del hero a tamaño
real, ritmo vertical entre secciones, y el aspecto del grano sobre las superficies.

Todo lo demás de este documento **sí** está medido en el DOM real.

---

## Lo que sí se ha verificado

### Estructura y rutas
- Las 14 rutas responden 200: portada, índice, las 5 fichas, Viajeros, Agencias,
  Nuestra historia, Erg Chigaga o Merzouga, Contacto, Contacto con `?perfil=`, y 404.
- Los 72 archivos WebP referenciados (36 fotos × 2 anchos) existen y se sirven.
- Cero errores en consola. Cero avisos del servidor.
- `npm run lint` limpio. `npm run build` limpio (322 kB JS / 99 kB gzip, 22 kB CSS).

### Accesibilidad (medida página a página)
- Un solo `h1` por página, sin saltos de nivel, en las 10 páginas revisadas.
- Cero imágenes sin `alt`. Cero ids duplicados. Cero controles sin nombre accesible.
- Cero campos de formulario sin etiqueta.
- Contraste: **cero pares por debajo de AA** en las 10 páginas, midiendo el color
  calculado de cada nodo de texto contra su fondo real.

### Móvil (375 px)
- **Cero desbordamientos horizontales** en las 8 páginas comprobadas, midiendo
  `getBoundingClientRect().right` de cada elemento contra `clientWidth` — no
  `scrollWidth`, que miente cuando hay `overflow-x: clip`.
- El panel de navegación ocupa **375 × 812** (viewport completo), no una franja.
  Es el fallo clásico de `backdrop-filter` en cabecera fija: aquí no puede darse,
  porque `backdrop-filter` está prohibido en el sistema y se verificó que la
  cabecera calcula `backdrop-filter: none`.
- Abrir el panel: `aria-expanded="true"`, foco al primer enlace, `body` bloqueado.
- Cerrar con `Esc`: panel oculto, `aria-expanded="false"`, foco devuelto al botón,
  scroll liberado.
- `--altura-cabecera` la publica un `ResizeObserver`: mide **80 px** reales. No hay
  ningún valor de altura de cabecera escrito a mano en el código.

### Formulario de contacto
- `?perfil=agencia` llega marcado y muestra Agencia/Web; oculta los campos de viajero.
- `?ruta=the-nomad-route` se reconoce y se muestra en cabecera: *"Nos escribes sobre
  The Nomad Route (10 días)"*.
- Envío vacío → dos errores con `role="alert"`, foco al primer campo inválido.
- Contacto malformado (`nose`) → error específico.
- Envío válido → confirmación con `role="status"` y foco movido a ella.
- El botón cambia de texto según la rama: *Solicitar una videollamada* /
  *Empezar a diseñar mi viaje*.

---

## Defectos encontrados y corregidos

| # | Defecto | Por qué importaba | Corrección |
|---|---|---|---|
| 1 | **Cabecera invisible en Contacto y 404.** Sin hero fotográfico, la cabecera transparente pintaba la marca en crema sobre fondo arena: **1.00:1**. | La marca y el botón de menú desaparecían por completo en la página de conversión. | La cabecera se pinta sólida cuando la ruta no lleva hero. Se decide **durante el render a partir del `pathname`**, no consultando el DOM después de montar: así el color correcto está ya en el primer pintado. Medido después: **15.97:1**. |
| 2 | **Numeración de los pilares en ocre** (`#B8823A` sobre arena = **2.99:1**). | Violaba una regla explícita del propio design system: el ocre es decoración, nunca texto sobre claro. Se coló porque "parece un adorno". | Pasa a terracota (5.66:1) y se marca `aria-hidden`, porque numerar es decorativo. |
| 3 | **Titulares partidos sin espacio.** `<br>` no separa para el cálculo del nombre accesible: un lector de pantalla leía *"No se trata solo de dónde vas.Sino de cómo lo vives."*. | Afectaba a 7 titulares, entre ellos el `h1` de tres páginas. | Componente `Lineas` que inserta un espacio real entre líneas. Visualmente se colapsa al inicio de línea. Mismo arreglo en la marca: era *"Sahara BlessTravel"*. |
| 4 | **Confirmación de envío pegada.** Tras enviar una vez, volver a `/contacto` desde otro CTA seguía mostrando la confirmación antigua: no había forma de escribir un segundo mensaje. | Un agente que escribe y luego vuelve desde otra página se encontraba una pantalla muerta. | El estado se reinicia cuando cambian los parámetros de la URL. |
| 5 | **Dianas táctiles por debajo de 44 px**: enlace de marca (171×19) y botones de variante flecha (218×31). | Falla WCAG 2.5.8 y se falla el toque en móvil. | `min-height: 44px` en ambos. Verificado: 44 y 44. |
| 6 | **Las tarjetas de ruta no tenían encabezado.** El nombre de la ruta era un `<span>`: la página Rutas era una lista de cinco artículos sin nombre, con solo 3 encabezados en total. | Navegar por encabezados es la forma habitual de escanear una página con lector de pantalla. | El nombre pasa a `<h3>` dentro del enlace (válido: no anida interactivos). |

## Defecto de proceso, no del sitio

Un renombrado hecho con PowerShell 5.1 (`Get-Content`/`Set-Content` sin `-Encoding`)
leyó 10 archivos como Windows-1252 y los reescribió como UTF-8, destrozando todos los
acentos y añadiendo BOM. Se detectó y se revirtió byte a byte; verificado que no queda
ni un `Ã` ni un BOM en `src/`. **En este proyecto, para reescribir archivos en lote hay
que usar Python o las herramientas de edición, nunca `Get-Content | Set-Content`.**

---

## Comprobaciones que no aplican

- **Modo oscuro**: el sitio se compromete con una sola apariencia (dirección "Hamada",
  superficies arena/hueso/tinta/noche). No hay variante clara/oscura que validar.
- **Estados de carga**: no hay datos remotos. El formulario no llama a ningún servicio
  todavía (ver 07).
