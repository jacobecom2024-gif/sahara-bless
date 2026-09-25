import Hero from '../componentes/Hero'
import Foto from '../componentes/Foto'
import Revelar from '../componentes/Revelar'
import BloqueCTA from '../componentes/BloqueCTA'
import { useContenido } from '../i18n/contexto'
import useTitulo from '../useTitulo'

/**
 * Página deliberadamente distinta al resto: aquí no se vende.
 *
 * encuentro → dos voces firmadas → hechos (2009, el bazar) → compromiso
 * compartido → un único CTA.
 *
 * Las voces son el centro de la página: Xènia y Abdoul en primera persona,
 * con registros distintos también en la tipografía (ver `.voz--vision` y
 * `.voz--terreno` en paginas.css). Fuera de esta página el sitio habla en
 * "nosotros": allí es información operativa, no identidad.
 */
export default function NuestraHistoria() {
  const { HISTORIA, UI, TITULOS } = useContenido()
  useTitulo(TITULOS.historia.title, TITULOS.historia.description)

  const c = HISTORIA

  return (
    <div className="pagina-historia">
      <Hero foto={c.hero.foto} etiqueta={c.hero.etiqueta} titulo={c.hero.titulo} alto="corto" />

      <div className="relato sup-base grano">
        {/* Encuentro --------------------------------------------------------- */}
        <section className="relato__movimiento" aria-label={UI.historia.encuentroAriaLabel}>
          <Revelar className="relato__texto">
            {c.encuentro.texto.map((p) => (
              <p key={p} className="lead">
                {p}
              </p>
            ))}
          </Revelar>
          <Revelar className="relato__foto">
            <Foto
              foto={c.encuentro.foto}
              recorte="3 / 2"
              sizes="(min-width: 1000px) 900px, 100vw"
              pie={c.encuentro.pie}
            />
          </Revelar>
        </section>

        {/* Dos voces --------------------------------------------------------- */}
        <section className="relato__movimiento voces sup-arena" aria-labelledby="voces-titulo">
          <div className="contenedor">
            <Revelar as="h2" id="voces-titulo" className="voces__titulo">
              {c.voces.titulo}
            </Revelar>
            <div className="voces__rejilla">
              {c.voces.lista.map((voz, i) => (
                <Revelar key={voz.nombre} retardo={i * 80} className={`voz voz--${voz.registro}`}>
                  <figure>
                    {voz.foto && (
                      <div className="voz__foto">
                        <Foto
                          foto={voz.foto}
                          recorte="4 / 3"
                          sizes="(min-width: 900px) 500px, 100vw"
                        />
                      </div>
                    )}
                    <blockquote className="voz__texto">
                      {voz.texto.map((p) => (
                        <p key={p}>{p}</p>
                      ))}
                    </blockquote>
                    <figcaption className="voz__firma">
                      <span className="voz__nombre">{voz.nombre}</span>
                      <span className="etiqueta">{voz.mirada}</span>
                    </figcaption>
                  </figure>
                </Revelar>
              ))}
            </div>
          </div>
        </section>

        {/* Hechos, alrededor de las voces ------------------------------------ */}
        {c.hitos.map((hito) => (
          <section key={hito.titulo} className="relato__movimiento">
            <Revelar className="relato__texto">
              <h2>{hito.titulo}</h2>
              {hito.texto.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </Revelar>
            {hito.foto && (
              <Revelar className="relato__foto">
                <Foto
                  foto={hito.foto}
                  recorte="3 / 2"
                  sizes="(min-width: 1000px) 900px, 100vw"
                  pie={hito.pie}
                />
              </Revelar>
            )}
          </section>
        ))}

      </div>

      {/* Compromiso compartido: aquí la página se para. Pantalla oscura, letra
          grande y nada más, como el cierre de Inicio. */}
      <section className="seccion cita-momento sup-inversa grano" aria-label={UI.historia.compromisoAriaLabel}>
        <Revelar className="contenedor cita-momento__interior">
          {c.compromiso.map((p, i) => (
            <p key={p} className={i === 0 ? 'cita-momento__titulo' : 'cita-momento__texto'}>
              {p}
            </p>
          ))}
        </Revelar>
      </section>

      <BloqueCTA
        titulo={c.cierre.titulo}
        cta={c.cierre.cta}
        foto={c.cierre.foto}
      />
    </div>
  )
}
