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
  { texto: 'Erg Chigaga or Merzouga?', a: ruta('desiertos') },
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
    idealEtiqueta: 'This route is ideal if…',
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
    texto: [
      'Morocco can be explored in many ways. We prefer to do it with time to look, to learn and to connect.',
      'From Marrakech and the imperial cities to the villages of the Atlas, the oases, the kasbahs, the coast and the Sahara.',
    ],
    remate: "Authentic doesn't mean giving up comfort. It means feeling well looked after while you discover.",
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
      "You want to get to know Morocco in a different way, but you're not quite sure how to shape it. We help you create a trip that makes sense for you.",
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
  titulo: 'Five ways to discover Morocco.',
  entradilla: [
    "We don't all travel looking for the same thing. Some want to lose themselves among the medinas and the desert. Others prefer the Atlantic coast, the mountains, or traveling slowly.",
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
    'Maybe you want to see Marrakech and the desert. Maybe travel as a family, celebrate something special, or simply discover Morocco without rushing.',
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
        texto: 'Dunes, silence, nights under the stars, and Erg Chigaga from the inside.',
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
        texto: 'Honeymoons, anniversaries, birthdays, or simply a trip to remember.',
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
      texto: "Maybe you already know what kind of trip you're after. Maybe you're still exploring. Our routes are a good place to start.",
      cta: CTA.rutas,
    },
    conocernos: {
      pregunta: 'Want to get to know us?',
      texto:
        "If you'd like to get to know us a little before traveling with us, we'll tell you how our story began more than 18 years ago, and why Morocco is part of our lives.",
      cta: CTA.historia,
    },
  },
  cita: {
    titulo: ["Morocco doesn't end", 'when the trip does.'],
    texto: [
      'We want you to come home with more than just photographs.',
      'With places you remember. People you remember. Moments you didn’t expect.',
      'And maybe, as it happened to us, with the wish to come back.',
    ],
  },
  anticircuito: {
    titulo: "We don't sell closed-off trips",
    texto: [
      "We have routes for those who'd rather start from an itinerary that's already been thought through. But we can also change everything: the length, the pace, the places to stay, the transport and the experiences.",
      "Because a tailor-made trip shouldn't just mean swapping one excursion for another. It should feel like it was made for you.",
    ],
  },
  chigaga: {
    etiqueta: 'Morocco from the inside',
    titulo: 'Erg Chigaga',
    texto: [
      'Abdoul was born in the Sahara and lived there during his first years of life. Today he runs his own camp in Erg Chigaga. Xènia has spent more than 18 years returning to the desert alongside him.',
      "That's why we can take you far beyond a route: to places and ways of experiencing Morocco that are part of our own path.",
    ],
    foto: FOTOS.stockCampamentoNoche,
  },
  cierre: {
    titulo: "Not sure where to start?",
    texto: [
      "That's alright. Tell us when you want to travel, with whom, and what you'd like to discover. From there, we start building.",
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
        texto:
          "We don't work Morocco out of a catalogue. We know the places, the distances, the pace of things, and above all, the people who make every experience possible.",
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
      'We can design trips across all of Morocco. But there is one place we know in an especially deep way.',
      'Abdoul was born in the Sahara and lived among the dunes and nomadic communities until he was seven. The desert is part of his history and of the way he understands the land. Today he runs his own camp in Erg Chigaga.',
      "That's why, when we take your clients there, we're not simply following a route. We're bringing them to a place we know from the inside. And that difference is felt.",
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
      'Sahara Bless Travel grew out of a relationship that began long before the agency did. Xènia and Abdoul started working together in 2009.',
      "Over all these years we've built something you won't find in a catalogue: knowledge, relationships and trust.",
      'Today we put that whole journey at the service of your agency.',
    ],
    foto: FOTOS.abdoulYXenia,
    pie: 'Xènia and Abdoul, in southern Morocco.',
  },

  reputacion: {
    titulo: 'Your clients are in good hands',
    texto: [
      "When you trust us with a trip, you're trusting us with your reputation. Our relationship doesn't start when the group lands in Morocco: I'm in touch with you throughout the whole process, and connected with our local team for as long as the trip lasts.",
    ],
    remate: "You stay the agency. We're your team on the ground.",
  },

  cierre: {
    titulo: "Shall we talk?",
    texto: [
      "Tell us what kind of trips you organize, what your clients are looking for, and what you need from your partner in Morocco. You don't need to have a closed project: the first conversation is simply to get to know each other.",
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
  // BORRADOR: pendiente de validación de Xènia y Abdoul, no publicar en main
  encuentro: {
    texto: [
      'More than 18 years ago, Xènia arrived in southern Morocco for the first time and met Abdoul.',
      'He had been born in the Sahara. She had just found a place she wanted to keep coming back to.',
    ],
    foto: FOTOS.abdoulYXenia,
    pie: 'Xènia and Abdoul, in southern Morocco.',
  },

  // BORRADOR: pendiente de validación de Xènia y Abdoul, no publicar en main
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
    // BORRADOR: pendiente de validación de Xènia y Abdoul, no publicar en main
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
        'The bazaar in Ouarzazate where we met for the first time.',
        'Ouarzazate means "the city of silence." And perhaps no place could be more ours.',
        'That is where our story began. That is where we shared so many teas, conversations and silences. And many years later, that same place brought us back together.',
        "We didn't choose it the way you'd choose an office. It felt like the place that had brought us together once, and was now choosing us again.",
        'And so it was. Today, that same bazaar is the Sahara Bless Travel agency. The place where we met became the place from which we started building this new chapter together.',
      ],
      foto: FOTOS.oasisFint,
      pie: 'The south, near Ouarzazate.',
    },
  ],

  // BORRADOR: pendiente de validación de Xènia y Abdoul, no publicar en main
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
    "If you're planning a trip to Morocco, you'll probably come across two names: Erg Chebbi, in Merzouga, and Erg Chigaga, in the south. The journey, the landscape and the way you experience them all change.",
    "Which one fits you better? We'll help you choose.",
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
      "Erg Chigaga lies in southern Morocco, near M'Hamid. To reach the great dunes you have to leave the paved road behind and cross the desert by 4x4. And that's perhaps where the experience truly begins.",
      "Along the way you'll pass hamadas, dunes, acacias and open landscapes where the horizon seems endless. There is less infrastructure and less movement.",
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
      'Abdoul was born in the Sahara and spent his first years of life among the dunes and the nomadic communities. Today he runs his own camp in Erg Chigaga. Xènia has spent more than 18 years returning to the desert and traveling through Morocco.',
      "That's why Chigaga holds a special place within Sahara Bless Travel. We don't arrive there simply to organize one night in the desert. We know the land, its paths and the people who are part of it. And that lets us design the experience in a different way.",
    ],
    foto: FOTOS.campamentoJaimas,
  },
  veredicto: {
    pregunta: 'So, which one is better?',
    titulo: "There isn’t a better one. There’s one that fits your trip better.",
    texto: [
      'For Fez and the east, Merzouga. For the south, with space and a remote desert, Erg Chigaga.',
      "Still unsure? That's alright: tell us how you want to travel and we'll tell you which one we'd choose.",
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
      "Maybe you already have a route in mind. Maybe you just know you want to get to know Morocco. We'll help you shape it.",
    ],
    cta: 'Design my trip',
  },
  formulario: {
    titulo: "Tell us what's on your mind",
    entradilla: "You don't need to prepare a briefing or know exactly what you want. A first message is enough.",
  },
  whatsapp: {
    titulo: 'Prefer to talk directly?',
    texto: 'You can also write to us on WhatsApp.',
  },
}
