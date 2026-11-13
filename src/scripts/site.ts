// Verhalten der Website (Entwurf F): Einblenden, Statement-Einfärben,
// Seitenpanel, Methoden-Tabs, magnetische Knöpfe, Karten nach Klick,
// Navigation. Jeder Teil prüft selbst, ob es seine Elemente auf der Seite gibt.
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = matchMedia('(hover: hover) and (pointer: fine)').matches;

/* ---------- Einblenden beim Scrollen ---------- */
const revealEls = document.querySelectorAll<HTMLElement>('[data-reveal], [data-reveal-group], .mark-intro--view');
if (reduce || !('IntersectionObserver' in window)) {
  revealEls.forEach((el) => el.classList.add('is-visible'));
} else {
  document.querySelectorAll('section').forEach((s) =>
    s.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el, i) => el.style.setProperty('--rd', `${(i % 4) * 60}ms`)),
  );
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        e.target.classList.add('is-visible');
        io.unobserve(e.target);
      }
    },
    { rootMargin: '0px 0px -12% 0px' },
  );
  revealEls.forEach((el) => io.observe(el));
}

/* ---------- Statement: Wörter färben sich mit dem Scrollen ein ---------- */
const scrub = document.querySelector<HTMLElement>('[data-scrub]');
if (scrub && !reduce) {
  const words = [...scrub.querySelectorAll<HTMLElement>('.scrub')];
  scrub.classList.add('is-scrubbing');
  const update = () => {
    const r = scrub.getBoundingClientRect();
    const p = Math.min(1, Math.max(0, (innerHeight * 0.9 - r.top) / (innerHeight * 0.55)));
    const lit = p * words.length;
    words.forEach((w, i) => w.style.setProperty('--lit', String(Math.min(1, Math.max(0, lit - i)))));
    // Sobald der Satz eingefärbt ist, geht im „o“ das Licht auf
    scrub.classList.toggle('is-done', p >= 1);
  };
  addEventListener('scroll', update, { passive: true });
  update();
} else scrub?.classList.add('is-done');

/* ---------- „Mehr erfahren“ öffnet ein Seitenpanel ----------
   Ohne JS klappen die Details einfach auf. */
const drawer = document.querySelector<HTMLDialogElement>('[data-drawer]');
if (drawer && 'showModal' in drawer) {
  const body = drawer.querySelector<HTMLElement>('[data-drawer-body]')!;
  let opener: HTMLElement | null = null;
  const close = () => {
    drawer.classList.add('is-closing');
    setTimeout(() => {
      drawer.classList.remove('is-closing');
      drawer.close();
      opener?.focus();
    }, 200);
  };
  document.querySelectorAll<HTMLDetailsElement>('[data-more]').forEach((d) => {
    const summary = d.querySelector('summary')!;
    summary.addEventListener('click', (e) => {
      e.preventDefault();
      drawer.querySelector('[data-drawer-title]')!.textContent = d.dataset.title ?? '';
      body.replaceChildren(...[...d.querySelector('.more__detail')!.children].map((n) => n.cloneNode(true)));
      opener = summary as HTMLElement;
      drawer.showModal();
      body.scrollTop = 0;
    });
  });
  drawer.querySelector('[data-drawer-close]')!.addEventListener('click', close);
  drawer.addEventListener('cancel', (e) => {
    e.preventDefault();
    close();
  });
  drawer.addEventListener('click', (e) => {
    if (e.target === drawer) close();
  });
}

