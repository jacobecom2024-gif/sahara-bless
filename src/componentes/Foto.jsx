import { src, srcSet } from '../datos/fotos'

/**
 * Fotografía con dimensiones declaradas (sin saltos de maquetación).
 * `recorte` fuerza una proporción; el objeto se recorta con object-fit: cover.
 */
export default function Foto({ foto, recorte, pie, prioritaria = false, sizes = '100vw', className = '' }) {
  if (!foto) return null

  const imagen = (
    <img
      className={`foto__img ${className}`}
      src={src(foto, 1600)}
      srcSet={srcSet(foto)}
      sizes={sizes}
      width={foto.ancho}
      height={foto.alto}
      alt={foto.alt}
      style={recorte ? { aspectRatio: recorte } : undefined}
      loading={prioritaria ? 'eager' : 'lazy'}
      decoding={prioritaria ? 'sync' : 'async'}
      fetchPriority={prioritaria ? 'high' : 'auto'}
    />
  )

  if (!pie) return <figure className="foto">{imagen}</figure>

  return (
    <figure className="foto">
      {imagen}
      <figcaption className="foto__pie">{pie}</figcaption>
    </figure>
  )
}
