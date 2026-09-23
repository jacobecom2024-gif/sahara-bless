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

/** Rutas de los dos archivos de un vídeo. */
export const videoSrc = (v) => `/video/${v.id}.mp4`
export const videoPoster = (v) => `/video/${v.id}-poster.jpg`

/** Ruta al WebP de un ancho concreto. */
export const src = (foto, ancho) => `/fotos/${foto.id}-${ancho}.webp`

/** srcSet de los dos anchos disponibles. */
export const srcSet = (foto) => `${src(foto, 800)} 800w, ${src(foto, 1600)} 1600w`
