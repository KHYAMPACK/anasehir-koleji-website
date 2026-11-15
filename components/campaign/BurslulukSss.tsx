import { LegalDocument } from "@/components/legal/LegalDocument";
import { readSss } from "@/lib/sss";

/**
 * Bursluluk Sınavı SSS on /bursluluk — client text in
 * content/bursluluk-sss.md, four groups of expandable questions.
 * Server component: plain <details>, no client JS.
 */
export function BurslulukSss() {
  const categories = readSss("bursluluk-sss.md");
  return (
    <div className="grid gap-10">
      {categories.map((c) => (
        <div key={c.slug} id={`bursluluk-${c.slug}`} className="scroll-mt-[calc(var(--header)+1rem)]">
          <h3 className="display flex items-baseline gap-3 text-xl font-bold text-ink sm:text-2xl">
            <span className="text-sm font-bold text-red">{c.num}</span>
            {c.title}
          </h3>
          <ul className="mt-4 divide-y divide-line overflow-hidden rounded-[18px] bg-panel shadow-sm ring-1 ring-line/60">
            {c.items.map((it) => (
              <li key={it.id}>
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 px-5 py-4 hover:bg-canvas/40 sm:px-6 [&::-webkit-details-marker]:hidden">
                    <span className="display font-semibold text-ink sm:text-[1.05rem]">
                      <span className="mr-2 text-muted">{it.n}.</span>
                      {it.question}
                    </span>
                    <span className="mt-0.5 text-xl leading-none text-muted transition-transform group-open:rotate-45" aria-hidden>
                      +
                    </span>
                  </summary>
                  <div className="px-5 pb-5 sm:px-6 [&_.legal-doc]:max-w-none">
                    <LegalDocument blocks={it.blocks} skipTitle={false} />
                  </div>
                </details>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
