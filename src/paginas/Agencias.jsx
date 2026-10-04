import Hero from '../componentes/Hero'
import Foto from '../componentes/Foto'
import Boton from '../componentes/Boton'
import Revelar from '../componentes/Revelar'
import useTitulo from '../useTitulo'
import { AGENCIAS } from '../datos/contenido'
import { FOTOS } from '../datos/fotos'

export default function Agencias() {
  useTitulo(
    'Partner local en Marruecos para agencias · Sahara Bless Travel',
    'Un partner local de confianza para diseñar y operar viajes en Marruecos. Trabajamos como una extensión de vuestro equipo.',
    FOTOS.cuatroPorCuatro,
  )
  const c = AGENCIAS

  return (
    <>
      {/* Hero operativo: foto panorámica, texto corto y acceso visible. */}
      <Hero foto={c.hero.foto} intro={c.hero.intro} titulo={c.hero.titulo} alto="medio" />

      {/* Propuesta: texto a una columna, sin foto. */}
      <section className="sec sec--arena">
        <div className="wrap">
          <Revelar style={{ maxWidth: 760 }}>
            <p className="etiqueta">{c.propuesta.etiqueta}</p>
            <h2 className="titulo" style={{ marginTop: 18 }}>
              {c.propuesta.titulo}
            </h2>
            {c.propuesta.texto.map((p) => (
              <p key={p} className="lead apagado" style={{ marginTop: 24 }}>
                {p}
              </p>
            ))}
            <div className="acciones">
              <Boton a="/contacto?perfil=agencia">Hablemos de una colaboración</Boton>
            </div>
          </Revelar>
        </div>
      </section>

      {/* Capacidades: secuencia tipográfica numerada, no tarjetas. */}
      <section className="sec">
        <div className="wrap">
          <div className="pareja pareja--foto-grande">
            <Revelar>
              <p className="etiqueta">{c.capacidades.etiqueta}</p>
              <ol className="proceso" style={{ marginTop: 32 }}>
                {c.capacidades.items.map((i, n) => (
                  <li key={i.titulo}>
                    <span className="proceso__num">{String(n + 1).padStart(2, '0')}</span>
                    <span>
                      <strong style={{ display: 'block' }}>{i.titulo}</strong>
                      <span className="apagado">{i.texto}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </Revelar>
            <Revelar>
              <Foto foto={FOTOS.carreteraHamada} recorte="4 / 5" sizes="(min-width: 1000px) 560px, 100vw" />
            </Revelar>
          </div>
        </div>
      </section>

      {/* Pausa: foto amplia del campamento como pausa visual. */}
      <section className="sec" style={{ paddingBlock: 0 }}>
        <div className="wrap" style={{ paddingInline: 0 }}>
          <figure className="pausa" style={{ margin: 0 }}>
            <img
              src="/fotos/campamento-jaimas-1600.webp"
              srcSet="/fotos/campamento-jaimas-800.webp 800w, /fotos/campamento-jaimas-1600.webp 1600w"
              sizes="100vw"
              alt={c.pausa.foto?.alt ?? FOTOS.campamentoJaimas.alt}
              width={FOTOS.campamentoJaimas.ancho}
              height={FOTOS.campamentoJaimas.alto}
              loading="lazy"
              decoding="async"
              style={{ objectFit: 'cover' }}
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
            />
          </figure>
        </div>
      </section>

      {/* Pruebas operativas: tres hechos con contexto, sin cifras sueltas. */}
      <section className="sec sec--oliva" aria-labelledby="pruebas">
        <div className="wrap">
          <p className="etiqueta">{c.pruebas.etiqueta}</p>
          <h2 id="pruebas" className="titulo--sub" style={{ marginTop: 16, maxWidth: '26ch' }}>
            Lo que hay detrás de cada viaje.
          </h2>
          <Revelar className="cuatro" style={{ marginTop: 56 }}>
            {c.pruebas.items.map((i) => (
              <div key={i.titulo} className="valor" style={{ borderColor: 'rgba(246,241,231,0.22)' }}>
                <h3 className="titulo--sub" style={{ fontSize: 'clamp(26px, 2.6vw, 34px)' }}>
                  {i.titulo}
                </h3>
                <p className="apagado" style={{ marginTop: 14 }}>
                  {i.texto}
                </p>
              </div>
            ))}
          </Revelar>
        </div>
      </section>

      {/* Erg Chigaga: bloque de texto con tipografía, sin tarjeta. */}
      <section className="sec sec--arena">
        <div className="wrap">
          <Revelar className="pareja pareja--invertida">
            <div style={{ maxWidth: 560 }}>
              <p className="etiqueta">{c.chigaga.etiqueta}</p>
              {c.chigaga.texto.map((p) => (
                <p key={p} className="lead" style={{ marginTop: 22 }}>
                  {p}
                </p>
              ))}
              <div className="acciones">
                <Boton a={c.chigaga.enlace.a} variante="enlace">
                  {c.chigaga.enlace.texto}
                </Boton>
              </div>
            </div>
            <Foto foto={FOTOS.dunasChigaga} recorte="4 / 5" sizes="(min-width: 1000px) 560px, 100vw" posicion="50% 60%" />
          </Revelar>
        </div>
      </section>

      {/* Proceso: secuencia numerada. */}
      <section className="sec">
        <div className="wrap" style={{ maxWidth: 880 }}>
          <Revelar>
            <p className="etiqueta">{c.proceso.etiqueta}</p>
            <h2 className="titulo--sub" style={{ marginTop: 16 }}>
              {c.proceso.titulo}
            </h2>
            <ol className="proceso" style={{ marginTop: 40 }}>
              {c.proceso.pasos.map((paso, i) => (
                <li key={paso}>
                  <span className="proceso__num">{String(i + 1).padStart(2, '0')}</span>
                  <span>{paso}</span>
                </li>
              ))}
            </ol>
          </Revelar>
        </div>
      </section>

      {/* Cierre B2B: conversación o videollamada. */}
      <section className="sec sec--oliva" aria-labelledby="hablamos">
        <div className="wrap">
          <Revelar style={{ maxWidth: 720 }}>
            <h2 id="hablamos" className="titulo">
              {c.cierre.titulo}
            </h2>
            <p className="lead apagado" style={{ marginTop: 24 }}>
              {c.cierre.texto}
            </p>
            <div className="acciones">
              <Boton a="/contacto?perfil=agencia">Hablemos de una colaboración</Boton>
              <Boton a="/contacto?perfil=agencia" variante="linea">
                Agenda una videollamada
              </Boton>
            </div>
          </Revelar>
        </div>
      </section>
    </>
  )
}
