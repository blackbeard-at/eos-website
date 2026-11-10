// Freigegebene Texte der Startseite (Textübergabe Fassung 1 vom 09.11.2026,
// freigegeben von P. Z. Açba). Wörtlich übernehmen, nicht umformulieren —
// Widersprüche melden statt selbst ändern. § und §§ immer mit geschütztem
// Leerzeichen ( ). Startseite und /entwurf-f nutzen dieselbe Quelle.

const NB = ' ';

export const meta = {
  title: 'eos – Ambulante Kinder- und Jugendhilfe im Rhein-Main-Gebiet',
  description:
    'Ambulante Hilfen zur Erziehung im Rhein-Main-Gebiet, mit Standorten in Offenbach und Frankfurt. Strukturiert, flexibel, mit verbindlichem Kinderschutz.',
};

// 2.1 Hero (Überschrift bleibt). Der markierte Teil wird im Hero hervorgehoben.
export const hero = {
  before: 'Seit 2012 begleiten wir ',
  highlight: 'Kinder, Jugendliche, junge Erwachsene und Familien im Rhein-Main-Gebiet',
  after:
    ', von unseren Standorten in Offenbach und Frankfurt aus. Unsere Hilfen sind klar strukturiert, gut steuerbar und flexibel genug für den Alltag von Familien. Dafür steht ein engagiertes Team, das fachlich fundiert und gewissenhaft arbeitet und dabei eng begleitet wird.',
  button: { label: 'Wie wir arbeiten', href: '#unser-leitbild' },
};
export const heroText = hero.before + hero.highlight + hero.after;

// 3.1 Wofür wir arbeiten
export const vision =
  'Jeder junge Mensch soll die Chance haben, sein Leben selbstbestimmt zu gestalten, unabhängig davon, woher er kommt und was er erlebt hat. Dafür arbeiten wir eng mit Familien und Jugendämtern zusammen und verstehen uns als Träger, der dazulernt.';

// 3.2 Wie wir arbeiten
export const arbeitsweise = {
  intro:
    'Wir arbeiten systemisch, ressourcenorientiert und lebensweltorientiert. Drei Dinge sind uns dabei besonders wichtig:',
  cards: [
    {
      title: 'Flexibel',
      text: 'Wir arbeiten dort, wo der Alltag stattfindet: zu Hause, in der Schule, im Stadtteil. Ändert sich die Lage einer Familie, passen wir die Hilfe an, in Absprache mit dem Jugendamt.',
    },
    {
      title: 'Fachlich',
      text: 'Ziele legen wir gemeinsam fest und machen Fortschritte sichtbar. Jeder Fall wird mindestens monatlich mit der Leitung beraten, externe Supervision begleitet das Team zehnmal im Jahr.',
    },
    {
      title: 'Gewissenhaft',
      text: 'Verlässliche Termine, saubere Dokumentation und ein verbindliches Kinderschutzverfahren. Was wir zusagen, halten wir ein, und wenn etwas nicht klappt, sagen wir es offen.',
    },
  ],
};

export interface Faq {
  q: string;
  a: string;
}

// Standardsätze Kinderschutz (Regel 6) — je genau einmal verwenden
const kFamilie =
  'Berichte besprechen wir in der Regel vorher mit euch. Gibt es Hinweise, dass ein Kind gefährdet sein könnte, gehen wir nach unserem verbindlichen Kinderschutzverfahren vor. Lässt sich die Gefahr nicht anders abwenden, informieren wir das Jugendamt. Ist im Hilfeplan schon etwas zum Schutz eines Kindes vereinbart, informieren wir das Jugendamt bereits beim ersten Hinweis. Bei akuter Gefahr handeln wir sofort. Wir beziehen euch ein, soweit der Schutz des Kindes dadurch nicht in Frage gestellt wird.';
