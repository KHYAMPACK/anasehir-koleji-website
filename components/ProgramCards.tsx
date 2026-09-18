import type { ProgramPoint } from "@/lib/programs";

/**
 * Short point cards (title + one line) — the site-wide pattern for
 * PDF-sourced program content. Deliberately not a paragraph component:
 * every card is a title plus a single short sentence.
 */
export function ProgramCards({
  points,
  dark = false,
  titlesOnly = false,
}: {
  points: readonly ProgramPoint[];
  dark?: boolean;
  /** Show numbered titles only — no secondary line. */
  titlesOnly?: boolean;
}) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {points.map((p, i) => (
        <article
          key={p.title}
          className={`rounded-[14px] ${
            titlesOnly ? "flex min-h-[8.5rem] flex-col justify-between p-6 sm:min-h-[9.5rem] sm:p-7" : "p-5"
          } ${dark ? "bg-white/10 ring-1 ring-white/15" : "bg-panel shadow-sm"}`}
        >
          <span className="display text-xs font-semibold tracking-[0.14em] text-red">
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3
            className={`display font-semibold tracking-tight ${
              titlesOnly
                ? `mt-4 text-xl leading-snug sm:text-2xl ${dark ? "text-white" : "text-ink"}`
                : `mt-2 text-base ${dark ? "text-white" : "text-ink"}`
            }`}
          >
            {p.title}
          </h3>
          {!titlesOnly && (
            <p className={`mt-1 text-sm ${dark ? "text-white/70" : "text-muted"}`}>{p.text}</p>
          )}
        </article>
      ))}
    </div>
  );
}

/** Honest placeholder for pages with no verified content yet — never invented facts. */
export function ComingSoon({ note }: { note?: string }) {
  return (
    <div className="rounded-[14px] border border-dashed border-line bg-panel-2/60 p-6 text-sm text-muted">
      <span className="display block text-ink">İçerik güncellenecek</span>
      {note ?? "Bu bölümün metni okuldan gelen bilgilerle güncellenecek."}
    </div>
  );
}
