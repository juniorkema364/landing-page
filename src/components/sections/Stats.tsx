import { STATS } from "../../data/content";
import Counter from "../ui/Counter";
import Reveal from "../ui/Reveal";

export default function Stats() {
  return (
    <section className="relative bg-noir-900 border-y border-noir-700 py-24">
      <div className="container-axiome grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6">
        {STATS.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.1} className="text-center md:text-left">
            <Counter
              value={stat.value}
              suffix={stat.suffix}
              decimals={stat.decimals ?? 0}
              className="font-display text-4xl md:text-6xl text-or-400 block"
            />
            <p className="mt-3 text-xs md:text-sm uppercase tracking-[0.12em] text-ivoire-dim">
              {stat.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
