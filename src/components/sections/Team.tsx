import { TEAM } from "../../data/content";
import { team } from "../../data/images";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";

export default function Team() {
  return (
    <section id="equipe" className="relative bg-noir-950 py-28 md:py-40">
      <div className="container-axiome">
        <SectionHeading
          index="06"
          eyebrow="L'équipe"
          title={"Des visages,\npas des vendeurs."}
          description="Quatre experts, une seule exigence : ne jamais proposer ce qu'ils n'achèteraient pas eux-mêmes."
        />

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {TEAM.map((member, i) => (
            <Reveal key={member.name} delay={i * 0.1} className="group">
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                <img
                  src={team[member.image]}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-noir-950/10 group-hover:bg-transparent transition-colors duration-700" />
              </div>
              <div className="mt-4">
                <h3 className="font-display text-xl text-ivoire">{member.name}</h3>
                <p className="text-xs uppercase tracking-[0.1em] text-ivoire-dim/70 mt-1">{member.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
