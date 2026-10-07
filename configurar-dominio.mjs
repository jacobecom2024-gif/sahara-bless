import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

const input = process.argv[2];
let url;
try { url = new URL(input); } catch {
  console.error('Uso: node configurar-dominio.mjs https://www.tu-dominio.com');
  process.exit(1);
}
if (url.protocol !== 'https:' || url.pathname !== '/' || url.search || url.hash || url.username || url.password) {
  console.error('Indica solo el dominio HTTPS, sin ruta, parámetros ni credenciales.');
  process.exit(1);
}
const origin = url.origin;
const dist = fileURLToPath(new URL('./dist/', import.meta.url));
let changed = 0;
for (const name of readdirSync(dist)) {
  if (!/\.html$/.test(name) && !['sitemap.xml', 'robots.txt'].includes(name)) continue;
  const path = join(dist, name);
  let text = readFileSync(path, 'utf8');
  if (name.endsWith('.html')) {
    text = text.replace(/(<meta\s+property="og:image"\s+content=")[^"]+("[^>]*>)/g, (match, before, after) => {
      const source = /content="([^"]+)"/.exec(match)[1];
      return before + new URL(new URL(source, origin).pathname, origin).href + after;
    });
  } else if (name === 'sitemap.xml') {
    text = text.replace(/(<loc>)https?:\/\/[^/<]+/g, '$1' + origin);
  } else {
    text = text.replace(/^Sitemap:.*$/m, 'Sitemap: ' + origin + '/sitemap.xml');
  }
  if (text !== readFileSync(path, 'utf8')) { writeFileSync(path, text); changed++; }
}
console.log(`Dominio actualizado a ${origin} en ${changed} archivos. Sube los cambios a tu repositorio para desplegarlos.`);
