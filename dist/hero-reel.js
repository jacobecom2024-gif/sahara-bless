document.addEventListener('DOMContentLoaded', () => {
  const hero = document.querySelector('.home-hero');
  const clips = [...document.querySelectorAll('[data-hero-clip]')];
  if (!hero || clips.length < 2 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  // Segundos antes del final del clip actual en que empieza el siguiente.
  // Debe ser algo mayor que el fundido del CSS (1.35 s) para que el clip
  // saliente nunca se quede congelado en su último fotograma.
  const OVERLAP = 1.6;
  let active = 0;
  let switching = false;

  // Precarga todos los clips desde el principio.
  clips.forEach(v => { v.muted = true; v.preload = 'auto'; v.load(); });

  const ready = v => new Promise(resolve => {
    if (v.readyState >= 3) return resolve();
    const done = () => { v.removeEventListener('canplay', done); clearTimeout(t); resolve(); };
    const t = setTimeout(done, 4000);
    v.addEventListener('canplay', done);
  });

  async function advance() {
    if (switching) return;
    switching = true;
    const prev = clips[active];
    const nextIndex = (active + 1) % clips.length;
    const next = clips[nextIndex];
    try {
      next.currentTime = 0;
      await ready(next);
      await next.play();
      next.classList.add('is-active');
      prev.classList.remove('is-active');
      active = nextIndex;
      // El clip saliente sigue reproduciéndose durante el fundido y se detiene después.
      setTimeout(() => { if (prev !== clips[active]) { prev.pause(); prev.currentTime = 0; } }, 1800);
    } catch (e) {
      // Si algo falla, se mantiene el clip actual y se reintenta en el siguiente ciclo.
    }
    switching = false;
  }

  clips.forEach((v, i) => {
    v.addEventListener('timeupdate', () => {
      if (i !== active || switching || !v.duration) return;
      if (v.duration - v.currentTime <= OVERLAP) advance();
    });
    // Seguro: si un clip llega al final sin haber relevado, pasa al siguiente.
    v.addEventListener('ended', () => { if (i === active) advance(); });
  });

  clips[0].play().then(() => hero.classList.add('has-video')).catch(() => {});
});
