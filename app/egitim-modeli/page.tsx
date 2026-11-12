import type { Metadata } from "next";
import { HeartHandshake, MessagesSquare, TrendingUp, UsersRound } from "lucide-react";
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
        <div className="mx-auto flex max-w-[1180px] gap-x-5 overflow-x-auto px-4 py-3 text-sm whitespace-nowrap text-white/70 sm:px-6 lg:px-10">
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
              <NeedsData id="agm360-aciklama" compact className="mt-6" />
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
        {showDataFlags && (
          <div id="olcme-degerlendirme" className="mt-10 scroll-mt-[calc(var(--header)+4rem)]">
            <h3 className="display mb-3 text-xl font-semibold">Ölçme-Değerlendirme</h3>
            <NeedsData id="olcme-degerlendirme-metin" />
          </div>
        )}
      </Section>

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

      {/* 07 · Sürdürülebilir Yaşam Bilinci — no content yet */}
      {showDataFlags && (
        <Section id="surdurulebilir-yasam" tone="ice">
          <AreaChip slug="surdurulebilir-yasam-bilinci" />
          <h2 className="display mt-5 text-4xl font-semibold tracking-tight">Sürdürülebilir Yaşam Bilinci</h2>
          <NeedsData id="surdurulebilir-yasam-metin" className="mt-6" />
        </Section>
      )}

      {/* 08 · AGM Uygulamada — no photos yet */}
      {showDataFlags && (
        <Section id="agm-uygulamada" tone="paper" title="AGM Uygulamada">
          <NeedsData id="agm-uygulamada" />
          <div className="mt-3 grid gap-3 sm:grid-cols-3">
            {Array.from({ length: 3 }, (_, i) => (
              <NeedsData key={i} id="agm-uygulamada" label={`Proje / uygulama ${i + 1}`} ratio="aspect-[4/3]" compact />
            ))}
          </div>
        </Section>
      )}

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
