import { Link } from 'react-router-dom'
import { src, srcSet } from '../datos/fotos'
import { Flecha } from './Iconos'

/**
 * Tarjeta de ruta.
 *
 * Toda la tarjeta es un único enlace. El "Ver la ruta →" es un <span>
 * decorativo, no un segundo enlace anidado: dos enlaces al mismo destino
 * duplican la parada de tabulación y confunden al lector de pantalla.
 *
 * Nunca "Reservar ahora": las rutas son puntos de partida (brief, §4).
 */
export default function TarjetaRuta({ ruta, prioritaria = false }) {
  return (
    <article className="tarjeta">
      <Link to={`/rutas/${ruta.slug}`} className="tarjeta__enlace">
        <span className="tarjeta__marco">
          <img
            className="tarjeta__img"
            src={src(ruta.foto, 1600)}
            srcSet={srcSet(ruta.foto)}
            sizes="(min-width: 900px) 45vw, 100vw"
            width={ruta.foto.ancho}
            height={ruta.foto.alto}
            alt={ruta.foto.alt}
            loading={prioritaria ? 'eager' : 'lazy'}
            decoding={prioritaria ? 'sync' : 'async'}
          />
          <span className="tarjeta__velo" />
          <span className="tarjeta__cabecera">
            {/* Encabezado real, no un span con pinta de título: sin él la página
                de Rutas es una lista de cinco artículos sin nombre. Un <h3>
                dentro de un <a> es HTML válido mientras no anide interactivos. */}
            <h3 className="tarjeta__nombre">{ruta.nombre}</h3>
            <span className="tarjeta__dias">{ruta.dias}</span>
          </span>
        </span>

        <span className="tarjeta__cuerpo">
          <span className="tarjeta__lugares etiqueta">{ruta.lugares}</span>
          <span className="tarjeta__gancho">{ruta.gancho}</span>
          {/* resumenTarjeta ya no se pinta aquí (ajuste de tono, 2026-09):
              nombre, lugares y gancho bastan en la tarjeta. Se sigue
              usando como meta descripción de la ficha. */}
          <span className="tarjeta__cta">
            Ver la ruta
            <Flecha width={18} height={18} />
          </span>
        </span>
      </Link>
    </article>
  )
}
