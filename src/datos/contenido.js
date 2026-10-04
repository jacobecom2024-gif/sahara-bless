import { FOTOS } from './fotos'

/**
 * Textos de cada página. Salen de los PDF de la clienta y de los hechos confirmados en el encargo.
 * No hay cifras, testimonios, certificaciones ni datos de contacto inventados.
 */

export const NAV = [
  { texto: 'Rutas', a: '/rutas' },
  { texto: 'Viajeros', a: '/viajeros' },
  { texto: 'Nuestra historia', a: '/nuestra-historia' },
  { texto: 'Contacto', a: '/contacto' },
]

export const CTA = {
  viajero: { texto: 'Diseñar mi viaje', a: '/contacto?perfil=viajero' },
  agencia: { texto: 'Para agencias', a: '/agencias' },
  colaboracion: { texto: 'Hablemos de una colaboración', a: '/contacto?perfil=agencia' },
  rutas: { texto: 'Ver nuestras rutas', a: '/rutas' },
  historia: { texto: 'Conocer nuestra historia', a: '/nuestra-historia' },
  chigaga: { texto: 'Descubrir Erg Chigaga', a: '/erg-chigaga-o-merzouga' },
}

export const PIE = {
  lema: ['Diseñamos viajes.', 'Construimos experiencias.', 'Y estamos al otro lado para hacer que sucedan.'],
  territorio: 'Marruecos · España',
}

/* --- Inicio ------------------------------------------------------------- */

export const INICIO = {
  hero: {
    intro: 'Viajes diseñados por personas que conocen el país, sus caminos y a su gente.',
    titulo: ['Marruecos,', 'desde dentro.'],
    foto: FOTOS.campamentoHoraAzul,
  },
  recorridos: {
    agencias: {
      etiqueta: 'Para agencias',
      titulo: 'Un partner local para vuestros viajes a Marruecos.',
      texto:
        'Vosotros conocéis a vuestros clientes. Nosotros conocemos el terreno, las personas y la logística necesaria para que el viaje suceda. Trabajamos como una extensión de vuestro equipo.',
      principal: { texto: 'Hablemos de una colaboración', a: CTA.colaboracion.a },
      secundario: { texto: 'Cómo trabajamos con agencias', a: '/agencias' },
    },
    viajeros: {
      etiqueta: 'Para viajeros',
      titulo: 'Quiero viajar a Marruecos.',
      texto: 'No tenéis que encajar en un circuito. Diseñamos el viaje alrededor de vosotros, a partir de nuestras rutas o desde cero.',
      principal: { texto: 'Diseñar mi viaje', a: CTA.viajero.a },
      secundario: { texto: 'Ver nuestras rutas', a: '/rutas' },
    },
  },
  abdoul: {
    etiqueta: 'Conocimiento local',
    titulo: 'Abdoul nació en el Sahara.',
    texto:
      'Vivió allí hasta los siete años, entre las dunas, las estrellas y la vida nómada. Hoy es propietario de su propio campamento en Erg Chigaga, y desde ese conocimiento del territorio diseñamos los viajes.',
    enlace: { texto: 'Nuestra historia', a: '/nuestra-historia' },
    foto: FOTOS.xeniaAbdoul,
    pie: 'Xènia y Abdoul en el sur de Marruecos.',
  },
  chigaga: {
    etiqueta: 'Erg Chigaga',
    titulo: 'Erg Chigaga, nuestra raíz.',
    texto: 'Es un lugar que forma parte de nuestra historia.',
    foto: FOTOS.campamentoJaimas,
    enlace: { texto: 'Descubrir Erg Chigaga', a: '/erg-chigaga-o-merzouga' },
  },
  rutas: {
    etiqueta: 'Rutas',
    titulo: 'Cinco puntos de partida.',
    texto:
      'Son rutas personalizables. Podemos cambiar el recorrido, la duración, los alojamientos y las experiencias según vuestro tiempo, intereses y aeropuerto de llegada o salida.',
  },
  operacion: {
    etiqueta: 'Operación para agencias',
    titulo: 'Lo que aporta el partner local.',
    texto:
      'Diseñamos la propuesta con vosotros, la acompañamos antes, durante y después del viaje, y nuestro equipo local se ocupa de que cada parte funcione sobre el terreno. Contamos con flota propia de vehículos 4x4 y trabajamos con cientos de hoteles.',
    pasos: [
      'Nos contáis el perfil de vuestra agencia, de vuestros clientes y de la experiencia que buscan.',
      'Diseñamos o adaptamos la propuesta con vosotros.',
      'Coordinamos la operación en destino: alojamientos, transporte y experiencias.',
      'Vosotros seguís siendo la agencia. Nosotros somos vuestro equipo sobre el terreno.',
    ],
    foto: FOTOS.carreteraHamada,
    enlace: { texto: 'Ver cómo trabajamos con agencias', a: '/agencias' },
  },
  cierre: {
    titulo: '¿Por dónde empezamos?',
    caminos: [
      {
        etiqueta: 'Agencias',
        titulo: 'Tenéis un cliente y buscáis un partner en Marruecos.',
        accion: { texto: 'Hablemos de una colaboración', a: CTA.colaboracion.a },
      },
      {
        etiqueta: 'Viajeros',
        titulo: 'Queréis viajar y no sabéis por dónde empezar.',
        accion: { texto: 'Diseñar mi viaje', a: CTA.viajero.a },
      },
    ],
    foto: FOTOS.marrakechTerrazas,
  },
}

