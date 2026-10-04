import { FOTOS } from './fotos'

/**
 * Las cinco rutas, tal como aparecen en las fichas de la clienta. Los días
 * conservan las agrupaciones de los documentos (p. ej. "Días 1-2"). Las rutas
 * son puntos de partida: el itinerario es orientativo y se adapta al viajero.
 */

export const RUTAS = [
  {
    slug: 'the-desert-journey',
    nombre: 'The Desert Journey',
    dias: '8 días',
    lugares: 'Marrakech · Atlas · Aït Ben Haddou · Oasis de Fint · Erg Chigaga',
    titular: ['El sur de Marruecos.', 'El Sahara como destino.'],
    tarjeta: 'Marruecos esencial, con el Sahara como destino.',
    foto: FOTOS.dunasChigaga,
    entradilla: [
      'Una ruta para descubrir algunos de los paisajes que hacen especial al sur de Marruecos y terminar el viaje donde todo se vuelve silencio: Erg Chigaga.',
      'Marrakech, el Alto Atlas, kasbahs, oasis y caminos del sur antes de adentrarnos en el Sahara durante dos noches. Una buena elección para quienes quieren conocer Marruecos y vivir el desierto en un mismo viaje, sin intentar verlo todo.',
    ],
    sahara: false,
    itinerario: [
      {
        etiqueta: 'Día 1 · Marrakech',
        titulo: 'Llegar y empezar a mirar',
        texto: [
          'Llegada a Marrakech y bienvenida. Un primer día para descansar, adaptarse al ritmo del país y comenzar a descubrir la ciudad.',
          'Medina, zocos, un primer té y tiempo para simplemente estar. Noche en Marrakech.',
        ],
        foto: FOTOS.marrakechJemaa,
      },
      {
        etiqueta: 'Día 2 · Marrakech',
        titulo: 'La ciudad roja',
        texto: [
          'Un día para conocer Marrakech a vuestro ritmo. Podemos descubrir la medina, sus mercados y artesanos, o reservar tiempo para un hammam, gastronomía o simplemente pasear.',
        ],
        foto: FOTOS.marrakechTerrazas,
      },
      {
        etiqueta: 'Día 3 · Marrakech → Aït Ben Haddou',
        titulo: 'Cruzar el Atlas',
        texto: [
          'Dejamos atrás Marrakech y cruzamos el Alto Atlas. El paisaje cambia poco a poco hasta llegar al sur.',
          'Visitaremos Aït Ben Haddou, una de las kasbahs más conocidas de Marruecos. Noche en Aït Ben Haddou.',
        ],
        foto: FOTOS.aitBenHaddouAtardecer,
      },
      {
        etiqueta: 'Día 4 · Aït Ben Haddou → Erg Chigaga',
        titulo: 'Hacia el Sahara',
        texto: [
          'Continuamos hacia el sur entre kasbahs, pueblos de adobe, palmerales y paisajes cada vez más áridos.',
          'Después de llegar a M’Hamid, dejamos el asfalto y subimos a los 4x4 hacia Erg Chigaga. El horizonte se abre. Primera noche en Erg Chigaga.',
        ],
        foto: FOTOS.cuatroPorCuatro,
      },
      {
        etiqueta: 'Día 5 · Erg Chigaga',
        titulo: 'Un día sin prisa',
        texto: [
          'Hoy no hay que llegar a ningún sitio. Amanecer entre las dunas, desayuno, té, caminar por la arena, descansar o contemplar el paisaje.',
          'Cuando llega la noche: cena, fuego, estrellas y silencio. Segunda noche en Erg Chigaga.',
        ],
        foto: FOTOS.dunasChigaga,
      },
      {
        etiqueta: 'Día 6 · Erg Chigaga → Oasis de Fint',
        titulo: 'De las dunas al oasis',
        texto: [
          'Dejamos atrás el desierto y comenzamos el regreso hacia el norte. La arena da paso a los oasis, los palmerales y las kasbahs.',
          'Llegamos al Oasis de Fint, un pequeño valle escondido entre montañas. Noche en la zona del Oasis de Fint / Ouarzazate.',
        ],
        foto: FOTOS.oasisFint,
      },
      {
        etiqueta: 'Día 7 · Oasis de Fint → Marrakech',
        titulo: 'El último camino',
        texto: [
          'Por la mañana podemos disfrutar todavía del oasis antes de emprender el camino hacia Marrakech.',
          'Volvemos a cruzar el Alto Atlas mientras el paisaje cambia por última vez. Noche en Marrakech o alrededores.',
        ],
        foto: FOTOS.valleAtlasNieve,
      },
      {
        etiqueta: 'Día 8 · Hasta pronto',
        titulo: 'Hasta pronto',
        texto: [
          'Desayuno y traslado al aeropuerto. O, si vuestros vuelos lo permiten, podemos adaptar el final del viaje.',
        ],
      },
    ],
  },
  {
    slug: 'atlantic-to-sahara',
    nombre: 'Atlantic to Sahara',
    dias: '11 días',
    lugares: 'Marrakech · Essaouira · Taroudant · Erg Chigaga · Oasis Fint · Valle del Drâa',
    titular: ['Del Atlántico a las dunas del Sahara.'],
    tarjeta: 'Dos Marruecos muy diferentes en un mismo viaje: costa, cultura y desierto.',
    foto: FOTOS.essaouiraMurallas,
    entradilla: [
      'Un viaje que atraviesa Marruecos de oeste a sur. Dos noches en Marrakech, dos frente al Atlántico, el sur, las montañas y el Valle del Drâa, y dos noches entre las dunas de Erg Chigaga.',
      'Un viaje para quienes quieren conocer Marruecos a través de sus contrastes, con tiempo para descubrir los oasis y paisajes que encontramos de camino.',
    ],
    sahara: true,
    itinerario: [
      {
        etiqueta: 'Días 1-2 · Marrakech',
        titulo: 'Comenzamos en Marrakech',
        texto: [
          'Dos noches para entrar en el ritmo del viaje, perderse por sus calles, disfrutar de su gastronomía y dejar que Marruecos empiece a aparecer poco a poco.',
        ],
        foto: FOTOS.marrakechJemaa,
      },
      {
        etiqueta: 'Días 3-4 · Essaouira',
        titulo: 'Otro Marruecos: el Atlántico',
        texto: [
          'Dejamos Marrakech atrás y ponemos rumbo a la costa. Essaouira es otro Marruecos: océano, viento, puerto, pescado fresco, calles blancas y un ritmo mucho más pausado.',
          'Dos noches para disfrutar de la ciudad y del mar antes de continuar hacia el sur.',
        ],
        foto: FOTOS.essaouiraMurallas,
      },
      {
        etiqueta: 'Día 5 · Essaouira → Taroudant',
        titulo: 'Empieza el cambio',
        texto: [
          'Dejamos el océano y avanzamos hacia el interior. Llegamos a Taroudant, una ciudad rodeada de murallas y conocida por su ambiente más local.',
        ],
        foto: FOTOS.taroudantMurallas,
      },
      {
        etiqueta: 'Días 6-7 · Erg Chigaga',
        titulo: 'Dos noches para vivir el Sahara',
        texto: [
          'Seguimos hacia el sur hasta las puertas del Sahara y desde allí entramos en 4x4 hacia Erg Chigaga. Las dunas aparecen poco a poco.',
          'No queremos que el desierto sea una parada rápida. Caminar por las dunas, compartir un té, escuchar música saharaui, sentarte alrededor del fuego, mirar las estrellas y despertar rodeado de silencio.',
        ],
        foto: FOTOS.dunasErgChebbi,
      },
      {
        etiqueta: 'Días 8-9 · Oasis Fint, Valle del Drâa y Aït Ben Haddou',
        titulo: 'Del desierto al oasis',
        texto: [
          'Dejamos las dunas y seguimos descubriendo el sur. Dos noches en la zona de Oasis Fint para bajar el ritmo y explorar los paisajes que rodean Ouarzazate.',
          'Visitamos Aït Ben Haddou y nos acercamos al Valle del Drâa, con sus oasis, palmerales y kasbahs.',
        ],
        foto: FOTOS.kasbahValleDraa,
      },
      {
        etiqueta: 'Día 10 · Marrakech o alrededores',
        titulo: 'Última noche',
        texto: [
          'Comenzamos el camino de regreso hacia Marrakech. La última noche puede ser en la ciudad o en sus alrededores, según el horario del vuelo.',
        ],
        foto: FOTOS.marrakechTerrazas,
      },
      {
        etiqueta: 'Día 11 · Regreso',
        titulo: 'Marruecos ya no se siente igual',
        texto: [
          'Desayuno y traslado al aeropuerto. Después de once días, Marruecos ya no se siente igual que cuando llegaste.',
        ],
      },
    ],
  },
  {
    slug: 'the-nomad-route',
    nombre: 'The Nomad Route',
    dias: '10 días',
    lugares: 'Marrakech · Oasis Fint · Valle del Drâa · Erg Chigaga · Aït Ben Haddou',
    titular: ['El sur de Marruecos, desde dentro.'],
    tarjeta: 'Oasis, palmerales, mercados y familias locales antes de entrar en el Sahara.',
    foto: FOTOS.palmeralMontana,
    entradilla: [
      'Hay una forma de conocer Marruecos que no aparece en una lista de lugares. Está en compartir un té con una familia, caminar entre palmerales, entrar en un mercado, conocer una artesanía, escuchar música alrededor del fuego o sentarse a conversar sin mirar el reloj.',
      'The Nomad Route nace para acercarse a ese Marruecos: un viaje por el sur, entre oasis, palmerales, mercados, familias locales y las dunas de Erg Chigaga.',
    ],
    sahara: true,
    itinerario: [
      {
        etiqueta: 'Días 1-2 · Marrakech',
        titulo: 'Primero, nos ubicamos',
        texto: [
          'Llegamos a Marrakech y nos tomamos dos noches para aterrizar, sin empezar corriendo. Tiempo para pasear por la medina, probar sus sabores y entrar en el ritmo de Marruecos.',
        ],
        foto: FOTOS.riadPatioVerde,
      },
      {
        etiqueta: 'Día 3 · Marrakech → Oasis Fint',
        titulo: 'El país empieza a cambiar',
        texto: [
          'Dejamos Marrakech y cruzamos el Atlas hacia el sur. El paisaje se vuelve más árido y aparecen las primeras palmeras, kasbahs y pequeñas comunidades.',
          'Llegamos a Oasis Fint, un pequeño oasis rodeado de roca y vegetación. Noche en Oasis Fint o alrededores.',
        ],
        foto: FOTOS.oasisFint,
      },
      {
        etiqueta: 'Día 4 · Oasis Fint',
        titulo: 'Un día para compartir',
        texto: [
          'Hoy no venimos simplemente a visitar. Venimos a compartir. Hacemos una excursión por el oasis y conocemos a una familia local.',
          'Comemos juntos, compartimos un té, nos acercamos a algunas de sus tradiciones y descubrimos la henna.',
        ],
        foto: FOTOS.teFamiliaOasis,
      },
      {
        etiqueta: 'Día 5 · Valle del Drâa',
        titulo: 'Palmeras, mercado y vida local',
        texto: [
          'Seguimos hacia el Valle del Drâa, un paisaje de grandes palmerales, kasbahs y pueblos que siguen el curso del río.',
          'Visitamos un mercado local y nos acercamos a la vida cotidiana de esta región. Noche en Zagora o alrededores.',
        ],
        foto: FOTOS.kasbahValleDraa,
      },
      {
        etiqueta: 'Días 6-7 · Erg Chigaga',
        titulo: 'Dos noches para vivir el desierto',
        texto: [
          'Desde Zagora continuamos hacia el desierto. Entramos en 4x4, dejamos atrás las últimas señales de la vida urbana y las dunas aparecen.',
          'Hay tiempo para caminar entre las dunas, descansar, compartir un té y conocer algunas de las tradiciones del Sahara: pan bajo la arena, turbantes, henna, música saharaui y fuego.',
        ],
        foto: FOTOS.dunasChigaga,
      },
      {
        etiqueta: 'Día 8 · Erg Chigaga → Aït Ben Haddou',
        titulo: 'De las dunas a las kasbahs',
        texto: [
          'Dejamos atrás el Sahara y comenzamos el camino de regreso. Del desierto pasamos de nuevo a las montañas, los pueblos y las kasbahs.',
          'Llegamos a Aït Ben Haddou, donde pasaremos nuestra última noche en el sur.',
        ],
        foto: FOTOS.aitBenHaddouAmanecer,
      },
      {
        etiqueta: 'Días 9-10 · Aït Ben Haddou → Marrakech',
        titulo: 'Última noche',
        texto: [
          'Cruzamos de nuevo el Atlas y el paisaje cambia una última vez. La última noche la pasamos en Marrakech o en sus alrededores, según el horario del vuelo.',
          'Desayuno y traslado al aeropuerto. Te llevas fotografías, sabores, conversaciones y recuerdos.',
        ],
        foto: FOTOS.aitBenHaddouPanoramica,
      },
    ],
  },
  {
    slug: 'moroccan-soul',
    nombre: 'Moroccan Soul',
    dias: '8 días',
    lugares: 'Marrakech · Essaouira · Ouirgane',
    titular: ['Hay otra forma de viajar por Marruecos.'],
    tarjeta: 'Viajar despacio también es viajar: mar, montaña, gastronomía y tiempo para estar.',
    foto: FOTOS.valleOuirgane,
    entradilla: [
      'Hay un Marruecos que se descubre recorriendo kilómetros. Y hay otro que aparece cuando dejamos de mirar el reloj.',
      'Moroccan Soul es nuestro viaje más pausado: Marrakech, el Atlántico y las montañas del Atlas para disfrutar de la gastronomía, la artesanía, los mercados, el mar y la tranquilidad de los pequeños pueblos. No queremos llenar cada día. Queremos dejar espacio para vivir.',
    ],
    sahara: false,
    itinerario: [
      {
        etiqueta: 'Día 1 · Marrakech',
        titulo: 'Empezamos despacio',
        texto: [
          'Llegada y traslado al riad. Primer paseo por la medina, un té y una cena de bienvenida. Sin necesidad de hacer más.',
        ],
        foto: FOTOS.riadPatioNaranjos,
      },
      {
        etiqueta: 'Día 2 · Marrakech',
        titulo: 'Marrakech a nuestro ritmo',
        texto: [
          'Un día para descubrir la ciudad sin prisas: patrimonio, jardines, zocos y artesanía.',
          'Y tiempo para elegir cómo disfrutarla: un hammam, un spa, un taller, una comida larga o simplemente perderte por sus calles.',
        ],
        foto: FOTOS.marrakechJemaa,
      },
      {
        etiqueta: 'Días 3-4 · Essaouira',
        titulo: 'El océano',
        texto: [
          'Dejamos Marrakech y ponemos rumbo al océano. Llegamos a Essaouira, con su medina, su puerto pesquero, sus galerías y sus artesanos.',
          'Hoy no hay una lista de cosas que hacer. Hay opciones: playa, pescado fresco, Sidi Kaouki, surf, un paseo o simplemente no hacer nada.',
        ],
        foto: FOTOS.essaouiraPuerto,
      },
      {
        etiqueta: 'Día 5 · Essaouira → Ouirgane',
        titulo: 'Hacia las montañas',
        texto: [
          'Dejamos el océano y nos adentramos en el interior. Atravesamos bosques de argán, visitamos una cooperativa y llegamos a Ouirgane: más verde, más tranquilo, otro ritmo.',
        ],
        foto: FOTOS.valleOuirgane,
      },
      {
        etiqueta: 'Día 6 · Ouirgane',
        titulo: 'El Atlas',
        texto: [
          'Caminamos por las montañas, conocemos pueblos bereberes, compartimos un té y descubrimos la gastronomía local. También podemos hacer un taller de cocina.',
        ],
        foto: FOTOS.puebloAtlasNieve,
      },
      {
        etiqueta: 'Día 7 · Ouirgane',
        titulo: 'Simplemente estar',
        texto: [
          'Hoy dejamos espacio: piscina, jardín, hammam, masaje, un paseo o simplemente contemplar las montañas. Una última cena para cerrar el viaje.',
        ],
        foto: FOTOS.riadPatioNoche,
      },
      {
        etiqueta: 'Día 8 · Regreso',
        titulo: 'Terminar con calma',
        texto: [
          'Después del desayuno, traslado al aeropuerto de Marrakech, a aproximadamente una hora de trayecto. Moroccan Soul termina como queremos que terminen los buenos viajes: con calma.',
        ],
      },
    ],
  },
  {
    slug: 'the-imperial-journey',
    nombre: 'The Imperial Journey',
    dias: '12 días',
    lugares: 'Casablanca / Fez · Dades · Sahara · Oasis de Fint · Marrakech',
    titular: ['De las ciudades al corazón del Sahara.'],
    tarjeta: 'Ciudades imperiales, Atlas, kasbahs y desierto en un mismo recorrido.',
    foto: FOTOS.fezMedina,
    entradilla: [
      'Hay un Marruecos de grandes ciudades, medinas y palacios. Y hay otro de montañas, kasbahs, oasis y desierto. The Imperial Journey une ambos mundos.',
      'Fez, Dades, Erg Chigaga, Oasis Fint, Aït Ben Haddou y Marrakech: una primera experiencia completa de Marruecos, diseñada para descubrir el país sin tener que elegir entre cultura, paisaje y Sahara. Con la posibilidad de elegir entre Erg Chigaga y Merzouga.',
    ],
    sahara: true,
    itinerario: [
      {
        etiqueta: 'Día 1 · Casablanca o Marrakech',
        titulo: 'Empezamos donde tenga sentido para ti',
        texto: [
          'Podemos comenzar el viaje en Casablanca o Marrakech, según tus vuelos y la forma en la que quieras recorrer Marruecos. El viaje se adapta a ti, no al revés.',
        ],
        foto: FOTOS.casablanca,
      },
      {
        etiqueta: 'Días 2-3 · Fez',
        titulo: 'El corazón histórico',
        texto: [
          'Llegamos a Fez. Su medina, sus callejuelas, sus artesanos, sus colores y sus oficios tradicionales nos muestran una de las caras más antiguas de Marruecos.',
          'Un día para descubrir y otro para simplemente perderse. En Fez, perderse también forma parte del viaje.',
        ],
        foto: FOTOS.fezCurtidurias,
      },
      {
        etiqueta: 'Día 4 · Fez → Dades',
        titulo: 'Hacia el sur',
        texto: [
          'Dejamos atrás las ciudades. Atravesamos el Atlas y el paisaje comienza a cambiar. Las montañas, los valles y las primeras kasbahs nos anuncian otro Marruecos. Noche en Dades.',
        ],
        foto: FOTOS.gargantasDades,
      },
      {
        etiqueta: 'Días 5-6 · Erg Chigaga',
        titulo: 'Dos noches para vivir el Sahara',
        texto: [
          'Continuamos hacia el sur. Palmerales, oasis, pueblos de adobe y paisajes cada vez más áridos nos acompañan hasta que dejamos atrás el asfalto, entramos en 4x4 y llegamos a Erg Chigaga.',
          'Amanecer entre las dunas, caminar por la arena, compartir un té, pan cocinado bajo la arena, turbantes y henna, música saharaui al caer la noche.',
        ],
        foto: FOTOS.dunasErgChebbi,
      },
      {
        etiqueta: 'Días 7-8 · Oasis Fint y Aït Ben Haddou',
        titulo: 'Del desierto a los oasis',
        texto: [
          'Dejamos las dunas y comenzamos el camino de regreso. El desierto da paso a palmerales, oasis, pueblos y kasbahs.',
          'Llegamos al Oasis Fint, donde podemos caminar, compartir un té y disfrutar de una comida local. Continuamos hacia Aït Ben Haddou, una de las grandes kasbahs del sur.',
        ],
        foto: FOTOS.oasisFint,
      },
      {
        etiqueta: 'Días 9-11 · Marrakech',
        titulo: 'La ciudad roja',
        texto: [
          'Llegamos a Marrakech después de atravesar el sur y el Atlas. Tres noches para disfrutar de la ciudad, volver a la medina, comprar artesanía, descubrir nuevos rincones o simplemente descansar.',
        ],
        foto: FOTOS.marrakechTerrazas,
      },
      {
        etiqueta: 'Día 12 · Hasta pronto, Marruecos',
        titulo: 'Hasta pronto',
        texto: [
          'El viaje puede terminar en Marrakech o Casablanca, según vuestros vuelos. Adaptamos la ruta para que el viaje tenga sentido de principio a fin.',
        ],
        foto: FOTOS.aitBenHaddou,
      },
    ],
  },
]

export const rutaPorSlug = (slug) => RUTAS.find((r) => r.slug === slug)

export const NUESTRO_SAHARA = {
  etiqueta: 'Nuestro Sahara',
  titulo: 'Erg Chigaga es uno de los lugares que mejor explica quiénes somos.',
  texto: [
    'Abdoul nació en el Sahara y vivió allí sus primeros años entre las dunas y las comunidades nómadas. Hoy es propietario de nuestro propio campamento en Erg Chigaga.',
    'Por eso, cuando llevamos aquí a nuestros viajeros, no somos simplemente quienes les llevan al desierto. Estamos llevándolos a un lugar que forma parte de nuestra historia.',
  ],
}
