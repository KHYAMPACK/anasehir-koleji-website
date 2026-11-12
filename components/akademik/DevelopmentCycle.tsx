"use client";

import { useEffect, useRef, useState } from "react";
import {
  ChartColumnBig,
  ChevronRight,
  ClipboardList,
  Gauge,
  HandHelping,
  Presentation,
  RefreshCw,
  RotateCcw,
} from "lucide-react";
import { gelisimDongusu } from "@/lib/akademikBasari";

const STEP_MS = 3400;

/** Icon per step, same order as gelisimDongusu. */
const stepIcons = [ClipboardList, Presentation, Gauge, ChartColumnBig, HandHelping, RefreshCw];

/**
 * Akademik Gelişim Döngüsü — the six steps light up in turn and loop from
 * "Yeniden Ölç" back to "Planla". The active step's explanation fades in:
 * below the row on desktop, inline under the step on phones.
 * Hover/focus/tap a step to hold it; the loop resumes when the pointer leaves.
 */
export function DevelopmentCycle() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!visible || paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setActive((a) => (a + 1) % gelisimDongusu.length), STEP_MS);
    return () => clearInterval(t);
  }, [visible, paused]);

  const hold = (i: number) => {
    setActive(i);
    setPaused(true);
  };

  return (
    <div ref={ref} onMouseLeave={() => setPaused(false)}>
      <ol className="relative grid gap-3 lg:grid-cols-6 lg:gap-0">
        {/* phone: vertical rail */}
        <span className="absolute top-6 bottom-6 left-[1.6rem] w-0.5 bg-line lg:hidden" aria-hidden />
        {gelisimDongusu.map(({ step, text }, i) => {
          const on = i === active;
          const done = i < active;
          return (
            <li key={step} className="relative lg:flex lg:justify-center">
              <button
                type="button"
                onMouseEnter={() => hold(i)}
                onFocus={() => hold(i)}
                onClick={() => hold(i)}
                aria-current={on ? "step" : undefined}
                aria-expanded={on}
                className={`relative z-10 flex w-full flex-col rounded-[14px] px-3 py-3 text-left transition-[background-color,box-shadow,transform] duration-500 lg:mx-1.5 lg:items-center lg:px-2 lg:py-5 lg:text-center ${
                  on ? "bg-ink shadow-lg lg:-translate-y-1" : "bg-panel shadow-sm"
                }`}
              >
                <span className="flex items-center gap-3 lg:flex-col lg:gap-2">
                  <span
                    className={`relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-colors duration-500 ${
                      on ? "bg-red text-white" : done ? "bg-blue text-white" : "bg-blue-soft text-blue"
                    }`}
                  >
                    {(() => {
                      const Icon = stepIcons[i];
                      return <Icon className="h-5 w-5" strokeWidth={1.8} aria-hidden />;
                    })()}
                    <span
                      className={`display absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full text-[0.65rem] font-bold ring-2 transition-colors duration-500 ${
                        on ? "bg-white text-red ring-ink" : "bg-ink text-white ring-panel"
                      }`}
                    >
                      {i + 1}
                    </span>
                  </span>
                  <span
                    className={`display text-base font-semibold tracking-wide uppercase transition-colors duration-500 lg:text-[0.95rem] ${
                      on ? "text-white" : "text-ink"
                    }`}
                  >
                    {step}
                  </span>
                </span>
                {/* phone: explanation opens inline under the active step */}
                <span
                  className={`grid pl-14 transition-[grid-template-rows,opacity] duration-500 lg:hidden ${
                    on ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <span className="overflow-hidden">
                    <span className="block pt-2 text-sm leading-relaxed text-white/80">{text}</span>
                  </span>
                </span>
              </button>
              {i < gelisimDongusu.length - 1 && (
                <ChevronRight
                  className={`absolute top-1/2 -right-2.5 z-20 hidden h-5 w-5 -translate-y-1/2 transition-colors duration-500 lg:block ${
                    done || on ? "text-red" : "text-line"
                  }`}
                  strokeWidth={2.5}
                  aria-hidden
                />
              )}
            </li>
          );
        })}
      </ol>

      {/* timer bar: fills while the current step is active */}
      <style>{`@keyframes cycle-fill { from { transform: scaleX(0) } to { transform: scaleX(1) } }`}</style>
      <div className="mt-4 h-1 overflow-hidden rounded-full bg-line/60 lg:mx-1.5" aria-hidden>
        <div
          key={active}
          className="h-full origin-left rounded-full bg-gradient-to-r from-blue to-red motion-reduce:hidden"
          style={{
            animation: `cycle-fill ${STEP_MS}ms linear forwards`,
            animationPlayState: visible && !paused ? "running" : "paused",
          }}
        />
      </div>

      {/* desktop: explanation panel under the row, cross-fading per step */}
      <div className="relative mt-5 hidden min-h-[5.5rem] lg:block" aria-live="polite">
        {gelisimDongusu.map(({ step, text }, i) => (
          <div
            key={step}
            className={`absolute inset-0 flex items-center gap-5 rounded-[16px] bg-panel px-7 shadow-sm transition-[opacity,transform] duration-700 ${
              i === active ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
            }`}
            aria-hidden={i !== active}
          >
            <span className="display flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-red text-base font-semibold text-white">
              {i + 1}
            </span>
            <div>
              <p className="display text-lg font-semibold text-ink">{step}</p>
              <p className="mt-0.5 text-[1.02rem] text-muted">{text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* the loop back */}
      <div className="mt-4 flex items-center gap-2 pl-3 text-sm font-semibold text-muted lg:justify-end lg:pr-2 lg:pl-0">
        <RotateCcw
          className={`h-4 w-4 text-red transition-transform duration-700 ${active === 0 ? "-rotate-[360deg]" : ""}`}
          strokeWidth={2.2}
          aria-hidden
        />
        {gelisimDongusu[gelisimDongusu.length - 1].step} › {gelisimDongusu[0].step}
      </div>
    </div>
  );
}
