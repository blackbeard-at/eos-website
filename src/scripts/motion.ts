// Animationen und Interaktionen, nachgebaut nach dem Uncode-Theme der
// Originalseite. Alles greift nur mit JS und ohne „Bewegung reduzieren“.

const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = () => window.matchMedia('(hover: hover) and (pointer: fine)').matches;

// Einblenden, sobald ein Element fast sichtbar ist (data-anim, .split, .hl)
function initReveal() {
  const targets = document.querySelectorAll<HTMLElement>('[data-anim], .split, .hl');
  if (reduced() || !('IntersectionObserver' in window)) {
    targets.forEach((el) => el.classList.add('is-in'));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      }
    },
    { rootMargin: '0px 0px -60px 0px' },
  );
  targets.forEach((el) => io.observe(el));
}

// Parallax wie rellax.js (Uncode: speed 1/2, percentage 0.5): Verschiebung
// = speed · 100 · (0.5 − Fortschritt durchs Fenster), Ruhelage in der Mitte
function initParallax() {
  const items = [...document.querySelectorAll<HTMLElement>('[data-parallax]')].map((el) => ({
    el,
    speed: Number(el.dataset.parallax) || 1,
    top: 0,
    height: 0,
  }));
  if (!items.length || reduced()) return;
  const measure = () => {
    for (const item of items) {
      item.el.style.transform = '';
      const rect = item.el.getBoundingClientRect();
      item.top = rect.top + window.scrollY;
      item.height = rect.height;
    }
  };
  let ticking = false;
  const update = () => {
    ticking = false;
    const vh = window.innerHeight;
    const y0 = window.scrollY;
    for (const item of items) {
      const progress = (y0 - item.top + vh) / (item.height + vh);
      if (progress < -0.5 || progress > 1.5) continue;
      const y = Math.round(item.speed * 100 * (0.5 - progress));
      item.el.style.transform = `translate3d(0, ${y}px, 0)`;
    }
  };
  const onScroll = () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  };
  measure();
  update();
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', () => {
    measure();
    onScroll();
  });
  // Bilder/Schriften können die Höhen nachträglich ändern
  window.addEventListener('load', () => {
    measure();
    update();
  });
}

// Akkordeons: Höhe animieren, pro Gruppe nur ein Eintrag offen
function initAccordions() {
  const setOpen = (item: HTMLElement, open: boolean) => {
    const panel = item.querySelector<HTMLElement>('.acc__panel')!;
    const btn = item.querySelector<HTMLButtonElement>('.acc__btn')!;
    if (open === item.classList.contains('is-open')) return;
    btn.setAttribute('aria-expanded', String(open));
    if (reduced()) {
      item.classList.toggle('is-open', open);
      return;
    }
    if (open) {
      item.classList.add('is-open');
      panel.style.height = '0px';
      const target = panel.scrollHeight;
      requestAnimationFrame(() => (panel.style.height = `${target}px`));
    } else {
      panel.style.height = `${panel.scrollHeight}px`;
      requestAnimationFrame(() => {
        panel.style.height = '0px';
        item.classList.remove('is-open');
      });
    }
    panel.addEventListener(
      'transitionend',
      () => {
        if (item.classList.contains('is-open')) panel.style.height = 'auto';
      },
      { once: true },
    );
  };

  document.querySelectorAll<HTMLElement>('[data-accordion]').forEach((group) => {
    const items = [...group.querySelectorAll<HTMLElement>(':scope > .acc__item')];
    items.forEach((item) => {
      item.querySelector('.acc__btn')!.addEventListener('click', () => {
        const willOpen = !item.classList.contains('is-open');
        items.forEach((other) => other !== item && setOpen(other, false));
        setOpen(item, willOpen);
      });
    });
  });
}

// Mobiles Menü
function initMenu() {
  const btn = document.querySelector<HTMLButtonElement>('.header__burger');
  const nav = document.querySelector<HTMLElement>('.header__nav');
  if (!btn || !nav) return;
  const close = () => {
    btn.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
  };
  btn.addEventListener('click', () => {
    const open = btn.getAttribute('aria-expanded') !== 'true';
    btn.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('is-open', open);
  });
  nav.querySelectorAll('a').forEach((a) => a.addEventListener('click', close));
  document.addEventListener('keydown', (e) => e.key === 'Escape' && close());
}

// Onepage-Anker: weich scrollen (Abstand zur festen Navigation per scroll-padding)
function initAnchors() {
  document.querySelectorAll<HTMLAnchorElement>('a[href^="/#"], a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const hash = a.getAttribute('href')!.replace(/^\//, '');
      if (location.pathname !== '/' && a.getAttribute('href')!.startsWith('/#')) return;
      const target = hash === '#top' ? document.body : document.querySelector(hash);
      if (!target) return;
      e.preventDefault();
      if (hash === '#top') window.scrollTo({ top: 0, behavior: reduced() ? 'auto' : 'smooth' });
      else target.scrollIntoView({ behavior: reduced() ? 'auto' : 'smooth' });
      history.replaceState(null, '', hash === '#top' ? location.pathname : hash);
    });
  });
}

// Aktiver Abschnitt der Startseite: Menüpunkt heller, Punkt rechts gefüllt
function initSectionSpy() {
  if (location.pathname !== '/') return;
  const links = [...document.querySelectorAll<HTMLAnchorElement>('.header__nav a[href^="/#"], .dots a')];
  const ids = [...new Set(links.map((a) => a.getAttribute('href')!.split('#')[1]))];
  const sections = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
  if (!sections.length) return;
  let current = '';
  const update = () => {
    const line = window.innerHeight / 2;
    let active = sections[0].id;
    for (const s of sections) if (s.getBoundingClientRect().top <= line) active = s.id;
    if (active === current) return;
    current = active;
    links.forEach((a) => a.classList.toggle('is-current', a.getAttribute('href')!.endsWith(`#${active}`)));
  };
  update();
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
}

// „Nach oben“-Button erscheint nach etwas Scrollen
function initToTop() {
  const btn = document.querySelector<HTMLElement>('[data-to-top]');
  if (!btn) return;
  const update = () => btn.classList.toggle('is-visible', window.scrollY > window.innerHeight * 0.5);
  update();
  window.addEventListener('scroll', update, { passive: true });
}

// Roter Kreis am Mauszeiger, nur über Links und Buttons
function initCursor() {
  const cursor = document.querySelector<HTMLElement>('[data-cursor]');
  if (!cursor || !finePointer()) return;
  const dot = cursor.querySelector('span')!;
  cursor.classList.add('is-active');
  window.addEventListener(
    'pointermove',
    (e) => {
      dot.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      const link = (e.target as Element).closest?.('a, button');
      cursor.classList.toggle('is-link', !!link);
    },
    { passive: true },
  );
  document.addEventListener('pointerleave', () => cursor.classList.remove('is-link'));
}

export function initMotion() {
  initReveal();
  initParallax();
  initAccordions();
  initMenu();
  initAnchors();
  initSectionSpy();
  initToTop();
  initCursor();
}
