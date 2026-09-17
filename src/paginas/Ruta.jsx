import { Navigate, useParams, Link } from 'react-router-dom'
import Hero from '../componentes/Hero'
import Foto from '../componentes/Foto'
import Boton from '../componentes/Boton'
import Revelar from '../componentes/Revelar'
import { Flecha } from '../componentes/Iconos'
import { rutaPorSlug, NUESTRO_SAHARA } from '../datos/rutas'
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
  const ruta = rutaPorSlug(slug)

  useTitulo(
    ruta ? `${ruta.nombre} · ${ruta.dias} por Marruecos` : 'Ruta no encontrada',
    ruta ? `${ruta.gancho} ${ruta.resumenTarjeta}` : undefined,
  )

  if (!ruta) return <Navigate to="/rutas" replace />

  // `#formulario`: ver el comentario de CTA en datos/contenido.js.
  const enlaceContacto = `/contacto?perfil=viajero&ruta=${ruta.slug}#formulario`
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
      <section className="seccion sup-arena grano">
        <Revelar className="contenedor-texto pila">
          {ruta.entradilla.map((p, i) => (
            <p key={p} className={i === 0 ? 'lead' : undefined}>
              {p}
            </p>
          ))}
          <p className="pila__accion">
            <Boton a={enlaceContacto}>Quiero esta ruta</Boton>
          </p>
        </Revelar>
      </section>

      {/* Itinerario -------------------------------------------------------- */}
      <section className="seccion sup-hueso grano" aria-labelledby="itinerario">
        <div className="contenedor">
          <Revelar as="h2" id="itinerario" className="titulo-seccion">
            El itinerario, día a día
          </Revelar>

          <ol className="itinerario">
            {ruta.itinerario.map((dia, i) => (
              <li key={dia.etiqueta} className="dia">
                <Revelar className={`dia__interior ${i % 2 ? 'dia__interior--invertido' : ''}`}>
                  <div className="dia__texto pila">
                    <p className="etiqueta">{dia.etiqueta}</p>
                    <h3>{dia.titulo}</h3>
                    {dia.texto.map((p) => (
                      <p key={p} className="apagado">
                        {p}
                      </p>
                    ))}
                  </div>

                  {dia.foto && (
                    <div className="dia__foto">
                      <Foto foto={dia.foto} recorte="4 / 3" sizes="(min-width: 900px) 48vw, 100vw" />
                    </div>
                  )}
                </Revelar>

                {/* CTA intermedio: una sola vez, a mitad de página */}
                {i === mitad - 1 && (
                  <Revelar className="cta-intermedio">
                    <p className="cta-intermedio__pregunta">¿Te imaginas haciendo esta ruta?</p>
                    <Boton a={enlaceContacto}>Quiero esta ruta</Boton>
                  </Revelar>
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Nuestro Sahara (solo rutas con desierto) --------------------------- */}
      {ruta.sahara && (
        <section className="seccion sup-tinta oscuro grano">
          <Revelar className="contenedor-texto pila">
            <p className="etiqueta">{NUESTRO_SAHARA.etiqueta}</p>
            <h2>{NUESTRO_SAHARA.titulo}</h2>
            {NUESTRO_SAHARA.texto.map((p) => (
              <p key={p} className="apagado lead">
                {p}
              </p>
            ))}
            <p>
              <Link className="enlace-flecha enlace-flecha--oscuro" to="/erg-chigaga-o-merzouga">
                ¿Erg Chigaga o Merzouga?
                <Flecha width={18} height={18} />
              </Link>
            </p>
          </Revelar>
        </section>
      )}

      {/* Personalización + CTA final ---------------------------------------- */}
      <section className="seccion sup-arena grano">
        <Revelar className="contenedor-texto pila">
          <h2>{ruta.cierre.titulo}</h2>
          {ruta.cierre.texto.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <p className="destacado">¿La hacemos a vuestra manera?</p>
          <p className="pila__accion">
            <Boton a={enlaceContacto}>Hablemos de esta ruta</Boton>
          </p>
        </Revelar>
      </section>

      {/* Puerta B2B: superficie noche, marcador de carril -------------------- */}
      <section className="seccion sup-noche oscuro grano puerta-b2b">
        <Revelar className="contenedor-texto pila">
          <p className="etiqueta">Para agencias</p>
          <h2>¿Eres agencia?</h2>
          <p className="apagado">
            Puedes ofrecer esta ruta a tus clientes o utilizarla como punto de partida para crear tu
            propio viaje por Marruecos. Nosotros nos encargamos del diseño y de la operación local.
          </p>
          <p className="pila__accion">
            <Boton a={`/contacto?perfil=agencia&ruta=${ruta.slug}`} oscuro>
              Quiero ofrecer esta ruta a mis clientes
            </Boton>
          </p>
        </Revelar>
      </section>

      <section className="seccion sup-hueso grano">
        <div className="contenedor centrado">
          <Link className="enlace-flecha" to="/rutas">
            Ver las cinco rutas
            <Flecha width={18} height={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
