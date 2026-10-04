import { FOTOS } from './fotos'

/**
 * Textos de cada página. Salen de los PDF de la clienta (ver docs/audit-and-design-decisions.md).
 * Ningún dato se inventa: cifras, certificaciones, testimonios y contacto no aparecen aquí si no están en el material.
 */

export const NAV = [
  { texto: 'Inicio', a: '/' },
  { texto: 'Rutas', a: '/rutas' },
  { texto: 'Viajeros', a: '/viajeros' },
  { texto: 'Agencias', a: '/agencias' },
  { texto: 'Nuestra historia', a: '/nuestra-historia' },
  { texto: 'Contacto', a: '/contacto' },
]

export const CTA = {
  viajero: { texto: 'Diseñar mi viaje', a: '/contacto?perfil=viajero' },
  agencia: { texto: 'Soy agencia', a: '/agencias' },
  colaboracion: { texto: 'Hablemos de una colaboración', a: '/contacto?perfil=agencia' },
  videollamada: { texto: 'Agenda una videollamada', a: '/contacto?perfil=agencia' },
  rutas: { texto: 'Ver nuestras rutas', a: '/rutas' },
  historia: { texto: 'Conocer nuestra historia', a: '/nuestra-historia' },
  chigaga: { texto: 'Descubrir Erg Chigaga', a: '/erg-chigaga-o-merzouga' },
  hablemos: { texto: 'Hablar con nosotros', a: '/contacto' },
}

export const INICIO = {
  hero: {
    titulo: 'Marruecos, desde dentro.',
    subtitulo: 'Viajes diseñados por personas que conocen el país, sus caminos y a su gente.',
    foto: FOTOS.campamentoHoraAzul,
    tira: 'Viajes a medida · Grupos privados · Retiros · Experiencias para agencias',
  },
  caminos: {
    agencias: {
      etiqueta: 'Para agencias',
      titulo: ['Un partner local de confianza', 'para diseñar y operar viajes en Marruecos.'],
      texto:
        'Vosotros conocéis a vuestros clientes. Nosotros conocemos el terreno, las personas y la logística necesaria para que el viaje suceda. Trabajamos como una extensión de vuestro equipo.',
      acciones: [
        { texto: 'Conoce cómo trabajamos con agencias', a: '/agencias', variante: 'texto' },
        { texto: 'Agenda una videollamada', a: '/contacto?perfil=agencia', variante: 'primario' },
      ],
    },
    viajeros: {
      etiqueta: 'Para viajeros',
      titulo: ['Marruecos, a vuestra manera.'],
      texto:
        'No tenéis que encajar en un circuito. Diseñamos el viaje alrededor de vosotros, a partir de nuestras rutas o desde cero.',
      acciones: [
        { texto: 'Ver nuestras rutas', a: '/rutas', variante: 'texto' },
        { texto: 'Diseñar mi viaje', a: '/contacto?perfil=viajero', variante: 'primario' },
      ],
    },
  },
  manifiesto: {
    titulo: ['No se trata solo de dónde vas.', 'Sino de cómo lo vives.'],
    texto: [
      'Marruecos puede recorrerse de muchas maneras. Nosotros preferimos hacerlo con tiempo para mirar, conocer y conectar.',
      'Desde Marrakech y las ciudades imperiales hasta los pueblos del Atlas, los oasis, las kasbahs, la costa y el Sahara.',
      'Con alojamientos escogidos, personas locales en las que confiamos y experiencias que nacen del conocimiento del lugar.',
    ],
    remate: 'Auténtico no significa renunciar a la comodidad. Significa sentirte bien acompañado mientras descubres.',
    foto: FOTOS.teFamiliaOasis,
    pie: 'Un té compartido en el sur de Marruecos.',
    fotoFinal: FOTOS.berberCampSunset,
  },
  valores: [
    { titulo: 'A tu medida', texto: 'Partimos de nuestras rutas o creamos un viaje desde cero.' },
    { titulo: 'Con personas locales', texto: 'Trabajamos con personas y familias con las que hemos construido relaciones durante años.' },
    { titulo: 'Con calma', texto: 'No queremos llenar cada día. Dejamos espacio para disfrutar, descubrir y simplemente estar.' },
    { titulo: 'Con tranquilidad', texto: 'Conocemos el terreno y estamos cerca durante todo el viaje.' },
  ],
  chigaga: {
    etiqueta: 'Erg Chigaga',
    titulo: ['Marruecos es nuestro territorio.', 'Erg Chigaga, nuestra raíz.'],
    texto: [
      'Podemos llevarte por todo Marruecos. Pero hay un lugar que conocemos de una manera especialmente profunda: Erg Chigaga.',
      'Abdoul nació allí y vivió hasta los siete años entre las dunas, las estrellas y la vida nómada. Hoy es propietario de su propio campamento en el desierto.',
      'Por eso Chigaga no es simplemente una parada más en nuestras rutas. Es un lugar que forma parte de nuestra historia, y una de las experiencias que más nos gusta compartir.',
    ],
    foto: FOTOS.campamentoJaimas,
  },
  trayectoria: {
    etiqueta: 'Desde 2009',
    titulo: ['Más de 15 años caminando por Marruecos.'],
    texto: [
      'Desde 2009 hemos creado y coordinado viajes, grupos y experiencias en Marruecos. No empezamos ahora.',
      'Hemos construido durante años una red de personas, alojamientos y colaboradores locales que nos permite conocer el país desde dentro. Y seguimos recorriéndolo.',
    ],
    foto: FOTOS.xeniaAbdoul,
    pie: 'Xènia y Abdoul en el sur de Marruecos.',
  },
  cierre: {
    titulo: ['Marruecos no termina cuando termina el viaje.'],
    texto: 'Queremos que vuelvas con algo más que fotografías. Con lugares que recuerdes, personas que recuerdes, momentos que no esperabas. Y quizá, como nos ha pasado a nosotros, con ganas de volver.',
    etiqueta: 'Empezamos',
    accion: { texto: 'Hablemos de tu viaje', a: '/contacto' },
  },
}

