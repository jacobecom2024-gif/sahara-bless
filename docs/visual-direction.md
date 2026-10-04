# Dirección visual · Sahara Bless Travel

Rama: `claude/sahara-bless-visual-direction-2026-10`, creada desde la rama de reconstrucción
(`claude/sahara-bless-premium-rebuild-2026-10`, 3b02206). Ninguna rama existente se modifica.

## 1. Inventario gráfico

Materiales disponibles en el proyecto y en la carpeta de la clienta:

- **Fotografías**: 37 originales en `fotos-originales/`, con WebP de 800 y 1600 px en `public/fotos/`.
  Todas son de la clienta o vienen de sus documentos. No hay banco de imágenes.
- **Vídeo**: ninguno. No hay vídeo real, limpio y optimizado de la marca. El hero usa foto fija.
- **Logotipo**: `public/marca.svg`, un símbolo de dunas y sol sobre fondo oscuro. Es válido.
  Se usa junto a la palabra "Sahara Bless", escrita en la tipografía de marca. No se sustituye por
  una letra "S" en círculo.
- **Tipografía**: Cormorant Garamond (titulares) y Karla (texto y controles), alojadas en el proyecto
  vía `@fontsource`. Ya no se usa Google Fonts.

### Fotografías (ancho×alto, proporción, uso en la web)

Columna "¿1600 px?": si el original permite una imagen de anchura completa sin ampliar. Las fotos
menores de 1600 px solo se usan en columnas, nunca a sangre.

| Archivo | Tamaño | Proporción | ¿1600 px? | Usos |
|---|---|---|---|---|
| xenia-abdoul-atardecer | 1024×576 | 1.78 | no | Inicio (Abdoul), Historia (encuentro) |
| campamento-hora-azul | 2000×1328 | 1.51 | sí | Hero de Inicio |
| campamento-alfombras | 900×600 | 1.50 | no | Viajeros ("Conocer el Sahara") |
| campamento-jaimas | 2121×1414 | 1.50 | sí | Inicio (Erg Chigaga), Agencias (pausa), Historia (pausa) |
| te-patio-puerta-azul | 595×397 | 1.50 | no | Viajeros ("Familia"), Historia |
| te-familia-oasis | 2048×1152 | 1.78 | sí | Hero de Viajeros, ruta Nomad (día 4) |
| berber-camp-sunset3 | 6000×4000 | 1.50 | sí | Viajeros ("Celebrar algo especial") |
| essaouira-murallas | 2500×1667 | 1.50 | sí | Hero de Atlantic to Sahara |
| essaouira-puerto-atardecer | 2048×1536 | 1.33 | sí | Atlantic (días 3-4) |
| playa-sidi-kaouki | 2048×1363 | 1.50 | sí | Moroccan Soul (días 3-4) |
| dunas-chigaga | 1920×1280 | 1.50 | sí | Hero de The Desert Journey, Agencias y Erg Chigaga |
| dunas-erg-chebbi | 2500×1669 | 1.50 | sí | Hero de Historia; Merzouga en Erg Chigaga |
| 4x4-hacia-las-dunas | 1536×1024 | 1.50 | no | Desert Journey (día 4), Erg Chigaga (Chigaga) |
| carretera-hamada | 2121×1414 | 1.50 | sí | Operación (Inicio), Agencias, hero de Erg o Merzouga |
| ait-ben-haddou | 2048×1366 | 1.50 | sí | Atlantic (días 8-9) |
| ait-ben-haddou-atardecer | 2500×1667 | 1.50 | sí | Desert Journey (día 3) |
| ait-ben-haddou-amanecer | 2048×1365 | 1.50 | sí | Nomad (día 8) |
| ait-ben-haddou-panoramica | 2048×1024 | 2.00 | sí | Nomad (días 9-10) |
| oasis-fint | 1620×1080 | 1.50 | sí | Nomad (día 3) |
| palmeral-montana | 2332×1742 | 1.34 | sí | Hero de The Nomad Route |
| kasbah-valle-draa | 1280×850 | 1.51 | no | Nomad (día 5) |
| skoura-kasbah-palmeral | 2048×1366 | 1.50 | sí | Viajeros ("Marruecos más cultural") |
| marrakech-jemaa-atardecer | 2000×1255 | 1.59 | sí | Desert Journey (día 1) |
| marrakech-terrazas-atlas | 2500×1406 | 1.78 | sí | Desert Journey (día 2), cierre de Inicio |
| riad-patio-noche | 2500×1875 | 1.33 | sí | Moroccan Soul (día 7) |
| riad-patio-verde | 1080×1348 | 0.80 | no | Atlantic (días 1-2), vertical |
| riad-patio-naranjos | 2500×1667 | 1.50 | sí | Moroccan Soul (día 1) |
| valle-atlas-nieve | 2048×1371 | 1.49 | sí | Desert Journey (día 7) |
| valle-ouirgane | 2500×1667 | 1.50 | sí | Hero de Moroccan Soul |
| pueblo-atlas-nieve | 1552×1036 | 1.50 | no | Moroccan Soul (día 5) |
| ourika-montanas | 2048×1536 | 1.33 | sí | Viajeros ("Mar y montaña") |
| taroudant-murallas | 2250×1500 | 1.50 | sí | Atlantic (día 5) |
| gargantas-dades | 2500×1667 | 1.50 | sí | Imperial (día 4) |
| dades-curvas | 2300×1533 | 1.50 | sí | Hero del índice de Rutas |
| fez-medina | 2048×1365 | 1.50 | sí | Hero de The Imperial Journey |
| fez-curtidurias | 2500×1667 | 1.50 | sí | Imperial (días 2-3), Viajeros |
| casablanca | 2500×1667 | 1.50 | sí | Imperial (día 1) |

