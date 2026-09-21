import { useLayoutEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { gsap } from "../../lib/gsap";
import { HERO, BRAND } from "../../data/content";
import { images } from "../../data/images";
import KineticText from "../ui/KineticText";
import Reveal from "../ui/Reveal";
import Button from "../ui/Button";

interface HeroProps {
  ready: boolean;
}

export default function Hero({ ready }: HeroProps) {
  const bgRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const bg = bgRef.current;
    const section = sectionRef.current;
    if (!bg || !section) return;
    const ctx = gsap.context(() => {
      gsap.to(bg, {
        yPercent: 22,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, section);
    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" ref={sectionRef} className="relative h-[100svh] min-h-[640px] overflow-hidden bg-noir-950">
      <div ref={bgRef} className="absolute inset-0 -top-[10%] h-[120%]">
        <img
          src={images.heroBg}
          alt="Villa contemporaine surplombant la Méditerranée"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-noir-950 via-noir-950/40 to-noir-950/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-noir-950/60 via-transparent to-noir-950/30" />
      </div>

      <div className="relative z-10 h-full flex flex-col justify-end container-axiome pb-24 md:pb-28">
        <Reveal immediate delay={ready ? 0.1 : 1.9} className="eyebrow mb-6">
          {HERO.eyebrow}
        </Reveal>

        <KineticText
          text={HERO.title}
          immediate={ready}
          delay={ready ? 0.2 : 2}
          className="font-display text-ivoire leading-[0.94] text-balance"
          lineClassName="text-[3.2rem] sm:text-[4.6rem] md:text-[6.2rem] lg:text-[7.4rem]"
        />

        <div className="mt-10 flex flex-col sm:flex-row sm:items-end justify-between gap-8">
          <Reveal immediate delay={ready ? 0.9 : 2.7} className="max-w-md text-ivoire-dim text-lg">
            {HERO.subtitle}
          </Reveal>
          <Reveal immediate delay={ready ? 1.1 : 2.9}>
            <Button href="#selection" onClick={(e) => e.preventDefault()} className="whitespace-nowrap">
              {HERO.cta}
            </Button>
          </Reveal>
        </div>
      </div>

      <div className="absolute top-28 md:top-32 right-6 md:right-12 z-10 text-right hidden md:block">
        <Reveal immediate delay={ready ? 1.3 : 3.1} className="eyebrow">
          {BRAND.city}
        </Reveal>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-or-400 animate-bounce">
        <ChevronDown size={20} />
      </div>
    </section>
  );
}
