import { Navigate, useParams } from 'react-router-dom'
import Hero from '../componentes/Hero'
import Foto from '../componentes/Foto'
import Boton from '../componentes/Boton'
import Revelar from '../componentes/Revelar'
import useTitulo from '../useTitulo'
import { rutaPorSlug, NUESTRO_SAHARA } from '../datos/rutas'
import { RUTA_CIERRE } from '../datos/contenido'

export default function Ruta() {
  const { slug } = useParams()
  const ruta = rutaPorSlug(slug)

  useTitulo(
    ruta ? `${ruta.nombre} · ${ruta.dias} por Marruecos` : 'Ruta no encontrada',
    ruta ? ruta.entradilla[0] : undefined,
    ruta?.foto,
  )

  if (!ruta) return <Navigate to="/rutas" replace />

  const enlaceContacto = `/contacto?perfil=viajero&ruta=${ruta.slug}`

  return (
    <>
      <Hero foto={ruta.foto} etiqueta={ruta.dias} intro={ruta.lugares} titulo={ruta.titular} alto="completo" />

      <section className="sec sec--arena">
        <div className="wrap">
          <Revelar className="ruta-intro">
            <p className="lead">{ruta.entradilla[0]}</p>
            <div>
              {ruta.entradilla.slice(1).map((p) => (
                <p key={p} className="apagado" style={{ marginTop: 0 }}>
                  {p}
                </p>
              ))}
              <div className="acciones">
                <Boton a={enlaceContacto}>Quiero esta ruta</Boton>
              </div>
            </div>
          </Revelar>
        </div>
      </section>

      <section className="sec" aria-labelledby="itinerario">
        <div className="wrap">
          <h2 id="itinerario" className="titulo">
            El itinerario, día a día.
          </h2>
          <p className="nota">
            Itinerario orientativo. Podemos adaptar el ritmo, el orden de las paradas, los alojamientos, las experiencias y la
            duración a vuestro tiempo.
          </p>

          <ol className="itinerario" style={{ marginTop: 40 }}>
            {ruta.itinerario.map((dia, i) => {
              // Alternancia de tamaños: día grande (foto a ancho completo) en pares, columna en impares.
              const grande = i % 2 === 0 && Boolean(dia.foto)
              const clase = grande ? 'dia--grande' : 'dia--columna'
              const invertido = !grande && i % 4 === 3

              return (
                <li key={dia.etiqueta} className={`dia ${clase} ${invertido ? 'dia--invertido' : ''}`}>
                  <>
                    <div className="dia__texto">
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
                        <Foto
                          foto={dia.foto}
                          recorte={grande ? '16 / 9' : '4 / 5'}
                          sizes={grande ? '(min-width: 1200px) 1100px, 100vw' : '(min-width: 1000px) 560px, 100vw'}
                        />
                      </div>
                    )}
                  </>
                </li>
              )
            })}
          </ol>
        </div>
      </section>

      {/* CTA intermedio: una sola vez, a mitad de la secuencia. */}
      <section className="wrap">
        <Revelar className="cta-intermedio">
          <p className="cta-intermedio__pregunta">{RUTA_CIERRE.intermedio.pregunta}</p>
          <Boton a={enlaceContacto}>{RUTA_CIERRE.intermedio.texto}</Boton>
        </Revelar>
      </section>

      {ruta.sahara && (
        <section className="sec sec--oliva" aria-labelledby="nuestro-sahara">
          <div className="wrap" style={{ maxWidth: 820 }}>
            <Revelar>
              <p className="etiqueta">{NUESTRO_SAHARA.etiqueta}</p>
              <h2 id="nuestro-sahara" className="titulo--sub" style={{ marginTop: 16 }}>
                {NUESTRO_SAHARA.titulo}
              </h2>
              {NUESTRO_SAHARA.texto.map((p) => (
                <p key={p} className="lead apagado" style={{ marginTop: 22 }}>
                  {p}
                </p>
              ))}
              <div className="acciones">
                <Boton a="/erg-chigaga-o-merzouga" variante="enlace">
                  ¿Erg Chigaga o Merzouga?
                </Boton>
              </div>
            </Revelar>
          </div>
        </section>
      )}

      <section className="sec">
        <div className="wrap" style={{ maxWidth: 760 }}>
          <Revelar>
            <h2 className="titulo--sub">{RUTA_CIERRE.final.titulo}</h2>
            <p className="lead apagado" style={{ marginTop: 22 }}>
              {RUTA_CIERRE.final.texto}
            </p>
            <div className="acciones">
              <Boton a={enlaceContacto}>{RUTA_CIERRE.final.accion}</Boton>
            </div>
          </Revelar>
        </div>
      </section>

      <section className="sec sec--arena">
        <div className="wrap" style={{ maxWidth: 760 }}>
          <Revelar>
            <p className="etiqueta">{RUTA_CIERRE.agencia.titulo}</p>
            <p className="lead" style={{ marginTop: 18 }}>
              {RUTA_CIERRE.agencia.texto}
            </p>
            <div className="acciones">
              <Boton a="/contacto?perfil=agencia" variante="enlace">
                {RUTA_CIERRE.agencia.accion}
              </Boton>
            </div>
          </Revelar>
        </div>
      </section>

      <section className="wrap" style={{ paddingBlock: 40 }}>
        <Boton a="/rutas" variante="enlace">
          Ver las cinco rutas
        </Boton>
      </section>
    </>
  )
}
