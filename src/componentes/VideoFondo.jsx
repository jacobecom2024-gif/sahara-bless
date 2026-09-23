import { useEffect, useRef, useState } from 'react'
import { videoSrc, videoPoster } from '../datos/fotos'

/**
 * Vídeo de fondo: siempre mudo, en bucle y sin controles de reproductor. Nunca
 * es una pieza que el visitante mire de forma aislada; va detrás de texto.
 *
 * Cuándo NO se reproduce solo:
 * - `prefers-reduced-motion: reduce`. Es el caso más frecuente y el que hacía
 *   pensar que el vídeo estaba roto: Windows trae los "efectos de animación"
 *   desactivados en muchos equipos, y entonces el hero se queda en el póster.
 *   Desde 2026-09-23 el póster lleva un botón para reproducirlo a mano, así que
 *   el vídeo sigue estando al alcance de quien lo quiera ver.
 * - `saveData`: si el navegador pide ahorrar datos, no se descargan megas de
 *   vídeo decorativo.
 * - `desdeAncho`: por debajo de ese ancho tampoco hay vídeo. El de la sección
 *   de Erg Chigaga es decoración de fondo y no justifica 6,7 MB en un móvil;
 *   el del hero sí se sirve siempre, porque es la pieza principal.
 *
 * Mientras se reproduce hay un botón de pausa (WCAG 2.2.2: todo movimiento
 * automático de más de cinco segundos tiene que poder pararse).
 *
 * `aria-hidden` en el vídeo: es decoración, y la escena ya se describe en el
 * póster. El botón sí es accesible y dice lo que hace.
 */
export default function VideoFondo({ video, className = '', desdeAncho = 0, control = true }) {
  const [auto, setAuto] = useState(false)
  const [forzado, setForzado] = useState(false)
  const [enMarcha, setEnMarcha] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const movimiento = window.matchMedia('(prefers-reduced-motion: reduce)')
    const ancho = window.matchMedia(`(min-width: ${desdeAncho}px)`)
    const ahorro = navigator.connection?.saveData === true

    const aplicar = () => setAuto(!movimiento.matches && ancho.matches && !ahorro)
    aplicar()
    movimiento.addEventListener('change', aplicar)
    ancho.addEventListener('change', aplicar)
    return () => {
      movimiento.removeEventListener('change', aplicar)
      ancho.removeEventListener('change', aplicar)
    }
  }, [desdeAncho])

  const reproducir = auto || forzado

  const comunes = {
    className: `video-fondo ${className}`,
    width: video.ancho,
    height: video.alto,
    'data-origen': video.origen,
    'data-fuente': video.fuente,
  }

  const alternar = () => {
    const v = ref.current
    if (!v) {
      setForzado(true)
      return
    }
    if (v.paused) v.play()
    else v.pause()
  }

  return (
    <>
      {reproducir ? (
        <video
          {...comunes}
          ref={ref}
          poster={videoPoster(video)}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          onPlay={() => setEnMarcha(true)}
          onPause={() => setEnMarcha(false)}
        >
          <source src={videoSrc(video)} type="video/mp4" />
        </video>
      ) : (
        <img {...comunes} src={videoPoster(video)} alt={video.alt} decoding="async" />
      )}

      {control && (
        <button type="button" className="video-fondo__control" onClick={alternar}>
          {enMarcha ? (
            <>
              <span className="video-fondo__icono" aria-hidden="true">
                <svg width="10" height="12" viewBox="0 0 10 12" fill="currentColor">
                  <rect x="0" y="0" width="3" height="12" rx="1" />
                  <rect x="7" y="0" width="3" height="12" rx="1" />
                </svg>
              </span>
              Pausar el vídeo
            </>
          ) : (
            <>
              <span className="video-fondo__icono" aria-hidden="true">
                <svg width="10" height="12" viewBox="0 0 10 12" fill="currentColor">
                  <path d="M0 1.2c0-.9 1-1.5 1.8-1l6.6 4.3a1.2 1.2 0 0 1 0 2L1.8 11.8c-.8.5-1.8-.1-1.8-1z" />
                </svg>
              </span>
              Reproducir el vídeo
            </>
          )}
        </button>
      )}
    </>
  )
}
