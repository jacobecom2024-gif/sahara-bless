import { FOTOS } from './fotos'

/**
 * Copy de todas las páginas salvo las fichas de ruta (esas viven en rutas.js).
 *
 * Todo el texto es literal de los PDF entregados por el cliente. Lo único
 * escrito para la web son los rótulos de navegación y los textos de los CTA,
 * que siguen la regla 14 del brief (CTA específicos; prohibidos "Enviar",
 * "Contactar", "Más información", "Saber más").
 */

/* --------------------------------------------------------------------------
   Navegación
   -------------------------------------------------------------------------- */

export const MENU = [
  { texto: 'Inicio', a: '/' },
  { texto: 'Rutas', a: '/rutas' },
  { texto: 'Viajeros', a: '/viajeros' },
  { texto: 'Agencias', a: '/agencias' },
  { texto: 'Nuestra historia', a: '/nuestra-historia' },
  { texto: 'Contacto', a: '/contacto' },
]

export const CTA = {
  viajero: { texto: 'Quiero diseñar mi viaje', a: '/contacto?perfil=viajero' },
  agencia: { texto: 'Agendar una videollamada', a: '/contacto?perfil=agencia' },
  hablar: { texto: 'Hablar con nosotros', a: '/contacto' },
  rutas: { texto: 'Ver nuestras rutas', a: '/rutas' },
  historia: { texto: 'Conocer nuestra historia', a: '/nuestra-historia' },
  chigaga: { texto: 'Descubrir Erg Chigaga', a: '/erg-chigaga-o-merzouga' },
}

/* --------------------------------------------------------------------------
   Inicio
   -------------------------------------------------------------------------- */

