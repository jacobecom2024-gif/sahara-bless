# 07 · Auditoría final — Sahara Bless Travel

Fase 9. Última puerta antes de dar el sitio por terminado. Auditado contra el
**build de producción** servido en `http://localhost:5175`, no contra el servidor
de desarrollo.

**Veredicto: APTO con tres huecos declarados**, ninguno resoluble sin información
del cliente. Están todos en §6.

---

## 1 · CRO — contra la estrategia

| Comprobación | Resultado |
|---|---|
| El CTA primario aparece sin hacer scroll | **Sí** en las 11 páginas con hero. En Contacto la página entera es el CTA. |
| Es el elemento accionable de mayor contraste | **Sí**. Terracota sólido sobre foto velada; el secundario es fantasma con borde. |
| Se repite en puntos lógicos sin volverse ruido | **Sí**. Máximo 3 apariciones por página: hero, mitad y cierre. En las fichas de ruta, el CTA intermedio aparece **una sola vez** a mitad de itinerario, nunca después de cada día (regla 5 del brief). |
| Cada objeción de `01-strategy.md` está respondida | **Sí, las 7.** Ver tabla abajo. |
| Nada compite con el CTA primario | **Sí**, con una excepción deliberada: el hero de Inicio lleva dos CTA de igual tamaño (*Diseñar mi viaje* / *Soy agencia*) porque el brief exige los dos caminos visibles desde el inicio. Se distinguen por peso, no por tamaño. |

**Cobertura de objeciones**

| # | Objeción | Dónde se responde |
|---|---|---|
| 1 | "Todos dicen que son locales" | Bloque Erg Chigaga en Inicio, Agencias, Viajeros y las 4 fichas con desierto |
| 2 | "Si falla, quedo mal yo" | Agencias §7 *Vuestros clientes están en buenas manos* |
| 3 | "¿Son nuevos?" | *Más de 15 años caminando por Marruecos* (Inicio) + *Una relación construida desde 2009* (Agencias) + Nuestra historia |
| 4 | "No tengo el viaje decidido" | Cierre de Inicio, Viajeros §6, Contacto (dos veces) y la entradilla del formulario |
| 5 | "¿Me venderán siempre lo mismo?" | Página Erg Chigaga o Merzouga completa |
| 6 | "¿Acabaré en un circuito?" | *Tu viaje, tu manera* en el índice + cierre de las 5 fichas + Viajeros §4 |
| 7 | "¿Es cómodo o aventura dura?" | Inicio §3, remate del manifiesto |

**Reglas de CTA del brief**: cero botones genéricos en todo el sitio. Comprobado:
no aparece *Más información*, *Saber más*, *Enviar*, *Contactar* ni *Reservar ahora*
en ninguna página. El `[ENVIAR →]` que traía el PDF de Contacto se sustituyó por
*Empezar a diseñar mi viaje* / *Solicitar una videollamada* (ver `02`, §B).

---

## 2 · Accesibilidad — WCAG 2.1 AA

| Criterio | Resultado |
|---|---|
| Contraste de texto | **Aprobado.** Cero pares por debajo de AA en 10 páginas, midiendo el color calculado de cada nodo contra su fondo real. Dos fallos encontrados y corregidos (ver `06`). |
| Navegación por teclado | **Aprobado.** El primer tabulador cae en *Saltar al contenido*; el foco recorre cabecera → contenido → pie en orden visual. |
| Foco visible | **Aprobado.** Anillo de 3px terracota (u ocre claro sobre oscuro) con 2px de separación, verificado con tabulación real: `:focus-visible` activo, `outline: 3px solid rgb(158,69,35)`. |
| Jerarquía de encabezados | **Aprobado.** Un `h1` por página, sin saltos de nivel, en las 10 páginas. |
| Texto alternativo | **Aprobado.** Las 36 fotos llevan `alt` escrito a mano describiendo lo que se ve, no lo que dice la sección. Las decorativas (fondo del bloque de cierre) llevan `alt=""`. |
| Etiquetas de formulario | **Aprobado.** Todas visibles; ninguna depende del `placeholder`. Errores con `role="alert"` bajo su campo y foco al primer inválido. |
| Regiones semánticas | **Aprobado.** `header` / `nav` / `main` / `footer` reales, con `aria-label` distinto en cada `nav`. |
| `prefers-reduced-motion` | **Aprobado.** Anula el zoom del hero, las entradas al viewport y todas las transiciones. |
| Dianas táctiles ≥44px | **Aprobado** tras corregir marca y botones de flecha. |
| Panel móvil | **Aprobado.** Viewport completo, foco atrapado, `Esc` cierra y devuelve el foco, scroll de fondo bloqueado. |

**Pendiente de verificación humana**: el sitio no se ha podido probar con un lector
de pantalla real (NVDA/VoiceOver) ni con zoom del navegador al 200%.

---

## 3 · Rendimiento

| Comprobación | Resultado |
|---|---|
| Imágenes dimensionadas | **Aprobado.** Las 36 fotos se sirven en WebP a dos anchos (800 / 1600) generados desde los originales; los JPEG originales viven fuera de `public/` y no se publican. 17,5 MB → 11,9 MB, y ninguna página carga más de 8. |
| Sin salto de maquetación | **Aprobado.** Cada `img` lleva `width`/`height` reales y `aspect-ratio`; el espacio queda reservado antes de cargar. |
| Carga diferida | **Aprobado.** Todo `lazy` salvo el hero de cada página, único con `fetchpriority="high"`. Se quitó el `eager` que tenía la primera tarjeta del índice: está por debajo del pliegue. |
| Recursos que bloquean el render | **Aceptable.** Solo la hoja de Google Fonts, con `preconnect` a ambos orígenes y `display=swap`. |
| Tamaño del paquete | **322 kB JS (99 kB gzip) + 22 kB CSS (5,5 kB gzip).** Es React + React Router; no hay ninguna librería de componentes, ni de iconos, ni de animación. Los iconos son SVG dibujados en el repo. |

