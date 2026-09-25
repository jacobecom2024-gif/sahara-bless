import { FOTOS } from '../datos/fotos'
import { rutaLocalizada } from './idiomas'

const IDIOMA = 'en'
const ruta = (clave, param) => rutaLocalizada(clave, IDIOMA, param)

/**
 * English copy. Same shape as contenido.es.js on purpose — see that file for
 * the structural comments. This is not a literal translation: it keeps the
 * brand voice (warm, editorial, grounded — never "luxury"/"prestige" framing)
 * and reworks sentences that would read stiff if translated word for word.
 */

/* --------------------------------------------------------------------------
   Brand
   -------------------------------------------------------------------------- */

export const MARCA = {
  nombre: 'Sahara Bless Travel',
  territorio: 'Morocco · Spain',
  descriptor: 'We design trips. We build experiences. And we stay on the other end to make them happen.',
  desde: 2009,
}

/* --------------------------------------------------------------------------
   Navigation
   -------------------------------------------------------------------------- */

export const MENU = [
  { texto: 'Home', a: ruta('inicio') },
  { texto: 'Routes', a: ruta('rutas') },
  { texto: 'Travelers', a: ruta('viajeros') },
  { texto: 'Agencies', a: ruta('agencias') },
  { texto: 'Our story', a: ruta('historia') },
  { texto: 'Contact', a: ruta('contacto') },
]

export const CTA = {
  viajero: { texto: 'I want to design my trip', a: `${ruta('contacto')}?perfil=viajero#formulario` },
  agencia: { texto: "Let's talk about your agency", a: `${ruta('contacto')}?perfil=agencia` },
  agenciasPagina: { texto: 'For agencies', a: ruta('agencias') },
  hablar: { texto: 'Talk to us', a: ruta('contacto') },
  rutas: { texto: 'See our routes', a: ruta('rutas') },
  historia: { texto: 'Read our story', a: ruta('historia') },
  chigaga: { texto: 'Discover Erg Chigaga', a: ruta('desiertos') },
}

/* --------------------------------------------------------------------------
   UI: interface text that doesn't belong to any one page's content.
   -------------------------------------------------------------------------- */

