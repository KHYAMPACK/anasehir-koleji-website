"use client";

import { useState } from "react";
import { CalendarClock } from "lucide-react";
import { olcmeLevels } from "@/lib/olcmeDegerlendirme";

/**
 * "Her Kademede Gelişime Uygun Değerlendirme": one tab per level, ordered
 * from Anaokulu to 8. sınıf. Each tab shows its assessment rhythm; the panel
 * shows the client's text for that level.
 */
export function LevelTabs() {
  const [active, setActive] = useState(0);
  const current = olcmeLevels[active];

  return (
    <div>
      <div
        role="tablist"
        aria-label="Kademeler"
        className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6"
      >
        {olcmeLevels.map((l, i) => {
          const on = i === active;
          return (
            <button
              key={l.grades}
              type="button"
              role="tab"
              aria-selected={on}
              onClick={() => setActive(i)}
              className={`relative flex flex-col items-start rounded-[14px] px-4 py-3.5 text-left transition-[background-color,box-shadow,transform] duration-300 ${
                on ? "-translate-y-0.5 bg-ink shadow-md" : "bg-panel shadow-sm hover:bg-blue-soft/60"
              }`}
            >
              <span
                className={`text-[0.7rem] font-bold tracking-[0.12em] uppercase ${on ? "text-white/60" : "text-muted"}`}
                style={on ? { color: "rgba(255,255,255,0.6)" } : undefined}
              >
                {l.stage}
              </span>
              <span
                className={`display mt-0.5 text-[1.02rem] font-semibold ${on ? "text-white" : "text-ink"}`}
                style={on ? { color: "#fff" } : undefined}
              >
                {l.grades}
              </span>
              <span
                className={`mt-2 inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[0.68rem] font-semibold ${
                  l.rhythm
                    ? on
                      ? "bg-red text-white"
                      : "bg-red/10 text-red"
                    : on
                      ? "bg-white/15 text-white"
                      : "bg-blue-soft text-ink"
                }`}
              >
                {l.rhythm ?? "Gözlem odaklı"}
              </span>
            </button>
          );
        })}
      </div>

      <div
        key={active}
        role="tabpanel"
        className="mt-5 grid gap-6 rounded-[20px] bg-panel p-6 shadow-sm ring-1 ring-line/40 motion-safe:animate-[level-in_400ms_ease-out_both] sm:p-8 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:gap-10"
      >
        <div>
          <p className="eyebrow">
            {current.stage} · {current.grades}
          </p>
          <h4 className="display mt-2 text-2xl leading-snug font-semibold tracking-tight text-ink">{current.subtitle}</h4>
          {current.rhythm && (
            <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-red/10 px-3 py-1.5 text-sm font-semibold text-red">
              <CalendarClock className="h-4 w-4" strokeWidth={2} aria-hidden />
              {current.rhythm}
            </p>
          )}
        </div>
        <div className="space-y-3 text-[1.02rem] leading-[1.65] text-muted">
          {current.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </div>
      <style>{`@keyframes level-in { from { opacity: 0; transform: translateY(8px) } to { opacity: 1; transform: none } }`}</style>
    </div>
  );
}
