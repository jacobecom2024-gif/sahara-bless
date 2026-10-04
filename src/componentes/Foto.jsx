import { src, srcSet } from '../datos/fotos'

/**
 * Fotografía con dimensiones declaradas. Si el archivo no se puede cargar, la imagen se oculta
 * en lugar de mostrar un icono roto. `recorte` fuerza una proporción (object-fit: cover).
 */
export default function Foto({ foto, recorte, pie, prioritaria = false, sizes = '100vw', className = '', posicion = '50% 50%' }) {
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
      style={{ objectPosition: posicion, ...(recorte ? { aspectRatio: recorte } : {}) }}
      loading={prioritaria ? 'eager' : 'lazy'}
      decoding={prioritaria ? 'sync' : 'async'}
      fetchPriority={prioritaria ? 'high' : 'auto'}
      onError={(e) => {
        e.currentTarget.style.display = 'none'
      }}
    />
  )

  return (
    <figure className="foto">
      {imagen}
      {pie && <figcaption className="foto__pie">{pie}</figcaption>}
    </figure>
  )
}
