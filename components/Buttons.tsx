import Link from "next/link";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold no-underline transition-transform duration-200 ease-out";

export function BtnPrimary({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`${base} bg-red text-white shadow-[0_8px_24px_rgba(200,16,46,0.28)] hover:-translate-y-0.5 hover:bg-red-hover`}
    >
      {children}
    </Link>
  );
}

export function BtnGhost({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`${base} border border-blue text-blue hover:-translate-y-0.5 hover:border-ink hover:text-ink`}
    >
      {children}
    </Link>
  );
}

export function BtnLine({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`${base} border border-line text-ink hover:-translate-y-0.5 hover:border-ink`}
    >
      {children}
    </Link>
  );
}
