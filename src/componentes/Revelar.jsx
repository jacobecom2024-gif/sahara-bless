import { useEffect, useRef, useState } from 'react'

/** Muestra el bloque con un fundido suave al entrar en pantalla. Sin movimiento si el usuario lo pide (CSS). */
export default function Revelar({ as: Etiqueta = 'div', className = '', children, ...resto }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const nodo = ref.current
    if (!nodo) return
    if (!('IntersectionObserver' in window)) {
      setVisible(true)
      return
    }
    const observador = new IntersectionObserver(
      (entradas) => {
        if (entradas.some((e) => e.isIntersecting)) {
          setVisible(true)
          observador.disconnect()
        }
      },
      { rootMargin: '0px 0px -8% 0px' },
    )
    observador.observe(nodo)
    return () => observador.disconnect()
  }, [])

  return (
    <Etiqueta ref={ref} className={`revelar ${visible ? 'es-visible' : ''} ${className}`} {...resto}>
      {children}
    </Etiqueta>
  )
}
