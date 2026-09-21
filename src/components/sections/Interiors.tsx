import { INTERIORS } from "../../data/content";
import { images } from "../../data/images";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";

const MASONRY = [
  { src: images.interiorLiving, h: "h-[380px]" },
  { src: images.interiorBedroom, h: "h-[280px]" },
  { src: images.extraBathroom, h: "h-[340px]" },
  { src: images.interiorKitchen, h: "h-[420px]" },
  { src: images.extraLivingWarm, h: "h-[300px]" },
  { src: images.interiorBathroom, h: "h-[260px]" },
  { src: images.extraBedroomAlt, h: "h-[360px]" },
  { src: images.interiorDetail, h: "h-[240px]" },
  { src: images.extraLiving, h: "h-[320px]" },
];

export default function Interiors() {
  return (
    <section id="interieurs" className="relative bg-noir-950 py-28 md:py-40">
      <div className="container-axiome">
        <SectionHeading index="04" eyebrow={INTERIORS.eyebrow} title={INTERIORS.title} description={INTERIORS.text} />

        <div className="mt-20 columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {MASONRY.map((item, i) => (
            <Reveal key={i} delay={(i % 3) * 0.1} className="break-inside-avoid overflow-hidden rounded-sm group">
              <div className={`relative w-full ${item.h} overflow-hidden`}>
                <img
                  src={item.src}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-[1.3s] ease-out group-hover:scale-110"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
