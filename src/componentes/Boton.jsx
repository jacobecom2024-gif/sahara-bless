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
 *
 * Regla de flecha (2026-09-24, para todo el sitio): botón sólido, sin flecha;
 * enlace de texto subrayado, con flecha. El fondo ya dice que se puede pulsar;
 * la flecha es lo que convierte un texto en acción. Se puede forzar con la
 * prop `flecha`, pero el valor por defecto lo decide la variante.
 */
export default function Boton({
  a,
  href,
  children,
  variante = 'primario',
  oscuro = false,
  flecha,
  type,
  ...resto
}) {
  const conFlecha = flecha ?? variante === 'flecha'
  const clase = ['boton', `boton--${variante}`, oscuro ? 'boton--oscuro' : ''].filter(Boolean).join(' ')

  const contenido = (
    <>
      <span className="boton__texto">{children}</span>
      {conFlecha && (
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
