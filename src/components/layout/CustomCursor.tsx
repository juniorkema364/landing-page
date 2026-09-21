import { useEffect, useRef } from "react";
import { gsap } from "../../lib/gsap";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const quickDot = {
      x: gsap.quickTo(dot, "x", { duration: 0.1, ease: "power3.out" }),
      y: gsap.quickTo(dot, "y", { duration: 0.1, ease: "power3.out" }),
    };
    const quickRing = {
      x: gsap.quickTo(ring, "x", { duration: 0.35, ease: "power3.out" }),
      y: gsap.quickTo(ring, "y", { duration: 0.35, ease: "power3.out" }),
    };

    const move = (e: MouseEvent) => {
      quickDot.x(e.clientX);
      quickDot.y(e.clientY);
      quickRing.x(e.clientX);
      quickRing.y(e.clientY);
    };

    const onEnter = () => gsap.to(ring, { width: 70, height: 70, duration: 0.3 });
    const onLeave = () => gsap.to(ring, { width: 40, height: 40, duration: 0.3 });

    window.addEventListener("mousemove", move);

    const attach = () => {
      document.querySelectorAll("a, button, [data-cursor='hover']").forEach((el) => {
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
    };
    attach();
    const observer = new MutationObserver(attach);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", move);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