/* --- Agencias ----------------------------------------------------------- */

export const AGENCIAS = {
  hero: {
    intro: 'Un partner local de confianza para diseñar y operar viajes en Marruecos.',
    titulo: ['Tú conoces a tus clientes.', 'Nosotros conocemos Marruecos.'],
    foto: FOTOS.cuatroPorCuatro,
  },
  propuesta: {
    etiqueta: 'La propuesta',
    titulo: 'Una extensión de vuestro equipo en Marruecos.',
    texto: [
      'Vosotros mantenéis la relación con vuestro cliente. Nosotros diseñamos el viaje con vosotros, lo acompañamos antes, durante y después, y en el terreno nuestro equipo se ocupa de que cada parte del viaje funcione como se ha diseñado.',
      'Creamos y coordinamos viajes a medida, grupos privados, retiros, incentivos, lunas de miel y experiencias especiales.',
    ],
  },
  capacidades: {
    etiqueta: '¿Qué podéis esperar de nosotros?',
    items: [
      { titulo: 'Un equipo local que conoce el terreno', texto: 'Personas que llevan años recorriendo Marruecos y trabajando con colaboradores locales.' },
      { titulo: 'Flexibilidad real', texto: 'Rutas, alojamientos, transporte y experiencias pueden adaptarse a cada grupo.' },
      { titulo: 'Comunicación directa', texto: 'Un contacto cercano durante todo el proceso, conectado con el equipo sobre el terreno.' },
      { titulo: 'Conocimiento local', texto: 'Conocemos los lugares, las distancias, los ritmos y las personas que hacen posible cada experiencia.' },
      { titulo: 'Cuidado de vuestros clientes', texto: 'Cuando un cliente viaja con nosotros, también está viajando vuestra reputación.' },
    ],
  },
  pruebas: {
    etiqueta: 'Lo que lo sostiene',
    items: [
      { titulo: 'Flota propia', texto: 'Vehículos 4x4 propios para llegar a los lugares que lo requieren.' },
      { titulo: 'Red hotelera', texto: 'Trabajamos con cientos de hoteles en Marruecos.' },
      { titulo: 'Campamento propio', texto: 'Abdoul es propietario de su campamento en Erg Chigaga.' },
    ],
  },
  pausa: {
    foto: FOTOS.campamentoJaimas,
  },
  chigaga: {
    etiqueta: 'Erg Chigaga es nuestro territorio',
    texto: [
      'Podemos diseñar viajes por todo Marruecos. Pero hay un lugar que conocemos de una manera especialmente profunda.',
      'Cuando llevamos a vuestros clientes allí, no estamos simplemente siguiendo una ruta. Estamos llevándolos a un lugar que conocemos desde dentro, y esa diferencia se siente.',
    ],
    enlace: { texto: 'Descubrir Erg Chigaga', a: '/erg-chigaga-o-merzouga' },
  },
  proceso: {
    etiqueta: 'Cómo empezamos',
    titulo: 'Cuatro pasos hasta el primer viaje.',
    pasos: [
      'Nos contáis qué tipo de viajes organizáis, qué buscan vuestros clientes y qué necesitáis de un partner en Marruecos.',
      'Diseñamos o adaptamos la propuesta con vosotros.',
      'Coordinamos alojamientos, transporte y experiencias con nuestro equipo local.',
      'Acompañamos el proyecto antes, durante y después del viaje.',
    ],
  },
  cierre: {
    titulo: '¿Hablamos?',
    texto:
      'Cuéntanos qué tipo de viajes organizáis, qué buscan vuestros clientes y qué necesitáis de vuestro partner en Marruecos. No hace falta tener un proyecto cerrado: la primera conversación es para conocernos.',
  },
}

