import type { SectionTone } from "./PageHero";

export function firstSentence(p: string) {
  const i = p.indexOf(". ");
  if (i === -1) return { lead: p, rest: "" };
  return { lead: p.slice(0, i + 1), rest: p.slice(i + 2) };
}

/** Two fills = two columns. Never a 3-step cycle on a 2-col grid. */
const columns: Record<SectionTone, [string, string]> = {
  ice: ["bg-panel", "bg-ink text-white"],
  paper: ["bg-blush", "bg-ink text-white"],
  blush: ["bg-panel", "bg-ink text-white"],
  navy: ["bg-white/12 text-white", "bg-red text-white"],
};

export function ProseCards({
  paragraphs,
  tone = "ice",
}: {
  paragraphs: readonly string[];
  tone?: SectionTone;
}) {
  const [left, right] = columns[tone];
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {paragraphs.map((p, i) => {
        const { lead, rest } = firstSentence(p);
        return (
          <article
            key={p.slice(0, 28)}
            className={`rounded-[14px] p-5 ${i % 2 === 0 ? left : right}`}
          >
            <p className="display text-lg font-semibold leading-snug">{lead}</p>
            {rest ? (
              <p className="mt-3 text-sm leading-relaxed opacity-80">{rest}</p>
            ) : null}
          </article>
        );
      })}
    </div>
  );
}
