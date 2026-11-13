# EOS-Website — Projektkontext

Astro-Website der EOS GmbH – Kinder- und Jugendhilfe (eos-hilfen.net,
Offenbach/Frankfurt; Tochter der IEV). Begonnen am 23.10.2026 als 1:1-Nachbau
der WordPress-Seite. Seit 13.11.2026 hat die ganze Website das Design
„Entwurf F“ (vom Kunden freigegeben); der alte Nachbau ist entfernt (steht
noch in der Git-Historie, Commit 1498010 und früher).

## Stack
- Astro 7 (statisch), Bilder über `astro:assets`, Montserrat selbst gehostet
  (`@fontsource-variable/montserrat`)
- `build.format: 'file'` + `trailingSlash: 'never'`: `/bewerbung`,
  `/impressum`, `/datenschutzerklaerung`
- Deployment wie IEV: Cloudflare Workers (`wrangler.jsonc`), Testversion
  https://eos-website.holy-silence-8003.workers.dev (manuell per
  `npx wrangler deploy`); GitHub blackbeard-at/eos-website
- Lokal mit Weiterleitungen prüfen: `npm run build`, dann Launch-Konfiguration
  `eos-wrangler` (Port 8788)

## Design „Entwurf F“ (Familienähnlichkeit)
- Nach HELIOS-Entwurf F (`../08-03-helios-website/src/pages/entwurf-f.astro`):
  Stimmung der IEV-Seite, aber jünger. Anthrazit #323335 / Creme #f6f1e8
  (geteilt mit IEV), Logo-Rot #d63c2d (Knöpfe, Statement-Fläche), rote Schrift
  #b8321f, Orange #e79245 (Lichtbogen). Pillen, große Radien, Fotos mit Bogen
  (`.arch`), Statement mit Wort-Einfärben, magnetische Knöpfe, Creme-Footer
- Aufbau: `SiteLayout.astro` (Kopf, Footer, Seitenpanel) mit
  `SiteHeader.astro` / `SiteFooter.astro`; Styles in `src/styles/base.css`
  (Reset) und `src/styles/site.css` (alles unter `.f`); Verhalten in
  `src/scripts/site.ts` (Einblenden `data-reveal`, Statement `data-scrub`,
  Seitenpanel `data-more`, Methoden-Tabs, `data-magnet`, Karten nach Klick,
  Navigation mit Abschnitts-Markierung)
- Navigation: auf der Startseite Anker (`#leistungen`), auf Unterseiten
  `/#leistungen`
- „Mehr erfahren“/„Häufige Fragen“ öffnen ein Seitenpanel (`<details
  data-more>`, ohne JS klappen sie auf)
- Logo-Bedeutung: Eos = Morgenröte/Sonnenaufgang. `EosMark.astro` zerlegt das
  Logo in e, „o“ (roter Ring + oranger Lichtbogen), s und Claim. Das „o“ dreht
  sich als Ganzes (`.o-spin`): beim Einstieg eine fast volle Runde aus der
  Tiefe, der Bogen färbt sich dabei Dunkelrot → Rot → Orange; am Hero und im
  Statement kreist es danach ruhig weiter (30 s / 60 s pro Runde); kein
  Farbverlauf hinter dem Hero-Icon (Wunsch 26.10.2026). Das „o“ ist leicht oval
  (164.7 × 155.01) – damit es beim Drehen nicht eiert, wird es in EosMark
  innen auf einen Kreis entzerrt und außen wieder gestaucht
- Statement: erster Satz aus „Wofür wir arbeiten“; das „o“ in „woher“ ist das
  Logo-o (früher „positiv“, steht im neuen Text nicht mehr)
- Im versteckten Vorschaufenster pausieren die CSS-Animationen: Seiten wirken
  dort leer — zum Prüfen `document.getAnimations()` beenden

## Inhalte
- Startseite ist ein Onepage mit Ankern `#willkommen`, `#unser-leitbild`,
  `#leistungen`, `#kinderschutz`, `#unser-team`, `#standorte` (Navigation in
  `src/data/site.ts`)
- Texte der Startseite: Textübergabe Fassung 1 (09.11.2026, freigegeben von
  P. Z. Açba) in `src/data/texte.ts`, Team in `src/data/site.ts`. Wörtlich
  übernehmen, nicht umformulieren, Widersprüche melden. Regeln: Familien
  „ihr/euch“, junge Menschen „du“, Jugendämter „Sie“; `§`/`§§` mit
  geschütztem Leerzeichen; Einsatzgebiet nach außen „Rhein-Main-Gebiet“,
  einzelne Kreise nur in der Jugendamt-FAQ, im Standort-Hinweis und bei den
  Pädagogischen Leitungen. Kinderschutz-Standardsätze je genau einmal.
  Familien können die Hilfe nicht direkt bei eos „buchen“ (Jugendamt entscheidet)
- Standort-Hinweis: Überschrift „Bald auch in MKK.“ (Anweisung 13.11.2026,
  statt „Bald auch in Gelnhausen.“), Text unverändert
- `/bewerbung`: Texte unverändert vom Original (Textübergabe nimmt sie aus)
- Rechtstexte (Impressum, Datenschutz) in `src/data/content.json`;
  `<!--EMAIL-->` darin wird zur geschützten Adresse (`LegalLayout.astro`)
- E-Mail-Adressen nie im Klartext im HTML (wie IEV): `Mail.astro` /
  `ProtectedLink.astro` / `ProtectedText.astro`, freigeschaltet beim ersten
  Nutzen durch `src/scripts/protect.ts`. Telefon und 116 111 bleiben direkt
- `public/_redirects`: alte WordPress-Adressen (`/index.php/…`,
  `/qualitaet`, `/aktuelle-angebote` usw.) per 301 auf Startseite,
  `#kinderschutz` bzw. `/bewerbung`; `/entwurf-f` → `/`
- Kein Cookie-Banner (keine Cookies); Google Maps erst nach Klick
  („Karte laden“)

## Offene Punkte
- SSL-Zertifikat der Live-Seite erneuert am 10.11.2026, gültig bis 15.05.2027
- Textübergabe 09.11.2026: /bewerbung und Sprachen im Team folgen später
- „MKK“ als Abkürzung mit dem Kunden abstimmen (Übergabe sah „Gelnhausen“ vor)
- Logo-o im Statement in „woher“ — mit dem Kunden abstimmen
- Stockfoto-Lizenzen prüfen
- Team ohne Porträts (Initialen)

## Befehle
```
npm install
npm run dev      # lokaler Dev-Server
npm run build    # Production-Build nach dist/
npx wrangler deploy
```
