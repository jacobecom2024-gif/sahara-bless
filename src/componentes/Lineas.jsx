import { Fragment } from 'react'

/**
 * Titular partido en varias líneas.
 *
 * El espacio explícito entre líneas NO es decorativo: sin él, el nombre
 * accesible del titular se calcula concatenando los nodos de texto y un lector
 * de pantalla lee "No se trata solo de dónde vas.Sino de cómo lo vives." como
 * una sola palabra pegada. El <br> no aporta separación al accname.
 * Visualmente el espacio se colapsa al principio de línea, así que no se ve.
 */
export default function Lineas({ texto }) {
  const lineas = Array.isArray(texto) ? texto : [texto]

  return lineas.map((linea, i) => (
    <Fragment key={linea}>
      {linea}
      {i < lineas.length - 1 && (
        <>
          <br />{' '}
        </>
      )}
    </Fragment>
  ))
}
