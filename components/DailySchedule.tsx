import { Bus, Clock, Info } from "lucide-react";
import { gunlukAkis } from "@/lib/gunlukAkis";

/**
 * Günlük Ders Akışı + Servis Kalkış Saatleri in one section, as two clearly
 * separated headed blocks (client brief). Bus times are emphasised with
 * large figures and a bus icon; everything stacks on phones.
 */
export function DailySchedule({ meals }: { meals?: string }) {
  return (
    <div>
      <div className="grid gap-5 lg:grid-cols-2">
        {/* Lesson flow */}
        <article className="rounded-[20px] bg-panel p-6 shadow-sm ring-1 ring-line/50 sm:p-8">
          <h3 className="display flex items-center gap-2.5 text-xl font-semibold tracking-tight text-ink">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-soft text-blue">
              <Clock className="h-[1.1rem] w-[1.1rem]" strokeWidth={2} aria-hidden />
            </span>
            {gunlukAkis.flowTitle}
          </h3>
          <ol className="relative mt-6 space-y-4 pl-6">
            <span className="absolute top-2 bottom-2 left-[0.45rem] w-0.5 rounded-full bg-gradient-to-b from-blue to-red" aria-hidden />
            {gunlukAkis.flow.map((f, i) => (
              <li key={f.time} className="relative">
                <span
                  className={`absolute top-2 -left-6 h-4 w-4 rounded-full ring-4 ring-white ${i === 0 ? "bg-blue" : "bg-red"}`}
                  aria-hidden
                />
                <p className="display text-2xl font-semibold tracking-tight text-ink tabular-nums sm:text-3xl">{f.time}</p>
                <p className="mt-0.5 font-semibold text-muted">{f.label}</p>
              </li>
            ))}
          </ol>
        </article>

        {/* Bus departures */}
        <article className="tone-navy relative overflow-hidden rounded-[20px] bg-ink p-6 sm:p-8">
          <div className="pointer-events-none absolute inset-0 opacity-15 grid-paper" />
          <h3 className="display relative flex items-center gap-2.5 text-xl font-semibold tracking-tight text-white">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-red text-white">
              <Bus className="h-[1.1rem] w-[1.1rem]" strokeWidth={2} aria-hidden />
            </span>
            {gunlukAkis.busTitle}
          </h3>
          <ul className="relative mt-6 grid gap-3 sm:grid-cols-2">
            {gunlukAkis.buses.map((b) => (
              <li key={b.time} className="rounded-[16px] bg-white/[0.07] p-5 ring-1 ring-white/12">
                <Bus className="h-6 w-6 text-red" strokeWidth={1.8} aria-hidden />
                <p className="display mt-3 text-4xl font-semibold tracking-tight text-white tabular-nums">{b.time}</p>
                <p className="mt-1 text-sm font-semibold text-white/75">{b.label}</p>
              </li>
            ))}
          </ul>
        </article>
      </div>

      <div className="mt-5 grid gap-5 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
        <div className="space-y-2 text-[1.02rem] leading-[1.65] text-muted">
          {gunlukAkis.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <p className="flex items-start gap-2 pt-1 font-semibold text-ink">
            <Info className="mt-1 h-4 w-4 shrink-0 text-red" strokeWidth={2.2} aria-hidden />
            {gunlukAkis.note}
          </p>
        </div>
        {meals && <div className="rounded-[16px] bg-panel p-5 shadow-sm text-sm leading-relaxed text-muted">{meals}</div>}
      </div>
    </div>
  );
}
