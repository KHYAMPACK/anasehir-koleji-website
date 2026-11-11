import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/PageHero";
import { PartnerLogos } from "@/components/PartnerLogos";
import {
  aboutGallery,
  educationApproach,
  historyShort,
  journey,
  mission,
  values,
  vision,
} from "@/lib/anasehir";
import { institutionalPartners, solutionPartners } from "@/lib/partners";
import { sections } from "@/lib/nav";
import { site } from "@/lib/site";

const page = sections[0];

export const metadata: Metadata = { title: page.name };

const tickerItems = [
  site.slogan.replace(/!$/, ""),
  "Bağlıca’nın ilk özel okulu",
  ...values.map((v) => v.replace(/\.$/, "")),
  ...educationApproach.map((a) => a.title),
];

const stats = [
  { n: String(site.founded), l: "Kuruluş" },
  { n: site.students, l: "Öğrenci, geçmişten bugüne" },
  { n: site.staff, l: "Eğitim paydaşı" },
];

export default function AnasehiriKesfedinPage() {
  return (
    <>
      {/* ── Intro ─────────────────────────────────────────────── */}
      <section className="tone-ice overflow-hidden">
        <div className="mx-auto grid max-w-[1180px] items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16 lg:px-10 lg:py-[4.5rem]">
          <div className="flex gap-4 sm:gap-5">
            <span className="mt-1 hidden h-[4.5rem] w-1.5 shrink-0 rounded-full bg-red sm:block" aria-hidden />
            <div className="min-w-0">
              <p className="eyebrow">{page.name}</p>
              <h1 className="display mt-3 max-w-[18ch] text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
                {journey.title}
              </h1>
              <p className="display mt-6 max-w-[40ch] text-lg leading-relaxed text-muted sm:text-xl">
                {journey.intro}
              </p>

              <dl className="mt-8 grid max-w-md grid-cols-3 gap-2.5">
                {stats.map((s) => (
                  <div key={s.l} className="rounded-[12px] border border-line bg-panel px-3 py-3">
                    <dt className="sr-only">{s.l}</dt>
                    <dd>
                      <span className="display block text-xl font-semibold text-ink sm:text-2xl">{s.n}</span>
                      <span className="mt-0.5 block text-[0.7rem] leading-snug text-muted">{s.l}</span>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-3.5">
            <div className="relative col-span-2 aspect-[16/9] overflow-hidden rounded-[16px] bg-panel-2">
              <Image src={aboutGallery[0].src} alt={aboutGallery[0].alt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" priority />
            </div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[16px] bg-panel-2">
              <Image src={aboutGallery[1].src} alt={aboutGallery[1].alt} fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
            </div>
            <div className="grid gap-3 sm:gap-3.5">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[16px] bg-panel-2">
                <Image src={aboutGallery[2].src} alt={aboutGallery[2].alt} fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
              </div>
              <div className="relative aspect-[16/10] overflow-hidden rounded-[16px] bg-panel-2">
                <Image src={aboutGallery[3].src} alt={aboutGallery[3].alt} fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="tone-navy overflow-hidden border-y border-white/10 py-3.5" aria-hidden>
        <div className="marquee-track flex w-max items-center whitespace-nowrap">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={`${item}-${i}`} className="inline-flex items-center gap-8 px-4">
              <span className="display text-sm font-semibold tracking-[0.04em] text-white/85 sm:text-[0.95rem]">{item}</span>
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-red" />
            </span>
          ))}
        </div>
      </div>

      {/* ── 2005'ten Bugüne: the story ───────────────────────── */}
      <Section id="2005ten-bugune" tone="paper">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:gap-16">
          <div className="lg:sticky lg:top-[calc(var(--header)+2rem)] lg:self-start">
            <p className="eyebrow">2005&apos;ten Bugüne</p>
            <p
              className="display mt-2 text-[5.5rem] leading-none font-semibold tracking-tight text-transparent sm:text-[7rem]"
              style={{ WebkitTextStroke: "2px var(--red)" }}
              aria-hidden
            >
              {site.founded}
            </p>
            <p className="display mt-3 text-lg font-semibold text-ink">
              Geleceğe uzanan bir eğitim yolculuğu
            </p>
          </div>

          <div className="max-w-[62ch] space-y-5 text-[1.02rem] leading-[1.8] text-muted">
            {journey.beginning.map((p) => (
              <p key={p}>{p}</p>
            ))}

            <blockquote className="display my-10 border-l-4 border-red py-1 pl-6 text-2xl leading-snug font-semibold text-ink sm:text-[1.9rem]">
              {journey.pullQuote}
            </blockquote>

            {journey.belief.map((p) => (
              <p key={p}>{p}</p>
            ))}

            <p className="display pt-4 text-2xl font-semibold text-red italic">{site.slogan}</p>
          </div>
        </div>

        {/* Milestones */}
        <ol className="relative mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <span className="absolute top-0 right-4 left-4 hidden h-0.5 bg-red/30 lg:block" aria-hidden />
          {historyShort.map((item) => (
            <li key={item.year} className="relative rounded-[14px] bg-panel p-5 pt-9 shadow-sm">
              <span className="display absolute -top-3 left-5 rounded-full bg-red px-3 py-1 text-sm font-semibold text-white">
                {item.year}
              </span>
              <p className="text-sm leading-relaxed text-muted">{item.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* ── Misyon & Vizyon ───────────────────────────────────── */}
      <section className="tone-navy relative overflow-hidden py-[clamp(3rem,6vw,5rem)]">
        <div className="pointer-events-none absolute inset-0 opacity-20 grid-paper" />
        <div className="relative mx-auto grid max-w-[1180px] gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-0 lg:px-10">
          {[
            { label: "Misyonumuz", text: mission },
            { label: "Vizyonumuz", text: vision },
          ].map((b, i) => (
            <article key={b.label} className={i === 1 ? "lg:border-l lg:border-white/15 lg:pl-14" : "lg:pr-14"}>
              <span className="display block text-6xl leading-none text-red" aria-hidden>
                “
              </span>
              <h2 className="eyebrow mt-1">{b.label}</h2>
              <p className="display mt-4 text-xl leading-relaxed font-medium text-white sm:text-[1.4rem]">{b.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ── Eğitim Anlayışımız ───────────────────────────────── */}
      <Section tone="ice" title="Eğitim Anlayışımız">
        <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {educationApproach.map((a, i) => (
            <li
              key={a.title}
              className="group flex flex-col rounded-[14px] border-t-4 border-blue bg-panel p-5 shadow-sm transition-colors hover:border-red"
            >
              <span className="display text-3xl font-semibold text-blue/40 transition-colors group-hover:text-red">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="display mt-4 text-base leading-snug font-semibold text-ink">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{a.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* ── İş Birliklerimiz ─────────────────────────────────── */}
      <Section id="is-birliklerimiz" tone="paper" title="İş Birliklerimiz">
        <h3 className="display mb-4 text-xl font-semibold">Çözüm Ortaklarımız</h3>
        <PartnerLogos partners={solutionPartners} needs="cozum-ortaklari" />
        <h3 className="display mt-10 mb-4 text-xl font-semibold">Kurumsal İş Birliklerimiz</h3>
        <PartnerLogos partners={institutionalPartners} needs="kurumsal-is-birlikleri" />
      </Section>

      {/* ── Closing ──────────────────────────────────────────── */}
      <section className="tone-navy relative overflow-hidden py-[clamp(3.5rem,7vw,6rem)] text-center">
        <div className="pointer-events-none absolute inset-0 opacity-20 grid-paper" />
        <div className="relative mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-10">
          <p className="display text-3xl font-semibold tracking-tight text-white sm:text-5xl">{site.name}</p>
          <ul className="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            {values.map((v, i) => (
              <li key={v} className="flex items-center gap-4 text-base text-white/80 italic sm:text-lg">
                {i > 0 && <span className="h-1.5 w-1.5 rounded-full bg-red" aria-hidden />}
                {v}
              </li>
            ))}
          </ul>
          <p className="display mt-8 text-2xl text-blue italic sm:text-3xl">{site.slogan}</p>
        </div>
      </section>
    </>
  );
}
