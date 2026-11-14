import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  Bus,
  HeartHandshake,
  Palette,
  PencilLine,
  Puzzle,
  Mic,
  ShieldCheck,
  Sparkles,
  Trophy,
  UserCheck,
  Waves,
  type LucideIcon,
} from "lucide-react";
import { BranchLessons } from "@/components/BranchLessons";
import { BtnLine, BtnPrimary } from "@/components/Buttons";
import { InstagramFeed } from "@/components/InstagramFeed";
import { NeedsData } from "@/components/NeedsData";
import { Section } from "@/components/PageHero";
import { ortaokulDay } from "@/lib/copy";
import {
  branchLessons,
  eveningStudy,
  facilities,
  kampusCopy as k,
  safetyHealth,
  socialResponsibility,
} from "@/lib/kampusYasami";
import { sections } from "@/lib/nav";
import { showDataFlags } from "@/lib/needsData";
import { programs } from "@/lib/programs";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Kampüs Yaşamı" };

const chapters = sections.find((s) => s.name === "Kampüs Yaşamı")!.items;

/** Mosaic tiles: Kampüs uses a real aerial photo; the other three wait for real
 * photos (client rule: no stock / mislabelled images) and show an icon panel. */
const mosaic: { title: string; href: string; icon: LucideIcon; from: string; to: string }[] = [
  { title: "Spor", href: "#spor", icon: Trophy, from: "#e5232d", to: "#a10f17" },
  { title: "Sanat", href: "#sanat", icon: Palette, from: "#1fb0c4", to: "#0d6e83" },
  { title: "Kulüpler", href: "#kulupler", icon: Puzzle, from: "#8f55d6", to: "#55279a" },
];

const dayIcons: Record<string, LucideIcon> = {
  "Eğitim ve Öğretim": BookOpen,
  "Akşam Etütleri / Ödev Saati": PencilLine,
};

const safetyIcons = [Bus, UserCheck, ShieldCheck];

/** Small red label + heavy client heading + one client sentence. */
function Heading({ label, title, text, dark = false }: { label: string; title: string; text: string; dark?: boolean }) {
  return (
    <>
      <p className={`text-sm font-bold tracking-[0.14em] uppercase ${dark ? "text-blue" : "text-red"}`}>{label}</p>
      <h2 className={`display mt-3 text-4xl leading-[1.05] font-extrabold tracking-tight sm:text-5xl ${dark ? "text-white" : "text-ink"}`}>
        {title}
      </h2>
      <p className={`mt-4 max-w-[52ch] text-[1.06rem] leading-[1.5] sm:text-lg ${dark ? "text-white/75" : "text-muted"}`}>{text}</p>
    </>
  );
}

