import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";
import { LegalDocument } from "@/components/legal/LegalDocument";
import { readSss } from "@/lib/sss";

/** Questions shown on the homepage (numbers from content/sss.md). */
const FEATURED = [1, 6, 26, 36];

/**
 * Homepage teaser for /sss, right under the hero: search box (submits to
 * /sss?q=…) and four common questions expandable in place.
 */
export function SssTeaser() {
  const categories = readSss();
  const all = categories.flatMap((c) => c.items);
  const featured = FEATURED.map((n) => all.find((it) => it.n === n)).filter((it) => it !== undefined);

  return (
    <section className="tone-paper py-[clamp(3rem,6vw,5rem)]">
      <div className="mx-auto grid max-w-[1180px] gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-14 lg:px-10">
        <div>
          <p className="text-sm font-bold tracking-[0.14em] text-red uppercase">Veli Rehberi</p>
          <h2 className="display mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Sıkça Sorulan Sorular</h2>

          <form action="/sss" className="mt-6 flex items-center gap-2 rounded-[16px] bg-canvas/60 p-2 ring-1 ring-line focus-within:ring-2 focus-within:ring-blue">
            <Search className="ml-2 h-5 w-5 shrink-0 text-muted" aria-hidden />
            <label htmlFor="sss-ara" className="sr-only">Soru ara</label>
            <input
              id="sss-ara"
              name="q"
              type="search"
              placeholder="Merak ettiğiniz konuyu arayın…"
              className="min-w-0 flex-1 bg-transparent py-2 text-ink outline-none placeholder:text-muted/70"
            />
            <button type="submit" className="min-h-[44px] rounded-[12px] bg-ink px-4 text-sm font-semibold text-white hover:bg-ink/90">
              Ara
            </button>
          </form>

        </div>

        <div>
          <ul className="divide-y divide-line overflow-hidden rounded-[18px] bg-panel shadow-sm ring-1 ring-line/60">
            {featured.map((it) => (
              <li key={it.id}>
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 px-5 py-4 hover:bg-canvas/40 sm:px-6 [&::-webkit-details-marker]:hidden">
                    <span className="display font-semibold text-ink">{it.question}</span>
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
          <Link href="/sss" className="mt-5 inline-flex items-center gap-2 font-semibold text-blue no-underline">
            Tüm soruları görün <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
