import { BRAND, CONTACT, FOOTER_LINKS, NAV_LINKS } from "../../data/content";
import { scrollToId } from "../../lib/lenisSingleton";
import Reveal from "../ui/Reveal";
import KineticText from "../ui/KineticText";

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-noir-950 border-t border-noir-700 pt-28 pb-10 noise-overlay">
      <div className="container-axiome">
        <Reveal className="eyebrow mb-6">{CONTACT.eyebrow}</Reveal>
        <KineticText
          text={CONTACT.title}
          className="font-display leading-[0.98] text-ivoire max-w-3xl"
          lineClassName="text-[2.6rem] md:text-[4.2rem]"
        />
        <Reveal delay={0.2} className="mt-8 max-w-lg text-ivoire-dim text-lg">
          {CONTACT.text}
        </Reveal>

        <Reveal delay={0.3} className="mt-10 flex flex-wrap gap-8">
          <a href={`mailto:${CONTACT.email}`} className="text-or-400 text-lg border-b border-or-500/40 pb-1 hover:border-or-400">
            {CONTACT.email}
          </a>
          <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="text-ivoire text-lg border-b border-noir-600 pb-1 hover:border-or-400">
            {CONTACT.phone}
          </a>
        </Reveal>

        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-10 border-t border-noir-700 pt-12">
          <div>
            <div className="font-display text-xl text-ivoire mb-4">{BRAND.name}</div>
            <p className="text-sm text-ivoire-dim/70">{BRAND.city}</p>
          </div>
          <div>
            <div className="eyebrow mb-4">Sommaire</div>
            <ul className="space-y-2">
              {NAV_LINKS.slice(0, 4).map((l) => (
                <li key={l.id}>
                  <button onClick={() => scrollToId(l.id)} className="text-sm text-ivoire-dim hover:text-or-400">
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="eyebrow mb-4">Informations</div>
            <ul className="space-y-2">
              {FOOTER_LINKS.legal.map((l) => (
                <li key={l} className="text-sm text-ivoire-dim">{l}</li>
              ))}
            </ul>
          </div>
          <div>
            <div className="eyebrow mb-4">Suivez-nous</div>
            <ul className="space-y-2">
              {FOOTER_LINKS.social.map((l) => (
                <li key={l} className="text-sm text-ivoire-dim">{l}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col md:flex-row justify-between gap-4 text-xs text-ivoire-dim/50">
          <span>© {new Date().getFullYear()} {BRAND.name}. Tous droits réservés.</span>
          <span>Fondée en {BRAND.founded} — Discrétion absolue.</span>
        </div>
      </div>
    </footer>
  );
}