export const UI = {
  comun: {
    saltarContenido: 'Skip to content',
    ergChigagaOMerzouga: 'Erg Chigaga or Merzouga?',
    soyAgencia: "I'm an agency",
    escribirWhatsapp: 'Message us on WhatsApp',
    contactarPorWhatsapp: 'Contact us on WhatsApp',
    mensajeWhatsappGenerico: "Hi, I'm writing from the Sahara Bless Travel website.",
    mensajeWhatsappRuta: (nombre) => `Hi, I'm interested in the ${nombre} route.`,
  },

  notFound: {
    tituloPagina: 'Page not found · Sahara Bless Travel',
    eyebrow: 'Error 404',
    titulo: "This path doesn't lead anywhere",
    texto: "The page you're looking for doesn't exist or has moved. Let's start again from the top.",
    boton: 'Back to home',
  },

  cabecera: {
    cerrarMenu: 'Close menu',
    abrirMenu: 'Open menu',
  },

  pie: {
    navegar: 'Browse',
    hablarConNosotros: 'Talk to us',
    soyUnaAgencia: "I'm an agency",
    whatsapp: 'WhatsApp',
    copyright: (anyo) => `© ${anyo} Sahara Bless Travel. Our own photographs, taken in Morocco.`,
  },

  viajeros: {
    heroCta: 'Design my trip',
    mapaPie: 'The tracks of the south, drawn by hand.',
    campamentoPie: 'The Erg Chigaga camp, late in the day.',
  },

  agencias: {
    creamosYCoordinamos: 'We create and coordinate',
    chigagaPie: 'Erg Chigaga, at nightfall.',
  },

  historia: {
    encuentroAriaLabel: 'How we met',
    compromisoAriaLabel: 'Our commitment',
  },

  desiertos: {
    campamentoAbdoulPie: "Abdoul's camp, in Erg Chigaga.",
    cierreTitulo: 'Tell us how you want to travel',
    cierreTexto: "And we'll tell you which one we'd choose.",
  },

  ruta: {
    quieroEstaRuta: 'I want this route',
    itinerarioTitulo: 'The itinerary, day by day',
    comoEsElDia: 'What the day looks like',
    preguntaIntermedia: 'Can you picture yourself on this route?',
    laHacemosATuManera: 'Shall we make it yours?',
    hablemosDeEstaRuta: "Let's talk about this route",
    paraAgencias: 'For agencies',
    eresAgencia: 'Are you an agency?',
    ofrecelaATusClientes:
      'Offer it to your clients or use it as a starting point. We take care of the design and the local operation.',
    quieroOfrecerEstaRuta: 'I want to offer this route to my clients',
    verCincoRutas: 'See all five routes',
    sufijoTitulo: 'through Morocco',
    rutaNoEncontrada: 'Route not found',
  },

  contacto: {
    agenciasEtiqueta: 'Agencies',
    viajerosEtiqueta: 'Travelers',
    preRuta: "You're writing about ",
    posRuta: ". We'll keep that in mind.",
    graciasTitulo: "Thank you. We've got it.",
    respuestaPrefijo: "We'll get back to you",
    respuestaAgencia: 'to set up a first call',
    respuestaViajero: 'with some first ideas for your trip',
    avisoTecnicoEtiqueta: 'Technical note:',
    avisoTecnicoTexto:
      "this form doesn't have a destination configured yet. It's missing the email or the service the messages should reach.",
    escribirOtroMensaje: 'Write another message',
    legendSoy: 'I am',
    opcionViajero: 'A traveler',
    opcionAgencia: 'An agency',
    labelNombre: 'Name',
    obligatorio: '(required)',
    errorNombre: 'We need to know your name.',
    errorContactoVacio: 'Leave us an email or a WhatsApp number so we can get back to you.',
    errorContactoInvalido: "Something's missing: write a full email address or phone number.",
    labelAgencia: 'Agency',
    labelWeb: 'Website',
    labelEmailWhatsapp: 'Email or WhatsApp',
    ayudaContacto: "Whatever's easiest for you. We only use it to reply.",
    labelTipoClientes: 'Type of clients',
    placeholderTipoClientes: 'Families, private groups, retreats, incentives…',
    labelQueBuscas: 'What are you looking for in a partner in Morocco?',
    labelCuando: 'When would you like to travel?',
    placeholderCuando: 'October, spring…',
    labelDuracion: 'Approximate length',
    placeholderDuracion: '8 days, two weeks…',
    labelConQuien: 'Who are you traveling with?',
    placeholderConQuien: 'As a couple, with family, a group of six…',
    labelQueVivir: 'What would you like to experience?',
    submitAgencia: 'Request a call',
    submitViajero: 'Start designing my trip',
    whatsappSinConfigurarPrefijo: "The WhatsApp number isn't set up on the site yet. It turns on by filling in",
    whatsappSinConfigurarEn: 'in',
    porCorreo: 'Or by email:',
  },
}

/* --------------------------------------------------------------------------
   <title> / meta description for each page
   -------------------------------------------------------------------------- */

export const TITULOS = {
  inicio: {
    title: 'Sahara Bless Travel · Local partner in Morocco for agencies',
    description:
      "We design and operate private trips through Morocco since 2009, with Erg Chigaga as our home territory. A local partner for agencies, and tailor-made trips for independent travelers.",
  },
  rutas: {
    title: 'Routes through Morocco · Sahara Bless Travel',
    description:
      'Five routes through Morocco as a starting point: desert, Atlantic coast, oases, imperial cities and the Atlas mountains. All of them adaptable.',
  },
  viajeros: {
    title: 'Tailor-made trips through Morocco · Sahara Bless Travel',
    description:
      "You don't have to fit a fixed circuit. We design the trip around you, with real knowledge of the ground and people we actually know.",
  },
  agencias: {
    title: 'Local partner in Morocco for agencies · Sahara Bless Travel',
    description:
      'We design and operate trips in Morocco as an extension of your team. We know Erg Chigaga from the inside. Working together since 2009.',
  },
  historia: {
    title: 'Our story · Sahara Bless Travel',
    description:
      "It all started in the Sahara more than 18 years ago. Xènia and Abdoul: two ways of seeing Morocco, and the Ouarzazate bazaar where they met — today, the agency.",
  },
  desiertos: {
    title: 'Erg Chigaga or Merzouga? · Sahara Bless Travel',
    description:
      "Two deserts, two ways of experiencing the Sahara. We help you choose the one that fits your trip, instead of always selling you the same one.",
  },
  contacto: {
    title: "Let's talk about Morocco · Sahara Bless Travel",
    description:
      "Write to us. If you're an agency, let's talk about working together. If you're traveling, we'll start designing your trip. You don't need to have it all figured out.",
  },
}

