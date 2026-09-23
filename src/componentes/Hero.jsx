import { src, srcSet } from '../datos/fotos'
import Lineas from './Lineas'
import VideoFondo from './VideoFondo'

/**
 * Hero fotográfico.
 *
 * El texto se ancla abajo a la izquierda, sobre los degradados localizados del
 * velo (ver .hero__velo y design/05-design-system.md → Hero).
 *
 * `alto`: "completo" (portada) | "medio" (páginas interiores) | "corto".
 *
 * Dos variantes de composición, solo para la portada:
 * - `confirmacion`: línea que va DEBAJO del titular, no encima. En la portada
 *   "Partner local para agencias de viajes" ya no es una etiqueta previa, sino
 *   la confirmación comercial de lo que el titular promete.
 * - `crescendo`: el titular llega en dos tamaños, la primera parte como
 *   entrada y la segunda dominante. Requiere `titulo` de dos elementos.
 */
export default function Hero({
  foto,
  video,
  etiqueta,
  confirmacion,
  titulo,
  subtitulo,
  alto = 'medio',
  crescendo = false,
  children,
}) {
  // Un titular de una frase larga no puede ir al tamaño de uno de tres
  // palabras: ocuparía media pantalla y empujaría el texto fuera del velo.
  const largo = (Array.isArray(titulo) ? titulo.join(' ') : titulo).length > 48
  const partes = Array.isArray(titulo) ? titulo : [titulo]
  const dosTamanos = crescendo && partes.length === 2

  return (
    <section className={`hero hero--${alto} ${video ? 'hero--video' : ''}`}>
      <div className="hero__fondo">
        {video ? (
          <VideoFondo video={video} className="hero__img" />
        ) : (
          <img
            className="hero__img"
            src={src(foto, 1600)}
            srcSet={srcSet(foto)}
            sizes="100vw"
            width={foto.ancho}
            height={foto.alto}
            alt={foto.alt}
            data-origen={foto.origen || 'propia'}
            data-fuente={foto.fuente}
            loading="eager"
            decoding="sync"
            fetchPriority="high"
          />
        )}
        <div className="hero__velo" />
      </div>

      <div className="contenedor hero__contenido">
        {etiqueta && <p className="hero__etiqueta etiqueta">{etiqueta}</p>}

        {dosTamanos ? (
          // El espacio entre los dos tramos no es decorativo: sin él, el nombre
          // accesible del h1 se lee de corrido y pegado (mismo motivo que en
          // Lineas.jsx).
          <h1 className="hero__titulo hero__titulo--crescendo">
            <span className="hero__titulo-entrada">{partes[0]} </span>
            <span className="hero__titulo-remate">{partes[1]}</span>
          </h1>
        ) : (
          <h1 className={`hero__titulo ${largo ? 'hero__titulo--largo' : ''}`}>
            <Lineas texto={titulo} />
          </h1>
        )}

        {confirmacion && <p className="hero__confirmacion etiqueta">{confirmacion}</p>}
        {subtitulo && <p className="hero__subtitulo">{subtitulo}</p>}
        {children && <div className="hero__acciones">{children}</div>}
      </div>
    </section>
  )
}
