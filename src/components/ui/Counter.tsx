import { useLayoutEffect, useRef } from "react";
import { gsap } from "../../lib/gsap";

interface CounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
}

export default function Counter({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  className = "",
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obj = { val: 0 };
    const ctx = gsap.context(() => {
      gsap.to(obj, {
        val: value,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        onUpdate: () => {
          if (el) el.textContent = prefix + obj.val.toFixed(decimals) + suffix;
        },
      });
    }, ref);
    return () => ctx.revert();
  }, [value, prefix, suffix, decimals]);

  return (
    <span ref={ref} className={className}>
      {prefix}0{suffix}
    </span>
  );
}
