/**
 * Iconografía propia, SVG en línea. Sin librería y sin emoji (regla del brief).
 * Trazo uniforme de 1.5 y caja de 24 para que todos casen entre sí.
 */

const base = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': 'true',
  focusable: 'false',
}

export const Flecha = (p) => (
  <svg {...base} {...p}>
    <path d="M4 12h15" />
    <path d="m13 6 6 6-6 6" />
  </svg>
)

export const Menu = (p) => (
  <svg {...base} {...p}>
    <path d="M3 6h18M3 12h18M3 18h18" />
  </svg>
)

export const Cerrar = (p) => (
  <svg {...base} {...p}>
    <path d="m6 6 12 12M18 6 6 18" />
  </svg>
)

export const Whatsapp = (p) => (
  <svg {...base} {...p}>
    <path d="M3.5 20.5 5 16.4A8.2 8.2 0 1 1 8 19.4l-4.5 1.1Z" />
    <path d="M9 9.2c.2 1 .7 1.9 1.4 2.6.7.7 1.6 1.2 2.6 1.4l.9-1.1 1.9.8v1.6c-1.6.2-3.6-.7-5-2.1-1.4-1.4-2.3-3.4-2.1-5h1.6l.8 1.9L9 9.2Z" />
  </svg>
)

/**
 * Logotipo de WhatsApp, relleno. Excepción deliberada a la regla de trazo de
 * este archivo: el botón flotante pide el icono estándar, reconocible al
 * instante, y la versión de línea de arriba no lo es. Glifo de Simple Icons
 * (CC0). Solo se usa en WhatsappFlotante.
 */
export const WhatsappLogo = (p) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    {...p}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
)

/* --- Iconos de las garantías de la página Agencias ------------------------ */

export const IconoEquipo = (p) => (
  <svg {...base} {...p}>
    <circle cx="9" cy="8" r="3" />
    <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
    <path d="M16 5.5a3 3 0 0 1 0 5.5" />
    <path d="M17.5 14.2a5.5 5.5 0 0 1 3 4.8" />
  </svg>
)

export const IconoFlexibilidad = (p) => (
  <svg {...base} {...p}>
    <path d="M3 7h6a5 5 0 0 1 5 5 5 5 0 0 0 5 5h2" />
    <path d="m18 14 3 3-3 3" />
    <path d="M3 17h4" />
  </svg>
)

export const IconoComunicacion = (p) => (
  <svg {...base} {...p}>
    <path d="M20 12a7 7 0 0 1-7 7H8l-4 3v-4.5A7 7 0 0 1 7 5h6a7 7 0 0 1 7 7Z" />
    <path d="M9 11h6M9 14.5h3.5" />
  </svg>
)

export const IconoTerreno = (p) => (
  <svg {...base} {...p}>
    <path d="M3 18.5 9 6l4.5 8.5L16 10l5 8.5H3Z" />
    <circle cx="16.5" cy="5.5" r="1.6" />
  </svg>
)

export const IconoCuidado = (p) => (
  <svg {...base} {...p}>
    <path d="M12 20.5S4 15.6 4 10.2A4.2 4.2 0 0 1 12 8a4.2 4.2 0 0 1 8 2.2c0 5.4-8 10.3-8 10.3Z" />
  </svg>
)

