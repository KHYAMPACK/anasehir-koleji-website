"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  BarChart3,
  Bus,
  ChevronDown,
  ClipboardList,
  GraduationCap,
  HeartHandshake,
  MessagesSquare,
  Palette,
  Search,
  X,
  type LucideIcon,
} from "lucide-react";
import { LegalDocument } from "@/components/legal/LegalDocument";
import type { SssCategory, SssItem } from "@/lib/sss";

/** Icon per category number (content/sss.md order). */
const categoryIcons: Record<string, LucideIcon> = {
  "01": GraduationCap,
  "02": BarChart3,
  "03": HeartHandshake,
  "04": Palette,
  "05": Bus,
  "06": MessagesSquare,
  "07": ClipboardList,
};

/** Case- and Turkish-accent-insensitive: "ogretmen" finds "öğretmen". */
export const fold = (s: string) =>
  s
    .toLocaleLowerCase("tr")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/ı/g, "i");

function matches(it: SssItem, categoryTitle: string, terms: string[]) {
  const hay = fold(`${it.question} ${it.text} ${categoryTitle}`);
  // Turkish suffixes soften the last consonant (zorbalık → zorbalığı),
  // so longer words also match without their final letter.
  return terms.every((t) => hay.includes(t) || (t.length >= 5 && hay.includes(t.slice(0, -1))));
}

/** One expandable question row (used in the search panel and the full list). */
function QuestionRow({
  it,
  isOpen,
  onToggle,
  tag,
}: {
  it: SssItem;
  isOpen: boolean;
  onToggle: () => void;
  tag?: string;
}) {
  return (
    <li id={it.id} className="scroll-mt-[calc(var(--header)+1rem)]">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left hover:bg-canvas/40 sm:px-6"
      >
        <span>
          {tag && <span className="mb-1 block text-xs font-semibold tracking-wide text-red uppercase">{tag}</span>}
          <span className="display font-semibold text-ink sm:text-[1.05rem]">
            <span className="mr-2 text-muted">{it.n}.</span>
            {it.question}
          </span>
        </span>
        <ChevronDown className={`mt-1 h-5 w-5 shrink-0 text-muted transition-transform ${isOpen ? "rotate-180" : ""}`} aria-hidden />
      </button>
      {isOpen && (
        <div className="px-5 pb-5 sm:px-6 [&_.legal-doc]:max-w-none">
          <LegalDocument blocks={it.blocks} skipTitle={false} />
        </div>
      )}
    </li>
  );
}

/** Reads ?q= (from the homepage teaser) and remounts when it changes. */
export function SssExplorer({ categories }: { categories: SssCategory[] }) {
  const q = useSearchParams().get("q") ?? "";
  return <Explorer key={q} categories={categories} initialQuery={q} />;
}

