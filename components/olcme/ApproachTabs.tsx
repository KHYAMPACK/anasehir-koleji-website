"use client";

import { useState } from "react";
import { ArrowDown, ChevronDown } from "lucide-react";
import { olcmeApproach } from "@/lib/olcmeDegerlendirme";

/**
 * The 8 "Ölçme ve Değerlendirme Yaklaşımımız" items.
 * Desktop: numbered list on the left, the selected item's text on the right.
 * Phones/tablets: the same list works as an accordion (text opens inline).
 */
export function ApproachTabs() {
  const [active, setActive] = useState(0);
  const current = olcmeApproach[active];

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-8">
      <ol className="grid gap-2" role="tablist" aria-orientation="vertical">
        {olcmeApproach.map((a, i) => {
          const on = i === active;
          return (
            <li key={a.title}>
              <button
                type="button"
                role="tab"
                aria-selected={on}
                aria-expanded={on}
                onClick={() => setActive(i)}
                className={`group flex w-full items-center gap-4 rounded-[14px] px-4 py-3.5 text-left transition-[background-color,box-shadow] duration-300 ${
                  on ? "bg-ink shadow-md" : "bg-panel shadow-sm hover:bg-blue-soft/60"
                }`}
              >
                <span
                  className={`display flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-semibold transition-colors duration-300 ${
                    on ? "bg-red text-white" : "bg-blue-soft text-ink"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className={`display flex-1 text-[0.98rem] leading-snug font-semibold transition-colors duration-300 ${
                    on ? "text-white" : "text-ink"
                  }`}
                  style={on ? { color: "#fff" } : undefined}
                >
                  {a.title}
                </span>
                <ChevronDown
                  className={`h-4 w-4 shrink-0 transition-transform duration-300 lg:hidden ${on ? "rotate-180 text-white" : "text-muted"}`}
                  aria-hidden
                />
              </button>

              {/* Phones/tablets: text opens inline under the item */}
              <div
                className={`grid transition-[grid-template-rows,opacity] duration-500 lg:hidden ${
                  on ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="space-y-2.5 px-4 pt-3 pb-2 text-[0.95rem] leading-relaxed text-muted">
                    {a.paragraphs.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                    {a.pointsToLevels && <LevelsLink />}
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ol>

      {/* Desktop panel */}
      <div className="relative hidden lg:block" aria-live="polite">
        <div
          key={active}
          className="sticky top-[calc(var(--header)+5rem)] rounded-[20px] bg-panel p-8 shadow-sm ring-1 ring-line/40 motion-safe:animate-[olcme-in_400ms_ease-out_both]"
        >
          <span className="display text-5xl font-semibold text-blue/25">{String(active + 1).padStart(2, "0")}</span>
          <h4 className="display mt-3 text-2xl font-semibold tracking-tight text-ink">{current.title}</h4>
          <div className="mt-4 space-y-3 text-[1.02rem] leading-[1.65] text-muted">
            {current.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          {current.pointsToLevels && (
            <div className="mt-5">
              <LevelsLink />
            </div>
          )}
        </div>
        <style>{`@keyframes olcme-in { from { opacity: 0; transform: translateY(8px) } to { opacity: 1; transform: none } }`}</style>
      </div>
    </div>
  );
}

function LevelsLink() {
  return (
    <a
      href="#olcme-kademeler"
      className="inline-flex items-center gap-2 text-sm font-semibold text-blue no-underline hover:underline"
    >
      Sınıf düzeylerine göre uygulamalar
      <ArrowDown className="h-4 w-4" strokeWidth={2} aria-hidden />
    </a>
  );
}
