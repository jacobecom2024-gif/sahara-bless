import { Link } from 'react-router-dom'
import Hero from '../componentes/Hero'
import Foto from '../componentes/Foto'
import Boton from '../componentes/Boton'
import Revelar from '../componentes/Revelar'
import BloqueCTA from '../componentes/BloqueCTA'
import Lineas from '../componentes/Lineas'
import { Flecha } from '../componentes/Iconos'
import VideoFondo from '../componentes/VideoFondo'
import { INICIO, CTA } from '../datos/contenido'
import { src, srcSet, VIDEOS } from '../datos/fotos'
import useTitulo from '../useTitulo'

/**
 * Portada con prioridad B2B (encargo de la clienta, 2026-09-20).
 *
 * hero agencias → franja de credibilidad → el problema de la agencia →
 * manifiesto → foto a sangre → ventajas para agencias → Erg Chigaga como
 * producto insignia → cómo trabajamos → entrada para viajeros particulares →
 * las dos miradas → cierre B2B.
 *
 * El carril B2C está presente y con su propio CTA, pero siempre después del
 * argumento de agencias: aproximadamente 70 / 30 en peso.
 */
export default function Inicio() {
  useTitulo(
    'Sahara Bless Travel · Partner local en Marruecos para agencias',
    'Diseñamos y operamos viajes privados por Marruecos desde 2009, con Erg Chigaga como territorio central. Partner local para agencias, y viajes a medida para viajeros particulares.',
  )

  const c = INICIO

  return (
    <>
      {/* El hero es vídeo desde 2026-09: hoguera con teteras, en silencio y en
          bucle. La foto del campamento a vista de dron se queda como respaldo
          si el vídeo no puede reproducirse. */}
      {/* Hero limpio (2026-09-24): titular, marca y etiqueta. La descripción
          bajó a la sección de reputación. */}
      <Hero
        foto={c.hero.foto}
        video={VIDEOS.heroHoguera}
        marca={c.hero.marca}
        confirmacion={c.hero.confirmacion}
        titulo={c.hero.titulo}
        alto="completo"
        crescendo
      />

      {/* Franja de credibilidad: solo datos confirmados ------------------- */}
      <p className="tira sup-arena etiqueta">{c.hero.tira}</p>

      {/* El problema de la agencia, sobre fondo claro. Sin CTA propio
          (2026-09-24): la sección explica, y la acción llega más abajo, en
          "cómo trabajamos" y en el cierre. */}
      <section className="seccion cita-momento sup-base grano" aria-labelledby="reputacion">
        <Revelar className="contenedor cita-momento__interior">
          <h2 id="reputacion" className="cita-momento__titulo">
            {c.problema.titulo}
          </h2>
          {c.problema.texto.map((p) => (
            <p key={p} className="cita-momento__texto">
              {p}
            </p>
          ))}
        </Revelar>
      </section>

      {/* Manifiesto ------------------------------------------------------- */}
      <section className="seccion sup-base grano">
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
            pie={c.manifiesto.pie}
          />

          <p className="destacado">{c.manifiesto.remate}</p>
        </Revelar>
      </section>

      {/* Respiro: una foto sola, a sangre, sin texto encima ni al lado. Es la
          ruptura del patrón "columna de texto + columna de foto". */}
      <figure className="foto-plena foto-plena--con-pie">
        <img
          src={src(c.manifiesto.fotoPlena, 1600)}
          srcSet={srcSet(c.manifiesto.fotoPlena)}
          sizes="100vw"
          width={c.manifiesto.fotoPlena.ancho}
          height={c.manifiesto.fotoPlena.alto}
          alt={c.manifiesto.fotoPlena.alt}
          data-origen={c.manifiesto.fotoPlena.origen}
          data-fuente={c.manifiesto.fotoPlena.fuente}
          loading="lazy"
          decoding="async"
        />
        <figcaption className="foto-plena__pie etiqueta">{c.manifiesto.piePlena}</figcaption>
      </figure>

      {/* Ventajas para agencias ------------------------------------------- */}
      <section className="seccion sup-base grano">
        <div className="contenedor">
          <Revelar as="h2" className="titulo-seccion">
            {c.pilares.titulo}
          </Revelar>

          <Revelar>
            <Foto
              foto={c.pilares.foto}
              recorte="3 / 2"
              sizes="(min-width: 1240px) 1120px, 100vw"
              pie={c.pilares.pie}
            />
          </Revelar>

          {/* Lista tipográfica vertical, no una cuadrícula de tarjetas
              iguales: cada punto ocupa su línea, con el número en Fraunces a
              gran escala y muy bajo contraste como marca de lugar. */}
          <ol className="pilares">
            {c.pilares.lista.map((pilar, i) => (
              <Revelar as="li" key={pilar.titulo} retardo={i * 60} className="pilar">
                <span className="pilar__numero" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="pilar__texto">
                  <h3>{pilar.titulo}</h3>
                  <p className="apagado">{pilar.texto}</p>
                </div>
              </Revelar>
            ))}
          </ol>
        </div>
      </section>

      {/* Erg Chigaga, producto insignia. El vídeo de la pista va DETRÁS del
          texto, mudo y en bucle: cuenta la distancia y el acceso sin
          convertirse en una pieza que haya que mirar. Sin sonido, sin
          controles y sin nada que refuerce el tono de aventura. */}
      <section className="seccion seccion--video" aria-labelledby="chigaga">
        <div className="seccion__fondo">
          <VideoFondo video={VIDEOS.pistaHamada} desdeAncho={900} />
          <div className="seccion__velo" />
        </div>

        <div className="contenedor dos-columnas">
          <Revelar className="pila">
            <p className="etiqueta">{c.chigaga.etiqueta}</p>
            <h2 id="chigaga">{c.chigaga.titulo}</h2>
            {c.chigaga.texto.map((p) => (
              <p key={p} className="lead">
                {p}
              </p>
            ))}
            <ul className="lista-marcada">
              {c.chigaga.lista.map((punto) => (
                <li key={punto}>{punto}</li>
              ))}
            </ul>
            <p>
              <Boton a={CTA.chigaga.a} variante="flecha">
                {CTA.chigaga.texto}
              </Boton>
            </p>
          </Revelar>

          <Revelar retardo={80}>
            <Foto foto={c.chigaga.foto} recorte="4 / 5" sizes="(min-width: 900px) 46vw, 100vw" />
          </Revelar>
        </div>
      </section>

      {/* Cómo trabajamos con agencias -------------------------------------- */}
      <section className="seccion sup-base grano" aria-labelledby="como-trabajamos">
        <div className="contenedor">
          <Revelar as="h2" id="como-trabajamos" className="titulo-seccion titulo-seccion--ancho">
            {c.comoTrabajamos.titulo}
          </Revelar>

          <ol className="pasos">
            {c.comoTrabajamos.pasos.map((paso, i) => (
              <Revelar as="li" key={paso} retardo={i * 60} className="paso">
                <span className="paso__numero etiqueta" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p>{paso}</p>
              </Revelar>
            ))}
          </ol>

          <Revelar className="pila__accion">
            <Boton a={c.comoTrabajamos.cta.a}>{c.comoTrabajamos.cta.texto}</Boton>
          </Revelar>
        </div>
      </section>

      {/* Entrada para viajeros particulares: después del carril de agencias,
          en arena, con su propio CTA y sin competir en peso. */}
      <section className="seccion sup-arena grano" aria-labelledby="particulares">
        <Revelar className="contenedor-texto pila">
          <h2 id="particulares">{c.particulares.titulo}</h2>
          <p className="lead">{c.particulares.texto}</p>
          <p className="pila__accion">
            <Boton a={c.particulares.cta.a}>{c.particulares.cta.texto}</Boton>
          </p>
        </Revelar>
      </section>

      {/* Las dos miradas --------------------------------------------------- */}
      <section className="seccion sup-base grano">
        <div className="contenedor dos-columnas dos-columnas--invertida">
          <Revelar>
            <Foto
              foto={c.dosMiradas.foto}
              recorte="4 / 3"
              sizes="(min-width: 900px) 46vw, 100vw"
            />
          </Revelar>

          <Revelar retardo={80} className="pila">
            <h2>{c.dosMiradas.titulo}</h2>
            <dl className="miradas">
              {c.dosMiradas.lista.map((m) => (
                <div key={m.nombre} className="mirada">
                  <dt>{m.nombre}</dt>
                  <dd className="apagado">{m.texto}</dd>
                </div>
              ))}
            </dl>
            <p>
              <Link className="enlace-flecha" to={CTA.historia.a}>
                {CTA.historia.texto}
                <Flecha width={18} height={18} />
              </Link>
            </p>
          </Revelar>
        </div>
      </section>

      <BloqueCTA
        titulo={c.cierre.remateTitulo}
        texto={[c.cierre.remateTexto]}
        cta={c.cierre.cta}
        enlaceSecundario={c.cierre.enlaceSecundario}
        foto={c.cierre.foto}
      />
    </>
  )
}
