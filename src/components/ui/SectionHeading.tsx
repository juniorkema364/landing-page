import Reveal from "./Reveal";
import KineticText from "./KineticText";

interface SectionHeadingProps {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "text-center mx-auto max-w-3xl" : ""}>
      <Reveal>
        <div
          className={`flex items-center gap-3 mb-6 eyebrow ${
            align === "center" ? "justify-center" : ""
          } ${light ? "text-noir-700" : ""}`}
        >
          <span>{index}</span>
          <span className="w-8 h-px" style={{ background: "var(--color-or-500)" }} />
          <span>{eyebrow}</span>
        </div>
      </Reveal>
      <KineticText
        text={title}
        className={`font-display leading-[0.98] text-balance ${
          light ? "text-noir-900" : "text-ivoire"
        }`}
        lineClassName="text-[2.4rem] md:text-[3.6rem]"
      />
      {description && (
        <Reveal delay={0.15} className={`mt-6 max-w-xl text-lg ${light ? "text-noir-600" : "text-ivoire-dim"}`}>
          {description}
        </Reveal>
      )}
    </div>
  );
}