export default function KampusYasamiPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="tone-navy relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-25 grid-paper" />
        <div className="relative mx-auto grid max-w-[1180px] items-center gap-10 px-4 py-14 sm:px-6 lg:min-h-[520px] lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:px-10">
          <div className="min-w-0">
            <p className="text-sm font-bold tracking-[0.14em] text-blue">{k.eyebrow}</p>
            <h1 className="display mt-4 text-[2.2rem] leading-[1.06] font-extrabold tracking-tight text-white sm:text-5xl lg:text-[3.3rem]">
              {k.title.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
            <p className="mt-6 max-w-[50ch] text-[1.06rem] leading-[1.5] text-white/80 sm:text-lg">{k.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <BtnPrimary href="#kampus" size="lg">{k.buttons.kampus}</BtnPrimary>
              <BtnLine href="#spor" size="lg">{k.buttons.yasam}</BtnLine>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[22px] ring-1 ring-white/15">
            <Image src="/hero/hero-1.jpg" alt="Anaşehir Koleji kampüsü" fill priority sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" />
          </div>
        </div>
      </section>

      <nav className="sticky top-[var(--header)] z-30 bg-ink/95 backdrop-blur" aria-label="Kampüs Yaşamı bölümleri">
        <div className="mx-auto flex max-w-[1180px] gap-x-5 overflow-x-auto px-4 py-3 text-sm whitespace-nowrap text-white/70 sm:px-6 lg:px-10">
          {chapters.map((c) => (
            <a key={c.href} href={`#${c.href.split("#")[1]}`} className="hover:text-white">
              {c.name}
            </a>
          ))}
        </div>
      </nav>

      {/* ── Anaşehir'de Yaşam: Instagram feed (placeholder until connected) ── */}
      <Section id="anasehirde-yasam" tone="paper" title="Anaşehir'de Yaşam">
        <InstagramFeed />
      </Section>

      {/* ── Mosaic (1 large + 3 small, 16px gap) + 4 cards ──── */}
      <Section tone="ice">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          <Link href="#kampus" className="group relative col-span-2 h-56 overflow-hidden rounded-[18px] sm:h-64 lg:col-span-1 lg:h-72">
            <Image src="/hero/hero-mobile-2.jpg" alt="" fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
            <span className="absolute inset-x-0 bottom-0 bg-ink/90 py-3.5 text-center text-sm font-bold tracking-[0.12em] text-white uppercase">Kampüs</span>
          </Link>
          {mosaic.map((m, i) => (
            <Link
              key={m.title}
              href={m.href}
              className={`group relative flex ${i === mosaic.length - 1 ? "col-span-2 lg:col-span-1" : ""} h-44 items-center justify-center overflow-hidden rounded-[18px] sm:h-52 lg:h-72`}
              style={{ background: `linear-gradient(150deg, ${m.from}, ${m.to})` }}
            >
              <m.icon className="h-14 w-14 -translate-y-4 text-white/90 transition-transform duration-500 group-hover:scale-110" strokeWidth={1.4} aria-hidden />
              <m.icon className="pointer-events-none absolute -top-6 -right-6 h-32 w-32 text-white/10" strokeWidth={1.2} aria-hidden />
              <span className="absolute inset-x-0 bottom-0 bg-ink/85 py-3.5 text-center text-sm font-bold tracking-[0.12em] text-white uppercase">
                {m.title}
              </span>
            </Link>
          ))}
        </div>

        <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {k.cards.map((c) => (
            <li key={c.title}>
              <Link
                href={c.href}
                className="group flex h-full items-center justify-between gap-3 rounded-[16px] border-t-4 bg-panel px-5 py-4 no-underline shadow-sm transition-transform duration-200 hover:-translate-y-0.5"
                style={{ borderTopColor: c.color }}
              >
                <span>
                  <span className="display block text-lg font-bold text-ink">{c.title}</span>
                  <span className="block text-sm text-muted">{c.caption}</span>
                </span>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-muted transition-colors group-hover:text-red" aria-hidden />
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      {/* ── Kampüs Deneyimi (+ güvenlik & sağlık) ──────────── */}
      <Section id="kampus" tone="paper">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
          <div>
            <Heading label={k.kampus.label} title={k.kampus.title} text={k.kampus.text} />
          </div>
          <div id="guvenlik-saglik" className="scroll-mt-[calc(var(--header)+4rem)]">
            <p className="display text-lg font-bold text-ink">Güvenlik & Sağlık</p>
            <ul className="mt-4 grid gap-3">
              {safetyHealth.map((s, i) => {
                const Icon = safetyIcons[i] ?? ShieldCheck;
                return (
                  <li key={s.title} className="flex items-center gap-4 rounded-[16px] bg-canvas p-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ink text-white">
                      <Icon className="h-5 w-5" strokeWidth={1.8} aria-hidden />
                    </span>
                    <span className="display text-base font-semibold text-ink">{s.title}</span>
                  </li>
                );
              })}
            </ul>
            <NeedsData id="saglik-bilgileri" className="mt-3" />
          </div>
        </div>
        {(showDataFlags || facilities.some((f) => f.photo)) && (
          <ul id="kampusumuz" className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {facilities.map((f) => (
              <li key={f.name}>
                {f.photo ? (
                  <figure>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-[14px] bg-panel-2">
                      <Image src={f.photo} alt={`Anaşehir Koleji ${f.name}`} fill sizes="(max-width: 640px) 50vw, 25vw" className="object-cover" />
                    </div>
                    <figcaption className="mt-2 text-sm font-semibold text-ink">{f.name}</figcaption>
                  </figure>
                ) : (
                  <NeedsData id="kampus-fotograflari" label={`${f.name} — fotoğraf`} ratio="aspect-[4/3]" compact />
                )}
              </li>
            ))}
          </ul>
        )}
      </Section>

      {/* ── Uygulamalı Branş Dersleri (client revision, Nov 2026) ── */}
      <Section id="brans-dersleri" tone="ice" title={branchLessons.title}>
        <BranchLessons />
      </Section>

      {/* ── Spor: navy, swimming highlight ───────────────────── */}
      <section id="spor" className="tone-navy relative scroll-mt-[calc(var(--header)+3rem)] overflow-hidden py-[clamp(3rem,6vw,5rem)]">
        <div className="pointer-events-none absolute inset-0 opacity-20 grid-paper" />
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-[26rem] w-[26rem] rounded-full bg-red/25 blur-3xl" aria-hidden />
        <div className="relative mx-auto grid max-w-[1180px] items-start gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-14 lg:px-10">
          <div>
            <Heading dark label={k.spor.label} title={k.spor.title} text={k.spor.text} />
          </div>
          <article className="rounded-[22px] bg-white/[0.07] p-7 ring-1 ring-white/12 sm:p-9">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-blue text-white">
              <Waves className="h-6 w-6" strokeWidth={1.7} aria-hidden />
            </span>
            <h3 className="display mt-5 text-2xl font-bold text-white">{programs.swimming.title}</h3>
            <ol className="mt-5 space-y-3">
              {programs.swimming.points.map((p, i) => (
                <li key={p.title} className="flex items-center gap-4 border-b border-white/10 pb-3 last:border-0">
                  <span className="display text-sm font-bold text-blue">{String(i + 1).padStart(2, "0")}</span>
                  <span className="display text-lg font-semibold text-white">{p.title}</span>
                </li>
              ))}
            </ol>
          </article>
        </div>
      </section>

      {/* ── Sanat: blush, colourful branch tiles + radio card ── */}
      <Section id="sanat" tone="blush">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-14">
          <div>
            <Heading label={k.sanat.label} title={k.sanat.title} text={k.sanat.text} />
          </div>
          <div className="rounded-[22px] bg-panel p-7 shadow-sm sm:p-9">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-red text-white">
              <Mic className="h-6 w-6" strokeWidth={1.7} aria-hidden />
            </span>
            <h3 className="display mt-5 text-2xl font-bold text-ink">{programs.radio.title}</h3>
            <ul className="mt-5 flex flex-wrap gap-2">
              {programs.radio.points
                .filter((p) => site.radioActive || p.title !== "Okul Radyosu")
                .map((p) => (
                <li key={p.title} className="rounded-full bg-blush px-3.5 py-1.5 text-sm font-semibold text-ink">
                  {p.title}
                </li>
              ))}
            </ul>
            {site.radioActive && (
              <Link href="/radyo" className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-red">
                Anaşehir Radyo <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            )}
          </div>
        </div>
      </Section>

      {/* ── Kulüpler + sosyal sorumluluk ─────────────────────── */}
      <Section id="kulupler" tone="ice">
        <div className="max-w-3xl">
          <Heading label={k.kulupler.label} title={k.kulupler.title} text={k.kulupler.text} />
        </div>
        <div id="sosyal-sorumluluk" className="mt-10 scroll-mt-[calc(var(--header)+4rem)] rounded-[22px] bg-panel p-6 shadow-sm sm:p-8">
          <p className="display flex items-center gap-2.5 text-xl font-bold text-ink">
            <HeartHandshake className="h-6 w-6 text-red" strokeWidth={1.7} aria-hidden />
            Sosyal Sorumluluk
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {socialResponsibility.map((s) => (
              <li key={s.title} className="rounded-full border border-line px-4 py-2 text-sm font-semibold text-ink">
                {s.title}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* ── Günlük Yaşam: horizontal day timeline ───────────── */}
      <Section id="gunluk-akis" tone="paper">
        <div className="max-w-3xl">
          <Heading label={k.gunluk.label} title={k.gunluk.title} text={k.gunluk.text} />
        </div>
        <ol className="relative mx-auto mt-12 grid max-w-2xl gap-6 sm:grid-cols-2">
          <span className="absolute top-7 right-[25%] left-[25%] hidden h-0.5 bg-red/25 sm:block" aria-hidden />
          {ortaokulDay.steps
            .filter((s) => s.time)
            .map((s) => {
              const Icon = dayIcons[s.title] ?? Sparkles;
              return (
                <li key={s.title} className="relative flex flex-col items-center text-center">
                  <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-red text-white ring-8 ring-panel">
                    <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden />
                  </span>
                  <span className="display mt-4 text-xl font-bold text-ink">{s.time}</span>
                  <span className="mt-1 text-sm font-semibold text-muted">{s.title}</span>
                </li>
              );
            })}
        </ol>
        <div className="mx-auto mt-12 max-w-3xl rounded-[22px] bg-canvas/60 p-6 ring-1 ring-line/60 sm:p-8">
          <p className="display flex flex-wrap items-baseline gap-x-3 text-xl font-bold text-ink">
            {eveningStudy.title}
            <span className="text-base font-semibold text-red">{eveningStudy.time}</span>
          </p>
          <p className="mt-3 text-muted">{eveningStudy.text}</p>
        </div>
      </Section>

      {/* ── Closing ──────────────────────────────────────────── */}
      <section className="tone-navy relative overflow-hidden py-[clamp(3.5rem,7vw,5.5rem)] text-center">
        <div className="pointer-events-none absolute inset-0 opacity-20 grid-paper" />
        <p className="display relative mx-auto max-w-[24ch] px-4 text-3xl leading-tight font-bold text-white italic sm:text-4xl">
          {k.closing}
        </p>
        <div className="relative mt-8 flex justify-center">
          <BtnPrimary href="/kayit-iletisim#on-kayit" size="lg">Başvuru Yap</BtnPrimary>
        </div>
      </section>
    </>
  );
}
