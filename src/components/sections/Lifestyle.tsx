import { LIFESTYLE_GALLERY } from "../../data/content";
import { images } from "../../data/images";
import Reveal from "../ui/Reveal";

const doubled = [...LIFESTYLE_GALLERY, ...LIFESTYLE_GALLERY];

export default function Lifestyle() {
  return (
    <section className="relative bg-noir-950 py-28 md:py-36 overflow-hidden">
      <div className="container-axiome mb-14">
        <Reveal className="eyebrow mb-4">L'art de vivre</Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-[2.4rem] md:text-[3.6rem] text-ivoire leading-[1.02] max-w-2xl">
            Ce que l'on n'achète pas, mais que l'on habite.
          </h2>
        </Reveal>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {doubled.map((item, i) => (
            <div key={i} className="relative w-[320px] md:w-[420px] h-[440px] md:h-[520px] mx-3 shrink-0 overflow-hidden rounded-sm group">
              <img
                src={images[item.image]}
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-noir-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-ivoire text-sm uppercase tracking-[0.1em]">
                {item.caption}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
