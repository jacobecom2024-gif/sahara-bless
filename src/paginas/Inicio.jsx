import { Link } from 'react-router-dom'
import Hero from '../componentes/Hero'
import Foto from '../componentes/Foto'
import Boton from '../componentes/Boton'
import Revelar from '../componentes/Revelar'
import BloqueCTA from '../componentes/BloqueCTA'
import Lineas from '../componentes/Lineas'
import { Flecha } from '../componentes/Iconos'
import { INICIO, CTA } from '../datos/contenido'
import useTitulo from '../useTitulo'

export default function Inicio() {
  useTitulo(
    'Sahara Bless Travel · Marruecos, desde dentro',
    'Diseñamos y operamos viajes por Marruecos desde 2009. Partner local para agencias y viajes a medida para viajeros.',
  )

  const c = INICIO

  return (
    <>
      <Hero foto={c.hero.foto} titulo={c.hero.titulo} subtitulo={c.hero.subtitulo} alto="completo">
        <Boton a={CTA.viajero.a}>Diseñar mi viaje</Boton>
        <Boton a={CTA.agencia.a} variante="secundario" oscuro>
          Soy agencia
        </Boton>
      </Hero>

      <p className="tira sup-hueso etiqueta">{c.hero.tira}</p>

      {/* Intro ------------------------------------------------------------ */}
      <section className="seccion sup-arena grano">
        <Revelar className="contenedor-texto pila">
          {c.intro.map((p) => (
            <p key={p} className="lead">
              {p}
            </p>
          ))}
        </Revelar>
      </section>

      {/* Manifiesto ------------------------------------------------------- */}
      <section className="seccion sup-hueso grano">
        <Revelar className="contenedor pila-ancha">
          <div className="pila">
            <h2>
              <Lineas texto={c.manifiesto.titulo} />
            </h2>
            {c.manifiesto.texto.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <Foto
            foto={c.manifiesto.foto}
            recorte="16 / 9"
            sizes="(min-width: 1240px) 1120px, 100vw"
            pie="Un té compartido en el sur de Marruecos."
          />

          <p className="destacado">{c.manifiesto.remate}</p>
        </Revelar>
      </section>

      {/* Erg Chigaga ------------------------------------------------------ */}
      <section className="seccion sup-tinta oscuro grano">
        <div className="contenedor dos-columnas">
          <Revelar className="pila">
            <p className="etiqueta">{c.chigaga.etiqueta}</p>
            <h2>
              <Lineas texto={c.chigaga.titulo} />
            </h2>
            {c.chigaga.texto.map((p) => (
              <p key={p} className="apagado">
                {p}
              </p>
            ))}
            <p>
              <Boton a={CTA.chigaga.a} variante="flecha" oscuro>
                {CTA.chigaga.texto}
              </Boton>
            </p>
          </Revelar>

          <Revelar retardo={80}>
            <Foto foto={c.chigaga.foto} recorte="4 / 5" sizes="(min-width: 900px) 46vw, 100vw" />
          </Revelar>
        </div>
      </section>

      {/* Cuatro pilares --------------------------------------------------- */}
      <section className="seccion sup-arena grano">
        <div className="contenedor">
          <Revelar as="h2" className="titulo-seccion">
            {c.pilares.titulo}
          </Revelar>

          <ul className="pilares">
            {c.pilares.lista.map((pilar, i) => (
              <Revelar as="li" key={pilar.titulo} retardo={i * 60} className="pilar">
                {/* terracota, no ocre: el ocre sobre arena da 2.99:1 y esto es
                    texto, aunque parezca decoración. */}
                <span className="pilar__numero etiqueta" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3>{pilar.titulo}</h3>
                <p className="apagado">{pilar.texto}</p>
              </Revelar>
            ))}
          </ul>
        </div>
      </section>

      {/* Bifurcación B2C / B2B -------------------------------------------- */}
      <section className="seccion sup-hueso grano">
        <div className="contenedor">
          <Revelar as="h2" className="titulo-seccion">
            <Lineas texto={c.bifurcacion.titulo} />
          </Revelar>

          <div className="bifurcacion">
            <Revelar className="carril carril--viajero">
              <p className="etiqueta">Viajeros</p>
              <h3>{c.bifurcacion.viajero.pregunta}</h3>
              <p className="apagado">{c.bifurcacion.viajero.texto}</p>
              <Boton a={c.bifurcacion.viajero.cta.a}>{c.bifurcacion.viajero.cta.texto}</Boton>
            </Revelar>

            <Revelar retardo={80} className="carril carril--agencia sup-noche oscuro">
              <p className="etiqueta">Agencias</p>
              <h3>{c.bifurcacion.agencia.pregunta}</h3>
              <p className="apagado">{c.bifurcacion.agencia.texto}</p>
              <Boton a={c.bifurcacion.agencia.cta.a} oscuro>
                {c.bifurcacion.agencia.cta.texto}
              </Boton>
            </Revelar>
          </div>
        </div>
      </section>

      {/* Trayectoria ------------------------------------------------------- */}
      <section className="seccion sup-arena grano">
        <div className="contenedor dos-columnas dos-columnas--invertida">
          <Revelar>
            <Foto
              foto={c.trayectoria.foto}
              recorte="4 / 3"
              sizes="(min-width: 900px) 46vw, 100vw"
              pie={c.trayectoria.pie}
            />
          </Revelar>

          <Revelar retardo={80} className="pila">
            <h2>{c.trayectoria.titulo}</h2>
            {c.trayectoria.texto.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <p>
              <Link className="enlace-flecha" to={CTA.historia.a}>
                {CTA.historia.texto}
                <Flecha width={18} height={18} />
              </Link>
            </p>
          </Revelar>
        </div>
      </section>

      {/* Cierre emocional -------------------------------------------------- */}
      <section className="seccion sup-hueso grano">
        <Revelar className="contenedor-texto pila centrado">
          <h2>
            <Lineas texto={c.cierre.titulo} />
          </h2>
          {c.cierre.texto.map((p) => (
            <p key={p} className="lead">
              {p}
            </p>
          ))}
        </Revelar>
      </section>

      <BloqueCTA
        titulo={c.cierre.remateTitulo}
        texto={[c.cierre.remateTexto]}
        cta={c.cierre.cta}
        superficie="tinta"
        foto={c.cierre.foto}
      />
    </>
  )
}
