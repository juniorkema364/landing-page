import { useLayoutEffect, useRef, type ReactNode } from "react";
import { gsap } from "../../lib/gsap";

interface RevealProps {
  children: ReactNode;
  as?: "div" | "span";
  delay?: number;
  y?: number;
  duration?: number;
  className?: string;
  start?: string;
  /** Skip ScrollTrigger and just play on mount — for above-the-fold content whose
   * position may already be past a scroll-percentage start point at load. */
  immediate?: boolean;
}

export default function Reveal({
  children,
  as = "div",
  delay = 0,
  y = 32,
  duration = 1,
  className = "",
  start = "top 85%",
  immediate = false,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration,
          delay,
          ease: "power3.out",
          ...(immediate
            ? {}
            : {
                scrollTrigger: {
                  trigger: el,
                  start,
                  toggleActions: "play none none reverse",
                },
              }),
        }
      );
    }, ref);
    return () => ctx.revert();
  }, [delay, y, duration, start, immediate]);

  const Tag = as;
  return (
    <Tag ref={ref as never} className={className}>
      {children}
    </Tag>
  );
}
