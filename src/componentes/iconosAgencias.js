import {
  IconoEquipo,
  IconoFlexibilidad,
  IconoComunicacion,
  IconoTerreno,
  IconoCuidado,
} from './Iconos'

/**
 * Mapa clave → icono para las garantías de la página Agencias.
 *
 * Vive fuera de Iconos.jsx a propósito: mezclar exportaciones de componentes con
 * exportaciones de datos en el mismo archivo rompe el fast refresh de Vite.
 */
export const ICONOS_AGENCIAS = {
  equipo: IconoEquipo,
  flexibilidad: IconoFlexibilidad,
  comunicacion: IconoComunicacion,
  terreno: IconoTerreno,
  cuidado: IconoCuidado,
}
