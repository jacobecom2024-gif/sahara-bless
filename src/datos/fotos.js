/**
 * Catalogo de fotografia.
 *
 * Las 36 fotos salen de los PDF entregados por el cliente y estan curadas una a
 * una: el `alt` describe lo que realmente se ve en la imagen, no lo que la
 * seccion dice. Nada de banco de imagenes (regla del brief).
 *
 * Cada entrada sirve dos WebP (`-800` y `-1600`) generados por
 * scripts/optimizar-fotos.mjs. `prop` es la proporcion real del original y se
 * usa para reservar espacio y no provocar saltos de maquetacion.
 */

const f = (id, ancho, alto, alt) => ({ id, ancho, alto, prop: ancho / alto, alt })

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
}

/** Ruta al WebP de un ancho concreto. */
export const src = (foto, ancho) => `/fotos/${foto.id}-${ancho}.webp`

/** srcSet de los dos anchos disponibles. */
export const srcSet = (foto) => `${src(foto, 800)} 800w, ${src(foto, 1600)} 1600w`
