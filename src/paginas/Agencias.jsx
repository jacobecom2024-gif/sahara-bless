import { Link } from 'react-router-dom'
import Hero from '../componentes/Hero'
import Foto from '../componentes/Foto'
import Boton from '../componentes/Boton'
import Revelar from '../componentes/Revelar'
import BloqueCTA from '../componentes/BloqueCTA'
import Lineas from '../componentes/Lineas'
import { Flecha } from '../componentes/Iconos'
import { ICONOS_AGENCIAS } from '../componentes/iconosAgencias'
import { AGENCIAS, CTA } from '../datos/contenido'
import useTitulo from '../useTitulo'

/**
 * La página más importante del sitio.
 *
 * Todo el carril B2B vive sobre superficie "noche": es el marcador visual que
 * le dice a una agencia en qué carril está antes de leer una palabra. Cero
 * mensajes B2C aquí. El único enlace que sale del carril es hacia Nuestra
 * historia, y es deliberado: la historia es prueba de trayectoria.
 */
export default function Agencias() {
  useTitulo(
    'Partner local en Marruecos para agencias · Sahara Bless Travel',
    'Diseñamos y operamos viajes en Marruecos como extensión de vuestro equipo. Erg Chigaga es nuestro territorio. Trabajando juntos desde 2009.',
  )

  const c = AGENCIAS

  return (
    <div className="pagina-agencias">
      <Hero
        foto={c.hero.foto}
        etiqueta={c.hero.etiqueta}
        titulo={c.hero.titulo}
        subtitulo={c.hero.subtitulo}
        alto="medio"
      >
        <Boton a={CTA.agencia.a} oscuro>
          {CTA.agencia.texto}
        </Boton>
      </Hero>

      <section className="seccion sup-noche oscuro grano">
        <Revelar className="contenedor-texto pila">
          {c.hero.texto.map((p) => (
            <p key={p} className="lead">
              {p}
            </p>
          ))}
        </Revelar>
      </section>

      {/* Cómo trabajamos ---------------------------------------------------- */}
      <section className="seccion sup-noche oscuro grano">
        <div className="contenedor dos-columnas">
          <Revelar className="pila">
            <h2>
              <Lineas texto={c.comoTrabajamos.titulo} />
            </h2>
            {c.comoTrabajamos.texto.map((p) => (
              <p key={p} className="apagado">
                {p}
              </p>
            ))}
            <p className="etiqueta">Creamos y coordinamos</p>
            <p className="destacado destacado--oscuro">{c.comoTrabajamos.creamos}</p>
            <p className="apagado">{c.comoTrabajamos.remate}</p>
          </Revelar>

          <Revelar retardo={80}>
            <Foto foto={c.comoTrabajamos.foto} recorte="4 / 5" sizes="(min-width: 900px) 46vw, 100vw" />
          </Revelar>
        </div>
      </section>

      {/* Garantías: bloques escaneables, nunca párrafos largos --------------- */}
      <section className="seccion sup-tinta oscuro grano">
        <div className="contenedor">
          <Revelar as="h2" className="titulo-seccion">
            {c.garantias.titulo}
          </Revelar>

          <ul className="garantias">
            {c.garantias.lista.map((g, i) => {
              const Icono = ICONOS_AGENCIAS[g.icono]
              return (
                <Revelar as="li" key={g.titulo} retardo={(i % 3) * 60} className="garantia">
                  <span className="garantia__icono">
                    <Icono width={26} height={26} />
                  </span>
                  <h3>{g.titulo}</h3>
                  <p className="apagado">{g.texto}</p>
                </Revelar>
              )
            })}
          </ul>
        </div>
      </section>

      {/* Erg Chigaga: el diferenciador -------------------------------------- */}
      <section className="seccion sup-noche oscuro grano">
        <div className="contenedor pila-ancha">
          <Revelar className="pila">
            <p className="etiqueta">{c.chigaga.etiqueta}</p>
            <h2>{c.chigaga.titulo}</h2>
            {c.chigaga.texto.map((p) => (
              <p key={p} className="apagado">
                {p}
              </p>
            ))}
          </Revelar>

          <Revelar>
            <Foto
              foto={c.chigaga.foto}
              recorte="21 / 9"
              sizes="(min-width: 1240px) 1120px, 100vw"
              pie="Erg Chigaga, al anochecer."
            />
          </Revelar>
        </div>
      </section>

      {/* Perfiles de cliente ------------------------------------------------ */}
      <section className="seccion sup-noche oscuro grano">
        <div className="contenedor">
          <Revelar className="pila">
            <h2 className="titulo-seccion">{c.perfiles.titulo}</h2>
            <p className="apagado">{c.perfiles.entradilla}</p>
          </Revelar>

          <ul className="perfiles">
            {c.perfiles.lista.map((p, i) => (
              <Revelar as="li" key={p.titulo} retardo={(i % 3) * 50} className="perfil">
                <h3>{p.titulo}</h3>
                <p className="apagado">{p.texto}</p>
              </Revelar>
            ))}
          </ul>
        </div>
      </section>

      {/* Desde 2009 --------------------------------------------------------- */}
      <section className="seccion sup-tinta oscuro grano">
        <div className="contenedor dos-columnas dos-columnas--invertida">
          <Revelar>
            <Foto
              foto={c.desde2009.foto}
              recorte="4 / 3"
              sizes="(min-width: 900px) 46vw, 100vw"
              pie={c.desde2009.pie}
            />
          </Revelar>

          <Revelar retardo={80} className="pila">
            <h2>{c.desde2009.titulo}</h2>
            {c.desde2009.texto.map((p) => (
              <p key={p} className="apagado">
                {p}
              </p>
            ))}
            <p>
              <Link className="enlace-flecha enlace-flecha--oscuro" to={CTA.historia.a}>
                {CTA.historia.texto}
                <Flecha width={18} height={18} />
              </Link>
            </p>
          </Revelar>
        </div>
      </section>

      {/* Reputación --------------------------------------------------------- */}
      <section className="seccion sup-noche oscuro grano">
        <Revelar className="contenedor-texto pila">
          <h2>{c.reputacion.titulo}</h2>
          {c.reputacion.texto.map((p) => (
            <p key={p} className="apagado">
              {p}
            </p>
          ))}
          <p className="destacado destacado--oscuro">{c.reputacion.remate}</p>
        </Revelar>
      </section>

      <BloqueCTA
        titulo={c.cierre.titulo}
        texto={c.cierre.texto}
        cta={CTA.agencia}
        superficie="tinta"
        foto={c.chigaga.foto}
      />
    </div>
  )
}
