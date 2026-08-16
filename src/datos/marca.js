/**
 * Datos de marca y de contacto.
 *
 * ⚠️ El cliente NO ha facilitado teléfono, email, número de WhatsApp ni dirección.
 * No se inventa ninguno: los tres valores de abajo están vacíos a propósito y la
 * interfaz se degrada sola (los enlaces de WhatsApp y email desaparecen en vez de
 * apuntar a un número falso). Rellenar aquí y funciona todo el sitio.
 */

export const MARCA = {
  nombre: 'Sahara Bless Travel',
  territorio: 'Marruecos · España',
  descriptor: 'Diseñamos viajes. Construimos experiencias. Y estamos al otro lado para hacer que sucedan.',
  desde: 2009,
}

/** Formato internacional sin signos ni espacios, p. ej. '212600000000'. */
export const WHATSAPP = ''

export const EMAIL = ''

export const hayWhatsapp = () => WHATSAPP.trim().length > 0
export const hayEmail = () => EMAIL.trim().length > 0

export const enlaceWhatsapp = (mensaje = 'Hola, os escribo desde la web.') =>
  hayWhatsapp() ? `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensaje)}` : null
