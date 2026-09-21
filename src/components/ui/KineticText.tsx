import { useLayoutEffect, useRef } from "react";
import { gsap } from "../../lib/gsap";

interface KineticTextProps {
  text: string;
  className?: string;
  lineClassName?: string;
  /** If true, animates immediately on mount (hero); otherwise on scroll into view. */
  immediate?: boolean;
  delay?: number;
  stagger?: number;
}

export default function KineticText({
  text,
  className = "",
  lineClassName = "",
  immediate = false,
  delay = 0,
  stagger = 0.12,
}: KineticTextProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const lines = text.split("\n");

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const spans = root.querySelectorAll<HTMLSpanElement>("[data-kinetic-line]");

    const ctx = gsap.context(() => {
      gsap.fromTo(
        spans,
        { yPercent: 110, rotate: 3 },
        {
          yPercent: 0,
          rotate: 0,
          duration: 1.1,
          delay,
          stagger,
          ease: "power4.out",
          ...(immediate
            ? {}
            : {
                scrollTrigger: {
                  trigger: root,
                  start: "top 80%",
                  toggleActions: "play none none reverse",
                },
              }),
        }
      );
    }, rootRef);

    return () => ctx.revert();
  }, [delay, stagger, immediate]);

  return (
    <div ref={rootRef} className={className}>
      {lines.map((line, i) => (
        <div key={i} className="overflow-hidden">
          <span
            data-kinetic-line
            className={`inline-block will-change-transform ${lineClassName}`}
          >
            {line}
          </span>
        </div>
      ))}
    </div>
  );
}
