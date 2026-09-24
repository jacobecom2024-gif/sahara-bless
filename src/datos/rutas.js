import { FOTOS } from './fotos'

/**
 * Las 5 rutas.
 *
 * Base: los PDF del cliente, condensados en la rama `ajuste-de-tono` (2026-09):
 * resúmenes, entradillas y cierres recortados. El texto de cada día
 * (`itinerario[].texto`) se conserva LITERAL, pero ya no va en el scroll
 * principal: la ficha lo muestra en un desplegable bajo el título del día.
 *
 * Donde el indice y la ficha
 * individual se contradecian (duracion, lugares, orden), manda la ficha
 * individual — ver design/02-content-architecture.md, seccion C.3.
 *
 * `itinerario[].etiqueta` respeta el formato de cada ficha: The Desert Journey
 * numera dias sueltos (DIA 1) y las otras cuatro agrupan noches (01-02).
 */

export const RUTAS = [
  {
    slug: 'the-desert-journey',
    nombre: 'The Desert Journey',
    dias: '8 días',
    lugares: 'Marrakech · Atlas · Aït Ben Haddou · Oasis de Fint · Erg Chigaga',
    gancho: 'Marruecos esencial, con el Sahara como destino.',
    resumenTarjeta:
      'Marrakech, el Alto Atlas, kasbahs, oasis y dos noches en Erg Chigaga. Para conocer el desierto y lo que lo rodea.',
    foto: FOTOS.stockDunaAmanecer,
    fotoAlterna: FOTOS.mesaParaDos,
    titular: ['El sur de Marruecos.', 'El Sahara como destino.'],
    entradilla: [
      'Marrakech, el Alto Atlas, kasbahs y oasis antes de terminar donde todo se vuelve silencio: dos noches en Erg Chigaga.',
      'Para conocer Marruecos y vivir el desierto en un mismo viaje, sin intentar verlo todo.',
    ],
    sahara: true,
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
          'Un día para conocer Marrakech a vuestro ritmo. Podemos descubrir la medina, sus mercados y artesanos, visitar algunos de sus lugares más emblemáticos o reservar tiempo para un hammam, gastronomía o simplemente pasear.',
          'Segunda noche en Marrakech.',
        ],
        foto: FOTOS.stockEspecias,
      },
      {
        etiqueta: 'Día 3 · Marrakech → Aït Ben Haddou',
        titulo: 'Cruzar el Atlas',
        texto: [
          'Dejamos atrás Marrakech y cruzamos el Alto Atlas. El paisaje cambia poco a poco hasta llegar al sur.',
          'Visitaremos Aït Ben Haddou, una de las kasbahs más conocidas de Marruecos, y tendremos tiempo para recorrer sus calles y contemplar el paisaje. Noche en Aït Ben Haddou.',
        ],
        foto: FOTOS.stockKasbahPanoramica,
      },
      {
        etiqueta: 'Día 4 · Aït Ben Haddou → Erg Chigaga',
        titulo: 'Hacia el Sahara',
        texto: [
          'Continuamos hacia el sur entre kasbahs, pueblos de adobe, palmerales y paisajes cada vez más áridos.',
          'Después de llegar a M’Hamid, dejamos el asfalto. Subimos a los 4x4 y comenzamos a atravesar las pistas que conducen hacia Erg Chigaga.',
          'El horizonte se abre. Y el viaje cambia de ritmo. Primera noche en Erg Chigaga.',
        ],
        foto: FOTOS.cuatroPorCuatro,
      },
      {
        etiqueta: 'Día 5 · Erg Chigaga',
        titulo: 'Un día sin prisa',
        texto: [
          'Hoy no hay que llegar a ningún sitio. Amanecer entre las dunas, desayuno, té, caminar por la arena, descansar, conocer las tradiciones del Sahara o simplemente contemplar el paisaje.',
          'Podemos preparar pan bajo la arena, compartir un rato con el equipo, disfrutar de henna o descubrir la música saharaui al caer la tarde.',
          'Y cuando llega la noche: cena, fuego, estrellas y silencio. Segunda noche en Erg Chigaga.',
        ],
        foto: FOTOS.mesaParaDos, // T2: el único plano cercano de esta ruta
      },
      {
        etiqueta: 'Día 6 · Erg Chigaga → Oasis de Fint',
        titulo: 'De las dunas al oasis',
        texto: [
          'Dejamos atrás el desierto y comenzamos el regreso hacia el norte. El paisaje vuelve a transformarse: la arena da paso a los oasis, los palmerales y las kasbahs.',
          'Llegamos al Oasis de Fint, un pequeño valle escondido entre montañas. Tiempo para caminar, tomar un té y descansar. Noche en la zona del Oasis de Fint / Ouarzazate.',
        ],
        foto: FOTOS.oasisFint,
      },
      {
        etiqueta: 'Día 7 · Oasis de Fint → Marrakech',
        titulo: 'El último camino',
        texto: [
          'Por la mañana podemos disfrutar todavía del oasis antes de emprender el camino hacia Marrakech. Volvemos a cruzar el Alto Atlas mientras el paisaje cambia por última vez.',
          'Llegada a Marrakech y tiempo para una última cena, un paseo o unas compras. Noche en Marrakech o alrededores.',
        ],
        foto: FOTOS.marrakechTerrazas,
      },
      {
        etiqueta: 'Día 8',
        titulo: 'Hasta pronto',
        texto: [
          'Desayuno y traslado al aeropuerto. O, si vuestros vuelos lo permiten, podemos adaptar el final del viaje.',
        ],
        foto: null,
      },
    ],
    cierre: {
      titulo: 'No es un viaje cerrado',
      texto: [
        'Esta ruta es nuestro punto de partida. Adaptamos alojamientos, ritmo y experiencias, o añadimos días.',
      ],
    },
  },

  {
    slug: 'atlantic-to-sahara',
    nombre: 'Atlantic to Sahara',
    dias: '11 días',
    lugares: 'Marrakech · Essaouira · Taroudant · Erg Chigaga · Oasis Fint · Valle del Drâa',
    gancho: 'Del Atlántico al Sahara.',
    resumenTarjeta:
      'La energía de Essaouira, los paisajes del sur y dos noches en Erg Chigaga. Costa, cultura y desierto, sin correr.',
    foto: FOTOS.cuatroPorCuatro,
    fotoAlterna: FOTOS.stockCampamentoNoche,
    titular: ['Del Atlántico', 'a las dunas del Sahara'],
    entradilla: [
      'Un viaje que cruza Marruecos de oeste a sur: Marrakech, el Atlántico, el Valle del Drâa y dos noches entre las dunas de Erg Chigaga.',
      'Para conocer Marruecos a través de sus contrastes.',
    ],
    sahara: true,
    itinerario: [
      {
        etiqueta: '01–02 · Marrakech',
        titulo: 'Primero, el mar',
        texto: [
          'Comenzamos en Marrakech. Dos noches para entrar en el ritmo del viaje, perderse por sus calles, disfrutar de su gastronomía y dejar que Marruecos empiece a aparecer poco a poco.',
        ],
        foto: FOTOS.marrakechJemaa,
      },
      {
        etiqueta: '03–04 · Essaouira',
        titulo: 'Después, el Atlántico',
        texto: [
          'Dejamos Marrakech atrás y ponemos rumbo a la costa. Essaouira es otro Marruecos: océano, viento, puerto, pescado fresco, calles blancas y un ritmo mucho más pausado.',
          'Dos noches para disfrutar de la ciudad y del mar antes de continuar hacia el sur.',
        ],
        foto: FOTOS.essaouiraPuerta, // T2: la calle de cerca, no solo la postal
      },
      {
        etiqueta: '05 · Essaouira → Taroudant',
        titulo: 'El Marruecos del sur',
        texto: [
          'Comienza el cambio. Dejamos el océano y avanzamos hacia el interior.',
          'El paisaje se transforma y llegamos a Taroudant, una ciudad rodeada de murallas y conocida por su ambiente más local. Una noche para descansar antes de continuar hacia el Sahara.',
        ],
        foto: FOTOS.taroudantMurallas,
      },
      {
        etiqueta: '06–07 · Erg Chigaga',
        titulo: 'Y entonces, el desierto',
        texto: [
          'Seguimos hacia el sur. El paisaje se vuelve cada vez más árido hasta llegar a las puertas del Sahara. Y desde allí entramos en 4x4 hacia Erg Chigaga.',
          'Las dunas aparecen poco a poco. Aquí nos quedamos dos noches.',
        ],
        foto: FOTOS.dunasChigaga,
      },
      {
        etiqueta: 'Dos noches para vivir el Sahara',
        titulo: 'Aquí el tiempo funciona de otra manera',
        texto: [
          'No queremos que el desierto sea una parada rápida dentro del viaje. Queremos que tengas tiempo para estar.',
          'Caminar por las dunas. Compartir un té. Escuchar música saharaui. Sentarte alrededor del fuego. Mirar las estrellas. Y despertar rodeado de silencio.',
        ],
        foto: FOTOS.stockCampamentoNoche, // T2 nocturno, stock
      },
      {
        etiqueta: '08–09 · Oasis Fint · Valle del Drâa · Aït Ben Haddou',
        titulo: 'Del desierto al oasis',
        texto: [
          'Dejamos las dunas y seguimos descubriendo el sur. Dos noches en la zona de Oasis Fint para bajar nuevamente el ritmo y explorar los paisajes que rodean Ouarzazate.',
          'Visitamos Aït Ben Haddou y nos acercamos al Valle del Drâa, con sus oasis, palmerales y kasbahs. Después de las dunas, otro paisaje. Otra forma de entender el sur.',
        ],
        foto: FOTOS.kasbahValleDraa,
      },
      {
        etiqueta: '10 · Marrakech o alrededores',
        titulo: 'Última noche',
        texto: [
          'Comenzamos el camino de regreso hacia Marrakech. La última noche puede ser en la ciudad o en sus alrededores, según el horario del vuelo y el tipo de viaje que quieras hacer.',
          'Una última noche para descansar antes de volver a casa.',
        ],
        foto: FOTOS.stockRiadMesa,
      },
      {
        etiqueta: '11 · Regreso',
        titulo: 'El viaje termina',
        texto: [
          'Desayuno y traslado al aeropuerto.',
          'El viaje termina. Pero después de once días, Marruecos ya no se siente igual que cuando llegaste.',
        ],
        foto: null,
      },
    ],
    cierre: {
      titulo: 'Una ruta que podemos hacer tuya',
      texto: [
        'Esta es nuestra propuesta, pero no tiene por qué ser la tuya. Adaptamos ritmo, alojamientos, experiencias y noches en cada lugar.',
      ],
    },
  },

  {
    slug: 'the-nomad-route',
    nombre: 'The Nomad Route',
    dias: '10 días',
    lugares: 'Marrakech · Oasis Fint · Valle del Drâa · Erg Chigaga · Aït Ben Haddou',
    gancho: 'El sur de Marruecos, desde dentro.',
    resumenTarjeta:
      'Oasis, palmerales, mercados y pequeñas comunidades antes del Sahara. El sur, más allá de sus lugares conocidos.',
    foto: FOTOS.campamentoJaimas,
    fotoAlterna: FOTOS.hogueraNoche,
    titular: ['Más allá', 'de los monumentos'],
    entradilla: [
      'Hay un Marruecos que no aparece en una lista de lugares: un té con una familia, un mercado, música alrededor del fuego.',
      'The Nomad Route va a ese Marruecos: el sur entre oasis, palmerales y las dunas de Erg Chigaga.',
    ],
    sahara: true,
    itinerario: [
      {
        etiqueta: '01–02 · Marrakech',
        titulo: 'Primero, nos ubicamos',
        texto: [
          'Llegamos a Marrakech y nos tomamos dos noches para aterrizar. Sin empezar corriendo.',
          'Tiempo para descubrir la ciudad, pasear por la medina, probar sus sabores y empezar a entrar en el ritmo de Marruecos. Dos noches para llegar de verdad.',
        ],
        foto: FOTOS.stockRiadInterior,
      },
      {
        etiqueta: '03 · Marrakech → Oasis Fint',
        titulo: 'El país empieza a cambiar',
        texto: [
          'Dejamos Marrakech y cruzamos el Atlas hacia el sur. El paisaje se vuelve más árido y aparecen las primeras palmeras, kasbahs y pequeñas comunidades.',
          'Llegamos a Oasis Fint, un pequeño oasis rodeado de roca y vegetación. Aquí comienza otra parte del viaje. Noche en Oasis Fint o alrededores.',
        ],
        foto: FOTOS.oasisFint,
      },
      {
        etiqueta: '04 · Oasis Fint',
        titulo: 'Un día para compartir',
        texto: [
          'Hoy no venimos simplemente a visitar. Venimos a compartir.',
          'Hacemos una excursión por el oasis y conocemos a una familia local. Comemos juntos, compartimos un té y nos acercamos a algunas de sus tradiciones.',
          'También descubrimos la henna y conocemos un poco más de la vida de quienes viven aquí. Segunda noche en Oasis Fint o alrededores.',
        ],
        foto: FOTOS.teFamiliaOasis,
      },
      {
        etiqueta: '05 · Valle del Drâa',
        titulo: 'Palmeras, mercado y vida local',
        texto: [
          'Seguimos hacia el Valle del Drâa. Un paisaje de grandes palmerales, kasbahs y pueblos que siguen el curso del río. Visitamos un mercado local y nos acercamos a la vida cotidiana de esta región.',
          'Aquí el paisaje no es solo bonito. Es la forma de vida de quienes lo habitan. Noche en Zagora o alrededores.',
        ],
        foto: FOTOS.palmeralMontana,
      },
      {
        etiqueta: '06–07 · Erg Chigaga',
        titulo: 'Y entonces, el Sahara',
        texto: [
          'Desde Zagora continuamos hacia el desierto. Entramos en 4x4 y dejamos atrás las últimas señales de la vida urbana.',
          'El paisaje se abre. Las dunas aparecen. Erg Chigaga. Aquí nos quedamos dos noches.',
        ],
        foto: FOTOS.cuatroPorCuatro,
      },
      {
        etiqueta: 'Dos noches para vivir el desierto',
        titulo: 'Aquí no hace falta llenar el tiempo',
        texto: [
          'Hay tiempo para caminar entre las dunas, descansar, compartir un té y conocer algunas de las tradiciones del Sahara.',
          'Pan bajo la arena. Turbantes. Henna. Música saharaui. Fuego. Y un cielo que por la noche parece no terminar nunca.',
        ],
        foto: FOTOS.hogueraNoche, // T2: el fuego, de cerca
      },
      {
        etiqueta: '08 · Erg Chigaga → Aït Ben Haddou',
        titulo: 'De las dunas a las kasbahs',
        texto: [
          'Dejamos atrás el Sahara y comenzamos el camino de regreso. El paisaje vuelve a cambiar: del desierto pasamos de nuevo a las montañas, los pueblos y las kasbahs.',
          'Llegamos a Aït Ben Haddou, donde pasaremos nuestra última noche en el sur.',
        ],
        foto: FOTOS.aitBenHaddouAtardecer,
      },
      {
        etiqueta: '09 · Aït Ben Haddou → Marrakech',
        titulo: 'Última noche',
        texto: [
          'Cruzamos de nuevo el Atlas. El paisaje cambia una última vez antes de acercarnos a Marrakech.',
          'La última noche la pasamos en Marrakech o en sus alrededores, según el horario del vuelo.',
        ],
        foto: FOTOS.marrakechTerrazas,
      },
      {
        etiqueta: '10',
        titulo: 'Hasta pronto',
        texto: [
          'Desayuno y traslado al aeropuerto. Te llevas fotografías, sabores, conversaciones y recuerdos. Pero sobre todo, una mirada diferente al sur de Marruecos.',
        ],
        foto: null,
      },
    ],
    cierre: {
      titulo: 'Para quienes quieren acercarse',
      texto: [
        'Para conocer el sur a través de sus paisajes y de quienes lo habitan.',
        'Con tiempo suficiente para que sucedan encuentros.',
      ],
    },
  },

  {
    slug: 'moroccan-soul',
    nombre: 'Moroccan Soul',
    dias: '8 días',
    lugares: 'Marrakech · Essaouira · Ouirgane',
    gancho: 'Viajar despacio también es viajar.',
    resumenTarjeta:
      'Marrakech, el Atlántico y el Atlas, sin prisa. Para quienes no quieren llenar cada día de actividades.',
    foto: FOTOS.stockEssaouiraPanoramica, // acento atlántico: la ruta vive en la costa
    fotoAlterna: FOTOS.valleOuirgane,
    titular: ['Hay otra forma', 'de viajar por Marruecos'],
    entradilla: [
      'Nuestro viaje más pausado: Marrakech, el Atlántico y las montañas del Atlas, con tiempo para comer bien, pasear y descansar.',
      'No queremos llenar cada día. Queremos dejar espacio para vivir.',
    ],
    sahara: false,
    itinerario: [
      {
        etiqueta: '01 · Marrakech',
        titulo: 'Empezamos despacio',
        texto: [
          'Llegada y traslado al riad. Primer paseo por la medina, un té y una cena de bienvenida.',
          'Sin necesidad de hacer más. El viaje acaba de empezar. Noche en Marrakech.',
        ],
        foto: FOTOS.stockRiadPatio,
      },
      {
        etiqueta: '02 · Marrakech',
        titulo: 'Marrakech a nuestro ritmo',
        texto: [
          'Un día para descubrir la ciudad sin prisas. Patrimonio, jardines, zocos y artesanía.',
          'Y también tiempo para elegir cómo quieres disfrutarla: un hammam, un spa, un taller, una comida larga o simplemente perderte por sus calles. Noche en Marrakech.',
        ],
        foto: FOTOS.marrakechJemaa,
      },
      {
        etiqueta: '03 · Essaouira',
        titulo: 'El Atlántico',
        texto: [
          'Dejamos Marrakech y ponemos rumbo al océano. Llegamos a Essaouira, con su medina, su puerto pesquero, sus galerías y sus artesanos.',
          'Por la tarde, caminamos junto al mar y esperamos el atardecer. Noche en Essaouira.',
        ],
        foto: FOTOS.essaouiraMurallas,
      },
      {
        etiqueta: '04 · Essaouira',
        titulo: 'El tiempo del océano',
        texto: [
          'Hoy no hay una lista de cosas que hacer. Hay opciones.',
          'Playa. Pescado fresco. Sidi Kaouki. Surf. Kitesurf. Un paseo por Essaouira. O simplemente no hacer nada. Segunda noche en Essaouira.',
        ],
        foto: FOTOS.stockEssaouiraBarcas,
      },
      {
        etiqueta: '05 · Essaouira → Ouirgane',
        titulo: 'Hacia las montañas',
        texto: [
          'Dejamos el océano y nos adentramos en el interior. Atravesamos bosques de argán y visitamos una cooperativa antes de continuar hacia las montañas del Atlas.',
          'Llegamos a Ouirgane. Más verde. Más tranquilo. Otro ritmo. Noche en Ouirgane.',
        ],
        foto: FOTOS.valleOuirgane,
      },
      {
        etiqueta: '06 · Ouirgane',
        titulo: 'El Atlas',
        texto: [
          'Un día para descubrir el entorno. Caminamos por las montañas, conocemos pueblos bereberes, compartimos un té y descubrimos la gastronomía local.',
          'También podemos hacer un taller de cocina. Noche en Ouirgane.',
        ],
        foto: FOTOS.stockPuebloAtlas,
      },
      {
        etiqueta: '07 · Ouirgane',
        titulo: 'Simplemente estar',
        texto: [
          'Hoy dejamos espacio. Piscina. Jardín. Hammam. Masaje. Un paseo. O simplemente contemplar las montañas.',
          'Una última cena para cerrar el viaje. Noche en Ouirgane.',
        ],
        foto: FOTOS.riadPatioNaranjos,
      },
      {
        etiqueta: '08 · Regreso',
        titulo: 'Terminar con calma',
        texto: [
          'Después del desayuno, traslado al aeropuerto de Marrakech. Aproximadamente una hora de trayecto.',
          'Moroccan Soul termina como queremos que terminen los buenos viajes: con calma.',
        ],
        foto: null,
      },
    ],
    cierre: {
      titulo: 'Para quienes quieren bajar el ritmo',
      texto: [
        'Para ti si prefieres una comida larga a tres visitas, o un hammam a correr de un monumento a otro.',
      ],
    },
  },

  {
    slug: 'the-imperial-journey',
    nombre: 'The Imperial Journey',
    dias: '12 días',
    lugares: 'Casablanca · Fez · Dades · Erg Chigaga · Oasis Fint · Aït Ben Haddou · Marrakech',
    gancho: 'De las ciudades imperiales al corazón del Sahara.',
    resumenTarjeta:
      'Fez, el Atlas, el sur, el desierto y Marrakech en un mismo viaje. Con Erg Chigaga o Merzouga, a elegir.',
    foto: FOTOS.stockFezPuerta,
    fotoAlterna: FOTOS.stockTintesFez,
    titular: ['De las ciudades', 'al desierto'],
    entradilla: [
      'Grandes ciudades, medinas y palacios. Y también montañas, kasbahs, oasis y desierto.',
      'The Imperial Journey une ambos mundos, sin tener que elegir entre cultura, paisaje y Sahara.',
    ],
    sahara: true,
    itinerario: [
      {
        etiqueta: '01 · Casablanca o Marrakech',
        titulo: 'Empezamos donde tenga sentido para ti',
        texto: [
          'Podemos comenzar el viaje en Casablanca o Marrakech, según tus vuelos y la forma en la que quieras recorrer Marruecos.',
          'Si empezamos en Casablanca, entramos poco a poco en el país antes de dirigirnos hacia Fez. Si prefieres llegar a Marrakech, podemos adaptar el recorrido. El viaje se adapta a ti, no al revés.',
        ],
        foto: FOTOS.casablanca,
      },
      {
        etiqueta: '02–03 · Fez',
        titulo: 'El corazón histórico',
        texto: [
          'Llegamos a Fez. Su medina, sus callejuelas, sus artesanos, sus colores y sus oficios tradicionales nos muestran una de las caras más antiguas de Marruecos.',
          'Un día para descubrir. Y otro para simplemente perderse. Porque en Fez, perderse también forma parte del viaje.',
        ],
        foto: FOTOS.stockTintesFez,
      },
      {
        etiqueta: '04 · Fez → Dades',
        titulo: 'Hacia el sur',
        texto: [
          'Dejamos atrás las ciudades. Atravesamos el Atlas y el paisaje comienza a cambiar.',
          'Las montañas, los valles y las primeras kasbahs nos anuncian que estamos entrando en otro Marruecos. Llegamos a la región de Dades. Noche en Dades.',
        ],
        foto: FOTOS.gargantasDades,
      },
      {
        etiqueta: '05–06 · Erg Chigaga',
        titulo: 'Hacia el Sahara',
        texto: [
          'Continuamos hacia el sur. Palmerales, oasis, pueblos de adobe y paisajes cada vez más áridos nos acompañan durante el camino.',
          'Hasta que dejamos atrás el asfalto. Entramos en 4x4. Y llegamos a Erg Chigaga. Dos noches para dejar que el desierto marque el ritmo.',
        ],
        foto: FOTOS.dunasChigaga,
      },
      {
        etiqueta: 'Dos noches para vivir el Sahara',
        titulo: 'Y tiempo para simplemente estar',
        texto: [
          'Amanecer entre las dunas. Caminar por la arena. Compartir un té. Pan cocinado bajo la arena.',
          'Turbantes y henna. Música saharaui al caer la noche.',
        ],
        foto: FOTOS.teSobreLaDuna, // T2: la mesa servida sobre la arena
      },
      {
        etiqueta: '07–08 · Oasis Fint · Aït Ben Haddou',
        titulo: 'Del desierto a los oasis',
        texto: [
          'Dejamos las dunas y comenzamos el camino de regreso. El paisaje vuelve a transformarse: el desierto da paso a palmerales, oasis, pueblos y kasbahs.',
          'Llegamos al Oasis Fint, donde podemos caminar, compartir un té y disfrutar de una comida local. Continuamos hacia Aït Ben Haddou, una de las grandes kasbahs del sur.',
        ],
        foto: FOTOS.stockKasbahValle,
      },
      {
        etiqueta: '09–11 · Marrakech',
        titulo: 'La ciudad roja',
        texto: [
          'Llegamos a Marrakech después de atravesar el sur y el Atlas. Ahora sí podemos volver a bajar el ritmo.',
          'Tres noches para disfrutar de la ciudad, volver a la medina, comprar artesanía, descubrir nuevos rincones o simplemente descansar. También podemos organizar un hammam, un spa, un taller de cocina o una experiencia gastronómica.',
        ],
        foto: FOTOS.marrakechKoutoubia,
      },
      {
        etiqueta: '12',
        titulo: 'Hasta pronto, Marruecos',
        texto: [
          'El viaje puede terminar en Marrakech o Casablanca, según vuestros vuelos.',
          'Nosotros adaptamos la ruta para que el viaje tenga sentido de principio a fin. Y para que no tengáis que organizar Marruecos alrededor de nuestra ruta.',
        ],
        foto: null,
      },
    ],
    cierre: {
      titulo: 'Para quienes quieren ver Marruecos en su conjunto',
      texto: [
        'Ciudades, cultura, Atlas, kasbahs, oasis y Sahara. Una ruta completa, sin convertir el viaje en una carrera.',
      ],
    },
  },
]

export const rutaPorSlug = (slug) => RUTAS.find((r) => r.slug === slug)

/**
 * Bloque "Nuestro Sahara" de las fichas con desierto. El texto varia levemente
 * entre PDF; se unifica en la version mas completa (Atlantic to Sahara / Nomad).
 */
export const NUESTRO_SAHARA = {
  etiqueta: 'Nuestro Sahara',
  titulo: 'Erg Chigaga no es una parada más',
  texto: [
    'Abdoul nació en el Sahara y tiene su propio campamento en Erg Chigaga.',
    'Aquí no te llevamos a un destino: te llevamos a una parte de nuestra historia.',
  ],
}
