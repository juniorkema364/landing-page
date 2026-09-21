/**
 * Curated Unsplash photography — each URL verified to resolve (HTTP 200) and
 * visually spot-checked against its intended subject before commit.
 * Swap for AXIOME's own photography before production launch.
 */
function unsplash(id: string, w: number, q = 82) {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=${q}`;
}

export const images: Record<string, string> = {
  // Hero / narrative
  heroBg: unsplash("1613977257363-707ba9348227", 2600),
  manifestoBg: unsplash("1600585154340-be6161a56a0c", 2200),

  // Properties (cards)
  villaExterior: unsplash("1580587771525-78b9dba3b914", 1600),
  penthouseTerrace: unsplash("1613553497126-a44624272024", 1600),
  hotelParticulier: unsplash("1600607687939-ce8a6c25118c", 1600),
  chalet: unsplash("1560185893-a55cbc8c57e8", 1600),

  // Featured property deep-dive (Villa Belvédère)
  featuredHero: unsplash("1613977257363-707ba9348227", 2400),
  featuredPool: unsplash("1602343168117-bb8ffe3e2e9f", 2000),
  featuredLiving: unsplash("1502672260266-1c1ef2d93688", 2000),
  featuredBedroom: unsplash("1571508601891-ca5e7a713859", 2000),
  featuredBathroom: unsplash("1584622650111-993a426fbf0a", 2000),
  featuredKitchen: unsplash("1556911220-bff31c812dba", 2000),
  featuredDetail: unsplash("1600489000022-c2086d79f9d4", 1600),

  // Neighborhoods
  neighborhoodCapFerrat: unsplash("1580216643062-cf460548a66a", 1400),
  neighborhoodTrocadero: unsplash("1541343672885-9be56236302a", 1400),
  neighborhoodMegeve: unsplash("1568605114967-8130f3a36994", 1400),
  neighborhoodParis8: unsplash("1493809842364-78817add7ffb", 1400),

  // Interiors & materials
  interiorLiving: unsplash("1512918728675-ed5a9ecdebfd", 1800),
  interiorBedroom: unsplash("1522708323590-d24dbb6b0267", 1800),
  interiorKitchen: unsplash("1556909114-f6e7ad7d3136", 1800),
  interiorBathroom: unsplash("1620626011761-996317b8d101", 1800),
  interiorDetail: unsplash("1592595896551-12b371d546d5", 1400),

  // Lifestyle gallery
  lifestylePool: unsplash("1613490493576-7fde63acd811", 1800),
  lifestyleTerrace: unsplash("1600573472550-8090b5e0745e", 1800),
  lifestyleDining: unsplash("1617806118233-18e1de247200", 1800),
  lifestyleGarden: unsplash("1585320806297-9794b3e4eeae", 1800),
  lifestyleNight: unsplash("1519501025264-65ba15a82390", 1800),

  // Approach section
  approachBg: unsplash("1600607687920-4e2a09cf159d", 1400),
  approachDetail: unsplash("1600585154363-67eb9e2e2099", 1400),

  // Extra masonry filler (Interiors section)
  extraLiving: unsplash("1600596542815-ffad4c1539a9", 1400),
  extraBathroom: unsplash("1600607688969-a5bfcd646154", 1400),
  extraLivingWarm: unsplash("1600566752355-35792bedcfea", 1400),
  extraBedroomAlt: unsplash("1600585152220-90363fe7e115", 1400),

  // Jour / soir comparison
  beforeRestoration: unsplash("1560448204-61dc36dc98c8", 2000),
  afterRestoration: unsplash("1615529182904-14819c35db37", 2000),
};

export const team: Record<string, string> = {
  teamAlexandre: unsplash("1507003211169-0a1dd7228f2d", 800),
  teamIsabelle: unsplash("1580489944761-15a19d654956", 800),
  teamJulien: unsplash("1472099645785-5658abf4ff4e", 800),
  teamCamille: unsplash("1531123897727-8f129e1688ce", 800),
};
