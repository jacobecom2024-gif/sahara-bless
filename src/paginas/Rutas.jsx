import Hero from '../componentes/Hero'
import Boton from '../componentes/Boton'
import Revelar from '../componentes/Revelar'
import TarjetaRuta from '../componentes/TarjetaRuta'
import useTitulo from '../useTitulo'
import { RUTAS_INDICE, CTA } from '../datos/contenido'
import { RUTAS } from '../datos/rutas'

export default function Rutas() {
  useTitulo(
    'Rutas por Marruecos · Sahara Bless Travel',
    'Cinco rutas por Marruecos como punto de partida: desierto, Atlántico, oasis, ciudades imperiales y montañas del Atlas. Todas adaptables.',
  )
  const c = RUTAS_INDICE

  return (
    <>
      <Hero foto={c.hero.foto} etiqueta={c.hero.etiqueta} titulo={c.hero.titulo} subtitulo={c.hero.subtitulo} alto="medio">
        <Boton a={CTA.viajero.a}>{CTA.viajero.texto}</Boton>
      </Hero>

      <section className="seccion sup-arena">
        <div className="contenedor">
          <Revelar className="ruta-intro">
            <p className="lead">{c.introduccion}</p>
          </Revelar>
          <Revelar as="ul" className="rejilla-rutas" style={{ marginTop: 64 }}>
            {RUTAS.map((ruta, i) => (
              <TarjetaRuta key={ruta.slug} ruta={ruta} destacada={i === 0} />
            ))}
          </Revelar>
        </div>
      </section>

      <section className="seccion sup-hueso" aria-labelledby="tu-viaje">
        <div className="contenedor contenedor--texto">
          <Revelar className="pila-amplia">
            <h2 id="tu-viaje" className="titulo-seccion">
              {c.tuViaje.titulo}
            </h2>
            {c.tuViaje.texto.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <p className="destacado">{c.tuViaje.pregunta}</p>
            <p className="apagado">{c.tuViaje.textoPregunta}</p>
            <div className="acciones">
              <Boton a={CTA.viajero.a}>{CTA.viajero.texto}</Boton>
            </div>
          </Revelar>
        </div>
      </section>
    </>
  )
}
