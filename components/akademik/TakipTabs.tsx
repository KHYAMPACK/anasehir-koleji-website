"use client";

import { useState } from "react";
import { ChartColumnBig, ChevronDown, ClipboardCheck, Laptop, Target, TrendingUp } from "lucide-react";
import { akademikTakip } from "@/lib/akademikTakip";

const icons = [Laptop, ChartColumnBig, Target, TrendingUp, ClipboardCheck];

/**
 * The 5 "Sistemli Takip" items. Desktop: list on the left, selected item's
 * text in a panel on the right. Phones/tablets: accordion.
 */
export function TakipTabs() {
  const [active, setActive] = useState(0);
  const steps = akademikTakip.steps;
  const current = steps[active];
  const CurrentIcon = icons[active];

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-8">
      <ol className="grid gap-2" role="tablist" aria-orientation="vertical">
        {steps.map((s, i) => {
          const on = i === active;
          const Icon = icons[i];
          return (
            <li key={s.title}>
              <button
                type="button"
                role="tab"
                aria-selected={on}
                aria-expanded={on}
                onClick={() => setActive(i)}
                className={`flex w-full items-center gap-4 rounded-[14px] px-4 py-3.5 text-left transition-[background-color,box-shadow] duration-300 ${
                  on ? "bg-ink shadow-md" : "bg-panel shadow-sm hover:bg-blue-soft/60"
                }`}
              >
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
                    on ? "bg-red text-white" : "bg-blue-soft text-blue"
                  }`}
                >
                  <Icon className="h-[1.1rem] w-[1.1rem]" strokeWidth={1.9} aria-hidden />
                </span>
                <span
                  className="display flex-1 text-[0.98rem] leading-snug font-semibold"
                  style={{ color: on ? "#fff" : "#14233a" }}
                >
                  <span className={`mr-2 tabular-nums ${on ? "text-white/50" : "text-blue/40"}`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {s.title}
                </span>
                <ChevronDown
                  className={`h-4 w-4 shrink-0 transition-transform duration-300 lg:hidden ${on ? "rotate-180 text-white" : "text-muted"}`}
                  aria-hidden
                />
              </button>

              <div
                className={`grid transition-[grid-template-rows,opacity] duration-500 lg:hidden ${
                  on ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="space-y-2.5 px-4 pt-3 pb-2 text-[0.95rem] leading-relaxed text-muted">
                    {s.paragraphs.map((p) => (
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
          className="relative h-full overflow-hidden rounded-[20px] bg-panel p-8 shadow-sm ring-1 ring-line/40 motion-safe:animate-[takip-in_400ms_ease-out_both]"
        >
          <span className="absolute inset-y-0 left-0 w-1.5 bg-red" aria-hidden />
          <div className="flex items-center justify-between">
            <span className="flex h-14 w-14 items-center justify-center rounded-[16px] bg-blue text-white">
              <CurrentIcon className="h-7 w-7" strokeWidth={1.7} aria-hidden />
            </span>
            <span className="display text-5xl font-semibold text-blue/20">{String(active + 1).padStart(2, "0")}</span>
          </div>
          <h4 className="display mt-5 text-2xl font-semibold tracking-tight text-ink">{current.title}</h4>
          <div className="mt-4 space-y-3 text-[1.02rem] leading-[1.65] text-muted">
            {current.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
        <style>{`@keyframes takip-in { from { opacity: 0; transform: translateY(8px) } to { opacity: 1; transform: none } }`}</style>
      </div>
    </div>
  );
}
