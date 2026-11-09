"use client";

import { useSyncExternalStore } from "react";
import { bursluluk } from "@/lib/campaign";
import { NeedsDataTag } from "../NeedsData";

function subscribe(cb: () => void) {
  const t = setInterval(cb, 1000);
  return () => clearInterval(t);
}

const units = [
  { label: "Gün", s: 86400 },
  { label: "Saat", s: 3600 },
  { label: "Dakika", s: 60 },
  { label: "Saniye", s: 1 },
];

/** Live countdown to the exam. Server renders dashes; no date → placeholder tag. */
export function Countdown() {
  const now = useSyncExternalStore(
    subscribe,
    () => Math.floor(Date.now() / 1000),
    () => null,
  );

  if (!bursluluk.examDate) {
    return (
      <div className="flex flex-wrap items-center gap-3">
        <span className="text-sm text-white/70">Sınava kalan süre</span>
        <NeedsDataTag id="bursluluk-detaylari" />
      </div>
    );
  }

  const target = Math.floor(new Date(bursluluk.examDate).getTime() / 1000);
  const left = now === null ? null : Math.max(0, target - now);
  // Each unit = whole units left after removing the larger units.
  const values = units.map((u, i) =>
    left === null ? null : Math.floor((i === 0 ? left : left % units[i - 1].s) / u.s),
  );

  return (
    <div>
      <p className="text-sm text-white/70">Sınava kalan süre</p>
      <ol className="mt-2 flex gap-2 sm:gap-3">
        {units.map((u, i) => {
          const v = values[i];
          return (
            <li key={u.label} className="min-w-[4.25rem] rounded-[12px] bg-white/10 px-3 py-2.5 text-center ring-1 ring-white/15">
              <span className="display block text-2xl font-semibold tabular-nums text-white sm:text-3xl">
                {v === null ? "--" : String(v).padStart(2, "0")}
              </span>
              <span className="text-[0.65rem] tracking-[0.12em] text-white/60 uppercase">{u.label}</span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
