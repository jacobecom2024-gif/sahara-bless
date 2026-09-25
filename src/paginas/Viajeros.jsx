import { Link } from 'react-router-dom'
import Hero from '../componentes/Hero'
import Foto from '../componentes/Foto'
import Boton from '../componentes/Boton'
import Revelar from '../componentes/Revelar'
import BloqueCTA from '../componentes/BloqueCTA'
import CTAFlotante from '../componentes/CTAFlotante'
import Lineas from '../componentes/Lineas'
import { Flecha } from '../componentes/Iconos'
import { FOTOS, src, srcSet } from '../datos/fotos'
import { useContenido } from '../i18n/contexto'
import useTitulo from '../useTitulo'

export default function Viajeros() {
  const { VIAJEROS, CTA, UI, TITULOS } = useContenido()
  useTitulo(TITULOS.viajeros.title, TITULOS.viajeros.description)

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
        <Boton a={CTA.viajero.a}>{UI.viajeros.heroCta}</Boton>
      </Hero>

      <section className="seccion sup-base grano">
        <Revelar className="contenedor-texto pila">
          {c.intro.map((p) => (
            <p key={p} className="lead">
              {p}
            </p>
          ))}
        </Revelar>

        <Revelar className="contenedor pila-ancha">
          <Foto
            foto={FOTOS.mapaNomada}
            recorte="16 / 9"
            sizes="(min-width: 1240px) 1120px, 100vw"
            pie={UI.viajeros.mapaPie}
          />
        </Revelar>
      </section>

      {/* Motivaciones: muy visual, nada de párrafos ------------------------ */}
      <section className="seccion sup-base grano">
        <div className="contenedor">
          <Revelar className="pila">
            <h2 className="titulo-seccion">{c.motivaciones.titulo}</h2>
            {c.motivaciones.entradilla && <p className="apagado">{c.motivaciones.entradilla}</p>}
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

      {/* Respiro entre la rejilla de motivaciones y el resto: una foto sola,
          a sangre, sin texto encima. Misma ruptura que en Inicio. */}
      <figure className="foto-plena foto-plena--con-pie">
        <img
          src={src(FOTOS.campamentoDron, 1600)}
          srcSet={srcSet(FOTOS.campamentoDron)}
          sizes="100vw"
          width={FOTOS.campamentoDron.ancho}
          height={FOTOS.campamentoDron.alto}
          alt={FOTOS.campamentoDron.alt}
          data-origen={FOTOS.campamentoDron.origen}
          data-fuente={FOTOS.campamentoDron.fuente}
          loading="lazy"
          decoding="async"
        />
        <figcaption className="foto-plena__pie etiqueta">{UI.viajeros.campamentoPie}</figcaption>
      </figure>

      {/* Dos caminos para quien aún no está listo: la sección en arena ---- */}
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
      <section className="seccion sup-base grano">
        <Revelar className="contenedor-texto pila">
          <h2>{c.anticircuito.titulo}</h2>
          {c.anticircuito.texto.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </Revelar>
      </section>

      {/* Momento de cita: venía del cierre de Inicio, que ahora habla a
          agencias. Aquí sigue hablándole a quien viaja. */}
      <section className="seccion cita-momento sup-inversa grano">
        <Revelar className="contenedor cita-momento__interior">
          <h2 className="cita-momento__titulo">
            <Lineas texto={c.cita.titulo} />
          </h2>
          <p className="cita-momento__texto">{c.cita.texto}</p>
        </Revelar>
      </section>

      {/* Erg Chigaga ------------------------------------------------------- */}
      <section className="seccion sup-base grano">
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
              <Boton a={CTA.chigaga.a} variante="flecha">
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
        superficie="base"
      />

      {/* La página mide ~5.000 px: sin esto, el CTA solo existe arriba y abajo. */}
      <CTAFlotante cta={CTA.viajero} />
    </>
  )
}
