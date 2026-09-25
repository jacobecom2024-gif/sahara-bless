import { FOTOS } from '../datos/fotos'
import { rutaLocalizada } from './idiomas'

const IDIOMA = 'fr'
const ruta = (clave, param) => rutaLocalizada(clave, IDIOMA, param)

/**
 * Contenu en français. Même structure que contenido.es.js — voir ce fichier
 * pour les commentaires structurels. Ce n'est pas une traduction littérale :
 * on garde le ton de la marque (chaleureux, éditorial, ancré dans le
 * concret — jamais le registre du "luxe" ou du "prestige") et on retravaille
 * les phrases qui sonneraient raides traduites mot à mot.
 *
 * Priorité pour cette livraison (2026-09-26) : c'est la version qu'Abdoul va
 * relire en premier.
 */

/* --------------------------------------------------------------------------
   Marque
   -------------------------------------------------------------------------- */

export const MARCA = {
  nombre: 'Sahara Bless Travel',
  territorio: 'Maroc · Espagne',
  descriptor: 'Nous concevons des voyages. Nous construisons des expériences. Et nous restons présents pour que tout se passe bien.',
  desde: 2009,
}

/* --------------------------------------------------------------------------
   Navigation
   -------------------------------------------------------------------------- */

export const MENU = [
  { texto: 'Accueil', a: ruta('inicio') },
  { texto: 'Itinéraires', a: ruta('rutas') },
  { texto: 'Voyageurs', a: ruta('viajeros') },
  { texto: 'Agences', a: ruta('agencias') },
  { texto: 'Notre histoire', a: ruta('historia') },
  { texto: 'Contact', a: ruta('contacto') },
]

export const CTA = {
  viajero: { texto: 'Je veux concevoir mon voyage', a: `${ruta('contacto')}?perfil=viajero#formulario` },
  agencia: { texto: 'Parlons de votre agence', a: `${ruta('contacto')}?perfil=agencia` },
  agenciasPagina: { texto: 'Pour les agences', a: ruta('agencias') },
  hablar: { texto: 'Nous contacter', a: ruta('contacto') },
  rutas: { texto: 'Voir nos itinéraires', a: ruta('rutas') },
  historia: { texto: 'Découvrir notre histoire', a: ruta('historia') },
  chigaga: { texto: 'Découvrir Erg Chigaga', a: ruta('desiertos') },
}

/* --------------------------------------------------------------------------
   UI : textes d'interface qui n'appartiennent au contenu d'aucune page.
   -------------------------------------------------------------------------- */

