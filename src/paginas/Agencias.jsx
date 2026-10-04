import Hero from '../componentes/Hero'
import Foto from '../componentes/Foto'
import Boton from '../componentes/Boton'
import Revelar from '../componentes/Revelar'
import useTitulo from '../useTitulo'
import { AGENCIAS, CTA } from '../datos/contenido'

export default function Agencias() {
  useTitulo(
    'Partner local en Marruecos para agencias · Sahara Bless Travel',
    'Un partner local de confianza para diseñar y operar viajes en Marruecos. Trabajamos como una extensión de vuestro equipo.',
  )
  const c = AGENCIAS

  return (
    <>
      <Hero foto={c.hero.foto} etiqueta={c.hero.etiqueta} titulo={c.hero.titulo} subtitulo={c.hero.subtitulo} alto="completo">
        <Boton a={CTA.videollamada.a}>{CTA.videollamada.texto}</Boton>
        <Boton a={CTA.colaboracion.a} variante="secundario">
          {CTA.colaboracion.texto}
        </Boton>
      </Hero>

      <section className="seccion sup-arena">
        <div className="contenedor contenedor--texto">
          <Revelar className="pila-amplia">
            {c.introduccion.texto.map((p) => (
              <p key={p} className="lead">
                {p}
              </p>
            ))}
          </Revelar>
        </div>
      </section>

      <section className="seccion sup-hueso" aria-labelledby="relacion">
        <div className="contenedor">
          <Revelar className="bloque bloque--dos">
            <div className="pila">
              <h2 id="relacion" className="titulo-seccion">
                {c.relacion.titulo.join(' ')}
              </h2>
              {c.relacion.texto.map((p) => (
                <p key={p} className="apagado">
                  {p}
                </p>
              ))}
              <p className="etiqueta">{c.relacion.creamos}</p>
            </div>
          </Revelar>
        </div>
      </section>

      <section className="seccion sup-arena" aria-labelledby="esperar">
        <div className="contenedor">
          <h2 id="esperar" className="titulo-seccion">
            {c.esperar.titulo}
          </h2>
          <Revelar className="cuatro cuatro--tres" style={{ marginTop: 48 }}>
            {c.esperar.items.map((i) => (
              <div key={i.titulo} className="valor">
                <h3>{i.titulo}</h3>
                <p>{i.texto}</p>
              </div>
            ))}
          </Revelar>
        </div>
      </section>

      <section className="seccion sup-tinta" aria-labelledby="chigaga-agencias">
        <div className="contenedor">
          <Revelar className="bloque bloque--dos">
            <div className="pila">
              <p className="etiqueta">{c.chigaga.etiqueta}</p>
              <h2 id="chigaga-agencias" className="titulo-seccion">
                Erg Chigaga.
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

      <section className="seccion sup-arena" aria-labelledby="perfiles">
        <div className="contenedor">
          <Revelar className="bloque bloque--dos">
            <div>
              <h2 id="perfiles" className="titulo-seccion">
                {c.perfiles.titulo}
              </h2>
              <p className="lead apagado" style={{ marginTop: 20 }}>
                {c.perfiles.texto}
              </p>
              <ul className="lista-puntos" style={{ marginTop: 32 }}>
                {c.perfiles.items.map((i) => (
                  <li key={i.titulo}>
                    <strong>{i.titulo}.</strong> {i.texto}
                  </li>
                ))}
              </ul>
            </div>
            <Foto foto={c.perfiles.foto} recorte="4 / 5" sizes="(min-width: 900px) 520px, 100vw" />
          </Revelar>
        </div>
      </section>

      <section className="seccion sup-hueso" aria-labelledby="desde-2009">
        <div className="contenedor">
          <Revelar className="bloque bloque--dos bloque--invertido">
            <div className="pila">
              <p className="etiqueta">{c.historia.etiqueta}</p>
              <h2 id="desde-2009" className="titulo-seccion">
                {c.historia.titulo[0]}
              </h2>
              {c.historia.texto.map((p) => (
                <p key={p}>{p}</p>
              ))}
              <div className="acciones">
                <Boton a={CTA.historia.a} variante="texto">
                  {CTA.historia.texto}
                </Boton>
              </div>
            </div>
            <Foto foto={c.historia.foto} recorte="4 / 3" pie={c.historia.pie} sizes="(min-width: 900px) 560px, 100vw" />
          </Revelar>
        </div>
      </section>

      <section className="seccion sup-arena" aria-labelledby="confianza">
        <div className="contenedor contenedor--texto centrado">
          <Revelar className="pila-amplia">
            <h2 id="confianza" className="titulo-seccion" style={{ marginInline: 'auto' }}>
              {c.confianza.titulo[0]}
            </h2>
            {c.confianza.texto.map((p) => (
              <p key={p} className="lead apagado">
                {p}
              </p>
            ))}
          </Revelar>
        </div>
      </section>

      <section className="seccion sup-tinta" aria-labelledby="hablamos">
        <div className="contenedor contenedor--texto">
          <Revelar className="pila-amplia">
            <h2 id="hablamos" className="titulo-seccion">
              {c.cierre.titulo}
            </h2>
            <p className="lead apagado">{c.cierre.texto}</p>
            <div className="acciones">
              <Boton a={CTA.videollamada.a}>{CTA.videollamada.texto}</Boton>
              <Boton a={CTA.colaboracion.a} variante="secundario">
                {CTA.colaboracion.texto}
              </Boton>
            </div>
          </Revelar>
        </div>
      </section>
    </>
  )
}
