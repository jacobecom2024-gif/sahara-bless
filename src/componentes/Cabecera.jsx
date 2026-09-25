import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useContenido, useIdioma } from '../i18n/contexto'
import { rutaLocalizada, resolverPagina } from '../i18n/idiomas'
import SelectorIdioma from '../i18n/SelectorIdioma'
import { enlaceWhatsapp } from '../datos/marca'
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
 * Páginas que abren con hero fotográfico, identificadas por su CLAVE de
 * registro (no por ruta literal: la ruta cambia con el idioma, la clave no).
 * Sobre foto, la cabecera puede ser transparente y pintar su texto en crema.
 * En las que NO lo tienen (Contacto, 404) eso deja crema sobre arena: 1:1 de
 * contraste, marca invisible.
 *
 * Al añadir una página nueva con hero, añádela aquí.
 */
const CLAVES_CON_HERO = new Set(['inicio', 'rutas', 'viajeros', 'agencias', 'historia', 'desiertos'])

export default function Cabecera() {
  const [abierto, setAbierto] = useState(false)
  const [conScroll, setConScroll] = useState(false)
  const cabeceraRef = useRef(null)
  const panelRef = useRef(null)
  const botonRef = useRef(null)
  const { pathname, search } = useLocation()
  const idioma = useIdioma()
  const { MENU, CTA, UI } = useContenido()

  const { clave: claveActual } = resolverPagina(pathname, idioma)
  const tieneHero = claveActual ? CLAVES_CON_HERO.has(claveActual) : false

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

  const wa = enlaceWhatsapp(UI.comun.mensajeWhatsappGenerico)

  return (
    <header
      ref={cabeceraRef}
      className={`cabecera ${conScroll || abierto || !tieneHero ? 'cabecera--solida' : ''}`}
    >
      <div className="cabecera__interior">
        <Link to={rutaLocalizada('inicio', idioma)} className="marca" aria-label="Sahara Bless Travel">
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
                  end={item.a === rutaLocalizada('inicio', idioma)}
                  className={({ isActive }) => `cabecera__enlace ${isActive ? 'es-actual' : ''}`}
                >
                  {item.texto}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="cabecera__acciones">
          <SelectorIdioma className="cabecera__idioma" />

          <button
            ref={botonRef}
            type="button"
            className="cabecera__hamburguesa"
            aria-expanded={abierto}
            aria-controls="panel-navegacion"
            onClick={() => setAbierto((v) => !v)}
          >
            {abierto ? <Cerrar /> : <Menu />}
            <span className="solo-lectores">{abierto ? UI.cabecera.cerrarMenu : UI.cabecera.abrirMenu}</span>
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
                <NavLink to={item.a} end={item.a === rutaLocalizada('inicio', idioma)} className="panel__enlace">
                  {item.texto}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="panel__pie">
          <SelectorIdioma className="panel__idioma" />

          {/* Sin flecha: son botones con fondo (regla de CTA, 2026-09-24). */}
          <Link to={CTA.viajero.a} className="boton boton--primario">
            <span className="boton__texto">{CTA.viajero.texto}</span>
          </Link>

          <Link to={CTA.agencia.a} className="boton boton--secundario">
            <span className="boton__texto">{UI.comun.soyAgencia}</span>
          </Link>

          {wa && (
            <a className="panel__whatsapp" href={wa} target="_blank" rel="noreferrer">
              <Whatsapp width={20} height={20} />
              {UI.comun.escribirWhatsapp}
            </a>
          )}
        </div>
      </div>
    </header>
  )
}
