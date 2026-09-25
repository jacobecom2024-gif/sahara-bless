import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { IDIOMAS, IDIOMA_DEFECTO, LOCALE_COMPLETO, rutaEnOtroIdioma } from './idiomas'

/**
 * SEO técnico que depende del idioma, no del contenido de cada página:
 *
 *  - `<html lang>`: se actualiza al cambiar de idioma (el `lang="es"` de
 *    index.html es solo el valor del primer pintado, antes de que React monte).
 *  - `<link rel="alternate" hreflang>`: una etiqueta por cada uno de los tres
 *    idiomas más `x-default` → español, recalculadas en cada navegación a
 *    partir del registro de páginas (idiomas.js), no escritas a mano por
 *    página. Van con URL absoluta (se exige en la especificación) usando
 *    `window.location.origin`: funciona igual en preview de Vercel que en el
 *    dominio definitivo, el día que exista.
 *  - `og:locale`: el meta que ya traía index.html, actualizado por idioma.
 *
 * Se monta una sola vez, dentro de `IdiomaLayout` — no en cada página.
 */
export default function MetaIdioma({ idioma }) {
  const { pathname } = useLocation()

  useEffect(() => {
    document.documentElement.lang = idioma

    const meta = document.querySelector('meta[property="og:locale"]')
    if (meta) meta.setAttribute('content', LOCALE_COMPLETO[idioma])
  }, [idioma])

  useEffect(() => {
    const origen = window.location.origin
    const previos = document.querySelectorAll('link[rel="alternate"][data-hreflang]')
    previos.forEach((nodo) => nodo.remove())

    const enlaces = [
      ...IDIOMAS.map((destino) => ({
        hreflang: destino,
        href: origen + rutaEnOtroIdioma(pathname, idioma, destino),
      })),
      {
        hreflang: 'x-default',
        href: origen + rutaEnOtroIdioma(pathname, idioma, IDIOMA_DEFECTO),
      },
    ]

    for (const { hreflang, href } of enlaces) {
      const link = document.createElement('link')
      link.rel = 'alternate'
      link.hreflang = hreflang
      link.href = href
      link.dataset.hreflang = 'true'
      document.head.appendChild(link)
    }
  }, [pathname, idioma])

  return null
}