export const AGENCIAS = {
  hero: {
    etiqueta: 'Para agencias',
    titulo: ['Tú conoces a tus clientes.', 'Nosotros conocemos Marruecos.'],
    subtitulo: 'Un partner local de confianza para diseñar y operar viajes en Marruecos.',
    foto: FOTOS.dunasChigaga,
  },
  introduccion: {
    texto: [
      'Vosotros conocéis a vuestros clientes: sus gustos, sus expectativas y la experiencia que quieren vivir. Nosotros conocemos el terreno, las personas y la logística necesaria para que ese viaje suceda.',
      'Trabajamos como una extensión de vuestro equipo en Marruecos.',
    ],
  },
  relacion: {
    titulo: ['Vuestra agencia.', 'Nuestro equipo en Marruecos.'],
    texto: [
      'Vosotros mantenéis la relación con vuestro cliente. Yo me encargo de diseñar el viaje con vosotros y de acompañar el proyecto antes, durante y después, en conexión directa con nuestro equipo local.',
      'Sobre el terreno, nuestro equipo se ocupa de que cada parte del viaje funcione como hemos diseñado.',
      'Llevamos muchos años operando en Marruecos, trabajamos con cientos de hoteles y contamos con flota propia de vehículos 4x4.',
    ],
    creamos: 'Viajes a medida · Grupos privados · Retiros · Incentivos · Lunas de miel · Experiencias especiales',
  },
  esperar: {
    titulo: '¿Qué podéis esperar de nosotros?',
    items: [
      { titulo: 'Un equipo local que conoce el terreno', texto: 'Personas que llevan años recorriendo Marruecos y trabajando con colaboradores locales.' },
      { titulo: 'Flexibilidad real', texto: 'Rutas, alojamientos, transporte y experiencias pueden adaptarse a cada grupo.' },
      { titulo: 'Comunicación directa', texto: 'Un contacto cercano durante todo el proceso, conectado con el equipo sobre el terreno.' },
      { titulo: 'Conocimiento local', texto: 'Conocemos los lugares, las distancias, los ritmos y las personas que hacen posible cada experiencia.' },
      { titulo: 'Cuidado de vuestros clientes', texto: 'Cuando un cliente viaja con nosotros, también está viajando vuestra reputación.' },
    ],
  },
  chigaga: {
    etiqueta: 'Erg Chigaga es nuestro territorio',
    texto: [
      'Podemos diseñar viajes por todo Marruecos. Pero hay un lugar que conocemos de una manera especialmente profunda.',
      'Abdoul nació en el Sahara y vivió hasta los siete años entre las dunas y las comunidades nómadas. Hoy es propietario de su propio campamento en Erg Chigaga.',
      'Por eso, cuando llevamos a vuestros clientes allí, no estamos simplemente siguiendo una ruta. Estamos llevándolos a un lugar que conocemos desde dentro. Y esa diferencia se siente.',
    ],
    foto: FOTOS.cuatroPorCuatro,
  },
  perfiles: {
    titulo: 'Viajes pensados para cada cliente',
    texto: 'No todos los viajeros buscan lo mismo. Por eso no trabajamos con una única fórmula.',
    items: [
      { titulo: 'Familias', texto: 'Ritmos cómodos y experiencias adaptadas a cada edad.' },
      { titulo: 'Grupos privados', texto: 'Viajes diseñados alrededor de cada grupo.' },
      { titulo: 'Retiros', texto: 'Logística y coordinación para profesionales que crean sus propias experiencias.' },
      { titulo: 'Incentivos y empresas', texto: 'Programas especiales para equipos y clientes corporativos.' },
      { titulo: 'Lunas de miel y celebraciones', texto: 'Viajes cuidados y diseñados alrededor de momentos importantes.' },
      { titulo: 'Viajes a medida', texto: 'Cuando vuestro cliente busca algo que no aparece en un circuito.' },
    ],
    foto: FOTOS.riadPatioNaranjos,
  },
  historia: {
    etiqueta: 'Desde 2009',
    titulo: ['Una relación construida desde 2009.'],
    texto: [
      'Sahara Bless Travel nace de una relación que comenzó mucho antes que la agencia. Xènia y Abdoul empezaron a trabajar juntos en 2009, creando y coordinando viajes y experiencias en Marruecos para profesionales.',
      'Durante todos estos años hemos construido algo que no aparece en un catálogo: conocimiento, relaciones y confianza. Hoy ponemos todo ese camino al servicio de agencias que buscan un equipo local en Marruecos con el que trabajar a largo plazo.',
    ],
    foto: FOTOS.xeniaAbdoul,
    pie: 'Xènia y Abdoul en el sur de Marruecos.',
  },
  confianza: {
    titulo: ['Vuestros clientes están en buenas manos.'],
    texto: [
      'Cuando una agencia confía un viaje a un partner local, también está confiando parte de su reputación. Por eso nuestra relación no empieza cuando el grupo aterriza en Marruecos.',
      'Vosotros seguís siendo la agencia. Nosotros somos vuestro equipo sobre el terreno.',
    ],
  },
  cierre: {
    titulo: '¿Hablamos?',
    texto:
      'Cuéntanos qué tipo de viajes organizáis, qué buscan vuestros clientes y qué necesitáis de vuestro partner en Marruecos. No hace falta tener un proyecto cerrado: la primera conversación es simplemente para conocernos.',
  },
}

