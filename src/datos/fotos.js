/**
 * Catalogo de fotografia.
 *
 * Las fotos salen de los PDF, de la carpeta de fotografia propia y —desde la
 * segunda tanda de material (2026-09)— de Adobe Stock. Estan curadas una a una:
 * el `alt` describe lo que realmente se ve en la imagen, no lo que la seccion
 * dice, y no atribuye identidades que no podamos confirmar. Ninguna imagen
 * generada con IA (regla del brief).
 *
 * ORIGEN. Cada entrada declara de donde viene:
 *   origen: 'propia'  -> fotografia de Sahara Bless Travel
 *   origen: 'stock'   -> banco de imagenes, con `fuente` (id de Adobe Stock)
 * El componente Foto lo vuelca a `data-origen` / `data-fuente` en el HTML, para
 * que se pueda auditar desde el propio marcado. Regla dura: el `alt` de una
 * imagen de stock NUNCA dice "nuestro campamento", "nuestro equipo" ni nombra a
 * Xenia o Abdoul. Ver AUDITORIA_Y_SELECCION_ASSETS_SAHARA_BLESS.md.
 *
 * Cada entrada sirve dos WebP (`-800` y `-1600`) generados por
 * scripts/optimizar-fotos.mjs. `prop` es la proporcion real del original y se
 * usa para reservar espacio y no provocar saltos de maquetacion.
 */

const f = (id, ancho, alto, alt, extra = {}) => ({
  id,
  ancho,
  alto,
  prop: ancho / alto,
  alt,
  origen: 'propia',
  ...extra,
})

/** Azucar para las entradas de banco de imagenes. */
const s = (id, ancho, alto, alt, fuente) =>
  f(id, ancho, alto, alt, { origen: 'stock', fuente })

