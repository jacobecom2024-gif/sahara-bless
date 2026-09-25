import { useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Boton from '../componentes/Boton'
import Revelar from '../componentes/Revelar'
import { Whatsapp, Flecha } from '../componentes/Iconos'
import { useContenido } from '../i18n/contexto'
import { enlaceWhatsapp, hayEmail, EMAIL } from '../datos/marca'
import { FOTOS, src, srcSet } from '../datos/fotos'
import useTitulo from '../useTitulo'

/**
 * Contacto.
 *
 * Orden: B2B primero (prioridad declarada por el cliente), B2C después,
 * formulario y WhatsApp.
 *
 * El formulario bifurca en la primera pregunta y todo lo demás depende de ella.
 * Sólo nombre y una vía de contacto son obligatorios: el mensaje del cliente es
 * "no necesitas preparar un briefing".
 *
 * OJO — ENVÍO INERTE. No hay endpoint, ni email, ni número de WhatsApp
 * facilitados por el cliente. `enviar()` valida, muestra la confirmación y deja
 * el payload en consola. Para activarlo de verdad basta con sustituir el cuerpo
 * marcado con TODO por una llamada al backend o servicio de formularios elegido.
 *
 * `perfil=viajero|agencia` en la URL: valor interno, igual en los tres
 * idiomas (ver contenido.<lang>.js). No se traduce.
 */
export default function Contacto() {
  const { CONTACTO, UI, MARCA, TITULOS, rutaPorSlug } = useContenido()
  useTitulo(TITULOS.contacto.title, TITULOS.contacto.description)

  const [params] = useSearchParams()
  const perfilInicial = params.get('perfil') === 'agencia' ? 'agencia' : 'viajero'
  const rutaParam = params.get('ruta')
  const ruta = rutaParam ? rutaPorSlug(rutaParam) : null

  const [perfil, setPerfil] = useState(perfilInicial)
  const [errores, setErrores] = useState({})
  const [enviado, setEnviado] = useState(false)
  const formRef = useRef(null)
  const confirmacionRef = useRef(null)

  // Al llegar con otros parámetros (otro CTA, otra ruta) se vuelve al
  // formulario: si no, quien ya envió una vez se encuentra la confirmación
  // antigua en lugar del formulario y no tiene forma de escribir de nuevo.
  const claveParams = params.toString()
  useEffect(() => {
    setPerfil(perfilInicial)
    setEnviado(false)
    setErrores({})
  }, [perfilInicial, claveParams])

  const wa = enlaceWhatsapp(
    ruta ? UI.comun.mensajeWhatsappRuta(ruta.nombre) : UI.comun.mensajeWhatsappGenerico,
  )

  const irAlFormulario = (nuevoPerfil) => {
    setPerfil(nuevoPerfil)
    setEnviado(false)
    document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    window.setTimeout(() => formRef.current?.querySelector('#nombre')?.focus(), 400)
  }

  const enviar = (e) => {
    e.preventDefault()
    const datos = Object.fromEntries(new FormData(e.currentTarget).entries())
    const fallos = {}

    if (!datos.nombre?.trim()) fallos.nombre = UI.contacto.errorNombre
    if (!datos.contacto?.trim()) {
      fallos.contacto = UI.contacto.errorContactoVacio
    } else if (
      !/^[^@\s]+@[^@\s]+\.[^@\s]{2,}$/.test(datos.contacto) &&
      !/[\d\s+()-]{7,}/.test(datos.contacto)
    ) {
      fallos.contacto = UI.contacto.errorContactoInvalido
    }

    setErrores(fallos)

    if (Object.keys(fallos).length) {
      const primero = Object.keys(fallos)[0]
      formRef.current?.querySelector(`#${primero}`)?.focus()
      return
    }

    // TODO(cliente): sustituir por el envío real cuando haya destino.
    // No se inventa ni endpoint ni dirección de correo.
    console.info('[Sahara Bless] Formulario listo para enviar:', {
      perfil,
      ruta: rutaParam,
      ...datos,
    })
    setEnviado(true)
    window.setTimeout(() => confirmacionRef.current?.focus(), 60)
  }

  const c = CONTACTO
  const esAgencia = perfil === 'agencia'

  return (
    <div className="pagina-contacto">
      <header className="seccion sup-base grano contacto__cabecera">
        <div className="contenedor">
          <p className="etiqueta">{c.hero.etiqueta}</p>
          <h1>{c.hero.titulo}</h1>
        </div>
      </header>

      {/* B2B primero: es la prioridad declarada --------------------------- */}
      <section className="seccion sup-arena grano contacto__via">
        <Revelar className="contenedor-texto pila">
          <p className="etiqueta">{UI.contacto.agenciasEtiqueta}</p>
          <h2>{c.agencia.pregunta}</h2>
          {c.agencia.texto.map((p) => (
            <p key={p} className="apagado">
              {p}
            </p>
          ))}
          <p className="pila__accion">
            <Boton onClick={() => irAlFormulario('agencia')}>{c.agencia.cta}</Boton>
          </p>
        </Revelar>
      </section>

      <section className="seccion sup-base grano contacto__via">
        <Revelar className="contenedor-texto pila">
          <p className="etiqueta">{UI.contacto.viajerosEtiqueta}</p>
          <h2>{c.viajero.pregunta}</h2>
          {c.viajero.texto.map((p) => (
            <p key={p} className="apagado">
              {p}
            </p>
          ))}
          <p className="pila__accion">
            <Boton onClick={() => irAlFormulario('viajero')}>{c.viajero.cta}</Boton>
          </p>
        </Revelar>
      </section>

      {/* Formulario bifurcado --------------------------------------------- */}
      <section id="formulario" className="seccion sup-base grano">
        <div className="contenedor-texto">
          <h2>{c.formulario.titulo}</h2>
          {/* Aquí y no en la cabecera: los CTA de viajero aterrizan directamente
              en #formulario, y arriba el aviso quedaba fuera de vista. */}
          {ruta && (
            <p className="contacto__ruta lead">
              {UI.contacto.preRuta}
              <strong>{ruta.nombre}</strong> ({ruta.dias}){UI.contacto.posRuta}
            </p>
          )}
          <p className="apagado formulario__entradilla">{c.formulario.entradilla}</p>

          {enviado ? (
            <div className="confirmacion" role="status" tabIndex={-1} ref={confirmacionRef}>
              <h3>{UI.contacto.graciasTitulo}</h3>
              <p>
                {UI.contacto.respuestaPrefijo}{' '}
                {esAgencia ? UI.contacto.respuestaAgencia : UI.contacto.respuestaViajero}.
              </p>
              <p className="aviso">
                <strong>{UI.contacto.avisoTecnicoEtiqueta}</strong> {UI.contacto.avisoTecnicoTexto}
              </p>
              <button
                type="button"
                className="boton boton--secundario"
                onClick={() => setEnviado(false)}
              >
                <span className="boton__texto">{UI.contacto.escribirOtroMensaje}</span>
              </button>
            </div>
          ) : (
            <form ref={formRef} className="formulario" onSubmit={enviar} noValidate>
              <fieldset className="campo campo--perfil">
                <legend className="campo__etiqueta">{UI.contacto.legendSoy}</legend>
                <div className="opciones">
                  <label className={`opcion ${!esAgencia ? 'es-elegida' : ''}`}>
                    <input
                      type="radio"
                      name="perfil"
                      value="viajero"
                      checked={!esAgencia}
                      onChange={() => setPerfil('viajero')}
                    />
                    {UI.contacto.opcionViajero}
                  </label>
                  <label className={`opcion ${esAgencia ? 'es-elegida' : ''}`}>
                    <input
                      type="radio"
                      name="perfil"
                      value="agencia"
                      checked={esAgencia}
                      onChange={() => setPerfil('agencia')}
                    />
                    {UI.contacto.opcionAgencia}
                  </label>
                </div>
              </fieldset>

              <div className="campo">
                <label className="campo__etiqueta" htmlFor="nombre">
                  {UI.contacto.labelNombre} <span className="campo__obligatorio">{UI.contacto.obligatorio}</span>
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  autoComplete="name"
                  aria-invalid={errores.nombre ? 'true' : undefined}
                  aria-describedby={errores.nombre ? 'error-nombre' : undefined}
                />
                {errores.nombre && (
                  <p className="campo__error" id="error-nombre" role="alert">
                    {errores.nombre}
                  </p>
                )}
              </div>

              {esAgencia && (
                <>
                  <div className="campo">
                    <label className="campo__etiqueta" htmlFor="agencia">
                      {UI.contacto.labelAgencia}
                    </label>
                    <input id="agencia" name="agencia" type="text" autoComplete="organization" />
                  </div>

                  <div className="campo">
                    <label className="campo__etiqueta" htmlFor="web">
                      {UI.contacto.labelWeb}
                    </label>
                    <input id="web" name="web" type="url" inputMode="url" placeholder="https://" />
                  </div>
                </>
              )}

              <div className="campo">
                <label className="campo__etiqueta" htmlFor="contacto">
                  {UI.contacto.labelEmailWhatsapp}{' '}
                  <span className="campo__obligatorio">{UI.contacto.obligatorio}</span>
                </label>
                <input
                  id="contacto"
                  name="contacto"
                  type="text"
                  inputMode="email"
                  autoComplete="email"
                  aria-invalid={errores.contacto ? 'true' : undefined}
                  aria-describedby={errores.contacto ? 'error-contacto' : 'ayuda-contacto'}
                />
                {errores.contacto ? (
                  <p className="campo__error" id="error-contacto" role="alert">
                    {errores.contacto}
                  </p>
                ) : (
                  <p className="campo__ayuda" id="ayuda-contacto">
                    {UI.contacto.ayudaContacto}
                  </p>
                )}
              </div>

              {esAgencia ? (
                <>
                  <div className="campo">
                    <label className="campo__etiqueta" htmlFor="clientes">
                      {UI.contacto.labelTipoClientes}
                    </label>
                    <input
                      id="clientes"
                      name="clientes"
                      type="text"
                      placeholder={UI.contacto.placeholderTipoClientes}
                    />
                  </div>

                  <div className="campo">
                    <label className="campo__etiqueta" htmlFor="mensaje">
                      {UI.contacto.labelQueBuscas}
                    </label>
                    <textarea id="mensaje" name="mensaje" rows={5} />
                  </div>
                </>
              ) : (
                <>
                  <div className="campo campo--doble">
                    <div>
                      <label className="campo__etiqueta" htmlFor="cuando">
                        {UI.contacto.labelCuando}
                      </label>
                      <input
                        id="cuando"
                        name="cuando"
                        type="text"
                        placeholder={UI.contacto.placeholderCuando}
                      />
                    </div>
                    <div>
                      <label className="campo__etiqueta" htmlFor="duracion">
                        {UI.contacto.labelDuracion}
                      </label>
                      <input
                        id="duracion"
                        name="duracion"
                        type="text"
                        placeholder={UI.contacto.placeholderDuracion}
                      />
                    </div>
                  </div>

                  <div className="campo">
                    <label className="campo__etiqueta" htmlFor="conQuien">
                      {UI.contacto.labelConQuien}
                    </label>
                    <input
                      id="conQuien"
                      name="conQuien"
                      type="text"
                      placeholder={UI.contacto.placeholderConQuien}
                    />
                  </div>

                  <div className="campo">
                    <label className="campo__etiqueta" htmlFor="mensaje">
                      {UI.contacto.labelQueVivir}
                    </label>
                    <textarea id="mensaje" name="mensaje" rows={5} />
                  </div>
                </>
              )}

              <div className="formulario__envio">
                <Boton type="submit">
                  {esAgencia ? UI.contacto.submitAgencia : UI.contacto.submitViajero}
                </Boton>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* WhatsApp: visible, no omnipresente -------------------------------- */}
      <section className="seccion sup-base grano">
        <Revelar className="contenedor-texto pila">
          <h2>{c.whatsapp.titulo}</h2>
          {wa ? (
            <>
              <p className="apagado">{c.whatsapp.texto}</p>
              <p className="pila__accion">
                <a className="boton boton--secundario" href={wa} target="_blank" rel="noreferrer">
                  <Whatsapp width={20} height={20} />
                  <span className="boton__texto">{UI.comun.escribirWhatsapp}</span>
                  <span className="boton__flecha" aria-hidden="true">
                    <Flecha width={18} height={18} />
                  </span>
                </a>
              </p>
            </>
          ) : (
            <p className="apagado">
              {UI.contacto.whatsappSinConfigurarPrefijo} <code>WHATSAPP</code>{' '}
              {UI.contacto.whatsappSinConfigurarEn} <code>src/datos/marca.js</code>.
            </p>
          )}
          {hayEmail() && (
            <p className="apagado">
              {UI.contacto.porCorreo} <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </p>
          )}
        </Revelar>
      </section>

      {/* Foto a pantalla casi completa: la regla de al menos una por página.
          Antes iba aquí `te-patio-puerta-azul`, que tiene 595 px de ancho y se
          deshacía a sangre; se sustituye por una de banco con resolución para
          este uso (ver el informe de auditoría, apartado 11). */}
      <section className="foto-plena" aria-hidden="true">
        <img
          src={src(FOTOS.stockTeServido, 1600)}
          srcSet={srcSet(FOTOS.stockTeServido)}
          sizes="100vw"
          width={FOTOS.stockTeServido.ancho}
          height={FOTOS.stockTeServido.alto}
          alt=""
          data-origen={FOTOS.stockTeServido.origen}
          data-fuente={FOTOS.stockTeServido.fuente}
          loading="lazy"
          decoding="async"
        />
      </section>

      <section className="seccion sup-base grano">
        <div className="contenedor">
          <p className="firma">{MARCA.nombre}</p>
          <p className="etiqueta">{MARCA.territorio}</p>
          <p className="apagado firma__descriptor">{MARCA.descriptor}</p>
        </div>
      </section>
    </div>
  )
}