const kJugendamt = `Bei Hinweisen auf eine mögliche Kindeswohlgefährdung gehen wir nach unserem Schutzkonzept gemäß §§${NB}8a, 72a SGB VIII vor. Im Regelfall schätzen wir die Gefährdung eigenverantwortlich ein und informieren Sie umgehend, sobald eine der Voraussetzungen nach §${NB}8a Abs. 4 SGB VIII vorliegt, in jedem Schritt des Verfahrens. In Hilfen mit Kinderschutzzielen beziehen wir Ihre zuständige Fachkraft ab dem ersten Hinweis ein. Bei akuter Gefahr handeln wir sofort.`;

// 4. Für junge Menschen und Familien (Leitsatz bleibt)
export const familien = {
  badge: 'Für junge Menschen & Familien',
  leitsatz: 'Wir sind da, um zu stärken – wertschätzend, ohne Druck, auf Augenhöhe.',
  intro:
    'Wir hören zu, kommen regelmäßig und legen mit euch gemeinsam fest, woran wir arbeiten. Entscheidungen machen wir nachvollziehbar, eure Rechte und Grenzen achten wir. Unser Ziel ist, dass ihr uns irgendwann nicht mehr braucht.',
  fuerDich: {
    title: 'Für dich',
    text: 'Du darfst mitreden, welche Ziele wir uns vornehmen. Du darfst Nein sagen, wenn dir etwas zu nah ist. Und du darfst dich beschweren, auch ohne deine Eltern und ohne deine Fachkraft. Nachteile hast du dadurch keine. Wenn dir etwas Angst macht oder dir jemand wehtut, sag es uns.',
    hotlineBefore: 'Rund um die Uhr erreichbar, kostenlos und anonym: Nummer gegen Kummer ',
    hotline: '116 111',
    hotlineHref: 'tel:116111',
    hotlineAfter: '.',
  },
  faq: [
    {
      q: 'Wie bekommen wir Hilfe?',
      a: 'Ihr könnt euch gern bei uns erkundigen, welche Hilfen es gibt und wie wir arbeiten. Die Hilfe selbst beantragt ihr beim Jugendamt eurer Stadt oder eures Kreises. Das Jugendamt klärt mit euch, welche Hilfe passt, und beauftragt einen Träger mit passendem Profil. Ihr dürft dort sagen, dass ihr gern mit eos arbeiten möchtet.',
    },
    { q: 'Was kostet die Hilfe?', a: 'Für euch nichts. Ambulante Hilfen zur Erziehung bezahlt das Jugendamt.' },
    {
      q: 'Wie oft kommt jemand zu uns?',
      a: 'So oft, wie es für eure Familie sinnvoll ist, meist ein- bis mehrmals pro Woche. Der Umfang steht im Hilfeplan und wird regelmäßig überprüft.',
    },
    {
      q: 'Was erfährt das Jugendamt?',
      a: `Das Jugendamt ist für eure Hilfe verantwortlich und bekommt von uns regelmäßig Berichte: wie die Hilfe läuft, was sich verändert hat und woran wir weiter arbeiten. Darin steht auch, wie ihr selbst die Lage seht. Was für die Hilfe keine Rolle spielt, geben wir nicht weiter. ${kFamilie}`,
    },
    {
      q: 'Was, wenn es mit der Fachkraft nicht passt?',
      a: 'Sagt es uns, direkt oder über unsere Leitung. Eine gute Arbeitsbeziehung ist die Grundlage dafür, dass Hilfe wirkt. Wir schauen gemeinsam, was nicht passt, und prüfen, ob eine andere Fachkraft übernehmen kann.',
    },
    {
      q: 'Können wir die Hilfe beenden?',
      a: 'Hilfen zur Erziehung sind ein Angebot und gelingen nur, wenn ihr mitmacht. Wenn ihr aufhören möchtet, sprecht mit uns oder dem Jugendamt. Gibt es eine Auflage des Familiengerichts oder ist im Hilfeplan etwas zum Schutz eines Kindes vereinbart, klärt das Jugendamt mit euch, wie es weitergeht.',
    },
    {
      q: 'Wir sind unzufrieden. Was können wir tun?',
      a: 'Sprecht eure Fachkraft, unsere Leitung oder die Geschäftsführung an, auch ohne Umweg über die Fachkraft und auch anonym. Ihr bekommt innerhalb von 3 Werktagen eine Eingangsbestätigung und innerhalb von 14 Tagen eine Antwort. Unabhängige Stellen wie die Ombudsstelle für Kinder- und Jugendrechte nennen wir euch zu Beginn der Hilfe. Eine Beschwerde hat für euch keine Nachteile.',
    },
    {
      q: 'Was passiert in einer Krise?',
      a: 'Montag bis Freitag von 8 bis 18 Uhr sind eure Fachkraft und unsere Leitung erreichbar. Für schwierige Situationen erstellen wir mit euch einen Notfallplan. Bei Gefahr für Leib und Leben: Polizei 110 oder Rettungsdienst 112. Außerhalb der Dienstzeiten erreicht ihr den Bereitschaftsdienst des Jugendamts in der Regel über die Polizei.',
    },
  ] as Faq[],
};

