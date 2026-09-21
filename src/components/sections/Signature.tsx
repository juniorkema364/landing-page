import { Suspense, useLayoutEffect, useRef } from "react";
import { gsap } from "../../lib/gsap";
import { isWebGLAvailable } from "../../lib/webgl";
import CanvasBoundary from "../CanvasBoundary";
import Scene from "../../three/Scene";

const LINES = [
  "Ce que l'or ne peut acheter,",
  "nous le trouvons pour vous.",
  "AXIOME — depuis 2009.",
];

interface SignatureProps {
  motion: boolean;
  isMobile: boolean;
}

export default function Signature({ motion, isMobile }: SignatureProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const progressRef = useRef(0);
  const lineRefs = useRef<(HTMLDivElement | null)[]>([]);
  const showCanvas = isWebGLAvailable();

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const lines = lineRefs.current.filter(Boolean) as HTMLDivElement[];
      gsap.set(lines, { opacity: 0, y: 40 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=280%",
          scrub: 0.7,
          pin: true,
          onUpdate: (self) => {
            progressRef.current = self.progress;
          },
        },
      });

      lines.forEach((line, i) => {
        tl.to(line, { opacity: 1, y: 0, duration: 0.6 }, i * 0.9 + 0.2);
        tl.to(line, { opacity: 0, y: -40, duration: 0.5 }, i * 0.9 + 0.75);
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen overflow-hidden bg-noir-950">
      <div className="absolute inset-0">
        {showCanvas ? (
          <CanvasBoundary fallback={<div className="w-full h-full bg-noir-950" />}>
            <Suspense fallback={<div className="w-full h-full bg-noir-950" />}>
              <Scene progressRef={progressRef} motion={motion} isMobile={isMobile} />
            </Suspense>
          </CanvasBoundary>
        ) : (
          <div className="w-full h-full bg-noir-950" />
        )}
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-noir-950 via-transparent to-noir-950/40 pointer-events-none" />

      <div className="relative z-10 h-full container-axiome pointer-events-none">
        {LINES.map((line, i) => (
          <div
            key={line}
            ref={(el) => {
              lineRefs.current[i] = el;
            }}
            className="absolute inset-0 flex items-center justify-center text-center font-display text-[2.2rem] md:text-[4rem] text-ivoire text-balance"
          >
            {line}
          </div>
        ))}
      </div>
    </section>
  );
}