export const VIAJEROS = {
  hero: {
    etiqueta: 'Para viajeros',
    titulo: ['Marruecos, a vuestra manera.'],
    subtitulo: 'No tenéis que encajar en un circuito. Diseñamos el viaje alrededor de vosotros.',
    foto: FOTOS.teFamiliaOasis,
  },
  introduccion: {
    texto:
      'Quizá queráis conocer Marrakech y el desierto. Quizá viajar en familia, celebrar algo especial o simplemente descubrir Marruecos sin correr. Nos contáis lo que buscáis, y nosotros ponemos el conocimiento del país, las personas y los lugares que conocemos desde hace años.',
  },
  motivaciones: {
    titulo: '¿Qué os apetece vivir?',
    texto: 'No todos viajamos por las mismas razones.',
    items: [
      { titulo: 'Viajar en familia', texto: 'Un Marruecos cómodo, auténtico y pensado para disfrutar juntos.', foto: FOTOS.teFamiliaOasis },
      { titulo: 'Conocer el Sahara', texto: 'Dunas, silencio, noches bajo las estrellas y Erg Chigaga desde dentro.', foto: FOTOS.dunasErgChebbi },
      { titulo: 'Mar y montaña', texto: 'Essaouira, pueblos del Atlas, naturaleza y tiempo para bajar el ritmo.', foto: FOTOS.essaouiraPuerto },
      { titulo: 'El Marruecos más cultural', texto: 'Medinas, kasbahs, artesanía, gastronomía, mercados y ciudades imperiales.', foto: FOTOS.fezCurtidurias },
      { titulo: 'Celebrar algo especial', texto: 'Lunas de miel, aniversarios, cumpleaños o simplemente un viaje para recordar.', foto: FOTOS.riadPatioVerde },
      { titulo: 'Crear vuestro propio recorrido', texto: 'Si ya sabéis lo que queréis, lo diseñamos con vosotros. Y si todavía no lo tenéis claro, os ayudamos a encontrarlo.', foto: FOTOS.marrakechTerrazas },
    ],
  },
  inspirarse: {
    titulo: 'Inspiraros antes de empezar',
    texto:
      'Quizá ya sabéis qué tipo de viaje buscáis. Quizá todavía estáis explorando. Podéis empezar por nuestras rutas y descubrir diferentes maneras de recorrer Marruecos.',
    caminos: [
      { titulo: '¿Quieres inspirarte?', texto: 'Explora las cinco rutas.', texto2: 'Ver nuestras rutas', a: '/rutas' },
      { titulo: '¿Quieres conocernos?', texto: 'Cómo empezó nuestra historia y por qué Marruecos forma parte de nuestras vidas.', texto2: 'Conocer nuestra historia', a: '/nuestra-historia' },
    ],
  },
  sinCerrar: {
    titulo: 'No vendemos viajes cerrados',
    texto: [
      'Tenemos rutas para quienes prefieren partir de un itinerario ya pensado. Pero también podemos cambiarlo todo: la duración, el ritmo, los alojamientos, el transporte, las experiencias y la forma de recorrer Marruecos.',
      'Porque un viaje a medida no debería consistir simplemente en cambiar una excursión por otra. Debería sentirse hecho para vosotros.',
    ],
  },
  chigaga: {
    etiqueta: 'Marruecos desde dentro',
    titulo: ['Erg Chigaga.'],
    texto: [
      'Llevamos años recorriendo el país y trabajando con personas que conocemos personalmente. Y hay un lugar que ocupa un lugar especial en nuestra manera de viajar.',
      'Abdoul nació en el Sahara y vivió allí durante sus primeros años de vida. Hoy es propietario de su propio campamento en Erg Chigaga. Xènia lleva más de 18 años regresando al desierto y recorriendo Marruecos junto a él. Por eso podemos llevaros mucho más allá de una ruta.',
    ],
    foto: FOTOS.dunasChigaga,
  },
  ultimo: {
    titulo: '¿No sabéis por dónde empezar?',
    texto:
      'No pasa nada. Podéis mirar nuestras rutas para inspiraros o simplemente contarnos cuándo queréis viajar, con quién, cuántos días tenéis y qué os gustaría descubrir. A partir de ahí, empezamos a construir.',
  },
}

