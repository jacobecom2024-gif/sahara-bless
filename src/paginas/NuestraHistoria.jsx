import Hero from '../componentes/Hero'
import Foto from '../componentes/Foto'
import Revelar from '../componentes/Revelar'
import BloqueCTA from '../componentes/BloqueCTA'
import { HISTORIA } from '../datos/contenido'
import useTitulo from '../useTitulo'

/**
 * Página deliberadamente distinta al resto: aquí no se vende.
 *
 * Medida de línea estrecha (54ch), mucho aire, pocas fotos pero grandes, y un
 * único CTA después del punto final. Los siete movimientos se encadenan:
 * encuentro → vínculo → camino → trabajo → decisión → regreso al origen → presente.
 */
export default function NuestraHistoria() {
  useTitulo(
    'Nuestra historia · Sahara Bless Travel',
    'Todo empezó en el Sahara hace más de 18 años. La historia de Xènia y Abdoul, y de cómo el bazar de Ouarzazate donde se conocieron acabó siendo la agencia.',
  )

  const c = HISTORIA

  return (
    <div className="pagina-historia">
      <Hero foto={c.hero.foto} etiqueta={c.hero.etiqueta} titulo={c.hero.titulo} alto="corto" />

      <div className="relato sup-arena grano">
        {c.movimientos.map((mov, i) => (
          <section key={mov.titulo || `mov-${i}`} className="relato__movimiento">
            {mov.cita ? (
              <Revelar className="relato__cita">
                {mov.cita.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </Revelar>
            ) : (
              <Revelar className="relato__texto">
                {mov.titulo && <h2>{mov.titulo}</h2>}
                {mov.texto.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </Revelar>
            )}

            {mov.foto && (
              <Revelar className="relato__foto">
                <Foto
                  foto={mov.foto}
                  recorte="3 / 2"
                  sizes="(min-width: 1000px) 900px, 100vw"
                  pie={mov.pie}
                />
              </Revelar>
            )}
          </section>
        ))}

        <Revelar className="relato__bienvenida">
          <p>{c.bienvenida}</p>
        </Revelar>
      </div>

      <BloqueCTA
        titulo={c.cierre.titulo}
        cta={c.cierre.cta}
        superficie="tinta"
        foto={c.cierre.foto}
      />
    </div>
  )
}
