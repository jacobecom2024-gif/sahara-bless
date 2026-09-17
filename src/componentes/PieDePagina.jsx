import { Link } from 'react-router-dom'
import { MENU, CTA } from '../datos/contenido'
import { MARCA, enlaceWhatsapp, hayEmail, EMAIL } from '../datos/marca'
import { Whatsapp } from './Iconos'

export default function PieDePagina() {
  const wa = enlaceWhatsapp('Hola, os escribo desde la web de Sahara Bless Travel.')
  const anyo = new Date().getFullYear()

  return (
    <footer className="pie sup-tinta grano">
      <div className="contenedor pie__interior">
        <div className="pie__marca">
          <p className="pie__nombre">Sahara Bless Travel</p>
          <p className="pie__territorio etiqueta">{MARCA.territorio}</p>
          <p className="pie__descriptor apagado">{MARCA.descriptor}</p>
        </div>

        <nav className="pie__nav" aria-label="Pie de página">
          <p className="etiqueta">Navegar</p>
          <ul>
            {MENU.map((item) => (
              <li key={item.a}>
                <Link to={item.a}>{item.texto}</Link>
              </li>
            ))}
            <li>
              <Link to="/erg-chigaga-o-merzouga">¿Erg Chigaga o Merzouga?</Link>
            </li>
          </ul>
        </nav>

        <div className="pie__contacto">
          <p className="etiqueta">Hablar con nosotros</p>
          <ul>
            <li>
              <Link to="/contacto?perfil=agencia">Soy una agencia</Link>
            </li>
            <li>
              <Link to={CTA.viajero.a}>{CTA.viajero.texto}</Link>
            </li>
            {hayEmail() && (
              <li>
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </li>
            )}
            {wa && (
              <li>
                <a href={wa} target="_blank" rel="noreferrer" className="pie__whatsapp">
                  <Whatsapp width={18} height={18} />
                  WhatsApp
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>

      <div className="contenedor pie__legal">
        <hr className="filete" />
        <p className="apagado">
          © {anyo} Sahara Bless Travel. Fotografías propias, tomadas en Marruecos.
        </p>
      </div>
    </footer>
  )
}
