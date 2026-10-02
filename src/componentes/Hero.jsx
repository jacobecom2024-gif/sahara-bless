import { src, srcSet } from '../datos/fotos'
import Lineas from './Lineas'

/**
 * Hero fotográfico.
 *
 * Prueba sin velo (2026-10-02, rama prueba-visual-sobre-main): sin overlay
 * sobre la foto. Si el contraste del texto falla sobre alguna foto concreta,
 * se decide por foto —cambiar la imagen, el color del texto, otra solución—
 * en vez de volver a poner una capa oscura general.
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
