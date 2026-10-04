import Hero from '../componentes/Hero'
import Foto from '../componentes/Foto'
import Boton from '../componentes/Boton'
import Revelar from '../componentes/Revelar'
import useTitulo from '../useTitulo'
import { HISTORIA } from '../datos/contenido'
import { FOTOS } from '../datos/fotos'

export default function NuestraHistoria() {
  useTitulo(
    'Nuestra historia · Sahara Bless Travel',
    'Todo empezó en el Sahara hace más de 18 años. La historia de Xènia y Abdoul, y de cómo el bazar de Ouarzazate donde se conocieron acabó siendo la agencia.',
    FOTOS.dunasErgChebbi,
  )
  const c = HISTORIA

  return (
    <>
      <Hero foto={c.hero.foto} intro={c.hero.intro} titulo={c.hero.titulo} alto="medio" />

      {/* Primero las personas: el encuentro y la foto de los dos. */}
      <section className="sec sec--arena">
        <div className="wrap pareja pareja--foto-grande">
          <Revelar style={{ maxWidth: 560 }}>
            <p className="cita">Para él, aquel paisaje era su casa.</p>
            <p className="lead apagado" style={{ marginTop: 28 }}>
              {c.inicio.texto}
            </p>
          </Revelar>
          <Revelar>
            <Foto foto={FOTOS.xeniaAbdoul} recorte="4 / 5" pie="Xènia y Abdoul, en el sur de Marruecos." sizes="(min-width: 1000px) 560px, 100vw" posicion="62% 50%" />
          </Revelar>
        </div>
      </section>

      {/* Capítulos: texto a una columna y pausas con fotos documentadas. */}
      {c.capitulos.map((cap, i) => (
        <section key={cap.titulo} className={`sec ${i % 2 ? 'sec--arena' : ''}`} style={{ paddingBlock: 'clamp(72px, 10vw, 128px)' }}>
          <div className="wrap">
            <Revelar style={{ maxWidth: 680 }}>
              <h2 className="titulo--sub">{cap.titulo}</h2>
              {cap.texto.map((p) => (
                <p key={p} className="lead apagado" style={{ marginTop: 22 }}>
                  {p}
                </p>
              ))}
            </Revelar>
            {cap.foto && (
              <Revelar style={{ marginTop: 56 }}>
                <Foto foto={cap.foto} recorte="16 / 9" pie={cap.pie} sizes="(min-width: 1200px) 1100px, 100vw" />
              </Revelar>
            )}
          </div>
        </section>
      ))}

      {/* Línea de fechas: solo lo documentado. */}
      <section className="sec">
        <div className="wrap" style={{ maxWidth: 880 }}>
          <ol className="linea-tiempo">
            {c.linea.map((l) => (
              <li key={l.fecha}>
                <span className="linea-tiempo__fecha">{l.fecha}</span>
                <p className="lead apagado">{l.texto}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Pausa visual: foto amplia del campamento. */}
      <figure className="pausa" style={{ margin: 0 }}>
        <img
          src="/fotos/campamento-jaimas-1600.webp"
          srcSet="/fotos/campamento-jaimas-800.webp 800w, /fotos/campamento-jaimas-1600.webp 1600w"
          sizes="100vw"
          alt={FOTOS.campamentoJaimas.alt}
          width={FOTOS.campamentoJaimas.ancho}
          height={FOTOS.campamentoJaimas.alto}
          loading="lazy"
          decoding="async"
          onError={(e) => {
            e.currentTarget.style.display = 'none'
          }}
        />
        {c.pausa.pie && <figcaption className="foto__pie wrap">{c.pausa.pie}</figcaption>}
      </figure>

      <section className="sec sec--oliva">
        <div className="wrap" style={{ maxWidth: 820 }}>
          <h2 className="titulo">
            {c.cierre.titulo[0]}
            <br />
            {c.cierre.titulo[1]}
          </h2>
          <div className="acciones">
            {c.cierre.acciones.map((a) => (
              <Boton key={a.texto} a={a.a} variante={a.variante === 'enlace' ? 'enlace' : 'primario'}>
                {a.texto}
              </Boton>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