export const FOTOS = {
  xeniaAbdoul: f(
    'xenia-abdoul-atardecer',
    1024,
    576,
    'Xènia y Abdoul sentados juntos sobre una alfombra en un cerro del desierto, sonriendo al atardecer',
  ),
  tePatio: f(
    'te-patio-puerta-azul',
    595,
    397,
    'Cuatro personas sentadas en el suelo compartiendo té frente a una puerta azul y malvarrosas',
  ),
  campamentoAlfombras: f(
    'campamento-alfombras',
    900,
    600,
    'Campamento en el desierto con jaimas en semicírculo, alfombras en el suelo y un grupo comiendo en el centro',
  ),
  campamentoHoraAzul: f(
    'campamento-hora-azul',
    2000,
    1328,
    'Campamento entre dunas a la hora azul, con faroles encendidos marcando el camino y una hoguera',
  ),
  campamentoJaimas: f(
    'campamento-jaimas',
    2121,
    1414,
    'Tres jaimas blancas al pie de una duna, con colchones bajos, alfombras y un farol encendido',
  ),
  essaouiraMurallas: f(
    'essaouira-murallas',
    2500,
    1667,
    'Las murallas y las casas blancas de Essaouira vistas desde el mar, con el oleaje rompiendo en las rocas',
  ),
  essaouiraPuerto: f(
    'essaouira-puerto-atardecer',
    2048,
    1536,
    'Atardecer sobre la playa de Essaouira, con los barcos del puerto recortados contra el sol',
  ),
  playaSidiKaouki: f(
    'playa-sidi-kaouki',
    2048,
    1363,
    'Playa atlántica muy larga con sombrillas de paja y algunas personas caminando por la orilla',
  ),
  dunasChigaga: f(
    'dunas-chigaga',
    1920,
    1280,
    'Dunas de arena ocre encadenadas hasta el horizonte bajo un cielo azul limpio',
  ),
  dunasErgChebbi: f(
    'dunas-erg-chebbi',
    2500,
    1669,
    'Grandes dunas anaranjadas con la arena ondulada en primer plano y matorral disperso',
  ),
  cuatroPorCuatro: f(
    '4x4-hacia-las-dunas',
    1536,
    1024,
    'Un 4x4 blanco levantando polvo por una pista de piedra, con el cordón de dunas al fondo',
  ),
  carreteraHamada: f(
    'carretera-hamada',
    2121,
    1414,
    'Carretera solitaria serpenteando por una llanura pedregosa hasta perderse en el horizonte',
  ),
  aitBenHaddou: f(
    'ait-ben-haddou',
    2048,
    1366,
    'La kasbah de Aït Ben Haddou, con sus casas de adobe escalonadas hasta el granero de lo alto',
  ),
  aitBenHaddouAtardecer: f(
    'ait-ben-haddou-atardecer',
    2500,
    1667,
    'Aït Ben Haddou al atardecer, con el adobe encendido y el cielo veteado de rosa',
  ),
  aitBenHaddouAmanecer: f(
    'ait-ben-haddou-amanecer',
    2048,
    1365,
    'Aït Ben Haddou a contraluz al amanecer, con el cielo naranja sobre la meseta',
  ),
  aitBenHaddouPanoramica: f(
    'ait-ben-haddou-panoramica',
    2048,
    1024,
    'Vista panorámica de Aït Ben Haddou rodeada de palmeras y huerta',
  ),
  oasisFint: f(
    'oasis-fint',
    1620,
    1080,
    'El oasis de Fint: una franja de palmeras y huertos siguiendo el río entre montañas peladas',
  ),
  palmeralMontana: f(
    'palmeral-montana',
    2332,
    1742,
    'Palmeral inmenso extendido al pie de una montaña de roca, con casas de adobe en primer término',
  ),
  kasbahValleDraa: f(
    'kasbah-valle-draa',
    1280,
    850,
    'Kasbah de adobe rojo sobre un palmeral, con la ladera de la montaña detrás',
  ),
  skouraKasbah: f(
    'skoura-kasbah-palmeral',
    2048,
    1366,
    'Kasbah asomando sobre un palmeral cargado de dátiles',
  ),
  marrakechJemaa: f(
    'marrakech-jemaa-atardecer',
    2000,
    1255,
    'La plaza Jemaa el-Fna de Marrakech llena de gente y puestos al atardecer, vista desde una terraza',
  ),
  marrakechTerrazas: f(
    'marrakech-terrazas-atlas',
    2500,
    1406,
    'Las terrazas rosadas de la medina de Marrakech con la cordillera del Atlas nevada al fondo',
  ),
  riadPatioNoche: f(
    'riad-patio-noche',
    2500,
    1875,
    'Patio de riad de noche, con piscina, faroles encendidos y celosías de madera',
  ),
  riadPatioVerde: f(
    'riad-patio-verde',
    1080,
    1348,
    'Patio de riad con piscina de azulejo verde, plantas y arcos blancos de yeso tallado',
  ),
  riadPatioNaranjos: f(
    'riad-patio-naranjos',
    2500,
    1667,
    'Patio de riad con naranjos y limoneros alrededor de una piscina y una mesa de té',
  ),
  valleAtlasNieve: f(
    'valle-atlas-nieve',
    2048,
    1371,
    'Valle verde del Atlas con un pueblo de casas rojizas y las cumbres nevadas al fondo',
  ),
  valleOuirgane: f(
    'valle-ouirgane',
    2500,
    1667,
    'Valle del Atlas con laderas cultivadas, un pueblo pequeño y las cumbres nevadas detrás',
  ),
  puebloAtlasNieve: f(
    'pueblo-atlas-nieve',
    1552,
    1036,
    'Pueblo bereber de casas de colores encaramado a la ladera, bajo montañas con nieve',
  ),
  ourikaMontanas: f(
    'ourika-montanas',
    2048,
    1536,
    'Pueblo del Atlas rodeado de arbolado, con una gran montaña recortada contra nubes',
  ),
  taroudantMurallas: f(
    'taroudant-murallas',
    2250,
    1500,
    'Las murallas de adobe de Taroudant con una hilera de palmeras delante',
  ),
  gargantasDades: f(
    'gargantas-dades',
    2500,
    1667,
    'La carretera en zigzag de las gargantas del Dades bajando entre paredes de roca roja',
  ),
  dadesCurvas: f(
    'dades-curvas',
    2300,
    1533,
    'Detalle de las curvas de herradura de la carretera del Dades junto al río',
  ),
  fezMedina: f(
    'fez-medina',
    2048,
    1365,
    'La medina de Fez extendida hasta la colina, con minaretes verdes entre las azoteas',
  ),
  fezCurtidurias: f(
    'fez-curtidurias',
    2500,
    1667,
    'Las curtidurías de Fez vistas desde arriba, con las cubas de tinte y las pieles secándose',
  ),
  casablanca: f(
    'casablanca',
    2500,
    1667,
    'Casablanca desde el aire, con el minarete de la mezquita Hassan II junto al Atlántico',
  ),
  teFamiliaOasis: f(
    'te-familia-oasis',
    2048,
    1152,
    'Un hombre y tres niñas sentados sobre alfombras en una casa de adobe, con la tetera y los vasos servidos',
  ),

  /* Fotos propias entregadas por el cliente (carpeta FOTOS WEB SAHARA BLESS).
     Llegan con densidades muy distintas, así que pasan por un ajuste mínimo
     de saturación, calidez y exposición para convivir con las anteriores:
     ver design/05-design-system.md → Fotografía. */
  campamentoDron: f(
    'campamento-dunas-dron',
    1844,
    853,
    'Vista aérea de un campamento de jaimas blancas en un claro entre dunas, con la hoguera encendida al atardecer',
  ),
  familiaDuna: f(
    'familia-duna-atardecer',
    2500,
    1881,
    'Dos adultos y dos niñas pequeñas sentados en lo alto de una duna, mirando la puesta de sol',
  ),
  jaimasNegras: f(
    'jaimas-negras-dunas',
    1920,
    1080,
    'Jaimas de lona oscura con las puertas azules al pie de una gran duna, a última hora de la tarde',
  ),
  retratoDunas: f(
    'retrato-dunas-panuelo',
    1600,
    786,
    'Una mujer con un pañuelo en la cabeza mira hacia las dunas con la luz baja del atardecer detrás',
  ),
  mesaParaDos: f(
    'mesa-para-dos-dunas',
    2500,
    1668,
    'Dos personas sentadas a una mesa pequeña sobre la arena, de espaldas, frente a las dunas',
  ),
  essaouiraSkala: f(
    'essaouira-skala-barcas',
    1600,
    1200,
    'La Skala del puerto de Essaouira con las barcas de pesca azules amarradas delante y gaviotas en el aire',
  ),
  hogueraNoche: f(
    'hoguera-noche',
    2362,
    1575,
    'Una persona con turbante aviva una hoguera de noche y las chispas suben en la oscuridad',
  ),
  teSobreLaDuna: f(
    'te-sobre-la-duna',
    2500,
    1667,
    'Mesa con tetera y vasos servida sobre alfombras y cojines en la arena, con el sol poniéndose entre las dunas',
  ),
  essaouiraPuerta: f(
    'essaouira-puerta-pinturas',
    1200,
    1600,
    'Puerta azul y arco tallado de un taller de Essaouira, con cuadros apoyados en la pared de la calle',
  ),
  equipoTe: f(
    'equipo-te-jaima',
    2048,
    1536,
    'Tres hombres con turbante, sonrientes, junto a una mesa con teteras, vasos de té y pan recién hecho',
  ),
  cuatroPorCuatroLlanura: f(
    '4x4-llanura-sur',
    1920,
    1280,
    'Una persona asomada a la puerta abierta de un 4x4 blanco parado en una llanura del sur',
  ),
  abdoulYXenia: f(
    'abdoul-y-xenia',
    1536,
    2040,
    'Dos personas de pie, juntas, ante una gran puerta de madera con el marco de ladrillo tallado',
  ),
  marrakechKoutoubia: f(
    'marrakech-koutoubia',
    2500,
    3746,
    'El alminar de la Koutoubia de Marrakech visto desde abajo, con una palmera en primer plano',
  ),

  /* --- Segunda tanda (2026-09-23) ----------------------------------------
     Una foto propia y seis de Adobe Stock. Las de stock llevan su id real:
     las que no se han podido identificar con certeza se han quedado fuera del
     sitio (ver el informe de auditoria, apartado 11). */

  /** Propia: el equipo al completo. Resuelve la carencia nº 3 del informe. */
  equipoVehiculos: f(
    'equipo-vehiculos',
    2362,
    1575,
    'El equipo de Sahara Bless Travel, con vestimenta tradicional, junto a los vehículos en el desierto',
  ),

  stockDunaAmanecer: s(
    'stock-duna-amanecer',
    2500,
    1669,
    'Dunas del Sahara al amanecer, con una figura pequeña caminando por la cresta',
    'adobe-235286391',
  ),
  stockTeServido: s(
    'stock-te-servido',
    2500,
    1667,
    'Una mano sirve té de una tetera de metal sobre una bandeja, con el mar de fondo',
    // 2026-09-23: era 'adobe-369131788', deducido por dimensiones cuando el
    // archivo venía renombrado. La clienta aportó el archivo con su id y la
    // comparación de píxeles confirma que es otro. Los ids no se deducen.
    'adobe-361627684',
  ),
  stockCampamentoNoche: s(
    'stock-campamento-noche',
    2500,
    1667,
    'Campamento en el desierto de noche, con faroles encendidos alrededor de una hoguera',
    'adobe-187489153',
  ),
  stockEssaouiraBarcas: s(
    'stock-essaouira-barcas',
    2500,
    1669,
    'Barcas de pesca de madera varadas frente a la puerta de piedra del puerto de Essaouira',
    'adobe-124166235',
  ),
  stockColinasDoradas: s(
    'stock-colinas-doradas',
    2500,
    1240,
    'Colinas de tierra dorada extendidas hasta una cordillera lejana, con luz baja',
    'adobe-568887277',
  ),
  stockKasbahValle: s(
    'stock-kasbah-valle',
    2500,
    1406,
    'Kasbah de adobe sobre un valle cultivado, con las montañas secas al fondo',
    'adobe-326394681',
  ),

  /* --- Reserva publicada (2026-09-23, tarde) -------------------------------
     Encargo de la clienta: publicarlas ya e identificar los ids después. Las
     que llevan 'adobe-pendiente' están a la espera de su id; el marcador es
     deliberado y rastreable con una búsqueda, y NO un id inventado. */

  stockKasbahPanoramica: s(
    'stock-kasbah-panoramica',
    2500,
    857,
    'Kasbah de adobe escalonada sobre un palmeral, vista panorámica a última hora del día',
    'adobe-pendiente',
  ),
  stockTintesFez: s(
    'stock-tintes-fez',
    2500,
    1395,
    'Un hombre trabaja entre las cubas de tinte de una curtiduría, vistas desde arriba',
    'adobe-pendiente',
  ),
  stockTintesCubas: s(
    'stock-tintes-cubas',
    2500,
    1551,
    'Cubas de tinte de colores apagados alineadas en una curtiduría, vistas desde arriba',
    'adobe-1974350951',
  ),
  stockEspecias: s(
    'stock-especias',
    2500,
    1667,
    'Conos de especias molidas y cestas de flores secas en un puesto de mercado',
    'adobe-271850256',
  ),
  stockRiadInterior: s(
    'stock-riad-interior',
    2500,
    1395,
    'Interior de un riad con celosía de madera, una fuente baja y un ramo sobre una mesa',
    'adobe-pendiente',
  ),
  stockRiadMesa: s(
    'stock-riad-mesa',
    2500,
    1364,
    'Patio de riad visto desde arriba, con una mesa larga puesta entre plantas',
    'adobe-2191218784',
  ),
  stockRiadPatio: s(
    'stock-riad-patio',
    2500,
    1395,
    'Patio de riad con arcadas, suelo de azulejo y flores, con la luz baja de la tarde',
    'adobe-pendiente',
  ),
  stockPuebloAtlas: s(
    'stock-pueblo-atlas',
    2500,
    1395,
    'Pueblo de casas de adobe encajado en un valle del Atlas, visto desde lo alto',
    'adobe-pendiente',
  ),
  /* --- Tercera tanda (2026-09-25) ---------------------------------------- */

  essaouiraMurallasMar: f(
    'essaouira-murallas-mar',
    1600,
    1200,
    'Las murallas blancas de Essaouira desde la escollera, con el oleaje entrando entre las rocas',
  ),
  /* Es la fotografía de un cuadro, no un paisaje: el autor del mapa pintado
     conserva sus derechos. Va por encargo expreso de la clienta. */
  mapaNomada: f(
    'mapa-nomada',
    2500,
    1738,
    'Mapa pintado a mano de la región del Drâa, con las pistas del desierto y los oasis señalados',
  ),
  miradorHamada: f(
    'mirador-hamada',
    1200,
    1600,
    'Una persona en lo alto de un cerro de piedra, con los brazos en alto sobre la llanura del desierto',
  ),
  /* Saturación de origen 191 (el rango del catálogo es 82-120). Diez pasadas
     de normalización la dejan en 136: sigue siendo la más encendida del
     catálogo. Entra por encargo de la clienta. */
  stockDunasPanoramica: s(
    'stock-dunas-panoramica',
    2500,
    1063,
    'Cordón de dunas anaranjadas encadenadas hasta el horizonte, con la luz baja del atardecer',
    'adobe-pendiente',
  ),

  /* Encargo de la clienta (2026-09-24). Venía marcada como descartada por
     aspecto HDR (cielo y agua "de postal"); se corrige con gamma 1.22, que le
     devuelve densidad, y un punto de color. Ver el informe, apartado 11. */
  stockEssaouiraPanoramica: s(
    'stock-essaouira-panoramica',
    2500,
    1352,
    'La muralla y el puerto de Essaouira vistos desde lo alto, con el oleaje entrando en la bahía',
    'adobe-266702188',
  ),
  stockFezPuerta: s(
    'stock-fez-puerta',
    2500,
    1077,
    'Puerta monumental de azulejo con un minarete enmarcado en su arco',
    'adobe-658652942',
  ),
}

