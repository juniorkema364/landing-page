import { useLayoutEffect, useRef } from "react";
import { gsap } from "../../lib/gsap";
import { MANIFESTO } from "../../data/content";
import { images } from "../../data/images";

export default function Manifesto() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLImageElement>(null);
  const lineRefs = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const ctx = gsap.context(() => {
      const lines = lineRefs.current.filter(Boolean) as HTMLDivElement[];
      gsap.set(lines, { opacity: 0.08, scale: 0.92, filter: "blur(6px)" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrap,
          start: "top top",
          end: "+=220%",
          scrub: 0.6,
          pin: true,
        },
      });

      tl.to(bgRef.current, { scale: 1.35, ease: "none" }, 0);

      lines.forEach((line, i) => {
        tl.to(line, { opacity: 1, scale: 1, filter: "blur(0px)", duration: 1 }, i * 0.9);
        if (i > 0) tl.to(lines[i - 1], { opacity: 0.14, scale: 0.96, filter: "blur(3px)", duration: 1 }, i * 0.9);
      });
    }, wrap);

    return () => ctx.revert();
  }, []);

  return (
    <section id="manifesto" ref={wrapRef} className="relative h-screen bg-noir-950 overflow-hidden">
      <img
        ref={bgRef}
        src={images.manifestoBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-25 will-change-transform"
      />
      <div className="absolute inset-0 bg-noir-950/70" />

      <div className="relative z-10 h-full flex flex-col justify-center container-axiome">
        <div className="eyebrow mb-8">{MANIFESTO.eyebrow}</div>
        <div className="space-y-2">
          {MANIFESTO.lines.map((line, i) => (
            <div
              key={line}
              ref={(el) => {
                lineRefs.current[i] = el;
              }}
              className="font-display text-[2.4rem] sm:text-[3.4rem] md:text-[4.6rem] leading-[1.05] text-ivoire text-balance origin-left"
            >
              {line}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
