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
  )

  if (!ruta) return <Navigate to="/rutas" replace />

  const enlaceContacto = `/contacto?perfil=viajero&ruta=${ruta.slug}`
  const mitad = Math.ceil(ruta.itinerario.length / 2)

  return (
    <>
      <Hero etiqueta={`${ruta.dias} · ${ruta.lugares}`} titulo={ruta.titular} foto={ruta.foto} alto="medio" />

      <section className="seccion sup-arena">
        <Revelar className="contenedor-texto ruta-intro">
          {ruta.entradilla.map((p, i) => (
            <p key={p} className={i === 0 ? 'lead' : 'apagado'}>
              {p}
            </p>
          ))}
          <div className="acciones">
            <Boton a={enlaceContacto}>Quiero esta ruta</Boton>
          </div>
        </Revelar>
      </section>

      <section className="seccion sup-hueso" aria-labelledby="itinerario">
        <div className="contenedor">
          <h2 id="itinerario" className="titulo-seccion">
            El itinerario, día a día
          </h2>
          <p className="nota-orientativa">
            Itinerario orientativo. Podemos adaptar el ritmo, los alojamientos, las experiencias y la duración a vuestro tiempo.
          </p>

          <ol className="itinerario" style={{ marginTop: 40 }}>
            {ruta.itinerario.map((dia, i) => {
              // Fotos alternas: los días pares llevan la foto a ancho completo debajo del texto; los impares, en columna.
              const grande = i % 2 === 0 && dia.foto
              const invertido = !grande && i % 4 === 3

              return (
                <li key={dia.etiqueta} className="dia">
                  <Revelar
                    className={`dia__interior ${grande ? 'dia__interior--grande' : ''} ${invertido ? 'dia__interior--invertido' : ''}`}
                  >
                    <div className="dia__texto pila">
                      <p className="etiqueta">{dia.etiqueta}</p>
                      <h3>{dia.titulo}</h3>
                      {dia.texto.map((p) => (
                        <p key={p}>{p}</p>
                      ))}
                    </div>

                    {dia.foto && (
                      <div className="dia__foto">
                        <Foto
                          foto={dia.foto}
                          recorte={grande ? '16 / 9' : '4 / 3'}
                          sizes={grande ? '(min-width: 1200px) 1100px, 100vw' : '(min-width: 900px) 48vw, 100vw'}
                        />
                      </div>
                    )}
                  </Revelar>

                  {i === mitad - 1 && (
                    <Revelar className="cta-intermedio">
                      <p className="cta-intermedio__pregunta">{RUTA_CIERRE.intermedio.pregunta}</p>
                      <Boton a={enlaceContacto}>{RUTA_CIERRE.intermedio.texto}</Boton>
                    </Revelar>
                  )}
                </li>
              )
            })}
          </ol>
        </div>
      </section>

      {ruta.sahara && (
        <section className="seccion sup-tinta" aria-labelledby="nuestro-sahara">
          <Revelar className="contenedor-texto pila">
            <p className="etiqueta">{NUESTRO_SAHARA.etiqueta}</p>
            <h2 id="nuestro-sahara">{NUESTRO_SAHARA.titulo}</h2>
            {NUESTRO_SAHARA.texto.map((p) => (
              <p key={p} className="apagado">
                {p}
              </p>
            ))}
            <div className="acciones">
              <Boton a="/erg-chigaga-o-merzouga" variante="texto">
                ¿Erg Chigaga o Merzouga?
              </Boton>
            </div>
          </Revelar>
        </section>
      )}

      <section className="seccion sup-arena">
        <Revelar className="contenedor-texto pila">
          <h2>{RUTA_CIERRE.final.titulo}</h2>
          <p>{RUTA_CIERRE.final.texto}</p>
          <div className="acciones">
            <Boton a={enlaceContacto}>{RUTA_CIERRE.final.accion}</Boton>
          </div>
        </Revelar>
      </section>

      <section className="seccion sup-noche" aria-labelledby="agencias-ruta">
        <Revelar className="contenedor-texto pila">
          <p className="etiqueta">Para agencias</p>
          <h2 id="agencias-ruta">{RUTA_CIERRE.agencia.titulo}</h2>
          <p className="apagado">{RUTA_CIERRE.agencia.texto}</p>
          <div className="acciones">
            <Boton a="/contacto?perfil=agencia" variante="secundario">
              {RUTA_CIERRE.agencia.accion}
            </Boton>
          </div>
        </Revelar>
      </section>

      <section className="seccion sup-arena">
        <div className="contenedor centrado">
          <Boton a="/rutas" variante="texto">
            Ver las cinco rutas
          </Boton>
        </div>
      </section>
    </>
  )
}
