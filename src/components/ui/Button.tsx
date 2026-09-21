import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/utils";
import Magnetic from "./Magnetic";

interface BaseProps {
  children: ReactNode;
  variant?: "gold" | "ghost";
  className?: string;
}

type ButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };
type LinkProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export default function Button(props: ButtonProps | LinkProps) {
  const { children, variant = "gold", className, ...rest } = props;

  const styles = cn(
    "group relative inline-flex items-center gap-3 px-8 py-4 text-sm tracking-[0.14em] uppercase font-medium transition-colors duration-300",
    variant === "gold"
      ? "bg-or-500 text-noir-950 hover:bg-or-400"
      : "border border-or-500/50 text-ivoire hover:border-or-400",
    className
  );

  const content = (
    <>
      <span>{children}</span>
      <span
        aria-hidden
        className="inline-block h-px w-6 bg-current transition-all duration-300 group-hover:w-10"
      />
    </>
  );

  return (
    <Magnetic>
      {"href" in props && props.href ? (
        <a href={props.href} className={styles} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
          {content}
        </a>
      ) : (
        <button className={styles} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
          {content}
        </button>
      )}
    </Magnetic>
  );
}