/* --------------------------------------------------------------------------
   Home
   -------------------------------------------------------------------------- */

export const INICIO = {
  hero: {
    marca: 'Sahara Bless Travel',
    confirmacion: 'Local partner for travel agencies',
    titulo: [
      "Your clients won't remember a route.",
      'They will remember how they experienced Morocco.',
    ],
    foto: FOTOS.campamentoDron,
    cta: CTA.agencia,
    enlace: {
      texto: 'Traveling on your own? Discover our private trips',
      a: CTA.viajero.a,
    },
    tira: 'Since 2009 · Erg Chigaga · Private trips · Local partner in Morocco',
  },

  problema: {
    titulo: "Your reputation travels with your clients too.",
    texto: [
      "When an agency sells Morocco, it isn't handing over an itinerary. It's making a promise: that everything has been thought through, that the trip will make sense, and that someone will be able to respond when it's needed.",
      'We design and operate private trips through Morocco, with Erg Chigaga as our home territory and a local team you can rely on, on the ground.',
    ],
  },

  manifiesto: {
    titulo: ["It's not only about where you go.", "It's about how you live it."],
    texto: [],
    remate: "Authentic doesn't mean giving up comfort.",
    foto: FOTOS.familiaDuna,
    pie: 'At the end of the day, on top of a dune.',
    fotoPlena: FOTOS.teSobreLaDuna,
    piePlena: "Some experiences don't need to be rushed.",
  },

  pilares: {
    titulo: 'Working with us',
    foto: FOTOS.equipoVehiculos,
    pie: 'The team, before heading out to the desert.',
    lista: [
      {
        titulo: 'Private operation',
        texto: 'Every trip is run for one specific group, never mixed with other travelers.',
      },
      {
        titulo: 'Knowledge of the territory',
        texto: 'Erg Chigaga and southern Morocco, from a direct relationship with the land.',
      },
      {
        titulo: 'Flexibility',
        texto: "Every experience is adapted to each agency's profile and clients.",
      },
      {
        titulo: 'A single point of contact',
        texto: 'Close coordination before and throughout the operation in destination.',
      },
      {
        titulo: 'White-label operation',
        texto:
          "Documentation and communication with the traveler can carry your agency's own brand: we operate in destination without appearing to your client. The vehicles and the camp keep their own name.",
      },
    ],
  },

  chigaga: {
    etiqueta: 'Erg Chigaga',
    titulo: 'A different way into the Sahara.',
    texto: [
      'Erg Chigaga is our home territory: a remote landscape, a private operation and an experience built for agencies that want to stand apart from conventional tourism.',
    ],
    lista: [
      'Private 4x4 access.',
      'Our own camp among the dunes.',
      'No operations shared with other groups.',
      'Limited capacity.',
      'An experience that adapts to each agency.',
    ],
    foto: FOTOS.jaimasNegras,
  },

  comoTrabajamos: {
    titulo:
      'You look after your clients before the trip. We look after them once they land in Morocco.',
    pasos: [
      "Tell us about your agency's profile and the group.",
      'We design or adapt the proposal.',
      'We coordinate the operation in destination.',
    ],
    cta: CTA.agencia,
  },

  particulares: {
    titulo: 'Traveling on your own?',
    texto:
      'We also design private trips for people who want to get to know Morocco with time, judgement and local support.',
    cta: { texto: 'Design my trip', a: CTA.viajero.a },
  },

  dosMiradas: {
    titulo: 'Two ways of knowing the same territory.',
    foto: FOTOS.abdoulYXenia,
    lista: [
      { nombre: 'Xènia', texto: 'Experience design, the traveler’s point of view, and coordination.' },
      {
        nombre: 'Abdoul',
        texto: 'Direct knowledge of the south, local relationships and operation on the ground.',
      },
    ],
  },

  cierre: {
    foto: FOTOS.stockDunaAmanecer,
    remateTitulo: ['If your agency wants to offer', 'a different Morocco, let’s talk.'],
    remateTexto: 'Tell us what kind of travelers you work with and what experience you want to build.',
    cta: CTA.agencia,
    enlaceSecundario: { texto: "I'm traveling on my own", a: CTA.viajero.a },
  },
}

