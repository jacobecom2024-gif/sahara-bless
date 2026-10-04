import Hero from '../componentes/Hero'
import Foto from '../componentes/Foto'
import Boton from '../componentes/Boton'
import Revelar from '../componentes/Revelar'
import useTitulo from '../useTitulo'
import { DESIERTOS } from '../datos/contenido'
import { FOTOS } from '../datos/fotos'

export default function ErgChigaga() {
  useTitulo(
    '¿Erg Chigaga o Merzouga? · Sahara Bless Travel',
    'Dos desiertos, dos maneras de vivir el Sahara. Te ayudamos a elegir cuál encaja con tu viaje.',
    FOTOS.carreteraHamada,
  )
  const c = DESIERTOS

  return (
    <>
      <Hero foto={c.hero.foto} intro={c.hero.intro} titulo={c.hero.titulo} alto="medio" />

      <section className="sec sec--arena">
        <div className="wrap">
          <Revelar style={{ maxWidth: 740 }}>
            <p className="lead">{c.intro}</p>
          </Revelar>
        </div>
      </section>

      {/* Comparativa visual: dos fotos, dos textos; el mismo peso para cada desierto. */}
      <section className="sec">
        <div className="wrap">
          {c.opciones.map((o, i) => (
            <Revelar key={o.nombre} className={`pareja ${i % 2 ? 'pareja--invertida' : ''}`} style={{ marginTop: i ? 'clamp(72px, 10vw, 128px)' : 0 }}>
              <Foto foto={o.foto} recorte="4 / 5" sizes="(min-width: 1000px) 560px, 100vw" />
              <div style={{ maxWidth: 520 }}>
                <p className="etiqueta">{o.nombre}</p>
                <h2 className="titulo--sub" style={{ marginTop: 16 }}>
                  {o.titulo}
                </h2>
                <p className="apagado" style={{ marginTop: 20 }}>
                  {o.texto}
                </p>
                <ul className="nota" style={{ listStyle: 'none', marginTop: 28, padding: '0 0 0 0', background: 'none', borderLeft: 0, borderTop: '1px solid var(--linea)', paddingTop: 22 }}>
                  {o.puntos.map((p) => (
                    <li key={p} style={{ padding: '6px 0' }}>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Revelar>
          ))}
        </div>
      </section>

      <section className="sec sec--arena">
        <div className="wrap" style={{ maxWidth: 820 }}>
          <Revelar>
            <h2 id="eleccion" className="titulo">
              {c.eleccion.titulo[0]}
              <br />
              {c.eleccion.titulo[1]}
            </h2>
            <p className="lead apagado" style={{ marginTop: 26 }}>
              {c.eleccion.texto}
            </p>
            <div className="acciones">
              <Boton a="/contacto?perfil=viajero">{c.cierre.accion}</Boton>
            </div>
          </Revelar>
        </div>
      </section>

      {/* Erg Chigaga con presencia propia: bloque editorial con su historia. */}
      <section className="sec sec--oliva" aria-labelledby="chigaga-historia">
        <div className="wrap pareja pareja--foto-grande">
          <Revelar style={{ maxWidth: 580 }}>
            <p className="etiqueta">{c.chigaga.etiqueta}</p>
            <h2 id="chigaga-historia" className="titulo--sub" style={{ marginTop: 16 }}>
              {c.chigaga.titulo}
            </h2>
            {c.chigaga.texto.map((p) => (
              <p key={p} className="apagado" style={{ marginTop: 20 }}>
                {p}
              </p>
            ))}
            <div className="acciones">
              <Boton a="/nuestra-historia" variante="enlace">
                Nuestra historia
              </Boton>
            </div>
          </Revelar>
          <Revelar>
            <Foto foto={FOTOS.dunasChigaga} recorte="4 / 5" sizes="(min-width: 1000px) 560px, 100vw" posicion="50% 60%" />
          </Revelar>
        </div>
      </section>
    </>
  )
}