## 2. Qué recurso va a cada bloque, y por qué

Regla de reparto: cada foto aparece como mucho en una ruta (heroes incluidos). Las rutas se
comprueban con un script antes de cada commit. Las fotos del mismo lugar sí pueden repetirse entre
páginas que no son rutas.

- **Hero de Inicio**: `campamento-hora-azul`. Es la escena de campamento al atardecer, con fuego y
  faroles, y su proporción es la más cercana a un panorámico de los originales. Se recorta solo en
  vertical.
- **Abdoul (Inicio)**: `xenia-abdoul-atardecer`, la única foto verificada en la que aparece Abdoul.
  Se usa en su proporción original porque un recorte vertical cortaría a uno de los dos.
- **Erg Chigaga (Inicio y Agencias)**: `campamento-jaimas`, panorámica a sangre. El pie no dice dónde
  está el campamento porque la ubicación no está confirmada por la clienta.
- **Operación para agencias (Inicio)**: `carretera-hamada`, una imagen horizontal que habla de
  logística y de transporte. No es una foto de flota propia; ver el documento de huecos.
- **Cierre de Inicio**: `marrakech-terrazas-atlas`, distinta del hero.
- **Rutas (índice)**: heroes de cada ruta, para que cada ruta tenga su propia imagen.
- **Ruta**: hero propio de cada ruta, y en el itinerario solo fotos que se corresponden con el lugar
  del día. Un día sin foto se muestra sin foto.
- **Viajeros**: cada motivación con su foto cuando existe un material adecuado.
- **Historia**: personas primero (encuentro con `xenia-abdoul-atardecer`), y el campamento como pausa.
- **Erg Chigaga o Merzouga**: `dunas-erg-chebbi` para Merzouga, `4x4-hacia-las-dunas` para Chigaga.
  Así cada opción tiene su propia imagen y no se mezclan los desiertos.

## 3. Esquema visual por página, en orden de scroll

### Inicio (`/`)

1. **Header**: fijo, 80 px en escritorio y 68 px en móvil. Logotipo a la izquierda, navegación a la
   derecha. "Para agencias" visible en todo momento como enlace con borde, sin convertir la cabecera
   en una fila de botones.
2. **Hero** (82–88 vh): foto a sangre con oscurecimiento solo en la base. Dos niveles de titular:
   línea 1 pequeña, línea 2 dominante, entre 76 y 112 px en escritorio y entre 48 y 64 px en móvil.
   Sin botones encima.
3. **Dos recorridos**: banda de dos áreas distintas. Agencias en oliva profundo (7/12), con dos
   acciones. Viajeros en arena clara (5/12), con botón de contorno y enlace. En móvil se apilan.
4. **Abdoul**: composición 45/55. Texto a la izquierda, foto en proporción original a la derecha.
5. **Erg Chigaga**: panorámica a sangre de 66 vh, con un titular y una frase breve superpuesta abajo.
6. **Rutas**: una ruta destacada con imagen a la izquierda ocupando el 62 % del ancho, y cuatro rutas en
   secuencia alterna: izquierda, derecha, izquierda y apaisada a ancho completo. Cada ruta lleva un
   subtítulo con su duración, sus lugares y su descripción.
