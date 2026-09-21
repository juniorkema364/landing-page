import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { BRAND, NAV_LINKS } from "../../data/content";
import { scrollToId } from "../../lib/lenisSingleton";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    scrollToId(id);
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-noir-950/90 backdrop-blur-md border-b border-noir-700" : "bg-transparent"
        }`}
      >
        <div className="container-axiome flex items-center justify-between h-20">
          <button
            onClick={() => go("hero")}
            className="font-display text-2xl tracking-[0.08em] text-ivoire"
            data-cursor="hover"
          >
            {BRAND.name}
          </button>

          <nav className="hidden lg:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => go(link.id)}
                className="text-xs uppercase tracking-[0.16em] text-ivoire-dim hover:text-or-400 transition-colors"
                data-cursor="hover"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <button
            onClick={() => setOpen(true)}
            className="lg:hidden text-ivoire"
            aria-label="Ouvrir le menu"
            data-cursor="hover"
          >
            <Menu size={26} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[60] bg-noir-950 flex flex-col"
          >
            <div className="container-axiome flex items-center justify-between h-20">
              <span className="font-display text-2xl text-ivoire">{BRAND.name}</span>
              <button onClick={() => setOpen(false)} className="text-ivoire" aria-label="Fermer">
                <X size={26} />
              </button>
            </div>
            <nav className="flex-1 flex flex-col items-start justify-center gap-6 container-axiome">
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.06 }}
                  onClick={() => go(link.id)}
                  className="font-display text-4xl text-ivoire hover:text-or-400 transition-colors"
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
