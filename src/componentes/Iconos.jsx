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

