import { FEATURED_PROPERTY } from "../../data/content";
import { images } from "../../data/images";
import Reveal from "../ui/Reveal";
import KineticText from "../ui/KineticText";

const GALLERY = [
  { src: images.featuredPool, span: "md:col-span-7 md:row-span-2", alt: "Piscine à débordement face à la mer" },
  { src: images.featuredLiving, span: "md:col-span-5 md:row-span-1", alt: "Salon baigné de lumière" },
  { src: images.featuredKitchen, span: "md:col-span-5 md:row-span-1", alt: "Cuisine ouverte, pierre et laiton" },
  { src: images.featuredBedroom, span: "md:col-span-4 md:row-span-1", alt: "Suite principale" },
  { src: images.featuredBathroom, span: "md:col-span-4 md:row-span-1", alt: "Salle de bain en marbre" },
  { src: images.featuredDetail, span: "md:col-span-4 md:row-span-1", alt: "Détail architectural" },
];

export default function FeaturedProperty() {
  return (
    <section id="exception" className="relative bg-noir-900">
      <div className="relative h-[85vh] min-h-[560px] overflow-hidden">
        <img src={images.featuredHero} alt={FEATURED_PROPERTY.name} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-noir-950 via-noir-950/30 to-noir-950/50" />
        <div className="relative z-10 h-full flex flex-col justify-end container-axiome pb-16">
          <Reveal className="eyebrow mb-4">{FEATURED_PROPERTY.eyebrow}</Reveal>
          <KineticText
            text={FEATURED_PROPERTY.name}
            className="font-display text-ivoire leading-[0.95]"
            lineClassName="text-[3rem] md:text-[5rem]"
          />
          <Reveal delay={0.3} className="mt-4 text-or-400 uppercase tracking-[0.14em] text-sm">
            {FEATURED_PROPERTY.location}
          </Reveal>
        </div>
      </div>

      <div className="container-axiome py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-16">
          <Reveal className="text-lg md:text-xl text-ivoire-dim leading-relaxed max-w-xl">
            {FEATURED_PROPERTY.description}
          </Reveal>
          <div className="grid grid-cols-2 gap-8">
            {FEATURED_PROPERTY.facts.map((fact, i) => (
              <Reveal key={fact.label} delay={i * 0.08} className="border-t border-noir-700 pt-4">
                <div className="text-xs uppercase tracking-[0.12em] text-ivoire-dim/70 mb-2">{fact.label}</div>
                <div className="font-display text-2xl text-ivoire">{fact.value}</div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-12 md:auto-rows-[260px] gap-6">
          {GALLERY.map((item, i) => (
            <Reveal key={item.alt} delay={i * 0.06} className={`overflow-hidden rounded-sm ${item.span}`}>
              <div className="group relative h-full min-h-[260px] overflow-hidden">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.08]"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
