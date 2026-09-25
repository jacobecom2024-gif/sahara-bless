import { Link } from 'react-router-dom'
import { useContenido, useIdioma } from '../i18n/contexto'
import { rutaLocalizada } from '../i18n/idiomas'
import { enlaceWhatsapp, hayEmail, EMAIL } from '../datos/marca'
import { Whatsapp } from './Iconos'

export default function PieDePagina() {
  const idioma = useIdioma()
  const { MENU, CTA, MARCA, UI } = useContenido()
  const wa = enlaceWhatsapp(UI.comun.mensajeWhatsappGenerico)
  const anyo = new Date().getFullYear()

  return (
    <footer className="pie sup-inversa grano">
      <div className="contenedor pie__interior">
        <div className="pie__marca">
          <p className="pie__nombre">{MARCA.nombre}</p>
          <p className="pie__territorio etiqueta">{MARCA.territorio}</p>
          <p className="pie__descriptor apagado">{MARCA.descriptor}</p>
        </div>

        <nav className="pie__nav" aria-label="Pie de página">
          <p className="etiqueta">{UI.pie.navegar}</p>
          <ul>
            {MENU.map((item) => (
              <li key={item.a}>
                <Link to={item.a}>{item.texto}</Link>
              </li>
            ))}
            <li>
              <Link to={rutaLocalizada('desiertos', idioma)}>{UI.comun.ergChigagaOMerzouga}</Link>
            </li>
          </ul>
        </nav>

        <div className="pie__contacto">
          <p className="etiqueta">{UI.pie.hablarConNosotros}</p>
          <ul>
            <li>
              <Link to={`${rutaLocalizada('contacto', idioma)}?perfil=agencia`}>{UI.pie.soyUnaAgencia}</Link>
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
                  {UI.pie.whatsapp}
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>

      <div className="contenedor pie__legal">
        <hr className="filete" />
        <p className="apagado">{UI.pie.copyright(anyo)}</p>
      </div>
    </footer>
  )
}
