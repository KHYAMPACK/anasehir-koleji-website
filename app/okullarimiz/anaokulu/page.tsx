import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Blocks, Drama, Footprints, Languages, Music, Palette, PersonStanding, UsersRound } from "lucide-react";
import { BtnLine, BtnPrimary } from "@/components/Buttons";
import { ContactCta } from "@/components/ContactCta";
import { Section } from "@/components/PageHero";
import { AgeTabs } from "@/components/anaokulu/AgeTabs";
import { ProgramTabs } from "@/components/anaokulu/ProgramTabs";
import {
  anaokuluAgm,
  anaokuluFacts,
  anaokuluIntro,
  anaokuluTour,
  birGun,
  bransSection,
  egitimProgramiTitle,
  gelisimTakibi,
  sinifMevcudu,
  yasGruplariTitle,
  type BransIcon,
} from "@/lib/anaokulu";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Anaokulu",
  description: "Anaşehir Koleji Anaokulu — 3, 4 ve 5 yaş grupları, branş dersleri, yabancı dil ve günlük akış.",
};

const bransIcons: Record<BransIcon, typeof Languages> = {
  languages: Languages,
  blocks: Blocks,
  dance: PersonStanding,
  drama: Drama,
  sport: Footprints,
  palette: Palette,
  music: Music,
};

/** Alternating accents for the branch cards (site palette only). */
const accents = ["#00b1eb", "#e30613"];

const chapters = [
  { href: "#brans-egitimi", name: "Branş Eğitimi" },
  { href: "#yas-gruplari", name: "Yaş Gruplarımız" },
  { href: "#egitim-programi", name: "Eğitim Programımız" },
  { href: "#bir-gun", name: "Bir Gün" },
  { href: "#gelisim-takibi", name: "Gelişim Takibi" },
];

const ekidHref = site.portals.find((p) => p.name.startsWith("Ekid"))?.href;

/*
 * Layout follows the client's reference visual (used as reference only):
 * split hero → branch cards (4+3) → 5-yaş language strip → age groups →
 * class size → program → a day → tracking → AGM 360° → contact.
 * All copy is the client's text from lib/anaokulu.ts (slogans removed).
 */
