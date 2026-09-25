import { FOTOS } from '../datos/fotos'
import { rutaLocalizada } from './idiomas'

const IDIOMA = 'es'
const ruta = (clave, param) => rutaLocalizada(clave, IDIOMA, param)

/**
 * Copy en español. Es la versión de referencia: se extrajo tal cual de
 * `datos/contenido.js` y `datos/rutas.js` (rama `material-visual-octubre`),
 * más todo el texto que antes vivía suelto en el JSX de cada página (ahora en
 * `UI`), para que nada quede sin traducir en inglés y francés.
 *
 * Ver src/i18n/contexto.jsx para cómo se consume, e idiomas.js para cómo se
 * construyen las URL (`CTA`/`MENU` ya llevan la ruta resuelta a `/es/...`).
 */

/* --------------------------------------------------------------------------
   Marca
   -------------------------------------------------------------------------- */

export const MARCA = {
  nombre: 'Sahara Bless Travel',
  territorio: 'Marruecos · España',
  descriptor: 'Diseñamos viajes. Construimos experiencias. Y estamos al otro lado para hacer que sucedan.',
  desde: 2009,
}

/* --------------------------------------------------------------------------
   Navegación
   -------------------------------------------------------------------------- */

export const MENU = [
  { texto: 'Inicio', a: ruta('inicio') },
  { texto: 'Rutas', a: ruta('rutas') },
  { texto: 'Viajeros', a: ruta('viajeros') },
  { texto: 'Agencias', a: ruta('agencias') },
  { texto: 'Nuestra historia', a: ruta('historia') },
  { texto: 'Contacto', a: ruta('contacto') },
]

/*
 * `#formulario` en el CTA de viajero: /contacto pone primero el bloque de
 * agencias (prioridad B2B del cliente) y el formulario queda ~1.500 px más
 * abajo. Sin el ancla, quien pulsa "Quiero diseñar mi viaje" aterriza delante
 * de "¿Eres una agencia…?" y cree que ha caído en el formulario equivocado.
 * El perfil `viajero` ya venía preseleccionado; lo que fallaba era el aterrizaje.
 * Todos los CTA de viajero del sitio deben usar CTA.viajero.a, no la ruta a mano.
 *
 * `?perfil=viajero|agencia` y `#formulario` son contrato interno (Contacto.jsx
 * los lee para decidir qué mostrar): se mantienen literales en los tres
 * idiomas, nunca se traducen.
 */
export const CTA = {
  viajero: { texto: 'Quiero diseñar mi viaje', a: `${ruta('contacto')}?perfil=viajero#formulario` },
  // Frase única para todo CTA principal B2B (cabecera, portada, agencias y
  // cierres). Encargo de la clienta 2026-09-20: la misma en todas partes.
  agencia: { texto: 'Hablemos de vuestra agencia', a: `${ruta('contacto')}?perfil=agencia` },
  // Única variante corta permitida, y solo en la cabecera: el rótulo coincide
  // con la página a la que lleva. Ningún otro punto del sitio inventa otra
  // frase de CTA B2B.
  agenciasPagina: { texto: 'Para agencias', a: ruta('agencias') },
  hablar: { texto: 'Hablar con nosotros', a: ruta('contacto') },
  rutas: { texto: 'Ver nuestras rutas', a: ruta('rutas') },
  historia: { texto: 'Conocer nuestra historia', a: ruta('historia') },
  chigaga: { texto: 'Descubrir Erg Chigaga', a: ruta('desiertos') },
}

/* --------------------------------------------------------------------------
   UI: texto de interfaz que no vive en el contenido de ninguna página
   concreta (cabecera, pie, formularios, estados, 404…). Extraído letra por
   letra de donde estaba escrito a mano en cada componente.
   -------------------------------------------------------------------------- */

