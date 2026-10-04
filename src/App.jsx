import { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Cabecera from './componentes/Cabecera'
import PieDePagina from './componentes/PieDePagina'
import WhatsappFlotante from './componentes/WhatsappFlotante'
import Inicio from './paginas/Inicio'
import Agencias from './paginas/Agencias'
import Viajeros from './paginas/Viajeros'
import Rutas from './paginas/Rutas'
import Ruta from './paginas/Ruta'
import NuestraHistoria from './paginas/NuestraHistoria'
import ErgChigaga from './paginas/ErgChigaga'
import Contacto from './paginas/Contacto'
import NoEncontrada from './paginas/NoEncontrada'

function ScrollAlInicio() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) return
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollAlInicio />
      <a className="skip-link" href="#contenido">Ir al contenido</a>
      <Cabecera />
      <main id="contenido">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/agencias" element={<Agencias />} />
          <Route path="/viajeros" element={<Viajeros />} />
          <Route path="/rutas" element={<Rutas />} />
          <Route path="/rutas/:slug" element={<Ruta />} />
          <Route path="/nuestra-historia" element={<NuestraHistoria />} />
          <Route path="/erg-chigaga-o-merzouga" element={<ErgChigaga />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<NoEncontrada />} />
        </Routes>
      </main>
      <PieDePagina />
      <WhatsappFlotante />
    </BrowserRouter>
  )
}
