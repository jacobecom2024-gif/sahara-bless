import { useEffect, useState } from 'react'
import { videoSrc, videoPoster } from '../datos/fotos'

/**
 * Vídeo de fondo: siempre mudo, en bucle y sin controles. Nunca es una pieza
 * que el visitante mire de forma aislada; va detrás de texto.
 *
 * - `prefers-reduced-motion`: no se reproduce nada. Se pinta el póster como
 *   imagen fija, que es lo que pide el brief para todo el movimiento del sitio.
 * - `desdeAncho`: por debajo de ese ancho tampoco hay vídeo. El de la sección
 *   de Erg Chigaga es decoración de fondo y no justifica 6,7 MB en un móvil;
 *   el del hero sí se sirve siempre, porque es la pieza principal.
 * - El póster es también lo que se ve mientras el archivo carga y lo que queda
 *   si el navegador bloquea la reproducción automática.
 * - `aria-hidden`: es decoración. El texto de la sección ya cuenta lo que hay
 *   que contar, y un lector de pantalla no gana nada anunciando un vídeo mudo.
 *   La descripción de la escena vive en `video.alt` para el póster.
 */
export default function VideoFondo({ video, className = '', desdeAncho = 0 }) {
  const [reducir, setReducir] = useState(true)

  useEffect(() => {
    const movimiento = window.matchMedia('(prefers-reduced-motion: reduce)')
    const ancho = window.matchMedia(`(min-width: ${desdeAncho}px)`)
    // `saveData`: si el navegador pide ahorrar datos, no se descargan megas de
    // vídeo decorativo. Chrome y Edge lo exponen; el resto simplemente no.
    const ahorro = navigator.connection?.saveData === true

    const aplicar = () => setReducir(movimiento.matches || !ancho.matches || ahorro)
    aplicar()
    movimiento.addEventListener('change', aplicar)
    ancho.addEventListener('change', aplicar)
    return () => {
      movimiento.removeEventListener('change', aplicar)
      ancho.removeEventListener('change', aplicar)
    }
  }, [desdeAncho])

  const comunes = {
    className: `video-fondo ${className}`,
    width: video.ancho,
    height: video.alto,
    'data-origen': video.origen,
    'data-fuente': video.fuente,
  }

  // Primer render (y movimiento reducido): imagen fija, cero descarga de vídeo.
  if (reducir) {
    return <img {...comunes} src={videoPoster(video)} alt={video.alt} decoding="async" />
  }

  return (
    <video
      {...comunes}
      poster={videoPoster(video)}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden="true"
    >
      <source src={videoSrc(video)} type="video/mp4" />
    </video>
  )
}
