import { PROPERTIES } from "../../data/content";
import { images } from "../../data/images";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";

const SPANS = [
  "md:col-span-7 md:row-span-2",
  "md:col-span-5 md:row-span-1",
  "md:col-span-5 md:row-span-1",
  "md:col-span-12 md:row-span-1",
];

export default function SignatureSelection() {
  return (
    <section id="selection" className="relative bg-noir-950 py-28 md:py-40">
      <div className="container-axiome">
        <SectionHeading
          index="01"
          eyebrow="Sélection signature"
          title={"Quatre adresses.\nAucune concession."}
          description="Nous ne présentons jamais plus de biens que nous n'en croyons dignes. Chaque saison, une sélection resserrée."
        />

        <div className="mt-20 grid grid-cols-1 md:grid-cols-12 md:auto-rows-[280px] gap-6">
          {PROPERTIES.map((property, i) => (
            <Reveal
              key={property.id}
              delay={i * 0.08}
              className={`group relative overflow-hidden rounded-sm ${SPANS[i]}`}
            >
              <div className="relative h-full min-h-[320px] w-full overflow-hidden">
                <img
                  src={images[property.image]}
                  alt={property.name}
                  className="w-full h-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-noir-950 via-noir-950/20 to-transparent" />

                {property.tag && (
                  <span className="absolute top-6 left-6 eyebrow bg-noir-950/60 backdrop-blur-sm px-3 py-1.5">
                    {property.tag}
                  </span>
                )}

                <div className="absolute bottom-0 inset-x-0 p-6 md:p-8 flex items-end justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl md:text-3xl text-ivoire">{property.name}</h3>
                    <p className="text-sm text-ivoire-dim mt-1">{property.location}</p>
                    <p className="text-xs text-ivoire-dim/70 mt-2 uppercase tracking-[0.12em]">
                      {property.type} — {property.surface}
                    </p>
                  </div>
                  <span className="text-or-400 font-display text-xl whitespace-nowrap">{property.price}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