export const INICIO = {
  hero: {
    titulo: 'Marruecos, desde dentro.',
    subtitulo: 'Viajes diseñados por personas que conocen el país, sus caminos y a su gente.',
    foto: FOTOS.campamentoHoraAzul,
    tira: 'Viajes a medida · Grupos privados · Retiros · Experiencias para agencias',
  },

  intro: [
    'Desde 2009 creamos y coordinamos viajes por Marruecos para viajeros, grupos y profesionales del turismo.',
    'Hoy lo hacemos desde Sahara Bless Travel, combinando conocimiento local, relaciones construidas durante años y una forma de viajar que pone a las personas en el centro.',
  ],

  manifiesto: {
    titulo: ['No se trata solo de dónde vas.', 'Sino de cómo lo vives.'],
    texto: [
      'Marruecos puede recorrerse de muchas maneras. Nosotros preferimos hacerlo con tiempo para mirar, conocer y conectar.',
      'Desde Marrakech y las ciudades imperiales hasta los pueblos del Atlas, los oasis, las kasbahs, la costa y el Sahara.',
      'Con alojamientos escogidos, personas locales en las que confiamos y experiencias que nacen del conocimiento del lugar.',
    ],
    remate: 'Auténtico no significa renunciar a la comodidad. Significa sentirte bien acompañado mientras descubres.',
    foto: FOTOS.tePatio,
  },

  chigaga: {
    etiqueta: 'Erg Chigaga',
    titulo: ['Marruecos es nuestro territorio.', 'Erg Chigaga, nuestra raíz.'],
    texto: [
      'Podemos llevarte por todo Marruecos. Pero hay un lugar que conocemos de una manera especialmente profunda: Erg Chigaga.',
      'Abdoul nació allí y vivió hasta los siete años entre las dunas, las estrellas y la vida nómada. Hoy es propietario de su propio campamento en el desierto.',
      'Por eso Chigaga no es simplemente una parada más en nuestras rutas. Es un lugar que forma parte de nuestra historia. Y una de las experiencias que más nos gusta compartir.',
    ],
    foto: FOTOS.campamentoJaimas,
  },

  pilares: {
    titulo: 'Viajar a Marruecos con nosotros',
    lista: [
      {
        titulo: 'A tu medida',
        texto: 'Partimos de nuestras rutas o creamos un viaje desde cero.',
      },
      {
        titulo: 'Con personas locales',
        texto:
          'Trabajamos con personas y familias con las que hemos construido relaciones durante años.',
      },
      {
        titulo: 'Con calma',
        texto: 'No queremos llenar cada día. Dejamos espacio para disfrutar, descubrir y simplemente estar.',
      },
      {
        titulo: 'Con la tranquilidad de estar acompañado',
        texto: 'Conocemos el terreno y estamos cerca durante todo el viaje.',
      },
    ],
  },

  bifurcacion: {
    titulo: ['Para quienes viajan.', 'Y para quienes hacen viajar.'],
    viajero: {
      pregunta: '¿Eres viajero/a?',
      texto:
        'Quieres conocer Marruecos de una forma diferente, pero no sabes exactamente cómo diseñarlo. Te ayudamos a crear un viaje que tenga sentido para ti.',
      cta: { texto: 'Quiero diseñar mi viaje', a: '/viajeros' },
    },
    agencia: {
      pregunta: '¿Eres agencia o profesional del turismo?',
      texto:
        'Buscas un partner local de confianza en Marruecos que conozca el terreno, entienda las necesidades de tus clientes y pueda encargarse de la operación sobre el terreno. Trabajamos como una extensión de vuestro equipo.',
      cta: { texto: 'Conoce cómo trabajamos con agencias', a: '/agencias' },
    },
  },

  trayectoria: {
    titulo: 'Más de 15 años caminando por Marruecos',
    texto: [
      'Desde 2009 hemos creado y coordinado viajes, grupos y experiencias en Marruecos. No empezamos ahora.',
      'Hemos construido durante años una red de personas, alojamientos y colaboradores locales que nos permite conocer el país desde dentro. Y seguimos recorriéndolo.',
    ],
    foto: FOTOS.xeniaAbdoul,
    pie: 'Xènia y Abdoul en el sur de Marruecos.',
  },

  cierre: {
    titulo: ['Marruecos no termina', 'cuando termina el viaje.'],
    texto: [
      'Queremos que vuelvas con algo más que fotografías.',
      'Con lugares que recuerdes. Personas que recuerdes. Momentos que no esperabas. Y quizá, como nos ha pasado a nosotros, con ganas de volver.',
    ],
    foto: FOTOS.dunasChigaga,
    remateTitulo: '¿Empezamos?',
    remateTexto: 'Cuéntanos qué tienes en mente. No necesitas tener el viaje decidido.',
    cta: { texto: 'Hablemos de tu viaje', a: '/contacto?perfil=viajero' },
  },
}

/* --------------------------------------------------------------------------
   Rutas (índice)
   -------------------------------------------------------------------------- */

export const RUTAS_INDICE = {
  etiqueta: 'Rutas por Marruecos',
  titulo: 'Cinco maneras de entrar en Marruecos',
  entradilla: [
    'No todos viajamos buscando lo mismo. Algunos quieren perderse entre las medinas y el desierto. Otros prefieren el Atlántico, las montañas o viajar despacio.',
    'Hemos creado estas rutas como puntos de partida para descubrir Marruecos a nuestra manera. Y si ninguna encaja exactamente contigo, la adaptamos.',
  ],
  foto: FOTOS.carreteraHamada,
  adaptacion: {
    titulo: 'Tu viaje, tu manera',
    texto: [
      'Estas rutas son puntos de partida, no viajes cerrados. Podemos adaptar el recorrido, la duración, los alojamientos y las experiencias según vuestro tiempo, intereses, forma de viajar y aeropuerto de llegada o salida.',
      'También podemos crear un itinerario completamente nuevo.',
    ],
  },
  ayuda: {
    titulo: '¿No sabes cuál elegir?',
    texto: 'Cuéntanos qué estás buscando y te ayudaremos a encontrar la ruta que tenga sentido para ti.',
  },
}

