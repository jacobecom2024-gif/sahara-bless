import { Link } from 'react-router-dom'
import Hero from '../componentes/Hero'
import Foto from '../componentes/Foto'
import Boton from '../componentes/Boton'
import Revelar from '../componentes/Revelar'
import BloqueCTA from '../componentes/BloqueCTA'
import CTAFlotante from '../componentes/CTAFlotante'
import { Flecha } from '../componentes/Iconos'
import { VIAJEROS, CTA } from '../datos/contenido'
import useTitulo from '../useTitulo'

export default function Viajeros() {
  useTitulo(
    'Viajes a medida por Marruecos · Sahara Bless Travel',
    'No tenéis que encajar en un circuito. Diseñamos el viaje alrededor de vosotros, con conocimiento real del terreno y personas que conocemos.',
  )

  const c = VIAJEROS

  return (
    <>
      <Hero
        foto={c.hero.foto}
        etiqueta={c.hero.etiqueta}
        titulo={c.hero.titulo}
        subtitulo={c.hero.subtitulo}
        alto="medio"
      >
        <Boton a={CTA.viajero.a}>Diseñar mi viaje</Boton>
      </Hero>

      <section className="seccion sup-arena grano">
        <Revelar className="contenedor-texto pila">
          {c.intro.map((p) => (
            <p key={p} className="lead">
              {p}
            </p>
          ))}
        </Revelar>
      </section>

      {/* Motivaciones: muy visual, nada de párrafos ------------------------ */}
      <section className="seccion sup-hueso grano">
        <div className="contenedor">
          <Revelar className="pila">
            <h2 className="titulo-seccion">{c.motivaciones.titulo}</h2>
            <p className="apagado">{c.motivaciones.entradilla}</p>
          </Revelar>

          <ul className="motivaciones">
            {c.motivaciones.lista.map((m, i) => (
              <Revelar as="li" key={m.titulo} retardo={(i % 3) * 60} className="motivacion">
                <Foto foto={m.foto} recorte="4 / 3" sizes="(min-width: 900px) 32vw, 100vw" />
                <h3>{m.titulo}</h3>
                <p className="apagado">{m.texto}</p>
              </Revelar>
            ))}
          </ul>
        </div>
      </section>

      {/* Dos caminos para quien aún no está listo -------------------------- */}
      <section className="seccion sup-arena grano">
        <div className="contenedor">
          <Revelar as="h2" className="titulo-seccion">
            {c.caminos.titulo}
          </Revelar>

          <div className="caminos">
            <Revelar className="camino">
              <h3>{c.caminos.inspirar.pregunta}</h3>
              <p className="apagado">{c.caminos.inspirar.texto}</p>
              <Link className="enlace-flecha" to={c.caminos.inspirar.cta.a}>
                {c.caminos.inspirar.cta.texto}
                <Flecha width={18} height={18} />
              </Link>
            </Revelar>

            <Revelar retardo={80} className="camino">
              <h3>{c.caminos.conocernos.pregunta}</h3>
              <p className="apagado">{c.caminos.conocernos.texto}</p>
              <Link className="enlace-flecha" to={c.caminos.conocernos.cta.a}>
                {c.caminos.conocernos.cta.texto}
                <Flecha width={18} height={18} />
              </Link>
            </Revelar>
          </div>
        </div>
      </section>

      {/* Anti-circuito ----------------------------------------------------- */}
      <section className="seccion sup-hueso grano">
        <Revelar className="contenedor-texto pila">
          <h2>{c.anticircuito.titulo}</h2>
          {c.anticircuito.texto.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </Revelar>
      </section>

      {/* Erg Chigaga ------------------------------------------------------- */}
      <section className="seccion sup-tinta oscuro grano">
        <div className="contenedor dos-columnas">
          <Revelar className="pila">
            <p className="etiqueta">{c.chigaga.etiqueta}</p>
            <h2>{c.chigaga.titulo}</h2>
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
            <Foto foto={c.chigaga.foto} recorte="4 / 3" sizes="(min-width: 900px) 46vw, 100vw" />
          </Revelar>
        </div>
      </section>

      <BloqueCTA
        titulo={c.cierre.titulo}
        texto={c.cierre.texto}
        cta={CTA.viajero}
        superficie="arena"
      />

      {/* La página mide ~5.000 px: sin esto, el CTA solo existe arriba y abajo. */}
      <CTAFlotante cta={CTA.viajero} />
    </>
  )
}
