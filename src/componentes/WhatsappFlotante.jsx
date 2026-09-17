import { WHATSAPP, hayWhatsapp } from '../datos/marca'
import { WhatsappLogo } from './Iconos'

/**
 * Botón flotante de WhatsApp, en todas las páginas.
 *
 * Capa: `--z-flotante` (90). Por encima del contenido; por debajo de la
 * cabecera (100), de la que cuelga el panel del menú móvil, y del enlace de
 * salto, que deben taparlo cuando están abiertos. Por qué no 150: ver
 * tokens.css.
 *
 * Enlace sin mensaje prerrellenado, tal como se pidió: https://wa.me/<número>.
 * Si algún día se vacía WHATSAPP en datos/marca.js, el botón desaparece en vez
 * de apuntar a la nada.
 */
export default function WhatsappFlotante() {
  if (!hayWhatsapp()) return null

  return (
    <a
      className="whatsapp-flotante"
      href={`https://wa.me/${WHATSAPP}`}
      target="_blank"
      rel="noopener"
      aria-label="Contactar por WhatsApp"
    >
      <WhatsappLogo width={30} height={30} />
    </a>
  )
}
