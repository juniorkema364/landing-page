import { useRef, type ReactNode, type MouseEvent } from "react";
import { gsap } from "../../lib/gsap";

interface MagneticProps {
  children: ReactNode;
  className?: string;
  strength?: number;
}

export default function Magnetic({ children, className = "", strength = 0.35 }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * strength;
    const y = (e.clientY - rect.top - rect.height / 2) * strength;
    gsap.to(el, { x, y, duration: 0.4, ease: "power3.out" });
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.4)" });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`inline-block will-change-transform ${className}`}
    >
      {children}
    </div>
  );
}
