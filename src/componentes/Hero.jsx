import { Fragment } from 'react'
import { src, srcSet } from '../datos/fotos'

/**
 * Cabecera fotográfica. Todos los heros llevan el mismo velo: el texto siempre
 * va sobre una zona oscura y no depende de cada foto.
 *
 * `alto`: "completo" (portada) | "medio" (páginas interiores) | "corto".
 */
export default function Hero({ foto, etiqueta, titulo, subtitulo, alto = 'medio', children, tira }) {
  return (
    <section className={`hero hero--${alto}`}>
      <div className="hero__fondo">
        <img
          className="hero__img"
          src={src(foto, 1600)}
          srcSet={srcSet(foto)}
          sizes="100vw"
          alt={foto.alt}
          width={foto.ancho}
          height={foto.alto}
          loading="eager"
          decoding="sync"
          fetchPriority="high"
        />
        <div className="hero__velo" aria-hidden="true" />
      </div>

      <div className="contenedor hero__contenido">
        {etiqueta && <p className="hero__etiqueta etiqueta">{etiqueta}</p>}
        <h1 className="hero__titulo">
          {titulo.map((linea, i) => (
            <Fragment key={linea}>
              {i > 0 && <br />}
              {linea}
            </Fragment>
          ))}
        </h1>
        {subtitulo && <p className="hero__subtitulo">{subtitulo}</p>}
        {children && <div className="acciones">{children}</div>}
        {tira && <p className="hero__tira etiqueta">{tira}</p>}
      </div>
    </section>
  )
}
