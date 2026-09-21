import { useLayoutEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "../../lib/gsap";
import { NEIGHBORHOODS } from "../../data/content";
import { images } from "../../data/images";
import Reveal from "../ui/Reveal";

export default function Neighborhoods() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 768px)", () => {
        const distance = track.scrollWidth - window.innerWidth;
        if (distance <= 0) return;

        const st = gsap.to(track, {
          x: -distance,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${distance}`,
            scrub: 0.6,
            pin: true,
            invalidateOnRefresh: true,
          },
        });
        return () => {
          st.scrollTrigger?.kill();
          st.kill();
        };
      });

      return () => mm.revert();
    }, section);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.refresh());
    };
  }, []);

  return (
    <section id="quartiers" ref={sectionRef} className="relative bg-noir-950 py-28 md:py-0 overflow-hidden">
      <div className="container-axiome md:absolute md:top-16 md:left-0 md:right-0 z-10">
        <div className="eyebrow mb-4">Quartiers d'exception</div>
        <h2 className="font-display text-[2.4rem] md:text-[3.4rem] text-ivoire leading-[1.02]">
          Là où nous choisissons de vivre.
        </h2>
      </div>

      <div
        ref={trackRef}
        className="flex flex-col md:flex-row gap-6 md:gap-8 md:h-screen md:items-center md:pl-[8vw] md:pr-[20vw] mt-12 md:mt-0"
      >
        {NEIGHBORHOODS.map((n, i) => (
          <Reveal
            key={n.name}
            delay={i * 0.08}
            className="relative shrink-0 w-full md:w-[420px] h-[420px] md:h-[520px] overflow-hidden rounded-sm group"
          >
            <img
              src={images[n.image]}
              alt={n.name}
              className="w-full h-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-noir-950 via-noir-950/10 to-transparent" />
            <div className="absolute bottom-0 p-8">
              <h3 className="font-display text-3xl text-ivoire mb-2">{n.name}</h3>
              <p className="text-ivoire-dim text-sm max-w-[240px]">{n.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