// 5. Für Jugendämter (Leitsatz bleibt). Hier nur „Sie“, kein „ihr/euch“.
export const jugendaemter = {
  badge: 'Für Jugendämter',
  leitsatz: 'Verlässliche Zusammenarbeit, transparente Prozesse und fachlich fundierte Steuerung von Hilfen.',
  intro:
    'Unsere Hilfen sind klar strukturiert und gut steuerbar. Ziele formulieren wir mit Ihnen und der Familie überprüfbar, Entwicklungen machen wir in den Berichten sichtbar, und bei Veränderungen melden wir uns umgehend. Für Kinderschutz, Vertretung und Konflikte gibt es feste, schriftlich geregelte Abläufe.',
  leistungen: [
    `Case Management und Hilfeplanung nach §${NB}36 SGB VIII mit überprüfbaren Zielen`,
    'Berichte zu jedem Hilfeplangespräch, in der mit Ihnen abgestimmten Struktur',
    'Umgehende Information bei ausfallenden Terminen und verändertem Bedarf',
    `Kinderschutz nach §§${NB}8a, 72a SGB VIII mit schriftlichem Verfahren und Schutzplan`,
    'Insoweit erfahrene Fachkräfte aus einem eigenen Pool, vorrangig extern',
    'Benannte Fallvertretung in Hilfen mit Kinderschutzzielen',
    'Konfliktbeauftragte für unterschiedliche Einschätzungen',
    'Monatliche Fallberatung jedes Falls, externe Supervision zehnmal im Jahr',
  ],
  faq: [
    {
      q: 'In welchen Gebieten sind Sie tätig?',
      a: 'Von unserem Standort Offenbach aus in der Stadt Offenbach, im Kreis Offenbach und im Main-Kinzig-Kreis, von Frankfurt aus in der Stadt Frankfurt und im Main-Taunus-Kreis. Für den Main-Kinzig-Kreis bereiten wir einen eigenen Standort in Gelnhausen vor. Anfragen aus angrenzenden Gebieten prüfen wir im Einzelfall.',
    },
    {
      q: 'Wie schnell können Sie beginnen?',
      a: 'Auf Ihre Fallanfrage erhalten Sie innerhalb von zwei Werktagen eine verbindliche Rückmeldung. Die Hilfe beginnt in der Regel ein bis zwei Wochen nach Auftrag, in Eilfällen schneller.',
    },
    {
      q: 'Wie berichten Sie?',
      a: 'Zu jedem Hilfeplangespräch erhalten Sie einen Bericht in der mit Ihnen abgestimmten Struktur, mit Zielerreichung, Ressourcen und Risiken. In jedem Bericht wird erkennbar, wie der junge Mensch beteiligt wurde und wie er seine Situation selbst sieht. Verändert sich der Bedarf so, dass die Hilfe ihn nicht mehr deckt, informieren wir Sie umgehend.',
    },
    {
      q: 'Was passiert, wenn Termine ausfallen?',
      a: 'In Hilfen mit Kinderschutzzielen informieren wir Sie bereits nach dem ersten ausgefallenen Termin. In allen anderen Hilfen melden wir uns, wenn zwei vereinbarte Termine in Folge ausfallen.',
    },
    {
      q: 'Wie ist der Kinderschutz geregelt?',
      a: `${kJugendamt} Die Einschätzung erfolgt im Mehraugenprinzip am selben, spätestens am folgenden Werktag. Beraten werden wir von insoweit erfahrenen Fachkräften aus unserem Pool, vorrangig extern und nie aus dem Kreis der am Fall Beteiligten. Mit der Familie vereinbaren wir einen schriftlichen Schutzplan mit Sicherheitsabsprachen.`,
    },
    {
      q: 'Wer vertritt, wenn die Fachkraft ausfällt?',
      a: 'In Hilfen mit Kinderschutzzielen ist von Beginn an eine zweite, namentlich benannte Fachkraft zugeordnet, die ab dem ersten Tag übernimmt. Wie die Vertretung im einzelnen Fall geregelt ist, halten wir in jeder Hilfe schriftlich mit Ihnen fest.',
    },
    {
      q: 'An wen wenden wir uns bei unterschiedlichen Einschätzungen?',
      a: 'An unsere Konfliktbeauftragte: zuerst die Pädagogische Leitung des zuständigen Standorts, betrifft der Konflikt sie selbst, die Geschäftsführung. Verlauf und Ergebnis der Klärung halten wir schriftlich fest.',
    },
    {
      q: 'Welche Qualifikation haben Ihre Fachkräfte?',
      a: `Alle Fachkräfte haben einen anerkannten Abschluss nach §${NB}72 SGB VIII, etwa in Sozialer Arbeit oder Sozialpädagogik. Im Team vertreten sind unter anderem systemische Beratung und insoweit erfahrene Fachkräfte. Neue Kolleg*innen arbeiten in den ersten Wochen mit erfahrenen Fachkräften zusammen und übernehmen Schutzfälle nicht allein.`,
    },
  ] as Faq[],
};

