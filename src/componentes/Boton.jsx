import { Link } from 'react-router-dom'
import { Flecha } from './Iconos'

/**
 * Botón / enlace de acción.
 *
 * Contrato (design/05-design-system.md §5):
 *  - variante "primario" | "secundario" | "flecha"
 *  - `oscuro` cambia la paleta porque terracota sobre superficie noche da 2.32:1
 *    y no se puede usar. Sobre oscuro el acento es siempre ocre claro.
 *  - La flecha es decorativa: va en un span aria-hidden, fuera del nombre
 *    accesible del enlace.
 */
export default function Boton({
  a,
  href,
  children,
  variante = 'primario',
  oscuro = false,
  flecha = true,
  type,
  ...resto
}) {
  const clase = ['boton', `boton--${variante}`, oscuro ? 'boton--oscuro' : ''].filter(Boolean).join(' ')

  const contenido = (
    <>
      <span className="boton__texto">{children}</span>
      {flecha && (
        <span className="boton__flecha" aria-hidden="true">
          <Flecha width={18} height={18} />
        </span>
      )}
    </>
  )

  if (href) {
    return (
      <a className={clase} href={href} {...resto}>
        {contenido}
      </a>
    )
  }

  if (a) {
    return (
      <Link className={clase} to={a} {...resto}>
        {contenido}
      </Link>
    )
  }

  return (
    <button className={clase} type={type || 'button'} {...resto}>
      {contenido}
    </button>
  )
}