/* --- Viajeros ----------------------------------------------------------- */

export const VIAJEROS = {
  hero: {
    intro: 'No tenéis que encajar en un circuito. Diseñamos el viaje alrededor de vosotros.',
    titulo: ['Marruecos,', 'a vuestra manera.'],
    foto: FOTOS.teFamiliaOasis,
  },
  introduccion:
    'Quizá queráis conocer Marrakech y el desierto. Quizá viajar en familia, celebrar algo especial o simplemente descubrir Marruecos sin correr. Nos contáis lo que buscáis, y nosotros ponemos el conocimiento del país, las personas y los lugares que conocemos desde hace años.',
  motivaciones: [
    { titulo: 'Viajar en familia', texto: 'Un Marruecos cómodo, auténtico y pensado para disfrutar juntos.', foto: FOTOS.tePatio },
    { titulo: 'Conocer el Sahara', texto: 'Dunas, silencio, noches bajo las estrellas y Erg Chigaga desde dentro.', foto: FOTOS.campamentoAlfombras },
    { titulo: 'Mar y montaña', texto: 'Essaouira, pueblos del Atlas, naturaleza y tiempo para bajar el ritmo.', foto: FOTOS.ourikaMontanas },
    { titulo: 'El Marruecos más cultural', texto: 'Medinas, kasbahs, artesanía, gastronomía, mercados y ciudades imperiales.', foto: FOTOS.skouraKasbah },
    { titulo: 'Celebrar algo especial', texto: 'Lunas de miel, aniversarios, cumpleaños o simplemente un viaje para recordar.', foto: FOTOS.berberCampSunset },
    { titulo: 'Crear vuestro propio recorrido', texto: 'Si ya sabéis lo que queréis, lo diseñamos con vosotros. Y si todavía no lo tenéis claro, os ayudamos a encontrarlo.' },
  ],
  sinCerrar: {
    titulo: 'No vendemos viajes cerrados.',
    texto: [
      'Tenemos rutas para quienes prefieren partir de un itinerario ya pensado. Pero también podemos cambiarlo todo: la duración, el ritmo, los alojamientos, el transporte, las experiencias.',
      'Un viaje a medida no debería consistir simplemente en cambiar una excursión por otra. Debería sentirse hecho para vosotros.',
    ],
  },
  caminos: [
    { etiqueta: '¿Quieres inspirarte?', texto: 'Quizá todavía estáis explorando. Podéis empezar por nuestras rutas y descubrir diferentes maneras de recorrer Marruecos.', enlace: { texto: 'Ver nuestras rutas', a: '/rutas' } },
    { etiqueta: '¿Quieres conocernos?', texto: 'Os contamos cómo empezó nuestra historia y por qué Marruecos forma parte de nuestras vidas.', enlace: { texto: 'Conocer nuestra historia', a: '/nuestra-historia' } },
  ],
  chigaga: {
    etiqueta: 'Marruecos desde dentro',
    titulo: 'Erg Chigaga.',
    texto:
      'Abdoul nació en el Sahara y vivió allí durante sus primeros años de vida. Hoy es propietario de su propio campamento en Erg Chigaga. Xènia lleva más de 18 años regresando al desierto y recorriendo Marruecos junto a él.',
    enlace: { texto: 'Descubrir Erg Chigaga', a: '/erg-chigaga-o-merzouga' },
  },
  cierre: {
    titulo: '¿No sabéis por dónde empezar?',
    texto: 'Podéis mirar nuestras rutas para inspiraros o simplemente contarnos cuándo queréis viajar, con quién, cuántos días tenéis y qué os gustaría descubrir.',
  },
}

/* --- Rutas (índice) ----------------------------------------------------- */

export const RUTAS_INDICE = {
  hero: {
    intro: 'No todos viajamos buscando lo mismo. Algunos quieren perderse entre las medinas y el desierto. Otros prefieren el Atlántico, las montañas o viajar despacio.',
    titulo: ['Cinco maneras', 'de entrar en Marruecos.'],
    foto: FOTOS.dadesCurvas,
  },
  introduccion:
    'Hemos creado estas rutas como puntos de partida para descubrir Marruecos a nuestra manera. Y si ninguna encaja exactamente contigo, la adaptamos.',
  tuViaje: {
    titulo: 'Tu viaje, tu manera.',
    texto: [
      'Estas rutas son nuestros puntos de partida, no viajes cerrados. Podemos adaptar el recorrido, la duración, los alojamientos y las experiencias según vuestro tiempo, intereses, forma de viajar y aeropuerto de llegada o salida.',
      'También podemos crear un itinerario completamente nuevo.',
    ],
    pregunta: '¿No sabéis cuál elegir?',
    textoPregunta: 'Contadnos qué estáis buscando y os ayudaremos a encontrar la ruta que tenga sentido para vosotros.',
  },
}