// 6. Leistungen (Paragrafenlinks zu gesetze-im-internet.de bleiben)
export interface Leistung {
  label: string; // Paragraf, leer bei Clearing
  name: string;
  text: string;
  law?: string;
  internal?: { label: string; href: string };
}

const law = (n: string) => `https://www.gesetze-im-internet.de/sgb_8/__${n}.html`;

export const leistungen = {
  intro:
    'Welche Hilfe passt, entscheidet das Jugendamt gemeinsam mit der Familie. Wir setzen sie um: strukturiert, gut erreichbar und so, dass sie im Alltag wirkt.',
  items: [
    {
      label: `§${NB}18 Abs. 3 SGB VIII`,
      name: 'Begleiteter Umgang',
      text: 'Geschützte Kontakte zwischen Kind und Elternteil oder einer anderen Bezugsperson. Wir bereiten jedes Treffen mit allen Beteiligten vor, sind dabei und werten es aus. Maßstab ist, was das Kind braucht, auch bei familiengerichtlicher Anordnung.',
      law: law('18'),
    },
    {
      label: `§${NB}30 SGB VIII`,
      name: 'Erziehungsbeistandschaft',
      text: 'Eine feste Fachkraft an der Seite von Kindern und Jugendlichen: bei Schulproblemen, Konflikten zu Hause und Fragen zur eigenen Zukunft. Die Familie bleibt einbezogen.',
      law: law('30'),
    },
    {
      label: `§${NB}31 SGB VIII`,
      name: 'Sozialpädagogische Familienhilfe',
      text: 'Unterstützung für die ganze Familie, direkt im Alltag: Erziehung, Tagesstruktur, Konflikte, Behörden. Wir beziehen alle wichtigen Bezugspersonen ein und bauen auf dem auf, was schon gut läuft.',
      law: law('31'),
    },
    {
      label: `§${NB}35 SGB VIII`,
      name: 'Intensive sozialpädagogische Einzelbetreuung',
      text: 'Enge und flexible Begleitung für Jugendliche und junge Erwachsene in sehr belasteten Lebenslagen, mit hoher Kontaktdichte und auch kurzfristig.',
      law: law('35'),
    },
    {
      label: `§${NB}35a SGB VIII`,
      name: 'Eingliederungshilfe',
      text: 'Für Kinder und Jugendliche, deren Teilhabe an Schule, Familie oder Freizeit durch eine seelische Beeinträchtigung erschwert ist. Ob ein Anspruch besteht, stellt das Jugendamt fest; eine Diagnose allein reicht dafür nicht. Wir arbeiten traumasensibel und abgestimmt mit Ärzt*innen, Therapeut*innen und Schule.',
      law: law('35a'),
    },
    {
      label: `§${NB}41 SGB VIII`,
      name: 'Hilfe für junge Volljährige',
      text: 'Begleitung auf dem Weg in ein eigenständiges Leben: Wohnen, Ausbildung, Geld, Behörden. In der Regel bis zum 21. Geburtstag, in begründeten Fällen länger.',
      law: law('41'),
    },
    {
      label: '',
      name: 'Clearing',
      text: 'Befristete, strukturierte Klärung des Hilfebedarfs: Gespräche mit allen Beteiligten, Einschätzung von Risiken und Ressourcen, schriftliche Empfehlung für die Hilfeplanung.',
    },
    {
      label: `§§${NB}8a, 72a SGB VIII`,
      name: 'Kinderschutz',
      text: 'Der Schutzauftrag ist Grundlage jeder Hilfe. Wie wir vorgehen, steht im Abschnitt Kinderschutz.',
      law: law('8a'),
      internal: { label: 'Zum Kinderschutz', href: '#kinderschutz' },
    },
  ] as Leistung[],
};

