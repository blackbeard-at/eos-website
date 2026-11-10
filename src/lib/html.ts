// Freigegebene Texte als HTML für Akkordeons (set:html): Text maskieren und in <p> setzen.
export const esc = (text: string) =>
  text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export const para = (text: string) => `<p>${esc(text)}</p>`;
