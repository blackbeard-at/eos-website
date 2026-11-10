// Schutz von E-Mail-Adressen vor Adress-Sammlern (Textübergabe 11.4, wie bei
// der IEV-Website): Im ausgelieferten HTML stehen weder mailto:-Links noch
// Adressen im Klartext. Link-Ziele sind verschlüsselt (ProtectedLink.astro),
// sichtbare Adressen in Teile zerlegt und per CSS zusammengesetzt
// (ProtectedText.astro). Freigeschaltet wird beim ersten echten Nutzen der
// Seite (src/scripts/protect.ts) – dann ist es ein normaler, klickbarer Link.

/** Link-Ziel verschlüsseln: Zeichen umdrehen, dann Base64 */
export function encodeHref(href: string): string {
  if (/[^\x20-\x7e]/.test(href)) {
    throw new Error(`Geschützter Link enthält Sonderzeichen, bitte URL-kodieren: ${href}`);
  }
  return Buffer.from([...href].reverse().join(''), 'ascii').toString('base64');
}

/** Sichtbare Adresse in zwei Teile zerlegen (ohne „@“) */
export function splitMail(value: string) {
  const at = value.indexOf('@');
  if (at < 1) throw new Error(`Keine E-Mail-Adresse: ${value}`);
  return { a: value.slice(0, at), b: value.slice(at + 1) };
}