/** Titel wie im Akkordeon: „§ 30 SGB VIII – Erziehungsbeistandschaft“, Kinderschutz „Kinderschutz nach §§ …“ */
export const leistungTitle = (l: Leistung) =>
  !l.label ? l.name : l.name === 'Kinderschutz' ? `${l.name} nach ${l.label}` : `${l.label} – ${l.name}`;

// 7. Kinderschutz und Qualität (neu, Anker #kinderschutz)
export const kinderschutz = {
  title: 'Kinderschutz: verbindlich und nachvollziehbar',
  intro:
    'Unser Schutzkonzept gilt für alle, die für eos tätig sind, auch für Honorarkräfte und Sprachmittler*innen. Es regelt, wie wir Kinder vor Gefahren in ihrem Umfeld schützen und wie wir Grenzverletzungen durch Mitarbeitende verhindern. Ist ein Kind akut in Gefahr, handeln wir sofort. In Hilfen mit Kinderschutzzielen ist das Jugendamt vom ersten Hinweis an beteiligt.',
  steps: [
    {
      title: 'Wahrnehmen und melden',
      text: 'Die Fachkraft dokumentiert ihre Beobachtungen und informiert unverzüglich die Teamleitung.',
    },
    {
      title: 'Gemeinsam einschätzen',
      text: 'Fachkraft und Leitung bewerten die Lage am selben, spätestens am nächsten Werktag, beraten von einer unabhängigen insoweit erfahrenen Fachkraft.',
    },
    {
      title: 'Schutzplan vereinbaren',
      text: 'Mit der Familie und, altersgerecht, mit dem Kind vereinbaren wir schriftlich, was zum Schutz nötig ist, und prüfen regelmäßig, ob es wirkt.',
    },
    {
      title: 'Jugendamt einbeziehen',
      text: 'Reicht das nicht aus oder fehlt die Mitwirkung, informieren wir umgehend das Jugendamt, in jedem Schritt des Verfahrens.',
    },
  ],
  listTitle: 'Was uns verbindlich macht',
  list: [
    'Insoweit erfahrene Fachkräfte aus einem eigenen Pool, vorrangig extern und nie aus dem Kreis der am Fall Beteiligten',
    'Erweitertes Führungszeugnis für alle Mitarbeitenden, spätestens alle fünf Jahre erneuert',
    'Verbindliche Verhaltensregeln, z. B. Kontakt nur über dienstliche Telefone und Adressen, keine privaten Kontakte zu betreuten Familien',
    'Benannte Fallvertretung in Hilfen mit Kinderschutzzielen',
    'Beschwerden auch anonym, mit Antwort innerhalb von 14 Tagen',
    'Regelmäßige Schulungen im Kinderschutz und jährliche Auswertung aller Verfahren',
  ],
};