/* --------------------------------------------------------------------------
   Routes (index)
   -------------------------------------------------------------------------- */

export const RUTAS_INDICE = {
  etiqueta: 'Routes through Morocco',
  titulo: 'Five ways into Morocco',
  entradilla: [
    "We don't all travel looking for the same thing.",
    'Five starting points for discovering Morocco. Which one is yours?',
  ],
  foto: FOTOS.carreteraHamada,
  adaptacion: {
    titulo: 'Your trip, your way',
    texto: [
      'We adapt the route, length, places to stay and experiences to your time and your way of traveling. Or we build a new itinerary from scratch.',
    ],
  },
  ayuda: {
    titulo: "Not sure which one to pick?",
    texto: "Tell us what you're looking for and we'll help you find it.",
  },
}

/* --------------------------------------------------------------------------
   Travelers
   -------------------------------------------------------------------------- */

export const VIAJEROS = {
  hero: {
    etiqueta: 'Travelers',
    titulo: 'Morocco, your way',
    subtitulo: "You don't have to fit a fixed circuit. We design the trip around you.",
    foto: FOTOS.valleAtlasNieve,
  },
  intro: [
    'Tell us what you’re looking for. We bring the country, the people and the places we’ve known for years.',
  ],
  motivaciones: {
    titulo: 'What would you like to experience?',
    lista: [
      {
        titulo: 'Traveling as a family',
        texto: 'Comfortable, authentic and made to enjoy together.',
        foto: FOTOS.familiaDuna,
      },
      {
        titulo: 'Getting to know the Sahara',
        texto: 'Dunes, silence and nights under the stars.',
        foto: FOTOS.dunasChigaga,
      },
      {
        titulo: 'Sea and mountains',
        texto: 'Essaouira, the Atlas, and time to slow down.',
        foto: FOTOS.playaSidiKaouki,
      },
      {
        titulo: 'Discovering Morocco’s cultural side',
        texto: 'Medinas, kasbahs, markets and imperial cities.',
        foto: FOTOS.stockTintesCubas,
      },
      {
        titulo: 'Celebrating something special',
        texto: 'Honeymoons, anniversaries, birthdays.',
        foto: FOTOS.mesaParaDos,
      },
      {
        titulo: 'Building your own route',
        texto: "Whether you know what you want or not, we design it with you.",
        foto: FOTOS.carreteraHamada,
      },
    ],
  },
  caminos: {
    titulo: 'Get inspired before you start',
    inspirar: {
      pregunta: 'Want some inspiration?',
      texto: 'Five different ways to travel through Morocco.',
      cta: CTA.rutas,
    },
    conocernos: {
      pregunta: 'Want to get to know us?',
      texto: 'How it all started, more than 18 years ago.',
      cta: CTA.historia,
    },
  },
  cita: {
    titulo: ["Morocco doesn't end", 'when the trip does.'],
    texto: 'We want you to come home feeling this territory is a little bit yours.',
  },
  anticircuito: {
    titulo: "We don't sell closed-off trips",
    texto: [
      'We can change anything: length, pace, places to stay, experiences.',
    ],
  },
  chigaga: {
    etiqueta: 'Morocco from the inside',
    titulo: 'Erg Chigaga',
    texto: [
      'Abdoul was born in the Sahara and today runs his own camp in Erg Chigaga. That’s how we can take you further than just a route.',
    ],
    foto: FOTOS.campamentoAlfombras,
  },
  cierre: {
    titulo: "Not sure where to start?",
    texto: [
      'Tell us when you want to travel, with whom, and what you’d like to discover. We take it from there.',
    ],
  },
}

/* --------------------------------------------------------------------------
   Agencies (the whole B2B lane)
   -------------------------------------------------------------------------- */