/**
 * Vídeo. Mismo criterio de origen que las fotos.
 *
 * Los dos clips son de banco: se sirven comprimidos a H.264 (ver
 * public/video/) y siempre en silencio y en bucle. `poster` es el fotograma
 * que se pinta mientras el vídeo carga y el que se queda fijo si el navegador
 * no reproduce o el visitante pide menos movimiento.
 */
export const VIDEOS = {
  heroHoguera: {
    id: 'hero-hoguera',
    ancho: 1920,
    alto: 1080,
    origen: 'stock',
    fuente: 'adobe-home-mov',
    alt: 'Primer plano de una hoguera de noche con teteras de metal calentándose entre las brasas',
  },
  pistaHamada: {
    id: 'pista-hamada',
    ancho: 1600,
    alto: 900,
    origen: 'stock',
    fuente: 'adobe-117114019',
    alt: 'Pista de tierra del desierto que se pierde hacia el horizonte, vista desde un vehículo en marcha',
  },
}

/**
 * Traducciones del `alt` al inglés y al francés, por `id` de foto/vídeo.
 *
 * `FOTOS`/`VIDEOS` no se duplican por idioma: los tres `contenido.<lang>.js`
 * y `rutas.<lang>.js` importan el mismo catálogo y referencian los mismos
 * objetos (mismas dimensiones, mismo origen, mismo `fuente`). Solo el `alt`
 * cambia con el idioma, así que vive en esta tabla aparte, no en `FOTOS`.
 *
 * Es descripción de lo que se ve, no copy de marca: no necesita el registro
 * aspiracional del resto del sitio, pero sí respeta la misma regla dura que
 * el español — el `alt` de una foto de stock nunca dice "our camp"/"notre
 * campement" ni nombra a Xènia o Abdoul.
 */
