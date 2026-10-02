import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useContenido, useIdioma } from '../i18n/contexto'
import { rutaLocalizada, resolverPagina } from '../i18n/idiomas'
import SelectorIdioma from '../i18n/SelectorIdioma'
import { enlaceWhatsapp } from '../datos/marca'
import { Menu, Cerrar, Whatsapp, ChevronAbajo } from './Iconos'

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
  // Submenú de "Rutas": rutasAbierto es el de escritorio (hover + foco,
  // CSS lo pinta), rutasAbiertoMovil es el acordeón táctil dentro del panel.
  // Van por separado porque abren con gestos distintos y nunca coinciden.
  const [rutasAbierto, setRutasAbierto] = useState(false)
  const [rutasAbiertoMovil, setRutasAbiertoMovil] = useState(false)
  const cabeceraRef = useRef(null)
  const panelRef = useRef(null)
  const botonRef = useRef(null)
  const itemRutasRef = useRef(null)
  const evitarReaperturaRef = useRef(false)
  const { pathname, search } = useLocation()
  const idioma = useIdioma()
  const { MENU, CTA, UI, RUTAS } = useContenido()

  const { clave: claveActual } = resolverPagina(pathname, idioma)
  const tieneHero = claveActual ? CLAVES_CON_HERO.has(claveActual) : false
  const rutaRutas = rutaLocalizada('rutas', idioma)

  // 5 rutas + "¿Erg Chigaga o Merzouga?" como sexto punto (encargo de la
  // clienta, 2026-10-02). Los nombres de ruta no se traducen (son nombres de
  // producto); la página de desiertos sí, vía UI.comun.
  const subRutas = [
    ...RUTAS.map((r) => ({ texto: r.nombre, a: rutaLocalizada('rutas', idioma, r.slug) })),
    { texto: UI.comun.ergChigagaOMerzouga, a: rutaLocalizada('desiertos', idioma) },
  ]

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
    setRutasAbierto(false)
    setRutasAbiertoMovil(false)
  }, [pathname, search])

  // Esc cierra el submenú de escritorio y devuelve el foco a "Rutas". El
  // .focus() de abajo dispara otra vez onFocus en el <li> — sin esta bandera,
  // el propio cierre se reabría a sí mismo en el mismo tick.
  useEffect(() => {
    if (!rutasAbierto) return
    const alPulsar = (e) => {
      if (e.key !== 'Escape') return
      setRutasAbierto(false)
      evitarReaperturaRef.current = true
      itemRutasRef.current?.querySelector('a')?.focus()
    }
    document.addEventListener('keydown', alPulsar)
    return () => document.removeEventListener('keydown', alPulsar)
  }, [rutasAbierto])

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
            {MENU.map((item) => {
              if (item.a !== rutaRutas) {
                return (
                  <li key={item.a}>
                    <NavLink
                      to={item.a}
                      end={item.a === rutaLocalizada('inicio', idioma)}
                      className={({ isActive }) => `cabecera__enlace ${isActive ? 'es-actual' : ''}`}
                    >
                      {item.texto}
                    </NavLink>
                  </li>
                )
              }

              // "Rutas": el enlace sigue llevando al índice al hacer clic; el
              // submenú es un añadido al pasar el ratón o al tabular hasta él
              // (onFocus/onBlur), no sustituye la navegación directa.
              return (
                <li
                  key={item.a}
                  ref={itemRutasRef}
                  className="cabecera__item-rutas"
                  onMouseEnter={() => setRutasAbierto(true)}
                  onMouseLeave={() => setRutasAbierto(false)}
                  onFocus={() => {
                    if (evitarReaperturaRef.current) {
                      evitarReaperturaRef.current = false
                      return
                    }
                    setRutasAbierto(true)
                  }}
                  onBlur={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget)) setRutasAbierto(false)
                  }}
                >
                  <NavLink
                    to={item.a}
                    className={({ isActive }) => `cabecera__enlace ${isActive ? 'es-actual' : ''}`}
                    aria-haspopup="true"
                    aria-expanded={rutasAbierto}
                    aria-controls="submenu-rutas"
                  >
                    {item.texto}
                    <ChevronAbajo width={14} height={14} className="cabecera__chevron" />
                  </NavLink>

                  <ul id="submenu-rutas" className={`submenu-rutas ${rutasAbierto ? 'es-abierto' : ''}`}>
                    {subRutas.map((sub) => (
                      <li key={sub.a}>
                        <NavLink
                          to={sub.a}
                          className={({ isActive }) => `submenu-rutas__enlace ${isActive ? 'es-actual' : ''}`}
                        >
                          {sub.texto}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </li>
              )
            })}
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
            {MENU.map((item) => {
              if (item.a !== rutaRutas) {
                return (
                  <li key={item.a}>
                    <NavLink to={item.a} end={item.a === rutaLocalizada('inicio', idioma)} className="panel__enlace">
                      {item.texto}
                    </NavLink>
                  </li>
                )
              }

              // Móvil: sin hover, "Rutas" se convierte en un acordeón al
              // tocar (botón, no enlace) — el índice de rutas sigue siendo
              // accesible desde el propio "Rutas" de escritorio, el pie de
              // página y los enlaces "Ver las cinco rutas" de cada ficha.
              return (
                <li key={item.a}>
                  <button
                    type="button"
                    className="panel__enlace panel__enlace--rutas"
                    aria-expanded={rutasAbiertoMovil}
                    aria-controls="submenu-rutas-movil"
                    onClick={() => setRutasAbiertoMovil((v) => !v)}
                  >
                    {item.texto}
                    <ChevronAbajo width={18} height={18} className="panel__chevron" />
                  </button>

                  <ul
                    id="submenu-rutas-movil"
                    className={`panel__submenu ${rutasAbiertoMovil ? 'es-abierto' : ''}`}
                    hidden={!rutasAbiertoMovil}
                  >
                    {subRutas.map((sub) => (
                      <li key={sub.a}>
                        <NavLink to={sub.a} className="panel__submenu-enlace">
                          {sub.texto}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </li>
              )
            })}
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
