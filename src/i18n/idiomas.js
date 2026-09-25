/**
 * Registro central de idiomas y rutas traducidas.
 *
 * Única fuente de verdad para "qué URL tiene cada página en cada idioma". Todo
 * lo demás (menú, CTA, selector de idioma, hreflang, sitemap) se construye a
 * partir de este archivo, para que los tres idiomas no puedan desincronizarse.
 *
 * Los slugs de las 5 rutas individuales (the-desert-journey, atlantic-to-sahara…)
 * NO viven aquí: son nombres de producto y se mantienen iguales en los tres
 * idiomas, así que no hacen falta una traducción — es el propio `slug` de
 * `RUTAS` en rutas.<lang>.js.
 */

export const IDIOMAS = ['es', 'en', 'fr']
export const IDIOMA_DEFECTO = 'es'

/** Códigos completos para `og:locale`. */
export const LOCALE_COMPLETO = {
  es: 'es_ES',
  en: 'en_US',
  fr: 'fr_FR',
}

/**
 * Slug de cada página en cada idioma. `inicio` es un caso especial: no tiene
 * slug propio, es la página índice del idioma (`/es`, `/en`, `/fr`).
 */
export const PAGINAS = {
  rutas: { es: 'rutas', en: 'routes', fr: 'itineraires' },
  viajeros: { es: 'viajeros', en: 'travelers', fr: 'voyageurs' },
  agencias: { es: 'agencias', en: 'agencies', fr: 'agences' },
  historia: { es: 'nuestra-historia', en: 'our-story', fr: 'notre-histoire' },
  desiertos: {
    es: 'erg-chigaga-o-merzouga',
    en: 'erg-chigaga-or-merzouga',
    fr: 'erg-chigaga-ou-merzouga',
  },
  contacto: { es: 'contacto', en: 'contact', fr: 'contact' },
}

/**
 * URL de una página en un idioma. `param` es el slug de una ruta individual
 * (solo tiene sentido para `clave === 'rutas'`); el slug del producto no se
 * traduce, así que se pasa tal cual.
 */
export function rutaLocalizada(clave, idioma, param) {
  if (clave === 'inicio') return `/${idioma}`
  const slug = PAGINAS[clave]?.[idioma]
  if (!slug) return `/${idioma}`
  return param ? `/${idioma}/${slug}/${param}` : `/${idioma}/${slug}`
}

/**
 * Dado un pathname (`/es/rutas/atlantic-to-sahara`), identifica la página
 * (`rutas`) y, si la hay, el slug de producto (`atlantic-to-sahara`).
 * Devuelve `{ clave: 'inicio', param: undefined }` para la raíz de un idioma,
 * y `{ clave: null }` si no reconoce el primer segmento.
 */
export function resolverPagina(pathname, idioma) {
  const partes = pathname.split('/').filter(Boolean)
  const [, ...resto] = partes // partes[0] es el idioma, se descarta
  if (resto.length === 0) return { clave: 'inicio', param: undefined }

  const [segmento, param] = resto
  const clave = Object.keys(PAGINAS).find((k) => PAGINAS[k][idioma] === segmento)
  return { clave: clave ?? null, param }
}

/**
 * Dada la URL actual (en `idiomaActual`), construye la URL equivalente en
 * `idiomaDestino`. Conserva el slug de ruta individual si lo hay. Si el
 * pathname no se reconoce, cae al índice del idioma destino (nunca deja un
 * enlace roto).
 */
export function rutaEnOtroIdioma(pathname, idiomaActual, idiomaDestino) {
  const { clave, param } = resolverPagina(pathname, idiomaActual)
  if (!clave) return `/${idiomaDestino}`
  return rutaLocalizada(clave, idiomaDestino, clave === 'rutas' ? param : undefined)
}
