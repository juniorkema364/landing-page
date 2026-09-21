import { JOURNAL } from "../../data/content";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";

const doubledPress = [...JOURNAL.press, ...JOURNAL.press];

export default function Journal() {
  return (
    <section className="relative bg-noir-900 py-28 md:py-36 overflow-hidden border-y border-noir-700">
      <div className="container-axiome mb-16">
        <SectionHeading index="05" eyebrow={JOURNAL.eyebrow} title={JOURNAL.title} />
      </div>

      <div className="relative w-full overflow-hidden mb-20">
        <div className="flex w-max animate-marquee">
          {doubledPress.map((name, i) => (
            <span
              key={i}
              className="font-display text-3xl md:text-5xl text-noir-500 mx-8 md:mx-12 whitespace-nowrap tracking-[0.02em]"
            >
              {name}
            </span>
          ))}
        </div>
      </div>

      <div className="container-axiome grid md:grid-cols-3 gap-10">
        {JOURNAL.quotes.map((q, i) => (
          <Reveal key={q.source} delay={i * 0.1} className="border-t border-noir-700 pt-6">
            <p className="font-display text-xl text-ivoire leading-snug mb-4">{q.text}</p>
            <span className="eyebrow">{q.source}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
