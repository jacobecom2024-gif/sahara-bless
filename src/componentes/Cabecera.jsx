import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { MENU, CTA } from '../datos/contenido'
import { MARCA, enlaceWhatsapp } from '../datos/marca'
import { Menu, Cerrar, Whatsapp } from './Iconos'

/**
 * Cabecera.
 *
 * Tres cosas que aquí se hacen a propósito:
 *  1. La altura se MIDE con ResizeObserver y se publica en --altura-cabecera.
 *     Nunca se codifica a mano: cambia con el tamaño de fuente y con el idioma.
 *  2. No hay backdrop-filter en ninguna parte. Un filtro de fondo crea bloque
 *     contenedor y haría que el panel móvil (position: fixed) se dimensione
 *     contra la cabecera en vez de contra el viewport.
 *  3. El panel móvil ocupa el viewport completo, atrapa el foco y cierra con Esc.
 */
/**
 * Páginas que abren con hero fotográfico. Sobre foto, la cabecera puede ser
 * transparente y pintar su texto en crema. En las que NO lo tienen (Contacto,
 * 404) eso deja crema sobre arena: 1:1 de contraste, marca invisible.
 *
 * Se decide por ruta y no consultando el DOM tras montar, para que el color
 * correcto esté ya en el primer pintado. Al añadir una página nueva con hero,
 * añádela aquí.
 */
const RUTAS_CON_HERO = new Set([
  '/',
  '/rutas',
  '/viajeros',
  '/agencias',
  '/nuestra-historia',
  '/erg-chigaga-o-merzouga',
])

const tieneHero = (pathname) => RUTAS_CON_HERO.has(pathname) || /^\/rutas\/[^/]+$/.test(pathname)

export default function Cabecera() {
  const [abierto, setAbierto] = useState(false)
  const [conScroll, setConScroll] = useState(false)
  const cabeceraRef = useRef(null)
  const panelRef = useRef(null)
  const botonRef = useRef(null)
  const { pathname, search } = useLocation()

  // 1 · publicar la altura real
  useEffect(() => {
    const nodo = cabeceraRef.current
    if (!nodo) return
    const publicar = () => {
      document.documentElement.style.setProperty('--altura-cabecera', `${nodo.offsetHeight}px`)
    }
    publicar()
    const ro = new ResizeObserver(publicar)
    ro.observe(nodo)
    return () => ro.disconnect()
  }, [])

  // fondo sólido a partir de 40px
  useEffect(() => {
    const alHacerScroll = () => setConScroll(window.scrollY > 40)
    alHacerScroll()
    window.addEventListener('scroll', alHacerScroll, { passive: true })
    return () => window.removeEventListener('scroll', alHacerScroll)
  }, [])

  // cerrar al navegar
  useEffect(() => {
    setAbierto(false)
  }, [pathname, search])

  // bloquear el scroll del fondo mientras el panel está abierto
  useEffect(() => {
    document.body.style.overflow = abierto ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [abierto])

  // Esc + trampa de foco
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

  const wa = enlaceWhatsapp('Hola, os escribo desde la web de Sahara Bless Travel.')

  return (
    <header
      ref={cabeceraRef}
      className={`cabecera ${
        conScroll || abierto || !tieneHero(pathname) ? 'cabecera--solida' : ''
      }`}
    >
      <div className="cabecera__interior">
        <Link to="/" className="marca" aria-label={`${MARCA.nombre} · inicio`}>
          {/* El espacio entre los dos spans es intencionado: sin él el nombre
              accesible del enlace se lee "Sahara BlessTravel". */}
          <span className="marca__nombre">Sahara Bless</span>{' '}
          <span className="marca__cola">Travel</span>
        </Link>

        <nav className="cabecera__nav" aria-label="Principal">
          <ul className="cabecera__lista">
            {MENU.map((item) => (
              <li key={item.a}>
                <NavLink
                  to={item.a}
                  end={item.a === '/'}
                  className={({ isActive }) => `cabecera__enlace ${isActive ? 'es-actual' : ''}`}
                >
                  {item.texto}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="cabecera__acciones">
          {/* Sin CTA en la cabecera (2026-09-24): el botón "Para agencias"
              llevaba al mismo sitio que el enlace "Agencias" del menú y
              duplicaba la misma acción a dos centímetros de distancia. El
              carril de viajeros tiene su botón en el panel móvil y su CTA
              flotante en las páginas B2C. */}
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

      <div
        ref={panelRef}
        id="panel-navegacion"
        className={`panel ${abierto ? 'es-abierto' : ''}`}
        hidden={!abierto}
      >
        <nav aria-label="Principal (móvil)">
          <ul className="panel__lista">
            {MENU.map((item) => (
              <li key={item.a}>
                <NavLink to={item.a} end={item.a === '/'} className="panel__enlace">
                  {item.texto}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="panel__pie">
          {/* Sin flecha: son botones con fondo (regla de CTA, 2026-09-24). */}
          <Link to={CTA.viajero.a} className="boton boton--primario">
            <span className="boton__texto">{CTA.viajero.texto}</span>
          </Link>

          <Link to={CTA.agencia.a} className="boton boton--secundario">
            <span className="boton__texto">Soy agencia</span>
          </Link>

          {wa && (
            <a className="panel__whatsapp" href={wa} target="_blank" rel="noreferrer">
              <Whatsapp width={20} height={20} />
              Escribir por WhatsApp
            </a>
          )}
        </div>
      </div>
    </header>
  )
}
