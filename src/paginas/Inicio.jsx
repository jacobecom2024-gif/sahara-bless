import Hero from '../componentes/Hero'
import Foto from '../componentes/Foto'
import Boton from '../componentes/Boton'
import Revelar from '../componentes/Revelar'
import useTitulo from '../useTitulo'
import { INICIO, CTA } from '../datos/contenido'

export default function Inicio() {
  useTitulo(
    'Sahara Bless Travel · Marruecos, desde dentro',
    'Diseñamos y operamos viajes por Marruecos desde 2009. Partner local para agencias y viajes a medida para viajeros.',
  )
  const c = INICIO

  return (
    <>
      <Hero foto={c.hero.foto} titulo={[c.hero.titulo]} subtitulo={c.hero.subtitulo} alto="completo" tira={c.hero.tira}>
        <Boton a={CTA.viajero.a}>{CTA.viajero.texto}</Boton>
        <Boton a={CTA.agencia.a} variante="secundario">
          {CTA.agencia.texto}
        </Boton>
      </Hero>

      <section className="seccion sup-arena" aria-labelledby="dos-caminos">
        <div className="contenedor">
          <h2 id="dos-caminos" className="solo-lectores">
            Dos caminos
          </h2>
          <Revelar className="caminos">
            <article className="camino">
              <p className="etiqueta">{c.caminos.agencias.etiqueta}</p>
              <h2>{c.caminos.agencias.titulo.join(' ')}</h2>
              <p>{c.caminos.agencias.texto}</p>
              <div className="acciones">
                <Boton a={c.caminos.agencias.acciones[0].a} variante="texto">
                  {c.caminos.agencias.acciones[0].texto}
                </Boton>
                <Boton a={c.caminos.agencias.acciones[1].a}>{c.caminos.agencias.acciones[1].texto}</Boton>
              </div>
            </article>
            <article className="camino camino--viajero">
              <p className="etiqueta">{c.caminos.viajeros.etiqueta}</p>
              <h2>{c.caminos.viajeros.titulo[0]}</h2>
              <p>{c.caminos.viajeros.texto}</p>
              <div className="acciones">
                <Boton a={c.caminos.viajeros.acciones[0].a} variante="texto">
                  {c.caminos.viajeros.acciones[0].texto}
                </Boton>
                <Boton a={c.caminos.viajeros.acciones[1].a}>{c.caminos.viajeros.acciones[1].texto}</Boton>
              </div>
            </article>
          </Revelar>
        </div>
      </section>

      <section className="seccion sup-hueso" aria-labelledby="manifiesto">
        <div className="contenedor contenedor--texto">
          <Revelar className="pila-amplia">
            <h2 id="manifiesto" className="titulo-seccion">
              {c.manifiesto.titulo.join(' ')}
            </h2>
            {c.manifiesto.texto.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Revelar>
          <Revelar className="manifiesto__remate">
            <p className="destacado">{c.manifiesto.remate}</p>
          </Revelar>
        </div>
        <div className="contenedor" style={{ marginTop: 'clamp(56px, 8vw, 96px)' }}>
          <Revelar>
            <Foto foto={c.manifiesto.foto} recorte="16 / 9" pie={c.manifiesto.pie} sizes="(min-width: 1200px) 1100px, 100vw" />
          </Revelar>
        </div>
      </section>

      <section className="seccion sup-arena" aria-labelledby="valores">
        <div className="contenedor">
          <h2 id="valores" className="solo-lectores">
            Cómo viajamos
          </h2>
          <Revelar className="cuatro">
            {c.valores.map((v) => (
              <div key={v.titulo} className="valor">
                <h3>{v.titulo}</h3>
                <p>{v.texto}</p>
              </div>
            ))}
          </Revelar>
        </div>
      </section>

      <section className="seccion sup-tinta" aria-labelledby="chigaga">
        <div className="contenedor">
          <Revelar className="bloque bloque--dos">
            <div className="pila">
              <p className="etiqueta">{c.chigaga.etiqueta}</p>
              <h2 id="chigaga" className="titulo-seccion">
                {c.chigaga.titulo.join(' ')}
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

      <section className="seccion sup-arena" aria-labelledby="trayectoria">
        <div className="contenedor">
          <Revelar className="bloque bloque--dos bloque--invertido">
            <div className="pila">
              <p className="etiqueta">{c.trayectoria.etiqueta}</p>
              <h2 id="trayectoria" className="titulo-seccion">
                {c.trayectoria.titulo[0]}
              </h2>
              {c.trayectoria.texto.map((p) => (
                <p key={p}>{p}</p>
              ))}
              <div className="acciones">
                <Boton a={CTA.historia.a} variante="texto">
                  {CTA.historia.texto}
                </Boton>
              </div>
            </div>
            <Foto foto={c.trayectoria.foto} recorte="4 / 3" pie={c.trayectoria.pie} sizes="(min-width: 900px) 560px, 100vw" />
          </Revelar>
        </div>
      </section>

      <section className="seccion sup-hueso" aria-labelledby="cierre">
        <div className="contenedor contenedor--texto centrado">
          <Revelar className="pila-amplia">
            <h2 id="cierre" className="titulo-seccion" style={{ marginInline: 'auto' }}>
              {c.cierre.titulo[0]}
            </h2>
            <p className="lead apagado">{c.cierre.texto}</p>
            <div className="acciones" style={{ justifyContent: 'center' }}>
              <Boton a={c.cierre.accion.a}>{c.cierre.accion.texto}</Boton>
            </div>
          </Revelar>
        </div>
      </section>
    </>
  )
}
