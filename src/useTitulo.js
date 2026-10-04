import { useEffect } from 'react'
import { FOTOS, src } from './datos/fotos'

/** Título, descripción y metadatos Open Graph por página. */
export default function useTitulo(titulo, descripcion, foto = FOTOS.campamentoHoraAzul) {
  useEffect(() => {
    document.title = titulo
    const fijar = (selector, valor) => {
      const nodo = document.querySelector(selector)
      if (nodo && valor) nodo.setAttribute('content', valor)
    }
    fijar('meta[name="description"]', descripcion)
    fijar('meta[property="og:title"]', titulo)
    fijar('meta[property="og:description"]', descripcion)
    fijar('meta[property="og:image"]', new URL(src(foto, 1600), window.location.origin).pathname)
  }, [titulo, descripcion, foto])
}
