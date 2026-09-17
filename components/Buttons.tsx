import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Size = "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold no-underline transition-all duration-200 ease-out active:scale-[0.98]";

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base sm:px-8 sm:py-4 sm:text-lg",
};

const iconSize: Record<Size, string> = {
  md: "h-4 w-4",
  lg: "h-5 w-5",
};

type BtnProps = {
  href: string;
  children: React.ReactNode;
  size?: Size;
  /** Set false to hide the trailing arrow (rare — most CTAs want it). */
  arrow?: boolean;
};

function Arrow({ size }: { size: Size }) {
  return (
    <ArrowRight
      className={`${iconSize[size]} shrink-0 transition-transform duration-200 ease-out group-hover:translate-x-1`}
      aria-hidden
    />
  );
}

export function BtnPrimary({ href, children, size = "md", arrow = true }: BtnProps) {
  return (
    <Link
      href={href}
      className={`btn-primary ${base} ${sizes[size]} bg-red text-white shadow-[0_10px_28px_rgba(200,16,46,0.32)] hover:-translate-y-1 hover:scale-[1.02] hover:bg-red-hover hover:shadow-[0_16px_36px_rgba(200,16,46,0.42)]`}
    >
      {children}
      {arrow && <Arrow size={size} />}
    </Link>
  );
}

export function BtnGhost({ href, children, size = "md", arrow = true }: BtnProps) {
  return (
    <Link
      href={href}
      className={`btn-ghost ${base} ${sizes[size]} border-2 border-blue text-blue hover:-translate-y-1 hover:scale-[1.02] hover:border-ink hover:text-ink hover:shadow-[0_12px_28px_rgba(20,35,58,0.14)]`}
    >
      {children}
      {arrow && <Arrow size={size} />}
    </Link>
  );
}

export function BtnLine({ href, children, size = "md", arrow = true }: BtnProps) {
  return (
    <Link
      href={href}
      className={`btn-line ${base} ${sizes[size]} border-2 border-line bg-ink/5 text-ink shadow-[0_4px_16px_rgba(20,35,58,0.06)] hover:-translate-y-1 hover:scale-[1.02] hover:border-ink hover:bg-ink/10 hover:shadow-[0_14px_32px_rgba(20,35,58,0.16)]`}
    >
      {children}
      {arrow && <Arrow size={size} />}
    </Link>
  );
}