/* --------------------------------------------------------------------------
   Viajeros
   -------------------------------------------------------------------------- */

export const VIAJEROS = {
  hero: {
    etiqueta: 'Viajeros',
    titulo: 'Marruecos, a vuestra manera',
    subtitulo: 'No tenéis que encajar en un circuito. Diseñamos el viaje alrededor de vosotros.',
    foto: FOTOS.valleAtlasNieve,
  },
  intro: [
    'Quizás queréis conocer Marrakech y el desierto. Quizás viajar en familia, celebrar algo especial o simplemente descubrir Marruecos sin correr.',
    'Nos contáis qué buscáis. Nosotros ponemos el conocimiento del país, las personas y los lugares que conocemos desde hace años para crear un viaje que tenga sentido para vosotros.',
  ],
  motivaciones: {
    titulo: '¿Qué os apetece vivir?',
    entradilla: 'No todos viajamos por las mismas razones.',
    lista: [
      {
        titulo: 'Viajar en familia',
        texto: 'Un Marruecos cómodo, auténtico y pensado para disfrutar juntos.',
        foto: FOTOS.teFamiliaOasis,
      },
      {
        titulo: 'Conocer el Sahara',
        texto: 'Dunas, silencio, noches bajo las estrellas y Erg Chigaga desde dentro.',
        foto: FOTOS.dunasChigaga,
      },
      {
        titulo: 'Mar y montaña',
        texto: 'Essaouira, pueblos del Atlas, naturaleza y tiempo para bajar el ritmo.',
        foto: FOTOS.playaSidiKaouki,
      },
      {
        titulo: 'Descubrir el Marruecos más cultural',
        texto: 'Medinas, kasbahs, artesanía, gastronomía, mercados y ciudades imperiales.',
        foto: FOTOS.fezMedina,
      },
      {
        titulo: 'Celebrar algo especial',
        texto: 'Lunas de miel, aniversarios, cumpleaños o simplemente un viaje para recordar.',
        foto: FOTOS.riadPatioNaranjos,
      },
      {
        titulo: 'Crear vuestro propio recorrido',
        texto:
          'Si ya sabéis lo que queréis, lo diseñamos con vosotros. Y si todavía no lo tenéis claro, os ayudamos a encontrarlo.',
        foto: FOTOS.carreteraHamada,
      },
    ],
  },
  caminos: {
    titulo: 'Inspiraros antes de empezar',
    inspirar: {
      pregunta: '¿Queréis inspiraros?',
      texto:
        'Quizás ya sabéis qué tipo de viaje buscáis. Quizás todavía estáis explorando. Podéis empezar por nuestras rutas y descubrir diferentes maneras de recorrer Marruecos.',
      cta: CTA.rutas,
    },
    conocernos: {
      pregunta: '¿Queréis conocernos?',
      texto:
        'Si queréis conocernos un poco más antes de viajar con nosotros, os contamos cómo comenzó nuestra historia y por qué Marruecos forma parte de nuestras vidas.',
      cta: CTA.historia,
    },
  },
  anticircuito: {
    titulo: 'No vendemos viajes cerrados',
    texto: [
      'Tenemos rutas para quienes prefieren partir de un itinerario ya pensado. Pero también podemos cambiarlo todo: la duración, el ritmo, los alojamientos, el transporte, las experiencias y la forma de recorrer Marruecos.',
      'Porque un viaje a medida no debería consistir simplemente en cambiar una excursión por otra. Debería sentirse hecho para vosotros.',
    ],
  },
  chigaga: {
    etiqueta: 'Marruecos desde dentro',
    titulo: 'Erg Chigaga',
    texto: [
      'Llevamos años recorriendo el país y trabajando con personas que conocemos personalmente. Y hay un lugar que ocupa un lugar especial en nuestra manera de viajar.',
      'Abdoul nació en el Sahara y vivió allí durante sus primeros años de vida. Hoy es propietario de su propio campamento en Erg Chigaga. Xènia lleva más de 18 años regresando al desierto y recorriendo Marruecos junto a él.',
      'Por eso podemos llevaros mucho más allá de una ruta. Podemos enseñaros lugares y formas de vivir Marruecos que forman parte de nuestro propio camino.',
    ],
    foto: FOTOS.campamentoAlfombras,
  },
  cierre: {
    titulo: '¿No sabéis por dónde empezar?',
    texto: [
      'No pasa nada. Podéis mirar nuestras rutas para inspiraros o simplemente contarnos cuándo queréis viajar, con quién, cuántos días tenéis y qué os gustaría descubrir.',
      'A partir de ahí, empezamos a construir.',
    ],
  },
}