export const UI = {
  comun: {
    saltarContenido: 'Saltar al contenido',
    ergChigagaOMerzouga: '¿Erg Chigaga o Merzouga?',
    soyAgencia: 'Soy agencia',
    escribirWhatsapp: 'Escribir por WhatsApp',
    contactarPorWhatsapp: 'Contactar por WhatsApp',
    mensajeWhatsappGenerico: 'Hola, os escribo desde la web de Sahara Bless Travel.',
    mensajeWhatsappRuta: (nombre) => `Hola, me interesa la ruta ${nombre}.`,
  },

  notFound: {
    tituloPagina: 'Página no encontrada · Sahara Bless Travel',
    eyebrow: 'Error 404',
    titulo: 'Este camino no lleva a ninguna parte',
    texto: 'La página que buscas no existe o ha cambiado de sitio. Podemos volver al principio.',
    boton: 'Volver al inicio',
  },

  cabecera: {
    cerrarMenu: 'Cerrar menú',
    abrirMenu: 'Abrir menú',
  },

  pie: {
    navegar: 'Navegar',
    hablarConNosotros: 'Hablar con nosotros',
    soyUnaAgencia: 'Soy una agencia',
    whatsapp: 'WhatsApp',
    copyright: (anyo) => `© ${anyo} Sahara Bless Travel. Fotografías propias, tomadas en Marruecos.`,
  },

  viajeros: {
    heroCta: 'Diseñar mi viaje',
    mapaPie: 'Las pistas del sur, dibujadas a mano.',
    campamentoPie: 'El campamento de Erg Chigaga, a última hora.',
  },

  agencias: {
    creamosYCoordinamos: 'Creamos y coordinamos',
    chigagaPie: 'Erg Chigaga, al anochecer.',
  },

  historia: {
    encuentroAriaLabel: 'El encuentro',
    compromisoAriaLabel: 'Nuestro compromiso',
  },

  desiertos: {
    campamentoAbdoulPie: 'El campamento de Abdoul, en Erg Chigaga.',
    cierreTitulo: 'Contadnos cómo queréis viajar',
    cierreTexto: 'Y os diremos cuál elegiríamos nosotros.',
  },

  ruta: {
    quieroEstaRuta: 'Quiero esta ruta',
    itinerarioTitulo: 'El itinerario, día a día',
    comoEsElDia: 'Cómo es el día',
    preguntaIntermedia: '¿Te imaginas haciendo esta ruta?',
    laHacemosATuManera: '¿La hacemos a vuestra manera?',
    hablemosDeEstaRuta: 'Hablemos de esta ruta',
    paraAgencias: 'Para agencias',
    eresAgencia: '¿Eres agencia?',
    ofrecelaATusClientes:
      'Ofrécela a tus clientes o úsala como punto de partida. Nosotros nos encargamos del diseño y de la operación local.',
    quieroOfrecerEstaRuta: 'Quiero ofrecer esta ruta a mis clientes',
    verCincoRutas: 'Ver las cinco rutas',
    sufijoTitulo: 'por Marruecos',
    rutaNoEncontrada: 'Ruta no encontrada',
  },

  contacto: {
    agenciasEtiqueta: 'Agencias',
    viajerosEtiqueta: 'Viajeros',
    preRuta: 'Nos escribes sobre ',
    posRuta: '. Lo tenemos en cuenta.',
    graciasTitulo: 'Gracias. Ya lo tenemos.',
    respuestaPrefijo: 'Te responderemos',
    respuestaAgencia: 'para agendar una primera videollamada',
    respuestaViajero: 'con las primeras ideas para tu viaje',
    avisoTecnicoEtiqueta: 'Nota técnica:',
    avisoTecnicoTexto:
      'este formulario todavía no tiene destino configurado. Falta el email o el servicio al que deben llegar los mensajes.',
    escribirOtroMensaje: 'Escribir otro mensaje',
    legendSoy: 'Soy',
    opcionViajero: 'Viajero',
    opcionAgencia: 'Agencia',
    labelNombre: 'Nombre',
    obligatorio: '(obligatorio)',
    errorNombre: 'Necesitamos saber cómo te llamas.',
    errorContactoVacio: 'Déjanos un email o un WhatsApp para poder responderte.',
    errorContactoInvalido: 'Parece que falta algo: escribe un email o un teléfono completo.',
    labelAgencia: 'Agencia',
    labelWeb: 'Web',
    labelEmailWhatsapp: 'Email o WhatsApp',
    ayudaContacto: 'Lo que te resulte más cómodo. Solo lo usamos para responderte.',
    labelTipoClientes: 'Tipo de clientes',
    placeholderTipoClientes: 'Familias, grupos privados, retiros, incentivos…',
    labelQueBuscas: '¿Qué buscas de un partner en Marruecos?',
    labelCuando: '¿Cuándo te gustaría viajar?',
    placeholderCuando: 'Octubre, primavera…',
    labelDuracion: 'Duración aproximada',
    placeholderDuracion: '8 días, dos semanas…',
    labelConQuien: '¿Con quién viajas?',
    placeholderConQuien: 'En pareja, en familia, un grupo de seis…',
    labelQueVivir: '¿Qué te gustaría vivir?',
    submitAgencia: 'Solicitar una videollamada',
    submitViajero: 'Empezar a diseñar mi viaje',
    whatsappSinConfigurarPrefijo: 'El número de WhatsApp todavía no está configurado en la web. Se activa rellenando',
    whatsappSinConfigurarEn: 'en',
    porCorreo: 'O por correo:',
  },
}

