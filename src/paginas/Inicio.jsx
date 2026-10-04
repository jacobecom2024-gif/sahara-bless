import Hero from '../componentes/Hero'
import Foto from '../componentes/Foto'
import Boton from '../componentes/Boton'
import Revelar from '../componentes/Revelar'
import useTitulo from '../useTitulo'
import { INICIO } from '../datos/contenido'
import { RUTAS } from '../datos/rutas'
import { FOTOS } from '../datos/fotos'

/** Orden y composición de las rutas en la home: una destacada y cuatro en secuencia alterna. */
const SECUENCIA_RUTAS = [
  { slug: 'the-desert-journey', clase: 'ruta-bloque--destacada' },
  { slug: 'atlantic-to-sahara', clase: 'ruta-bloque--izquierda' },
  { slug: 'the-nomad-route', clase: 'ruta-bloque--derecha' },
  { slug: 'moroccan-soul', clase: 'ruta-bloque--izquierda' },
  { slug: 'the-imperial-journey', clase: 'ruta-bloque--apaisada' },
]

export default function Inicio() {
  useTitulo(
    'Sahara Bless Travel · Marruecos, desde dentro',
    'Diseñamos y operamos viajes por Marruecos desde 2009. Partner local para agencias y viajes a medida para viajeros.',
    FOTOS.campamentoHoraAzul,
  )
  const c = INICIO

  return (
    <>
      {/* 2 · Hero: foto propia, texto de dos niveles, sin botones encima. */}
      <Hero foto={c.hero.foto} intro={c.hero.intro} titulo={c.hero.titulo} alto="completo" />

      {/* 3 · Dos recorridos: agencias con más peso, viajeros con su propia entrada. */}
      <section className="dos-caminos" aria-label="Dos recorridos">
        <Revelar className="camino-agencias">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <p className="etiqueta">{c.recorridos.agencias.etiqueta}</p>
              <h2 className="titulo" style={{ marginTop: 18 }}>
                {c.recorridos.agencias.titulo}
              </h2>
              <p className="lead" style={{ marginTop: 22 }}>
                {c.recorridos.agencias.texto}
              </p>
              <div className="acciones">
                <Boton a={c.recorridos.agencias.principal.a}>{c.recorridos.agencias.principal.texto}</Boton>
                <Boton a={c.recorridos.agencias.secundario.a} variante="enlace">
                  {c.recorridos.agencias.secundario.texto}
                </Boton>
              </div>
            </div>
          </div>
        </Revelar>
        <Revelar className="camino-viajeros">
          <div className="wrap">
            <p className="etiqueta">{c.recorridos.viajeros.etiqueta}</p>
            <h2 className="titulo--sub" style={{ marginTop: 16 }}>
              {c.recorridos.viajeros.titulo}
            </h2>
            <p style={{ marginTop: 18, maxWidth: '36ch' }} className="apagado">
              {c.recorridos.viajeros.texto}
            </p>
            <div className="acciones">
              <Boton a={c.recorridos.viajeros.principal.a} variante="linea">
                {c.recorridos.viajeros.principal.texto}
              </Boton>
              <Boton a={c.recorridos.viajeros.secundario.a} variante="enlace">
                {c.recorridos.viajeros.secundario.texto}
              </Boton>
            </div>
          </div>
        </Revelar>
      </section>

      {/* 4 · Abdoul: texto y foto en proporción 45/55. */}
      <section className="sec">
        <div className="wrap">
          <Revelar className="abdoul">
            <div style={{ maxWidth: 480 }}>
              <p className="etiqueta">{c.abdoul.etiqueta}</p>
              <h2 className="titulo" style={{ marginTop: 18 }}>
                {c.abdoul.titulo}
              </h2>
              <p className="lead" style={{ marginTop: 24 }}>
                {c.abdoul.texto}
              </p>
              <div className="acciones">
                <Boton a={c.abdoul.enlace.a} variante="enlace">
                  {c.abdoul.enlace.texto}
                </Boton>
              </div>
            </div>
            <Foto foto={c.abdoul.foto} pie={c.abdoul.pie} sizes="(min-width: 1000px) 700px, 100vw" />
          </Revelar>
        </div>
      </section>

      {/* 5 · Erg Chigaga: panorámica a sangre, con una frase breve. */}
      <section className="panoramica" aria-label="Erg Chigaga">
        <img
          className="panoramica__img"
          src="/fotos/campamento-jaimas-1600.webp"
          srcSet="/fotos/campamento-jaimas-800.webp 800w, /fotos/campamento-jaimas-1600.webp 1600w"
          sizes="100vw"
          alt={FOTOS.campamentoJaimas.alt}
          loading="lazy"
          decoding="async"
          onError={(e) => {
            e.currentTarget.style.display = 'none'
          }}
        />
        <div className="panoramica__pie">
          <p className="etiqueta" style={{ color: '#e7c48a' }}>
            {c.chigaga.etiqueta}
          </p>
          <h2 className="titulo--sub" style={{ marginTop: 14 }}>
            {c.chigaga.titulo}
          </h2>
          <p style={{ marginTop: 14 }}>{c.chigaga.texto}</p>
          <div className="acciones" style={{ marginTop: 20 }}>
            <Boton a={c.chigaga.enlace.a} variante="enlace">
              {c.chigaga.enlace.texto}
            </Boton>
          </div>
        </div>
      </section>

      {/* 6 · Rutas: una destacada y cuatro en secuencia alterna. */}
      <section className="sec">
        <div className="wrap">
          <Revelar style={{ maxWidth: 680 }}>
            <p className="etiqueta">{c.rutas.etiqueta}</p>
            <h2 className="titulo" style={{ marginTop: 18 }}>
              {c.rutas.titulo}
            </h2>
            <p className="lead apagado" style={{ marginTop: 22 }}>
              {c.rutas.texto}
            </p>
          </Revelar>

          <div style={{ marginTop: 'clamp(64px, 9vw, 120px)' }}>
            {SECUENCIA_RUTAS.map(({ slug, clase }) => {
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
                    <h3 className="titulo--sub">{ruta.nombre}</h3>
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

      {/* 7 · Operación para agencias: foto horizontal y proceso tipográfico. */}
      <section className="sec sec--arena">
        <div className="wrap">
          <Revelar className="operacion">
            <div className="operacion__foto">
              <Foto foto={c.operacion.foto} recorte="3 / 2" sizes="(min-width: 1000px) 720px, 100vw" />
            </div>
            <div>
              <p className="etiqueta">{c.operacion.etiqueta}</p>
              <h2 className="titulo--sub" style={{ marginTop: 16 }}>
                {c.operacion.titulo}
              </h2>
              <p style={{ marginTop: 20 }} className="apagado">
                {c.operacion.texto}
              </p>
              <ol className="proceso">
                {c.operacion.pasos.map((paso, i) => (
                  <li key={paso}>
                    <span className="proceso__num">{String(i + 1).padStart(2, '0')}</span>
                    <span>{paso}</span>
                  </li>
                ))}
              </ol>
              <div className="acciones">
                <Boton a={c.operacion.enlace.a} variante="enlace">
                  {c.operacion.enlace.texto}
                </Boton>
              </div>
            </div>
          </Revelar>
        </div>
      </section>

      {/* 8 · Cierre: foto distinta a la del hero y dos caminos. */}
      <section className="cierre" aria-labelledby="cierre-titulo">
        <Foto foto={c.cierre.foto} className="cierre__foto" recorte="4 / 3" sizes="(min-width: 1000px) 42vw, 100vw" />
        <div className="cierre__caminos">
          <h2 id="cierre-titulo" className="titulo--sub">
            {c.cierre.titulo}
          </h2>
          {c.cierre.caminos.map((camino) => (
            <div key={camino.etiqueta} className="cierre__camino">
              <p className="etiqueta" style={{ color: '#e7c48a' }}>
                {camino.etiqueta}
              </p>
              <h3 style={{ marginTop: 10, fontSize: 'clamp(26px, 2.6vw, 36px)' }}>{camino.titulo}</h3>
              <div className="acciones" style={{ marginTop: 18 }}>
                <Boton a={camino.accion.a} variante="enlace">
                  {camino.accion.texto}
                </Boton>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