/* --------------------------------------------------------------------------
   Agencias  (todo el carril B2B: superficie "noche")
   -------------------------------------------------------------------------- */

export const AGENCIAS = {
  hero: {
    etiqueta: 'Para agencias',
    titulo: ['Tú conoces a tus clientes.', 'Nosotros conocemos Marruecos.'],
    subtitulo: 'Un partner local de confianza para diseñar y operar viajes en Marruecos.',
    texto: [
      'Vosotros conocéis a vuestros clientes: sus gustos, sus expectativas y la experiencia que quieren vivir.',
      'Nosotros conocemos el terreno, las personas y la logística necesaria para hacer que ese viaje suceda. Trabajamos como una extensión de vuestro equipo en Marruecos.',
    ],
    foto: FOTOS.dunasChigaga,
  },

  comoTrabajamos: {
    titulo: ['Vuestra agencia.', 'Nuestro equipo en Marruecos.'],
    texto: [
      'Vosotros mantenéis la relación con vuestro cliente.',
      'Yo me encargo de diseñar el viaje con vosotros y de acompañar el proyecto antes, durante y después del viaje, en conexión directa con nuestro equipo local en Marruecos.',
      'Sobre el terreno, nuestro equipo se ocupa de que cada parte del viaje funcione como hemos diseñado.',
    ],
    creamos: 'Viajes a medida · Grupos privados · Retiros · Incentivos · Lunas de miel · Experiencias especiales',
    remate: 'Adaptamos cada propuesta al perfil de vuestros viajeros, vuestro presupuesto y vuestra forma de trabajar.',
    foto: FOTOS.carreteraHamada,
  },

  garantias: {
    titulo: '¿Qué podéis esperar de nosotros?',
    lista: [
      {
        icono: 'equipo',
        titulo: 'Un equipo local que conoce el terreno',
        texto: 'Personas que llevan años recorriendo Marruecos y trabajando con colaboradores locales.',
      },
      {
        icono: 'flexibilidad',
        titulo: 'Flexibilidad real',
        texto: 'Rutas, alojamientos, transporte y experiencias pueden adaptarse a cada grupo.',
      },
      {
        icono: 'comunicacion',
        titulo: 'Comunicación directa',
        texto:
          'Tendréis un contacto cercano conmigo durante todo el proceso y estaré conectada con el equipo sobre el terreno durante el viaje.',
      },
      {
        icono: 'terreno',
        titulo: 'Conocimiento local',
        texto:
          'No trabajamos Marruecos desde un catálogo. Conocemos los lugares, las distancias, los ritmos y, sobre todo, a las personas que hacen posible cada experiencia.',
      },
      {
        icono: 'cuidado',
        titulo: 'Cuidado de vuestros clientes',
        texto:
          'Porque sabemos que cuando un cliente viaja con nosotros, también está viajando vuestra reputación.',
      },
    ],
  },

  chigaga: {
    etiqueta: 'Nuestro territorio',
    titulo: 'Erg Chigaga es nuestro territorio',
    texto: [
      'Podemos diseñar viajes por todo Marruecos. Pero hay un lugar que conocemos de una manera especialmente profunda.',
      'Abdoul nació en el Sahara y vivió hasta los siete años entre las dunas y las comunidades nómadas. El desierto forma parte de su historia y de su manera de entender el territorio. Hoy es propietario de su propio campamento en Erg Chigaga.',
      'Por eso, cuando llevamos a vuestros clientes allí, no estamos simplemente siguiendo una ruta. Estamos llevándolos a un lugar que conocemos desde dentro. Y esa diferencia se siente.',
    ],
    foto: FOTOS.campamentoHoraAzul,
  },

  perfiles: {
    titulo: 'Viajes pensados para cada cliente',
    entradilla: 'No todos los viajeros buscan lo mismo. Por eso no trabajamos con una única fórmula.',
    lista: [
      { titulo: 'Familias', texto: 'Ritmos cómodos y experiencias adaptadas a cada edad.' },
      { titulo: 'Grupos privados', texto: 'Viajes diseñados alrededor de cada grupo.' },
      {
        titulo: 'Retiros',
        texto: 'Logística y coordinación para profesionales que crean sus propias experiencias.',
      },
      { titulo: 'Incentivos y empresas', texto: 'Programas especiales para equipos y clientes corporativos.' },
      {
        titulo: 'Lunas de miel y celebraciones',
        texto: 'Viajes cuidados y diseñados alrededor de momentos importantes.',
      },
      { titulo: 'Viajes a medida', texto: 'Cuando vuestro cliente busca algo que no aparece en un circuito.' },
    ],
  },

  desde2009: {
    titulo: 'Una relación construida desde 2009',
    texto: [
      'Sahara Bless Travel nace de una relación que comenzó mucho antes que la agencia. Xènia y Abdoul empezaron a trabajar juntos en 2009, creando y coordinando viajes y experiencias en Marruecos para profesionales.',
      'Durante todos estos años hemos construido algo que no aparece en un catálogo: conocimiento, relaciones y confianza.',
      'Hoy ponemos todo ese camino al servicio de agencias que buscan un equipo local en Marruecos con el que trabajar a largo plazo.',
    ],
    foto: FOTOS.xeniaAbdoul,
    pie: 'Xènia y Abdoul en el sur de Marruecos.',
  },

  reputacion: {
    titulo: 'Vuestros clientes están en buenas manos',
    texto: [
      'Cuando una agencia confía un viaje a un partner local, también está confiando parte de su reputación.',
      'Por eso nuestra relación no empieza cuando el grupo aterriza en Marruecos. Estoy en contacto con vosotros durante todo el proceso y conectada con nuestro equipo local durante el viaje.',
    ],
    remate: 'Vosotros seguís siendo la agencia. Nosotros somos vuestro equipo sobre el terreno.',
  },

  cierre: {
    titulo: '¿Hablamos?',
    texto: [
      'Cuéntanos qué tipo de viajes organizáis, qué buscan vuestros clientes y qué necesitáis de vuestro partner en Marruecos.',
      'No hace falta tener un proyecto cerrado. La primera conversación es simplemente para conocernos.',
    ],
  },
}

