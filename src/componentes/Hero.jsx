import { src, srcSet } from '../datos/fotos'

/**
 * Cabecera fotográfica. Sin botones encima de la foto: el texto es una línea introductoria
 * y un titular de dos niveles; la segunda línea es la dominante.
 */
export default function Hero({ foto, intro, titulo, alto = 'completo', etiqueta, pie }) {
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
          onError={(e) => {
            e.currentTarget.style.display = 'none'
          }}
        />
        <div className="hero__velo" aria-hidden="true" />
      </div>

      <div className="hero__texto">
        {etiqueta && <p className="etiqueta" style={{ color: '#e7c48a' }}>{etiqueta}</p>}
        {intro && <p className="hero__intro">{intro}</p>}
        <h1 className="hero__titulo">
          <span className="hero__titulo-1">{titulo[0]}</span>
          <span className="hero__titulo-2">{titulo[1] ?? titulo[0]}</span>
        </h1>
      </div>
      {pie && <p className="hero__pie">{pie}</p>}
    </section>
  )
}
