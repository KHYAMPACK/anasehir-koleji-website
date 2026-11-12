"use client";

import { useEffect, useState } from "react";
import { akademikYaklasim } from "@/lib/akademikBasari";

/**
 * Decorative "Akademik Takip" panel for the Akademik Başarı hero.
 * Deliberately has NO numbers, axes or labels per bar — it illustrates the
 * idea of tracked progress, it is not data. The brief asks for real,
 * anonymised system screenshots here eventually (see /eksikler).
 */
const colors = ["#2a6fb0", "#00b1eb", "#5cc9f0", "#00b1eb", "#e30613"];

/**
 * Height patterns (%) the bars keep easing between, so the panel is always
 * gently in motion. Every pattern keeps the overall rising shape.
 */
const frames = [
  [38, 56, 47, 72, 92],
  [44, 50, 58, 66, 86],
  [34, 62, 52, 79, 95],
  [42, 54, 45, 70, 89],
];
const FRAME_MS = 1900;

export function TrackingChart() {
  const [grown, setGrown] = useState(false);
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setGrown(true), 250);
    return () => clearTimeout(t);
  }, []);

  // Keep moving after the first grow-in (skipped for reduced motion).
  useEffect(() => {
    if (!grown) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setFrame((f) => (f + 1) % frames.length), FRAME_MS);
    return () => clearInterval(t);
  }, [grown]);

  return (
    <div
      className="relative rounded-[20px] bg-white/[0.06] p-6 ring-1 ring-white/15 backdrop-blur-sm sm:p-7"
      aria-hidden
    >
      <p className="text-xs font-bold tracking-[0.16em] text-white/70 uppercase">{akademikYaklasim.chartTitle}</p>

      <div className="relative mt-6 flex h-44 items-end gap-3 border-b border-white/20 sm:h-52 sm:gap-4">
        {colors.map((color, i) => (
          <span
            key={i}
            className="relative flex-1 rounded-t-[8px] transition-[height] duration-[1400ms] ease-in-out motion-reduce:transition-none"
            style={{
              height: grown ? `${frames[frame][i]}%` : "4%",
              background: `linear-gradient(to top, ${color}cc, ${color})`,
              transitionDelay: `${i * 110}ms`,
            }}
          />
        ))}
      </div>

      <p className="mt-4 text-sm text-white/70">{akademikYaklasim.chartCaption}</p>
    </div>
  );
}
