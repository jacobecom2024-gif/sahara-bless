import { Link } from 'react-router-dom'
import { Flecha } from './Iconos'

/**
 * Regla del sitio: el botón sólido no lleva flecha; el enlace de texto subrayado sí.
 * variante: "primario" (sólido) | "linea" (contorno, sin flecha) | "enlace" (texto con flecha)
 */
export default function Boton({ a, variante = 'primario', children, className = '', ...resto }) {
  if (variante === 'enlace') {
    return (
      <Link className={`enlace ${className}`} to={a} {...resto}>
        {children}
        <Flecha />
      </Link>
    )
  }
  return (
    <Link className={`boton ${variante === 'linea' ? 'boton--linea' : ''} ${className}`} to={a} {...resto}>
      {children}
    </Link>
  )
}
