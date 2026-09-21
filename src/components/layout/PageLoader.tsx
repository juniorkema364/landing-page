import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "../../lib/gsap";
import { BRAND } from "../../data/content";

interface PageLoaderProps {
  onComplete: () => void;
}

export default function PageLoader({ onComplete }: PageLoaderProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const countRef = useRef<HTMLSpanElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const [done, setDone] = useState(false);

  useLayoutEffect(() => {
    const counter = { val: 0 };
    const tl = gsap.timeline({
      onComplete: () => {
        const exit = gsap.timeline({
          onComplete: () => {
            setDone(true);
            onComplete();
          },
        });
        exit
          .to(barRef.current, {
            scaleX: 1,
            transformOrigin: "left",
            duration: 0.35,
            ease: "power2.in",
          })
          .to(
            rootRef.current,
            { yPercent: -100, duration: 1, ease: "power4.inOut" },
            "-=0.05"
          );
      },
    });

    tl.to(counter, {
      val: 100,
      duration: 1.9,
      ease: "power2.inOut",
      onUpdate: () => {
        if (countRef.current)
          countRef.current.textContent = Math.floor(counter.val).toString().padStart(3, "0");
        if (barRef.current) barRef.current.style.transform = `scaleX(${counter.val / 100})`;
      },
    });

    return () => {
      tl.kill();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (done) return null;

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[999] bg-noir-950 flex flex-col items-center justify-center noise-overlay"
      aria-hidden="true"
    >
      <div className="relative flex flex-col items-center gap-8">
        <div className="eyebrow">Maison de prestige</div>
        <div className="font-display text-6xl text-ivoire tracking-[0.02em]">{BRAND.name}</div>
        <div className="flex items-center gap-4">
          <div className="w-[240px] h-px bg-noir-600 overflow-hidden relative">
            <div
              ref={barRef}
              className="absolute inset-0 bg-or-500"
              style={{ transform: "scaleX(0)", transformOrigin: "left" }}
            />
          </div>
          <span ref={countRef} className="text-sm tabular-nums text-or-400">
            000
          </span>
        </div>
      </div>
    </div>
  );
}