export const UI = {
  comun: {
    saltarContenido: 'Aller au contenu',
    ergChigagaOMerzouga: 'Erg Chigaga ou Merzouga ?',
    soyAgencia: 'Je suis une agence',
    escribirWhatsapp: 'Écrire sur WhatsApp',
    contactarPorWhatsapp: 'Nous contacter sur WhatsApp',
    mensajeWhatsappGenerico: "Bonjour, je vous écris depuis le site de Sahara Bless Travel.",
    mensajeWhatsappRuta: (nombre) => `Bonjour, l'itinéraire ${nombre} m'intéresse.`,
  },

  notFound: {
    tituloPagina: 'Page introuvable · Sahara Bless Travel',
    eyebrow: 'Erreur 404',
    titulo: 'Ce chemin ne mène nulle part',
    texto: "La page que vous cherchez n'existe pas ou a changé d'adresse. Revenons au début.",
    boton: "Retour à l'accueil",
  },

  cabecera: {
    cerrarMenu: 'Fermer le menu',
    abrirMenu: 'Ouvrir le menu',
  },

  pie: {
    navegar: 'Navigation',
    hablarConNosotros: 'Nous contacter',
    soyUnaAgencia: 'Je suis une agence',
    whatsapp: 'WhatsApp',
    copyright: (anyo) => `© ${anyo} Sahara Bless Travel. Photographies personnelles, prises au Maroc.`,
  },

  viajeros: {
    heroCta: 'Concevoir mon voyage',
    mapaPie: 'Les pistes du sud, dessinées à la main.',
    campamentoPie: "Le campement d'Erg Chigaga, en fin de journée.",
  },

  agencias: {
    creamosYCoordinamos: 'Nous créons et coordonnons',
    chigagaPie: 'Erg Chigaga, à la tombée de la nuit.',
  },

  historia: {
    encuentroAriaLabel: 'La rencontre',
    compromisoAriaLabel: 'Notre engagement',
  },

  desiertos: {
    campamentoAbdoulPie: "Le campement d'Abdoul, à Erg Chigaga.",
    cierreTitulo: 'Dites-nous comment vous voulez voyager',
    cierreTexto: 'Et nous vous dirons lequel nous choisirions.',
  },

  ruta: {
    quieroEstaRuta: 'Je veux cet itinéraire',
    itinerarioTitulo: "L'itinéraire, jour par jour",
    comoEsElDia: 'Comment se déroule la journée',
    preguntaIntermedia: 'Vous vous imaginez sur cet itinéraire ?',
    laHacemosATuManera: 'On le construit à votre façon ?',
    hablemosDeEstaRuta: 'Parlons de cet itinéraire',
    paraAgencias: 'Pour les agences',
    eresAgencia: 'Vous êtes une agence ?',
    ofrecelaATusClientes:
      "Proposez-le à vos clients ou utilisez-le comme point de départ. Nous nous occupons de la conception et de l'opération locale.",
    quieroOfrecerEstaRuta: 'Je veux proposer cet itinéraire à mes clients',
    verCincoRutas: 'Voir les cinq itinéraires',
    sufijoTitulo: 'à travers le Maroc',
    rutaNoEncontrada: 'Itinéraire introuvable',
  },

  contacto: {
    agenciasEtiqueta: 'Agences',
    viajerosEtiqueta: 'Voyageurs',
    preRuta: "Vous nous écrivez au sujet de ",
    posRuta: '. Nous en tenons compte.',
    graciasTitulo: "Merci. C'est noté.",
    respuestaPrefijo: 'Nous vous répondrons',
    respuestaAgencia: 'pour organiser un premier appel',
    respuestaViajero: 'avec de premières idées pour votre voyage',
    avisoTecnicoEtiqueta: 'Note technique :',
    avisoTecnicoTexto:
      "ce formulaire n'a pas encore de destinataire configuré. Il manque l'email ou le service vers lequel les messages doivent arriver.",
    escribirOtroMensaje: 'Écrire un autre message',
    legendSoy: 'Je suis',
    opcionViajero: 'un·e voyageur·se',
    opcionAgencia: 'une agence',
    labelNombre: 'Nom',
    obligatorio: '(obligatoire)',
    errorNombre: 'Nous avons besoin de savoir comment vous vous appelez.',
    errorContactoVacio: 'Laissez-nous un email ou un numéro WhatsApp pour pouvoir vous répondre.',
    errorContactoInvalido: 'Il manque quelque chose : indiquez un email ou un numéro de téléphone complet.',
    labelAgencia: 'Agence',
    labelWeb: 'Site web',
    labelEmailWhatsapp: 'Email ou WhatsApp',
    ayudaContacto: 'Ce qui vous arrange le plus. Nous ne l’utilisons que pour vous répondre.',
    labelTipoClientes: 'Type de clients',
    placeholderTipoClientes: 'Familles, groupes privés, retraites, voyages de motivation…',
    labelQueBuscas: 'Que recherchez-vous chez un partenaire au Maroc ?',
    labelCuando: 'Quand aimeriez-vous voyager ?',
    placeholderCuando: 'Octobre, printemps…',
    labelDuracion: 'Durée approximative',
    placeholderDuracion: '8 jours, deux semaines…',
    labelConQuien: 'Avec qui voyagez-vous ?',
    placeholderConQuien: 'En couple, en famille, un groupe de six…',
    labelQueVivir: 'Qu’aimeriez-vous vivre ?',
    submitAgencia: 'Demander un appel',
    submitViajero: 'Commencer à concevoir mon voyage',
    whatsappSinConfigurarPrefijo: "Le numéro WhatsApp n'est pas encore configuré sur le site. Il s'active en renseignant",
    whatsappSinConfigurarEn: 'dans',
    porCorreo: 'Ou par email :',
  },
}

