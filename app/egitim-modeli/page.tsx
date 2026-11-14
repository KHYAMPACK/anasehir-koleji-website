import type { Metadata } from "next";
import { ArrowUpRight, Bike, ChartNoAxesCombined, Drama, Droplets, FlaskConical, Globe, HeartHandshake, Leaf, Trophy, MessagesSquare, Recycle, Repeat2, TreePine, TrendingUp, UsersRound } from "lucide-react";
import Image from "next/image";
import { BtnLine, BtnPrimary } from "@/components/Buttons";
import { AgmExplorer } from "@/components/AgmExplorer";
import { agmIcons } from "@/components/agmIcons";
import { NeedsData } from "@/components/NeedsData";
import { Section } from "@/components/PageHero";
import { agm360, agmAreas } from "@/lib/agm360";
import { akademikTakip, pdr } from "@/lib/egitimModeli";
import { sections } from "@/lib/nav";
import { showDataFlags } from "@/lib/needsData";
import { programs } from "@/lib/programs";
import { surdurulebilir } from "@/lib/surdurulebilir";
import { agmUygulamada } from "@/lib/agmUygulamada";
import {
  olcmeApproachTitle,
  olcmeIntro,
  olcmeLevels,
  olcmeLevelsTitle,
  olcmeSteps,
  olcmeStepsTitle,
  olcmeVeli,
} from "@/lib/olcmeDegerlendirme";
import { ApproachTabs } from "@/components/olcme/ApproachTabs";
import { LevelTabs } from "@/components/olcme/LevelTabs";
import { site } from "@/lib/site";

/** Icons for the Sürdürülebilir Yaşam areas (replacing the brief's emojis). */
const sustainIcons = {
  tree: TreePine,
  recycle: Recycle,
  droplets: Droplets,
  repeat: Repeat2,
  hands: HeartHandshake,
  globe: Globe,
} as const;

/** Icons for the AGM Uygulamada cards. */
const uygulamaIcons = { flask: FlaskConical, trophy: Trophy, bike: Bike, drama: Drama } as const;

export const metadata: Metadata = { title: "Eğitim Modeli" };

const chapters = sections.find((s) => s.name === "Eğitim Modeli")!.items;
/** Icons for the PDR circles, in pdr.points order (Bireysel Görüşme, Aile İşbirliği, Gelişim Takibi). */
const pdrIcons = [MessagesSquare, UsersRound, TrendingUp];

const area = (slug: string) => agmAreas.find((a) => a.slug === slug)!;

