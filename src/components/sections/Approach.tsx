import { useEffect, useRef, useState } from "react";
import { APPROACH_STEPS } from "../../data/content";
import { images } from "../../data/images";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";

const STEP_IMAGES = [images.approachBg, images.approachDetail, images.featuredLiving, images.featuredDetail];

export default function Approach() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    refs.current.forEach((el, i) => {
      if (!el) return;
      const io = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(i);
        },
        { threshold: 0.5, rootMargin: "-20% 0px -20% 0px" }
      );
      io.observe(el);
      observers.push(io);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section id="approche" className="relative bg-noir-950 py-28 md:py-40">
      <div className="container-axiome">
        <SectionHeading
          index="02"
          eyebrow="Notre approche"
          title={"Quatre étapes.\nAucun raccourci."}
        />

        <div className="mt-20 grid md:grid-cols-2 gap-16">
          <div className="hidden md:block sticky top-28 h-[480px] self-start overflow-hidden rounded-sm">
            {STEP_IMAGES.map((src, i) => (
              <img
                key={src}
                src={src}
                alt=""
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
                style={{ opacity: active === i ? 1 : 0 }}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-noir-950/60 to-transparent" />
          </div>

          <div className="space-y-24">
            {APPROACH_STEPS.map((step, i) => (
              <div
                key={step.index}
                ref={(el) => {
                  refs.current[i] = el;
                }}
                className="border-t border-noir-700 pt-8"
              >
                <Reveal className="flex items-start gap-6">
                  <span className="font-display text-2xl text-or-500">{step.index}</span>
                  <div>
                    <h3 className="font-display text-2xl md:text-3xl text-ivoire mb-3">{step.title}</h3>
                    <p className="text-ivoire-dim max-w-md">{step.text}</p>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