/* --------------------------------------------------------------------------
   <title> / meta description de chaque page
   -------------------------------------------------------------------------- */

export const TITULOS = {
  inicio: {
    title: 'Sahara Bless Travel · Partenaire local au Maroc pour les agences',
    description:
      "Nous concevons et opérons des voyages privés au Maroc depuis 2009, avec Erg Chigaga comme territoire central. Partenaire local pour les agences, et voyages sur mesure pour les voyageurs indépendants.",
  },
  rutas: {
    title: 'Itinéraires au Maroc · Sahara Bless Travel',
    description:
      "Cinq itinéraires au Maroc comme point de départ : désert, côte atlantique, oasis, villes impériales et montagnes de l'Atlas. Tous adaptables.",
  },
  viajeros: {
    title: 'Voyages sur mesure au Maroc · Sahara Bless Travel',
    description:
      "Vous n'avez pas à vous plier à un circuit tout fait. Nous concevons le voyage autour de vous, avec une vraie connaissance du terrain et des personnes que nous connaissons vraiment.",
  },
  agencias: {
    title: 'Partenaire local au Maroc pour les agences · Sahara Bless Travel',
    description:
      'Nous concevons et opérons des voyages au Maroc comme extension de votre équipe. Nous connaissons Erg Chigaga de l’intérieur. Ensemble depuis 2009.',
  },
  historia: {
    title: 'Notre histoire · Sahara Bless Travel',
    description:
      "Tout a commencé dans le Sahara il y a plus de 18 ans. Xènia et Abdoul : deux regards sur le Maroc, et le bazar d'Ouarzazate où ils se sont rencontrés — aujourd'hui, l'agence.",
  },
  desiertos: {
    title: 'Erg Chigaga ou Merzouga ? · Sahara Bless Travel',
    description:
      "Deux déserts, deux façons de vivre le Sahara. Nous vous aidons à choisir celui qui correspond à votre voyage, sans vous vendre toujours le même.",
  },
  contacto: {
    title: 'Parlons du Maroc · Sahara Bless Travel',
    description:
      "Écrivez-nous. Si vous êtes une agence, parlons d'une collaboration. Si vous voyagez, nous commençons à concevoir votre voyage. Vous n'avez pas besoin d'avoir déjà tout décidé.",
  },
}

/* --------------------------------------------------------------------------
   Accueil
   -------------------------------------------------------------------------- */

