import { FOTOS } from '../datos/fotos'

/**
 * The 5 routes, in English. Same shape as rutas.es.js.
 *
 * `slug` is never translated in any language — see the note in rutas.es.js.
 * Route names (The Desert Journey, Atlantic to Sahara…) are product names and
 * stay exactly as they are in Spanish too: they don't get translated back.
 */

export const RUTAS = [
  {
    slug: 'the-desert-journey',
    nombre: 'The Desert Journey',
    dias: '8 days',
    lugares: 'Marrakech · Atlas · Aït Ben Haddou · Fint Oasis · Erg Chigaga',
    gancho: 'Essential Morocco, with the Sahara as its destination.',
    resumenTarjeta:
      'Marrakech, the High Atlas, kasbahs, oases and two nights in Erg Chigaga. To get to know the desert and everything around it.',
    foto: FOTOS.stockDunaAmanecer,
    fotoAlterna: FOTOS.mesaParaDos,
    titular: ['Southern Morocco.', 'The Sahara as your destination.'],
    entradilla: [
      'Marrakech, the High Atlas, kasbahs and oases, before finishing where everything turns to silence: two nights in Erg Chigaga.',
      'To get to know Morocco and experience the desert in a single trip, without trying to see everything.',
    ],
    sahara: true,
    itinerario: [
      {
        etiqueta: 'Day 1 · Marrakech',
        titulo: 'Arrive and start to look',
        texto: [
          'Arrival in Marrakech and welcome. A first day to rest, settle into the pace of the country and start discovering the city.',
          'Medina, souks, a first tea, and time to simply be. Overnight in Marrakech.',
        ],
        foto: FOTOS.marrakechJemaa,
      },
      {
        etiqueta: 'Day 2 · Marrakech',
        titulo: 'The red city',
        texto: [
          'A day to discover Marrakech at your own pace. We can explore the medina, its markets and craftspeople, visit some of its best-known sites, or set aside time for a hammam, a good meal, or simply a walk.',
          'Second night in Marrakech.',
        ],
        foto: FOTOS.stockEspecias,
      },
      {
        etiqueta: 'Day 3 · Marrakech → Aït Ben Haddou',
        titulo: 'Crossing the Atlas',
        texto: [
          'We leave Marrakech behind and cross the High Atlas. The landscape changes little by little as we head south.',
          "We'll visit Aït Ben Haddou, one of Morocco's best-known kasbahs, with time to walk its streets and take in the scenery. Overnight in Aït Ben Haddou.",
        ],
        foto: FOTOS.stockKasbahPanoramica,
      },
      {
        etiqueta: 'Day 4 · Aït Ben Haddou → Erg Chigaga',
        titulo: 'Toward the Sahara',
        texto: [
          'We continue south through kasbahs, mud-brick villages, palm groves and increasingly arid landscapes.',
          'After reaching M’Hamid, we leave the paved road. We climb into 4x4s and start crossing the tracks that lead to Erg Chigaga.',
          'The horizon opens up. And the trip changes pace. First night in Erg Chigaga.',
        ],
        foto: FOTOS.cuatroPorCuatro,
      },
      {
        etiqueta: 'Day 5 · Erg Chigaga',
        titulo: 'A day with nowhere to be',
        texto: [
          "Today there's nowhere to get to. Sunrise among the dunes, breakfast, tea, walking on the sand, resting, learning about Saharan traditions, or simply taking in the landscape.",
          'We can bake bread under the sand, spend some time with the team, enjoy henna, or discover Saharawi music as evening falls.',
          'And when night comes: dinner, fire, stars and silence. Second night in Erg Chigaga.',
        ],
        foto: FOTOS.mesaParaDos,
      },
      {
        etiqueta: 'Day 6 · Erg Chigaga → Fint Oasis',
        titulo: 'From the dunes to the oasis',
        texto: [
          'We leave the desert behind and start heading back north. The landscape transforms again: sand gives way to oases, palm groves and kasbahs.',
          'We arrive at Fint Oasis, a small valley tucked between mountains. Time to walk, have a tea and rest. Overnight in the Fint Oasis / Ouarzazate area.',
        ],
        foto: FOTOS.oasisFint,
      },
      {
        etiqueta: 'Day 7 · Fint Oasis → Marrakech',
        titulo: 'The last stretch',
        texto: [
          'In the morning there may still be time to enjoy the oasis before heading to Marrakech. We cross the High Atlas once more as the landscape changes for the last time.',
          'Arrival in Marrakech, with time for a last dinner, a walk, or some shopping. Overnight in Marrakech or nearby.',
        ],
        foto: FOTOS.marrakechTerrazas,
      },
      {
        etiqueta: 'Day 8',
        titulo: 'See you soon',
        texto: [
          'Breakfast and transfer to the airport. Or, if your flights allow it, we can adapt the end of the trip.',
        ],
        foto: null,
      },
    ],
    cierre: {
      titulo: "This isn't a fixed trip",
      texto: [
        'This route is our starting point. We adapt places to stay, pace and experiences, or add extra days.',
      ],
    },
  },

  {
    slug: 'atlantic-to-sahara',
    nombre: 'Atlantic to Sahara',
    dias: '11 days',
    lugares: 'Marrakech · Essaouira · Taroudant · Erg Chigaga · Fint Oasis · Drâa Valley',
    gancho: 'From the Atlantic to the Sahara.',
    resumenTarjeta:
      "Essaouira's energy, the landscapes of the south and two nights in Erg Chigaga. Coast, culture and desert, without rushing.",
    foto: FOTOS.cuatroPorCuatro,
    fotoAlterna: FOTOS.stockCampamentoNoche,
    titular: ['From the Atlantic', 'to the dunes of the Sahara'],
    entradilla: [
      'A trip that crosses Morocco from west to south: Marrakech, the Atlantic coast, the Drâa Valley, and two nights among the dunes of Erg Chigaga.',
      'To get to know Morocco through its contrasts.',
    ],
    sahara: true,
    itinerario: [
      {
        etiqueta: '01–02 · Marrakech',
        titulo: 'The sea, first',
        texto: [
          'We start in Marrakech. Two nights to settle into the pace of the trip, get lost in its streets, enjoy its food, and let Morocco start to reveal itself little by little.',
        ],
        foto: FOTOS.marrakechJemaa,
      },
      {
        etiqueta: '03–04 · Essaouira',
        titulo: 'Then, the Atlantic',
        texto: [
          'We leave Marrakech behind and head for the coast. Essaouira is a different Morocco: ocean, wind, harbor, fresh fish, white streets and a much slower pace.',
          'Two nights to enjoy the city and the sea before continuing south.',
        ],
        foto: FOTOS.essaouiraMurallasMar,
      },
      {
        etiqueta: '05 · Essaouira → Taroudant',
        titulo: 'The Morocco of the south',
        texto: [
          'The change begins. We leave the ocean and head inland.',
          'The landscape transforms, and we arrive in Taroudant, a walled city known for its more local atmosphere. One night to rest before continuing toward the Sahara.',
        ],
        foto: FOTOS.taroudantMurallas,
      },
      {
        etiqueta: '06–07 · Erg Chigaga',
        titulo: 'And then, the desert',
        texto: [
          'We keep heading south. The landscape grows drier and drier until we reach the gates of the Sahara. From there we head into Erg Chigaga by 4x4.',
          'The dunes appear little by little. We stay here for two nights.',
        ],
        foto: FOTOS.dunasChigaga,
      },
      {
        etiqueta: 'Two nights to experience the Sahara',
        titulo: 'Here time works differently',
        texto: [
          "We don't want the desert to be a quick stop within the trip. We want you to have time to simply be.",
          'Walking on the dunes. Sharing a tea. Listening to Saharawi music. Sitting by the fire. Watching the stars. And waking up surrounded by silence.',
        ],
        foto: FOTOS.stockCampamentoNoche,
      },
      {
        etiqueta: '08–09 · Fint Oasis · Drâa Valley · Aït Ben Haddou',
        titulo: 'From the desert to the oasis',
        texto: [
          'We leave the dunes and keep discovering the south. Two nights in the Fint Oasis area to slow down again and explore the landscapes around Ouarzazate.',
          'We visit Aït Ben Haddou and get closer to the Drâa Valley, with its oases, palm groves and kasbahs. After the dunes, a different landscape. Another way of understanding the south.',
        ],
        foto: FOTOS.kasbahValleDraa,
      },
      {
        etiqueta: '10 · Marrakech or nearby',
        titulo: 'Last night',
        texto: [
          'We start heading back toward Marrakech. The last night can be in the city or nearby, depending on your flight time and the kind of trip you want.',
          'One last night to rest before heading home.',
        ],
        foto: FOTOS.stockRiadMesa,
      },
      {
        etiqueta: '11 · Departure',
        titulo: 'The trip ends',
        texto: [
          'Breakfast and transfer to the airport.',
          "The trip ends. But after eleven days, Morocco no longer feels the way it did when you arrived.",
        ],
        foto: null,
      },
    ],
    cierre: {
      titulo: 'A route we can make yours',
      texto: [
        "This is our proposal, but it doesn't have to be yours. We adapt pace, places to stay, experiences and how many nights you spend in each place.",
      ],
    },
  },

  {
    slug: 'the-nomad-route',
    nombre: 'The Nomad Route',
    dias: '10 days',
    lugares: 'Marrakech · Fint Oasis · Drâa Valley · Erg Chigaga · Aït Ben Haddou',
    gancho: 'Southern Morocco, from the inside.',
    resumenTarjeta:
      'Oases, palm groves, markets and small communities before the Sahara. The south, beyond its well-known sites.',
    foto: FOTOS.campamentoDron,
    fotoAlterna: FOTOS.hogueraNoche,
    titular: ['Beyond', 'the monuments'],
    entradilla: [
      "There's a Morocco that doesn't show up on any list of places: a tea with a family, a market, music around a fire.",
      'The Nomad Route heads into that Morocco: the south, between oases, palm groves and the dunes of Erg Chigaga.',
    ],
    sahara: true,
    itinerario: [
      {
        etiqueta: '01–02 · Marrakech',
        titulo: 'First, we settle in',
        texto: [
          'We arrive in Marrakech and take two nights to land. Without starting in a rush.',
          "Time to discover the city, wander the medina, try its flavors, and start settling into Morocco's pace. Two nights to really arrive.",
        ],
        foto: FOTOS.stockRiadInterior,
      },
      {
        etiqueta: '03 · Marrakech → Fint Oasis',
        titulo: 'The country starts to change',
        texto: [
          'We leave Marrakech and cross the Atlas heading south. The landscape grows drier and the first palm trees, kasbahs and small communities appear.',
          'We arrive at Fint Oasis, a small oasis surrounded by rock and greenery. This is where the other part of the trip begins. Overnight in Fint Oasis or nearby.',
        ],
        foto: FOTOS.oasisFint,
      },
      {
        etiqueta: '04 · Fint Oasis',
        titulo: 'A day to share',
        texto: [
          "Today we're not just visiting. We're sharing.",
          'We take a walk through the oasis and meet a local family. We eat together, share a tea, and get a closer look at some of their traditions.',
          "We also discover henna and learn a bit more about the life of the people who live here. Second night in Fint Oasis or nearby.",
        ],
        foto: FOTOS.teFamiliaOasis,
      },
      {
        etiqueta: '05 · Drâa Valley',
        titulo: 'Palm groves, market and local life',
        texto: [
          'We continue to the Drâa Valley. A landscape of great palm groves, kasbahs and villages that follow the course of the river. We visit a local market and get closer to everyday life in this region.',
          "Here the landscape isn't just beautiful. It's the way of life of the people who inhabit it. Overnight in Zagora or nearby.",
        ],
        foto: FOTOS.palmeralMontana,
      },
      {
        etiqueta: '06–07 · Erg Chigaga',
        titulo: 'And then, the Sahara',
        texto: [
          'From Zagora we continue toward the desert. We get into 4x4s and leave behind the last signs of city life.',
          'The landscape opens up. The dunes appear. Erg Chigaga. We stay here for two nights.',
        ],
        foto: FOTOS.stockDunasPanoramica,
      },
      {
        etiqueta: 'Two nights to experience the desert',
        titulo: "Here there's no need to fill the time",
        texto: [
          'There is time to walk among the dunes, rest, share a tea and get to know some of the traditions of the Sahara.',
          'Bread baked under the sand. Turbans. Henna. Saharawi music. Fire. And a sky that at night seems to never end.',
        ],
        foto: FOTOS.hogueraNoche,
      },
      {
        etiqueta: '08 · Erg Chigaga → Aït Ben Haddou',
        titulo: 'From the dunes to the kasbahs',
        texto: [
          'We leave the Sahara behind and start heading back. The landscape changes again: from the desert we move back into the mountains, villages and kasbahs.',
          "We arrive in Aït Ben Haddou, where we'll spend our last night in the south.",
        ],
        foto: FOTOS.aitBenHaddouAtardecer,
      },
      {
        etiqueta: '09 · Aït Ben Haddou → Marrakech',
        titulo: 'Last night',
        texto: [
          'We cross the Atlas once more. The landscape changes one last time as we approach Marrakech.',
          'We spend the last night in Marrakech or nearby, depending on your flight time.',
        ],
        foto: FOTOS.marrakechTerrazas,
      },
      {
        etiqueta: '10',
        titulo: 'See you soon',
        texto: [
          'Breakfast and transfer to the airport. You take with you photographs, flavors, conversations and memories. But above all, a different way of looking at southern Morocco.',
        ],
        foto: FOTOS.miradorHamada,
      },
    ],
    cierre: {
      titulo: 'For those who want to get closer',
      texto: [
        'To get to know the south through its landscapes and through the people who live there.',
        'With enough time for real encounters to happen.',
      ],
    },
  },

  {
    slug: 'moroccan-soul',
    nombre: 'Moroccan Soul',
    dias: '8 days',
    lugares: 'Marrakech · Essaouira · Ouirgane',
    gancho: 'Traveling slowly is still traveling.',
    resumenTarjeta:
      "Marrakech, the Atlantic and the Atlas, without rushing. For those who don't want to fill every day with activities.",
    foto: FOTOS.stockEssaouiraPanoramica,
    fotoAlterna: FOTOS.valleOuirgane,
    titular: ['There is another way', 'to travel through Morocco'],
    entradilla: [
      'Our most unhurried trip: Marrakech, the Atlantic and the Atlas mountains, with time to eat well, walk, and rest.',
      "We don't want to fill every day. We want to leave room to live it.",
    ],
    sahara: false,
    itinerario: [
      {
        etiqueta: '01 · Marrakech',
        titulo: 'We start slowly',
        texto: [
          'Arrival and transfer to the riad. First walk through the medina, a tea and a welcome dinner.',
          "No need to do more than that. The trip has just begun. Overnight in Marrakech.",
        ],
        foto: FOTOS.stockRiadPatio,
      },
      {
        etiqueta: '02 · Marrakech',
        titulo: 'Marrakech at our own pace',
        texto: [
          'A day to discover the city without rushing. Heritage sites, gardens, souks and craftsmanship.',
          "And also time to choose how you'd like to enjoy it: a hammam, a spa, a workshop, a long meal, or simply getting lost in its streets. Overnight in Marrakech.",
        ],
        foto: FOTOS.marrakechJemaa,
      },
      {
        etiqueta: '03 · Essaouira',
        titulo: 'The Atlantic',
        texto: [
          'We leave Marrakech and head for the ocean. We arrive in Essaouira, with its medina, its fishing harbor, its galleries and its craftspeople.',
          'In the afternoon, we walk by the sea and wait for the sunset. Overnight in Essaouira.',
        ],
        foto: FOTOS.essaouiraMurallas,
      },
      {
        etiqueta: '04 · Essaouira',
        titulo: "Ocean time",
        texto: [
          "Today there's no list of things to do. There are options.",
          'Beach. Fresh fish. Sidi Kaouki. Surf. Kitesurf. A walk around Essaouira. Or simply doing nothing at all. Second night in Essaouira.',
        ],
        foto: FOTOS.stockEssaouiraBarcas,
      },
      {
        etiqueta: '05 · Essaouira → Ouirgane',
        titulo: 'Toward the mountains',
        texto: [
          'We leave the ocean and head inland. We pass through argan forests and visit a cooperative before continuing toward the Atlas mountains.',
          'We arrive in Ouirgane. Greener. Quieter. A different pace. Overnight in Ouirgane.',
        ],
        foto: FOTOS.valleOuirgane,
      },
      {
        etiqueta: '06 · Ouirgane',
        titulo: 'The Atlas',
        texto: [
          'A day to discover the surroundings. We walk through the mountains, visit Berber villages, share a tea and discover the local food.',
          'We can also arrange a cooking workshop. Overnight in Ouirgane.',
        ],
        foto: FOTOS.stockPuebloAtlas,
      },
      {
        etiqueta: '07 · Ouirgane',
        titulo: 'Simply being',
        texto: [
          'Today we leave room to breathe. Pool. Garden. Hammam. Massage. A walk. Or simply taking in the mountains.',
          'One last dinner to close out the trip. Overnight in Ouirgane.',
        ],
        foto: FOTOS.riadPatioNaranjos,
      },
      {
        etiqueta: '08 · Departure',
        titulo: 'Ending calmly',
        texto: [
          "After breakfast, transfer to Marrakech airport. About an hour's drive.",
          "Moroccan Soul ends the way we think good trips should: calmly.",
        ],
        foto: null,
      },
    ],
    cierre: {
      titulo: 'For those who want to slow down',
      texto: [
        'For you, if you prefer one long meal over three quick visits, or a hammam over rushing from one monument to the next.',
      ],
    },
  },

  {
    slug: 'the-imperial-journey',
    nombre: 'The Imperial Journey',
    dias: '12 days',
    lugares: 'Casablanca · Fez · Dades · Erg Chigaga · Fint Oasis · Aït Ben Haddou · Marrakech',
    gancho: 'From the imperial cities to the heart of the Sahara.',
    resumenTarjeta:
      'Fez, the Atlas, the south, the desert and Marrakech in a single trip. With Erg Chigaga or Merzouga, your choice.',
    foto: FOTOS.stockFezPuerta,
    fotoAlterna: FOTOS.stockTintesFez,
    titular: ['From the cities', 'to the desert'],
    entradilla: [
      'Great cities, medinas and palaces. And also mountains, kasbahs, oases and desert.',
      'The Imperial Journey brings both worlds together, without having to choose between culture, landscape and the Sahara.',
    ],
    sahara: true,
    itinerario: [
      {
        etiqueta: '01 · Casablanca or Marrakech',
        titulo: 'We start wherever makes sense for you',
        texto: [
          'We can start the trip in Casablanca or Marrakech, depending on your flights and the way you want to experience Morocco.',
          "If we start in Casablanca, we ease into the country before heading to Fez. If you'd rather arrive in Marrakech, we can adapt the route. The trip adapts to you, not the other way around.",
        ],
        foto: FOTOS.casablanca,
      },
      {
        etiqueta: '02–03 · Fez',
        titulo: 'The historical heart',
        texto: [
          'We arrive in Fez. Its medina, its narrow streets, its craftspeople, its colors and its traditional trades show us one of the oldest faces of Morocco.',
          'One day to discover it. And another to simply get lost. Because in Fez, getting lost is also part of the trip.',
        ],
        foto: FOTOS.stockTintesFez,
      },
      {
        etiqueta: '04 · Fez → Dades',
        titulo: 'Heading south',
        texto: [
          'We leave the cities behind. We cross the Atlas and the landscape starts to change.',
          'The mountains, the valleys and the first kasbahs let us know we are entering a different Morocco. We arrive in the Dades region. Overnight in Dades.',
        ],
        foto: FOTOS.gargantasDades,
      },
      {
        etiqueta: '05–06 · Erg Chigaga',
        titulo: 'Toward the Sahara',
        texto: [
          'We continue south. Palm groves, oases, mud-brick villages and increasingly arid landscapes accompany us along the way.',
          'Until we leave the paved road behind. We get into 4x4s. And we arrive in Erg Chigaga. Two nights to let the desert set the pace.',
        ],
        foto: FOTOS.dunasChigaga,
      },
      {
        etiqueta: 'Two nights to experience the Sahara',
        titulo: 'And time to simply be',
        texto: [
          'Sunrise among the dunes. Walking on the sand. Sharing a tea. Bread baked under the sand.',
          'Turbans and henna. Saharawi music as night falls.',
        ],
        foto: FOTOS.teSobreLaDuna,
      },
      {
        etiqueta: '07–08 · Fint Oasis · Aït Ben Haddou',
        titulo: 'From the desert to the oases',
        texto: [
          'We leave the dunes and start heading back. The landscape transforms again: the desert gives way to palm groves, oases, villages and kasbahs.',
          'We arrive at Fint Oasis, where we can walk, share a tea and enjoy a local meal. We continue toward Aït Ben Haddou, one of the great kasbahs of the south.',
        ],
        foto: FOTOS.stockKasbahValle,
      },
      {
        etiqueta: '09–11 · Marrakech',
        titulo: 'The red city',
        texto: [
          'We arrive in Marrakech after crossing the south and the Atlas. Now we can slow down again.',
          'Three nights to enjoy the city, return to the medina, shop for crafts, discover new corners, or simply rest. We can also arrange a hammam, a spa, a cooking workshop or a food experience.',
        ],
        foto: FOTOS.marrakechKoutoubia,
      },
      {
        etiqueta: '12',
        titulo: 'See you soon, Morocco',
        texto: [
          'The trip can end in Marrakech or Casablanca, depending on your flights.',
          "We adapt the route so the trip makes sense from start to finish — and so you don't have to build your Morocco around our itinerary.",
        ],
        foto: null,
      },
    ],
    cierre: {
      titulo: 'For those who want to see Morocco as a whole',
      texto: [
        'Cities, culture, the Atlas, kasbahs, oases and the Sahara. A complete route, without turning the trip into a race.',
      ],
    },
  },
]

export const rutaPorSlug = (slug) => RUTAS.find((r) => r.slug === slug)

export const NUESTRO_SAHARA = {
  etiqueta: 'Our Sahara',
  titulo: "Erg Chigaga isn't just another stop",
  texto: [
    'Abdoul was born in the Sahara and runs his own camp in Erg Chigaga.',
    "We're not taking you to a destination there: we're taking you to a part of our story.",
  ],
}
