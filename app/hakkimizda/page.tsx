import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/PageHero";
import { ArrowUpRight, BadgeCheck, Handshake } from "lucide-react";
import { NeedsData } from "@/components/NeedsData";
import { PartnerGrid, SolutionPartners } from "@/components/PartnerLogos";
import { ContactCta } from "@/components/ContactCta";
import {
  aboutGallery,
  educationApproach,
  historyShort,
  journey,
  mission,
  values,
  vision,
} from "@/lib/anasehir";
import { institutionalPartners, memberships, partnerHref, solutionPartnerGroups } from "@/lib/partners";
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
        <ol className="relative mt-16 grid gap-x-4 gap-y-10 sm:grid-cols-2 sm:gap-y-9 lg:grid-cols-4">
          {/* Desktop: horizontal rail. Phone: vertical rail linking the year badges. */}
          <span className="absolute top-0 right-4 left-4 hidden h-0.5 bg-red/30 lg:block" aria-hidden />
          <span className="absolute top-0 bottom-6 left-[2.35rem] w-0.5 bg-red/25 sm:hidden" aria-hidden />
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
      <Section id="is-birliklerimiz" tone="paper" eyebrow="İş Birliklerimiz" title="Çözüm Ortaklarımız ve İş Birliklerimiz">
        {/* 1 · Çözüm ortakları, grouped by category */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <h3 className="display text-2xl font-semibold">Çözüm Ortaklarımız</h3>
          <NeedsData id="cozum-ortaklari" compact className="!flex-row !items-center !gap-3 !p-2.5 !pr-4" />
        </div>
        <SolutionPartners groups={solutionPartnerGroups} />

        {/* 2 · Kurumsal iş birlikleri, client's order preserved */}
        <div className="mt-16 mb-6 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-12">
          <div>
            <h3 className="display flex items-center gap-2.5 text-2xl font-semibold">
              <Handshake className="h-6 w-6 text-red" strokeWidth={1.75} aria-hidden />
              Kurumsal İş Birliklerimiz
            </h3>
            <p className="mt-1 text-sm text-muted">{institutionalPartners.length} kurum</p>
          </div>
          <NeedsData id="kurumsal-is-birlikleri" compact className="!flex-row !items-center !gap-3 !p-2.5 !pr-4" />
        </div>
        <PartnerGrid partners={institutionalPartners} />

        {/* 3 · Üyelikler — kept apart from iş birlikleri (client rule).
            One wide horizontal card per membership (only TÖZOK today). */}
        <div className="mt-16 grid items-center gap-6 rounded-[18px] bg-blush p-6 sm:p-8 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:gap-10">
          <h3 className="display flex items-center gap-2.5 text-2xl font-semibold">
            <BadgeCheck className="h-6 w-6 shrink-0 text-red" strokeWidth={1.75} aria-hidden />
            Üyesi Olduğumuz Kuruluşlar
          </h3>
          <ul className="grid gap-3">
            {memberships.map((m) => (
              <li key={m.name}>
                <a
                  href={partnerHref(m)}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-5 rounded-[16px] bg-panel p-4 no-underline shadow-sm ring-1 ring-line/50 transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-md sm:p-5"
                >
                  {m.logo && (
                    <span className="relative h-20 w-20 shrink-0 overflow-hidden rounded-[12px] sm:h-24 sm:w-24">
                      <Image src={m.logo} alt="" fill sizes="96px" className="object-cover" />
                    </span>
                  )}
                  <span className="min-w-0 flex-1">
                    <span className="display block text-lg leading-snug font-semibold text-ink sm:text-xl">{m.name}</span>
                    <span className="mt-1 block text-sm text-muted transition-colors group-hover:text-blue">{m.domain}</span>
                  </span>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-ink text-ink transition-[border-color,color,transform] duration-200 group-hover:translate-x-0.5 group-hover:border-blue group-hover:text-blue">
                    <ArrowUpRight className="h-4 w-4" strokeWidth={2} aria-hidden />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <ContactCta image="/hero/hero-1.jpg" />
    </>
  );
}
