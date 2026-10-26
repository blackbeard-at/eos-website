# EOS-Website — Projektkontext

Astro-Nachbau von www.eos-hilfen.net (EOS GmbH – Kinder- und Jugendhilfe,
Offenbach/Frankfurt; Tochter der IEV). Auftrag (23.10.2026): die bestehende
WordPress-Seite (Uncode-Theme) 1:1 nachbauen, inkl. Animationen. Texte,
Fotos und Logo stammen vom Original; der Theme-Code wurde NICHT übernommen,
Layout und Animationen sind eigenständig nachprogrammiert.

## Stack
- Astro 7 (statisch), Bilder über `astro:assets`, Montserrat selbst gehostet
  (`@fontsource-variable/montserrat`)
- `build.format: 'file'` + `trailingSlash: 'never'`: `/bewerbung`,
  `/impressum`, `/datenschutzerklaerung`
- Deployment wie IEV: Cloudflare Workers (`wrangler.jsonc`)

## Aufbau
- Startseite ist ein Onepage mit Ankern `#willkommen`, `#unser-leitbild`,
  `#leistungen`, `#unser-team`, `#standorte` (Navigation in `src/data/site.ts`)
- Lange Texte (Akkordeons, Team, Impressum, Datenschutz) in
  `src/data/content.json` — per Skript aus dem Original ausgelesen
- Maße am Original bei 1440px gemessen; Breakpoints wie Uncode: 1499/959/569px
- Inhaltsbreite = 80 % des Fensters + 36px Innenrand (`.container`)
- Farben: Rot #dc3c1e, Anthrazit #323335, Text #777, Hellgrau #f7f7f7,
  Creme #f6f1e8 (Overlay Zielgruppen), Dunkel #17191b (Kartenfläche)

## Animationen (`src/scripts/motion.ts` + `global.css`)
- `data-anim="alpha|ltr|rtl|zoom-in"` + `--delay`: Einblenden (1s, ease)
- `.split`: Hero-Überschrift Wort für Wort von unten (0.8s, 50ms versetzt)
- `.hl`: rote Markierung läuft Wort für Wort mit (je 0.2s, Start 0.4s)
- `data-parallax="1|2"`: Parallaxe nach rellax.js-Formel
- Akkordeons (nur eins offen), Punkt-Navigation rechts (`OnepageDots`),
  aktiver Menüpunkt = 50 % Rot, roter Cursor-Kreis über Links,
  „Nach oben“-Button

## Bewusste Abweichungen vom Original
- Kein Cookie-Banner (keine Cookies); Google Maps erst nach Klick
  („Karte laden“) statt direkt eingebettet
- Menü läuft im Original zwischen 960–1300px über den Fensterrand; hier
  dort etwas kleiner gesetzt
- Lange E-Mail-Adressen im Team brechen mobil um (Original: Querscroll)
- Footer ohne bewegtes Rauschen, schlicht grau (#eaeaea, Kundenwunsch 23.10.2026)

## Offene Punkte
- SSL-Zertifikat von eos-hilfen.net ist abgelaufen (Stand 23.10.2026)
- Impressum: E-Mail steht im Original als „eos(at)eos-net“ (fehlt „hilfen.“?)
  — 1:1 übernommen, mit Kunde klären
- Stockfoto-Lizenzen für die neue Seite prüfen
- Team hat nur Platzhalter-Grafik statt Porträts (wie im Original)

## Befehle
```
npm install
npm run dev      # lokaler Dev-Server
npm run build    # Production-Build nach dist/
npx wrangler deploy
```
