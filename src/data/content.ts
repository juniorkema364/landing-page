export const BRAND = {
  name: "AXIOME",
  tagline: "L'immobilier de prestige, sans compromis",
  founded: 2009,
  city: "Paris — Londres — Genève",
};

export const NAV_LINKS = [
  { id: "selection", label: "Sélection" },
  { id: "approche", label: "Approche" },
  { id: "exception", label: "Un bien d'exception" },
  { id: "quartiers", label: "Quartiers" },
  { id: "interieurs", label: "Intérieurs" },
  { id: "equipe", label: "Équipe" },
  { id: "contact", label: "Contact" },
];

export const HERO = {
  eyebrow: "Agence immobilière de prestige",
  title: "L'exigence\nn'est pas\nune option.",
  subtitle:
    "Nous ne vendons pas des mètres carrés. Nous transmettons des lieux qui méritent d'être habités par ceux qui les comprennent.",
  cta: "Découvrir la sélection",
};

export const MANIFESTO = {
  eyebrow: "Notre vision",
  lines: [
    "Chaque bien que nous présentons a été choisi,",
    "jamais simplement listé.",
    "L'excellence ne se négocie pas — elle se reconnaît.",
  ],
};

export interface Property {
  id: string;
  name: string;
  location: string;
  price: string;
  type: string;
  surface: string;
  image: string;
  tag?: string;
}

export const PROPERTIES: Property[] = [
  {
    id: "villa-cap",
    name: "Villa Belvédère",
    location: "Cap-Ferrat, Côte d'Azur",
    price: "18 500 000 €",
    type: "Villa contemporaine",
    surface: "620 m²",
    tag: "Vue mer panoramique",
    image: "villaExterior",
  },
  {
    id: "penthouse-paris",
    name: "Penthouse Trocadéro",
    location: "16ème arrondissement, Paris",
    price: "12 900 000 €",
    type: "Penthouse",
    surface: "340 m²",
    tag: "Terrasse 180 m²",
    image: "penthouseTerrace",
  },
  {
    id: "hotel-particulier",
    name: "Hôtel Particulier Malesherbes",
    location: "8ème arrondissement, Paris",
    price: "24 000 000 €",
    type: "Hôtel particulier",
    surface: "890 m²",
    tag: "Jardin privatif",
    image: "hotelParticulier",
  },
  {
    id: "chalet-megeve",
    name: "Chalet L'Horizon",
    location: "Megève, Alpes",
    price: "9 800 000 €",
    type: "Chalet de prestige",
    surface: "410 m²",
    tag: "Ski aux pieds",
    image: "chalet",
  },
];

export const STATS = [
  { value: 340, suffix: "+", label: "Biens d'exception transmis" },
  { value: 2.8, suffix: " Mds €", label: "Volume de transactions", decimals: 1 },
  { value: 15, suffix: " ans", label: "D'expertise confidentielle" },
  { value: 98, suffix: "%", label: "De clients recommandés" },
];

export const APPROACH_STEPS = [
  {
    index: "01",
    title: "Écoute confidentielle",
    text: "Un premier échange discret pour comprendre non pas ce que vous cherchez, mais ce que vous refusez de compromettre.",
  },
  {
    index: "02",
    title: "Sélection ciblée",
    text: "Accès à notre réseau off-market : des biens qui ne seront jamais publiés, présentés à une poignée d'acquéreurs choisis.",
  },
  {
    index: "03",
    title: "Visites orchestrées",
    text: "Chaque visite est mise en scène — lumière, moment de la journée, silence. Vous devez ressentir le lieu avant de le juger.",
  },
  {
    index: "04",
    title: "Négociation & transmission",
    text: "Nous négocions comme si le bien était le nôtre, et accompagnons chaque étape jusqu'à la signature — et au-delà.",
  },
];

export const FEATURED_PROPERTY = {
  eyebrow: "Un bien d'exception",
  name: "Villa Belvédère",
  location: "Cap-Ferrat, Côte d'Azur",
  description:
    "Suspendue entre ciel et Méditerranée, la Villa Belvédère a été conçue par un architecte de renom pour ne faire qu'un avec la falaise qui la porte. 620 m² de vide et de lumière, une piscine à débordement qui semble se jeter dans la mer, et un silence que seul l'argent ne peut acheter — mais qui s'y trouve tout de même.",
  facts: [
    { label: "Surface habitable", value: "620 m²" },
    { label: "Terrain", value: "1,4 hectare" },
    { label: "Chambres", value: "7 suites" },
    { label: "Particularité", value: "Piscine à débordement 28 m" },
  ],
};

