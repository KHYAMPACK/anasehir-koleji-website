import type { Metadata } from "next";
import { showDataFlags } from "@/lib/needsData";
import Image from "next/image";
import {
  CalendarDays,
  ChartColumnBig,
  ClipboardList,
  GraduationCap,
  Medal,
  RefreshCw,
  Target,
  Trophy,
  UserCheck,
  UsersRound,
} from "lucide-react";
import { TakipTabs } from "@/components/akademik/TakipTabs";
import { akademikTakip } from "@/lib/akademikTakip";
import { atletizm, basariOne, basariSpor } from "@/lib/basarilar";
import { ContactCta } from "@/components/ContactCta";
import { Section } from "@/components/PageHero";
import { NeedsData } from "@/components/NeedsData";
import { TrackingChart } from "@/components/akademik/TrackingChart";
import { DevelopmentCycle } from "@/components/akademik/DevelopmentCycle";
import {
  akademikBasariPages,
  akademikSistem,
  akademikYaklasim,
  ikiOdak,
} from "@/lib/akademikBasari";
import { programs } from "@/lib/programs";
import { sections } from "@/lib/nav";

export const metadata: Metadata = { title: "Akademik Başarı" };

const lgsColumns = ["Yıl", "Öğrenci sayısı", "Ortalama puan", "Derece / yüzdelik", "Yerleşilen liseler"];

/** One icon per Akademik Sistem item, in order. */
const sistemIcons = [ClipboardList, ChartColumnBig, UserCheck, RefreshCw];

const chapters = sections.find((s) => s.name === "Akademik Başarı")!.items;

/*
 * Layout follows client brief 05: academic confidence (hero) → process
 * (development cycle) → Akademik Güç + LGS blocks. Plain section names only —
 * the user asked to drop slogan-style headings (İki Odak…, mottos, closing line).
 */