7. **Operación para agencias**: foto horizontal 3:2 y texto a la derecha. Cuatro pasos numerados, sin
   iconos.
8. **Cierre**: foto distinta a la del hero (4:3) y dos caminos: agencias y viajeros, cada uno con su
   enlace.

Secuencia de composiciones: hero → banda de dos columnas → asimétrica 45/55 → panorámica a sangre →
secuencia alterna → partida horizontal → partida con foto y texto. No hay dos secciones seguidas con
la misma composición.

### Agencias (`/agencias`)

1. Hero operativo (4x4, `cuatroPorCuatro`), texto corto y CTA visible.
2. Propuesta de colaboración: columna de lectura con CTA.
3. Capacidades en secuencia numerada y foto de carretera a la derecha.
4. Pausa visual a ancho completo con la foto del campamento.
5. Pruebas operativas en fondo oliva: flota, red hotelera y campamento, cada una con su explicación.
6. Erg Chigaga con texto y foto en columna.
7. Proceso en secuencia numerada.
8. Cierre oliva con dos acciones: colaboración y videollamada.

### Viajeros (`/viajeros`)

1. Hero propio con `te-familia-oasis`.
2. Introducción en una columna.
3. Motivaciones en filas alternas de texto y foto, sin cuadrícula de tarjetas.
4. "No vendemos viajes cerrados" en una columna.
5. Dos caminos: inspirarse o conocernos.
6. Erg Chigaga en fondo oliva.
7. Cierre con CTA de viaje a medida.

### Nuestra historia (`/nuestra-historia`)

1. Hero con `dunas-erg-chebbi`.
2. Personas primero: texto del encuentro y foto de Xènia y Abdoul.
3. Capítulos alternando fondo claro y arena, con una foto documentada donde hay una.
4. Línea de fechas: solo lo que consta en los documentos (2009; más de 18 años).
5. Pausa visual con el campamento a ancho completo.
6. Cierre oliva con dos acciones.

### Ruta (`/rutas/:slug`), las cinco

1. Hero propio de la ruta, `alto="completo"`, con su titular de dos niveles.
2. Introducción en dos columnas.
3. Itinerario en secuencia vertical: días pares con foto a 16:9 a ancho completo; días impares en
   columna con foto 4:5. Nota de itinerario orientativo.
4. CTA intermedio, una sola vez.
5. Bloque "Erg Chigaga" en oliva, solo en las rutas que pasan por el desierto.
6. Cierre con CTA de diseño de viaje.
7. Bloque para agencias y enlace al índice.

### Erg Chigaga o Merzouga (`/erg-chigaga-o-merzouga`)

1. Hero con `carretera-hamada`.
2. Introducción en una columna.
3. Comparativa: dos bloques con foto, texto y lista de puntos. Merzouga y Chigaga con el mismo peso.
4. "No hay uno mejor" en una columna con CTA.
5. Bloque oliva sobre Erg Chigaga y su historia, con foto a la derecha.

### Contacto (`/contacto`)

1. Titular.
2. Dos caminos: agencia y viajero, con enlace a su formulario.
3. Formulario con selección de perfil, validación y estado de error o confirmación.
4. Bloque de WhatsApp.

## 4. Medidas de tipografía y márgenes

- Titulares de home: `clamp(48px, 8.2vw, 112px)`. En escritorio dan 76–112 px y en móvil 48–64 px.
- Titulares de sección: `clamp(34px, 6.2vw, 64px)`. Dan 44–64 px en escritorio y 34–44 px en móvil.
- Texto: 16–18 px en escritorio y 16 px en móvil, nunca menos de 15 px.
- Márgenes: 7 % del ancho de pantalla en escritorio (120 px máximo) y 20 px en móvil.
- Ancho máximo de composición: 1280 px.

## 5. Colores

- Blanco roto `#f6f1e7` como fondo principal.
- Arena `#ebe1cf` y arena clara `#f1e9da` para bloques de fondo.
- Oliva profundo `#2f3a2a` para los bloques oscuros.
- Terracota `#9b4524` como acento contenido: botones y enlaces de énfasis.
- Tinta `#26231e` para el texto. No se usa negro puro ni dorado como receta de lujo.