/* --------------------------------------------------------------------------
   <title> / meta description de cada página
   -------------------------------------------------------------------------- */

export const TITULOS = {
  inicio: {
    title: 'Sahara Bless Travel · Partner local en Marruecos para agencias',
    description:
      'Diseñamos y operamos viajes privados por Marruecos desde 2009, con Erg Chigaga como territorio central. Partner local para agencias, y viajes a medida para viajeros particulares.',
  },
  rutas: {
    title: 'Rutas por Marruecos · Sahara Bless Travel',
    description:
      'Cinco rutas por Marruecos como punto de partida: desierto, Atlántico, oasis, ciudades imperiales y montañas del Atlas. Todas adaptables.',
  },
  viajeros: {
    title: 'Viajes a medida por Marruecos · Sahara Bless Travel',
    description:
      'No tenéis que encajar en un circuito. Diseñamos el viaje alrededor de vosotros, con conocimiento real del terreno y personas que conocemos.',
  },
  agencias: {
    title: 'Partner local en Marruecos para agencias · Sahara Bless Travel',
    description:
      'Diseñamos y operamos viajes en Marruecos como extensión de vuestro equipo. Conocemos Erg Chigaga desde dentro. Trabajando juntos desde 2009.',
  },
  historia: {
    title: 'Nuestra historia · Sahara Bless Travel',
    description:
      'Todo empezó en el Sahara hace más de 18 años. Xènia y Abdoul: dos maneras de mirar Marruecos, y el bazar de Ouarzazate donde se conocieron, hoy la agencia.',
  },
  desiertos: {
    title: '¿Erg Chigaga o Merzouga? · Sahara Bless Travel',
    description:
      'Dos desiertos, dos maneras de vivir el Sahara. Te ayudamos a elegir el que encaja con tu viaje, sin intentar venderte siempre el mismo.',
  },
  contacto: {
    title: 'Hablemos de Marruecos · Sahara Bless Travel',
    description:
      'Escríbenos. Si eres agencia, hablamos de una colaboración. Si viajas, empezamos a diseñar tu viaje. No necesitas tenerlo decidido.',
  },
}

/* --------------------------------------------------------------------------
   Inicio
   -------------------------------------------------------------------------- */

/*
 * Revisión 2026-09-20: la portada habla primero a agencias (aprox. 70 % del
 * peso) y deja una vía secundaria, visible y digna, para viajeros
 * particulares (aprox. 30 %). El orden es deliberado: agencia → producto
 * insignia → cómo trabajamos → entrada B2C → las dos miradas → cierre B2B.
 *
 * Todos los datos salen del material ya validado (PDF y correcciones de la
 * clienta). No hay cifras, servicios ni testimonios nuevos.
 */
