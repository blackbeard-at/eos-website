// Geschützte E-Mail-Adressen freischalten (Gegenstück zu ProtectedLink.astro
// und ProtectedText.astro): erst beim ersten echten Nutzen der Seite – Maus,
// Touch, Tastatur, Fokus – werden die mailto:-Links gesetzt und die Adressen
// als echter, kopierbarer Text eingefügt.
const events = ['pointerdown', 'pointermove', 'touchstart', 'keydown', 'wheel', 'focusin'];
const options = { capture: true, passive: true } as const;

const decode = (value: string) => [...atob(value)].reverse().join('');

let revealed = false;

function reveal() {
  if (revealed) return;
  revealed = true;
  events.forEach((type) => window.removeEventListener(type, reveal, options));

  document.querySelectorAll<HTMLAnchorElement>('a[data-pt]').forEach((link) => {
    link.href = decode(link.dataset.pt ?? '');
    link.removeAttribute('data-pt');
    link.removeAttribute('role');
    link.removeAttribute('tabindex');
  });

  document.querySelectorAll<HTMLElement>('.pt-text[data-pt-a]').forEach((text) => {
    text.textContent = `${text.dataset.ptA}@${text.dataset.ptB}`;
    text.removeAttribute('data-pt-a');
    text.removeAttribute('data-pt-b');
  });
}

events.forEach((type) => window.addEventListener(type, reveal, options));

// Erste Aktion ist direkt ein Klick (z. B. Screenreader): freischalten und öffnen
document.addEventListener(
  'click',
  (event) => {
    const link = (event.target as Element | null)?.closest?.('a[data-pt]');
    if (!(link instanceof HTMLAnchorElement)) return;
    event.preventDefault();
    reveal();
    window.location.href = link.href;
  },
  true,
);
