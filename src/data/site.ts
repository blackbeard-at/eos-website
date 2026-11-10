// Zentrale Inhalte der EOS-Website. Freigegebene Texte der Startseite in
// texte.ts (Textübergabe 09.11.2026), Rechtstexte in content.json.
import content from './content.json';
import { meta } from './texte';

// Akkordeon-Eintrag. Link optional: extern (Gesetzestext, neuer Tab) oder
// intern (Anker auf der Seite).
export interface Panel {
  title: string;
  html: string;
  links?: { label: string; href: string; internal?: boolean }[];
}

export const site = {
  name: 'EOS GmbH – Kinder- und Jugendhilfe',
  description: meta.description,
  phone: '+49 (0)69-8700588 – 100',
  phoneHref: 'tel:+49698700588100',
  fax: '+49 (0)69-8700588 – 199',
  email: 'eos@eos-hilfen.net',
  managingDirector: 'Philipp Z. Açba',
  register: 'Amtsgericht Hanau: HRB 93369',
};

// Onepage-Navigation: Anker auf der Startseite
export const navigation = [
  { label: 'Willkommen', href: '/#willkommen' },
  { label: 'Unser Leitbild', href: '/#unser-leitbild' },
  { label: 'Leistungen', href: '/#leistungen' },
  { label: 'Kinderschutz', href: '/#kinderschutz' },
  { label: 'Unser Team', href: '/#unser-team' },
  { label: 'Standorte', href: '/#standorte' },
];

export const applyLink = { label: 'Bewerbung', href: '/bewerbung' };

export const locations = [
  {
    name: 'eos Hilfen Offenbach',
    city: 'Offenbach',
    street: 'Langstraße 2',
    zip: '63075 Offenbach am Main',
    mapEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2558.230945498467!2d8.783100176777703!3d50.11940027153081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd11dd86676b73%3A0x17b4f6141cfb21db!2sLangstra%C3%9Fe%202%2C%2063075%20Offenbach%20am%20Main!5e0!3m2!1sde!2sde!4v1751611813671!5m2!1sde!2sde',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=Langstra%C3%9Fe+2%2C+63075+Offenbach+am+Main',
  },
  {
    name: 'eos Hilfen Frankfurt',
    city: 'Frankfurt',
    street: 'Hanauer Landstraße 146',
    zip: '60314 Frankfurt am Main',
    mapEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d639.6528676841052!2d8.714338469675864!3d50.11227889822059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd0e8670f1417d%3A0xa5095169769e52fd!2sHanauer%20Landstra%C3%9Fe%20146%2C%2060314%20Frankfurt%20am%20Main!5e0!3m2!1sde!2sde!4v1751611914213!5m2!1sde!2sde',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=Hanauer+Landstra%C3%9Fe+146%2C+60314+Frankfurt+am+Main',
  },
];

// 9. Unser Team (Textübergabe 09.11.2026): Funktionen und Beschreibungszeilen
// neu; Namen, Qualifikationen und E-Mail-Adressen wie bisher. Jede Angabe
// eigenes Element. E-Mail-Adressen nur geschützt ausgeben (Mail.astro).
export interface Person {
  name: string;
  role: string;
  description: string;
  quals: string[];
  phone?: string;
  email: string;
}

export const team: { label: string; members: Person[] }[] = [
  {
    label: 'Team Offenbach',
    members: [
      {
        name: 'Eva Kling',
        role: 'Pädagogische Leitung Offenbach',
        description:
          'Verantwortet die fachliche Ausrichtung und Qualität der Hilfen in Offenbach, im Kreis Offenbach und im Main-Kinzig-Kreis. Erste Ansprechpartnerin für Jugendämter bei Klärungsbedarf.',
        quals: ['Diplom-Pädagogin', 'syst. Beraterin | ISEF'],
        email: 'e.kling@eos-hilfen.net',
      },
      {
        name: 'Lara Helfer',
        role: 'Teamleitung Offenbach',
        description: 'Koordiniert die laufenden Hilfen und ist Ansprechpartnerin für Fachkräfte und Familien.',
        quals: ['Psychosoziale Beratung und Recht M.A.', 'Erziehungswissenschaften B.A.'],
        email: 'l.helfer@eos-hilfen.net',
      },
    ],
  },
  {
    label: 'Team Frankfurt',
    members: [
      {
        name: 'Franziska Platz',
        role: 'Pädagogische Leitung Frankfurt',
        description:
          'Verantwortet die fachliche Ausrichtung und Qualität der Hilfen in Frankfurt und im Main-Taunus-Kreis. Erste Ansprechpartnerin für Jugendämter bei Klärungsbedarf.',
        quals: ['Soziale Arbeit M.A.'],
        email: 'f.platz@eos-hilfen.net',
      },
      {
        name: 'Christina Michel',
        role: 'Teamleitung Frankfurt',
        description: 'Koordiniert die laufenden Hilfen und ist Ansprechpartnerin für Fachkräfte und Familien.',
        quals: ['Diplompädagogin'],
        email: 'c.michel@eos-hilfen.net',
      },
    ],
  },
  {
    label: 'Administration',
    members: [
      {
        name: 'Heike Franzmann',
        role: 'Verwaltungsleitung',
        description: 'Verantwortet das Rechnungswesen und die Abrechnung unserer Leistungen.',
        quals: [],
        phone: '+49 (0)69-8700588 – 100',
        email: 'h.franzmann@eos-hilfen.net',
      },
      {
        name: 'Charline Houdij',
        role: 'Verwaltung',
        description: 'Erste Ansprechperson für Anfragen und organisatorische Fragen.',
        quals: [],
        phone: '+49 (0)69-8700588 – 100',
        email: 'c.houdij@eos-hilfen.net',
      },
      {
        name: 'Philipp Z. Açba',
        role: 'Geschäftsführung',
        description: 'Verantwortet die Unternehmensführung und die Weiterentwicklung der eos.',
        quals: [],
        // Keine persönliche Adresse anzeigen (Textübergabe 9)
        email: 'eos@eos-hilfen.net',
      },
    ],
  },
];

export const legal = {
  /** Rechtstexte: <!--EMAIL--> = Platzhalter für die geschützte Adresse */
  impressum: content.impressum as string,
  datenschutz: content.datenschutzerklaerung as string,
};
