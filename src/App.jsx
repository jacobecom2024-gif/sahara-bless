import { useEffect, useRef } from 'react'
import { Route, Routes, useLocation, Navigate, Link, Outlet } from 'react-router-dom'
import Cabecera from './componentes/Cabecera'
import PieDePagina from './componentes/PieDePagina'
import WhatsappFlotante from './componentes/WhatsappFlotante'
import Inicio from './paginas/Inicio'
import Rutas from './paginas/Rutas'
import Ruta from './paginas/Ruta'
import Viajeros from './paginas/Viajeros'
import Agencias from './paginas/Agencias'
import NuestraHistoria from './paginas/NuestraHistoria'
import Desiertos from './paginas/Desiertos'
import Contacto from './paginas/Contacto'
import useTitulo from './useTitulo'
import { IDIOMAS, IDIOMA_DEFECTO, PAGINAS } from './i18n/idiomas'
import { IdiomaProvider, useIdioma, useContenido } from './i18n/contexto'
import MetaIdioma from './i18n/MetaIdioma'

/**
 * Al cambiar de página: arriba del todo y foco al contenido principal, para que
 * quien navega con lector de pantalla no siga oyendo la página anterior.
 * Si la URL trae un ancla (#formulario), se respeta.
 *
 * En la PRIMERA carga no se toca el foco. Si se moviera, el primer tabulador
 * caería dentro de <main> y el teclado se saltaría el enlace "Saltar al
 * contenido" y toda la cabecera, que es justo lo contrario de lo que se busca.
 */
function AlNavegar() {
  const { pathname, hash, key } = useLocation()
  const primeraCarga = useRef(true)

  useEffect(() => {
    if (primeraCarga.current) {
      primeraCarga.current = false
      return
    }
    if (hash) return

    window.scrollTo({ top: 0, behavior: 'instant' })
    document.getElementById('principal')?.focus({ preventScroll: true })
  }, [pathname, hash])

  /*
   * Con ancla, hay que ir hasta ella a mano. React Router no lo hace, y en una
   * carga directa el navegador busca el ancla antes de que React haya pintado
   * la página, así que tampoco la encuentra.
   */
  const montado = useRef(false)
  useEffect(() => {
    const primera = !montado.current
    montado.current = true
    if (!hash) return

    const destino = document.getElementById(decodeURIComponent(hash.slice(1)))
    if (!destino) return
    const cabecera = document.querySelector('.cabecera')
    const y = destino.getBoundingClientRect().top + window.scrollY - (cabecera?.offsetHeight ?? 0) - 24
    window.scrollTo({ top: Math.max(0, y), behavior: 'instant' })
    if (!primera) {
      if (!destino.hasAttribute('tabindex')) destino.setAttribute('tabindex', '-1')
      destino.focus({ preventScroll: true })
    }
  }, [hash, key])

  return null
}

function NoEncontrada() {
  const { UI } = useContenido()
  useTitulo(UI.notFound.tituloPagina)

  return (
    <section className="seccion sup-arena grano no-encontrada">
      <div className="contenedor-texto pila">
        <p className="etiqueta">{UI.notFound.eyebrow}</p>
        <h1>{UI.notFound.titulo}</h1>
        <p className="lead">{UI.notFound.texto}</p>
        <p className="pila__accion">
          <Link className="boton boton--primario" to={`/${IDIOMA_DEFECTO}`}>
            <span className="boton__texto">{UI.notFound.boton}</span>
          </Link>
        </p>
      </div>
    </section>
  )
}

/** Todo lo que va dentro de un idioma, una vez el contexto ya está montado. */
function ConLayout() {
  const idioma = useIdioma()
  const { UI } = useContenido()

  return (
    <>
      <a className="saltar" href="#principal">
        {UI.comun.saltarContenido}
      </a>

      <MetaIdioma idioma={idioma} />
      <AlNavegar />
      <Cabecera />

      <main id="principal" tabIndex={-1}>
        <Outlet />
      </main>

      <PieDePagina />

      {/* Último en el DOM: último en el orden de tabulación. */}
      <WhatsappFlotante />
    </>
  )
}

/**
 * Envoltorio de un idioma: monta el contexto de contenido para todo lo que
 * cuelga de él. Cada uno de los tres `<Route path={idioma}>` de abajo usa una
 * instancia de este layout, con `idioma` fijo en el momento en que se genera
 * la ruta (no se lee de `useParams`: así una URL con un segmento que no sea
 * "es"/"en"/"fr" ni siquiera llega a coincidir con ningún Route, y cae directa
 * al catch-all sin necesitar validación aparte).
 */
function IdiomaLayout({ idioma }) {
  return (
    <IdiomaProvider idioma={idioma}>
      <ConLayout />
    </IdiomaProvider>
  )
}

/** Redirige siempre a una URL con prefijo de idioma; nunca sirve `/` a secas. */
function RedirigirADefecto() {
  return <Navigate to={`/${IDIOMA_DEFECTO}`} replace />
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<RedirigirADefecto />} />

      {IDIOMAS.map((idioma) => (
        <Route key={idioma} path={idioma} element={<IdiomaLayout idioma={idioma} />}>
          <Route index element={<Inicio />} />
          <Route path={PAGINAS.rutas[idioma]} element={<Rutas />} />
          <Route path={`${PAGINAS.rutas[idioma]}/:slug`} element={<Ruta />} />
          <Route path={PAGINAS.viajeros[idioma]} element={<Viajeros />} />
          <Route path={PAGINAS.agencias[idioma]} element={<Agencias />} />
          <Route path={PAGINAS.historia[idioma]} element={<NuestraHistoria />} />
          <Route path={PAGINAS.desiertos[idioma]} element={<Desiertos />} />
          <Route path={PAGINAS.contacto[idioma]} element={<Contacto />} />
          <Route path="*" element={<NoEncontrada />} />
        </Route>
      ))}

      {/* Cualquier otra cosa (typo, idioma inexistente, URL vieja sin
          prefijo): al idioma por defecto, nunca contenido sin prefijo. */}
      <Route path="*" element={<RedirigirADefecto />} />
    </Routes>
  )
}
