import type { Metadata } from "next";
import { ArrowDown, CalendarCheck, CalendarDays, Flag, Info, Landmark, Sun, Target } from "lucide-react";
import { BtnPrimary } from "@/components/Buttons";
import { ContactCta } from "@/components/ContactCta";
import {
  burslulukTakvim,
  donemler,
  lgsTakvimi,
  olcmeTakvimi,
  resmiTatiller,
  takvimBilgi,
  takvimIntro,
  type TakvimEvent,
} from "@/lib/akademikTakvim";

export const metadata: Metadata = {
  title: "Akademik Takvim",
  description: "Anaşehir Koleji 2026–2027 akademik takvimi: dönemler, tatiller, çeyrek sonu değerlendirmeleri, LGS ve bursluluk sınavı tarihleri.",
};

const chapters = [
  { id: "donemler", name: "Dönemler" },
  { id: "lgs-takvimi", name: "2027 LGS Takvimi" },
  { id: "olcme-takvimi", name: "Ölçme ve Değerlendirme" },
  { id: "bursluluk-ve-tatiller", name: "Bursluluk ve Resmî Tatiller" },
];

/** Legend shown in the hero — same markers as the timeline rows. */
const legend = [
  { kind: "quarter", label: "Çeyrek sonu süreç değerlendirme" },
  { kind: "lgs", label: "LGS" },
  { kind: "break", label: "Tatil" },
] as const;

function Marker({ kind, size = "md" }: { kind: TakvimEvent["kind"]; size?: "sm" | "md" }) {
  const box = size === "sm" ? "h-7 w-7" : "h-10 w-10";
  const icon = size === "sm" ? "h-3.5 w-3.5" : "h-[1.1rem] w-[1.1rem]";
  if (kind === "quarter")
    return (
      <span className={`flex ${box} shrink-0 items-center justify-center rounded-[10px] bg-red text-white shadow-sm`}>
        <CalendarCheck className={icon} strokeWidth={2} aria-hidden />
      </span>
    );
  if (kind === "lgs")
    return (
      <span className={`flex ${box} shrink-0 items-center justify-center rounded-[10px] bg-ink text-white ring-1 ring-white/20`}>
        <Target className={icon} strokeWidth={2} aria-hidden />
      </span>
    );
  if (kind === "break")
    return (
      <span className={`flex ${box} shrink-0 items-center justify-center rounded-[10px] bg-blue-soft text-blue`}>
        <Sun className={icon} strokeWidth={2} aria-hidden />
      </span>
    );
  return (
    <span className={`flex ${box} shrink-0 items-center justify-center`} aria-hidden>
      <span className="h-2.5 w-2.5 rounded-full bg-blue/40" />
    </span>
  );
}

const rowTone: Record<TakvimEvent["kind"], string> = {
  quarter: "bg-red/[0.06] ring-1 ring-red/25",
  lgs: "bg-blue-soft/50 ring-1 ring-blue/20",
  break: "bg-blue-soft/30",
  plain: "",
};

function EventRow({ e }: { e: TakvimEvent }) {
  return (
    <li className={`grid gap-1 rounded-[14px] px-3 py-3 sm:grid-cols-[13.5rem_minmax(0,1fr)] sm:items-center sm:gap-5 sm:px-4 ${rowTone[e.kind]}`}>
      <span className="flex items-center gap-3">
        <Marker kind={e.kind} />
        <span className={`display text-[0.98rem] font-semibold tabular-nums ${e.kind === "quarter" ? "text-red" : "text-ink"}`}>
          {e.date}
        </span>
      </span>
      <span className="pl-[3.25rem] sm:pl-0">
        <span className={`block leading-snug ${e.kind === "plain" || e.kind === "break" ? "text-ink" : "font-semibold text-ink"}`}>
          {e.label}
        </span>
        {e.note && <span className="mt-0.5 block text-sm text-muted">{e.note}</span>}
        {e.kind === "lgs" && (
          <a href="#lgs-takvimi" className="mt-1 inline-flex items-center gap-1 text-sm font-semibold text-blue no-underline hover:underline">
            LGS takvimi
            <ArrowDown className="h-3.5 w-3.5" strokeWidth={2.2} aria-hidden />
          </a>
        )}
      </span>
    </li>
  );
}

const sectionCls = "relative scroll-mt-[calc(var(--header)+3.5rem)] py-[clamp(2.6rem,5vw,4.5rem)]";
const wrap = "relative mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-10";

