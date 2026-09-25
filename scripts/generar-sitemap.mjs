/**
 * Genera public/sitemap.xml con las tres versiones de cada página (es/en/fr)
 * más las tres versiones de cada una de las 5 fichas de ruta.
 *
 * Fuente única: src/i18n/idiomas.js (slugs de página) y src/i18n/rutas.es.js
 * (slugs de producto, iguales en los tres idiomas). Se ejecuta a mano cuando
 * cambian las páginas o las rutas:
 *
 *   node scripts/generar-sitemap.mjs
 *
 * ⚠️ DOMINIO: el sitio todavía no tiene dominio definitivo (está en modo
 * previsualización, ver public/robots.txt, que bloquea toda indexación).
 * BASE_URL de abajo es un marcador de posición — sustitúyelo por el dominio
 * real antes de quitar el bloqueo de robots.txt, si no el sitemap apunta a
 * un dominio equivocado.
 */
import { createServer } from 'vite'
import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const BASE_URL = 'https://saharablesstravel.com' // ⚠️ marcador de posición, ver arriba
const PROY = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')

const vite = await createServer({
  root: PROY,
  server: { middlewareMode: true },
  appType: 'custom',
  logLevel: 'error',
})

const { IDIOMAS, PAGINAS } = await vite.ssrLoadModule('/src/i18n/idiomas.js')
const { RUTAS } = await vite.ssrLoadModule('/src/i18n/rutas.es.js')
await vite.close()

const claves = Object.keys(PAGINAS)

// Para hreflang por URL, agrupamos por (clave, slugProducto): cada bloque
// lleva las tres versiones, y de ahí salen tanto <loc> como los <xhtml:link>.
const bloques = []
for (const clave of claves) {
  if (clave === 'rutas') {
    for (const r of RUTAS) {
      bloques.push({
        porIdioma: Object.fromEntries(
          IDIOMAS.map((i) => [i, `/${i}/${PAGINAS.rutas[i]}/${r.slug}`]),
        ),
      })
    }
    bloques.push({ porIdioma: Object.fromEntries(IDIOMAS.map((i) => [i, `/${i}/${PAGINAS.rutas[i]}`])) })
  } else {
    bloques.push({
      porIdioma: Object.fromEntries(IDIOMAS.map((i) => [i, `/${i}/${PAGINAS[clave][i]}`])),
    })
  }
}
bloques.push({ porIdioma: Object.fromEntries(IDIOMAS.map((i) => [i, `/${i}`])) })

const IDIOMA_DEFECTO = 'es'
const xml = []
xml.push('<?xml version="1.0" encoding="UTF-8"?>')
xml.push('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">')

for (const bloque of bloques) {
  for (const idioma of IDIOMAS) {
    const loc = bloque.porIdioma[idioma]
    xml.push('  <url>')
    xml.push(`    <loc>${BASE_URL}${loc}</loc>`)
    for (const otro of IDIOMAS) {
      xml.push(`    <xhtml:link rel="alternate" hreflang="${otro}" href="${BASE_URL}${bloque.porIdioma[otro]}" />`)
    }
    xml.push(
      `    <xhtml:link rel="alternate" hreflang="x-default" href="${BASE_URL}${bloque.porIdioma[IDIOMA_DEFECTO]}" />`,
    )
    xml.push('  </url>')
  }
}
xml.push('</urlset>')
xml.push('')

const destino = path.join(PROY, 'public', 'sitemap.xml')
writeFileSync(destino, xml.join('\n'), 'utf8')
console.log(`✓ ${bloques.length * IDIOMAS.length} URL en ${destino}`)
console.log(`  Dominio usado: ${BASE_URL} (marcador de posición, ver el comentario del script)`)
