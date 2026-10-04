import Hero from '../componentes/Hero'
import Foto from '../componentes/Foto'
import Boton from '../componentes/Boton'
import Revelar from '../componentes/Revelar'
import useTitulo from '../useTitulo'
import { DESIERTOS } from '../datos/contenido'

export default function ErgChigaga() {
  useTitulo(
    '¿Erg Chigaga o Merzouga? · Sahara Bless Travel',
    'Dos desiertos, dos maneras de vivir el Sahara. Te ayudamos a elegir cuál encaja con tu viaje.',
  )
  const c = DESIERTOS

  return (
    <>
      <Hero etiqueta={c.hero.etiqueta} titulo={c.hero.titulo} subtitulo={c.hero.subtitulo} foto={c.hero.foto} alto="medio" />

      <section className="seccion sup-arena">
        <div className="contenedor contenedor--texto">
          <Revelar className="pila-amplia">
            <p className="lead">{c.intro}</p>
          </Revelar>
        </div>
      </section>

      <section className="seccion sup-hueso" aria-label="Comparativa">
        <div className="contenedor">
          <Revelar className="comparativa">
            {c.opciones.map((o) => (
              <article key={o.nombre} className="comparativa__opcion">
                <Foto foto={o.foto} recorte="4 / 3" sizes="(min-width: 900px) 540px, 100vw" />
                <p className="etiqueta">{o.nombre}</p>
                <h2>{o.titulo}</h2>
                <p className="apagado" style={{ marginTop: 16 }}>
                  {o.texto}
                </p>
                <ul className="lista-puntos">
                  {o.puntos.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </article>
            ))}
          </Revelar>
        </div>
      </section>

      <section className="seccion sup-arena" aria-labelledby="eleccion">
        <div className="contenedor contenedor--texto centrado">
          <Revelar className="pila-amplia">
            <h2 id="eleccion" className="titulo-seccion" style={{ marginInline: 'auto' }}>
              {c.eleccion.titulo[0]}
              <br />
              {c.eleccion.titulo[1]}
            </h2>
            {c.eleccion.texto.map((p) => (
              <p key={p} className="lead apagado">
                {p}
              </p>
            ))}
          </Revelar>
        </div>
      </section>

      <section className="seccion sup-tinta" aria-labelledby="chigaga-desiertos">
        <div className="contenedor">
          <Revelar className="contenedor-texto pila">
            <p className="etiqueta">{c.chigaga.etiqueta}</p>
            <h2 id="chigaga-desiertos">Y aquí hay algo que para nosotros importa.</h2>
            {c.chigaga.texto.map((p) => (
              <p key={p} className="apagado">
                {p}
              </p>
            ))}
            <div className="acciones">
              <Boton a="/nuestra-historia" variante="texto">
                Conocer nuestra historia
              </Boton>
            </div>
          </Revelar>
        </div>
      </section>

      <section className="seccion sup-arena">
        <div className="contenedor centrado">
          <Boton a="/contacto?perfil=viajero">{c.cierre.accion}</Boton>
        </div>
      </section>
    </>
  )
}