/* --- Ruta (ficha) -------------------------------------------------------- */

export const RUTA_CIERRE = {
  intermedio: { pregunta: '¿Te imaginas haciendo esta ruta?', texto: 'Quiero esta ruta' },
  final: {
    titulo: '¿La hacemos a vuestra manera?',
    texto: 'Esta ruta es un punto de partida. Podemos adaptarla a vuestro ritmo, fechas, alojamientos e intereses.',
    accion: 'Quiero diseñar mi viaje',
  },
  agencia: {
    titulo: 'Para agencias',
    texto:
      'Podéis ofrecer esta ruta a vuestros clientes o utilizarla como punto de partida para crear un viaje propio por Marruecos. Nosotros nos encargamos del diseño y de la operación local.',
    accion: 'Hablemos de una colaboración',
  },
}

/* --- Nuestra historia --------------------------------------------------- */

export const HISTORIA = {
  hero: {
    intro: 'Hace más de 18 años, Xènia llegó por primera vez al desierto.',
    titulo: ['Todo empezó', 'en el Sáhara.'],
    foto: FOTOS.dunasErgChebbi,
  },
  inicio: {
    texto:
      'Allí conoció a Abdoul, que había nacido en el Sahara y había vivido hasta los siete años entre las dunas, las estrellas y la vida nómada.',
  },
  linea: [
    { fecha: '2009', texto: 'Empezamos a trabajar juntos. Mientras crecía nuestro trabajo, también crecía nuestro conocimiento de Marruecos.' },
    { fecha: 'Hoy', texto: 'Sahara Bless Travel empezó a materializarse para reunir nuestras dos miradas: una empresa de los dos, con roles claros.' },
  ],
  capitulos: [
    {
      titulo: 'Con los años, Abdoul le enseñó Marruecos.',
      texto: [
        'De una manera que no aparece en los mapas: los pueblos, los oasis, las casas, las familias, los caminos. La llevaba de un lugar a otro con naturalidad, como si ya formara parte de la familia.',
        'Y Xènia seguía mirando todo con la curiosidad de quien viene de fuera. Y todavía se sorprende.',
      ],
    },
    {
      titulo: 'El silencio.',
      texto: [
        'Nunca hemos necesitado llenarlo. Podemos pasar horas juntos sin hablar, compartiendo el momento. Quizá porque el silencio también nos enseñó a estar juntos, presentes y como en casa.',
      ],
    },
    {
      titulo: 'El camino fue creciendo.',
      texto: [
        'Abdoul continuaba moviéndose por el país como lo había hecho desde niño. Xènia volvía una y otra vez para seguir descubriendo. Y, después de tanto movimiento, siempre había un lugar al que quería regresar: Erg Chigaga.',
        'Para ella, volver al desierto era volver al silencio, a sí misma, a su centro. Para Abdoul, era volver a una parte de su propia historia. De maneras diferentes, el mismo lugar se convirtió en casa para los dos.',
      ],
      foto: FOTOS.xeniaAbdoul,
      pie: 'Xènia y Abdoul, en el sur de Marruecos.',
    },
    {
      titulo: 'Durante años hicimos esto para otros.',
      texto: [
        'Creamos y coordinamos viajes, grupos, retiros y experiencias en Marruecos. Fuimos descubriendo cómo nos gusta recibir a las personas: con cercanía, con cuidado y con la sensación de que hay un lugar para nosotros.',
        'Sin sentirnos turistas que simplemente pasan. Sino pudiendo compartir una mesa, un té, una conversación, una casa, un paisaje.',
      ],
      foto: FOTOS.tePatio,
    },
    {
      titulo: 'Volver al lugar donde todo empezó.',
      texto: [
        'El bazar de Ouarzazate donde nos conocimos por primera vez. Ouarzazate significa «la ciudad del silencio». Muchos años después, aquel mismo lugar volvió a reunirnos.',
        'Hoy, aquel bazar es la agencia de viajes Sahara Bless Travel: el lugar desde el que empezamos a construir juntos esta nueva etapa.',
      ],
    },
    {
      titulo: 'Y aquí estamos.',
      texto: [
        'Más de 18 años después de aquel primer encuentro, seguimos caminando juntos. Abdoul sigue llevando el Sahara dentro. Xènia sigue llegando a Marruecos con la curiosidad de quien sabe que todavía queda mucho por descubrir.',
      ],
    },
  ],
  pausa: {
    foto: FOTOS.campamentoJaimas,
    pie: 'Tres jaimas blancas al pie de una duna.',
  },
  cierre: {
    titulo: ['Ahora conoces nuestra historia.', '¿Nos dejas formar parte de la tuya?'],
    acciones: [
      { texto: 'Quiero conocer Marruecos con vosotros', a: CTA.viajero.a, variante: 'primario' },
      { texto: 'Hablemos de una colaboración', a: CTA.colaboracion.a, variante: 'enlace' },
    ],
  },
}