export const AGENCIAS = {
  hero: {
    etiqueta: 'For agencies',
    titulo: ['You know your clients.', 'We know Morocco.'],
    subtitulo: 'A local partner you can trust in Morocco.',
    texto: [
      'We work as an extension of your team.',
    ],
    foto: FOTOS.stockColinasDoradas,
  },

  comoTrabajamos: {
    titulo: ['Your agency.', 'Our team in Morocco.'],
    texto: [
      'You keep the relationship with the client. I design the trip with you; our local team makes it happen on the ground.',
    ],
    creamos: 'Tailor-made trips · Private groups · Retreats · Incentives · Honeymoons · Special experiences',
    remate: "Adapted to your travelers and your budget.",
    foto: FOTOS.equipoVehiculos,
  },

  garantias: {
    titulo: 'What can you expect from us?',
    lista: [
      {
        icono: 'equipo',
        titulo: 'A local team that knows the ground',
        texto: 'Years traveling Morocco with local collaborators.',
      },
      {
        icono: 'flexibilidad',
        titulo: 'Real flexibility',
        texto: 'Routes, stays and experiences adapted to each group.',
      },
      {
        icono: 'comunicacion',
        titulo: 'Direct communication',
        texto: 'A close contact with me before, during and after the trip.',
      },
      {
        icono: 'terreno',
        titulo: 'Local knowledge',
        texto: "We don't work Morocco out of a catalogue.",
      },
      {
        icono: 'cuidado',
        titulo: 'Care for your clients',
        texto: 'When your client travels, your reputation travels too.',
      },
    ],
  },

  chigaga: {
    etiqueta: 'Erg Chigaga',
    titulo: 'A desert we know from the inside',
    texto: [
      'Abdoul was born in the Sahara and lived among the dunes until he was seven. Today he runs his own camp in Erg Chigaga.',
    ],
    foto: FOTOS.campamentoHoraAzul,
  },

  perfiles: {
    titulo: 'Trips built for every client',
    lista: [
      { titulo: 'Families', texto: 'Comfortable pace, adapted to every age.' },
      { titulo: 'Private groups', texto: 'Designed around each group.' },
      { titulo: 'Retreats', texto: 'Logistics for those who build their own experiences.' },
      { titulo: 'Incentives and corporate', texto: 'Programs for teams and corporate clients.' },
      { titulo: 'Honeymoons and celebrations', texto: 'Built around meaningful moments.' },
      { titulo: 'Tailor-made trips', texto: "What you won't find on any fixed circuit." },
    ],
  },

  desde2009: {
    titulo: 'A relationship built since 2009',
    texto: [
      "Xènia and Abdoul have worked together since 2009. Today that knowledge and that trust are at your agency's service.",
    ],
    foto: FOTOS.abdoulYXenia,
    pie: 'Xènia and Abdoul, in southern Morocco.',
  },

  reputacion: {
    titulo: 'Your clients are in good hands',
    texto: [
      "When you trust us with a trip, you're trusting us with your reputation. I stay in touch with you throughout the whole process.",
    ],
    remate: "You stay the agency. We're your team on the ground.",
  },

  cierre: {
    titulo: "Shall we talk?",
    texto: [
      'The first conversation is just to get to know each other.',
    ],
    foto: FOTOS.cuatroPorCuatro,
  },
}

/* --------------------------------------------------------------------------
   Our story
   -------------------------------------------------------------------------- */

export const HISTORIA = {
  hero: {
    etiqueta: 'Our story',
    titulo: 'It all started in the Sahara',
    foto: FOTOS.dunasErgChebbi,
  },
  encuentro: {
    texto: [
      'More than 18 years ago, Xènia arrived in southern Morocco for the first time and met Abdoul.',
      'He had been born in the Sahara. She had just found a place she wanted to keep coming back to.',
    ],
    foto: FOTOS.abdoulYXenia,
    pie: 'Xènia and Abdoul, in southern Morocco.',
  },

  voces: {
    titulo: 'Two points of view',
    lista: [
      {
        nombre: 'Xènia',
        mirada: 'The view of someone who arrived',
        registro: 'vision',
        foto: FOTOS.retratoDunas,
        texto: [
          "I arrived in southern Morocco more than eighteen years ago and I haven't stopped coming back. I still find myself surprised.",
          "My job is to design every trip so that surprise reaches whoever lives it intact, without leaving anything to chance.",
        ],
      },
      {
        nombre: 'Abdoul',
        mirada: 'The view of someone born here',
        registro: 'terreno',
        foto: FOTOS.cuatroPorCuatroLlanura,
        texto: [
          "I was born in the Sahara and lived among the dunes until I was seven. I know this territory because I grew up in it, not because I studied it.",
          'I know which paths to take and which families really open their home to you. That’s not in any guidebook.',
          'Today I have my own camp in Erg Chigaga.',
        ],
      },
    ],
  },

  hitos: [
    {
      titulo: 'Together since 2009',
      texto: [
        'In 2009 we started working together. For years we created and coordinated trips, groups and retreats in Morocco for others.',
        'That’s how we learned the way we like to welcome people: with warmth, with care, sharing a table and a tea.',
      ],
      foto: FOTOS.equipoTe,
      pie: 'Tea, freshly served, in the south.',
    },
    {
      titulo: 'Back to where it all began',
      texto: [
        'We met in a bazaar in Ouarzazate, "the city of silence".',
        'Today that same bazaar is the Sahara Bless Travel agency.',
      ],
      foto: FOTOS.oasisFint,
      pie: 'The south, near Ouarzazate.',
    },
  ],

  compromiso: [
    'Two ways of looking at the same territory.',
    'One single commitment: that whoever travels with us feels it as their own.',
  ],

  cierre: {
    titulo: ['Now you know our story.', 'Will you let us be part of yours?'],
    cta: { texto: 'I want to discover Morocco with you', a: CTA.viajero.a },
    foto: FOTOS.campamentoHoraAzul,
  },
}

