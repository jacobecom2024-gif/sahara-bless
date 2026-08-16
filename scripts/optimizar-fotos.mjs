/**
 * Convierte las fotos originales (JPEG grandes, extraidos de los PDF del cliente)
 * a WebP en dos anchos. Se ejecuta a mano cuando cambian las fotos:
 *
 *   node scripts/optimizar-fotos.mjs
 *
 * Entrada : fotos-originales/*.jpg   (fuera de public: no se sirven nunca)
 * Salida  : public/fotos/<nombre>-1600.webp  y  <nombre>-800.webp
 */

import { readdir, mkdir, stat } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const ORIGEN = path.resolve('fotos-originales')
const DESTINO = path.resolve('public/fotos')
const ANCHOS = [1600, 800]

await mkdir(DESTINO, { recursive: true })

const archivos = (await readdir(ORIGEN)).filter((f) => f.endsWith('.jpg'))
let pesoOriginal = 0
let pesoFinal = 0
const manifiesto = []

for (const archivo of archivos) {
  const base = path.basename(archivo, '.jpg')
  const rutaOrigen = path.join(ORIGEN, archivo)
  pesoOriginal += (await stat(rutaOrigen)).size

  const meta = await sharp(rutaOrigen).metadata()
  const salidas = []

  for (const ancho of ANCHOS) {
    // no ampliamos: si el original es mas estrecho, se deja tal cual
    const anchoReal = Math.min(ancho, meta.width)
    const destino = path.join(DESTINO, `${base}-${ancho}.webp`)
    const info = await sharp(rutaOrigen)
      .resize({ width: anchoReal, withoutEnlargement: true })
      .webp({ quality: 78, effort: 5 })
      .toFile(destino)
    pesoFinal += info.size
    salidas.push(`${ancho}: ${(info.size / 1024).toFixed(0)} KB`)
  }

  manifiesto.push({
    nombre: base,
    original: `${meta.width}x${meta.height}`,
    proporcion: +(meta.width / meta.height).toFixed(3),
  })
  console.log(`${base.padEnd(32)} ${String(meta.width).padStart(4)}x${meta.height}  ${salidas.join('  ')}`)
}

console.log(`\noriginales: ${(pesoOriginal / 1024 / 1024).toFixed(1)} MB`)
console.log(`webp:       ${(pesoFinal / 1024 / 1024).toFixed(1)} MB`)
console.log(`\nproporciones (para width/height en el HTML):`)
for (const m of manifiesto) console.log(`  ${m.nombre.padEnd(32)} ${m.original}  (${m.proporcion})`)
