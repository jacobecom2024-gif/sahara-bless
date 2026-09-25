import { useLocation, useNavigate } from 'react-router-dom'
import { IDIOMAS, rutaEnOtroIdioma } from './idiomas'
import { useIdioma } from './contexto'

const ETIQUETA = { es: 'ES', en: 'EN', fr: 'FR' }

/**
 * "ES · EN · FR" en texto, sin banderas. Cambia la URL a la página
 * equivalente en el idioma elegido (conservando el slug de ruta individual
 * si lo hay) y con ella todo el texto visible, porque `IdiomaProvider` vuelve
 * a montar con el contenido del idioma nuevo.
 *
 * Conserva `search` y `hash`: `?perfil=agencia` y `#formulario` son valores
 * internos (no se traducen, ver contexto.jsx) y siguen aplicando igual.
 */
export default function SelectorIdioma({ className = '' }) {
  const idioma = useIdioma()
  const navigate = useNavigate()
  const { pathname, search, hash } = useLocation()

  return (
    <div className={`selector-idioma ${className}`} role="group" aria-label="Elegir idioma">
      {IDIOMAS.map((codigo, i) => (
        <span key={codigo}>
          {i > 0 && (
            <span className="selector-idioma__separador" aria-hidden="true">
              ·
            </span>
          )}
          <button
            type="button"
            className={`selector-idioma__opcion ${codigo === idioma ? 'es-actual' : ''}`}
            aria-current={codigo === idioma ? 'true' : undefined}
            disabled={codigo === idioma}
            onClick={() => navigate(rutaEnOtroIdioma(pathname, idioma, codigo) + search + hash)}
          >
            {ETIQUETA[codigo]}
          </button>
        </span>
      ))}
    </div>
  )
}