/* --------------------------------------------------------------------------
   Nuestra historia
   -------------------------------------------------------------------------- */

export const HISTORIA = {
  hero: {
    etiqueta: 'Nuestra historia',
    titulo: 'Todo empezó en el Sahara',
    foto: FOTOS.dunasErgChebbi,
  },
  movimientos: [
    {
      texto: [
        'Hace más de 18 años, Xènia llegó por primera vez al desierto.',
        'Allí conoció a Abdoul, que había nacido en el Sahara y había vivido hasta los siete años entre las dunas, las estrellas y la vida nómada.',
        'Para él, aquel paisaje era su casa. Para ella, acababa de convertirse en un lugar que quería seguir descubriendo.',
        'No sabíamos entonces todo lo que aquel encuentro iba a traer. Pero empezamos a caminar juntos.',
      ],
      foto: FOTOS.xeniaAbdoul,
      pie: 'Xènia y Abdoul, en el sur de Marruecos.',
    },
    {
      texto: [
        'Con los años, Abdoul fue enseñándole Marruecos de una manera que no aparece en los mapas. Los pueblos, los oasis, las casas, las familias, los caminos.',
        'La llevaba de un lugar a otro con naturalidad, como si ella fuera una más, como si ya formara parte de la familia. Y Xènia seguía mirando todo con la curiosidad de quien viene de fuera. Y todavía se sorprende.',
        'Así fue naciendo también nuestra manera de viajar: conocer un lugar desde dentro, sentirte parte de él y, al mismo tiempo, conservar la capacidad de maravillarte.',
      ],
      foto: FOTOS.tePatio,
      pie: 'Un té compartido, en algún lugar del sur.',
    },
    {
      cita: [
        'Y había algo más. El silencio.',
        'Nunca hemos necesitado llenarlo. Podemos pasar horas juntos sin hablar, compartiendo simplemente el momento.',
        'Quizá porque el silencio también nos enseñó a estar juntos. A estar presentes. A sentirnos como en casa.',
      ],
    },
    {
      titulo: 'El camino fue creciendo',
      texto: [
        'En 2009 empezamos a trabajar juntos. Y mientras crecía nuestro trabajo, también crecía nuestro conocimiento de Marruecos.',
        'Abdoul continuaba moviéndose por el país como lo había hecho desde niño: pasando temporadas en diferentes lugares, durmiendo en distintos rincones, recorriendo caminos y manteniendo viva esa forma nómada de vivir.',
        'Xènia volvía una y otra vez a Marruecos para seguir descubriendo. Y, después de tanto movimiento, siempre había un lugar al que quería regresar: Erg Chigaga.',
        'Para ella, volver al desierto era volver al silencio. Volver a sí misma. A la calma. A su centro. Para Abdoul, era volver a una parte de su propia historia.',
        'Y así, de maneras diferentes, el mismo lugar se convirtió en casa para los dos.',
      ],
      foto: FOTOS.campamentoJaimas,
      pie: 'Erg Chigaga.',
    },
    {
      titulo: 'Durante años hicimos esto para otros',
      texto: [
        'Creamos y coordinamos viajes, grupos, retiros y experiencias en Marruecos. Y sin darnos cuenta, fuimos construyendo algo que iba mucho más allá de organizar un recorrido.',
        'Fuimos descubriendo cómo nos gusta recibir a las personas. Como nos gusta que nos reciban cuando viajamos: con cercanía, con cuidado y con la sensación de que hay un lugar para nosotros.',
        'Sin sentirnos turistas que simplemente pasan. Sino pudiendo compartir una mesa, un té, una conversación, una casa, un paisaje. Y también un silencio.',
      ],
      foto: FOTOS.teFamiliaOasis,
      pie: 'Una casa del oasis.',
    },
    {
      titulo: 'Hasta que sentimos que era el momento',
      texto: [
        'Después de tantos años, Sahara Bless Travel empezó a querer materializarse.',
        'No queríamos empezar de cero. Queríamos darle forma a todo lo que ya habíamos construido juntos. Reunir nuestra experiencia. Nuestras dos miradas. Nuestra manera de entender los viajes. Y abrirla a más personas y a nuevas posibilidades.',
        'Crear una empresa que fuera realmente de los dos. Con nuestros roles claros, con más experiencia y con una visión mucho más amplia de lo que queríamos construir.',
        'Y entonces apareció una idea que parecía estar esperándonos desde hacía mucho tiempo.',
      ],
    },
    {
      titulo: 'Volver al lugar donde todo empezó',
      texto: [
        'El bazar de Ouarzazate donde nos conocimos por primera vez.',
        'Ouarzazate significa «la ciudad del silencio». Y quizá no podía existir un lugar más nuestro.',
        'Allí empezó nuestra historia. Allí compartimos tantos tés, conversaciones y silencios. Y muchos años después, aquel mismo lugar volvió a reunirnos.',
        'No lo elegimos como quien busca una oficina. Sentimos que era el lugar que nos había juntado una primera vez y que ahora nos volvía a elegir.',
        'Y así fue. Hoy, aquel bazar es la agencia de viajes Sahara Bless Travel. El lugar donde nos conocimos se convirtió en el lugar desde el que empezamos a construir juntos esta nueva etapa.',
      ],
      foto: FOTOS.oasisFint,
      pie: 'El sur, cerca de Ouarzazate.',
    },
    {
      titulo: 'Y aquí estamos',
      texto: [
        'Más de 18 años después de aquel primer encuentro. Seguimos caminando juntos.',
        'Abdoul sigue llevando el Sahara dentro. Xènia sigue llegando a Marruecos con la curiosidad de quien sabe que todavía queda mucho por descubrir.',
        'Y los dos seguimos creyendo en una misma forma de viajar: conocer un lugar desde dentro, sentirte parte de él y tener siempre un espacio para simplemente estar.',
        'Eso es Sahara Bless Travel. Una historia que empezó en el Sahara. Que creció recorriendo Marruecos. Y que hoy queremos seguir compartiendo con vosotros.',
      ],
    },
  ],
  bienvenida: 'Bienvenidos a nuestra historia.',
  cierre: {
    titulo: ['Ahora conoces nuestra historia.', '¿Nos dejas formar parte de la tuya?'],
    cta: { texto: 'Quiero conocer Marruecos con vosotros', a: '/contacto?perfil=viajero' },
    foto: FOTOS.campamentoHoraAzul,
  },
}