export const RUTAS_INDICE = {
  hero: {
    etiqueta: 'Rutas por Marruecos',
    titulo: ['Cinco maneras de entrar en Marruecos.'],
    subtitulo:
      'No todos viajamos buscando lo mismo. Algunos quieren perderse entre las medinas y el desierto. Otros prefieren el Atlántico, las montañas o viajar despacio.',
    foto: FOTOS.aitBenHaddouAtardecer,
  },
  introduccion: 'Hemos creado estas rutas como puntos de partida para descubrir Marruecos a nuestra manera. Y si ninguna encaja exactamente contigo, la adaptamos.',
  tuViaje: {
    titulo: 'Tu viaje, tu manera',
    texto: [
      'Estas rutas son nuestros puntos de partida, no viajes cerrados. Podemos adaptar el recorrido, la duración, los alojamientos y las experiencias según vuestro tiempo, intereses, forma de viajar y aeropuerto de llegada o salida.',
      'También podemos crear un itinerario completamente nuevo.',
    ],
    pregunta: '¿No sabes cuál elegir?',
    textoPregunta: 'Cuéntanos qué estás buscando y te ayudaremos a encontrar la ruta que tenga sentido para ti.',
  },
}

export const RUTA_CIERRE = {
  intermedio: { pregunta: '¿Te imaginas haciendo esta ruta?', texto: 'Quiero esta ruta' },
  final: {
    titulo: '¿La hacemos a vuestra manera?',
    texto: 'Esta ruta es un punto de partida. Podemos adaptarla a vuestro ritmo, fechas, alojamientos e intereses.',
    accion: 'Quiero diseñar mi viaje',
  },
  agencia: {
    titulo: '¿Eres agencia?',
    texto:
      'Puedes ofrecer esta ruta a tus clientes o utilizarla como punto de partida para crear tu propio viaje por Marruecos. Nosotros nos encargamos del diseño y de la operación local.',
    accion: 'Hablemos de una colaboración',
  },
}

