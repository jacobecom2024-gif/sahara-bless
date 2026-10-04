import { Link } from 'react-router-dom'
import useTitulo from '../useTitulo'

export default function NoEncontrada() {
  useTitulo('Página no encontrada · Sahara Bless Travel', 'Esta página no existe.')
  return (
    <section className="no-encontrada contenedor">
      <p className="etiqueta">Error 404</p>
      <h1 className="titulo-seccion">Esta página no existe.</h1>
      <div className="acciones">
        <Link className="boton boton--primario" to="/">Volver al inicio</Link>
      </div>
    </section>
  )
}
