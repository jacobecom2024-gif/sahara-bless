import { Link } from 'react-router-dom'
import Boton from './Boton'
import Revelar from './Revelar'
import Lineas from './Lineas'
import { Flecha } from './Iconos'
import { src, srcSet } from '../datos/fotos'

/**
 * Cierre de página: titular, dos o tres líneas y una sola acción.
 *
 * Con `foto`: foto a sangre y texto en un bloque base (.cierre--foto), nunca
 * sobre fondo oscuro. Sin `foto`: `superficie` 'base' | 'arena'.
 * Ver design/05-design-system.md.
 */
export default function BloqueCTA({
  etiqueta,
  titulo,
  texto = [],
  cta,
  enlaceSecundario,
  superficie = 'arena',
  foto,
}) {
  const oscuro = !foto && superficie === 'inversa'

  return (
    <section
      className={`cierre seccion ${foto ? 'cierre--foto sup-base' : `sup-${superficie} grano`} ${oscuro ? 'oscuro' : ''}`}
    >
      {foto && (
        <div className="cierre__fondo">
          <img
            src={src(foto, 1600)}
            srcSet={srcSet(foto)}
            sizes="100vw"
            width={foto.ancho}
            height={foto.alto}
            alt=""
            data-origen={foto.origen || 'propia'}
            data-fuente={foto.fuente}
            loading="lazy"
            decoding="async"
          />
        </div>
      )}

      <Revelar className="contenedor cierre__contenido">
        {etiqueta && <p className="etiqueta">{etiqueta}</p>}
        <h2 className="cierre__titulo">
          <Lineas texto={titulo} />
        </h2>
        {texto.map((p) => (
          <p key={p} className="cierre__texto lead">
            {p}
          </p>
        ))}
        <div className="cierre__accion">
          <Boton a={cta.a} oscuro={oscuro}>
            {cta.texto}
          </Boton>
        </div>

        {/* Segunda vía, deliberadamente más discreta que el CTA: un enlace,
            nunca un segundo botón compitiendo con el principal. */}
        {enlaceSecundario && (
          <p className="cierre__secundario">
            <Link className="enlace-flecha" to={enlaceSecundario.a}>
              {enlaceSecundario.texto}
              <Flecha width={18} height={18} />
            </Link>
          </p>
        )}
      </Revelar>
    </section>
  )
}