/* --------------------------------------------------------------------------
   Erg Chigaga o Merzouga
   -------------------------------------------------------------------------- */

export const DESIERTOS = {
  hero: {
    etiqueta: 'Una ayuda para decidir',
    titulo: '¿Erg Chigaga o Merzouga?',
    subtitulo: 'Dos desiertos. Dos maneras de vivir el Sahara.',
    foto: FOTOS.dunasErgChebbi,
  },
  intro: [
    'Si estás preparando un viaje a Marruecos, probablemente te encontrarás con dos nombres: Erg Chebbi, en Merzouga, y Erg Chigaga, en el sur.',
    'Ambos tienen grandes dunas y ambos pueden ofrecer una experiencia preciosa. Pero el viaje hasta ellos, el paisaje y la forma de vivir el desierto son diferentes.',
    '¿Cuál encaja mejor contigo? Te ayudamos a elegirlo.',
  ],
  merzouga: {
    etiqueta: 'Erg Chebbi · Merzouga',
    titulo: 'El desierto más accesible',
    texto: [
      'Erg Chebbi se encuentra en el este de Marruecos, cerca de Merzouga. Es una buena opción si quieres incluir el desierto dentro de una ruta por el este del país, especialmente combinándolo con lugares como Fez, Midelt o las gargantas del Todra y Dades.',
      'Las grandes dunas están muy cerca de la carretera y existe una amplia oferta de alojamientos y actividades.',
    ],
    encaje: 'Puede encajar contigo si buscas:',
    lista: [
      'un acceso más sencillo al desierto',
      'una mayor variedad de alojamientos',
      'combinar fácilmente el Sahara con una ruta por el este',
      'actividades y servicios turísticos más desarrollados',
    ],
    foto: FOTOS.dunasErgChebbi,
  },
  chigaga: {
    etiqueta: 'Erg Chigaga',
    titulo: 'El Sahara más remoto',
    texto: [
      'Erg Chigaga se encuentra en el sur de Marruecos, cerca de M’Hamid. Para llegar a las grandes dunas hay que dejar atrás el asfalto y atravesar el desierto en 4x4. Y quizá ahí empieza precisamente la experiencia.',
      'Durante el camino aparecen hamadas, dunas, acacias y paisajes abiertos donde el horizonte parece no terminar. Hay menos infraestructura y menos movimiento.',
    ],
    encaje: 'Puede encajar contigo si buscas:',
    lista: [
      'más sensación de aislamiento',
      'silencio y espacio',
      'un desierto menos transitado',
      'recorrer el territorio en 4x4',
      'una experiencia más conectada con el paisaje y la vida del Sahara',
    ],
    foto: FOTOS.cuatroPorCuatro,
  },
  importa: {
    etiqueta: 'Y aquí hay algo que para nosotros importa',
    titulo: 'Erg Chigaga no es solo un destino que conocemos',
    texto: [
      'Abdoul nació en el Sahara y pasó sus primeros años de vida entre las dunas y las comunidades nómadas. Hoy es propietario de su propio campamento en Erg Chigaga.',
      'Xènia lleva más de 18 años regresando al desierto y recorriendo Marruecos.',
      'Por eso Chigaga ocupa un lugar especial dentro de Sahara Bless Travel. No llegamos allí simplemente para organizar una noche en el desierto. Conocemos el territorio, sus caminos y las personas que forman parte de él.',
      'Y eso nos permite diseñar la experiencia de una manera diferente.',
    ],
    foto: FOTOS.campamentoJaimas,
  },
  veredicto: {
    pregunta: 'Entonces, ¿cuál es mejor?',
    titulo: 'No hay uno mejor. Hay uno que encaja mejor con vuestro viaje.',
    texto: [
      'Si vuestro recorrido pasa por Fez, el este de Marruecos y las gargantas del Dades, Merzouga puede ser una opción muy lógica.',
      'Si buscáis el sur, más espacio, menos movimiento y una experiencia más remota, Erg Chigaga puede ser el lugar adecuado.',
      'Y si todavía no lo tenéis claro, no pasa nada. Contadnos cómo queréis viajar y os diremos cuál elegiríamos nosotros.',
    ],
    cta: { texto: 'Quiero saber cuál encaja con mi viaje', a: '/contacto?perfil=viajero' },
  },
}