export const INICIO = {
  hero: {
    marca: 'Sahara Bless Travel',
    confirmacion: 'Partenaire local pour les agences de voyage',
    titulo: [
      'Vos clients ne se souviendront pas d’un itinéraire.',
      'Ils se souviendront de la façon dont ils ont vécu le Maroc.',
    ],
    foto: FOTOS.campamentoDron,
    cta: CTA.agencia,
    enlace: {
      texto: 'Vous voyagez seul(e) ? Découvrez nos voyages privés',
      a: CTA.viajero.a,
    },
    tira: 'Depuis 2009 · Erg Chigaga · Voyages privés · Partenaire local au Maroc',
  },

  problema: {
    titulo: 'Votre réputation voyage aussi avec vos clients.',
    texto: [
      "Quand une agence vend le Maroc, elle ne remet pas seulement un itinéraire. Elle fait une promesse : que tout a été pensé, que le voyage aura du sens, et qu'il y aura quelqu'un capable de répondre quand ce sera nécessaire.",
      'Nous concevons et opérons des voyages privés au Maroc, avec Erg Chigaga comme territoire central et une équipe locale de confiance sur place.',
    ],
  },

  manifiesto: {
    titulo: ["Il ne s'agit pas seulement d'où vous allez.", "Il s'agit de comment vous le vivez."],
    texto: [],
    remate: "Authentique ne veut pas dire renoncer au confort.",
    foto: FOTOS.familiaDuna,
    pie: "En fin de journée, en haut d'une dune.",
    fotoPlena: FOTOS.teSobreLaDuna,
    piePlena: "Certaines expériences n'ont pas besoin d'être précipitées.",
  },

  pilares: {
    titulo: 'Travailler avec nous',
    foto: FOTOS.equipoVehiculos,
    pie: 'L’équipe, avant de partir vers le désert.',
    lista: [
      {
        titulo: 'Opération privée',
        texto: 'Chaque voyage est organisé pour un groupe précis, jamais mélangé avec d’autres voyageurs.',
      },
      {
        titulo: 'Connaissance du territoire',
        texto: 'Erg Chigaga et le sud du Maroc, depuis une relation directe avec le lieu.',
      },
      {
        titulo: 'Flexibilité',
        texto: "L'expérience s'adapte au profil de chaque agence et de ses clients.",
      },
      {
        titulo: 'Un interlocuteur unique',
        texto: "Une coordination proche avant et pendant l'opération sur place.",
      },
      {
        titulo: 'Opération en marque blanche',
        texto:
          "La documentation et la communication avec le voyageur peuvent porter la marque de votre agence : nous opérons sur place sans apparaître auprès de votre client. Les véhicules et le campement gardent leur propre nom.",
      },
    ],
  },

  chigaga: {
    etiqueta: 'Erg Chigaga',
    titulo: 'Une autre façon d’entrer dans le Sahara.',
    texto: [
      "Erg Chigaga est notre territoire central : un paysage isolé, une opération privée et une expérience pensée pour les agences qui veulent se démarquer du tourisme conventionnel.",
    ],
    lista: [
      'Accès privé en 4x4.',
      'Notre propre campement au milieu des dunes.',
      "Aucune opération partagée avec d'autres groupes.",
      'Capacité limitée.',
      'Une expérience adaptable à chaque agence.',
    ],
    foto: FOTOS.jaimasNegras,
  },

  comoTrabajamos: {
    titulo:
      'Vous prenez soin de vos clients avant le voyage. Nous prenons soin d’eux dès leur arrivée au Maroc.',
    pasos: [
      'Vous nous parlez du profil de votre agence et du groupe.',
      'Nous concevons ou adaptons la proposition.',
      "Nous coordonnons l'opération sur place.",
    ],
    cta: CTA.agencia,
  },

  particulares: {
    titulo: 'Vous voyagez seul(e) ?',
    texto:
      'Nous concevons aussi des voyages privés pour les personnes qui veulent découvrir le Maroc avec du temps, du discernement et un accompagnement local.',
    cta: { texto: 'Concevoir mon voyage', a: CTA.viajero.a },
  },

  dosMiradas: {
    titulo: 'Deux façons de connaître le même territoire.',
    foto: FOTOS.abdoulYXenia,
    lista: [
      { nombre: 'Xènia', texto: "Conception de l'expérience, vision du voyageur et coordination." },
      {
        nombre: 'Abdoul',
        texto: 'Connaissance directe du sud, relations locales et opération sur place.',
      },
    ],
  },

  cierre: {
    foto: FOTOS.stockDunaAmanecer,
    remateTitulo: ['Si votre agence veut proposer', 'un Maroc différent, parlons-en.'],
    remateTexto: 'Dites-nous quel type de voyageurs vous accueillez et quelle expérience vous voulez construire.',
    cta: CTA.agencia,
    enlaceSecundario: { texto: 'Je voyage à titre personnel', a: CTA.viajero.a },
  },
}

/* --------------------------------------------------------------------------
   Itinéraires (index)
   -------------------------------------------------------------------------- */

