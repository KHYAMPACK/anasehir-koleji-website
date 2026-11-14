"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { egitimProgrami } from "@/lib/anaokulu";
import { anaokuluIcons } from "./icons";

/**
 * Eğitim Programımız (12 items). Desktop: icon list left, selected item's
 * text right. Phones/tablets: the list works as an accordion.
 */
export function ProgramTabs() {
  const [active, setActive] = useState(0);
  const cur = egitimProgrami[active];
  const CurIcon = anaokuluIcons[cur.icon];

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-8">
      <ol className="grid gap-2 sm:grid-cols-2 sm:gap-2.5 lg:grid-cols-1" role="tablist" aria-orientation="vertical">
        {egitimProgrami.map((it, i) => {
          const on = i === active;
          const Icon = anaokuluIcons[it.icon];
          return (
            <li key={it.title} className="sm:col-span-1">
              <button
                type="button"
                role="tab"
                aria-selected={on}
                aria-expanded={on}
                onClick={() => setActive(i)}
                className={`flex w-full items-center gap-3.5 rounded-[14px] px-3.5 py-3 text-left transition-[background-color,box-shadow] duration-300 ${
                  on ? "bg-ink shadow-md" : "bg-panel shadow-sm hover:bg-blue-soft/60"
                }`}
              >
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
                    on ? "bg-red text-white" : "bg-blue-soft text-blue"
                  }`}
                >
                  <Icon className="h-[1.1rem] w-[1.1rem]" strokeWidth={1.8} aria-hidden />
                </span>
                <span className="display flex-1 text-[0.95rem] leading-snug font-semibold" style={{ color: on ? "#fff" : "#14233a" }}>
                  {it.title}
                </span>
                <ChevronDown
                  className={`h-4 w-4 shrink-0 transition-transform duration-300 lg:hidden ${on ? "rotate-180" : ""}`}
                  style={{ color: on ? "#fff" : "#3d4f6b" }}
                  aria-hidden
                />
              </button>
              {/* phones/tablets: inline text */}
              <div
                className={`grid transition-[grid-template-rows,opacity] duration-500 lg:hidden ${
                  on ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="space-y-2.5 px-3.5 pt-3 pb-2 text-[0.95rem] leading-relaxed text-muted">
                    {it.subtitle && <p className="font-semibold text-ink">{it.subtitle}</p>}
                    {it.paragraphs.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ol>

      <div className="relative hidden lg:block" aria-live="polite">
        <div
          key={active}
          className="sticky top-[calc(var(--header)+2rem)] rounded-[20px] bg-panel p-8 shadow-sm ring-1 ring-line/40 motion-safe:animate-[prog-in_400ms_ease-out_both]"
        >
          <div className="flex items-center justify-between">
            <span className="flex h-14 w-14 items-center justify-center rounded-[16px] bg-red text-white">
              <CurIcon className="h-7 w-7" strokeWidth={1.7} aria-hidden />
            </span>
            <span className="display text-4xl font-semibold text-blue/25">{String(active + 1).padStart(2, "0")}</span>
          </div>
          <h3 className="display mt-5 text-2xl font-semibold tracking-tight text-ink">{cur.title}</h3>
          {cur.subtitle && <p className="mt-1 font-semibold text-red">{cur.subtitle}</p>}
          <div className="mt-4 space-y-3 text-[1.02rem] leading-[1.65] text-muted">
            {cur.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
        <style>{`@keyframes prog-in { from { opacity: 0; transform: translateY(8px) } to { opacity: 1; transform: none } }`}</style>
      </div>
    </div>
  );
}
