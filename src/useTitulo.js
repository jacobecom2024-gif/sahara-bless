import { useEffect } from 'react'

/** Título y descripción por página. */
export default function useTitulo(titulo, descripcion) {
  useEffect(() => {
    document.title = titulo
    const meta = document.querySelector('meta[name="description"]')
    if (meta && descripcion) meta.setAttribute('content', descripcion)
    const og = document.querySelector('meta[property="og:title"]')
    if (og) og.setAttribute('content', titulo)
  }, [titulo, descripcion])
}