export const RUTAS_INDICE = {
  etiqueta: 'Itinéraires au Maroc',
  titulo: 'Cinq façons d’entrer au Maroc',
  entradilla: [
    'Nous ne voyageons pas tous en cherchant la même chose.',
    'Cinq points de départ pour découvrir le Maroc. Lequel choisissez-vous ?',
  ],
  foto: FOTOS.carreteraHamada,
  adaptacion: {
    titulo: 'Votre voyage, à votre façon',
    texto: [
      'Nous adaptons le parcours, la durée, les hébergements et les expériences à votre temps et à votre façon de voyager. Ou nous créons un nouvel itinéraire.',
    ],
  },
  ayuda: {
    titulo: 'Vous ne savez pas lequel choisir ?',
    texto: 'Dites-nous ce que vous cherchez et nous vous aidons à le trouver.',
  },
}

/* --------------------------------------------------------------------------
   Voyageurs
   -------------------------------------------------------------------------- */

export const VIAJEROS = {
  hero: {
    etiqueta: 'Voyageurs',
    titulo: 'Le Maroc, à votre façon',
    subtitulo: "Vous n'avez pas à vous plier à un circuit. Nous concevons le voyage autour de vous.",
    foto: FOTOS.valleAtlasNieve,
  },
  intro: [
    'Vous nous dites ce que vous cherchez. Nous apportons le pays, les personnes et les lieux que nous connaissons depuis des années.',
  ],
  motivaciones: {
    titulo: 'Qu’aimeriez-vous vivre ?',
    lista: [
      {
        titulo: 'Voyager en famille',
        texto: 'Confortable, authentique, et fait pour profiter ensemble.',
        foto: FOTOS.familiaDuna,
      },
      {
        titulo: 'Découvrir le Sahara',
        texto: 'Dunes, silence et nuits sous les étoiles.',
        foto: FOTOS.dunasChigaga,
      },
      {
        titulo: 'Mer et montagne',
        texto: 'Essaouira, l’Atlas, et du temps pour ralentir.',
        foto: FOTOS.playaSidiKaouki,
      },
      {
        titulo: 'Découvrir le Maroc le plus culturel',
        texto: 'Médinas, kasbahs, marchés et villes impériales.',
        foto: FOTOS.stockTintesCubas,
      },
      {
        titulo: 'Célébrer un moment particulier',
        texto: 'Lunes de miel, anniversaires, fêtes.',
        foto: FOTOS.mesaParaDos,
      },
      {
        titulo: 'Créer votre propre parcours',
        texto: 'Que vous sachiez déjà ce que vous voulez ou non, nous le concevons avec vous.',
        foto: FOTOS.carreteraHamada,
      },
    ],
  },
  caminos: {
    titulo: 'S’inspirer avant de commencer',
    inspirar: {
      pregunta: 'Envie de vous inspirer ?',
      texto: 'Cinq façons différentes de parcourir le Maroc.',
      cta: CTA.rutas,
    },
    conocernos: {
      pregunta: 'Envie de nous connaître ?',
      texto: 'Comment tout a commencé, il y a plus de 18 ans.',
      cta: CTA.historia,
    },
  },
  cita: {
    titulo: ['Le Maroc ne se termine pas', 'quand le voyage se termine.'],
    texto: 'Nous voulons que vous rentriez en sentant que ce territoire vous appartient un peu.',
  },
  anticircuito: {
    titulo: 'Nous ne vendons pas de voyages figés',
    texto: [
      'Nous pouvons tout changer : durée, rythme, hébergements et expériences.',
    ],
  },
  chigaga: {
    etiqueta: 'Le Maroc de l’intérieur',
    titulo: 'Erg Chigaga',
    texto: [
      'Abdoul est né dans le Sahara et possède aujourd’hui son propre campement à Erg Chigaga. C’est pour cela que nous pouvons vous emmener au-delà d’un simple itinéraire.',
    ],
    foto: FOTOS.campamentoAlfombras,
  },
  cierre: {
    titulo: 'Vous ne savez pas par où commencer ?',
    texto: [
      'Dites-nous quand vous voulez voyager, avec qui et ce que vous aimeriez découvrir. À partir de là, nous commençons.',
    ],
  },
}

