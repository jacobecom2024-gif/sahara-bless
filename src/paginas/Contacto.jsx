import { useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Boton from '../componentes/Boton'
import Revelar from '../componentes/Revelar'
import { Whatsapp } from '../componentes/Iconos'
import useTitulo from '../useTitulo'
import { CONTACTO } from '../datos/contenido'
import { rutaPorSlug } from '../datos/rutas'
import { enlaceWhatsapp } from '../datos/marca'

// Pendiente: email o endpoint de destino confirmados por la clienta. Hasta entonces el envío no está activo.
const ENVIO_CONFIGURADO = false

const validarEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim())
const validarTelefono = (v) => v.replace(/\D/g, '').length >= 9

const CAMPOS_VACIOS = {
  nombre: '',
  contacto: '',
  cuando: '',
  conQuien: '',
  duracion: '',
  quiereVivir: '',
  agencia: '',
  web: '',
  tipoClientes: '',
  buscaPartner: '',
}

export default function Contacto() {
  useTitulo(
    'Contacto · Sahara Bless Travel',
    'Escríbenos si eres agencia y buscas un partner local, o si quieres diseñar tu viaje a Marruecos. No necesitas tenerlo decidido.',
  )

  const [params] = useSearchParams()
  const perfilUrl = params.get('perfil')
  const ruta = rutaPorSlug(params.get('ruta') ?? '')

  const [perfil, setPerfil] = useState(perfilUrl === 'agencia' || perfilUrl === 'viajero' ? perfilUrl : '')
  const [valores, setValores] = useState({
    ...CAMPOS_VACIOS,
    quiereVivir: ruta ? `Estoy interesado en ${ruta.nombre}.` : '',
  })
  const [errores, setErrores] = useState({})
  const [estado, setEstado] = useState(null)
  const formulario = useRef(null)

  const cambiar = (campo) => (e) => setValores((v) => ({ ...v, [campo]: e.target.value }))

  const validar = () => {
    const e = {}
    if (!perfil) e.perfil = 'Indica si eres agencia o viajero.'
    if (!valores.nombre.trim()) e.nombre = 'Escribe tu nombre.'
    const contacto = valores.contacto.trim()
    if (!contacto) {
      e.contacto = 'Escribe un email o un número de WhatsApp.'
    } else if (contacto.includes('@') ? !validarEmail(contacto) : !validarTelefono(contacto)) {
      e.contacto = 'Revisa el dato: un email completo, o un número de WhatsApp con su prefijo.'
    }
    if (perfil === 'agencia' && !valores.agencia.trim()) e.agencia = 'Escribe el nombre de tu agencia.'
    return e
  }

  const enviar = (ev) => {
    ev.preventDefault()
    const e = validar()
    setErrores(e)
    setEstado(null)
    if (Object.keys(e).length) {
      formulario.current?.querySelector('[aria-invalid="true"], [data-error="true"]')?.focus()
      return
    }
    setEstado(ENVIO_CONFIGURADO ? 'enviado' : 'sin-destino')
  }

  const campo = (nombre, texto, { textarea = false, ayuda } = {}) => {
    const error = errores[nombre]
    const id = `campo-${nombre}`
    const props = {
      id,
      value: valores[nombre],
      onChange: cambiar(nombre),
      'aria-invalid': Boolean(error),
      'aria-describedby': error ? `${id}-error` : ayuda ? `${id}-ayuda` : undefined,
      'data-error': Boolean(error),
    }
    return (
      <div className="campo">
        <label htmlFor={id}>{texto}</label>
        {textarea ? <textarea {...props} /> : <input {...props} />}
        {ayuda && (
          <p id={`${id}-ayuda`} className="campo__ayuda">
            {ayuda}
          </p>
        )}
        {error && (
          <p id={`${id}-error`} className="campo__error">
            {error}
          </p>
        )}
      </div>
    )
  }

  const etiquetaBoton = perfil === 'agencia' ? 'Hablemos de una colaboración' : 'Diseñar mi viaje'
  const enlaceWa = enlaceWhatsapp('Hola, os escribo desde la web de Sahara Bless Travel.')

  return (
    <>
      <section className="seccion sup-arena contacto-cabecera">
        <div className="contenedor">
          <p className="etiqueta">Contacto</p>
          <h1 className="titulo-seccion" style={{ marginTop: 16 }}>
            {CONTACTO.titulo}
          </h1>
        </div>
      </section>

      <section className="sup-arena" style={{ paddingBottom: 'clamp(48px, 7vw, 88px)' }}>
        <div className="contenedor">
          <Revelar className="contacto-bloques">
            {CONTACTO.bloques.map((b) => (
              <article key={b.titulo} className="contacto-bloque">
                <h2>{b.titulo}</h2>
                <p className="apagado">{b.texto}</p>
                <div className="acciones">
                  <Boton a={`/contacto?perfil=${b.accion.perfil}#formulario`} variante="texto">
                    {b.accion.texto}
                  </Boton>
                </div>
              </article>
            ))}
          </Revelar>
        </div>
      </section>

      <section id="formulario" className="formulario-caja sup-hueso" aria-labelledby="formulario-titulo">
        <div className="contenedor formulario-caja__rejilla">
          <div>
            <h2 id="formulario-titulo" className="titulo-seccion">
              {CONTACTO.formulario.titulo}
            </h2>
            <p className="lead apagado" style={{ marginTop: 20 }}>
              {CONTACTO.formulario.texto}
            </p>
            {ruta && (
              <p className="nota-orientativa" style={{ marginTop: 28 }}>
                Ruta de interés: {ruta.nombre}.
              </p>
            )}
          </div>

          <form ref={formulario} className="formulario" onSubmit={enviar} noValidate>
            <fieldset className="formulario__grupo">
              <legend className="formulario__leyenda">Soy</legend>
              <div className="formulario__opciones">
                {CONTACTO.formulario.perfiles.map((p) => (
                  <label key={p.valor} className="opcion">
                    <input
                      type="radio"
                      name="perfil"
                      value={p.valor}
                      checked={perfil === p.valor}
                      onChange={() => setPerfil(p.valor)}
                      data-error={Boolean(errores.perfil)}
                    />
                    {p.texto}
                  </label>
                ))}
              </div>
              {errores.perfil && <p className="campo__error">{errores.perfil}</p>}
            </fieldset>

            {perfil && (
              <>
                <div className="campos-par">
                  {campo('nombre', 'Nombre')}
                  {campo('contacto', 'Email o WhatsApp', { ayuda: 'Indica al menos uno de los dos.' })}
                </div>

                {perfil === 'agencia' ? (
                  <>
                    <div className="campos-par">
                      {campo('agencia', 'Nombre de la agencia')}
                      {campo('web', 'Web (opcional)')}
                    </div>
                    {campo('tipoClientes', '¿Qué tipo de clientes tenéis?')}
                    {campo('buscaPartner', '¿Qué buscáis de un partner en Marruecos?', { textarea: true })}
                  </>
                ) : (
                  <>
                    <div className="campos-par">
                      {campo('cuando', '¿Cuándo te gustaría viajar?')}
                      {campo('conQuien', '¿Con quién viajas?')}
                      {campo('duracion', 'Duración aproximada')}
                    </div>
                    {campo('quiereVivir', '¿Qué te gustaría vivir?', { textarea: true })}
                  </>
                )}

                <div className="formulario__pie">
                  <button type="submit" className="boton boton--primario">
                    {etiquetaBoton}
                  </button>
                </div>

                {estado === 'sin-destino' && (
                  <div className="formulario__estado" role="status">
                    <p>
                      Todavía no podemos recibir este formulario desde la web: el envío no está configurado. Mientras tanto,
                      escríbenos por WhatsApp y lo vemos allí.
                    </p>
                    <div className="acciones">
                      <a className="boton boton--secundario" href={enlaceWa} target="_blank" rel="noreferrer">
                        <Whatsapp width="20" height="20" />
                        Escribir por WhatsApp
                      </a>
                    </div>
                  </div>
                )}
              </>
            )}
          </form>
        </div>
      </section>

      <section className="seccion sup-arena">
        <div className="contenedor contenedor--texto centrado">
          <h2 className="titulo-seccion" style={{ marginInline: 'auto' }}>
            {CONTACTO.whatsapp.titulo}
          </h2>
          <p className="lead apagado" style={{ marginTop: 16 }}>
            {CONTACTO.whatsapp.texto}
          </p>
          <div className="acciones" style={{ justifyContent: 'center' }}>
            <a className="boton boton--secundario" href={enlaceWhatsapp()} target="_blank" rel="noreferrer">
              <Whatsapp width="20" height="20" />
              {CONTACTO.whatsapp.accion}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
