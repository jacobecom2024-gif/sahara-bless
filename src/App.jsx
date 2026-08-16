import { useEffect, useRef } from 'react'
import { Route, Routes, useLocation, Link } from 'react-router-dom'
import Cabecera from './componentes/Cabecera'
import PieDePagina from './componentes/PieDePagina'
import Inicio from './paginas/Inicio'
import Rutas from './paginas/Rutas'
import Ruta from './paginas/Ruta'
import Viajeros from './paginas/Viajeros'
import Agencias from './paginas/Agencias'
import NuestraHistoria from './paginas/NuestraHistoria'
import Desiertos from './paginas/Desiertos'
import Contacto from './paginas/Contacto'
import useTitulo from './useTitulo'

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
  const { pathname, hash } = useLocation()
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

  return null
}

function NoEncontrada() {
  useTitulo('Página no encontrada · Sahara Bless Travel')

  return (
    <section className="seccion sup-arena grano no-encontrada">
      <div className="contenedor-texto pila">
        <p className="etiqueta">Error 404</p>
        <h1>Este camino no lleva a ninguna parte</h1>
        <p className="lead">
          La página que buscas no existe o ha cambiado de sitio. Podemos volver al principio.
        </p>
        <p className="pila__accion">
          <Link className="boton boton--primario" to="/">
            <span className="boton__texto">Volver al inicio</span>
          </Link>
        </p>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <>
      <a className="saltar" href="#principal">
        Saltar al contenido
      </a>

      <AlNavegar />
      <Cabecera />

      <main id="principal" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/rutas" element={<Rutas />} />
          <Route path="/rutas/:slug" element={<Ruta />} />
          <Route path="/viajeros" element={<Viajeros />} />
          <Route path="/agencias" element={<Agencias />} />
          <Route path="/nuestra-historia" element={<NuestraHistoria />} />
          <Route path="/erg-chigaga-o-merzouga" element={<Desiertos />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<NoEncontrada />} />
        </Routes>
      </main>

      <PieDePagina />
    </>
  )
}