export const HISTORIA = {
  hero: {
    etiqueta: 'Nuestra historia',
    titulo: ['Todo empezó en el Sáhara.'],
    foto: FOTOS.campamentoJaimas,
  },
  capitulos: [
    {
      titulo: null,
      cita: [
        'Hace más de 18 años, Xènia llegó por primera vez al desierto.',
        'Allí conoció a Abdoul, que había nacido en el Sahara y había vivido hasta los siete años entre las dunas, las estrellas y la vida nómada. Para él, aquel paisaje era su casa.',
      ],
    },
    {
      titulo: 'Con los años, Abdoul le enseñó Marruecos',
      texto: [
        'De una manera que no aparece en los mapas: los pueblos, los oasis, las casas, las familias, los caminos. La llevaba de un lugar a otro con naturalidad, como si ya formara parte de la familia.',
        'Y Xènia seguía mirando todo con la curiosidad de quien viene de fuera. Y todavía se sorprende.',
        'Así fue naciendo también nuestra manera de viajar: conocer un lugar desde dentro, sentirte parte de él y, al mismo tiempo, conservar la capacidad de maravillarte.',
      ],
    },
    {
      titulo: 'El silencio',
      texto: [
        'Hubo algo más. Nunca hemos necesitado llenarlo. Podemos pasar horas juntos sin hablar, compartiendo simplemente el momento. Quizá porque el silencio también nos enseñó a estar juntos, a estar presentes y a sentirnos como en casa.',
      ],
    },
    {
      titulo: 'El camino fue creciendo',
      texto: [
        'En 2009 empezamos a trabajar juntos. Y mientras crecía nuestro trabajo, también crecía nuestro conocimiento de Marruecos.',
        'Abdoul continuaba moviéndose por el país como lo había hecho desde niño, manteniendo viva esa forma nómada de vivir. Xènia volvía una y otra vez para seguir descubriendo. Y, después de tanto movimiento, siempre había un lugar al que quería regresar: Erg Chigaga.',
        'Para ella, volver al desierto era volver al silencio, a sí misma, a la calma, a su centro. Para Abdoul, era volver a una parte de su propia historia. Y así, de maneras diferentes, el mismo lugar se convirtió en casa para los dos.',
      ],
      foto: FOTOS.xeniaAbdoul,
      pie: 'Xènia y Abdoul, en el sur de Marruecos.',
    },
    {
      titulo: 'Durante años hicimos esto para otros',
      texto: [
        'Creamos y coordinamos viajes, grupos, retiros y experiencias en Marruecos. Y, sin darnos cuenta, fuimos construyendo algo que iba mucho más allá de organizar un recorrido.',
        'Fuimos descubriendo cómo nos gusta recibir a las personas: con cercanía, con cuidado y con la sensación de que hay un lugar para nosotros. Sin sentirnos turistas que simplemente pasan. Sino pudiendo compartir una mesa, un té, una conversación, una casa, un paisaje. Y también un silencio.',
      ],
      foto: FOTOS.tePatio,
    },
    {
      titulo: 'Hasta que sentimos que era el momento',
      texto: [
        'Después de tantos años, Sahara Bless Travel empezó a querer materializarse. No queríamos empezar de cero. Queríamos darle forma a todo lo que ya habíamos construido juntos: reunir nuestra experiencia, nuestras dos miradas y nuestra manera de entender los viajes.',
        'Crear una empresa que fuera realmente de los dos, con roles claros y una visión mucho más amplia de lo que queríamos construir.',
      ],
    },
    {
      titulo: 'Volver al lugar donde todo empezó',
      texto: [
        'El bazar de Ouarzazate donde nos conocimos por primera vez. Ouarzazate significa «la ciudad del silencio». Y quizá no podía existir un lugar más nuestro.',
        'Muchos años después, aquel mismo lugar volvió a reunirnos. No lo elegimos como quien busca una oficina. Hoy, aquel bazar es la agencia de viajes Sahara Bless Travel: el lugar desde el que empezamos a construir juntos esta nueva etapa.',
      ],
    },
    {
      titulo: 'Y aquí estamos',
      texto: [
        'Más de 18 años después de aquel primer encuentro, seguimos caminando juntos. Abdoul sigue llevando el Sahara dentro. Xènia sigue llegando a Marruecos con la curiosidad de quien sabe que todavía queda mucho por descubrir.',
        'Eso es Sahara Bless Travel. Una historia que empezó en el Sahara, que creció recorriendo Marruecos y que hoy queremos seguir compartiendo con vosotros.',
      ],
      foto: FOTOS.campamentoAlfombras,
    },
  ],
  bienvenida: 'Bienvenidos a nuestra historia.',
  cierre: {
    titulo: ['Ahora conoces nuestra historia.', '¿Nos dejas formar parte de la tuya?'],
    acciones: [
      { texto: 'Quiero conocer Marruecos con vosotros', a: '/contacto?perfil=viajero', variante: 'primario' },
      { texto: 'Hablemos de una colaboración', a: '/contacto?perfil=agencia', variante: 'texto' },
    ],
  },
}

