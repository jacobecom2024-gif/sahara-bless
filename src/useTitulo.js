import { useEffect } from 'react'

/**
 * Título y descripción por página.
 *
 * El sitio es una SPA, así que el <title> del index.html sólo vale para la
 * portada; cada ruta lo reescribe al montar. El título de Inicio incluye la
 * marca de forma absoluta y el resto la añade como sufijo — nunca las dos
 * cosas a la vez, que es como acaban duplicándose.
 */
export default function useTitulo(titulo, descripcion) {
  useEffect(() => {
    document.title = titulo

    if (!descripcion) return
    let meta = document.querySelector('meta[name="description"]')
    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute('name', 'description')
      document.head.appendChild(meta)
    }
    meta.setAttribute('content', descripcion)
  }, [titulo, descripcion])
}
