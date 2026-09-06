export type SectionTone = "ice" | "navy" | "blush" | "paper";

const toneClass: Record<SectionTone, string> = {
  ice: "tone-ice",
  navy: "tone-navy",
  blush: "tone-blush",
  paper: "tone-paper",
};

export function PageHero({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <div className="tone-navy relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-30 grid-paper" />
      <div className="relative mx-auto max-w-[1180px] px-4 py-16 sm:px-6 sm:py-20 lg:px-10">
        <div className="flex gap-5">
          <span className="mt-1 hidden h-16 w-1.5 shrink-0 rounded-full bg-red sm:block" />
          <div>
            <p className="eyebrow">{eyebrow}</p>
            <h1 className="display mt-3 max-w-[20ch] text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              {title}
            </h1>
            {lead && <p className="mt-4 max-w-[62ch] text-white/70">{lead}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Section({
  id,
  eyebrow,
  title,
  lead,
  children,
  tone = "ice",
  panel = false,
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  lead?: string;
  children: React.ReactNode;
  tone?: SectionTone;
  /** @deprecated use tone */
  panel?: boolean;
}) {
  const resolved: SectionTone = panel && tone === "ice" ? "paper" : tone;

  return (
    <section
      id={id}
      className={`${toneClass[resolved]} py-[clamp(2.6rem,5vw,4.2rem)] ${id ? "scroll-mt-[calc(var(--header)+0.75rem)]" : ""}`}
    >
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-10">
        {(eyebrow || title) && (
          <div className="mb-8 max-w-[52rem]">
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            {title && (
              <h2 className="display mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                {title}
              </h2>
            )}
            {lead && <p className="mt-3 max-w-[62ch] text-muted">{lead}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
