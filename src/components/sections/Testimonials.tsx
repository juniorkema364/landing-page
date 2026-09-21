import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Quote } from "lucide-react";
import { TESTIMONIALS } from "../../data/content";
import Reveal from "../ui/Reveal";

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((v) => (v + 1) % TESTIMONIALS.length), 6000);
    return () => clearInterval(id);
  }, []);

  const current = TESTIMONIALS[active];

  return (
    <section className="relative bg-noir-900 py-28 md:py-40 border-y border-noir-700">
      <div className="container-axiome max-w-4xl">
        <Reveal className="eyebrow mb-10">Paroles de clients</Reveal>

        <div className="relative min-h-[240px] md:min-h-[200px]">
          <Quote className="text-or-500/30 mb-6" size={48} />
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="font-display text-2xl md:text-3xl text-ivoire leading-snug text-balance">
                « {current.quote} »
              </p>
              <div className="mt-8">
                <span className="text-or-400 uppercase tracking-[0.1em] text-sm">{current.author}</span>
                <span className="text-ivoire-dim text-sm"> — {current.role}</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-12 flex gap-3">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Témoignage ${i + 1}`}
              className={`h-px transition-all duration-300 ${
                active === i ? "w-10 bg-or-400" : "w-5 bg-noir-600"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
