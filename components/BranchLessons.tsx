import { Drama, Dumbbell, Music2, Palette, type LucideIcon } from "lucide-react";
import { branchLessons } from "@/lib/kampusYasami";

const icons: Record<string, LucideIcon> = {
  Dans: Music2,
  Spor: Dumbbell,
  "Görsel Sanatlar": Palette,
  Drama: Drama,
};
const colors: Record<string, [string, string]> = {
  Dans: ["#8f55d6", "#55279a"],
  Spor: ["#e5232d", "#a10f17"],
  "Görsel Sanatlar": ["#f7892a", "#cf540d"],
  Drama: ["#1fb0c4", "#0d6e83"],
};

/**
 * The four "Uygulamalı Branş Dersleri" as icon cards (client revision, Nov
 * 2026). Shown on Kampüs Yaşamı, Okullarımız and the homepage band.
 * `dark` = on a navy section.
 */
export function BranchLessons({ dark = false, withIntro = true }: { dark?: boolean; withIntro?: boolean }) {
  return (
    <div>
      {withIntro && (
        <p className={`max-w-[62ch] text-[1.02rem] leading-relaxed ${dark ? "text-white/75" : "text-muted"}`}>{branchLessons.text}</p>
      )}
      <ul className={`grid grid-cols-2 gap-3 sm:grid-cols-4 ${withIntro ? "mt-7" : ""}`}>
        {branchLessons.items.map((name) => {
          const Icon = icons[name] ?? Palette;
          const [from, to] = colors[name] ?? ["#2453ad", "#0b2b6b"];
          return (
            <li
              key={name}
              className={`group flex flex-col items-start gap-4 rounded-[18px] p-5 transition-transform duration-300 hover:-translate-y-1 sm:p-6 ${
                dark ? "bg-white/[0.07] ring-1 ring-white/12" : "bg-panel shadow-sm ring-1 ring-line/60"
              }`}
            >
              <span
                className="flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-[0_10px_24px_-10px_rgba(8,16,32,0.5)] transition-transform duration-300 group-hover:scale-110"
                style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
              >
                <Icon className="h-7 w-7" strokeWidth={1.6} aria-hidden />
              </span>
              <span className={`display text-lg font-bold ${dark ? "text-white" : "text-ink"}`}>{name}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
