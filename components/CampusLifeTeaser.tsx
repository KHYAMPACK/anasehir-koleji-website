"use client";

import { useState } from "react";
import { Dumbbell, Gift, Palette, Puzzle, Shuffle, Trophy } from "lucide-react";
import { BtnLine } from "./Buttons";
import {
  activityBranchCount,
  activityRulesShort,
  kulupBranches,
  sanatBranches,
  sporBranches,
} from "@/lib/kampusYasami";

/**
 * Homepage Kampüs Yaşamı band (replaced "Anaşehir'de Bir Gün"). Only real
 * content from lib/kampusYasami.ts: the activity rules and the branch lists.
 * Plain headings, no slogans.
 */
const tabs = [
  { key: "spor", label: "Spor", icon: Dumbbell, items: sporBranches },
  { key: "sanat", label: "Sanat", icon: Palette, items: sanatBranches },
  { key: "kulupler", label: "Kulüpler", icon: Puzzle, items: kulupBranches },
] as const;

const ruleIcons = [Trophy, Shuffle, Gift];
const allBranches = [...sporBranches, ...sanatBranches, ...kulupBranches];

export function CampusLifeTeaser() {
  const [tab, setTab] = useState(0);
  const current = tabs[tab];

  return (
    <section className="tone-navy relative overflow-hidden py-[clamp(3rem,6vw,5rem)]">
      <div className="pointer-events-none absolute inset-0 opacity-20 grid-paper" />
      <div className="pointer-events-none absolute -top-40 -left-40 h-[26rem] w-[26rem] rounded-full bg-blue/20 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -right-32 -bottom-48 h-[26rem] w-[26rem] rounded-full bg-red/20 blur-3xl" aria-hidden />

      <div className="relative mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-14">
          {/* Left: heading + activity rules */}
          <div>
            <h2 className="display text-3xl font-semibold tracking-tight text-white sm:text-4xl">Kampüs Yaşamı</h2>
            <ul className="mt-8 grid gap-3">
              {activityRulesShort.map((r, i) => {
                const Icon = ruleIcons[i];
                return (
                  <li
                    key={r.title}
                    className="flex items-center gap-4 rounded-[16px] bg-white/[0.06] p-4 ring-1 ring-white/10 backdrop-blur-sm"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-red text-white">
                      <Icon className="h-5 w-5" strokeWidth={1.8} aria-hidden />
                    </span>
                    <span className="min-w-0">
                      <span className="display block text-lg font-semibold text-white">{r.title}</span>
                      <span className="block text-sm text-white/65">{r.text}</span>
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Right: branch tabs */}
          <div className="rounded-[22px] bg-white/[0.05] p-5 ring-1 ring-white/10 sm:p-7">
            <div role="tablist" aria-label="Etkinlik dalları" className="grid grid-cols-3 gap-2 rounded-full bg-white/[0.06] p-1.5">
              {tabs.map((t, i) => {
                const on = i === tab;
                return (
                  <button
                    key={t.key}
                    role="tab"
                    type="button"
                    aria-selected={on}
                    onClick={() => setTab(i)}
                    // inline: .tone-navy turns ink text white, so the active pill sets its own colours
                    style={on ? { background: "#ffffff", color: "#14233a" } : undefined}
                    className={`flex items-center justify-center gap-2 rounded-full px-3 py-2.5 text-sm font-semibold transition-colors duration-300 ${
                      on ? "shadow" : "text-white/70 hover:text-white"
                    }`}
                  >
                    <t.icon className="h-4 w-4" strokeWidth={2} aria-hidden />
                    {t.label}
                    <span className={`text-xs ${on ? "" : "text-white/40"}`} style={on ? { color: "#3d4f6b" } : undefined}>{t.items.length}</span>
                  </button>
                );
              })}
            </div>

            <ul key={current.key} role="tabpanel" className="mt-6 flex flex-wrap gap-2.5">
              {current.items.map((b, i) => (
                <li
                  key={b}
                  className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/15 motion-safe:animate-[chip-in_450ms_ease-out_both]"
                  style={{ animationDelay: `${i * 45}ms` }}
                >
                  {b}
                </li>
              ))}
            </ul>
            <style>{`@keyframes chip-in { from { opacity: 0; transform: translateY(6px) } to { opacity: 1; transform: none } }`}</style>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
              <p className="text-sm text-white/65">
                <span className="display text-2xl font-semibold text-white">{activityBranchCount}</span> etkinlik dalı
              </p>
              <BtnLine href="/kampus-yasami">Kampüs Yaşamı</BtnLine>
            </div>
          </div>
        </div>
      </div>

      {/* All branches, slowly scrolling */}
      <div className="relative mt-12 -mb-[clamp(1rem,3vw,2.5rem)] overflow-hidden border-y border-white/10 py-3.5" aria-hidden>
        <div className="marquee-track flex w-max items-center whitespace-nowrap">
          {[...allBranches, ...allBranches].map((b, i) => (
            <span key={`${b}-${i}`} className="inline-flex items-center gap-6 px-3">
              <span className="display text-sm font-semibold tracking-[0.04em] text-white/75">{b}</span>
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-red" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