export const INICIO = {
  hero: {
    marca: 'Sahara Bless Travel',
    confirmacion: 'Partner local para agencias de viajes',
    titulo: [
      'Vuestros clientes no recordarán una ruta.',
      'Recordarán cómo vivieron Marruecos.',
    ],
    // T1: plano abierto. La alternancia T1/T2 de cada pagina esta descrita en
    // design/05-design-system.md → Fotografia.
    foto: FOTOS.campamentoDron,
    cta: CTA.agencia,
    enlace: {
      texto: '¿Viajas por tu cuenta? Descubre nuestros viajes privados',
      a: CTA.viajero.a,
    },
    tira: 'Desde 2009 · Erg Chigaga · Viajes privados · Partner local en Marruecos',
  },

  // Texto literal del material de la clienta. No se reescribe.
  problema: {
    titulo: 'Vuestra reputación también viaja con vuestros clientes.',
    texto: [
      'Cuando una agencia vende Marruecos, no entrega únicamente un itinerario. Entrega una promesa: que todo estará bien pensado, que el viaje tendrá sentido y que habrá alguien capaz de responder cuando sea necesario.',
      'Diseñamos y operamos viajes privados por Marruecos, con Erg Chigaga como territorio central y un equipo local de confianza en destino.',
    ],
  },

  manifiesto: {
    titulo: ['No se trata solo de dónde vas.', 'Sino de cómo lo vives.'],
    texto: [],
    remate: 'Auténtico no significa renunciar a la comodidad.',
    foto: FOTOS.familiaDuna,
    pie: 'Al final del día, en lo alto de una duna.',
    fotoPlena: FOTOS.teSobreLaDuna,
    piePlena: 'Hay experiencias que no necesitan ser aceleradas.',
  },

  pilares: {
    titulo: 'Trabajar con nosotros',
    foto: FOTOS.equipoVehiculos,
    pie: 'El equipo, antes de salir hacia el desierto.',
    lista: [
      {
        titulo: 'Operación privada',
        texto: 'Cada viaje se organiza para un grupo concreto, sin mezclar viajeros.',
      },
      {
        titulo: 'Conocimiento del territorio',
        texto: 'Erg Chigaga y el sur de Marruecos desde una relación directa con el lugar.',
      },
      {
        titulo: 'Flexibilidad',
        texto: 'Adaptación de la experiencia al perfil de cada agencia y sus clientes.',
      },
      {
        titulo: 'Un único interlocutor',
        texto: 'Coordinación cercana antes y durante la operación en destino.',
      },
      {
        titulo: 'Operación white-label',
        texto:
          'La documentación y la comunicación con el viajero pueden llevar la marca de vuestra agencia: nosotros operamos en destino sin aparecer de cara a vuestro cliente. Los vehículos y el campamento mantienen su nombre propio.',
      },
    ],
  },

  chigaga: {
    etiqueta: 'Erg Chigaga',
    titulo: 'Una forma distinta de entrar en el Sáhara.',
    texto: [
      'Erg Chigaga es nuestro territorio central: un paisaje remoto, una operación privada y una experiencia diseñada para agencias que buscan diferenciarse del turismo convencional.',
    ],
    lista: [
      'Acceso privado en 4x4.',
      'Campamento propio entre las dunas.',
      'Sin operaciones compartidas con otros grupos.',
      'Capacidad limitada.',
      'Experiencia adaptable a cada agencia.',
    ],
    foto: FOTOS.jaimasNegras,
  },

  comoTrabajamos: {
    titulo:
      'Vosotros cuidáis de vuestros clientes antes del viaje. Nosotros cuidamos de ellos cuando llegan a Marruecos.',
    pasos: [
      'Nos contáis el perfil de vuestra agencia y del grupo.',
      'Diseñamos o adaptamos la propuesta.',
      'Coordinamos la operación en destino.',
    ],
    cta: CTA.agencia,
  },

  particulares: {
    titulo: '¿Viajas por tu cuenta?',
    texto:
      'También diseñamos viajes privados para personas que quieren conocer Marruecos con tiempo, criterio y acompañamiento local.',
    cta: { texto: 'Diseñar mi viaje', a: CTA.viajero.a },
  },

  dosMiradas: {
    titulo: 'Dos formas de conocer el mismo territorio.',
    foto: FOTOS.abdoulYXenia,
    lista: [
      { nombre: 'Xènia', texto: 'Diseño de experiencia, visión del viajero y coordinación.' },
      {
        nombre: 'Abdoul',
        texto: 'Conocimiento directo del sur, relaciones locales y operación en destino.',
      },
    ],
  },

  cierre: {
    foto: FOTOS.stockDunaAmanecer,
    remateTitulo: ['Si vuestra agencia quiere ofrecer', 'un Marruecos diferente, hablemos.'],
    remateTexto: 'Cuéntanos qué tipo de viajeros atendéis y qué experiencia queréis construir.',
    cta: CTA.agencia,
    enlaceSecundario: { texto: 'Viajo de forma particular', a: CTA.viajero.a },
  },
}

/* --------------------------------------------------------------------------
   Rutas (índice)
   -------------------------------------------------------------------------- */

