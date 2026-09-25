import { Navigate, useParams, Link } from 'react-router-dom'
import Hero from '../componentes/Hero'
import Foto from '../componentes/Foto'
import Boton from '../componentes/Boton'
import Revelar from '../componentes/Revelar'
import { Flecha } from '../componentes/Iconos'
import { useContenido, useIdioma } from '../i18n/contexto'
import { rutaLocalizada } from '../i18n/idiomas'
import useTitulo from '../useTitulo'

/**
 * Ficha de ruta.
 *
 * hero → introducción → itinerario → CTA intermedio → "Nuestro Sahara" →
 * personalización → CTA final → puerta B2B.
 *
 * El CTA intermedio aparece UNA sola vez, hacia la mitad del itinerario. El
 * brief prohíbe expresamente un CTA después de cada día.
 */
export default function Ruta() {
  const { slug } = useParams()
  const idioma = useIdioma()
  const { rutaPorSlug, NUESTRO_SAHARA, UI } = useContenido()
  const ruta = rutaPorSlug(slug)

  useTitulo(
    ruta ? `${ruta.nombre} · ${ruta.dias} ${UI.ruta.sufijoTitulo}` : UI.ruta.rutaNoEncontrada,
    ruta ? `${ruta.gancho} ${ruta.resumenTarjeta}` : undefined,
  )

  if (!ruta) return <Navigate to={rutaLocalizada('rutas', idioma)} replace />

  // `#formulario`: valor interno, ver el comentario de CTA en contenido.<lang>.js.
  const enlaceContacto = `${rutaLocalizada('contacto', idioma)}?perfil=viajero&ruta=${ruta.slug}#formulario`
  const enlaceContactoAgencia = `${rutaLocalizada('contacto', idioma)}?perfil=agencia&ruta=${ruta.slug}`
  const mitad = Math.ceil(ruta.itinerario.length / 2)

  return (
    <>
      <Hero
        foto={ruta.foto}
        etiqueta={`${ruta.dias} · ${ruta.lugares}`}
        titulo={ruta.titular}
        alto="medio"
      />

      {/* Introducción ------------------------------------------------------ */}
      <section className="seccion sup-base grano">
        <Revelar className="contenedor-texto pila">
          {ruta.entradilla.map((p, i) => (
            <p key={p} className={i === 0 ? 'lead' : undefined}>
              {p}
            </p>
          ))}
          <p className="pila__accion">
            <Boton a={enlaceContacto}>{UI.ruta.quieroEstaRuta}</Boton>
          </p>
        </Revelar>
      </section>

      {/* Itinerario -------------------------------------------------------- */}
      <section className="seccion sup-base grano" aria-labelledby="itinerario">
        <div className="contenedor">
          <Revelar as="h2" id="itinerario" className="titulo-seccion">
            {UI.ruta.itinerarioTitulo}
          </Revelar>

          <ol className="itinerario">
            {ruta.itinerario.map((dia, i) => {
              // Tamaños alternos (2026-09-25): los días pares llevan la foto a
              // ancho completo debajo del texto; los impares la mantienen en
              // columna, como hasta ahora. El desplegable "Cómo es el día" NO
              // entra en la alternancia: vive siempre en la columna de texto,
              // con el mismo ancho, así que abrirlo no descuadra nada.
              const grande = i % 2 === 0
              const invertido = !grande && i % 4 === 3

              return (
                <li key={dia.etiqueta} className="dia">
                  <Revelar
                    className={`dia__interior ${grande ? 'dia__interior--grande' : ''} ${
                      invertido ? 'dia__interior--invertido' : ''
                    }`}
                  >
                    <div className="dia__texto pila">
                      <p className="etiqueta">{dia.etiqueta}</p>
                      <h3>{dia.titulo}</h3>
                      {/* El detalle del día, literal, va plegado: el scroll
                          principal se lee en segundos y nada se pierde.
                          <details> nativo: funciona sin JavaScript. */}
                      <details className="dia__detalle">
                        <summary>{UI.ruta.comoEsElDia}</summary>
                        {dia.texto.map((p) => (
                          <p key={p} className="apagado">
                            {p}
                          </p>
                        ))}
                      </details>
                    </div>

                    {dia.foto && (
                      <div className="dia__foto">
                        <Foto
                          foto={dia.foto}
                          recorte={grande ? '16 / 9' : '4 / 3'}
                          sizes={
                            grande
                              ? '(min-width: 1240px) 1120px, 100vw'
                              : '(min-width: 900px) 48vw, 100vw'
                          }
                        />
                      </div>
                    )}
                  </Revelar>

                  {/* CTA intermedio: una sola vez, a mitad de página */}
                  {i === mitad - 1 && (
                    <Revelar className="cta-intermedio">
                      <p className="cta-intermedio__pregunta">{UI.ruta.preguntaIntermedia}</p>
                      <Boton a={enlaceContacto}>{UI.ruta.quieroEstaRuta}</Boton>
                    </Revelar>
                  )}
                </li>
              )
            })}
          </ol>
        </div>
      </section>

      {/* Nuestro Sahara (solo rutas con desierto) --------------------------- */}
      {ruta.sahara && (
        <section className="seccion sup-arena grano">
          <Revelar className="contenedor-texto pila">
            <p className="etiqueta">{NUESTRO_SAHARA.etiqueta}</p>
            <h2>{NUESTRO_SAHARA.titulo}</h2>
            {NUESTRO_SAHARA.texto.map((p) => (
              <p key={p} className="apagado lead">
                {p}
              </p>
            ))}
            <p>
              <Link className="enlace-flecha" to={rutaLocalizada('desiertos', idioma)}>
                {UI.comun.ergChigagaOMerzouga}
                <Flecha width={18} height={18} />
              </Link>
            </p>
          </Revelar>
        </section>
      )}

      {/* Personalización + CTA final ---------------------------------------- */}
      <section className="seccion sup-base grano">
        <Revelar className="contenedor-texto pila">
          <h2>{ruta.cierre.titulo}</h2>
          {ruta.cierre.texto.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <p className="destacado">{UI.ruta.laHacemosATuManera}</p>
          <p className="pila__accion">
            <Boton a={enlaceContacto}>{UI.ruta.hablemosDeEstaRuta}</Boton>
          </p>
        </Revelar>
      </section>

      {/* Puerta B2B: superficie arena, marcador de carril ------------------- */}
      <section className="seccion sup-arena grano puerta-b2b">
        <Revelar className="contenedor-texto pila">
          <p className="etiqueta">{UI.ruta.paraAgencias}</p>
          <h2>{UI.ruta.eresAgencia}</h2>
          <p className="apagado">{UI.ruta.ofrecelaATusClientes}</p>
          <p className="pila__accion">
            <Boton a={enlaceContactoAgencia}>{UI.ruta.quieroOfrecerEstaRuta}</Boton>
          </p>
        </Revelar>
      </section>

      <section className="seccion sup-base grano">
        <div className="contenedor centrado">
          <Link className="enlace-flecha" to={rutaLocalizada('rutas', idioma)}>
            {UI.ruta.verCincoRutas}
            <Flecha width={18} height={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