**Mejora conocida y no aplicada**: no hay división por rutas (`React.lazy`). Con 12
páginas pequeñas el ahorro real sería modesto y el coste es un parpadeo de carga al
navegar. Se deja documentado como decisión, no como olvido.

---

## 4 · SEO

| Comprobación | Resultado |
|---|---|
| `<title>` y descripción | **Aprobado.** Específicos por página y escritos a mano, no plantilla. La marca aparece una sola vez por título. |
| Un `h1`, orden lógico | **Aprobado.** |
| Open Graph | **Presente** (`og:type`, `og:locale`, `og:site_name`, `og:title`, `og:description`, `og:image` + `twitter:card`). |
| HTML semántico | **Aprobado.** |
| `robots.txt` | **Añadido**, con el dominio marcado como pendiente. |

**Limitación estructural — importante.** Es una SPA: el HTML inicial es el mismo para
las 12 rutas y el contenido lo pinta JavaScript. Consecuencias reales:

- Google renderiza JS y **sí** indexará las páginas, pero con retraso frente a HTML servido.
- **Las tarjetas sociales (WhatsApp, LinkedIn, Facebook) mostrarán siempre el título,
  la descripción y la imagen de la portada**, sea cual sea el enlace que se comparta,
  porque esos rastreadores no ejecutan JavaScript. Para un negocio cuyo canal principal
  es WhatsApp, esto no es menor: compartir *The Nomad Route* enseñará "Sahara Bless
  Travel · Marruecos, desde dentro".
- No hay `sitemap.xml` generado, porque sin prerenderizado no aporta.

**Solución si importa**: añadir prerenderizado al build (`vite-plugin-ssr`,
`vite-plugin-prerender` o migrar a Astro/Next). Son 12 rutas estáticas conocidas: es
un cambio acotado. Queda fuera del alcance de hoy porque el stack lo eligió el cliente.

---

## 5 · Validación técnica

| Comprobación | Resultado |
|---|---|
| `npm run lint` | **Limpio.** Cero errores, cero avisos. |
| `npm run build` | **Limpio.** 51 módulos, sin advertencias. |
| Consola en el build | **Cero errores.** |
| Red en el build | Todas las peticiones 200. Los 72 WebP referenciados existen. |
| Rutas profundas | Sirven correctamente. Se añadió `public/_redirects` para el fallback SPA; sin él, recargar `/agencias` da 404 en un hosting estático. |
| Reglas críticas tras minificar | Verificado en el CSS compilado: `.saltar:focus` y `.cabecera--solida` sobreviven. |

---

## 6 · Huecos declarados — no se ha inventado nada

Los tres bloquean la publicación y **ninguno se puede resolver sin el cliente**.

### 6.1 · No hay datos de contacto
No se facilitó teléfono, email, número de WhatsApp ni dirección. **No se ha inventado
ninguno.** Están centralizados en `src/datos/marca.js` y vacíos a propósito; la
interfaz se degrada sola: los enlaces de WhatsApp y de correo **desaparecen** en vez
de apuntar a un número falso, y Contacto explica en su lugar qué falta.

### 6.2 · El formulario no envía a ninguna parte
Valida, bifurca, gestiona errores y confirma, pero el envío está **inerte** y marcado
con `TODO` en `src/paginas/Contacto.jsx`. La propia confirmación se lo dice a quien
escriba: *"este formulario todavía no tiene destino configurado"*. Se activa
sustituyendo un bloque de cinco líneas por la llamada al servicio que se elija.

### 6.3 · Faltan fotografías que el brief pide expresamente
De las 36 curadas, hay una sola de Xènia y Abdoul. **No existen** en el material
entregado:
- una foto real de **Abdoul en el campamento** de Erg Chigaga (el brief la pide dos veces),
- fotos antiguas de los dos para el arranque de Nuestra historia,
- el **bazar de Ouarzazate** hoy, que es el cierre del círculo de esa página,
- Xènia sola en el desierto.

Ahora esos huecos se cubren con paisajes del mismo lugar, que funcionan pero **no
sustituyen** al retrato. El diferenciador del proyecto es una persona concreta; la
foto de esa persona en su campamento es, con diferencia, la imagen que más
conversiones puede mover en la página de Agencias.

Además, parte del material entregado son fotografías de archivo (dunas, riads,
Casablanca). El brief prohíbe expresamente la estética de banco de imágenes; se han
elegido las más creíbles y se han reservado las de móvil —las reales— para los
momentos humanos, pero **sustituirlas por fotografía propia sigue siendo la mejora
más rentable del proyecto.**

---

## 7 · Otros datos pendientes de confirmar

- **Atlantic to Sahara: ¿10 u 11 días?** El índice dice 10, la ficha 11. Se ha usado
  **11** (la ficha es el documento más detallado). Confirmar.
- **Aviso legal, privacidad y cookies**: no existen. Una web española que recoge datos
  por formulario los necesita (RGPD/LSSI). No se han redactado porque requieren datos
  fiscales reales de la empresa.
