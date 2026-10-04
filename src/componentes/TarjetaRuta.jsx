import { Link } from 'react-router-dom'
import Foto from './Foto'
import Boton from './Boton'

export default function TarjetaRuta({ ruta, destacada = false }) {
  return (
    <li>
      <article className="tarjeta-ruta">
        <Foto foto={ruta.foto} recorte={destacada ? '16 / 9' : '4 / 3'} sizes="(min-width: 900px) 560px, 100vw" />
        <div>
          <h2>
            <Link to={`/rutas/${ruta.slug}`}>{ruta.nombre}</Link>
          </h2>
          <p className="tarjeta-ruta__meta">
            {ruta.dias} · {ruta.lugares}
          </p>
          <p>{ruta.tarjeta}</p>
          <div className="acciones">
            <Boton a={`/rutas/${ruta.slug}`} variante="texto">
              Ver la ruta
            </Boton>
          </div>
        </div>
      </article>
    </li>
  )
}