/* --------------------------------------------------------------------------
   Agences (tout le volet B2B)
   -------------------------------------------------------------------------- */

export const AGENCIAS = {
  hero: {
    etiqueta: 'Pour les agences',
    titulo: ['Vous connaissez vos clients.', 'Nous connaissons le Maroc.'],
    subtitulo: 'Un partenaire local de confiance au Maroc.',
    texto: [
      'Nous travaillons comme une extension de votre équipe.',
    ],
    foto: FOTOS.stockColinasDoradas,
  },

  comoTrabajamos: {
    titulo: ['Votre agence.', 'Notre équipe au Maroc.'],
    texto: [
      'Vous gardez la relation avec le client. Je conçois le voyage avec vous ; notre équipe locale le fait fonctionner sur le terrain.',
    ],
    creamos: 'Voyages sur mesure · Groupes privés · Retraites · Voyages de motivation · Lunes de miel · Expériences spéciales',
    remate: 'Adapté à vos voyageurs et à votre budget.',
    foto: FOTOS.equipoVehiculos,
  },

  garantias: {
    titulo: 'Que pouvez-vous attendre de nous ?',
    lista: [
      {
        icono: 'equipo',
        titulo: 'Une équipe locale qui connaît le terrain',
        texto: 'Des années à parcourir le Maroc avec des collaborateurs locaux.',
      },
      {
        icono: 'flexibilidad',
        titulo: 'Une vraie flexibilité',
        texto: 'Itinéraires, hébergements et expériences adaptés à chaque groupe.',
      },
      {
        icono: 'comunicacion',
        titulo: 'Une communication directe',
        texto: 'Un contact proche avec moi avant, pendant et après le voyage.',
      },
      {
        icono: 'terreno',
        titulo: 'Une connaissance locale',
        texto: 'Nous ne travaillons pas le Maroc depuis un catalogue.',
      },
      {
        icono: 'cuidado',
        titulo: 'Le soin apporté à vos clients',
        texto: 'Quand votre client voyage, votre réputation voyage aussi.',
      },
    ],
  },

  chigaga: {
    etiqueta: 'Erg Chigaga',
    titulo: 'Un désert que nous connaissons de l’intérieur',
    texto: [
      "Abdoul est né dans le Sahara et a vécu parmi les dunes jusqu'à l'âge de sept ans. Il possède aujourd'hui son propre campement à Erg Chigaga.",
    ],
    foto: FOTOS.campamentoHoraAzul,
  },

  perfiles: {
    titulo: 'Des voyages pensés pour chaque client',
    lista: [
      { titulo: 'Familles', texto: 'Un rythme confortable, adapté à chaque âge.' },
      { titulo: 'Groupes privés', texto: 'Conçus autour de chaque groupe.' },
      { titulo: 'Retraites', texto: 'La logistique pour ceux qui créent leurs propres expériences.' },
      { titulo: 'Voyages de motivation et entreprises', texto: 'Des programmes pour équipes et clients corporate.' },
      { titulo: 'Lunes de miel et célébrations', texto: 'Conçus autour de moments importants.' },
      { titulo: 'Voyages sur mesure', texto: 'Ce que vous ne trouverez dans aucun circuit.' },
    ],
  },

  desde2009: {
    titulo: 'Une relation construite depuis 2009',
    texto: [
      'Xènia et Abdoul travaillent ensemble depuis 2009. Aujourd’hui, cette connaissance et cette confiance sont au service de votre agence.',
    ],
    foto: FOTOS.abdoulYXenia,
    pie: 'Xènia et Abdoul, dans le sud du Maroc.',
  },

  reputacion: {
    titulo: 'Vos clients sont en de bonnes mains',
    texto: [
      'Quand vous nous confiez un voyage, vous nous confiez votre réputation. Je reste en contact avec vous tout au long du processus.',
    ],
    remate: 'Vous restez l’agence. Nous sommes votre équipe sur le terrain.',
  },

  cierre: {
    titulo: 'On en parle ?',
    texto: [
      'La première conversation sert simplement à faire connaissance.',
    ],
    foto: FOTOS.cuatroPorCuatro,
  },
}

