/**
 * Datos de marca y de contacto.
 *
 * WhatsApp: facilitado por la clienta el 2026-09-16 (+34 626 84 12 47).
 * ⚠️ Email, teléfono y dirección siguen SIN facilitar. No se inventan: los
 * valores vacíos hacen que la interfaz se degrade sola (los enlaces desaparecen
 * en vez de apuntar a un dato falso). Rellenar aquí y funciona todo el sitio.
 */

export const MARCA = {
  nombre: 'Sahara Bless Travel',
  territorio: 'Marruecos · España',
  descriptor: 'Diseñamos viajes. Construimos experiencias. Y estamos al otro lado para hacer que sucedan.',
  desde: 2009,
}

/** Formato internacional sin signos ni espacios, p. ej. '212600000000'. */
export const WHATSAPP = '34626841247'

export const EMAIL = ''

export const hayWhatsapp = () => WHATSAPP.trim().length > 0
export const hayEmail = () => EMAIL.trim().length > 0

export const enlaceWhatsapp = (mensaje = 'Hola, os escribo desde la web.') =>
  hayWhatsapp() ? `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensaje)}` : null