export const DESIERTOS = {
  hero: {
    etiqueta: 'Una ayuda para decidir',
    titulo: ['¿Erg Chigaga o Merzouga?'],
    subtitulo: 'Dos desiertos. Dos maneras de vivir el Sahara.',
    foto: FOTOS.dunasChigaga,
  },
  intro:
    'Si estás preparando un viaje a Marruecos, probablemente te encontrarás con dos nombres: Erg Chebbi, en Merzouga, y Erg Chigaga, en el sur. Ambos tienen grandes dunas y ambos pueden ofrecer una experiencia preciosa. Pero el viaje hasta ellos, el paisaje y la forma de vivir el desierto son diferentes.',
  opciones: [
    {
      nombre: 'Erg Chebbi · Merzouga',
      titulo: 'El desierto más accesible',
      texto:
        'Se encuentra en el este de Marruecos, cerca de Merzouga. Es una buena opción si quieres incluir el desierto en una ruta por el este del país, combinándolo con lugares como Fez, Midelt o las gargantas del Todra y el Dades.',
      puntos: [
        'Un acceso más sencillo al desierto',
        'Una mayor variedad de alojamientos',
        'Combinar fácilmente el Sahara con una ruta por el este',
        'Actividades y servicios turísticos más desarrollados',
      ],
      foto: FOTOS.dunasErgChebbi,
    },
    {
      nombre: 'Erg Chigaga',
      titulo: 'El Sahara más remoto',
      texto:
        'Se encuentra en el sur de Marruecos, cerca de M’Hamid. Para llegar a las grandes dunas hay que dejar atrás el asfalto y atravesar el desierto en 4x4. Y quizá ahí empieza precisamente la experiencia: hamadas, dunas, acacias y paisajes abiertos donde el horizonte parece no terminar.',
      puntos: [
        'Más sensación de aislamiento',
        'Silencio y espacio',
        'Un desierto menos transitado',
        'Recorrer el territorio en 4x4',
        'Una experiencia más conectada con el paisaje y la vida del Sahara',
      ],
      foto: FOTOS.cuatroPorCuatro,
    },
  ],
  eleccion: {
    titulo: ['No hay uno mejor.', 'Hay uno que encaja mejor con vuestro viaje.'],
    texto: [
      'Si vuestro recorrido pasa por Fez, el este de Marruecos y las gargantas del Dades, Merzouga puede ser una opción muy lógica. Si buscáis el sur, más espacio, menos movimiento y una experiencia más remota, Erg Chigaga puede ser el lugar adecuado.',
      'Y si todavía no lo tenéis claro, no pasa nada. Contadnos cómo queréis viajar y os diremos cuál elegiríamos nosotros.',
    ],
  },
  chigaga: {
    etiqueta: 'Erg Chigaga no es solo un destino que conocemos',
    texto: [
      'Abdoul nació en el Sahara y pasó sus primeros años de vida entre las dunas y las comunidades nómadas. Hoy es propietario de su propio campamento en Erg Chigaga.',
      'Xènia lleva más de 18 años regresando al desierto y recorriendo Marruecos. Por eso Chigaga ocupa un lugar especial dentro de Sahara Bless Travel. No llegamos allí simplemente para organizar una noche en el desierto: conocemos el territorio, sus caminos y las personas que forman parte de él.',
    ],
  },
  cierre: {
    accion: 'Quiero saber cuál encaja con mi viaje',
  },
}

