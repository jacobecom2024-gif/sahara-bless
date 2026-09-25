import { createContext, useContext, useMemo } from 'react'

import * as es from './contenido.es'
import * as en from './contenido.en'
import * as fr from './contenido.fr'
import * as rutasEs from './rutas.es'
import * as rutasEn from './rutas.en'
import * as rutasFr from './rutas.fr'

/**
 * Contenido completo por idioma. Import estático de los seis módulos: el
 * sitio es pequeño (unas 1.700 líneas de copy en total, ×3), así que no
 * compensa la complejidad de una carga perezosa por idioma.
 */
const CONTENIDO = {
  es: { ...es, ...rutasEs },
  en: { ...en, ...rutasEn },
  fr: { ...fr, ...rutasFr },
}

const IdiomaContexto = createContext(null)

/** Envuelve el árbol de un idioma. Lo monta `IdiomaLayout` en App.jsx. */
export function IdiomaProvider({ idioma, children }) {
  const valor = useMemo(() => ({ idioma, contenido: CONTENIDO[idioma] }), [idioma])
  return <IdiomaContexto.Provider value={valor}>{children}</IdiomaContexto.Provider>
}

// El nombre tiene que empezar por "use": el lint de reglas de hooks
// solo reconoce como hook una función cuyo nombre lo diga.
function useContextoInterno(nombreHook) {
  const ctx = useContext(IdiomaContexto)
  if (!ctx) throw new Error(`${nombreHook} debe usarse dentro de <IdiomaProvider>`)
  return ctx
}

/** Código de idioma actual: 'es' | 'en' | 'fr'. */
export function useIdioma() {
  return useContextoInterno('useIdioma').idioma
}

/**
 * Todo el copy del idioma actual: MENU, CTA, MARCA, UI, INICIO, VIAJEROS,
 * AGENCIAS, HISTORIA, DESIERTOS, CONTACTO, RUTAS_INDICE, RUTAS,
 * NUESTRO_SAHARA, rutaPorSlug, TITULOS. Misma forma en los tres idiomas.
 */
export function useContenido() {
  return useContextoInterno('useContenido').contenido
}
