import { Link } from 'react-router-dom'
import { src, srcSet } from '../datos/fotos'
import { useIdioma } from '../i18n/contexto'
import { rutaLocalizada } from '../i18n/idiomas'

/**
 * Tarjeta de ruta.
 *
 * Formato unificado (2026-09-24): título → foto → pie con el nombre y las
 * paradas. Las cinco miden lo mismo; antes la primera ocupaba el ancho
 * completo y parecía que había una ruta más importante que las demás.
 *
 * Sigue siendo UN solo enlace que envuelve las tres partes, aunque el título y
 * el pie se vean como enlaces: dos <a> al mismo destino duplican la parada de
 * tabulación y el lector de pantalla los anuncia dos veces.
 *
 * `fotoAlterna`: al pasar el ratón, fundido lento a una segunda foto de la
 * misma ruta. Solo en dispositivos con ratón de verdad (`hover: hover` y
 * `pointer: fine`); en táctil no se descarga ni se pinta.
 */
export default function TarjetaRuta({ ruta, prioritaria = false }) {
  const alterna = ruta.fotoAlterna
  const idioma = useIdioma()

  return (
    <article className="tarjeta">
      <Link to={rutaLocalizada('rutas', idioma, ruta.slug)} className="tarjeta__enlace">
        <span className="tarjeta__titulo-fila">
          {/* Encabezado real, no un span con pinta de título: sin él la página
              de Rutas es una lista de cinco artículos sin nombre. Un <h3>
              dentro de un <a> es HTML válido mientras no anide interactivos. */}
          <h3 className="tarjeta__nombre">{ruta.nombre}</h3>
          <span className="tarjeta__dias etiqueta">{ruta.dias}</span>
        </span>

        <span className="tarjeta__marco">
          <img
            className="tarjeta__img"
            src={src(ruta.foto, 1600)}
            srcSet={srcSet(ruta.foto)}
            sizes="(min-width: 900px) 45vw, 100vw"
            width={ruta.foto.ancho}
            height={ruta.foto.alto}
            alt={ruta.foto.alt}
            data-origen={ruta.foto.origen || 'propia'}
            data-fuente={ruta.foto.fuente}
            loading={prioritaria ? 'eager' : 'lazy'}
            decoding={prioritaria ? 'sync' : 'async'}
          />
          {alterna && (
            <img
              className="tarjeta__img tarjeta__img--alterna"
              src={src(alterna, 1600)}
              srcSet={srcSet(alterna)}
              sizes="(min-width: 900px) 45vw, 100vw"
              width={alterna.ancho}
              height={alterna.alto}
              alt=""
              data-origen={alterna.origen || 'propia'}
              data-fuente={alterna.fuente}
              loading="lazy"
              decoding="async"
              aria-hidden="true"
            />
          )}
        </span>

        <span className="tarjeta__pie">
          <span className="tarjeta__pie-nombre">{ruta.nombre}</span>
          <span className="tarjeta__pie-lugares">{ruta.lugares}</span>
        </span>
      </Link>
    </article>
  )
}