function Explorer({ categories, initialQuery }: { categories: SssCategory[]; initialQuery: string }) {
  const [query, setQuery] = useState(initialQuery);
  const [category, setCategory] = useState<string | null>(null);
  const [open, setOpen] = useState<Set<string>>(new Set());

  const terms = useMemo(() => fold(query).split(/\s+/).filter(Boolean), [query]);
  const searching = terms.length > 0;

  /** Search results — shown in the panel that grows out of the search bar. */
  const hits = useMemo(
    () =>
      searching
        ? categories.flatMap((c) => c.items.filter((it) => matches(it, c.title, terms)).map((it) => ({ it, cat: c })))
        : [],
    [categories, searching, terms],
  );

  /** Full list below the categories — filtered by category only. */
  const listed = useMemo(
    () => categories.filter((c) => !category || c.slug === category),
    [categories, category],
  );
  const listedCount = listed.reduce((n, c) => n + c.items.length, 0);

  const toggle = (id: string) =>
    setOpen((s) => {
      const next = new Set(s);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  // Few hits → open them straight away.
  const autoOpen = hits.length > 0 && hits.length <= 2;

  return (
    <>
      {/* Search bar on the hero's bottom edge; it grows downward into a results panel. */}
      <div className="relative z-10 mx-auto -mt-8 max-w-[1180px] px-4 sm:px-6 lg:px-10">
        <div
          className={`overflow-hidden rounded-[20px] bg-panel ring-1 transition-[box-shadow,--tw-ring-color] duration-500 ${
            searching
              ? "shadow-[0_30px_70px_-20px_rgba(8,16,32,0.45)] ring-blue/60"
              : "shadow-[0_18px_40px_-14px_rgba(8,16,32,0.35)] ring-line focus-within:ring-2 focus-within:ring-blue"
          }`}
        >
          <label className="flex items-center gap-3 px-5 py-4">
            <Search className={`h-5 w-5 shrink-0 transition-colors ${searching ? "text-blue" : "text-muted"}`} aria-hidden />
            <span className="sr-only">Soru ara</span>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Escape" && setQuery("")}
              placeholder="Merak ettiğiniz konuyu arayın…"
              className="min-w-0 flex-1 bg-transparent text-base text-ink outline-none placeholder:text-muted/70 [&::-webkit-search-cancel-button]:hidden sm:text-lg"
              autoComplete="off"
              aria-controls="sss-sonuclar"
            />
            {query && (
              <button type="button" onClick={() => setQuery("")} aria-label="Aramayı temizle" className="rounded-full p-1 text-muted hover:text-ink">
                <X className="h-5 w-5" aria-hidden />
              </button>
            )}
          </label>

          {/* Height morph: grid rows 0fr → 1fr animates to the content's natural height. */}
          <div
            id="sss-sonuclar"
            className="grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{ gridTemplateRows: searching ? "1fr" : "0fr" }}
            aria-live="polite"
          >
            <div className="min-h-0 overflow-hidden">
              <div className="border-t border-line">
                <p className="px-5 pt-3 pb-1 text-xs font-semibold tracking-wide text-muted uppercase sm:px-6">
                  {hits.length > 0 ? `${hits.length} sonuç` : "Sonuç bulunamadı"}
                </p>
                {hits.length > 0 ? (
                  <ul className="max-h-[min(62vh,620px)] divide-y divide-line overflow-y-auto overscroll-contain">
                    {hits.map(({ it, cat }) => (
                      <QuestionRow
                        key={it.id}
                        it={it}
                        tag={cat.title}
                        isOpen={open.has(it.id) || autoOpen}
                        onToggle={() => toggle(it.id)}
                      />
                    ))}
                  </ul>
                ) : (
                  searching && (
                    <p className="px-5 pt-1 pb-5 text-sm text-muted sm:px-6">
                      Aradığınız soruyu bulamadık. Bize{" "}
                      <Link href="/kayit-iletisim#bize-ulasin" className="font-semibold text-blue underline">
                        iletişim formundan
                      </Link>{" "}
                      veya 444 69 61’den ulaşabilirsiniz.
                    </p>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="tone-ice py-[clamp(2.5rem,5vw,4rem)]">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-10">
          {/* Category filter */}
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {categories.map((c) => {
              const Icon = categoryIcons[c.num] ?? MessagesSquare;
              const on = category === c.slug;
              return (
                <li key={c.slug}>
                  <button
                    type="button"
                    onClick={() => setCategory(on ? null : c.slug)}
                    aria-pressed={on}
                    className={`flex h-full w-full flex-col items-start gap-3 rounded-[16px] p-4 text-left shadow-sm ring-1 transition-all sm:p-5 ${
                      on ? "bg-ink text-white ring-ink" : "bg-panel text-ink ring-line/60 hover:-translate-y-0.5 hover:ring-blue"
                    }`}
                  >
                    <Icon className={`h-6 w-6 ${on ? "text-blue" : "text-red"}`} strokeWidth={1.7} aria-hidden />
                    <span className="display text-sm leading-snug font-semibold sm:text-base">{c.title}</span>
                    <span className={`text-xs ${on ? "text-white/60" : "text-muted"}`}>{c.items.length} soru</span>
                  </button>
                </li>
              );
            })}
          </ul>

          <p className="mt-8 text-sm text-muted">
            {listedCount} soru
            {category && (
              <button type="button" onClick={() => setCategory(null)} className="ml-3 font-semibold text-blue underline">
                Tümünü göster
              </button>
            )}
          </p>

          {/* All questions, grouped by category */}
          <div className="mt-6 grid gap-10">
            {listed.map((c) => (
              <div key={c.slug} id={c.slug} className="scroll-mt-[calc(var(--header)+1rem)]">
                <h2 className="display flex items-baseline gap-3 text-xl font-bold text-ink sm:text-2xl">
                  <span className="text-sm font-bold text-red">{c.num}</span>
                  {c.title}
                </h2>
                <ul className="mt-4 divide-y divide-line overflow-hidden rounded-[18px] bg-panel shadow-sm">
                  {c.items.map((it) => (
                    <QuestionRow key={it.id} it={it} isOpen={open.has(it.id)} onToggle={() => toggle(it.id)} />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