/* ---------- Methoden: Tabs mit gleitender Pille ---------- */
document.querySelectorAll<HTMLElement>('[data-tabs]').forEach((root) => {
  const list = root.querySelector<HTMLElement>('[role="tablist"]')!;
  const pill = list.querySelector<HTMLElement>('.tabs__pill')!;
  const tabs = [...list.querySelectorAll<HTMLButtonElement>('[role="tab"]')];
  const movePill = (tab: HTMLElement) => {
    pill.style.width = `${tab.offsetWidth}px`;
    pill.style.height = `${tab.offsetHeight}px`;
    pill.style.transform = `translateY(${tab.offsetTop}px)`;
  };
  const select = (tab: HTMLButtonElement, focus = false) => {
    tabs.forEach((t) => {
      const on = t === tab;
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
      const panel = document.getElementById(t.getAttribute('aria-controls')!)!;
      panel.hidden = !on;
      panel.classList.toggle('is-in', on);
    });
    movePill(tab);
    if (focus) tab.focus();
  };
  list.classList.add('has-pill');
  movePill(tabs[0]);
  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => select(tab));
    tab.addEventListener('keydown', (e) => {
      const step = e.key === 'ArrowDown' || e.key === 'ArrowRight' ? 1 : e.key === 'ArrowUp' || e.key === 'ArrowLeft' ? -1 : 0;
      if (e.key === 'Home') select(tabs[0], true);
      else if (e.key === 'End') select(tabs.at(-1)!, true);
      else if (step) select(tabs[(i + step + tabs.length) % tabs.length], true);
      else return;
      e.preventDefault();
    });
  });
  addEventListener('resize', () => movePill(tabs.find((t) => t.getAttribute('aria-selected') === 'true')!));
});

/* ---------- Magnetische Knöpfe (wie IEV, mit Feder) ---------- */
if (finePointer && !reduce) {
  document.querySelectorAll<HTMLElement>('[data-magnet]').forEach((el) => {
    let tx = 0, ty = 0, x = 0, y = 0, vx = 0, vy = 0, raf = 0;
    const MAX = 6;
    const tick = () => {
      vx = (vx + (tx - x) * 0.12) * 0.72;
      vy = (vy + (ty - y) * 0.12) * 0.72;
      x += vx;
      y += vy;
      el.style.transform = `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0)`;
      raf = Math.abs(tx - x) + Math.abs(ty - y) + Math.abs(vx) + Math.abs(vy) > 0.05 ? requestAnimationFrame(tick) : 0;
    };
    const run = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      tx = Math.max(-MAX, Math.min(MAX, (e.clientX - r.left - r.width / 2) * 0.18));
      ty = Math.max(-MAX, Math.min(MAX, (e.clientY - r.top - r.height / 2) * 0.3));
      run();
    });
    el.addEventListener('pointerleave', () => {
      tx = 0;
      ty = 0;
      run();
    });
  });
}

/* ---------- Karten erst nach Klick ---------- */
document.querySelectorAll<HTMLElement>('[data-map]').forEach((map) =>
  map.querySelector('[data-map-load]')?.addEventListener('click', () => {
    const iframe = document.createElement('iframe');
    iframe.src = map.dataset.map!;
    iframe.title = map.dataset.title!;
    iframe.loading = 'lazy';
    iframe.referrerPolicy = 'no-referrer-when-downgrade';
    map.replaceChildren(iframe);
  }),
);

/* ---------- Navigation: aktiver Abschnitt, Menü auf dem Telefon ---------- */
const navEl = document.querySelector<HTMLElement>('.nav')!;
const links = [...document.querySelectorAll<HTMLAnchorElement>('[data-spy]')];
const secs = links.map((a) => document.querySelector<HTMLElement>(a.hash)!).filter(Boolean);
const spy = () => {
  navEl.classList.toggle('is-stuck', scrollY > 8);
  let cur = secs[0]?.id ?? '';
  for (const s of secs) if (s.getBoundingClientRect().top < innerHeight * 0.4) cur = s.id;
  links.forEach((a) => a.classList.toggle('is-active', a.hash === `#${cur}`));
};
addEventListener('scroll', spy, { passive: true });
spy();
const menu = document.querySelector<HTMLButtonElement>('[data-menu]')!;
menu.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(open));
  navEl.classList.toggle('is-open', open);
});
navEl.querySelectorAll('.nav__links a').forEach((a) =>
  a.addEventListener('click', () => {
    menu.setAttribute('aria-expanded', 'false');
    navEl.classList.remove('is-open');
  }),
);

export {};
