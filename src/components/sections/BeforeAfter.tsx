import { useLayoutEffect, useRef, useState, type PointerEvent } from "react";
import { MoveHorizontal } from "lucide-react";
import { gsap } from "../../lib/gsap";
import { BEFORE_AFTER } from "../../data/content";
import { images } from "../../data/images";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";

export default function BeforeAfter() {
  const [split, setSplit] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const sliderValueRef = useRef(50);

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const obj = { val: 8 };
    const ctx = gsap.context(() => {
      gsap.to(obj, {
        val: 50,
        duration: 1.4,
        ease: "power3.out",
        scrollTrigger: { trigger: container, start: "top 70%", once: true },
        onUpdate: () => setSplit(obj.val),
      });
    }, container);
    return () => ctx.revert();
  }, []);

  const updateFromClientX = (clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    const clamped = Math.min(96, Math.max(4, pct));
    sliderValueRef.current = clamped;
    setSplit(clamped);
  };

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    dragging.current = true;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    updateFromClientX(e.clientX);
  };
  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (!dragging.current) return;
    updateFromClientX(e.clientX);
  };
  const onPointerUp = () => {
    dragging.current = false;
  };

  return (
    <section className="relative bg-noir-950 py-24 md:py-36">
      <div className="container-axiome mb-16">
        <SectionHeading index="03" eyebrow={BEFORE_AFTER.eyebrow} title={BEFORE_AFTER.title} description={BEFORE_AFTER.text} />
      </div>

      <div className="container-axiome">
        <Reveal>
          <div
            ref={containerRef}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerLeave={onPointerUp}
            className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-sm cursor-ew-resize select-none touch-none"
          >
            <img src={images[BEFORE_AFTER.after]} alt="Le soir" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none"
              style={{ clipPath: `inset(0 ${100 - split}% 0 0)` }}
            >
              <img src={images[BEFORE_AFTER.before]} alt="Le jour" className="w-full h-full object-cover" />
            </div>

            <div className="absolute inset-y-0 pointer-events-none" style={{ left: `${split}%` }}>
              <div className="absolute inset-y-0 -translate-x-1/2 w-px bg-or-400/80" />
              <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-or-500 flex items-center justify-center text-noir-950 shadow-lg">
                <MoveHorizontal size={18} />
              </div>
            </div>

            <span className="absolute top-6 left-6 eyebrow bg-noir-950/60 backdrop-blur-sm px-3 py-1.5 pointer-events-none">Jour</span>
            <span className="absolute top-6 right-6 eyebrow bg-noir-950/60 backdrop-blur-sm px-3 py-1.5 pointer-events-none">Soir</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
