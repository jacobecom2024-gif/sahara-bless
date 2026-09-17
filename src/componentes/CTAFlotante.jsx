import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Flecha } from './Iconos'

/**
 * CTA flotante para páginas largas.
 *
 * Aparece cuando el hero sale de pantalla (el hero ya tiene su propio botón) y
 * se retira cuando entra el bloque de cierre (`.cierre`), que repite la misma
 * acción: nunca hay dos iguales a la vista. Mientras está oculto lleva `inert`,
 * así que no recibe foco ni lo anuncia un lector de pantalla.
 *
 * Comparte franja con WhatsappFlotante: el CSS le reserva el hueco de la
 * derecha para no taparlo.
 */
export default function CTAFlotante({ cta }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Sin requestAnimationFrame: el navegador ya emite `scroll` como mucho una
    // vez por fotograma, son dos lecturas de geometría y setState descarta el
    // valor si no cambia.
    const medir = () => {
      const hero = document.querySelector('main .hero')
      const cierre = document.querySelector('main .cierre')
      const alto = window.innerHeight
      const heroFuera = !hero || hero.getBoundingClientRect().bottom <= 0
      const cierreLejos = !cierre || cierre.getBoundingClientRect().top >= alto
      setVisible(heroFuera && cierreLejos)
    }

    medir()
    window.addEventListener('scroll', medir, { passive: true })
    window.addEventListener('resize', medir)
    return () => {
      window.removeEventListener('scroll', medir)
      window.removeEventListener('resize', medir)
    }
  }, [])

  return (
    <div className={`cta-flotante ${visible ? 'es-visible' : ''}`} inert={!visible}>
      <Link className="boton boton--primario cta-flotante__boton" to={cta.a}>
        <span className="boton__texto">{cta.texto}</span>
        <span className="boton__flecha" aria-hidden="true">
          <Flecha width={18} height={18} />
        </span>
      </Link>
    </div>
  )
}