const ALT_TRADUCIDO = {
  'xenia-abdoul-atardecer': {
    en: 'Xènia and Abdoul sitting together on a rug on a desert hill, smiling at sunset',
    fr: 'Xènia et Abdoul assis ensemble sur un tapis, sur une colline du désert, souriant au coucher du soleil',
  },
  'te-patio-puerta-azul': {
    en: 'Four people sitting on the ground sharing tea in front of a blue door and hollyhocks',
    fr: 'Quatre personnes assises par terre, partageant un thé devant une porte bleue et des roses trémières',
  },
  'campamento-alfombras': {
    en: 'Desert camp with tents arranged in a semicircle, rugs on the ground and a group eating in the middle',
    fr: 'Campement dans le désert avec des tentes en demi-cercle, des tapis au sol et un groupe qui mange au centre',
  },
  'campamento-hora-azul': {
    en: 'Camp among the dunes at blue hour, with lit lanterns marking the path and a campfire',
    fr: "Campement entre les dunes à l'heure bleue, avec des lanternes allumées balisant le chemin et un feu de camp",
  },
  'campamento-jaimas': {
    en: 'Three white tents at the foot of a dune, with low mattresses, rugs and a lit lantern',
    fr: "Trois tentes blanches au pied d'une dune, avec des matelas bas, des tapis et une lanterne allumée",
  },
  'essaouira-murallas': {
    en: 'The walls and white houses of Essaouira seen from the sea, with waves breaking on the rocks',
    fr: 'Les remparts et les maisons blanches d’Essaouira vus depuis la mer, avec les vagues se brisant sur les rochers',
  },
  'essaouira-puerto-atardecer': {
    en: 'Sunset over the beach at Essaouira, with the harbor boats silhouetted against the sun',
    fr: "Coucher de soleil sur la plage d'Essaouira, avec les bateaux du port se découpant contre le soleil",
  },
  'playa-sidi-kaouki': {
    en: 'A very long Atlantic beach with straw parasols and a few people walking along the shore',
    fr: 'Une très longue plage atlantique avec des parasols en paille et quelques personnes marchant le long du rivage',
  },
  'dunas-chigaga': {
    en: 'Chains of ochre sand dunes stretching to the horizon under a clear blue sky',
    fr: 'Des dunes de sable ocre enchaînées jusqu’à l’horizon sous un ciel bleu limpide',
  },
  'dunas-erg-chebbi': {
    en: 'Large orange dunes with rippled sand in the foreground and scattered scrub',
    fr: 'De grandes dunes orangées avec du sable ondulé au premier plan et une végétation éparse',
  },
  '4x4-hacia-las-dunas': {
    en: 'A white 4x4 kicking up dust on a stony track, with a line of dunes in the background',
    fr: 'Un 4x4 blanc soulevant de la poussière sur une piste caillouteuse, avec un cordon de dunes en arrière-plan',
  },
  'carretera-hamada': {
    en: 'A lone road winding across a stony plain until it disappears into the horizon',
    fr: 'Une route solitaire serpentant à travers une plaine caillouteuse jusqu’à se perdre à l’horizon',
  },
  'ait-ben-haddou': {
    en: 'The kasbah of Aït Ben Haddou, its mud-brick houses stepping up to the granary at the top',
    fr: "La kasbah d'Aït Ben Haddou, avec ses maisons en pisé étagées jusqu'au grenier tout en haut",
  },
  'ait-ben-haddou-atardecer': {
    en: 'Aït Ben Haddou at sunset, its mud-brick walls glowing and the sky streaked with pink',
    fr: 'Aït Ben Haddou au coucher du soleil, le pisé embrasé et le ciel strié de rose',
  },
  'ait-ben-haddou-amanecer': {
    en: 'Aït Ben Haddou backlit at dawn, with an orange sky over the plateau',
    fr: 'Aït Ben Haddou à contre-jour au lever du jour, avec un ciel orangé au-dessus du plateau',
  },
  'ait-ben-haddou-panoramica': {
    en: 'Panoramic view of Aït Ben Haddou surrounded by palm trees and orchards',
    fr: 'Vue panoramique d’Aït Ben Haddou entourée de palmiers et de jardins cultivés',
  },
  'oasis-fint': {
    en: 'The Fint oasis: a strip of palm trees and orchards following the river between bare mountains',
    fr: "L'oasis de Fint : une bande de palmiers et de jardins suivant la rivière entre des montagnes dénudées",
  },
  'palmeral-montana': {
    en: 'A vast palm grove spread at the foot of a rocky mountain, with mud-brick houses in the foreground',
    fr: "Une immense palmeraie étendue au pied d'une montagne rocheuse, avec des maisons en pisé au premier plan",
  },
  'kasbah-valle-draa': {
    en: 'A red mud-brick kasbah above a palm grove, with the mountainside behind it',
    fr: 'Une kasbah en pisé rouge dominant une palmeraie, avec le flanc de la montagne en arrière-plan',
  },
  'skoura-kasbah-palmeral': {
    en: 'A kasbah rising above a palm grove heavy with dates',
    fr: 'Une kasbah émergeant d’une palmeraie chargée de dattes',
  },
  'marrakech-jemaa-atardecer': {
    en: 'Jemaa el-Fna square in Marrakech, full of people and stalls at sunset, seen from a terrace',
    fr: "La place Jemaa el-Fna à Marrakech, pleine de monde et d'échoppes au coucher du soleil, vue depuis une terrasse",
  },
  'marrakech-terrazas-atlas': {
    en: 'The pink rooftops of the Marrakech medina, with the snow-capped Atlas mountains behind',
    fr: 'Les toits-terrasses roses de la médina de Marrakech, avec la chaîne de l’Atlas enneigée en arrière-plan',
  },
  'riad-patio-noche': {
    en: 'A riad courtyard at night, with a pool, lit lanterns and wooden lattice screens',
    fr: 'Un patio de riad de nuit, avec une piscine, des lanternes allumées et des moucharabiehs en bois',
  },
  'riad-patio-verde': {
    en: 'A riad courtyard with a green-tiled pool, plants and white carved plaster arches',
    fr: 'Un patio de riad avec une piscine carrelée de vert, des plantes et des arcs blancs en plâtre sculpté',
  },
  'riad-patio-naranjos': {
    en: 'A riad courtyard with orange and lemon trees around a pool and a tea table',
    fr: 'Un patio de riad avec des orangers et des citronniers autour d’une piscine et d’une table à thé',
  },
  'valle-atlas-nieve': {
    en: 'A green Atlas valley with a village of reddish houses and snow-capped peaks behind',
    fr: 'Une vallée verte de l’Atlas avec un village de maisons rougeâtres et des sommets enneigés en arrière-plan',
  },
  'valle-ouirgane': {
    en: 'An Atlas valley with cultivated slopes, a small village and snow-capped peaks behind',
    fr: 'Une vallée de l’Atlas avec des versants cultivés, un petit village et des sommets enneigés en arrière-plan',
  },
  'pueblo-atlas-nieve': {
    en: 'A Berber village of colorful houses perched on a hillside, below snow-covered mountains',
    fr: 'Un village berbère aux maisons colorées accroché à flanc de coteau, sous des montagnes enneigées',
  },
  'ourika-montanas': {
    en: 'An Atlas village surrounded by trees, with a large mountain silhouetted against the clouds',
    fr: 'Un village de l’Atlas entouré d’arbres, avec une grande montagne se découpant contre les nuages',
  },
  'taroudant-murallas': {
    en: 'The mud-brick walls of Taroudant with a row of palm trees in front',
    fr: 'Les remparts en pisé de Taroudant avec une rangée de palmiers devant',
  },
  'gargantas-dades': {
    en: 'The zigzagging road through the Dades gorges, descending between walls of red rock',
    fr: 'La route en lacets des gorges du Dadès, descendant entre des parois de roche rouge',
  },
  'dades-curvas': {
    en: 'A close-up of the hairpin bends on the Dades road, beside the river',
    fr: 'Un gros plan sur les virages en épingle de la route du Dadès, au bord de la rivière',
  },
  'fez-medina': {
    en: 'The Fez medina spreading up the hillside, with green minarets among the rooftops',
    fr: 'La médina de Fès s’étendant jusqu’à la colline, avec des minarets verts parmi les toits',
  },
  'fez-curtidurias': {
    en: 'The Fez tanneries seen from above, with the dye vats and hides drying',
    fr: 'Les tanneries de Fès vues d’en haut, avec les cuves de teinture et les peaux en train de sécher',
  },
  casablanca: {
    en: 'Casablanca from the air, with the minaret of the Hassan II mosque beside the Atlantic',
    fr: 'Casablanca vue du ciel, avec le minaret de la mosquée Hassan II au bord de l’Atlantique',
  },
  'te-familia-oasis': {
    en: 'A man and three girls sitting on rugs in a mud-brick house, with the teapot and glasses poured',
    fr: 'Un homme et trois fillettes assis sur des tapis dans une maison en pisé, avec la théière et les verres servis',
  },
  'campamento-dunas-dron': {
    en: 'Aerial view of a camp of white tents in a clearing among the dunes, with the campfire lit at dusk',
    fr: 'Vue aérienne d’un campement de tentes blanches dans une clairière entre les dunes, avec le feu de camp allumé au crépuscule',
  },
  'familia-duna-atardecer': {
    en: 'Two adults and two young girls sitting on top of a dune, watching the sunset',
    fr: 'Deux adultes et deux petites filles assis au sommet d’une dune, regardant le coucher du soleil',
  },
  'jaimas-negras-dunas': {
    en: 'Dark canvas tents with blue doors at the foot of a large dune, in the late afternoon',
    fr: 'Des tentes en toile sombre aux portes bleues au pied d’une grande dune, en fin d’après-midi',
  },
  'retrato-dunas-panuelo': {
    en: 'A woman with a headscarf looks out over the dunes, with the low light of sunset behind her',
    fr: 'Une femme avec un foulard sur la tête regarde vers les dunes, avec la lumière basse du coucher de soleil derrière elle',
  },
  'mesa-para-dos-dunas': {
    en: 'Two people sitting at a small table on the sand, seen from behind, facing the dunes',
    fr: 'Deux personnes assises à une petite table sur le sable, vues de dos, face aux dunes',
  },
  'essaouira-skala-barcas': {
    en: 'The Skala of the Essaouira harbor with blue fishing boats moored in front and gulls overhead',
    fr: 'La Skala du port d’Essaouira avec des barques de pêche bleues amarrées devant et des mouettes dans les airs',
  },
  'hoguera-noche': {
    en: 'A person in a turban stokes a campfire at night, sparks rising into the darkness',
    fr: 'Une personne en turban attise un feu de camp la nuit, des étincelles montant dans l’obscurité',
  },
  'te-sobre-la-duna': {
    en: 'A table with a teapot and glasses set on rugs and cushions on the sand, the sun setting among the dunes',
    fr: 'Une table avec théière et verres dressée sur des tapis et des coussins dans le sable, le soleil se couchant entre les dunes',
  },
  'essaouira-puerta-pinturas': {
    en: 'A blue door and carved archway of a workshop in Essaouira, with paintings leaning against the street wall',
    fr: 'Une porte bleue et une arche sculptée d’un atelier d’Essaouira, avec des tableaux appuyés contre le mur de la rue',
  },
  'equipo-te-jaima': {
    en: 'Three men in turbans, smiling, beside a table with teapots, tea glasses and freshly baked bread',
    fr: 'Trois hommes en turban, souriants, près d’une table avec des théières, des verres à thé et du pain tout juste cuit',
  },
  '4x4-llanura-sur': {
    en: 'A person leaning out of the open door of a white 4x4 parked on a plain in the south',
    fr: 'Une personne penchée à la porte ouverte d’un 4x4 blanc arrêté sur une plaine du sud',
  },
  'abdoul-y-xenia': {
    en: 'Two people standing together in front of a large wooden door with a carved brick frame',
    fr: 'Deux personnes debout, ensemble, devant une grande porte en bois encadrée de briques sculptées',
  },
  'marrakech-koutoubia': {
    en: 'The Koutoubia minaret in Marrakech seen from below, with a palm tree in the foreground',
    fr: 'Le minaret de la Koutoubia à Marrakech vu d’en bas, avec un palmier au premier plan',
  },
  'equipo-vehiculos': {
    en: 'The Sahara Bless Travel team, in traditional dress, beside the vehicles in the desert',
    fr: 'L’équipe de Sahara Bless Travel, en tenue traditionnelle, près des véhicules dans le désert',
  },
  'stock-duna-amanecer': {
    en: 'Sahara dunes at dawn, with a small figure walking along the ridge',
    fr: 'Dunes du Sahara à l’aube, avec une petite silhouette marchant sur la crête',
  },
  'stock-te-servido': {
    en: 'A hand pours tea from a metal teapot onto a tray, with the sea in the background',
    fr: 'Une main verse du thé d’une théière en métal sur un plateau, avec la mer en arrière-plan',
  },
  'stock-campamento-noche': {
    en: 'A desert camp at night, with lit lanterns around a campfire',
    fr: 'Un campement dans le désert de nuit, avec des lanternes allumées autour d’un feu de camp',
  },
  'stock-essaouira-barcas': {
    en: 'Wooden fishing boats beached in front of the stone gate of the Essaouira harbor',
    fr: 'Des barques de pêche en bois échouées devant la porte de pierre du port d’Essaouira',
  },
  'stock-colinas-doradas': {
    en: 'Golden earthen hills stretching toward a distant mountain range, in low light',
    fr: 'Des collines de terre dorée s’étendant jusqu’à une chaîne de montagnes lointaine, sous une lumière rasante',
  },
  'stock-kasbah-valle': {
    en: 'A mud-brick kasbah above a cultivated valley, with dry mountains in the background',
    fr: 'Une kasbah en pisé au-dessus d’une vallée cultivée, avec des montagnes arides en arrière-plan',
  },
  'stock-kasbah-panoramica': {
    en: 'A stepped mud-brick kasbah above a palm grove, panoramic view in the last light of day',
    fr: 'Une kasbah en pisé étagée au-dessus d’une palmeraie, vue panoramique à la fin du jour',
  },
  'stock-tintes-fez': {
    en: 'A man works among the dye vats of a tannery, seen from above',
    fr: 'Un homme travaille parmi les cuves de teinture d’une tannerie, vues d’en haut',
  },
  'stock-tintes-cubas': {
    en: 'Dye vats in muted colors lined up in a tannery, seen from above',
    fr: 'Des cuves de teinture aux couleurs sourdes alignées dans une tannerie, vues d’en haut',
  },
  'stock-especias': {
    en: 'Cones of ground spices and baskets of dried flowers at a market stall',
    fr: 'Des cônes d’épices moulues et des paniers de fleurs séchées sur un étal de marché',
  },
  'stock-riad-interior': {
    en: 'The interior of a riad with a wooden lattice screen, a low fountain and a bouquet on a table',
    fr: 'L’intérieur d’un riad avec un moucharabieh en bois, une fontaine basse et un bouquet sur une table',
  },
  'stock-riad-mesa': {
    en: 'A riad courtyard seen from above, with a long table set among plants',
    fr: 'Un patio de riad vu d’en haut, avec une longue table dressée parmi les plantes',
  },
  'stock-riad-patio': {
    en: 'A riad courtyard with arcades, tiled floor and flowers, in the low light of the afternoon',
    fr: 'Un patio de riad avec des arcades, un sol carrelé et des fleurs, dans la lumière basse de l’après-midi',
  },
  'stock-pueblo-atlas': {
    en: 'A village of mud-brick houses tucked into an Atlas valley, seen from above',
    fr: 'Un village de maisons en pisé niché dans une vallée de l’Atlas, vu d’en haut',
  },
  'essaouira-murallas-mar': {
    en: 'The white walls of Essaouira from the breakwater, with waves surging between the rocks',
    fr: 'Les remparts blancs d’Essaouira depuis la jetée, avec les vagues s’engouffrant entre les rochers',
  },
  'mapa-nomada': {
    en: 'A hand-painted map of the Drâa region, with the desert tracks and oases marked',
    fr: 'Une carte peinte à la main de la région du Drâa, avec les pistes du désert et les oasis indiqués',
  },
  'mirador-hamada': {
    en: 'A person atop a rocky hill, arms raised over the desert plain',
    fr: 'Une personne au sommet d’une colline rocheuse, les bras levés au-dessus de la plaine désertique',
  },
  'stock-dunas-panoramica': {
    en: 'A chain of orange dunes stretching to the horizon, in the low light of sunset',
    fr: 'Un cordon de dunes orangées enchaînées jusqu’à l’horizon, dans la lumière basse du coucher de soleil',
  },
  'stock-essaouira-panoramica': {
    en: 'The wall and harbor of Essaouira seen from above, with waves rolling into the bay',
    fr: 'Le rempart et le port d’Essaouira vus d’en haut, avec les vagues entrant dans la baie',
  },
  'stock-fez-puerta': {
    en: 'A monumental tiled gate with a minaret framed in its archway',
    fr: 'Une porte monumentale en zellige avec un minaret encadré dans son arche',
  },
  'hero-hoguera': {
    en: 'Close-up of a campfire at night with metal teapots warming among the embers',
    fr: 'Gros plan sur un feu de camp la nuit, avec des théières en métal qui chauffent parmi les braises',
  },
  'pista-hamada': {
    en: 'A dirt track through the desert disappearing toward the horizon, seen from a moving vehicle',
    fr: 'Une piste de terre du désert se perdant vers l’horizon, vue depuis un véhicule en marche',
  },
}

/**
 * `alt` de una foto o vídeo en el idioma actual. `es` no está en la tabla:
 * `foto.alt` YA es el español (es la versión de referencia, ver cabecera del
 * fichero). Si un id no tiene traducción todavía, cae al español antes que
 * dejar el atributo vacío.
 */
export const altFoto = (foto, idioma) => {
  if (!foto) return ''
  if (idioma === 'es') return foto.alt
  return ALT_TRADUCIDO[foto.id]?.[idioma] ?? foto.alt
}

/** Rutas de los dos archivos de un vídeo. */
export const videoSrc = (v) => `/video/${v.id}.mp4`
export const videoPoster = (v) => `/video/${v.id}-poster.jpg`

/** Ruta al WebP de un ancho concreto. */
export const src = (foto, ancho) => `/fotos/${foto.id}-${ancho}.webp`

/** srcSet de los dos anchos disponibles. */
export const srcSet = (foto) => `${src(foto, 800)} 800w, ${src(foto, 1600)} 1600w`
