import Hero from '../componentes/Hero'
import Foto from '../componentes/Foto'
import Revelar from '../componentes/Revelar'
import BloqueCTA from '../componentes/BloqueCTA'
import { DESIERTOS } from '../datos/contenido'
import useTitulo from '../useTitulo'

/**
 * ¿Erg Chigaga o Merzouga?
 *
 * Página de ayuda, no comercial. El cliente pide expresamente NO poner tabla
 * comparativa de datos técnicos ("demasiado fría"): dos bloques grandes, uno
 * sobre otro, y después la historia de Abdoul.
 *
 * El valor de conversión está en el veredicto: recomendar Merzouga cuando
 * procede es lo que hace creíble todo lo demás.
 */
export default function Desiertos() {
  useTitulo(
    '¿Erg Chigaga o Merzouga? · Sahara Bless Travel',
    'Dos desiertos, dos maneras de vivir el Sahara. Te ayudamos a elegir el que encaja con tu viaje, sin intentar venderte siempre el mismo.',
  )

  const c = DESIERTOS

  const Bloque = ({ datos, invertido }) => (
    <section className={`desierto ${invertido ? 'desierto--invertido' : ''}`}>
      <Revelar className="desierto__texto pila">
        <p className="etiqueta">{datos.etiqueta}</p>
        <h2>{datos.titulo}</h2>
        {datos.texto.map((p) => (
          <p key={p} className="apagado">
            {p}
          </p>
        ))}
        <p className="desierto__encaje">{datos.encaje}</p>
        <ul className="lista-marcada">
          {datos.lista.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Revelar>

      <Revelar retardo={80} className="desierto__foto">
        <Foto foto={datos.foto} recorte="4 / 5" sizes="(min-width: 900px) 46vw, 100vw" />
      </Revelar>
    </section>
  )

  return (
    <>
      <Hero
        foto={c.hero.foto}
        etiqueta={c.hero.etiqueta}
        titulo={c.hero.titulo}
        subtitulo={c.hero.subtitulo}
        alto="medio"
      />

      <section className="seccion sup-arena grano">
        <Revelar className="contenedor-texto pila">
          {c.intro.map((p, i) => (
            <p key={p} className={i === 0 ? 'lead' : undefined}>
              {p}
            </p>
          ))}
        </Revelar>
      </section>

      <div className="seccion sup-hueso grano">
        <div className="contenedor pila-ancha">
          <Bloque datos={c.merzouga} />
          <hr className="filete" />
          <Bloque datos={c.chigaga} invertido />
        </div>
      </div>

      {/* Lo que a nosotros nos importa -------------------------------------- */}
      <section className="seccion sup-tinta oscuro grano">
        <div className="contenedor pila-ancha">
          <Revelar className="contenedor-texto pila" style={{ paddingInline: 0 }}>
            <p className="etiqueta">{c.importa.etiqueta}</p>
            <h2>{c.importa.titulo}</h2>
            {c.importa.texto.map((p) => (
              <p key={p} className="apagado">
                {p}
              </p>
            ))}
          </Revelar>

          <Revelar>
            <Foto
              foto={c.importa.foto}
              recorte="21 / 9"
              sizes="(min-width: 1240px) 1120px, 100vw"
              pie="El campamento de Abdoul, en Erg Chigaga."
            />
          </Revelar>
        </div>
      </section>

      {/* Veredicto ----------------------------------------------------------- */}
      <section className="seccion sup-arena grano">
        <Revelar className="contenedor-texto pila">
          <p className="etiqueta">{c.veredicto.pregunta}</p>
          <h2>{c.veredicto.titulo}</h2>
          {c.veredicto.texto.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </Revelar>
      </section>

      <BloqueCTA
        titulo="Contadnos cómo queréis viajar"
        texto={['Y os diremos cuál elegiríamos nosotros.']}
        cta={c.veredicto.cta}
        superficie="tinta"
        foto={c.chigaga.foto}
      />
    </>
  )
}
