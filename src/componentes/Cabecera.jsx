import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { NAV, CTA } from '../datos/contenido'
import { MARCA } from '../datos/marca'
import { Menu, Cerrar } from './Iconos'

/** Páginas que abren con foto a sangre: la cabecera empieza transparente sobre ella. */
const tieneHero = (pathname) =>
  pathname === '/' ||
  ['/agencias', '/viajeros', '/rutas', '/nuestra-historia', '/erg-chigaga-o-merzouga'].includes(pathname) ||
  /^\/rutas\/[^/]+$/.test(pathname)

export default function Cabecera() {
  const [abierto, setAbierto] = useState(false)
  const [conScroll, setConScroll] = useState(false)
  const { pathname, search } = useLocation()
  const panelRef = useRef(null)
  const botonRef = useRef(null)

  useEffect(() => {
    const alScroll = () => setConScroll(window.scrollY > 40)
    alScroll()
    window.addEventListener('scroll', alScroll, { passive: true })
    return () => window.removeEventListener('scroll', alScroll)
  }, [])

  useEffect(() => {
    setAbierto(false)
  }, [pathname, search])

  useEffect(() => {
    document.body.style.overflow = abierto ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [abierto])

  useEffect(() => {
    if (!abierto) return
    const alPulsar = (e) => {
      if (e.key === 'Escape') {
        setAbierto(false)
        botonRef.current?.focus()
        return
      }
      if (e.key !== 'Tab') return
      const foco = panelRef.current?.querySelectorAll('a[href], button:not([disabled])')
      if (!foco?.length) return
      const primero = foco[0]
      const ultimo = foco[foco.length - 1]
      if (e.shiftKey && document.activeElement === primero) {
        e.preventDefault()
        ultimo.focus()
      } else if (!e.shiftKey && document.activeElement === ultimo) {
        e.preventDefault()
        primero.focus()
      }
    }
    document.addEventListener('keydown', alPulsar)
    panelRef.current?.querySelector('a[href]')?.focus()
    return () => document.removeEventListener('keydown', alPulsar)
  }, [abierto])

  const solida = conScroll || abierto || !tieneHero(pathname)

  return (
    <header className={`cabecera ${solida ? 'cabecera--solida' : ''} ${abierto ? 'cabecera--abierta' : ''}`}>
      <div className="cabecera__interior">
        <Link to="/" className="marca" aria-label={`${MARCA.nombre}, inicio`}>
          <span>Sahara Bless</span>
          <span className="marca__cola">TRAVEL</span>
        </Link>

        <nav className="cabecera__nav" aria-label="Principal">
          <ul className="cabecera__lista">
            {NAV.map((item) => (
              <li key={item.a}>
                <NavLink to={item.a} end={item.a === '/'} className={({ isActive }) => `cabecera__enlace ${isActive ? 'es-actual' : ''}`}>
                  {item.texto}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="cabecera__acciones">
          <Link to={CTA.hablemos.a} className="boton boton--primario cabecera__cta">
            {CTA.hablemos.texto}
          </Link>
          <button
            ref={botonRef}
            type="button"
            className="cabecera__hamburguesa"
            aria-expanded={abierto}
            aria-controls="panel-navegacion"
            onClick={() => setAbierto((v) => !v)}
          >
            {abierto ? <Cerrar /> : <Menu />}
            <span className="solo-lectores">{abierto ? 'Cerrar menú' : 'Abrir menú'}</span>
          </button>
        </div>
      </div>

      <div ref={panelRef} id="panel-navegacion" className="panel" hidden={!abierto}>
        <nav aria-label="Principal (móvil)">
          <ul className="panel__lista">
            {NAV.map((item) => (
              <li key={item.a}>
                <NavLink to={item.a} end={item.a === '/'} className="panel__enlace">
                  {item.texto}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="panel__pie">
          <Link to={CTA.hablemos.a} className="boton boton--primario">
            {CTA.hablemos.texto}
          </Link>
          <Link to={CTA.viajero.a} className="boton boton--secundario">
            {CTA.viajero.texto}
          </Link>
          <Link to={CTA.agencia.a} className="boton boton--secundario">
            Soy agencia
          </Link>
        </div>
      </div>
    </header>
  )
}
