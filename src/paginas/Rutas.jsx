import Hero from '../componentes/Hero'
import Boton from '../componentes/Boton'
import Revelar from '../componentes/Revelar'
import useTitulo from '../useTitulo'
import { RUTAS_INDICE } from '../datos/contenido'
import { RUTAS } from '../datos/rutas'
import { FOTOS } from '../datos/fotos'

/** Composiciones distintas por ruta: una grande y cuatro en secuencia alterna con proporciones diferentes. */
const SECUENCIA = [
  { slug: 'the-desert-journey', clase: 'ruta-bloque--destacada' },
  { slug: 'atlantic-to-sahara', clase: 'ruta-bloque--izquierda' },
  { slug: 'the-nomad-route', clase: 'ruta-bloque--derecha' },
  { slug: 'moroccan-soul', clase: 'ruta-bloque--izquierda' },
  { slug: 'the-imperial-journey', clase: 'ruta-bloque--apaisada' },
]

export default function Rutas() {
  useTitulo(
    'Rutas por Marruecos · Sahara Bless Travel',
    'Cinco rutas por Marruecos como punto de partida: desierto, Atlántico, oasis, ciudades imperiales y montañas del Atlas. Todas adaptables.',
    FOTOS.dadesCurvas,
  )
  const c = RUTAS_INDICE

  return (
    <>
      <Hero foto={c.hero.foto} intro={c.hero.intro} titulo={c.hero.titulo} alto="medio" />

      <section className="sec sec--arena">
        <div className="wrap">
          <Revelar style={{ maxWidth: 680 }}>
            <p className="lead">{c.introduccion}</p>
          </Revelar>

          <div style={{ marginTop: 'clamp(64px, 9vw, 120px)' }}>
            {SECUENCIA.map(({ slug, clase }) => {
              const ruta = RUTAS.find((r) => r.slug === slug)
              return (
                <Revelar key={slug} as="article" className={`ruta-bloque ${clase}`}>
                  <figure className="ruta-bloque__foto" style={{ margin: 0 }}>
                    <img
                      src={`/fotos/${ruta.foto.id}-1600.webp`}
                      srcSet={`/fotos/${ruta.foto.id}-800.webp 800w, /fotos/${ruta.foto.id}-1600.webp 1600w`}
                      sizes="(min-width: 1000px) 60vw, 100vw"
                      width={ruta.foto.ancho}
                      height={ruta.foto.alto}
                      alt={ruta.foto.alt}
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none'
                      }}
                    />
                  </figure>
                  <div className="ruta-bloque__texto">
                    <p className="etiqueta">{ruta.dias}</p>
                    <h2 className="titulo--sub" style={{ marginTop: 14 }}>
                      {ruta.nombre}
                    </h2>
                    <p className="ruta-bloque__meta">{ruta.lugares}</p>
                    <p style={{ marginTop: 18 }}>{ruta.tarjeta}</p>
                    <Boton a={`/rutas/${ruta.slug}`} variante="enlace">
                      Ver la ruta
                    </Boton>
                  </div>
                </Revelar>
              )
            })}
          </div>
        </div>
      </section>

      <section className="sec sec--oliva">
        <div className="wrap" style={{ maxWidth: 820 }}>
          <Revelar>
            <h2 className="titulo--sub">{c.tuViaje.titulo}</h2>
            {c.tuViaje.texto.map((p) => (
              <p key={p} className="lead apagado" style={{ marginTop: 22 }}>
                {p}
              </p>
            ))}
            <p className="destacado" style={{ marginTop: 40 }}>
              {c.tuViaje.pregunta}
            </p>
            <p className="apagado" style={{ marginTop: 14 }}>
              {c.tuViaje.textoPregunta}
            </p>
            <div className="acciones">
              <Boton a="/contacto?perfil=viajero">Diseñar mi viaje</Boton>
            </div>
          </Revelar>
        </div>
      </section>
    </>
  )
}
