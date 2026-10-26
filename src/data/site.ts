// Zentrale Inhalte der EOS-Website. Längere Texte (Akkordeons, Team,
// Rechtstexte) stehen in content.json — 1:1 aus www.eos-hilfen.net übernommen.
import content from './content.json';

export interface Panel {
  title: string;
  html: string;
  link: string | null;
}

export const site = {
  name: 'EOS GmbH – Kinder- und Jugendhilfe',
  description:
    'Freier Träger der ambulanten Hilfen zur Erziehung im Rhein-Main-Gebiet: Begleitung für Kinder, Jugendliche, junge Erwachsene und Familien – systemisch und mit echter menschlicher Nähe.',
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

export const panels = {
  intro: content.intro as Panel[],
  vision: content.vision as Panel[],
  leitbild: content.leitbild as Panel[],
  zielgruppen: content.zielgruppen as Panel[],
  leistungen: content.leistungen as Panel[],
  methoden: content.methoden as Panel[],
};

export const team = content.team as {
  label: string;
  members: { name: string; role: string; lines: string[] }[];
}[];

export const legal = {
  impressum: content.impressum as string,
  datenschutz: content.datenschutzerklaerung as string,
};
