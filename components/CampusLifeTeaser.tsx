import { BranchLessons } from "./BranchLessons";
import { BtnLine } from "./Buttons";
import { branchLessons } from "@/lib/kampusYasami";

/**
 * Homepage Kampüs Yaşamı band. Client revision (Nov 2026): the old
 * 25-branch / elective model is gone — the band shows the four
 * "Uygulamalı Branş Dersleri" that are part of the weekly timetable.
 * Plain headings, no slogans.
 */
export function CampusLifeTeaser() {
  return (
    <section className="tone-navy relative overflow-hidden py-[clamp(3rem,6vw,5rem)]">
      <div className="pointer-events-none absolute inset-0 opacity-20 grid-paper" />
      <div className="pointer-events-none absolute -top-40 -left-40 h-[26rem] w-[26rem] rounded-full bg-blue/20 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -right-32 -bottom-48 h-[26rem] w-[26rem] rounded-full bg-red/20 blur-3xl" aria-hidden />

      <div className="relative mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-sm font-bold tracking-[0.14em] text-blue uppercase">Kampüs Yaşamı</p>
            <h2 className="display mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{branchLessons.title}</h2>
          </div>
          <BtnLine href="/kampus-yasami#brans-dersleri">Kampüs Yaşamı</BtnLine>
        </div>
        <div className="mt-6">
          <BranchLessons dark />
        </div>
      </div>
    </section>
  );
}