/* --------------------------------------------------------------------------
   Notre histoire
   -------------------------------------------------------------------------- */

export const HISTORIA = {
  hero: {
    etiqueta: 'Notre histoire',
    titulo: 'Tout a commencé dans le Sahara',
    foto: FOTOS.dunasErgChebbi,
  },
  encuentro: {
    texto: [
      'Il y a plus de 18 ans, Xènia est arrivée pour la première fois dans le sud du Maroc et a rencontré Abdoul.',
      'Il était né dans le Sahara. Elle venait de trouver un endroit où elle voulait revenir.',
    ],
    foto: FOTOS.abdoulYXenia,
    pie: 'Xènia et Abdoul, dans le sud du Maroc.',
  },

  voces: {
    titulo: 'Deux regards',
    lista: [
      {
        nombre: 'Xènia',
        mirada: 'Le regard de celle qui est arrivée',
        registro: 'vision',
        foto: FOTOS.retratoDunas,
        texto: [
          "Je suis arrivée dans le sud du Maroc il y a plus de dix-huit ans et je n'ai jamais cessé d'y revenir. Je suis encore surprise, aujourd'hui.",
          "Mon travail, c'est de concevoir chaque voyage pour que cette surprise arrive intacte à celui ou celle qui le vit, sans rien laisser à l'improvisation.",
        ],
      },
      {
        nombre: 'Abdoul',
        mirada: 'Le regard de celui qui est né ici',
        registro: 'terreno',
        foto: FOTOS.cuatroPorCuatroLlanura,
        texto: [
          "Je suis né dans le Sahara et j'ai vécu parmi les dunes jusqu'à l'âge de sept ans. Je connais ce territoire parce que j'y ai grandi, pas parce que je l'ai étudié.",
          "Je sais quels chemins prendre et quelles familles vous ouvrent vraiment leur maison. Ça ne figure dans aucun guide.",
          "Aujourd'hui j'ai mon propre campement à Erg Chigaga.",
        ],
      },
    ],
  },

  hitos: [
    {
      titulo: 'Ensemble depuis 2009',
      texto: [
        'En 2009, nous avons commencé à travailler ensemble. Pendant des années, nous avons créé et coordonné des voyages, des groupes et des retraites au Maroc pour d’autres.',
        "C'est ainsi que nous avons appris la façon dont nous aimons accueillir : avec proximité, avec soin, en partageant une table et un thé.",
      ],
      foto: FOTOS.equipoTe,
      pie: 'Un thé tout juste servi, dans le sud.',
    },
    {
      titulo: 'Revenir là où tout a commencé',
      texto: [
        'Nous nous sommes rencontrés dans un bazar d’Ouarzazate, « la ville du silence ».',
        'Aujourd’hui, ce même bazar est l’agence Sahara Bless Travel.',
      ],
      foto: FOTOS.oasisFint,
      pie: 'Le sud, près d’Ouarzazate.',
    },
  ],

  compromiso: [
    'Deux façons de regarder le même territoire.',
    'Un seul engagement : que celui ou celle qui voyage avec nous le vive comme quelque chose qui lui appartient.',
  ],

  cierre: {
    titulo: ['Vous connaissez maintenant notre histoire.', 'Nous laissez-vous en faire partie de la vôtre ?'],
    cta: { texto: 'Je veux découvrir le Maroc avec vous', a: CTA.viajero.a },
    foto: FOTOS.campamentoHoraAzul,
  },
}

