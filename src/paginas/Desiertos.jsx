import Hero from '../componentes/Hero'
import Foto from '../componentes/Foto'
import Revelar from '../componentes/Revelar'
import BloqueCTA from '../componentes/BloqueCTA'
import { useContenido } from '../i18n/contexto'
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
  const { DESIERTOS, UI, TITULOS } = useContenido()
  useTitulo(TITULOS.desiertos.title, TITULOS.desiertos.description)

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

      <section className="seccion sup-base grano">
        <Revelar className="contenedor-texto pila">
          {c.intro.map((p, i) => (
            <p key={p} className={i === 0 ? 'lead' : undefined}>
              {p}
            </p>
          ))}
        </Revelar>
      </section>

      <div className="seccion sup-base grano">
        <div className="contenedor pila-ancha">
          <Bloque datos={c.merzouga} />
          <hr className="filete" />
          <Bloque datos={c.chigaga} invertido />
        </div>
      </div>

      {/* Lo que a nosotros nos importa -------------------------------------- */}
      <section className="seccion sup-base grano">
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
              pie={UI.desiertos.campamentoAbdoulPie}
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
        titulo={UI.desiertos.cierreTitulo}
        texto={[UI.desiertos.cierreTexto]}
        cta={c.veredicto.cta}
        foto={c.chigaga.foto}
      />
    </>
  )
}
