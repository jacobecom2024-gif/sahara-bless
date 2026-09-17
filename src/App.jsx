import { useEffect, useRef } from 'react'
import { Route, Routes, useLocation, Link } from 'react-router-dom'
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
   * la página, así que tampoco la encuentra. Antes el ancla solo evitaba subir
   * arriba: `/contacto?perfil=viajero#formulario` se quedaba en el bloque de
   * agencias. `key` cambia en cada navegación, aunque el ancla se repita.
   */
  const montado = useRef(false)
  useEffect(() => {
    // Se marca antes de mirar el ancla: "primera" es la primera carga de la
    // app, no la primera vez que aparece un ancla.
    const primera = !montado.current
    montado.current = true
    if (!hash) return

    // El efecto corre tras montar la página destino: el ancla ya está en el DOM.
    // Salto instantáneo, igual que el scrollTo de arriba al cambiar de página.
    //
    // No se usa scrollIntoView + `scroll-padding-top`: ese padding depende de
    // --altura-cabecera, que escribe un ResizeObserver y en una carga directa
    // (enlace compartido, recarga) aún vale 0. El formulario quedaba a 23 px
    // del borde, con la cabecera fija de 77 px tapando su título. Se mide la
    // cabecera en el momento; el margen de 24 px es el mismo de base.css.
    const destino = document.getElementById(decodeURIComponent(hash.slice(1)))
    if (!destino) return
    const cabecera = document.querySelector('.cabecera')
    const y = destino.getBoundingClientRect().top + window.scrollY - (cabecera?.offsetHeight ?? 0) - 24
    window.scrollTo({ top: Math.max(0, y), behavior: 'instant' })
    // En la primera carga no se mueve el foco (ver comentario de arriba).
    if (!primera) {
      if (!destino.hasAttribute('tabindex')) destino.setAttribute('tabindex', '-1')
      destino.focus({ preventScroll: true })
    }
  }, [hash, key])

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

      {/* Último en el DOM: último en el orden de tabulación. */}
      <WhatsappFlotante />
    </>
  )
}
