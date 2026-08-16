import { src, srcSet } from '../datos/fotos'
import Lineas from './Lineas'

/**
 * Hero fotográfico.
 *
 * El texto se ancla abajo, que es donde el velo llega a 0.80 de opacidad: ahí
 * el blanco pasa de 10:1 incluso sobre la foto más clara del catálogo. Nunca
 * texto directo sobre la imagen.
 *
 * `alto`: "completo" (portada) | "medio" (páginas interiores) | "corto".
 */
export default function Hero({ foto, etiqueta, titulo, subtitulo, alto = 'medio', children }) {
  return (
    <section className={`hero hero--${alto}`}>
      <div className="hero__fondo">
        <img
          className="hero__img"
          src={src(foto, 1600)}
          srcSet={srcSet(foto)}
          sizes="100vw"
          width={foto.ancho}
          height={foto.alto}
          alt={foto.alt}
          loading="eager"
          decoding="sync"
          fetchPriority="high"
        />
        <div className="hero__velo" />
      </div>

      <div className="contenedor hero__contenido">
        {etiqueta && <p className="hero__etiqueta etiqueta">{etiqueta}</p>}
        <h1 className="hero__titulo">
          <Lineas texto={titulo} />
        </h1>
        {subtitulo && <p className="hero__subtitulo">{subtitulo}</p>}
        {children && <div className="hero__acciones">{children}</div>}
      </div>
    </section>
  )
}
