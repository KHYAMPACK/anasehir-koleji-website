"use client";

import { useCallback, useState } from "react";
import { Agm360Wheel, type WheelRequest } from "./Agm360Wheel";
import { agmIcons } from "./agmIcons";
import { agmAreas } from "@/lib/agm360";

/**
 * Eğitim Modeli page, roadmap steps 02 + 03: the wheel and the 8 area cards
 * share one selection. Clicking a card selects its wheel segment (and scrolls
 * the wheel into view on phones); the wheel's auto-cycle highlights the card.
 */
export function AgmExplorer({ intro }: { intro: React.ReactNode }) {
  const [active, setActive] = useState(0);
  const [request, setRequest] = useState<WheelRequest>();
  const onActiveChange = useCallback((i: number) => setActive(i), []);

  const pick = (i: number) => {
    setRequest((r) => ({ index: i, nonce: (r?.nonce ?? 0) + 1 }));
    if (window.matchMedia("(max-width: 1023px)").matches) {
      document.getElementById("agm-360")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-12">
        <div className="min-w-0">{intro}</div>
        <Agm360Wheel request={request} onActiveChange={onActiveChange} showList={false} />
      </div>

      <div id="gelisim-alanlari" className="scroll-mt-[calc(var(--header)+0.75rem)] pt-16">
        <h2 className="display text-3xl font-semibold tracking-tight sm:text-4xl">
          AGM 360°&apos;ın <span className="text-red">{agmAreas.length}</span> Gelişim Alanı
        </h2>
        <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {agmAreas.map((a, i) => {
            const Icon = agmIcons[a.icon];
            const on = i === active;
            return (
              <li key={a.slug}>
                <button
                  type="button"
                  onClick={() => pick(i)}
                  aria-pressed={on}
                  className="group flex h-full w-full flex-col items-center rounded-[16px] bg-panel px-3 pt-6 pb-5 text-center shadow-sm transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-md"
                  style={{ boxShadow: on ? `0 0 0 2px ${a.from}, 0 12px 28px -12px ${a.to}` : undefined }}
                >
                  <span
                    className="flex h-14 w-14 items-center justify-center rounded-full text-white transition-transform duration-300 group-hover:scale-110"
                    style={{ background: `linear-gradient(135deg, ${a.from}, ${a.to})` }}
                  >
                    <Icon className="h-7 w-7" strokeWidth={1.6} aria-hidden />
                  </span>
                  <span className="display mt-4 text-sm leading-snug font-semibold text-ink sm:text-[0.95rem]">
                    {a.title}
                  </span>
                  <span
                    className="mt-3 h-1 w-8 rounded-full transition-[width] duration-300"
                    style={{ background: a.from, width: on ? "3rem" : undefined }}
                    aria-hidden
                  />
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
