import { FOTOS } from '../datos/fotos'

/**
 * Les 5 itinéraires, en français. Même structure que rutas.es.js.
 *
 * `slug` n'est jamais traduit, dans aucune langue — voir la note dans
 * rutas.es.js. Les noms d'itinéraires (The Desert Journey, Atlantic to
 * Sahara…) sont des noms de produit et restent tels quels, y compris en
 * français.
 */

export const RUTAS = [
  {
    slug: 'the-desert-journey',
    nombre: 'The Desert Journey',
    dias: '8 jours',
    lugares: 'Marrakech · Atlas · Aït Ben Haddou · Oasis de Fint · Erg Chigaga',
    gancho: "Le Maroc essentiel, avec le Sahara comme destination.",
    resumenTarjeta:
      "Marrakech, le Haut Atlas, des kasbahs, des oasis et deux nuits à Erg Chigaga. Pour découvrir le désert et tout ce qui l'entoure.",
    foto: FOTOS.stockDunaAmanecer,
    fotoAlterna: FOTOS.mesaParaDos,
    titular: ['Le sud du Maroc.', 'Le Sahara comme destination.'],
    entradilla: [
      "Marrakech, le Haut Atlas, des kasbahs et des oasis, avant de terminer là où tout devient silence : deux nuits à Erg Chigaga.",
      'Pour découvrir le Maroc et vivre le désert en un seul voyage, sans chercher à tout voir.',
    ],
    sahara: true,
    itinerario: [
      {
        etiqueta: 'Jour 1 · Marrakech',
        titulo: 'Arriver et commencer à regarder',
        texto: [
          'Arrivée à Marrakech et accueil. Un premier jour pour se reposer, s’adapter au rythme du pays et commencer à découvrir la ville.',
          'Médina, souks, un premier thé et du temps pour simplement être là. Nuit à Marrakech.',
        ],
        foto: FOTOS.marrakechJemaa,
      },
      {
        etiqueta: 'Jour 2 · Marrakech',
        titulo: 'La ville rouge',
        texto: [
          'Une journée pour découvrir Marrakech à votre rythme. Nous pouvons explorer la médina, ses marchés et ses artisans, visiter quelques-uns de ses lieux les plus emblématiques, ou réserver du temps pour un hammam, un bon repas ou simplement une promenade.',
          'Deuxième nuit à Marrakech.',
        ],
        foto: FOTOS.stockEspecias,
      },
      {
        etiqueta: 'Jour 3 · Marrakech → Aït Ben Haddou',
        titulo: "Traverser l'Atlas",
        texto: [
          "Nous laissons Marrakech derrière nous et traversons le Haut Atlas. Le paysage change peu à peu à mesure que nous descendons vers le sud.",
          'Nous visiterons Aït Ben Haddou, l’une des kasbahs les plus connues du Maroc, avec le temps de parcourir ses ruelles et de contempler le paysage. Nuit à Aït Ben Haddou.',
        ],
        foto: FOTOS.stockKasbahPanoramica,
      },
      {
        etiqueta: 'Jour 4 · Aït Ben Haddou → Erg Chigaga',
        titulo: 'Vers le Sahara',
        texto: [
          'Nous continuons vers le sud entre kasbahs, villages de terre, palmeraies et paysages de plus en plus arides.',
          "Après avoir atteint M'Hamid, nous quittons le goudron. Nous montons en 4x4 et commençons à traverser les pistes qui mènent à Erg Chigaga.",
          "L'horizon s'ouvre. Et le voyage change de rythme. Première nuit à Erg Chigaga.",
        ],
        foto: FOTOS.cuatroPorCuatro,
      },
      {
        etiqueta: 'Jour 5 · Erg Chigaga',
        titulo: 'Une journée sans rien à faire',
        texto: [
          "Aujourd'hui, il n'y a nulle part où aller. Lever du soleil entre les dunes, petit-déjeuner, thé, marche dans le sable, repos, découverte des traditions du Sahara, ou simplement contemplation du paysage.",
          "Nous pouvons préparer du pain sous le sable, partager un moment avec l'équipe, profiter du henné ou découvrir la musique saharaouie en fin de journée.",
          'Et quand vient la nuit : dîner, feu, étoiles et silence. Deuxième nuit à Erg Chigaga.',
        ],
        foto: FOTOS.mesaParaDos,
      },
      {
        etiqueta: 'Jour 6 · Erg Chigaga → Oasis de Fint',
        titulo: "Des dunes à l'oasis",
        texto: [
          'Nous laissons le désert derrière nous et commençons à remonter vers le nord. Le paysage se transforme de nouveau : le sable laisse place aux oasis, aux palmeraies et aux kasbahs.',
          "Nous arrivons à l'oasis de Fint, une petite vallée cachée entre les montagnes. Du temps pour marcher, prendre un thé et se reposer. Nuit dans la région de l'oasis de Fint / Ouarzazate.",
        ],
        foto: FOTOS.oasisFint,
      },
      {
        etiqueta: 'Jour 7 · Oasis de Fint → Marrakech',
        titulo: 'Le dernier trajet',
        texto: [
          "Le matin, il reste peut-être du temps pour profiter encore de l'oasis avant de prendre la route vers Marrakech. Nous retraversons le Haut Atlas tandis que le paysage change une dernière fois.",
          "Arrivée à Marrakech, avec le temps pour un dernier dîner, une promenade ou quelques achats. Nuit à Marrakech ou aux alentours.",
        ],
        foto: FOTOS.marrakechTerrazas,
      },
      {
        etiqueta: 'Jour 8',
        titulo: 'À bientôt',
        texto: [
          "Petit-déjeuner et transfert à l'aéroport. Ou, si vos vols le permettent, nous pouvons adapter la fin du voyage.",
        ],
        foto: null,
      },
    ],
    cierre: {
      titulo: "Ce n'est pas un voyage figé",
      texto: [
        'Cet itinéraire est notre point de départ. Nous adaptons les hébergements, le rythme et les expériences, ou nous ajoutons des jours.',
      ],
    },
  },

  {
    slug: 'atlantic-to-sahara',
    nombre: 'Atlantic to Sahara',
    dias: '11 jours',
    lugares: 'Marrakech · Essaouira · Taroudant · Erg Chigaga · Oasis de Fint · Vallée du Drâa',
    gancho: 'De l’Atlantique au Sahara.',
    resumenTarjeta:
      "L'énergie d'Essaouira, les paysages du sud et deux nuits à Erg Chigaga. Côte, culture et désert, sans se presser.",
    foto: FOTOS.cuatroPorCuatro,
    fotoAlterna: FOTOS.stockCampamentoNoche,
    titular: ['De l’Atlantique', 'aux dunes du Sahara'],
    entradilla: [
      "Un voyage qui traverse le Maroc d'ouest en sud : Marrakech, l'Atlantique, la vallée du Drâa et deux nuits parmi les dunes d'Erg Chigaga.",
      'Pour découvrir le Maroc à travers ses contrastes.',
    ],
    sahara: true,
    itinerario: [
      {
        etiqueta: '01–02 · Marrakech',
        titulo: "D'abord, la mer",
        texto: [
          'Nous commençons à Marrakech. Deux nuits pour entrer dans le rythme du voyage, se perdre dans ses ruelles, profiter de sa gastronomie et laisser le Maroc se révéler peu à peu.',
        ],
        foto: FOTOS.marrakechJemaa,
      },
      {
        etiqueta: '03–04 · Essaouira',
        titulo: 'Ensuite, l’Atlantique',
        texto: [
          "Nous laissons Marrakech derrière nous et mettons le cap sur la côte. Essaouira, c'est un autre Maroc : océan, vent, port, poisson frais, ruelles blanches et un rythme bien plus tranquille.",
          'Deux nuits pour profiter de la ville et de la mer avant de continuer vers le sud.',
        ],
        foto: FOTOS.essaouiraMurallasMar,
      },
      {
        etiqueta: '05 · Essaouira → Taroudant',
        titulo: 'Le Maroc du sud',
        texto: [
          "Le changement commence. Nous laissons l'océan et avançons vers l'intérieur des terres.",
          "Le paysage se transforme et nous arrivons à Taroudant, une ville entourée de remparts, connue pour son ambiance plus locale. Une nuit pour se reposer avant de continuer vers le Sahara.",
        ],
        foto: FOTOS.taroudantMurallas,
      },
      {
        etiqueta: '06–07 · Erg Chigaga',
        titulo: 'Et puis, le désert',
        texto: [
          "Nous continuons vers le sud. Le paysage devient de plus en plus aride jusqu'aux portes du Sahara. Et de là, nous entrons à Erg Chigaga en 4x4.",
          'Les dunes apparaissent peu à peu. Nous restons ici deux nuits.',
        ],
        foto: FOTOS.dunasChigaga,
      },
      {
        etiqueta: 'Deux nuits pour vivre le Sahara',
        titulo: 'Ici, le temps fonctionne autrement',
        texto: [
          "Nous ne voulons pas que le désert soit un arrêt rapide dans le voyage. Nous voulons que vous ayez le temps d'être, tout simplement.",
          "Marcher sur les dunes. Partager un thé. Écouter de la musique saharaouie. S'asseoir autour du feu. Regarder les étoiles. Et se réveiller entouré de silence.",
        ],
        foto: FOTOS.stockCampamentoNoche,
      },
      {
        etiqueta: '08–09 · Oasis de Fint · Vallée du Drâa · Aït Ben Haddou',
        titulo: "Du désert à l'oasis",
        texto: [
          "Nous laissons les dunes et continuons à découvrir le sud. Deux nuits dans la région de l'oasis de Fint pour ralentir de nouveau et explorer les paysages autour d'Ouarzazate.",
          'Nous visitons Aït Ben Haddou et nous rapprochons de la vallée du Drâa, avec ses oasis, ses palmeraies et ses kasbahs. Après les dunes, un autre paysage. Une autre façon de comprendre le sud.',
        ],
        foto: FOTOS.kasbahValleDraa,
      },
      {
        etiqueta: '10 · Marrakech ou ses environs',
        titulo: 'Dernière nuit',
        texto: [
          "Nous prenons le chemin du retour vers Marrakech. La dernière nuit peut se passer en ville ou dans ses environs, selon l'horaire de votre vol et le type de voyage que vous souhaitez.",
          'Une dernière nuit pour se reposer avant de rentrer chez soi.',
        ],
        foto: FOTOS.stockRiadMesa,
      },
      {
        etiqueta: '11 · Retour',
        titulo: 'Le voyage se termine',
        texto: [
          "Petit-déjeuner et transfert à l'aéroport.",
          "Le voyage se termine. Mais après onze jours, le Maroc ne se ressent plus tout à fait comme à votre arrivée.",
        ],
        foto: null,
      },
    ],
    cierre: {
      titulo: 'Un itinéraire que nous pouvons rendre vôtre',
      texto: [
        "C'est notre proposition, mais elle n'a pas à être la vôtre. Nous adaptons le rythme, les hébergements, les expériences et le nombre de nuits à chaque étape.",
      ],
    },
  },

  {
    slug: 'the-nomad-route',
    nombre: 'The Nomad Route',
    dias: '10 jours',
    lugares: 'Marrakech · Oasis de Fint · Vallée du Drâa · Erg Chigaga · Aït Ben Haddou',
    gancho: 'Le sud du Maroc, de l’intérieur.',
    resumenTarjeta:
      "Oasis, palmeraies, marchés et petites communautés avant le Sahara. Le sud, au-delà de ses lieux les plus connus.",
    foto: FOTOS.campamentoDron,
    fotoAlterna: FOTOS.hogueraNoche,
    titular: ['Au-delà', 'des monuments'],
    entradilla: [
      "Il existe un Maroc qui n'apparaît sur aucune liste de lieux : un thé avec une famille, un marché, de la musique autour du feu.",
      'The Nomad Route va vers ce Maroc-là : le sud, entre oasis, palmeraies et les dunes d’Erg Chigaga.',
    ],
    sahara: true,
    itinerario: [
      {
        etiqueta: '01–02 · Marrakech',
        titulo: "D'abord, nous prenons nos repères",
        texto: [
          'Nous arrivons à Marrakech et prenons deux nuits pour atterrir. Sans commencer en courant.',
          'Du temps pour découvrir la ville, se promener dans la médina, goûter ses saveurs et commencer à entrer dans le rythme du Maroc. Deux nuits pour vraiment arriver.',
        ],
        foto: FOTOS.stockRiadInterior,
      },
      {
        etiqueta: '03 · Marrakech → Oasis de Fint',
        titulo: 'Le pays commence à changer',
        texto: [
          "Nous quittons Marrakech et traversons l'Atlas vers le sud. Le paysage devient plus aride et les premiers palmiers, kasbahs et petites communautés apparaissent.",
          "Nous arrivons à l'oasis de Fint, un petit oasis entouré de roche et de végétation. C'est ici que commence une autre partie du voyage. Nuit à l'oasis de Fint ou aux alentours.",
        ],
        foto: FOTOS.oasisFint,
      },
      {
        etiqueta: '04 · Oasis de Fint',
        titulo: 'Une journée pour partager',
        texto: [
          "Aujourd'hui, nous ne venons pas simplement visiter. Nous venons partager.",
          'Nous faisons une excursion dans l’oasis et rencontrons une famille locale. Nous mangeons ensemble, partageons un thé et découvrons certaines de leurs traditions.',
          "Nous découvrons aussi le henné et en apprenons un peu plus sur la vie de ceux qui habitent ici. Deuxième nuit à l'oasis de Fint ou aux alentours.",
        ],
        foto: FOTOS.teFamiliaOasis,
      },
      {
        etiqueta: '05 · Vallée du Drâa',
        titulo: 'Palmiers, marché et vie locale',
        texto: [
          'Nous continuons vers la vallée du Drâa. Un paysage de grandes palmeraies, de kasbahs et de villages qui suivent le cours de la rivière. Nous visitons un marché local et nous rapprochons de la vie quotidienne de cette région.',
          "Ici, le paysage n'est pas seulement beau. C'est le mode de vie de ceux qui l'habitent. Nuit à Zagora ou aux alentours.",
        ],
        foto: FOTOS.palmeralMontana,
      },
      {
        etiqueta: '06–07 · Erg Chigaga',
        titulo: 'Et puis, le Sahara',
        texto: [
          "Depuis Zagora, nous continuons vers le désert. Nous montons en 4x4 et laissons derrière nous les derniers signes de la vie urbaine.",
          'Le paysage s’ouvre. Les dunes apparaissent. Erg Chigaga. Nous restons ici deux nuits.',
        ],
        foto: FOTOS.stockDunasPanoramica,
      },
      {
        etiqueta: 'Deux nuits pour vivre le désert',
        titulo: "Ici, pas besoin de remplir le temps",
        texto: [
          'Il y a du temps pour marcher entre les dunes, se reposer, partager un thé et découvrir certaines traditions du Sahara.',
          'Du pain cuit sous le sable. Des turbans. Du henné. De la musique saharaouie. Du feu. Et un ciel qui, la nuit, semble ne jamais finir.',
        ],
        foto: FOTOS.hogueraNoche,
      },
      {
        etiqueta: '08 · Erg Chigaga → Aït Ben Haddou',
        titulo: 'Des dunes aux kasbahs',
        texto: [
          'Nous laissons le Sahara derrière nous et commençons le chemin du retour. Le paysage change de nouveau : du désert, nous repassons aux montagnes, aux villages et aux kasbahs.',
          'Nous arrivons à Aït Ben Haddou, où nous passerons notre dernière nuit dans le sud.',
        ],
        foto: FOTOS.aitBenHaddouAtardecer,
      },
      {
        etiqueta: '09 · Aït Ben Haddou → Marrakech',
        titulo: 'Dernière nuit',
        texto: [
          "Nous retraversons l'Atlas. Le paysage change une dernière fois à mesure que nous nous rapprochons de Marrakech.",
          "Nous passons la dernière nuit à Marrakech ou dans ses environs, selon l'horaire du vol.",
        ],
        foto: FOTOS.marrakechTerrazas,
      },
      {
        etiqueta: '10',
        titulo: 'À bientôt',
        texto: [
          "Petit-déjeuner et transfert à l'aéroport. Vous emportez des photographies, des saveurs, des conversations et des souvenirs. Mais surtout, un regard différent sur le sud du Maroc.",
        ],
        foto: FOTOS.miradorHamada,
      },
    ],
    cierre: {
      titulo: 'Pour ceux qui veulent se rapprocher',
      texto: [
        'Pour découvrir le sud à travers ses paysages et ceux qui y vivent.',
        'Avec assez de temps pour que des rencontres puissent avoir lieu.',
      ],
    },
  },

  {
    slug: 'moroccan-soul',
    nombre: 'Moroccan Soul',
    dias: '8 jours',
    lugares: 'Marrakech · Essaouira · Ouirgane',
    gancho: 'Voyager lentement, c’est encore voyager.',
    resumenTarjeta:
      "Marrakech, l'Atlantique et l'Atlas, sans se presser. Pour celles et ceux qui ne veulent pas remplir chaque journée d'activités.",
    foto: FOTOS.stockEssaouiraPanoramica,
    fotoAlterna: FOTOS.valleOuirgane,
    titular: ['Il existe une autre façon', 'de voyager au Maroc'],
    entradilla: [
      "Notre voyage le plus tranquille : Marrakech, l'Atlantique et les montagnes de l'Atlas, avec du temps pour bien manger, marcher et se reposer.",
      'Nous ne voulons pas remplir chaque journée. Nous voulons laisser de la place pour vivre.',
    ],
    sahara: false,
    itinerario: [
      {
        etiqueta: '01 · Marrakech',
        titulo: 'Nous commençons doucement',
        texto: [
          'Arrivée et transfert au riad. Première promenade dans la médina, un thé et un dîner de bienvenue.',
          "Pas besoin d'en faire plus. Le voyage vient de commencer. Nuit à Marrakech.",
        ],
        foto: FOTOS.stockRiadPatio,
      },
      {
        etiqueta: '02 · Marrakech',
        titulo: 'Marrakech à notre rythme',
        texto: [
          "Une journée pour découvrir la ville sans se presser. Patrimoine, jardins, souks et artisanat.",
          'Et aussi du temps pour choisir comment en profiter : un hammam, un spa, un atelier, un long repas ou simplement se perdre dans ses ruelles. Nuit à Marrakech.',
        ],
        foto: FOTOS.marrakechJemaa,
      },
      {
        etiqueta: '03 · Essaouira',
        titulo: "L'Atlantique",
        texto: [
          "Nous quittons Marrakech et mettons le cap sur l'océan. Nous arrivons à Essaouira, avec sa médina, son port de pêche, ses galeries et ses artisans.",
          "L'après-midi, nous marchons au bord de la mer et attendons le coucher du soleil. Nuit à Essaouira.",
        ],
        foto: FOTOS.essaouiraMurallas,
      },
      {
        etiqueta: '04 · Essaouira',
        titulo: "Le temps de l'océan",
        texto: [
          "Aujourd'hui, il n'y a pas de liste de choses à faire. Il y a des options.",
          "Plage. Poisson frais. Sidi Kaouki. Surf. Kitesurf. Une promenade dans Essaouira. Ou simplement ne rien faire du tout. Deuxième nuit à Essaouira.",
        ],
        foto: FOTOS.stockEssaouiraBarcas,
      },
      {
        etiqueta: '05 · Essaouira → Ouirgane',
        titulo: 'Vers les montagnes',
        texto: [
          "Nous quittons l'océan et nous enfonçons dans l'intérieur des terres. Nous traversons des forêts d'arganiers et visitons une coopérative avant de continuer vers les montagnes de l'Atlas.",
          'Nous arrivons à Ouirgane. Plus vert. Plus tranquille. Un autre rythme. Nuit à Ouirgane.',
        ],
        foto: FOTOS.valleOuirgane,
      },
      {
        etiqueta: '06 · Ouirgane',
        titulo: "L'Atlas",
        texto: [
          'Une journée pour découvrir les environs. Nous marchons dans les montagnes, découvrons des villages berbères, partageons un thé et découvrons la gastronomie locale.',
          'Nous pouvons aussi organiser un atelier de cuisine. Nuit à Ouirgane.',
        ],
        foto: FOTOS.stockPuebloAtlas,
      },
      {
        etiqueta: '07 · Ouirgane',
        titulo: 'Simplement être là',
        texto: [
          "Aujourd'hui, nous laissons de l'espace. Piscine. Jardin. Hammam. Massage. Une promenade. Ou simplement contempler les montagnes.",
          'Un dernier dîner pour clore le voyage. Nuit à Ouirgane.',
        ],
        foto: FOTOS.riadPatioNaranjos,
      },
      {
        etiqueta: '08 · Retour',
        titulo: 'Terminer en douceur',
        texto: [
          "Après le petit-déjeuner, transfert à l'aéroport de Marrakech. Environ une heure de trajet.",
          "Moroccan Soul se termine comme nous aimons que se terminent les bons voyages : en douceur.",
        ],
        foto: null,
      },
    ],
    cierre: {
      titulo: 'Pour celles et ceux qui veulent ralentir',
      texto: [
        'Pour vous, si vous préférez un long repas à trois visites, ou un hammam à une course d’un monument à l’autre.',
      ],
    },
  },

  {
    slug: 'the-imperial-journey',
    nombre: 'The Imperial Journey',
    dias: '12 jours',
    lugares: 'Casablanca · Fès · Dadès · Erg Chigaga · Oasis de Fint · Aït Ben Haddou · Marrakech',
    gancho: 'Des villes impériales au cœur du Sahara.',
    resumenTarjeta:
      "Fès, l'Atlas, le sud, le désert et Marrakech en un seul voyage. Avec Erg Chigaga ou Merzouga, au choix.",
    foto: FOTOS.stockFezPuerta,
    fotoAlterna: FOTOS.stockTintesFez,
    titular: ['Des villes', 'au désert'],
    entradilla: [
      'De grandes villes, des médinas et des palais. Mais aussi des montagnes, des kasbahs, des oasis et du désert.',
      "The Imperial Journey réunit les deux mondes, sans avoir à choisir entre culture, paysage et Sahara.",
    ],
    sahara: true,
    itinerario: [
      {
        etiqueta: '01 · Casablanca ou Marrakech',
        titulo: 'Nous commençons là où ça a du sens pour vous',
        texto: [
          'Nous pouvons commencer le voyage à Casablanca ou à Marrakech, selon vos vols et la façon dont vous souhaitez parcourir le Maroc.',
          'Si nous commençons à Casablanca, nous entrons peu à peu dans le pays avant de nous diriger vers Fès. Si vous préférez arriver à Marrakech, nous pouvons adapter le parcours. Le voyage s’adapte à vous, pas l’inverse.',
        ],
        foto: FOTOS.casablanca,
      },
      {
        etiqueta: '02–03 · Fès',
        titulo: 'Le cœur historique',
        texto: [
          'Nous arrivons à Fès. Sa médina, ses ruelles, ses artisans, ses couleurs et ses métiers traditionnels nous montrent l’un des visages les plus anciens du Maroc.',
          'Un jour pour découvrir. Et un autre pour simplement se perdre. Parce qu’à Fès, se perdre fait aussi partie du voyage.',
        ],
        foto: FOTOS.stockTintesFez,
      },
      {
        etiqueta: '04 · Fès → Dadès',
        titulo: 'Vers le sud',
        texto: [
          "Nous laissons les villes derrière nous. Nous traversons l'Atlas et le paysage commence à changer.",
          'Les montagnes, les vallées et les premières kasbahs nous annoncent que nous entrons dans un autre Maroc. Nous arrivons dans la région du Dadès. Nuit dans le Dadès.',
        ],
        foto: FOTOS.gargantasDades,
      },
      {
        etiqueta: '05–06 · Erg Chigaga',
        titulo: 'Vers le Sahara',
        texto: [
          'Nous continuons vers le sud. Palmeraies, oasis, villages de terre et paysages de plus en plus arides nous accompagnent en chemin.',
          "Jusqu'à laisser le goudron derrière nous. Nous montons en 4x4. Et nous arrivons à Erg Chigaga. Deux nuits pour laisser le désert donner le rythme.",
        ],
        foto: FOTOS.dunasChigaga,
      },
      {
        etiqueta: 'Deux nuits pour vivre le Sahara',
        titulo: 'Et le temps de simplement être là',
        texto: [
          'Lever du soleil entre les dunes. Marcher dans le sable. Partager un thé. Du pain cuit sous le sable.',
          'Turbans et henné. Musique saharaouie à la tombée de la nuit.',
        ],
        foto: FOTOS.teSobreLaDuna,
      },
      {
        etiqueta: '07–08 · Oasis de Fint · Aït Ben Haddou',
        titulo: 'Du désert aux oasis',
        texto: [
          'Nous laissons les dunes et commençons le chemin du retour. Le paysage se transforme de nouveau : le désert laisse place aux palmeraies, aux oasis, aux villages et aux kasbahs.',
          "Nous arrivons à l'oasis de Fint, où nous pouvons marcher, partager un thé et profiter d'un repas local. Nous continuons vers Aït Ben Haddou, l'une des grandes kasbahs du sud.",
        ],
        foto: FOTOS.stockKasbahValle,
      },
      {
        etiqueta: '09–11 · Marrakech',
        titulo: 'La ville rouge',
        texto: [
          "Nous arrivons à Marrakech après avoir traversé le sud et l'Atlas. Cette fois, nous pouvons vraiment ralentir.",
          "Trois nuits pour profiter de la ville, retourner à la médina, acheter de l'artisanat, découvrir de nouveaux coins, ou simplement vous reposer. Nous pouvons aussi organiser un hammam, un spa, un atelier de cuisine ou une expérience gastronomique.",
        ],
        foto: FOTOS.marrakechKoutoubia,
      },
      {
        etiqueta: '12',
        titulo: 'À bientôt, Maroc',
        texto: [
          'Le voyage peut se terminer à Marrakech ou à Casablanca, selon vos vols.',
          "Nous adaptons l'itinéraire pour que le voyage ait du sens du début à la fin — et pour que vous n'ayez pas à organiser votre Maroc autour de notre itinéraire.",
        ],
        foto: null,
      },
    ],
    cierre: {
      titulo: "Pour celles et ceux qui veulent voir le Maroc dans son ensemble",
      texto: [
        "Villes, culture, Atlas, kasbahs, oasis et Sahara. Un itinéraire complet, sans transformer le voyage en course contre la montre.",
      ],
    },
  },
]

export const rutaPorSlug = (slug) => RUTAS.find((r) => r.slug === slug)

export const NUESTRO_SAHARA = {
  etiqueta: 'Notre Sahara',
  titulo: "Erg Chigaga n'est pas juste une étape de plus",
  texto: [
    'Abdoul est né dans le Sahara et possède son propre campement à Erg Chigaga.',
    'Nous ne vous emmenons pas vers une destination : nous vous emmenons vers une part de notre histoire.',
  ],
}
