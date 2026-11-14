"use client";

import { useState } from "react";
import { yasGruplari } from "@/lib/anaokulu";

/** Yaş Gruplarımız: 3 / 4 / 5 yaş tabs, each with the client's text. */
export function AgeTabs() {
  const [active, setActive] = useState(0);
  const g = yasGruplari[active];

  return (
    <div>
      <div role="tablist" aria-label="Yaş grupları" className="grid grid-cols-3 gap-2 rounded-[18px] bg-panel p-2 shadow-sm ring-1 ring-line/50">
        {yasGruplari.map((y, i) => {
          const on = i === active;
          return (
            <button
              key={y.age}
              type="button"
              role="tab"
              aria-selected={on}
              onClick={() => setActive(i)}
              className={`flex flex-col items-center rounded-[14px] px-2 py-3 text-center transition-colors duration-300 sm:py-4 ${
                on ? "bg-ink shadow-md" : "hover:bg-blue-soft/60"
              }`}
            >
              <span className="display text-2xl font-semibold sm:text-3xl" style={{ color: on ? "#fff" : "#14233a" }}>
                {y.age}
              </span>
              <span
                className="mt-1 hidden text-xs font-semibold sm:block"
                style={{ color: on ? "rgba(255,255,255,0.7)" : "#3d4f6b" }}
              >
                {y.subtitle}
              </span>
            </button>
          );
        })}
      </div>

      <div
        key={active}
        role="tabpanel"
        className="mt-5 rounded-[20px] bg-panel p-6 shadow-sm ring-1 ring-line/40 motion-safe:animate-[age-in_400ms_ease-out_both] sm:p-9"
      >
        <p className="eyebrow">{g.age}</p>
        <h3 className="display mt-2 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">{g.subtitle}</h3>
        <div className="mt-6 grid gap-x-10 gap-y-3 text-[0.98rem] leading-[1.65] text-muted lg:grid-cols-2">
          {g.paragraphs.map((p) =>
            p.strong ? (
              <p
                key={p.text}
                className="rounded-[14px] border-l-4 border-red bg-blush px-4 py-3 font-semibold text-ink lg:col-span-2"
              >
                {p.text}
              </p>
            ) : (
              <p key={p.text}>{p.text}</p>
            ),
          )}
        </div>
      </div>
      <style>{`@keyframes age-in { from { opacity: 0; transform: translateY(8px) } to { opacity: 1; transform: none } }`}</style>
    </div>
  );
}