export const RUTAS_INDICE = {
  etiqueta: 'Rutas por Marruecos',
  titulo: 'Cinco maneras de entrar en Marruecos',
  entradilla: [
    'No todos viajamos buscando lo mismo.',
    'Cinco puntos de partida para descubrir Marruecos. ¿Cuál eliges?',
  ],
  foto: FOTOS.carreteraHamada,
  adaptacion: {
    titulo: 'Tu viaje, tu manera',
    texto: [
      'Adaptamos recorrido, duración, alojamientos y experiencias a vuestro tiempo y forma de viajar. O creamos un itinerario nuevo.',
    ],
  },
  ayuda: {
    titulo: '¿No sabes cuál elegir?',
    texto: 'Cuéntanos qué buscas y te ayudamos a encontrarla.',
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
    'Nos contáis qué buscáis. Nosotros ponemos el país, las personas y los lugares que conocemos desde hace años.',
  ],
  motivaciones: {
    titulo: '¿Qué os apetece vivir?',
    lista: [
      {
        titulo: 'Viajar en familia',
        texto: 'Cómodo, auténtico y para disfrutar juntos.',
        foto: FOTOS.familiaDuna,
      },
      {
        titulo: 'Conocer el Sahara',
        texto: 'Dunas, silencio y noches bajo las estrellas.',
        foto: FOTOS.dunasChigaga,
      },
      {
        titulo: 'Mar y montaña',
        texto: 'Essaouira, el Atlas y tiempo para bajar el ritmo.',
        foto: FOTOS.playaSidiKaouki,
      },
      {
        titulo: 'Descubrir el Marruecos más cultural',
        texto: 'Medinas, kasbahs, mercados y ciudades imperiales.',
        foto: FOTOS.stockTintesCubas,
      },
      {
        titulo: 'Celebrar algo especial',
        texto: 'Lunas de miel, aniversarios, cumpleaños.',
        foto: FOTOS.mesaParaDos,
      },
      {
        titulo: 'Crear vuestro propio recorrido',
        texto: 'Lo tengáis claro o no, lo diseñamos con vosotros.',
        foto: FOTOS.carreteraHamada,
      },
    ],
  },
  caminos: {
    titulo: 'Inspiraros antes de empezar',
    inspirar: {
      pregunta: '¿Queréis inspiraros?',
      texto: 'Cinco maneras distintas de recorrer Marruecos.',
      cta: CTA.rutas,
    },
    conocernos: {
      pregunta: '¿Queréis conocernos?',
      texto: 'Cómo empezó todo, hace más de 18 años.',
      cta: CTA.historia,
    },
  },
  cita: {
    titulo: ['Marruecos no termina', 'cuando termina el viaje.'],
    texto: 'Queremos que volváis sintiendo este territorio un poco vuestro.',
  },
  anticircuito: {
    titulo: 'No vendemos viajes cerrados',
    texto: [
      'Podemos cambiarlo todo: duración, ritmo, alojamientos y experiencias.',
    ],
  },
  chigaga: {
    etiqueta: 'Marruecos desde dentro',
    titulo: 'Erg Chigaga',
    texto: [
      'Abdoul nació en el Sahara y hoy tiene su propio campamento en Erg Chigaga. Por eso podemos llevaros más allá de una ruta.',
    ],
    foto: FOTOS.campamentoAlfombras,
  },
  cierre: {
    titulo: '¿No sabéis por dónde empezar?',
    texto: [
      'Contadnos cuándo queréis viajar, con quién y qué os gustaría descubrir. A partir de ahí, empezamos.',
    ],
  },
}

/* --------------------------------------------------------------------------
   Agencias  (todo el carril B2B)
   -------------------------------------------------------------------------- */