/* --------------------------------------------------------------------------
   Erg Chigaga ou Merzouga
   -------------------------------------------------------------------------- */

export const DESIERTOS = {
  hero: {
    etiqueta: 'Une aide pour décider',
    titulo: 'Erg Chigaga ou Merzouga ?',
    subtitulo: 'Deux déserts. Deux façons de vivre le Sahara.',
    foto: FOTOS.dunasErgChebbi,
  },
  intro: [
    'Erg Chebbi, à Merzouga, ou Erg Chigaga, dans le sud. Le trajet, le paysage et la façon de les vivre changent.',
  ],
  merzouga: {
    etiqueta: 'Erg Chebbi · Merzouga',
    titulo: 'Le désert le plus accessible',
    texto: [
      "À l'est, proche de la route et avec une large offre d'hébergements. S'intègre bien à un itinéraire avec Fès ou le Dadès.",
    ],
    encaje: 'Peut vous correspondre si vous cherchez :',
    lista: [
      'un accès plus simple',
      "plus de choix d'hébergements",
      "le combiner avec un itinéraire vers l'est",
      "plus d'activités et de services",
    ],
    foto: FOTOS.dunasErgChebbi,
  },
  chigaga: {
    etiqueta: 'Erg Chigaga',
    titulo: 'Le Sahara le plus isolé',
    texto: [
      "Dans le sud, près de M'Hamid. On y accède en 4x4, en laissant le goudron derrière soi.",
    ],
    encaje: 'Peut vous correspondre si vous cherchez :',
    lista: [
      "plus de sensation d'isolement",
      'du silence et de l’espace',
      'un désert moins fréquenté',
      'plus de proximité avec la vie du Sahara',
    ],
    foto: FOTOS.cuatroPorCuatro,
  },
  importa: {
    etiqueta: 'Et voici quelque chose qui compte pour nous',
    titulo: "Erg Chigaga n'est pas seulement une destination que nous connaissons",
    texto: [
      "Abdoul est né dans le Sahara et possède son propre campement à Erg Chigaga. Là-bas, nous n'organisons pas simplement une nuit : nous en connaissons les chemins et les gens.",
    ],
    foto: FOTOS.campamentoJaimas,
  },
  veredicto: {
    pregunta: 'Alors, lequel est le meilleur ?',
    titulo: "Il n'y en a pas un meilleur. Il y en a un qui correspond mieux à votre voyage.",
    texto: [
      "Pour Fès et l'est, Merzouga. Pour le sud, avec de l'espace et un désert isolé, Erg Chigaga.",
      'Encore hésitant·e ? Dites-nous comment vous voulez voyager.',
    ],
    cta: { texto: 'Je veux savoir lequel correspond à mon voyage', a: CTA.viajero.a },
  },
}

/* --------------------------------------------------------------------------
   Contact
   -------------------------------------------------------------------------- */

export const CONTACTO = {
  hero: {
    etiqueta: 'Contact',
    titulo: 'Parlons du Maroc',
  },
  agencia: {
    pregunta: 'Vous êtes une agence à la recherche d’un partenaire local de confiance ?',
    texto: [
      'Nous concevons et coordonnons des voyages avec notre équipe locale, adaptés à vos clients.',
    ],
    cta: 'Parler d’une collaboration',
  },
  viajero: {
    pregunta: 'Vous envisagez de voyager au Maroc ?',
    texto: [
      "Vous n'avez pas besoin d'avoir tout décidé. Dites-nous quand, avec qui, et ce que vous aimeriez vivre.",
    ],
    cta: 'Concevoir mon voyage',
  },
  formulario: {
    titulo: 'Dites-nous ce que vous avez en tête',
    entradilla: 'Un premier message suffit.',
  },
  whatsapp: {
    titulo: 'Vous préférez nous parler directement ?',
    texto: 'Vous pouvez aussi nous écrire sur WhatsApp.',
  },
}