export default function AkademikBasariPage() {
  return (
    <>
      {/* Hero */}
      <section className="tone-navy relative isolate overflow-hidden">
        <Image
          src="/hero/hero-1.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover"
        />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-ink/80 via-transparent to-ink/30" />
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-15 grid-paper" />
        <div className="relative mx-auto grid max-w-[1180px] items-center gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:min-h-[34rem] lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-14 lg:px-10">
          <div className="flex gap-5">
            <span className="mt-1 hidden h-16 w-1.5 shrink-0 rounded-full bg-red sm:block" aria-hidden />
            <div className="min-w-0">
              <p className="eyebrow">Anaşehir Koleji</p>
              <h1 className="display mt-3 text-[2.1rem] leading-[1.08] font-semibold tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">
                Akademik Başarı
              </h1>
              <p className="mt-5 max-w-[56ch] text-[1.05rem] leading-[1.6] text-white/75">{akademikYaklasim.lead}</p>
            </div>
          </div>
          <TrackingChart />
        </div>
      </section>

      <nav className="bg-ink/95" aria-label="Akademik Başarı bölümleri">
        <div className="mx-auto flex max-w-[1180px] flex-wrap gap-x-5 gap-y-2 px-4 py-3 text-sm text-white/70 sm:px-6 lg:px-10">
          {chapters.map((c) => (
            <a key={c.href} href={`#${c.href.split("#")[1]}`} className="hover:text-white">
              {c.name}
            </a>
          ))}
        </div>
      </nav>

      {/* Akademik Gelişim Döngüsü */}
      <section id="gelisim-dongusu" className="tone-ice relative scroll-mt-[calc(var(--header)+0.75rem)] overflow-hidden py-[clamp(2.6rem,5vw,4.5rem)]">
        <div className="pointer-events-none absolute -top-32 -left-32 h-80 w-80 rounded-full bg-blue/15 blur-3xl" aria-hidden />
        <div className="pointer-events-none absolute -right-24 -bottom-40 h-96 w-96 rounded-full bg-red/10 blur-3xl" aria-hidden />
        <div className="relative mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-10">
          <h2 className="display mb-8 text-3xl font-semibold tracking-tight sm:text-4xl">Akademik Gelişim Döngüsü</h2>
          <DevelopmentCycle />
        </div>
      </section>

      {/* Akademik Takip Sistemi — client copy, lib/akademikTakip.ts */}
      <section id="akademik-takip" className="tone-paper relative scroll-mt-[calc(var(--header)+0.75rem)] overflow-clip py-[clamp(2.6rem,5vw,4.5rem)]">
        <div className="relative mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-10">
          <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-12">
            <div>
              <h2 className="display text-3xl font-semibold tracking-tight sm:text-4xl">{akademikTakip.title}</h2>
              <div className="mt-5 space-y-3 text-[1.02rem] leading-[1.65] text-muted">
                {akademikTakip.intro.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>
            <figure className="overflow-hidden rounded-[22px] bg-panel shadow-[0_18px_50px_-30px_rgba(20,35,58,0.45)] ring-1 ring-line/50">
              <Image
                src={akademikTakip.screen.image}
                alt="AnaşehirOnline akademik takip ekranları: tarama testleri, kurum deneme sınavı başarı grafiği ve sınıf performans raporu"
                width={1600}
                height={900}
                sizes="(max-width: 1024px) 100vw, 640px"
                className="h-auto w-full"
              />
              <figcaption className="relative border-t border-line/60 p-5 sm:p-6">
                <span className="absolute inset-y-0 left-0 w-1.5 bg-red" aria-hidden />
                <p className="display text-lg font-semibold tracking-tight text-ink">{akademikTakip.screen.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{akademikTakip.screen.text}</p>
              </figcaption>
            </figure>
          </div>

          <h3 className="display mt-14 mb-6 text-2xl font-semibold tracking-tight text-ink sm:text-[1.7rem]">
            {akademikTakip.stepsTitle}
          </h3>
          <TakipTabs />

          <div className="mt-14 rounded-[22px] bg-blue-soft/40 p-6 ring-1 ring-line/40 sm:p-8">
            <h3 className="display flex items-center gap-3 text-2xl font-semibold tracking-tight text-ink sm:text-[1.7rem]">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] bg-red text-white">
                <CalendarDays className="h-5 w-5" strokeWidth={1.9} aria-hidden />
              </span>
              {akademikTakip.levelsTitle}
            </h3>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {akademikTakip.levels.map((l) => (
                <li key={l.level} className="flex flex-col rounded-[16px] bg-panel p-5 shadow-sm">
                  <span className="display self-start rounded-full bg-red px-3.5 py-1 text-sm font-semibold text-white">
                    {l.level}
                  </span>
                  <p className="mt-3 font-semibold leading-snug text-ink">{l.text}</p>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-[0.98rem] leading-[1.6] text-muted">{akademikTakip.levelsNote}</p>
          </div>

          <div className="tone-navy relative mt-6 overflow-hidden rounded-[22px] bg-ink p-7 sm:p-9">
            <div className="pointer-events-none absolute inset-0 opacity-15 grid-paper" />
            <div className="pointer-events-none absolute -right-20 -bottom-24 h-72 w-72 rounded-full bg-red/25 blur-3xl" aria-hidden />
            <div className="relative grid gap-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-10">
              <div>
                <span className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-red text-white">
                  <UsersRound className="h-6 w-6" strokeWidth={1.7} aria-hidden />
                </span>
                <h3 className="display mt-5 text-2xl font-semibold tracking-tight text-white sm:text-[1.9rem]">
                  {akademikTakip.collabTitle}
                </h3>
              </div>
              <div className="space-y-3 text-[1.02rem] leading-[1.65] text-white/80">
                {akademikTakip.collab.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Akademik Güç + LGS — each focus merged with its own detail */}
      <Section tone="ice" title="Akademik Sistem ve LGS Yolculuğu">
        <div className="grid gap-6">
          {/* Akademik Güç + Akademik Sistem */}
          <article
            id="akademik-sistem"
            className="scroll-mt-[calc(var(--header)+4rem)] overflow-hidden rounded-[22px] bg-panel shadow-[0_18px_50px_-30px_rgba(20,35,58,0.45)] ring-1 ring-line/50"
          >
            <div className="grid lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
              <div className="relative flex flex-col p-7 sm:p-9">
                <span className="absolute inset-y-0 left-0 w-1.5 bg-blue" aria-hidden />
                <span className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-blue text-white shadow-sm">
                  <GraduationCap className="h-6 w-6" strokeWidth={1.7} aria-hidden />
                </span>
                <h3 className="display mt-5 text-[2rem] font-semibold tracking-tight text-ink">{ikiOdak.akademikGuc.title}</h3>
                <p className="mt-3 text-[1.02rem] leading-[1.6] text-muted">{ikiOdak.akademikGuc.text}</p>
                <div className="relative mt-7 aspect-[16/10] overflow-hidden rounded-[16px] lg:mt-auto">
                  <Image
                    src="/hero/hero-3.jpg"
                    alt="Anaşehir Koleji öğrencileri"
                    fill
                    sizes="(max-width: 1024px) 100vw, 35vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <ol className="grid gap-3 bg-blue-soft/35 p-5 sm:grid-cols-2 sm:p-7">
                {akademikSistem.map((a, i) => {
                  const Icon = sistemIcons[i];
                  return (
                    <li
                      key={a.title}
                      className="group flex flex-col rounded-[16px] bg-panel p-5 shadow-sm transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-md"
                    >
                      <div className="flex items-center justify-between">
                        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-soft text-blue transition-colors duration-300 group-hover:bg-blue group-hover:text-white">
                          <Icon className="h-5 w-5" strokeWidth={1.8} aria-hidden />
                        </span>
                        <span className="display text-2xl font-semibold text-blue/25 transition-colors group-hover:text-red">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <h4 className="display mt-4 text-lg font-semibold tracking-tight text-ink">{a.title}</h4>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted">{a.text}</p>
                    </li>
                  );
                })}
              </ol>
            </div>
          </article>

          {/* LGS Yolculuğu + LGS programme points — navy panel with portrait */}
          <article
            id="lgs-sistemi"
            className="tone-navy relative scroll-mt-[calc(var(--header)+4rem)] overflow-hidden rounded-[22px] bg-ink shadow-[0_24px_60px_-30px_rgba(11,32,69,0.7)]"
          >
            <div className="pointer-events-none absolute inset-0 opacity-15 grid-paper" />
            <div className="pointer-events-none absolute -top-24 right-1/3 h-72 w-72 rounded-full bg-red/25 blur-3xl" aria-hidden />
            <div className="relative grid lg:grid-cols-[minmax(0,1fr)_minmax(0,0.75fr)_minmax(0,0.9fr)]">
              <div className="flex flex-col p-7 sm:p-9">
                <span className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-red text-white shadow-sm">
                  <Target className="h-6 w-6" strokeWidth={1.7} aria-hidden />
                </span>
                <h3 className="display mt-5 text-[2rem] font-semibold tracking-tight text-white">{ikiOdak.lgs.title}</h3>
                <p className="mt-3 text-[1.02rem] leading-[1.6] text-white/75">{ikiOdak.lgs.text}</p>
              </div>
              <ol className="grid content-center gap-3 px-7 pb-7 sm:grid-cols-3 sm:px-9 lg:grid-cols-1 lg:py-9 lg:pr-8 lg:pl-0">
                {programs.lgs.points.map((pt, i) => (
                  <li
                    key={pt.title}
                    className="flex items-center gap-4 rounded-[14px] bg-white/[0.07] p-4 ring-1 ring-white/12 backdrop-blur-sm transition-colors hover:bg-white/[0.12]"
                  >
                    <span className="display flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red text-sm font-semibold text-white">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="display text-lg font-semibold tracking-tight text-white">{pt.title}</span>
                  </li>
                ))}
              </ol>
              <div className="hidden p-4 lg:block lg:py-5 lg:pr-5 lg:pl-0">
                <div className="relative h-full min-h-[20rem] overflow-hidden rounded-[18px] ring-1 ring-white/15">
                  <Image
                    src="/home/lgs-student.png"
                    alt="Anaşehir Koleji öğrencisi"
                    fill
                    sizes="30vw"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </article>
        </div>
      </Section>

      {/* Öğrenci Başarıları — school's achievement posters, shown whole */}
      <section
        id="ogrenci-basarilari"
        className="tone-paper relative scroll-mt-[calc(var(--header)+0.75rem)] overflow-clip py-[clamp(2.6rem,5vw,4.5rem)]"
      >
        <div className="pointer-events-none absolute -top-40 -right-32 h-96 w-96 rounded-full bg-red/10 blur-3xl" aria-hidden />
        <div className="relative mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-10">
          <h2 className="display text-3xl font-semibold tracking-tight sm:text-4xl">Öğrenci Başarıları</h2>

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {[
              { b: basariOne, tag: "Akademik", Icon: Trophy },
              { b: basariSpor, tag: "Sportif", Icon: Medal },
            ].map(({ b, tag, Icon }) => (
              <figure key={b.name} className="flex flex-col overflow-hidden rounded-[22px] bg-panel shadow-[0_18px_50px_-30px_rgba(20,35,58,0.45)] ring-1 ring-line/50">
                <div className="bg-ink/[0.04] p-3 sm:p-4">
                  <Image
                    src={b.image}
                    alt={`${b.name}: ${b.event}, ${b.result}`}
                    width={b.width}
                    height={b.height}
                    sizes="(max-width: 1024px) 100vw, 520px"
                    className="mx-auto h-auto max-h-[34rem] w-auto rounded-[14px] object-contain"
                  />
                </div>
                <figcaption className="relative mt-auto flex items-start gap-4 border-t border-line/60 p-5 sm:p-6">
                  <span className="absolute inset-y-0 left-0 w-1.5 bg-red" aria-hidden />
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-red text-white">
                    <Icon className="h-5 w-5" strokeWidth={1.9} aria-hidden />
                  </span>
                  <span className="min-w-0">
                    <span className="text-xs font-bold tracking-[0.12em] text-red uppercase">{tag}</span>
                    <span className="display mt-0.5 block text-xl font-semibold tracking-tight text-ink">{b.name}</span>
                    <span className="mt-1 block text-sm text-muted">{b.event}</span>
                    <span className="mt-1 block font-semibold text-ink">{b.result}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-10 flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-soft text-blue">
              <Medal className="h-5 w-5" strokeWidth={1.9} aria-hidden />
            </span>
            <h3 className="display text-xl font-semibold tracking-tight text-ink sm:text-2xl">{atletizm.title}</h3>
          </div>
          <ul className="-mx-4 mt-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 [scrollbar-width:none] sm:-mx-6 sm:px-6 lg:mx-0 lg:grid lg:grid-cols-5 lg:overflow-visible lg:px-0">
            {atletizm.items.map((a) => (
              <li key={a.name} className="w-[68%] shrink-0 snap-start sm:w-[40%] lg:w-auto">
                <figure className="h-full overflow-hidden rounded-[18px] bg-panel shadow-sm ring-1 ring-line/50">
                  <Image
                    src={a.image}
                    alt={`${a.name}: ${atletizm.title}, ${a.result}`}
                    width={a.width}
                    height={a.height}
                    sizes="(max-width: 640px) 68vw, (max-width: 1024px) 40vw, 220px"
                    className="h-auto w-full"
                  />
                  <figcaption className="p-4">
                    <span className="display block font-semibold leading-snug text-ink">{a.name}</span>
                    <span className="mt-1 block text-sm leading-snug text-muted">{a.result}</span>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {showDataFlags && (
      <>
      <Section id="sonuclarimiz" tone="paper" title="Sonuçlarımız" lead={akademikBasariPages.sonuclarimiz.lead}>
        <NeedsData id="lgs-sonuclari" />
        <div className="mt-4 overflow-x-auto rounded-[14px] bg-panel shadow-sm">
          <table className="w-full min-w-[40rem] text-left text-sm">
            <thead className="bg-ink text-white">
              <tr>
                {lgsColumns.map((c) => (
                  <th key={c} className="px-4 py-3 font-semibold">{c}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 3 }, (_, r) => (
                <tr key={r} className="border-t border-line">
                  {lgsColumns.map((c) => (
                    <td key={c} className="px-4 py-3 text-muted">—</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section id="mezunlarimiz" tone="paper" title="Mezunlarımız" lead={akademikBasariPages.mezunlarimiz.lead}>
        <NeedsData id="mezunlar" />
      </Section>
      </>
      )}


      <ContactCta image="/hero/hero-2.jpg" />
    </>
  );
}
