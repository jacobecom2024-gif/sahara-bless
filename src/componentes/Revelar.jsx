import { useEffect, useRef, useState } from 'react'

/**
 * Entrada suave al aparecer en el viewport: opacidad + 12px de subida.
 * Es el único movimiento del sitio junto al zoom lento del hero.
 *
 * El contenido se renderiza siempre en el HTML (nunca display:none), así que
 * sigue siendo indexable y accesible aunque no se ejecute el observador.
 */
export default function Revelar({ children, retardo = 0, as: Etiqueta = 'div', className = '', ...resto }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const nodo = ref.current
    if (!nodo) return

    const sinMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (sinMovimiento || !('IntersectionObserver' in window)) {
      setVisible(true)
      return
    }

    const observador = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (entrada.isIntersecting) {
            setVisible(true)
            observador.unobserve(entrada.target)
          }
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
    )

    observador.observe(nodo)
    return () => observador.disconnect()
  }, [])

  return (
    <Etiqueta
      ref={ref}
      className={`revelar ${visible ? 'es-visible' : ''} ${className}`.trim()}
      style={retardo ? { transitionDelay: `${retardo}ms` } : undefined}
      {...resto}
    >
      {children}
    </Etiqueta>
  )
}
