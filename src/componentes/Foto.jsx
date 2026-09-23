import { src, srcSet } from '../datos/fotos'

/**
 * Fotografía.
 *
 * - Siempre reserva espacio con `aspect-ratio` + width/height reales → CLS 0.
 * - `prioritaria` sólo para el hero de cada página (una por página).
 * - `recorte` fuerza una proporción distinta a la del original (p. ej. tarjetas
 *   3:2 o heros panorámicos); el objeto se recorta con object-fit: cover.
 * - `pie` renderiza un <figcaption> en versalitas (tomado de la dirección A).
 * - `data-origen` / `data-fuente`: convención acordada con la clienta. Deja
 *   escrito en el HTML si la imagen es propia o de banco, para poder auditarlo
 *   sin abrir el código. Lo declara el catálogo, no la página.
 */
export default function Foto({ foto, recorte, pie, prioritaria = false, sizes = '100vw', className = '' }) {
  if (!foto) return null

  const proporcion = recorte || `${foto.ancho} / ${foto.alto}`

  const imagen = (
    <img
      className={`foto__img ${className}`}
      src={src(foto, 1600)}
      srcSet={srcSet(foto)}
      sizes={sizes}
      width={foto.ancho}
      height={foto.alto}
      alt={foto.alt}
      data-origen={foto.origen || 'propia'}
      data-fuente={foto.fuente}
      style={{ aspectRatio: proporcion }}
      loading={prioritaria ? 'eager' : 'lazy'}
      decoding={prioritaria ? 'sync' : 'async'}
      fetchPriority={prioritaria ? 'high' : 'auto'}
    />
  )

  if (!pie) return imagen

  return (
    <figure className="foto">
      {imagen}
      <figcaption className="foto__pie etiqueta">{pie}</figcaption>
    </figure>
  )
}