export const CONTACTO = {
  titulo: 'Hablemos de Marruecos.',
  bloques: [
    {
      titulo: '¿Eres agencia y buscas un partner local de confianza?',
      texto:
        'Diseñamos y coordinamos viajes en Marruecos junto a nuestro equipo local, adaptándonos a tus clientes y a tu forma de trabajar. Tú conoces a tus clientes. Nosotros conocemos Marruecos.',
      accion: { texto: 'Hablemos de una colaboración', perfil: 'agencia' },
    },
    {
      titulo: '¿Estás pensando en viajar a Marruecos?',
      texto: 'No necesitas tener el viaje decidido. Cuéntanos cuándo quieres venir, con quién viajas y qué te gustaría vivir.',
      accion: { texto: 'Diseñar mi viaje', perfil: 'viajero' },
    },
  ],
  formulario: {
    titulo: 'Cuéntanos qué tienes en mente',
    texto: 'No necesitas preparar un briefing ni saber exactamente qué quieres. Un primer mensaje es suficiente.',
    perfiles: [
      { valor: 'viajero', texto: 'Soy viajero' },
      { valor: 'agencia', texto: 'Soy agencia' },
    ],
  },
  whatsapp: {
    titulo: '¿Prefieres hablar directamente?',
    texto: 'También puedes escribirnos por WhatsApp.',
    accion: 'Escribir por WhatsApp',
  },
}

export const PIE = {
  lema: ['Diseñamos viajes.', 'Construimos experiencias.', 'Y estamos al otro lado para hacer que sucedan.'],
  territorio: 'Marruecos · España',
}