/** Small "part of AGM 360°" chip tying a section back to its wheel colour. */
function AreaChip({ slug, dark = false }: { slug: string; dark?: boolean }) {
  const a = area(slug);
  const Icon = agmIcons[a.icon];
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full py-1 pr-3 pl-1 text-xs font-semibold ${dark ? "bg-white/10 text-white ring-1 ring-white/20" : "bg-panel text-ink shadow-sm"}`}
    >
      <span
        className="flex h-6 w-6 items-center justify-center rounded-full text-white"
        style={{ background: `linear-gradient(135deg, ${a.from}, ${a.to})` }}
      >
        <Icon className="h-3.5 w-3.5" strokeWidth={2} aria-hidden />
      </span>
      AGM 360° · {a.title}
    </span>
  );
}

export default function EgitimModeliPage() {
  return (
    <>
      {/* 01 · Hero */}
      <section className="tone-navy relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-25 grid-paper" />
        <div className="relative mx-auto grid max-w-[1180px] items-center gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:px-10">
          <div className="flex gap-5">
            <span className="mt-1 hidden h-16 w-1.5 shrink-0 rounded-full bg-red sm:block" aria-hidden />
            <div className="min-w-0">
              <p className="eyebrow">Anaşehir Eğitim Modeli</p>
              <h1 className="display mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-[3.3rem] lg:leading-[1.08]">
                Bütünsel Öğrenci Gelişimi
              </h1>
              <p className="display mt-5 text-xl text-blue italic sm:text-2xl">{agm360.tagline.join(" ")}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <BtnPrimary href="#agm-360" size="lg">AGM 360° Modelini Keşfet</BtnPrimary>
                <BtnLine href="/kayit-iletisim#on-kayit" size="lg">Başvuru Yap</BtnLine>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-3 -z-0 rotate-2 rounded-[26px] bg-red/80" aria-hidden />
            <div className="relative aspect-[4/3] overflow-hidden rounded-[22px] ring-4 ring-white/10">
              <Image
                src="/hero/hero-2.jpg"
                alt="Anaşehir Koleji öğrencileri"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <nav className="sticky top-[var(--header)] z-30 bg-ink/95 backdrop-blur" aria-label="Eğitim Modeli bölümleri">
        <div className="mx-auto flex max-w-[1180px] gap-x-5 overflow-x-auto [scrollbar-width:none] px-4 [&::-webkit-scrollbar]:hidden py-3 text-sm whitespace-nowrap text-white/70 sm:px-6 lg:px-10">
          {chapters.map((c) => (
            <a key={c.href} href={`#${c.href.split("#")[1]}`} className="hover:text-white">
              {c.name}
            </a>
          ))}
        </div>
      </nav>

      {/* 02 + 03 · AGM 360° overview + 8 areas */}
      <Section id="agm-360" tone="ice">
        <AgmExplorer
          intro={
            <>
              <p className="eyebrow flex items-center gap-3">
                <span className="h-5 w-1 rounded-full bg-red" aria-hidden />
                Eğitim Modelimiz
              </p>
              <h2 className="display mt-4 text-5xl font-extrabold tracking-tight italic sm:text-6xl">
                <span className="text-ink">AGM</span> <span className="text-red">360°</span>
              </h2>
              <p className="display mt-2 text-sm font-bold tracking-[0.18em] text-ink uppercase">{agm360.fullName}</p>
              <p className="display mt-6 text-2xl leading-snug font-semibold text-ink italic">
                {agm360.tagline[0]}
                <br />
                {agm360.tagline[1]}
              </p>
              <p className="mt-6 max-w-[56ch] text-[1.02rem] leading-[1.65] text-muted">{agm360.description}</p>
            </>
          }
        />
      </Section>

      {/* 04 · Akademik Güç ve Takip — split: title left, big numbered rows right */}
      <Section id="akademik-takip" tone="paper">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
          <div className="lg:sticky lg:top-[calc(var(--header)+5rem)] lg:self-start">
            <AreaChip slug="akademik-derinlik" />
            <h2 className="display mt-5 text-4xl leading-[1.05] font-semibold tracking-tight sm:text-5xl">
              Akademik Güç
              <br />
              <span className="text-red">ve Takip</span>
            </h2>
          </div>
          <ol className="divide-y divide-line border-y border-line">
            {akademikTakip.points.map((p, i) => (
              <li key={p.title} className="group flex items-center gap-6 py-7 sm:gap-10">
                <span className="display w-16 shrink-0 text-5xl font-semibold text-red/25 transition-colors group-hover:text-red sm:text-6xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">{p.title}</span>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* 04b · Ölçme ve Değerlendirme Sistemi — client copy (lib/olcmeDegerlendirme.ts) */}
      <section
        id="olcme-degerlendirme"
        className="tone-ice relative scroll-mt-[calc(var(--header)+3rem)] overflow-clip py-[clamp(3rem,6vw,5rem)]"
      >
        <div className="pointer-events-none absolute -top-40 -right-40 h-[28rem] w-[28rem] rounded-full bg-red/10 blur-3xl" aria-hidden />
        <div className="relative mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-10">
          <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-14">
            <div>
              <AreaChip slug="akademik-derinlik" />
              <h2 className="display mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">{olcmeIntro.title}</h2>
              <p className="display mt-5 text-xl leading-snug font-medium text-ink">{olcmeIntro.lead}</p>
              <div className="mt-4 space-y-3 text-[1.02rem] leading-[1.65] text-muted">
                {olcmeIntro.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>
            <div className="tone-navy relative overflow-hidden rounded-[20px] bg-ink p-7 shadow-[0_24px_60px_-30px_rgba(11,32,69,0.7)] lg:mt-16">
              <div className="pointer-events-none absolute inset-0 opacity-15 grid-paper" />
              <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-red text-white">
                <ChartNoAxesCombined className="h-6 w-6" strokeWidth={1.7} aria-hidden />
              </span>
              <p className="display relative mt-5 text-xl leading-snug font-semibold text-white">{olcmeIntro.highlight}</p>
              <div className="relative mt-6 flex flex-wrap gap-2">
                {olcmeLevels
                  .filter((l) => l.rhythm)
                  .map((l) => (
                    <span key={l.grades} className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/15">
                      {l.grades}: {l.rhythm}
                    </span>
                  ))}
              </div>
            </div>
          </div>

          <h3 className="display mt-16 text-2xl font-semibold tracking-tight sm:text-3xl">{olcmeApproachTitle}</h3>
          <div className="mt-6">
            <ApproachTabs />
          </div>

          <h3
            id="olcme-kademeler"
            className="display mt-16 scroll-mt-[calc(var(--header)+4rem)] text-2xl font-semibold tracking-tight sm:text-3xl"
          >
            {olcmeLevelsTitle}
          </h3>
          <div className="mt-6">
            <LevelTabs />
          </div>

          <h3 className="display mt-16 text-2xl font-semibold tracking-tight sm:text-3xl">{olcmeStepsTitle}</h3>
          <ol className="relative mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-3">
            <span className="absolute top-7 right-[10%] left-[10%] hidden h-0.5 bg-gradient-to-r from-blue via-red to-blue lg:block" aria-hidden />
            {olcmeSteps.map((st, i) => (
              <li key={st.title} className="relative flex flex-col items-start rounded-[16px] bg-panel p-5 shadow-sm lg:items-center lg:bg-transparent lg:p-0 lg:text-center lg:shadow-none">
                <span className="display relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-ink text-lg font-semibold text-white ring-4 ring-canvas">
                  {i + 1}
                </span>
                <span className="display mt-4 text-lg font-semibold tracking-tight text-ink uppercase">{st.title}</span>
                <span className="mt-1.5 text-sm leading-relaxed text-muted lg:px-2">{st.text}</span>
              </li>
            ))}
          </ol>

          <div className="tone-navy relative mt-16 grid items-center gap-6 overflow-hidden rounded-[22px] bg-ink p-7 sm:p-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-12">
            <div className="pointer-events-none absolute inset-0 opacity-15 grid-paper" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-blue/25 blur-3xl" aria-hidden />
            <div className="relative">
              <h3 className="display text-2xl font-semibold tracking-tight text-white sm:text-3xl">{olcmeVeli.title}</h3>
              <div className="mt-4 max-w-[64ch] space-y-3 text-white/75">
                {olcmeVeli.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>
            <a
              href={site.portals.find((p) => p.name.startsWith("SebitVcloud"))?.href}
              target="_blank"
              rel="noreferrer"
              className="relative inline-flex items-center gap-2 justify-self-start rounded-full bg-white px-6 py-3.5 text-[0.95rem] font-semibold no-underline shadow-lg transition-transform duration-200 hover:-translate-y-0.5"
              style={{ color: "#14233a" }}
            >
              SebitVcloud Giriş
              <ArrowUpRight className="h-4 w-4 text-red" strokeWidth={2.2} aria-hidden />
            </a>
          </div>
        </div>
      </section>

      {/* 05 · Future Skills & Küresel Yetkinlik — dark band, two program columns as chip clouds */}
      <section id="future-skills" className="tone-navy relative scroll-mt-[calc(var(--header)+3rem)] overflow-hidden py-[clamp(3rem,6vw,5rem)]">
        <div className="pointer-events-none absolute inset-0 opacity-20 grid-paper" />
        <div className="pointer-events-none absolute -top-40 -right-40 h-[28rem] w-[28rem] rounded-full bg-blue/20 blur-3xl" aria-hidden />
        <div className="relative mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-10">
          <div className="flex flex-wrap gap-2">
            <AreaChip slug="gelecek-yetkinlikleri" dark />
            <AreaChip slug="kuresel-yetkinlik" dark />
          </div>
          <h2 className="display mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Future Skills <span className="text-blue">&amp;</span> Küresel Yetkinlik
          </h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {[
              { id: undefined, icon: area("gelecek-yetkinlikleri").icon, p: programs.futureSkills },
              { id: "yabanci-diller", icon: area("kuresel-yetkinlik").icon, p: programs.language },
            ].map(({ id, icon, p }) => {
              const Icon = agmIcons[icon];
              return (
                <article
                  key={p.title}
                  id={id}
                  className="scroll-mt-[calc(var(--header)+4rem)] rounded-[22px] bg-white/[0.06] p-7 ring-1 ring-white/10 backdrop-blur-sm sm:p-9"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-blue text-white">
                    <Icon className="h-6 w-6" strokeWidth={1.6} aria-hidden />
                  </span>
                  <h3 className="display mt-5 text-2xl font-semibold text-white">{p.title}</h3>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {p.points.map((pt) => (
                      <li key={pt.title} className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/15">
                        {pt.title}
                      </li>
                    ))}
                  </ul>
                  <p className="display mt-8 text-lg text-blue italic">{p.closing}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 06 · Sosyal-Duygusal Gelişim ve PDR — centred, big purple bubbles */}
      <Section id="pdr-ogrenci-gelisimi" tone="blush">
        <div className="flex flex-col items-center text-center">
          <AreaChip slug="sosyal-duygusal-gelisim" />
          <h2 className="display mt-5 max-w-[18ch] text-4xl font-semibold tracking-tight sm:text-5xl">
            Sosyal-Duygusal Gelişim ve PDR
          </h2>
          <ul className="relative mt-14 grid w-full max-w-4xl gap-12 sm:grid-cols-3 sm:gap-6">
            {/* Dotted thread linking the three circles (desktop) */}
            <span
              className="absolute top-1/2 right-[16%] left-[16%] hidden border-t-2 border-dashed border-[#8f55d6]/30 sm:block"
              aria-hidden
            />
            {pdr.points.map((p, i) => {
              const a = area("sosyal-duygusal-gelisim");
              const Icon = pdrIcons[i] ?? HeartHandshake;
              return (
                <li key={p.title} className="group relative mx-auto aspect-square w-full max-w-[15rem]">
                  {/* Outer dashed orbit — turns slowly on hover */}
                  <span
                    className="absolute -inset-3 rounded-full border-2 border-dashed border-[#8f55d6]/35 transition-colors group-hover:border-[#8f55d6]/70 motion-safe:group-hover:animate-[spin_14s_linear_infinite]"
                    aria-hidden
                  />
                  <div
                    className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-full p-8 text-white shadow-[0_18px_40px_-18px_rgba(85,39,154,0.6)] transition-transform duration-300 group-hover:-translate-y-1.5"
                    style={{ background: `linear-gradient(${135 + i * 40}deg, ${a.from}, ${a.to})` }}
                  >
                    {/* Soft gloss + big faint watermark icon */}
                    <span className="pointer-events-none absolute inset-x-6 top-3 h-1/3 rounded-full bg-white/15 blur-xl" aria-hidden />
                    <Icon
                      className="pointer-events-none absolute -right-6 -bottom-6 h-28 w-28 text-white/10"
                      strokeWidth={1.2}
                      aria-hidden
                    />
                    <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/30 transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-7 w-7" strokeWidth={1.7} aria-hidden />
                    </span>
                    <span className="display relative mt-4 text-xl leading-snug font-semibold sm:text-[1.35rem]">
                      {p.title}
                    </span>
                    <span className="relative mt-3 h-1 w-8 rounded-full bg-white/60 transition-[width] duration-300 group-hover:w-14" aria-hidden />
                  </div>
                  {/* Step number */}
                  <span className="display absolute top-1 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-sm font-bold text-[#55279a] shadow-md ring-4 ring-blush">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </Section>

      {/* 07 · Sürdürülebilir Yaşam Bilinci — client copy (lib/surdurulebilir.ts) */}
      <section
        id="surdurulebilir-yasam"
        className="tone-ice relative scroll-mt-[calc(var(--header)+3rem)] overflow-hidden py-[clamp(3rem,6vw,5rem)]"
      >
        <Leaf
          className="pointer-events-none absolute -top-10 -right-16 h-[22rem] w-[22rem] -rotate-12 text-[#3d8a21] opacity-[0.06]"
          strokeWidth={1}
          aria-hidden
        />
        <div className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-[#76bb43]/15 blur-3xl" aria-hidden />
        <div className="relative mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-10">
          <div className="max-w-[62ch]">
            <AreaChip slug="surdurulebilir-yasam-bilinci" />
            <h2 className="display mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">Sürdürülebilir Yaşam Bilinci</h2>
            <div className="mt-5 space-y-3 text-[1.05rem] leading-[1.65] text-muted">
              {surdurulebilir.intro.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>

          <h3 className="display mt-12 text-2xl font-semibold tracking-tight">{surdurulebilir.areasTitle}</h3>
          <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {surdurulebilir.areas.map((a, i) => {
              const Icon = sustainIcons[a.icon];
              return (
                <li
                  key={a.title}
                  className="group relative flex flex-col rounded-[18px] bg-panel p-6 shadow-sm ring-1 ring-line/40 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-22px_rgba(61,138,33,0.55)]"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#76bb43]/15 text-[#3d8a21] transition-colors duration-300 group-hover:bg-gradient-to-br group-hover:from-[#76bb43] group-hover:to-[#3d8a21] group-hover:text-white">
                      <Icon className="h-6 w-6" strokeWidth={1.7} aria-hidden />
                    </span>
                    <span className="display text-2xl font-semibold text-[#3d8a21]/25">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h4 className="display mt-5 text-lg leading-snug font-semibold tracking-tight text-ink">{a.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{a.text}</p>
                  <span className="absolute inset-x-6 bottom-0 h-1 origin-left scale-x-0 rounded-full bg-[#76bb43] transition-transform duration-300 group-hover:scale-x-100" aria-hidden />
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* 08 · AGM Uygulamada — client copy (lib/agmUygulamada.ts) */}
      <Section id="agm-uygulamada" tone="paper">
        <div className="max-w-[62ch]">
          <p className="eyebrow flex items-center gap-3">
            <span className="h-5 w-1 rounded-full bg-red" aria-hidden />
            AGM 360°
          </p>
          <h2 className="display mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">{agmUygulamada.title}</h2>
          <p className="mt-5 text-[1.05rem] leading-[1.65] text-muted">{agmUygulamada.intro}</p>
        </div>

        <ul className="mt-12 grid gap-5 md:grid-cols-2">
          {agmUygulamada.items.map((it, i) => {
            const Icon = uygulamaIcons[it.icon];
            return (
              <li
                key={it.title}
                className="group flex flex-col overflow-hidden rounded-[20px] bg-panel shadow-sm ring-1 ring-line/50 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_-28px_rgba(20,35,58,0.5)]"
              >
                {/* Photo when supplied; otherwise a coloured icon header */}
                <div className="relative aspect-[16/7] overflow-hidden">
                  {it.photo ? (
                    <Image
                      src={it.photo}
                      alt={it.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                  ) : (
                    <div
                      className="absolute inset-0 flex items-center justify-center"
                      style={{ background: `linear-gradient(135deg, ${it.from}, ${it.to})` }}
                    >
                      <div className="pointer-events-none absolute inset-0 opacity-20 grid-paper" />
                      <Icon
                        className="pointer-events-none absolute -right-6 -bottom-8 h-44 w-44 text-white opacity-10 transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-6"
                        strokeWidth={1}
                        aria-hidden
                      />
                      <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white/15 text-white ring-1 ring-white/30 backdrop-blur-sm">
                        <Icon className="h-8 w-8" strokeWidth={1.6} aria-hidden />
                      </span>
                    </div>
                  )}
                  <span className="display absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-ink">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <h3 className="display text-xl font-semibold tracking-tight text-ink sm:text-[1.4rem]">{it.title}</h3>
                  <p className="mt-2.5 text-[0.98rem] leading-relaxed text-muted">{it.text}</p>
                  <span
                    className="mt-auto block h-1 w-12 rounded-full pt-0 transition-[width] duration-300 group-hover:w-20"
                    style={{ background: it.from, marginTop: "1.5rem" }}
                    aria-hidden
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </Section>

      {/* 09 · SSS — answers not supplied yet */}
      {showDataFlags && (
        <Section id="sss" tone="ice" title="Sık Sorulan Sorular">
          <div className="grid max-w-3xl gap-3">
            {["AGM 360° nedir?", "Future Skills hangi alanları kapsar?", "PDR desteği nasıl sunulur?"].map((q) => (
              <details key={q} className="rounded-[14px] bg-panel px-5 py-4 shadow-sm">
                <summary className="display cursor-pointer font-semibold">{q}</summary>
                <NeedsData id="egitim-modeli-sss" compact className="mt-3" />
              </details>
            ))}
          </div>
        </Section>
      )}

      {/* 10 · Closing CTA */}
      <section className="tone-navy relative overflow-hidden py-[clamp(3rem,6vw,5rem)]">
        <div className="pointer-events-none absolute inset-0 opacity-20 grid-paper" />
        <div className="relative mx-auto flex max-w-[1180px] flex-col items-start justify-between gap-8 px-4 sm:px-6 md:flex-row md:items-center lg:px-10">
          <p className="display text-3xl leading-tight font-semibold text-white italic sm:text-4xl">
            {agm360.tagline[0]}
            <br />
            <span className="text-blue">{agm360.tagline[1]}</span>
          </p>
          <div className="flex flex-wrap gap-3">
            <BtnPrimary href="/kayit-iletisim#on-kayit" size="lg">Başvuru Yap</BtnPrimary>
            <BtnLine href="/kayit-iletisim#bize-ulasin" size="lg">Bize Ulaşın</BtnLine>
          </div>
        </div>
      </section>
    </>
  );
}
