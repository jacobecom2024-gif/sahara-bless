import { enlaceWhatsapp } from '../datos/marca'
import { Whatsapp } from './Iconos'

export default function WhatsappFlotante() {
  return (
    <a className="whatsapp" href={enlaceWhatsapp()} target="_blank" rel="noreferrer" aria-label="Escribir por WhatsApp">
      <Whatsapp />
    </a>
  )
}
