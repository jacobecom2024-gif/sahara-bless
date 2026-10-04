import Hero from '../componentes/Hero'
import Foto from '../componentes/Foto'
import Boton from '../componentes/Boton'
import Revelar from '../componentes/Revelar'
import useTitulo from '../useTitulo'
import { VIAJEROS, CTA } from '../datos/contenido'

export default function Viajeros() {
  useTitulo(
    'Viajes a medida por Marruecos · Sahara Bless Travel',
    'Marruecos, a vuestra manera. Diseñamos el viaje alrededor de vosotros: familias, Sahara, mar, montaña, cultura y celebraciones.',
  )
  const c = VIAJEROS

  return (
    <>
      <Hero foto={c.hero.foto} etiqueta={c.hero.etiqueta} titulo={c.hero.titulo} subtitulo={c.hero.subtitulo} alto="completo">
        <Boton a={CTA.viajero.a}>{CTA.viajero.texto}</Boton>
        <Boton a={CTA.rutas.a} variante="secundario">
          {CTA.rutas.texto}
        </Boton>
      </Hero>

      <section className="seccion sup-arena">
        <div className="contenedor contenedor--texto">
          <Revelar className="pila-amplia">
            <p className="lead">{c.introduccion.texto}</p>
          </Revelar>
        </div>
      </section>

      <section className="seccion sup-hueso" aria-labelledby="motivaciones">
        <div className="contenedor">
          <h2 id="motivaciones" className="titulo-seccion">
            {c.motivaciones.titulo}
          </h2>
          <p className="lead apagado" style={{ marginTop: 16 }}>
            {c.motivaciones.texto}
          </p>
          <Revelar as="ul" className="cuatro cuatro--tres" style={{ marginTop: 56, listStyle: 'none', padding: 0 }}>
            {c.motivaciones.items.map((m) => (
              <li key={m.titulo} className="valor">
                <Foto foto={m.foto} recorte="4 / 3" sizes="(min-width: 1000px) 360px, 100vw" />
                <h3 style={{ marginTop: 20 }}>{m.titulo}</h3>
                <p>{m.texto}</p>
              </li>
            ))}
          </Revelar>
        </div>
      </section>

      <section className="seccion sup-arena" aria-labelledby="inspirarse">
        <div className="contenedor contenedor--texto">
          <Revelar className="pila-amplia">
            <h2 id="inspirarse" className="titulo-seccion">
              {c.inspirarse.titulo}
            </h2>
            <p className="lead apagado">{c.inspirarse.texto}</p>
          </Revelar>
        </div>
        <div className="contenedor" style={{ marginTop: 48 }}>
          <Revelar className="caminos">
            {c.inspirarse.caminos.map((camino) => (
              <article key={camino.titulo} className="camino">
                <h2>{camino.titulo}</h2>
                <p>{camino.texto}</p>
                <div className="acciones">
                  <Boton a={camino.a} variante="texto">
                    {camino.texto2}
                  </Boton>
                </div>
              </article>
            ))}
          </Revelar>
        </div>
      </section>

      <section className="seccion sup-hueso" aria-labelledby="sin-cerrar">
        <div className="contenedor contenedor--texto">
          <Revelar className="pila-amplia">
            <h2 id="sin-cerrar" className="titulo-seccion">
              {c.sinCerrar.titulo}
            </h2>
            {c.sinCerrar.texto.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Revelar>
        </div>
      </section>

      <section className="seccion sup-tinta" aria-labelledby="chigaga-viajeros">
        <div className="contenedor">
          <Revelar className="bloque bloque--dos">
            <div className="pila">
              <p className="etiqueta">{c.chigaga.etiqueta}</p>
              <h2 id="chigaga-viajeros" className="titulo-seccion">
                {c.chigaga.titulo[0]}
              </h2>
              {c.chigaga.texto.map((p) => (
                <p key={p} className="apagado">
                  {p}
                </p>
              ))}
              <div className="acciones">
                <Boton a={CTA.chigaga.a} variante="texto">
                  {CTA.chigaga.texto}
                </Boton>
              </div>
            </div>
            <Foto foto={c.chigaga.foto} recorte="4 / 5" sizes="(min-width: 900px) 520px, 100vw" />
          </Revelar>
        </div>
      </section>

      <section className="seccion sup-arena" aria-labelledby="ultimo">
        <div className="contenedor contenedor--texto centrado">
          <Revelar className="pila-amplia">
            <h2 id="ultimo" className="titulo-seccion" style={{ marginInline: 'auto' }}>
              {c.ultimo.titulo}
            </h2>
            <p className="lead apagado">{c.ultimo.texto}</p>
            <div className="acciones" style={{ justifyContent: 'center' }}>
              <Boton a={CTA.viajero.a}>{CTA.viajero.texto}</Boton>
            </div>
          </Revelar>
        </div>
      </section>
    </>
  )
}
