import type Lenis from "lenis";

let instance: Lenis | null = null;

export function setLenisInstance(lenis: Lenis | null) {
  instance = lenis;
}

export function scrollToId(id: string) {
  const target = document.getElementById(id);
  if (!target) return;
  if (instance) {
    instance.scrollTo(target, { offset: 0, duration: 1.4 });
  } else {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