export default function AnaokuluPage() {
  return (
    <>
      {/* Hero */}
      <section className="tone-paper relative overflow-hidden">
        <div className="mx-auto grid max-w-[1180px] items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14 lg:px-10 lg:py-20">
          <div>
            <Link href="/okullarimiz" className="eyebrow inline-flex items-center gap-2 no-underline hover:text-ink">
              Okullarımız
            </Link>
            <div className="mt-3 flex gap-5">
              <span className="mt-1 hidden h-16 w-1.5 shrink-0 rounded-full bg-red sm:block" aria-hidden />
              <h1 className="display text-5xl font-semibold tracking-tight text-ink sm:text-6xl">Anaokulu</h1>
            </div>
            <div className="mt-6 max-w-[56ch] space-y-3 text-[1.05rem] leading-[1.65] text-muted">
              <p className="display text-xl leading-snug font-medium text-ink">{anaokuluIntro[0].text}</p>
              <p>{anaokuluIntro[1].text}</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <BtnPrimary href="#brans-egitimi" size="lg">Branş Eğitimi</BtnPrimary>
              <BtnLine href="/kayit-iletisim#kampus-turu" size="lg">Kampüs Turu Planla</BtnLine>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-3 rotate-2 rounded-[30px] bg-gradient-to-br from-red to-red/70" aria-hidden />
            <div className="relative aspect-[4/3] overflow-hidden rounded-[26px] ring-4 ring-white">
              <Image
                src="/hero/hero-mobile-2.jpg"
                alt="Anaşehir Koleji kampüsü ve oyun alanları"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
                style={{ objectPosition: "50% 72%" }}
              />
            </div>
          </div>
        </div>

        {/* Facts strip */}
        <div className="border-t border-line/60 bg-canvas/60">
          <dl className="mx-auto grid max-w-[1180px] gap-px px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-10">
            {anaokuluFacts.map((f) => (
              <div key={f.label} className="py-5 lg:pr-6">
                <dt className="text-xs font-bold tracking-[0.14em] text-muted uppercase">{f.label}</dt>
                <dd className="display mt-1.5 text-base leading-snug font-semibold text-ink">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Chapter nav */}
      <nav className="sticky top-[var(--header)] z-30 bg-ink/95 backdrop-blur" aria-label="Anaokulu bölümleri">
        <div className="mx-auto flex max-w-[1180px] gap-x-5 overflow-x-auto [scrollbar-width:none] px-4 py-3 text-sm whitespace-nowrap text-white/70 sm:px-6 lg:px-10 [&::-webkit-scrollbar]:hidden">
          {chapters.map((c) => (
            <a key={c.href} href={c.href} className="hover:text-white">
              {c.name}
            </a>
          ))}
        </div>
      </nav>

      {/* Intro (rest) */}
      <Section tone="ice">
        <div className="grid gap-6 text-[1.02rem] leading-[1.7] text-muted lg:grid-cols-3 lg:gap-10">
          {anaokuluIntro.slice(2).map((p) => (
            <p key={p.text}>{p.text}</p>
          ))}
        </div>
      </Section>

      {/* Branş eğitimi — 7 cards (4+3) + 5-yaş language strip */}
      <section id="brans-egitimi" className="tone-paper relative scroll-mt-[calc(var(--header)+3rem)] overflow-clip py-[clamp(3rem,6vw,5rem)]">
        <div className="relative mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-[62ch] text-center">
            <h2 className="display text-3xl font-semibold tracking-tight sm:text-4xl">{bransSection.title}</h2>
            <p className="mt-4 text-[1.02rem] leading-[1.65] text-muted">{bransSection.lead}</p>
          </div>

          {/* flex-wrap + fixed widths: desktop 4+3 with the second row centred */}
          <ul className="mt-10 flex flex-wrap justify-center gap-4">
            {bransSection.cards.map((c, i) => {
              const Icon = bransIcons[c.icon];
              const accent = accents[i % 2];
              return (
                <li
                  key={c.title}
                  className="group relative flex w-full flex-col overflow-hidden rounded-[18px] border border-line/70 bg-panel p-6 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-[0_18px_40px_-24px_rgba(20,35,58,0.45)] sm:w-[calc(50%-0.5rem)] lg:w-[calc(25%-0.75rem)]"
                >
                  <span
                    className="flex h-12 w-12 items-center justify-center rounded-full transition-colors duration-300"
                    style={{ background: `${accent}1a`, color: accent }}
                  >
                    <Icon className="h-6 w-6" strokeWidth={1.7} aria-hidden />
                  </span>
                  <h3 className="display mt-5 text-lg font-semibold tracking-tight text-ink">{c.title}</h3>
                  <span className="mt-2 h-0.5 w-8 rounded-full" style={{ background: accent }} aria-hidden />
                  <p className="mt-3 text-sm leading-relaxed text-muted">{c.text}</p>
                </li>
              );
            })}
          </ul>

          {/* 5 yaş: İngilizce + Almanca */}
          <div className="tone-navy relative mt-8 grid items-center gap-6 overflow-hidden rounded-[22px] bg-ink p-7 sm:p-9 lg:grid-cols-[auto_minmax(0,1fr)] lg:gap-10">
            <div className="pointer-events-none absolute inset-0 opacity-15 grid-paper" />
            <div className="pointer-events-none absolute -top-24 -right-16 h-64 w-64 rounded-full bg-blue/25 blur-3xl" aria-hidden />
            <div className="relative flex items-center gap-3" aria-hidden>
              <span className="display flex h-20 w-20 items-center justify-center rounded-full bg-white text-2xl font-semibold" style={{ color: "#14233a" }}>
                EN
              </span>
              <span className="display text-2xl font-semibold text-white/50">+</span>
              <span className="display flex h-20 w-20 items-center justify-center rounded-full bg-red text-2xl font-semibold text-white">
                DE
              </span>
            </div>
            <div className="relative">
              <h3 className="display text-2xl font-semibold tracking-tight text-white sm:text-3xl">{bransSection.languages.title}</h3>
              <div className="mt-3 max-w-[70ch] space-y-2 text-white/75">
                {bransSection.languages.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-[18px] bg-canvas/70 p-6 sm:flex-row sm:items-center sm:p-7">
            <p className="max-w-[70ch] text-[1.02rem] leading-[1.6] text-muted">{bransSection.closing}</p>
            <Link
              href="/egitim-modeli#agm-360"
              className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-blue no-underline hover:underline"
            >
              AGM 360° Anaşehir Gelişim Modeli
              <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      {/* Yaş grupları */}
      <Section id="yas-gruplari" tone="ice" title={yasGruplariTitle}>
        <AgeTabs />
      </Section>

      {/* 16–18 kişilik sınıflar */}
      <section className="tone-navy relative overflow-hidden py-[clamp(3rem,6vw,4.5rem)]">
        <div className="pointer-events-none absolute inset-0 opacity-15 grid-paper" />
        <div className="relative mx-auto grid max-w-[1180px] items-center gap-8 px-4 sm:px-6 lg:grid-cols-[auto_minmax(0,1fr)] lg:gap-14 lg:px-10">
          <div className="flex items-center gap-4">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-red text-white">
              <UsersRound className="h-8 w-8" strokeWidth={1.6} aria-hidden />
            </span>
            <p className="display text-6xl leading-none font-semibold text-white sm:text-7xl">16–18</p>
          </div>
          <div>
            <h2 className="display text-2xl font-semibold tracking-tight text-white sm:text-3xl">{sinifMevcudu.title}</h2>
            <div className="mt-3 max-w-[70ch] space-y-2 text-white/75">
              {sinifMevcudu.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Eğitim programı */}
      <Section id="egitim-programi" tone="paper" title={egitimProgramiTitle}>
        <ProgramTabs />
      </Section>

      {/* Bir gün */}
      <Section id="bir-gun" tone="ice" title={birGun.title} lead={birGun.lead}>
        <ol className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {birGun.steps.map((s, i) => (
            <li key={s.title} className="relative flex gap-4 rounded-[16px] bg-panel p-5 shadow-sm">
              <span className="display flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-semibold text-white">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0">
                <h3 className="display text-base leading-snug font-semibold text-ink">{s.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* Gelişim takibi + AGM 360° */}
      <Section id="gelisim-takibi" tone="paper">
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="flex flex-col rounded-[20px] bg-panel p-7 shadow-sm ring-1 ring-line/50 sm:p-9">
            <h2 className="display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">{gelisimTakibi.title}</h2>
            <div className="mt-4 space-y-3 text-[0.98rem] leading-[1.65] text-muted">
              {gelisimTakibi.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            {ekidHref && (
              <a
                href={ekidHref}
                target="_blank"
                rel="noreferrer"
                className="mt-auto inline-flex items-center gap-2 self-start pt-6 text-sm font-semibold text-blue no-underline hover:underline"
              >
                Ekid+ Giriş
                <ArrowUpRight className="h-4 w-4" strokeWidth={2} aria-hidden />
              </a>
            )}
          </article>
          <article className="tone-navy relative flex flex-col overflow-hidden rounded-[20px] bg-ink p-7 sm:p-9">
            <div className="pointer-events-none absolute inset-0 opacity-15 grid-paper" />
            <p className="display relative text-4xl font-extrabold tracking-tight italic">
              <span className="text-white">AGM</span> <span className="text-red">360°</span>
            </p>
            <h2 className="display relative mt-3 text-2xl font-semibold tracking-tight text-white">{anaokuluAgm.title}</h2>
            <div className="relative mt-4 space-y-3 text-[0.98rem] leading-[1.65] text-white/75">
              {anaokuluAgm.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <div className="relative mt-auto pt-6">
              <BtnPrimary href="/egitim-modeli#agm-360">AGM 360° Modeli</BtnPrimary>
            </div>
          </article>
        </div>
      </Section>

      {/* Tour invite (client text) above the shared contact band */}
      <Section tone="ice">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="max-w-[64ch]">
            <h2 className="display text-2xl font-semibold tracking-tight sm:text-3xl">{anaokuluTour.title}</h2>
            <p className="mt-3 text-[1.02rem] leading-[1.6] text-muted">{anaokuluTour.text}</p>
          </div>
          <BtnPrimary href="/kayit-iletisim#kampus-turu" size="lg">Kampüs Turu Planla</BtnPrimary>
        </div>
      </Section>

      <ContactCta image="/hero/hero-3.jpg" />
    </>
  );
}
