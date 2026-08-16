import Boton from './Boton'
import Revelar from './Revelar'
import Lineas from './Lineas'
import { src, srcSet } from '../datos/fotos'

/**
 * Cierre de página: titular, dos o tres líneas y una sola acción.
 *
 * `superficie`: 'tinta' | 'noche' | 'arena'. El carril B2B usa siempre 'noche'
 * y, por tanto, el botón se pinta en ocre claro (terracota sobre noche daría
 * 2.32:1). Ver design/05-design-system.md §1.
 */
export default function BloqueCTA({ etiqueta, titulo, texto = [], cta, superficie = 'tinta', foto }) {
  const oscuro = superficie !== 'arena'

  return (
    <section className={`cierre seccion sup-${superficie} ${oscuro ? 'oscuro' : ''} grano`}>
      {foto && (
        <div className="cierre__fondo">
          <img
            src={src(foto, 1600)}
            srcSet={srcSet(foto)}
            sizes="100vw"
            width={foto.ancho}
            height={foto.alto}
            alt=""
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
      </Revelar>
    </section>
  )
}
