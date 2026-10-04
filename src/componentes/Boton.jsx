import { Link } from 'react-router-dom'
import { Flecha } from './Iconos'

/**
 * Regla de acción del sitio: el botón sólido no lleva flecha; el enlace de texto
 * subrayado sí. El fondo ya dice que se puede pulsar; la flecha convierte el texto en acción.
 *
 * variante: "primario" | "secundario" | "texto"
 */
export default function Boton({ a, variante = 'primario', children, className = '', ...resto }) {
  const contenido = children

  if (variante === 'texto') {
    return (
      <Link className={`enlace-flecha ${className}`} to={a} {...resto}>
        {contenido}
        <Flecha />
      </Link>
    )
  }

  return (
    <Link className={`boton boton--${variante} ${className}`} to={a} {...resto}>
      {contenido}
    </Link>
  )
}
