# Auditoría y decisiones de diseño · Sahara Bless Travel

Rama: `claude/sahara-bless-premium-rebuild-2026-10`, creada desde `origin/main`
(c055f3a). Creación desde cero: no se reutiliza la maquetación ni los componentes
de `main` ni de las ramas de prueba. Sí se reutilizan activos verificados (fotos,
descripciones de foto, datos de contacto facilitados por la clienta).

## 1. Estado del repositorio al inicio

- Stack: Vite + React 19 + react-router 7, CSS plano con tokens. Sin tests.
  Scripts: `dev`, `build`, `lint` (oxlint), `preview`.
- Rama de trabajo original: `prueba-visual-sobre-main` (con cambios sin
  fusionar; no se ha tocado). Ramas remotas existentes: `main`,
  `copy-aspiracional`, `i18n-tres-idiomas`, `material-visual-octubre`,
  `prueba-visual-sobre-main`, `whatsapp-y-cta-viajeros`. No se modifica ninguna.
- `main` publica la web actual (`saharablesstravel.com`). Esta rama no se
  fusiona ni se despliega.

## 2. Documentos fuente localizados

Carpeta: `C:\Users\xenia\Downloads\Shara Bless X Claudio\`

| Documento | Contenido usado |
|---|---|
| `texto para el Claudio.pdf` | Guía de desarrollo: objetivo B2B + B2C, estructura, CTA, fotografía, tono |
| `pagina HOME.pdf` | Textos de Inicio |
| `PÁGINA · PARA AGENCIAS.pdf` | Textos de Agencias |
| `pagina VIAJEROS B2C.pdf` | Textos de Viajeros |
| `pagina rutas.pdf` | Índice de rutas |
| `ruta THE DESERT JOURNEY.pdf`, `ruta ATLANTIC TO SAHARA.pdf`, `ruta 3 THE NOMAD ROUTE.pdf`, `ruta 4 MOROCCAN SOUL.pdf`, `ruta 5 THE IMPERIAL JOURNEY.pdf` | Cinco rutas, día a día |
| `NUESTRA HISTORIA.pdf` | Historia |
| `pagina erg che gaga o merzouga_.pdf` | Página de ayuda para decidir |
| `pagina CONTACTO.pdf` | Contacto y formulario |
| `_fotos_extraidas/` (156 archivos) | Extracciones de los PDF: recortes y duplicados, no se usan directamente |
| `sahara-bless-web-PARA-SUBIR.zip` | Paquete anterior, no se usa |

Las dos referencias del cliente se han leído en el navegador (escritorio y
móvil): `saharablesstravel.com` y `eldesiertointerior.com/es`. Ver §4.

## 3. Activos gráficos disponibles

- **Fotos de la clienta** (`fotos-originales/`): 36 JPEG curados en `main`, con
  descripción verificada en `src/datos/fotos.js` de `main`, más
  `berber-camp-sunset3.jpg` (aportada en esta sesión). Se generan WebP de 800 y
  1600 px con `scripts/optimizar-fotos.mjs`.
- **Fotos sin usar**: las 27 `stock-*` de la rama `prueba-visual-sobre-main` no
  se usan. Son de banco de imágenes y la regla del brief lo prohíbe.
- **Logo**: `public/marca.svg`.
- **Vídeo**: no hay vídeo de marca en `main` ni en la carpeta de materiales.
  Se omite; no se inventa.
- **Tipografía**: Fraunces (display) y Karla (cuerpo), cargadas desde Google
  Fonts, como en la identidad actual.

### Fotos que faltan

- **Abdoul sola, en el campamento de Erg Chigaga**: el brief la pide
  expresamente (Agencias, bloque Erg Chigaga; página Erg Chigaga o Merzouga).
  No hay ninguna foto así verificada. Se deja pendiente; no se usa otra que
  simule la misma idea.
- Foto de Erg Chigaga "potente" para las tres rutas del Sahara: hay
  `dunas-chigaga` y `4x4-hacia-las-dunas`. Se usan; si la clienta aporta una
  mejor, se sustituye en `fotos.js`.

## 4. Referencias revisadas

**saharablesstravel.com** (versión publicada, la de `main`)
- Hero de campamento de noche bien encuadrado; el texto se lee en móvil.
- Estructura de landing genérica: muchos bloques de texto seguidos y la misma
  fórmula en cada sección. Sin jerarquía clara entre viajeros y agencias.
- Muestra "Más de 15 años" y "Desde 2009" a la vez, sin explicar la relación.
- Cada página repite el CTA "Hablemos de tu viaje" sin contexto.

**eldesiertointerior.com/es** (prototipo B2B)
- Titular editorial fuerte ("Vuestros clientes no recordarán una ruta.") y
  orientación clara a agencias. Es el mejor referente de jerarquía B2B.
- Afirma cosas que la clienta no ha confirmado: "operación white-label",
  "sin operaciones compartidas con otros grupos", "capacidad limitada". **No se
  copian.**
- Usa una imagen de fuego como hero: es un cliché y no transmite Marruecos.
- Menú móvil sin CTA visible: el contacto B2B queda en un pliegue.
- Mezcla español, inglés y francés sin que la navegación lo explique.

**Problemas a resolver en la nueva web**
1. Que una agencia identifique su camino en el primer pantallazo.
2. Texto demasiado largo en bloques seguidos.
3. CTA genéricos ("Hablemos de tu viaje") en lugar de acciones concretas.
4. Hero sin contexto humano: la foto debe llevar a una persona, un lugar o una
   acción reconocible.
5. Móvil: el CTA de contacto debe ser visible sin abrir el menú.

## 5. Hechos que se usan (y de dónde salen)

Solo los que aparecen en los documentos de la clienta:
- Desde 2009 se crean y coordinan viajes en Marruecos (Home, Agencias,
  Historia, Viajeros).
- Abdoul nació en el Sahara y vivió allí hasta los siete años entre las dunas.
  Es propietario de su propio campamento en Erg Chigaga.
- Xènia y Abdoul empezaron a trabajar juntos en 2009.
- Xènia lleva más de 18 años regresando al desierto (Viajeros, Erg Chigaga).
- Sahara Bless Travel lleva muchos años operando en Marruecos y trabaja con
  cientos de hoteles. Hecho confirmado por la clienta en el encargo. Se usa sin
  cifras concretas.
- Flota propia de vehículos 4x4. Hecho confirmado por la clienta en el encargo.
  No se da ninguna cifra de vehículos.
- Red de colaboradores y personas locales: en los PDF (Home, Viajeros, Historia).
- Certificaciones, premios, testimonios, clientes, precios: **no hay**. No se
  inventan.

**Discrepancia a confirmar**: Home dice "Más de 15 años caminando por
Marruecos"; Historia dice "hace más de 18 años" que Xènia llegó al desierto. Son
dos frases distintas. Se usa cada una en su contexto y no se unifican.

## 6. Arquitectura

| Página | Ruta | Público principal |
|---|---|---|
| Inicio | `/` | Ambos: viajeros y agencias, con prioridad a la agencia |
| Agencias | `/agencias` | B2B |
| Viajeros | `/viajeros` | B2C |
| Rutas (índice) | `/rutas` | B2C |
| Cinco rutas | `/rutas/:slug` | B2C; agencias como segundo público |
| Erg Chigaga o Merzouga | `/erg-chigaga-o-merzouga` | B2C, página de ayuda |
| Nuestra historia | `/nuestra-historia` | Ambos |
| Contacto | `/contacto` | Ambos; el formulario separa agencia y viajero |
| No encontrada | `*` | — |

Menú: Inicio · Rutas · Viajeros · Agencias · Nuestra historia · Contacto, más un
botón fijo "Hablar con nosotros". Sigue el brief. No se añaden páginas legales
porque no hay textos aportados.

## 7. Decisiones de diseño

- **Dirección**: editorial y sobria. Mucho aire, fotografía grande, una idea por
  bloque. El texto de cada bloque es breve; las fotos llevan el peso.
- **Color**: se mantiene la paleta de marca ya definida (arena, tinta,
  terracota, ocre, noche). Es la paleta de los materiales de marca; no se inventa
  una nueva.
- **Tipografía**: Fraunces para titulares y Karla para cuerpo. Jerarquía fija:
  titular, bloque, texto.
- **Heros**: foto a sangre con degradado oscuro en la zona del texto, para que el
  texto blanco pase de 4.5:1 en todas las páginas. Motivo: en la prueba
  `prueba-visual-sobre-main` se midió que sin velo el texto pequeño fallaba en
  varios banners (ver el historial de esa rama).
- **Botones**: sólidos sin flecha; enlaces de texto subrayados con flecha. Regla
  ya fijada en el proyecto.
- **CTA**: específicos. "Diseñar mi viaje", "Ver la ruta", "Hablemos de una
  colaboración", "Agenda una videollamada". Nunca "Enviar" ni "Más información".
- **Movimiento**: revelado suave al entrar en pantalla. Con
  `prefers-reduced-motion` desaparece.
- **Móvil**: menú de pantalla completa con foco atrapado y cierre con Esc. El
  botón "Hablar con nosotros" queda visible en la cabecera.
- **SEO**: título y descripción por página; `robots.txt` y `.htaccess` del
  proyecto se mantienen.
- **Analítica y cookies**: ninguna. No se añade ningún script externo.

## 8. Formulario y contacto

- WhatsApp: número facilitado por la clienta (`src/datos/marca.js`), enlace
  `wa.me`.
- Email, teléfono y dirección: **no facilitados**. No se muestran.
- Formulario: tiene validación de campos y separa agencia y viajero. **No tiene
  destino de envío configurado**. Al enviar muestra un mensaje honesto que
  indica que el envío no está activo y ofrece WhatsApp. **No simula un éxito.**
  Para activarlo hace falta un endpoint o un email confirmado por la clienta.

## 9. Pendiente

1. Foto de Abdoul en el campamento de Erg Chigaga.
2. Email de contacto y endpoint del formulario.
3. Cifras concretas de vehículos 4x4 y de hoteles, solo si la clienta quiere publicarlas. Hoy el texto usa "cientos" y "flota propia" sin números.
4. Confirmar la discrepancia "15 años" / "18 años".
5. Vídeo de marca, si existe. Hoy no hay.
