/**
 * Datos de contacto, iguales en los tres idiomas.
 *
 * `MARCA` (nombre, territorio, descriptor) se movió a cada
 * `src/i18n/contenido.<lang>.js`: es texto de marca, se traduce. Aquí solo
 * queda lo que es un dato, no una frase — el número no cambia con el idioma.
 *
 * WhatsApp: facilitado por la clienta el 2026-09-16 (+34 626 84 12 47).
 * ⚠️ Email, teléfono y dirección siguen SIN facilitar. No se inventan: los
 * valores vacíos hacen que la interfaz se degrade sola (los enlaces desaparecen
 * en vez de apuntar a un dato falso). Rellenar aquí y funciona todo el sitio.
 */

/** Formato internacional sin signos ni espacios, p. ej. '212600000000'. */
export const WHATSAPP = '34626841247'

export const EMAIL = ''

export const hayWhatsapp = () => WHATSAPP.trim().length > 0
export const hayEmail = () => EMAIL.trim().length > 0

export const enlaceWhatsapp = (mensaje) =>
  hayWhatsapp() ? `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensaje)}` : null