// 8. Methoden („Womit wir arbeiten“), sechs Gruppen. Einträge mit ', '
// verbunden ergeben wörtlich den freigegebenen Text.
export const methoden = {
  intro:
    'Methoden sind Werkzeuge, kein Selbstzweck. Welche wir einsetzen, richtet sich nach den Zielen im Hilfeplan und danach, was zu Alter und Situation passt.',
  groups: [
    {
      name: 'Systemisch arbeiten',
      items: [
        'Genogramm',
        'zirkuläre und Skalierungsfragen',
        'Ressourcen- und Netzwerkkarten',
        'Familienrat',
        'kindgerechte Aufstellungsarbeit',
      ],
    },
    {
      name: 'Beteiligung und Schutz',
      items: ['Drei Häuser', 'Sicherheitshaus', 'Words and Pictures', 'Sicherheits- und Notfallpläne'],
    },
    {
      name: 'Stabilität und Krisen',
      items: ['Krisenintervention', 'traumasensibles Arbeiten', 'Stressreduktion'],
    },
    {
      name: 'Gefühle und Impulse',
      items: [
        'Emotionsregulation (z. B. mit dem Wutthermometer)',
        'Impulskontrollübungen',
        'Entspannungstraining',
        'Rollenspiele',
      ],
    },
    {
      name: 'Alltag und Struktur',
      items: [
        'Wochen- und Tagespläne',
        'Begleitung bei Behörden',
        'Vernetzung im Sozialraum',
        'Einzel-, Familien- und Gruppentermine',
      ],
    },
    {
      name: 'Kreativ und motivierend',
      items: ['Stärkenkarten', 'Lebenslinie', 'Wunschbaum', 'Erfolgstagebuch', 'Vision Board', 'Fotoprojekte'],
    },
  ],
};

// 9. Unser Team: Einleitung (Personen in site.ts → team)
export const teamIntro =
  'Unser Team ist engagiert, flexibel und fachlich gut aufgestellt. Alle Fachkräfte haben einen anerkannten Abschluss in Sozialer Arbeit, Sozialpädagogik oder einem vergleichbaren Fach. Neue Kolleg*innen werden in den ersten Wochen von erfahrenen Fachkräften begleitet. Jeder Fall wird monatlich mit der Leitung beraten, und externe Supervision begleitet das Team zehnmal im Jahr.';

// 10. Standorte: Hinweis Gelnhausen (ohne Adresse, Datum, Karte)
export const gelnhausen = {
  title: 'Bald auch in Gelnhausen.',
  text: 'Für den Main-Kinzig-Kreis bereiten wir einen eigenen Standort in Gelnhausen vor. Bis dahin betreuen wir Familien im Main-Kinzig-Kreis von Offenbach aus.',
};