/* --------------------------------------------------------------------------
   Contacto
   -------------------------------------------------------------------------- */

export const CONTACTO = {
  hero: {
    etiqueta: 'Contacto',
    titulo: 'Hablemos de Marruecos',
  },
  agencia: {
    pregunta: '¿Eres una agencia y buscas un partner local de confianza?',
    texto: [
      'Diseñamos y coordinamos viajes en Marruecos junto a nuestro equipo local, adaptándonos a tus clientes, tu forma de trabajar y lo que quieres ofrecerles.',
      'Tú conoces a tus clientes. Nosotros conocemos Marruecos. Desde el primer diseño hasta el regreso del grupo, estamos conectados para que todo funcione sobre el terreno.',
    ],
    cta: 'Hablar de una colaboración',
  },
  viajero: {
    pregunta: '¿Estás pensando en viajar a Marruecos?',
    texto: [
      'No necesitas tener el viaje decidido. Cuéntanos cuándo quieres venir, con quién viajas y qué te gustaría vivir.',
      'Puede que ya tengas una ruta en mente. Puede que solo sepas que quieres conocer Marruecos. Nosotros te ayudamos a darle forma.',
    ],
    cta: 'Diseñar mi viaje',
  },
  formulario: {
    titulo: 'Cuéntanos qué tienes en mente',
    entradilla: 'No necesitas preparar un briefing ni saber exactamente qué quieres. Un primer mensaje es suficiente.',
  },
  whatsapp: {
    titulo: '¿Prefieres hablar directamente?',
    texto: 'También puedes escribirnos por WhatsApp.',
  },
}