export default function AkademikTakvimPage() {
  const [donem1, yariyil, donem2] = donemler;

  return (
    <>
      {/* Hero */}
      <section className="tone-navy relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-25 grid-paper" />
        <div className="pointer-events-none absolute -top-32 right-0 -z-10 h-96 w-96 rounded-full bg-red/20 blur-3xl" aria-hidden />
        <div className={`${wrap} py-14 sm:py-20`}>
          <div className="flex gap-5">
            <span className="mt-1 hidden h-16 w-1.5 shrink-0 rounded-full bg-red sm:block" aria-hidden />
            <div className="min-w-0">
              <p className="eyebrow">Anaşehir Koleji</p>
              <h1 className="display mt-3 text-[2.1rem] leading-[1.08] font-semibold tracking-tight text-white sm:text-5xl">
                {takvimIntro.title}
              </h1>
              <p className="mt-5 max-w-[64ch] text-[1.05rem] leading-[1.6] text-white/75">{takvimIntro.lead}</p>
              <ul className="mt-7 flex flex-wrap gap-2.5">
                {legend.map((l) => (
                  <li key={l.kind} className="flex items-center gap-2.5 rounded-full bg-white/[0.08] py-1.5 pr-4 pl-1.5 text-sm font-semibold text-white ring-1 ring-white/15">
                    <Marker kind={l.kind} size="sm" />
                    {l.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <nav className="sticky top-[var(--header)] z-20 bg-ink/95 backdrop-blur" aria-label="Akademik Takvim bölümleri">
        <div className="mx-auto flex max-w-[1180px] gap-x-5 overflow-x-auto px-4 py-3 text-sm whitespace-nowrap text-white/70 [scrollbar-width:none] sm:px-6 lg:px-10">
          {chapters.map((c) => (
            <a key={c.id} href={`#${c.id}`} className="hover:text-white">
              {c.name}
            </a>
          ))}
        </div>
      </nav>

      {/* Dönemler */}
      <section id="donemler" className={`tone-ice ${sectionCls}`}>
        <div className={wrap}>
          <div className="grid gap-5">
            {[donem1, donem2].map((d, idx) => (
              <div key={d.title} className="contents">
                <article className="rounded-[22px] bg-panel p-4 shadow-sm ring-1 ring-line/50 sm:p-6">
                  <h2 className="display mb-4 flex items-baseline gap-3 px-1 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                    {d.title}
                    <span className="text-base font-semibold text-muted">2026–2027</span>
                  </h2>
                  <ol className="grid gap-1.5">
                    {d.events.map((e) => (
                      <EventRow key={e.date + e.label} e={e} />
                    ))}
                  </ol>
                </article>
                {idx === 0 && (
                  <article className="flex flex-col gap-4 rounded-[22px] bg-blue p-6 text-white shadow-sm sm:flex-row sm:items-center sm:gap-6 sm:p-7">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[16px] bg-white/15">
                      <Sun className="h-7 w-7" strokeWidth={1.8} aria-hidden />
                    </span>
                    <div>
                      <h2 className="display text-2xl font-semibold tracking-tight text-white">{yariyil.title}</h2>
                      <p className="display mt-1 text-lg font-semibold text-white">{yariyil.events[0].date}</p>
                    </div>
                    <p className="text-white/85 sm:ml-auto sm:max-w-[46ch]">{yariyil.events[0].note}</p>
                  </article>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2027 LGS Hazırlık ve Sınav Takvimi (client: own highlighted area) */}
      <section id="lgs-takvimi" className={`tone-navy overflow-hidden bg-ink ${sectionCls}`}>
        <div className="pointer-events-none absolute inset-0 opacity-15 grid-paper" />
        <div className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-red/20 blur-3xl" aria-hidden />
        <div className={wrap}>
          <h2 className="display text-3xl font-semibold tracking-tight text-white sm:text-4xl">{lgsTakvimi.title}</h2>
          <div className="mt-8 grid gap-5 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.65fr)]">
            <article className="rounded-[22px] bg-white/[0.07] p-6 ring-1 ring-white/12 sm:p-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-red text-white">
                <CalendarDays className="h-6 w-6" strokeWidth={1.8} aria-hidden />
              </span>
              <h3 className="display mt-5 text-2xl font-semibold tracking-tight text-white">{lgsTakvimi.camp.title}</h3>
              <p className="display mt-2 text-3xl font-semibold tracking-tight text-white tabular-nums sm:text-4xl">
                {lgsTakvimi.camp.date}
              </p>
              <div className="mt-5 space-y-3 text-[1rem] leading-[1.65] text-white/75">
                {lgsTakvimi.camp.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </article>
            <article className="flex flex-col overflow-hidden rounded-[22px] bg-panel text-center shadow-lg">
              <p className="bg-red py-3 text-sm font-bold tracking-[0.14em] text-white uppercase">{lgsTakvimi.exam.title}</p>
              <div className="flex flex-1 flex-col items-center justify-center px-6 py-8">
                <Target className="h-8 w-8 text-red" strokeWidth={1.8} aria-hidden />
                <p className="display mt-3 text-7xl leading-none font-extrabold text-ink">13</p>
                <p className="display mt-2 text-xl font-semibold text-ink">Haziran 2027</p>
                <p className="text-sm font-semibold text-muted">Pazar</p>
                <p className="mt-5 text-left text-sm leading-relaxed text-muted">{lgsTakvimi.exam.text}</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Ölçme ve Değerlendirme Takvimi */}
      <section id="olcme-takvimi" className={`tone-paper ${sectionCls}`}>
        <div className={wrap}>
          <h2 className="display text-3xl font-semibold tracking-tight sm:text-4xl">{olcmeTakvimi.title}</h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {olcmeTakvimi.levels.map((l) => (
              <li key={l.level} className="rounded-[16px] bg-panel p-5 shadow-sm ring-1 ring-line/40">
                <span className="display inline-block rounded-full bg-ink px-3.5 py-1 text-sm font-semibold text-white">{l.level}</span>
                <p className="mt-3 font-semibold leading-snug text-ink">{l.text}</p>
              </li>
            ))}
          </ul>

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <article className="rounded-[22px] bg-red/[0.05] p-6 ring-1 ring-red/20 sm:p-7">
              <h3 className="display flex items-center gap-3 text-xl font-semibold tracking-tight text-ink">
                <Marker kind="quarter" />
                {olcmeTakvimi.quartersTitle}
              </h3>
              <ul className="mt-5 grid grid-cols-2 gap-3">
                {olcmeTakvimi.quarters.map((q) => (
                  <li key={q.q} className="overflow-hidden rounded-[14px] bg-panel text-center shadow-sm">
                    <p className="bg-red py-1.5 text-xs font-bold tracking-[0.12em] text-white uppercase">{q.q}</p>
                    <p className="display px-2 py-3 text-lg font-semibold text-ink">{q.date}</p>
                  </li>
                ))}
              </ul>
              <div className="mt-5 space-y-2 text-sm leading-relaxed text-muted">
                {olcmeTakvimi.quartersNotes.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </article>

            <article className="rounded-[22px] bg-panel p-6 shadow-sm ring-1 ring-line/50 sm:p-7">
              <h3 className="display flex items-center gap-3 text-xl font-semibold tracking-tight text-ink">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-blue-soft text-blue">
                  <Landmark className="h-[1.1rem] w-[1.1rem]" strokeWidth={2} aria-hidden />
                </span>
                {olcmeTakvimi.mebTitle}
              </h3>
              <ul className="mt-5 divide-y divide-line/60">
                {olcmeTakvimi.meb.map((m) => (
                  <li key={m.date} className="grid gap-0.5 py-3 sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-4">
                    <span className="display font-semibold text-ink tabular-nums">{m.date}</span>
                    <span className="text-muted">{m.label}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-sm leading-relaxed text-muted">{olcmeTakvimi.mebNote}</p>
            </article>
          </div>
        </div>
      </section>

      {/* Bursluluk + Resmî tatiller */}
      <section id="bursluluk-ve-tatiller" className={`tone-blush ${sectionCls}`}>
        <div className={`${wrap} grid items-start gap-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]`}>
          <article className="overflow-hidden rounded-[22px] bg-panel shadow-sm">
            <p className="bg-red py-3 text-center text-sm font-bold tracking-[0.14em] text-white uppercase">{burslulukTakvim.title}</p>
            <div className="p-6 sm:p-7">
              <p className="display text-center text-2xl font-semibold text-ink">{burslulukTakvim.date}</p>
              <dl className="mt-5 divide-y divide-line/60">
                {burslulukTakvim.rows.map((r) => (
                  <div key={r.label} className="flex justify-between gap-4 py-3 text-sm">
                    <dt className="font-semibold text-muted">{r.label}</dt>
                    <dd className="text-right font-semibold text-ink">{r.value}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-5">
                <BtnPrimary href="/bursluluk#basvuru">Başvuru</BtnPrimary>
              </div>
            </div>
          </article>

          <article className="rounded-[22px] bg-panel p-6 shadow-sm sm:p-7">
            <h2 className="display flex items-center gap-3 text-2xl font-semibold tracking-tight text-ink">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-red/10 text-red">
                <Flag className="h-[1.1rem] w-[1.1rem]" strokeWidth={2} aria-hidden />
              </span>
              {resmiTatiller.title}
            </h2>
            <ul className="mt-5 divide-y divide-line/60">
              {resmiTatiller.items.map((t) => (
                <li key={t.date} className="grid gap-0.5 py-3 sm:grid-cols-[14rem_minmax(0,1fr)] sm:gap-4">
                  <span className="display font-semibold text-ink">{t.date}</span>
                  <span>
                    <span className="block text-ink">{t.label}</span>
                    {"note" in t && <span className="mt-0.5 block text-sm text-muted">{t.note}</span>}
                  </span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      {/* Bilgilendirme */}
      <section className={`tone-ice ${sectionCls}`}>
        <div className={`${wrap} grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start`}>
          <div>
            <h2 className="display text-2xl font-semibold tracking-tight sm:text-3xl">{takvimBilgi.title}</h2>
            <div className="mt-4 space-y-3 text-[1.02rem] leading-[1.65] text-muted">
              {takvimBilgi.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
          <p className="flex items-start gap-3 rounded-[18px] border-l-4 border-red bg-panel p-5 text-[0.98rem] leading-[1.6] text-ink shadow-sm">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-red" strokeWidth={2} aria-hidden />
            <span>
              <strong>Önemli Not:</strong> {takvimBilgi.note}
            </span>
          </p>
        </div>
      </section>

      <ContactCta image="/hero/hero-1.jpg" />
    </>
  );
}