/* --- Erg Chigaga o Merzouga --------------------------------------------- */

export const DESIERTOS = {
  hero: {
    intro: 'Dos desiertos. Dos maneras de vivir el Sahara.',
    titulo: ['¿Erg Chigaga', 'o Merzouga?'],
    foto: FOTOS.carreteraHamada,
  },
  intro:
    'Si estás preparando un viaje a Marruecos, probablemente te encontrarás con dos nombres: Erg Chebbi, en Merzouga, y Erg Chigaga, en el sur. Ambos tienen grandes dunas y pueden ofrecer una experiencia preciosa. El viaje hasta ellos, el paisaje y la forma de vivir el desierto son diferentes.',
  opciones: [
    {
      nombre: 'Erg Chebbi · Merzouga',
      titulo: 'El desierto más accesible.',
      texto:
        'Se encuentra en el este de Marruecos, cerca de Merzouga. Es una buena opción si quieres incluir el desierto en una ruta por el este, combinándolo con lugares como Fez, Midelt o las gargantas del Todra y el Dades.',
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
      titulo: 'El Sahara más remoto.',
      texto:
        'Se encuentra en el sur de Marruecos, cerca de M’Hamid. Para llegar a las grandes dunas hay que dejar atrás el asfalto y atravesar el desierto en 4x4. Ahí empieza precisamente la experiencia: hamadas, dunas, acacias y un horizonte que parece no terminar.',
      puntos: [
        'Más sensación de aislamiento',
        'Silencio y espacio',
        'Un desierto menos transitado',
        'Recorrer el territorio en 4x4',
      ],
      foto: FOTOS.cuatroPorCuatro,
    },
  ],
  eleccion: {
    titulo: ['No hay uno mejor.', 'Hay uno que encaja mejor con vuestro viaje.'],
    texto:
      'Si vuestro recorrido pasa por Fez, el este de Marruecos y las gargantas del Dades, Merzouga puede ser una opción muy lógica. Si buscáis el sur, más espacio y una experiencia más remota, Erg Chigaga puede ser el lugar adecuado. Y si todavía no lo tenéis claro, contadnos cómo queréis viajar y os diremos cuál elegiríamos nosotros.',
  },
  chigaga: {
    etiqueta: 'Y aquí hay algo que para nosotros importa',
    titulo: 'Erg Chigaga no es solo un destino que conocemos.',
    texto: [
      'Abdoul nació en el Sahara y pasó sus primeros años entre las dunas y las comunidades nómadas. Hoy es propietario de su propio campamento en Erg Chigaga.',
      'Xènia lleva más de 18 años regresando al desierto y recorriendo Marruecos. Por eso Chigaga ocupa un lugar especial dentro de Sahara Bless Travel: conocemos el territorio, sus caminos y las personas que forman parte de él.',
    ],
  },
  cierre: { accion: 'Quiero saber cuál encaja con mi viaje' },
}

/* --- Contacto ----------------------------------------------------------- */

export const CONTACTO = {
  titulo: 'Hablemos de Marruecos.',
  bloques: [
    {
      titulo: 'Eres agencia y buscas un partner local de confianza.',
      texto:
        'Diseñamos y coordinamos viajes en Marruecos junto a nuestro equipo local, adaptándonos a tus clientes y a tu forma de trabajar.',
      accion: { texto: 'Hablemos de una colaboración', perfil: 'agencia' },
    },
    {
      titulo: 'Estás pensando en viajar a Marruecos.',
      texto: 'No necesitas tener el viaje decidido. Cuéntanos cuándo quieres venir, con quién viajas y qué te gustaría vivir.',
      accion: { texto: 'Diseñar mi viaje', perfil: 'viajero' },
    },
  ],
  formulario: {
    titulo: 'Cuéntanos qué tienes en mente.',
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