export const NEIGHBORHOODS = [
  { name: "Cap-Ferrat", desc: "Discrétion absolue, presqu'île la plus prisée d'Europe.", image: "neighborhoodCapFerrat" },
  { name: "Trocadéro", desc: "Vue Tour Eiffel, adresses historiques.", image: "neighborhoodTrocadero" },
  { name: "Megève", desc: "L'authenticité alpine réinventée pour l'exigence.", image: "neighborhoodMegeve" },
  { name: "8ème Paris", desc: "Hôtels particuliers et jardins secrets.", image: "neighborhoodParis8" },
];

export const INTERIORS = {
  eyebrow: "Intérieurs & matériaux",
  title: "Le détail\nest la signature.",
  text: "Pierre de Bourgogne, chêne fumé, laiton brossé — nous ne présentons que des intérieurs où chaque matériau a été choisi pour vieillir avec grâce.",
};

export const LIFESTYLE_GALLERY = [
  { image: "lifestylePool", caption: "Golden hour, Cap-Ferrat" },
  { image: "lifestyleTerrace", caption: "Rooftop, Trocadéro" },
  { image: "lifestyleDining", caption: "Dîner privé, Malesherbes" },
  { image: "lifestyleGarden", caption: "Jardin d'hiver, Megève" },
  { image: "lifestyleNight", caption: "Vue de nuit, Paris" },
];

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Ils n'ont pas cherché à me vendre une maison. Ils ont cherché à comprendre pourquoi je n'avais pas encore trouvé la mienne.",
    author: "V. Lindqvist",
    role: "Acquéreur, Villa Belvédère",
  },
  {
    quote:
      "Trois biens visités. Un seul présenté. C'est exactement ce que j'attends d'une agence à ce niveau.",
    author: "M. Al-Rashid",
    role: "Acquéreur, Penthouse Trocadéro",
  },
  {
    quote:
      "La négociation a été menée avec une froideur élégante que je n'avais jamais vue ailleurs. Résultat : 11% sous le prix affiché.",
    author: "C. Dubreuil",
    role: "Acquéreur, Hôtel Particulier",
  },
];

export const JOURNAL = {
  eyebrow: "Revue de presse",
  title: "Ils parlent de nous,\nrarement de nos prix.",
  press: ["LE FIGARO", "ARCHITECTURAL DIGEST", "PROPERTY WEEK", "CHÂTEAUX & DEMEURES", "FORBES", "LES ÉCHOS"],
  quotes: [
    { text: "« La discrétion faite agence. »", source: "Le Figaro Immobilier" },
    { text: "« Le seul acteur parisien qui refuse plus de mandats qu'il n'en accepte. »", source: "Property Week" },
    { text: "« Une sélection qui ressemble à une collection d'art. »", source: "Architectural Digest" },
  ],
};

export const BEFORE_AFTER = {
  eyebrow: "Une même pièce, deux vies",
  title: "Le jour la révèle.\nLe soir la transforme.",
  text: "Un même salon, deux ambiances. Faites glisser pour passer de la lumière de midi au silence doré du soir.",
  before: "beforeRestoration",
  after: "afterRestoration",
};

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export const TEAM: TeamMember[] = [
  { name: "Alexandre Roth", role: "Fondateur & Directeur", image: "teamAlexandre" },
  { name: "Isabelle Ferrand", role: "Directrice des acquisitions", image: "teamIsabelle" },
  { name: "Julien Moreau", role: "Responsable Côte d'Azur", image: "teamJulien" },
  { name: "Camille Sorel", role: "Responsable relations clients", image: "teamCamille" },
];

export const CONTACT = {
  eyebrow: "Prise de contact",
  title: "Parlons de\nce que vous refusez\nde compromettre.",
  text: "Chaque échange débute par un appel confidentiel de trente minutes. Aucune obligation, aucune liste — seulement une conversation.",
  email: "contact@axiome-immobilier.com",
  phone: "+33 1 42 00 00 00",
};

export const FOOTER_LINKS = {
  sitemap: [
    { id: "selection", label: "Sélection" },
    { id: "approche", label: "Approche" },
    { id: "equipe", label: "Équipe" },
    { id: "contact", label: "Contact" },
  ],
  legal: ["Mentions légales", "Confidentialité", "Honoraires"],
  social: ["Instagram", "LinkedIn"],
};
