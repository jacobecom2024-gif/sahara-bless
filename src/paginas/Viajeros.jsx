import Hero from '../componentes/Hero'
import Foto from '../componentes/Foto'
import Boton from '../componentes/Boton'
import Revelar from '../componentes/Revelar'
import useTitulo from '../useTitulo'
import { VIAJEROS } from '../datos/contenido'
import { FOTOS } from '../datos/fotos'

export default function Viajeros() {
  useTitulo(
    'Viajes a medida por Marruecos · Sahara Bless Travel',
    'Marruecos, a vuestra manera. Diseñamos el viaje alrededor de vosotros: familias, Sahara, mar, montaña, cultura y celebraciones.',
    FOTOS.teFamiliaOasis,
  )
  const c = VIAJEROS

  return (
    <>
      <Hero foto={c.hero.foto} intro={c.hero.intro} titulo={c.hero.titulo} alto="medio" />

      <section className="sec sec--arena">
        <div className="wrap">
          <Revelar style={{ maxWidth: 740 }}>
            <p className="lead">{c.introduccion}</p>
          </Revelar>
        </div>
      </section>

      {/* Motivaciones: alternan foto con texto; sin cuadrícula de tarjetas. */}
      <section className="sec">
        <div className="wrap">
          <h2 className="titulo" style={{ maxWidth: '18ch' }}>
            ¿Qué os apetece vivir?
          </h2>
          <div style={{ marginTop: 'clamp(56px, 8vw, 96px)' }}>
            {c.motivaciones.map((m, i) => (
              <Revelar key={m.titulo} className={`pareja ${i % 2 ? 'pareja--invertida' : ''}`} style={{ marginTop: i ? 'clamp(64px, 9vw, 120px)' : 0 }}>
                <div style={{ maxWidth: 520 }}>
                  <h3 className="titulo--sub">{m.titulo}</h3>
                  <p className="lead apagado" style={{ marginTop: 16 }}>
                    {m.texto}
                  </p>
                </div>
                {m.foto ? (
                  <Foto foto={m.foto} recorte={i % 2 ? '4 / 3' : '3 / 4'} sizes="(min-width: 1000px) 520px, 100vw" />
                ) : (
                  <div aria-hidden="true" />
                )}
              </Revelar>
            ))}
          </div>
        </div>
      </section>

      <section className="sec sec--arena">
        <div className="wrap" style={{ maxWidth: 820 }}>
          <Revelar>
            <h2 className="titulo--sub">{c.sinCerrar.titulo}</h2>
            {c.sinCerrar.texto.map((p) => (
              <p key={p} className="lead apagado" style={{ marginTop: 22 }}>
                {p}
              </p>
            ))}
          </Revelar>
        </div>
      </section>

      {/* Dos caminos: inspirarse o conocernos. */}
      <section className="sec">
        <div className="wrap">
          <Revelar className="pareja">
            {c.caminos.map((camino) => (
              <div key={camino.etiqueta} style={{ borderTop: '2px solid var(--terracota)', paddingTop: 28 }}>
                <h3 className="titulo--sub">{camino.etiqueta}</h3>
                <p className="apagado" style={{ marginTop: 16, maxWidth: '36ch' }}>
                  {camino.texto}
                </p>
                <div className="acciones">
                  <Boton a={camino.enlace.a} variante="enlace">
                    {camino.enlace.texto}
                  </Boton>
                </div>
              </div>
            ))}
          </Revelar>
        </div>
      </section>

      <section className="sec sec--oliva">
        <div className="wrap">
          <Revelar className="pareja pareja--foto-grande">
            <div>
              <p className="etiqueta">{c.chigaga.etiqueta}</p>
              <h2 className="titulo--sub" style={{ marginTop: 16 }}>
                {c.chigaga.titulo}
              </h2>
              <p className="lead apagado" style={{ marginTop: 22 }}>
                {c.chigaga.texto}
              </p>
              <div className="acciones">
                <Boton a={c.chigaga.enlace.a} variante="enlace">
                  {c.chigaga.enlace.texto}
                </Boton>
              </div>
            </div>
            <Foto foto={FOTOS.dunasChigaga} recorte="4 / 5" sizes="(min-width: 1000px) 560px, 100vw" posicion="50% 60%" />
          </Revelar>
        </div>
      </section>

      <section className="sec">
        <div className="wrap" style={{ maxWidth: 760 }}>
          <Revelar>
            <h2 className="titulo">{c.cierre.titulo}</h2>
            <p className="lead apagado" style={{ marginTop: 22 }}>
              {c.cierre.texto}
            </p>
            <div className="acciones">
              <Boton a="/contacto?perfil=viajero">Diseñar mi viaje</Boton>
            </div>
          </Revelar>
        </div>
      </section>
    </>
  )
}
