import { Link } from 'react-router-dom'
import { NAV, PIE } from '../datos/contenido'
import { MARCA, WHATSAPP, enlaceWhatsapp } from '../datos/marca'

export default function PieDePagina() {
  return (
    <footer className="pie">
      <div className="wrap">
        <div className="pie__rejilla">
          <div>
            <p className="pie__marca">
              <img src="/marca.svg" alt="" width="40" height="40" />
              {MARCA.nombre}
            </p>
            <p className="pie__lema">{PIE.lema.join(' ')}</p>
          </div>

          <nav aria-label="Pie">
            <h2>Explorar</h2>
            <ul className="pie__lista">
              {NAV.map((item) => (
                <li key={item.a}>
                  <Link to={item.a}>{item.texto}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2>Contacto</h2>
            <ul className="pie__lista">
              <li>
                <a href={enlaceWhatsapp()} target="_blank" rel="noreferrer">
                  WhatsApp +{WHATSAPP.slice(0, 2)} {WHATSAPP.slice(2)}
                </a>
              </li>
              <li>{PIE.territorio}</li>
            </ul>
          </div>
        </div>
        <p className="pie__legal">© {new Date().getFullYear()} {MARCA.nombre}. Marruecos · España.</p>
      </div>
    </footer>
  )
}
