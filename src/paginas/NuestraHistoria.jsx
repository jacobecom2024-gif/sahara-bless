import Hero from '../componentes/Hero'
import Foto from '../componentes/Foto'
import Boton from '../componentes/Boton'
import Revelar from '../componentes/Revelar'
import useTitulo from '../useTitulo'
import { HISTORIA } from '../datos/contenido'

export default function NuestraHistoria() {
  useTitulo(
    'Nuestra historia · Sahara Bless Travel',
    'Todo empezó en el Sahara hace más de 18 años. La historia de Xènia y Abdoul, y de cómo el bazar de Ouarzazate donde se conocieron acabó siendo la agencia.',
  )
  const c = HISTORIA

  return (
    <>
      <Hero foto={c.hero.foto} etiqueta={c.hero.etiqueta} titulo={c.hero.titulo} alto="medio" />

      <div className="seccion sup-arena">
        {c.capitulos.map((cap, i) => (
          <section key={cap.titulo ?? `cita-${i}`} className="contenedor" style={{ marginTop: i === 0 ? 0 : 'clamp(64px, 9vw, 112px)' }}>
            {cap.cita ? (
              <Revelar className="relato-capitulo">
                <div className="tarjeta-cita">
                  {cap.cita.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </Revelar>
            ) : (
              <Revelar className={`relato-capitulo ${cap.foto ? 'relato-capitulo--foto' : ''}`}>
                <h2>{cap.titulo}</h2>
                {cap.texto.map((p) => (
                  <p key={p} className="lead">
                    {p}
                  </p>
                ))}
                {cap.foto && (
                  <div style={{ marginTop: 48 }}>
                    <Foto foto={cap.foto} recorte="16 / 9" pie={cap.pie} sizes="(min-width: 1200px) 1040px, 100vw" />
                  </div>
                )}
              </Revelar>
            )}
          </section>
        ))}

        <div className="contenedor centrado" style={{ marginTop: 'clamp(72px, 10vw, 120px)' }}>
          <Revelar>
            <p className="destacado" style={{ marginInline: 'auto' }}>
              {c.bienvenida}
            </p>
          </Revelar>
        </div>
      </div>

      <section className="seccion sup-tinta" aria-labelledby="cierre-historia">
        <div className="contenedor contenedor--texto centrado">
          <Revelar className="pila-amplia">
            <h2 id="cierre-historia" className="titulo-seccion" style={{ marginInline: 'auto' }}>
              {c.cierre.titulo[0]}
              <br />
              {c.cierre.titulo[1]}
            </h2>
            <div className="acciones" style={{ justifyContent: 'center' }}>
              {c.cierre.acciones.map((a) => (
                <Boton key={a.texto} a={a.a} variante={a.variante === 'texto' ? 'texto' : 'primario'}>
                  {a.texto}
                </Boton>
              ))}
            </div>
          </Revelar>
        </div>
      </section>
    </>
  )
}
