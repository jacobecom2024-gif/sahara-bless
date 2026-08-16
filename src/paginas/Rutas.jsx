import Hero from '../componentes/Hero'
import Revelar from '../componentes/Revelar'
import TarjetaRuta from '../componentes/TarjetaRuta'
import BloqueCTA from '../componentes/BloqueCTA'
import { RUTAS } from '../datos/rutas'
import { RUTAS_INDICE, CTA } from '../datos/contenido'
import useTitulo from '../useTitulo'

export default function Rutas() {
  useTitulo(
    'Rutas por Marruecos · Sahara Bless Travel',
    'Cinco rutas por Marruecos como punto de partida: desierto, Atlántico, oasis, ciudades imperiales y montañas del Atlas. Todas adaptables.',
  )

  const c = RUTAS_INDICE

  return (
    <>
      <Hero
        foto={c.foto}
        etiqueta={c.etiqueta}
        titulo={c.titulo}
        subtitulo={c.entradilla[0]}
        alto="medio"
      />

      <section className="seccion sup-arena grano">
        <Revelar className="contenedor-texto pila">
          <p className="lead">{c.entradilla[1]}</p>
        </Revelar>
      </section>

      <section className="seccion sup-arena grano" style={{ paddingTop: 0 }}>
        <div className="contenedor">
          <ul className="rejilla-rutas">
            {RUTAS.map((ruta, i) => (
              <Revelar as="li" key={ruta.slug} retardo={i * 50}>
                {/* Ninguna tarjeta es prioritaria: todas quedan por debajo del
                    hero, que ya se lleva la única carga con prioridad alta. */}
                <TarjetaRuta ruta={ruta} />
              </Revelar>
            ))}
          </ul>
        </div>
      </section>

      <section className="seccion sup-hueso grano">
        <Revelar className="contenedor-texto pila">
          <h2>{c.adaptacion.titulo}</h2>
          {c.adaptacion.texto.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </Revelar>
      </section>

      <BloqueCTA
        titulo={c.ayuda.titulo}
        texto={[c.ayuda.texto]}
        cta={CTA.viajero}
        superficie="tinta"
        foto={RUTAS[0].foto}
      />
    </>
  )
}