export const AGENCIAS = {
  hero: {
    etiqueta: 'Para agencias',
    titulo: ['Tú conoces a tus clientes.', 'Nosotros conocemos Marruecos.'],
    subtitulo: 'Un partner local de confianza en Marruecos.',
    texto: [
      'Trabajamos como una extensión de vuestro equipo.',
    ],
    foto: FOTOS.stockColinasDoradas,
  },

  comoTrabajamos: {
    titulo: ['Vuestra agencia.', 'Nuestro equipo en Marruecos.'],
    texto: [
      'Vosotros mantenéis la relación con el cliente. Yo diseño el viaje con vosotros; nuestro equipo local lo hace funcionar sobre el terreno.',
    ],
    creamos: 'Viajes a medida · Grupos privados · Retiros · Incentivos · Lunas de miel · Experiencias especiales',
    remate: 'Adaptado a vuestros viajeros y a vuestro presupuesto.',
    foto: FOTOS.equipoVehiculos,
  },

  garantias: {
    titulo: '¿Qué podéis esperar de nosotros?',
    lista: [
      {
        icono: 'equipo',
        titulo: 'Un equipo local que conoce el terreno',
        texto: 'Años recorriendo Marruecos con colaboradores locales.',
      },
      {
        icono: 'flexibilidad',
        titulo: 'Flexibilidad real',
        texto: 'Rutas, alojamientos y experiencias adaptados a cada grupo.',
      },
      {
        icono: 'comunicacion',
        titulo: 'Comunicación directa',
        texto: 'Un contacto cercano conmigo antes, durante y después del viaje.',
      },
      {
        icono: 'terreno',
        titulo: 'Conocimiento local',
        texto: 'No trabajamos Marruecos desde un catálogo.',
      },
      {
        icono: 'cuidado',
        titulo: 'Cuidado de vuestros clientes',
        texto: 'Cuando vuestro cliente viaja, también viaja vuestra reputación.',
      },
    ],
  },

  chigaga: {
    etiqueta: 'Erg Chigaga',
    titulo: 'Un desierto que conocemos desde dentro',
    texto: [
      'Abdoul nació en el Sahara y vivió entre las dunas hasta los siete años. Hoy tiene su propio campamento en Erg Chigaga.',
    ],
    foto: FOTOS.campamentoHoraAzul,
  },

  perfiles: {
    titulo: 'Viajes pensados para cada cliente',
    lista: [
      { titulo: 'Familias', texto: 'Ritmos cómodos, adaptados a cada edad.' },
      { titulo: 'Grupos privados', texto: 'Diseñados alrededor de cada grupo.' },
      { titulo: 'Retiros', texto: 'Logística para quienes crean sus propias experiencias.' },
      { titulo: 'Incentivos y empresas', texto: 'Programas para equipos y clientes corporativos.' },
      { titulo: 'Lunas de miel y celebraciones', texto: 'Diseñados alrededor de momentos importantes.' },
      { titulo: 'Viajes a medida', texto: 'Lo que no aparece en ningún circuito.' },
    ],
  },

  desde2009: {
    titulo: 'Una relación construida desde 2009',
    texto: [
      'Xènia y Abdoul trabajan juntos desde 2009. Hoy ponemos ese conocimiento y esa confianza al servicio de vuestra agencia.',
    ],
    foto: FOTOS.abdoulYXenia,
    pie: 'Xènia y Abdoul en el sur de Marruecos.',
  },

  reputacion: {
    titulo: 'Vuestros clientes están en buenas manos',
    texto: [
      'Cuando nos confiáis un viaje, nos confiáis vuestra reputación. Estoy en contacto con vosotros todo el proceso.',
    ],
    remate: 'Vosotros seguís siendo la agencia. Nosotros somos vuestro equipo sobre el terreno.',
  },

  cierre: {
    titulo: '¿Hablamos?',
    texto: [
      'La primera conversación es para conocernos.',
    ],
    foto: FOTOS.cuatroPorCuatro,
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
  /*
   * ⚠️ Las dos voces están redactadas a partir de lo que el relato original
   * cuenta de cada uno; no son citas literales. La de Abdoul, en particular,
   * debe validarla él antes de publicarse — en cualquier idioma.
   */
  encuentro: {
    texto: [
      'Hace más de 18 años, Xènia llegó por primera vez al sur de Marruecos y conoció a Abdoul.',
      'Él había nacido en el Sahara. Ella acababa de encontrar un lugar al que quería volver.',
    ],
    foto: FOTOS.abdoulYXenia,
    pie: 'Xènia y Abdoul, en el sur de Marruecos.',
  },

  voces: {
    titulo: 'Dos miradas',
    lista: [
      {
        nombre: 'Xènia',
        mirada: 'La mirada de quien llegó',
        registro: 'vision',
        foto: FOTOS.retratoDunas,
        texto: [
          'Llegué al sur de Marruecos hace más de dieciocho años y no he dejado de volver. Todavía me sorprendo.',
          'Mi trabajo es diseñar cada viaje para que esa sorpresa llegue intacta a quien lo vive, sin dejar nada a la improvisación.',
        ],
      },
      {
        nombre: 'Abdoul',
        mirada: 'La mirada de quien nació aquí',
        registro: 'terreno',
        foto: FOTOS.cuatroPorCuatroLlanura,
        texto: [
          'Nací en el Sahara y viví entre las dunas hasta los siete años. Este territorio lo conozco porque he crecido en él, no porque lo haya estudiado.',
          'Sé qué caminos tomar y qué familias te abren su casa de verdad. Eso no viene en ninguna guía.',
          'Hoy tengo mi propio campamento en Erg Chigaga.',
        ],
      },
    ],
  },

  hitos: [
    {
      titulo: 'Desde 2009, juntos',
      texto: [
        'En 2009 empezamos a trabajar juntos. Durante años creamos y coordinamos viajes, grupos y retiros en Marruecos para otros.',
        'Así aprendimos cómo nos gusta recibir: con cercanía, con cuidado, compartiendo una mesa y un té.',
      ],
      foto: FOTOS.equipoTe,
      pie: 'Un té recién servido en el sur.',
    },
    {
      titulo: 'Volver al lugar donde todo empezó',
      texto: [
        'Nos conocimos en un bazar de Ouarzazate, «la ciudad del silencio».',
        'Hoy ese mismo bazar es la agencia Sahara Bless Travel.',
      ],
      foto: FOTOS.oasisFint,
      pie: 'El sur, cerca de Ouarzazate.',
    },
  ],

  compromiso: [
    'Dos maneras de mirar el mismo territorio.',
    'Un único compromiso: que quien viaje con nosotros lo viva como algo suyo.',
  ],

  cierre: {
    titulo: ['Ahora conoces nuestra historia.', '¿Nos dejas formar parte de la tuya?'],
    cta: { texto: 'Quiero conocer Marruecos con vosotros', a: CTA.viajero.a },
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
    'Erg Chebbi, en Merzouga, o Erg Chigaga, en el sur. El camino, el paisaje y la forma de vivirlos cambian.',
  ],
  merzouga: {
    etiqueta: 'Erg Chebbi · Merzouga',
    titulo: 'El desierto más accesible',
    texto: [
      'En el este, junto a la carretera y con mucha oferta de alojamientos. Encaja en una ruta con Fez o el Dades.',
    ],
    encaje: 'Puede encajar contigo si buscas:',
    lista: [
      'un acceso más sencillo',
      'más variedad de alojamientos',
      'combinarlo con una ruta por el este',
      'más actividades y servicios',
    ],
    foto: FOTOS.dunasErgChebbi,
  },
  chigaga: {
    etiqueta: 'Erg Chigaga',
    titulo: 'El Sahara más remoto',
    texto: [
      'En el sur, cerca de M’Hamid. Se llega en 4x4, dejando atrás el asfalto.',
    ],
    encaje: 'Puede encajar contigo si buscas:',
    lista: [
      'más sensación de aislamiento',
      'silencio y espacio',
      'un desierto menos transitado',
      'más cercanía con la vida del Sahara',
    ],
    foto: FOTOS.cuatroPorCuatro,
  },
  importa: {
    etiqueta: 'Y aquí hay algo que para nosotros importa',
    titulo: 'Erg Chigaga no es solo un destino que conocemos',
    texto: [
      'Abdoul nació en el Sahara y tiene su propio campamento en Erg Chigaga. Allí no organizamos solo una noche: conocemos sus caminos y a su gente.',
    ],
    foto: FOTOS.campamentoJaimas,
  },
  veredicto: {
    pregunta: 'Entonces, ¿cuál es mejor?',
    titulo: 'No hay uno mejor. Hay uno que encaja mejor con vuestro viaje.',
    texto: [
      'Por Fez y el este, Merzouga. Por el sur, con espacio y un desierto remoto, Erg Chigaga.',
      '¿Dudáis? Contadnos cómo queréis viajar.',
    ],
    cta: { texto: 'Quiero saber cuál encaja con mi viaje', a: CTA.viajero.a },
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
      'Diseñamos y coordinamos viajes con nuestro equipo local, adaptados a tus clientes.',
    ],
    cta: 'Hablar de una colaboración',
  },
  viajero: {
    pregunta: '¿Estás pensando en viajar a Marruecos?',
    texto: [
      'No necesitas tenerlo decidido. Cuéntanos cuándo, con quién y qué te gustaría vivir.',
    ],
    cta: 'Diseñar mi viaje',
  },
  formulario: {
    titulo: 'Cuéntanos qué tienes en mente',
    entradilla: 'Un primer mensaje es suficiente.',
  },
  whatsapp: {
    titulo: '¿Prefieres hablar directamente?',
    texto: 'También puedes escribirnos por WhatsApp.',
  },
}
