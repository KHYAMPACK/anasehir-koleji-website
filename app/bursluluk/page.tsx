import type { Metadata } from "next";
import Image from "next/image";
import { CalendarDays, Clock, Hourglass } from "lucide-react";
import { BtnLine, BtnPrimary } from "@/components/Buttons";
import { BurslulukForm } from "@/components/BurslulukForm";
import { Countdown } from "@/components/campaign/Countdown";
import { NeedsData } from "@/components/NeedsData";
import { Section } from "@/components/PageHero";
import { bursluluk, deadlineLabel, examDateLabel } from "@/lib/campaign";
import { parseLegal, readLegal } from "@/lib/legal";
import { showDataFlags } from "@/lib/needsData";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: bursluluk.pageTitle,
  description: `${site.name} ${bursluluk.pageTitle} başvurusu.`,
};

/** "16 Ocak 2027" → { day: "16", rest: "Ocak 2027" } for the calendar tile. */
function splitDate(label: string | null) {
  if (!label) return null;
  const [day, ...rest] = label.split(" ");
  return { day, rest: rest.join(" ") };
}

export default function BurslulukPage() {
  const date = splitDate(examDateLabel());
  const missing = bursluluk.details.filter((d) => !d.value);

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="tone-navy relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-25 grid-paper" />
        <div className="pointer-events-none absolute -top-32 -right-32 h-[26rem] w-[26rem] rounded-full bg-red/25 blur-3xl" aria-hidden />
        <div className="relative mx-auto grid max-w-[1180px] items-center gap-12 px-4 py-14 sm:px-6 lg:min-h-[560px] lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:px-10 lg:py-16">
          <div className="min-w-0">
            <p className="text-sm font-bold tracking-[0.14em] text-blue uppercase">{site.name}</p>
            <h1 className="display mt-4 text-[2.4rem] leading-[1.05] font-extrabold tracking-tight text-white sm:text-5xl lg:text-[3.5rem]">
              {bursluluk.pageTitle}
            </h1>
            {date && (
              <p className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-lg font-semibold text-white/90">
                <span className="flex items-center gap-2">
                  <CalendarDays className="h-5 w-5 text-red" strokeWidth={1.8} aria-hidden />
                  {date.day} {date.rest}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-blue" strokeWidth={1.8} aria-hidden />
                  {bursluluk.sessions.map((s) => s.time).join(" · ")}
                </span>
              </p>
            )}
            <div className="mt-8">
              <Countdown />
            </div>
            <div className="mt-9 flex flex-wrap gap-3">
              <BtnPrimary href="#basvuru" size="lg">Hemen Başvur</BtnPrimary>
              <BtnLine href="#sinav-bilgileri" size="lg">Sınav Bilgileri</BtnLine>
            </div>
          </div>

          {/* Poster slot: real campaign visual when supplied, school photo until then */}
          {showDataFlags ? (
            <NeedsData id="bursluluk-gorsel" ratio="aspect-[4/3]" />
          ) : (
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] ring-1 ring-white/15">
                <Image src="/hero/hero-2.jpg" alt="Anaşehir Koleji öğrencileri" fill priority sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" />
              </div>
              <div className="tone-paper absolute -bottom-6 left-4 flex items-center gap-3 rounded-[16px] bg-panel px-5 py-4 text-ink shadow-[0_18px_40px_-12px_rgba(8,16,32,0.45)] sm:left-8">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-red/10 text-red">
                  <Hourglass className="h-5 w-5" strokeWidth={1.8} aria-hidden />
                </span>
                <span>
                  <span className="block text-xs font-semibold tracking-[0.08em] text-muted uppercase">Son başvuru</span>
                  <span className="display block text-lg font-bold">{deadlineLabel()}</span>
                </span>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── Sınav Bilgileri: calendar tile + sessions + deadline ─ */}
      <Section id="sinav-bilgileri" tone="ice" title="Sınav Bilgileri">
        <div className="grid gap-4 lg:grid-cols-[16rem_minmax(0,1fr)]">
          {date && (
            <div className="overflow-hidden rounded-[22px] bg-panel text-center shadow-sm">
              <p className="bg-red py-2.5 text-sm font-bold tracking-[0.14em] text-white uppercase">Sınav Tarihi</p>
              <p className="display pt-5 text-7xl leading-none font-extrabold text-ink">{date.day}</p>
              <p className="display pt-2 pb-6 text-xl font-semibold text-muted">{date.rest}</p>
            </div>
          )}
          <div className="grid gap-4 sm:grid-cols-3">
            {bursluluk.sessions.map((s) => (
              <div key={s.label} className="flex flex-col justify-between rounded-[22px] bg-panel p-6 shadow-sm">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-soft text-ink">
                  <Clock className="h-5 w-5" strokeWidth={1.8} aria-hidden />
                </span>
                <span>
                  <span className="display mt-6 block text-4xl font-extrabold text-ink">{s.time}</span>
                  <span className="mt-1 block text-sm font-semibold text-muted">{s.label}</span>
                </span>
              </div>
            ))}
            <div className="tone-navy flex flex-col justify-between rounded-[22px] p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-red text-white">
                <Hourglass className="h-5 w-5" strokeWidth={1.8} aria-hidden />
              </span>
              <span>
                <span className="display mt-6 block text-2xl font-extrabold text-white">{deadlineLabel()}</span>
                <span className="mt-1 block text-sm font-semibold text-white/70">Son başvuru</span>
              </span>
            </div>
          </div>
        </div>
        {showDataFlags && missing.length > 0 && <NeedsData id="bursluluk-detaylari" className="mt-4" />}
      </Section>

      {/* ── Başvuru: summary rail + form ─────────────────────── */}
      <Section id="basvuru" tone="paper" title="Başvuru Formu">
        <div className="grid items-start gap-6 lg:grid-cols-[18rem_minmax(0,1fr)] lg:gap-10">
          <aside className="tone-navy rounded-[22px] p-6 lg:sticky lg:top-[calc(var(--header)+1.5rem)]">
            <p className="display text-lg font-bold text-white">{bursluluk.pageTitle}</p>
            <ul className="mt-5 space-y-4 text-sm">
              {bursluluk.details
                .filter((d) => d.value)
                .map((d) => (
                  <li key={d.label} className="flex items-baseline justify-between gap-4 border-b border-white/10 pb-3">
                    <span className="text-white/60">{d.label}</span>
                    <span className="display font-semibold text-white">{d.value}</span>
                  </li>
                ))}
            </ul>
          </aside>
          <div className="min-w-0">
            <BurslulukForm noticeBlocks={parseLegal(readLegal("bursluluk-sinavi.md"))} />
          </div>
        </div>
      </Section>

      {showDataFlags && (
        <Section id="sss" tone="ice" title="Sık Sorulan Sorular">
          <NeedsData id="bursluluk-sss" />
        </Section>
      )}
    </>
  );
}