/* --------------------------------------------------------------------------
   Erg Chigaga or Merzouga
   -------------------------------------------------------------------------- */

export const DESIERTOS = {
  hero: {
    etiqueta: 'A hand deciding',
    titulo: 'Erg Chigaga or Merzouga?',
    subtitulo: 'Two deserts. Two ways of experiencing the Sahara.',
    foto: FOTOS.dunasErgChebbi,
  },
  intro: [
    'Erg Chebbi, in Merzouga, or Erg Chigaga, in the south. The journey, the landscape and the way you experience them all change.',
  ],
  merzouga: {
    etiqueta: 'Erg Chebbi · Merzouga',
    titulo: 'The more accessible desert',
    texto: [
      'To the east, right off the road and with plenty of places to stay. It fits well with a route through Fez or the Dades valley.',
    ],
    encaje: 'This can be a good fit if you’re looking for:',
    lista: [
      'easier access',
      'a wider choice of places to stay',
      'combining it with a route through the east',
      'more activities and services',
    ],
    foto: FOTOS.dunasErgChebbi,
  },
  chigaga: {
    etiqueta: 'Erg Chigaga',
    titulo: 'The more remote Sahara',
    texto: [
      'To the south, near M’Hamid. You get there by 4x4, leaving the paved road behind.',
    ],
    encaje: 'This can be a good fit if you’re looking for:',
    lista: [
      'a stronger sense of isolation',
      'silence and space',
      'a less-traveled desert',
      'a closer connection to Saharan life',
    ],
    foto: FOTOS.cuatroPorCuatro,
  },
  importa: {
    etiqueta: 'And here’s something that matters to us',
    titulo: "Erg Chigaga isn't just a destination we know",
    texto: [
      'Abdoul was born in the Sahara and runs his own camp in Erg Chigaga. There, we’re not just organizing one night: we know its paths and its people.',
    ],
    foto: FOTOS.campamentoJaimas,
  },
  veredicto: {
    pregunta: 'So, which one is better?',
    titulo: "There isn’t a better one. There’s one that fits your trip better.",
    texto: [
      'For Fez and the east, Merzouga. For the south, with space and a remote desert, Erg Chigaga.',
      'Still unsure? Tell us how you want to travel.',
    ],
    cta: { texto: 'I want to know which one fits my trip', a: CTA.viajero.a },
  },
}

/* --------------------------------------------------------------------------
   Contact
   -------------------------------------------------------------------------- */

export const CONTACTO = {
  hero: {
    etiqueta: 'Contact',
    titulo: "Let's talk about Morocco",
  },
  agencia: {
    pregunta: 'Are you an agency looking for a local partner you can trust?',
    texto: [
      'We design and coordinate trips with our local team, adapted to your clients.',
    ],
    cta: 'Talk about working together',
  },
  viajero: {
    pregunta: 'Thinking about traveling to Morocco?',
    texto: [
      "You don't need to have it decided. Tell us when, with whom, and what you'd like to experience.",
    ],
    cta: 'Design my trip',
  },
  formulario: {
    titulo: "Tell us what's on your mind",
    entradilla: 'A first message is enough.',
  },
  whatsapp: {
    titulo: 'Prefer to talk directly?',
    texto: 'You can also write to us on WhatsApp.',
  },
}
