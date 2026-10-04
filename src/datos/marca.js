export const MARCA = {
  nombre: 'Sahara Bless Travel',
  territorio: 'Marruecos · España',
  descriptor: 'Diseñamos viajes. Construimos experiencias. Y estamos al otro lado para hacer que sucedan.',
}

/** Número facilitado por la clienta. Formato internacional sin signos. */
export const WHATSAPP = '34626841247'

/** Pendiente: la clienta no ha facilitado un email de contacto. */
export const EMAIL = ''

export const enlaceWhatsapp = (mensaje = 'Hola, os escribo desde la web de Sahara Bless Travel.') =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensaje)}`
