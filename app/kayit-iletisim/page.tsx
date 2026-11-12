import type { Metadata } from "next";
import Image from "next/image";
import { CalendarDays, Clock } from "lucide-react";
import { BtnLine, BtnPrimary } from "@/components/Buttons";
import { LeadForm } from "@/components/LeadForm";
import { Section } from "@/components/PageHero";
import { campuses, mapsSearchUrl } from "@/lib/campuses";
import { MapEmbed } from "@/components/legal/MapEmbed";
import { bursluluk, deadlineLabel, examDateLabel } from "@/lib/campaign";
import {
  burslulukCard,
  gorusmeCard,
  kayitClosing,
  kayitHero,
  kayitSteps,
} from "@/lib/kayitIletisim";
import { sections } from "@/lib/nav";
import { site, telHref } from "@/lib/site";

export const metadata: Metadata = { title: "Kayıt & İletişim" };

const chapters = sections.find((s) => s.name === "Kayıt & İletişim")!.items;
const featured = campuses.find((c) => c.featured)!;

export default function KayitIletisimPage() {
  return (
    <>
      {/* Hero — handoff 07: navy, 520–620 px tall on desktop, photo right */}
      <section className="tone-navy relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-25 grid-paper" />
        <div className="relative mx-auto grid max-w-[1180px] items-center gap-10 px-4 py-14 sm:px-6 lg:min-h-[560px] lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:px-10 lg:py-16">
          <div className="min-w-0">
            <p className="text-sm font-bold tracking-[0.14em] text-blue">{kayitHero.eyebrow}</p>
            <h1 className="display mt-4 text-[2.15rem] leading-[1.08] font-extrabold tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">
              {kayitHero.title.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
            <p className="mt-6 max-w-[48ch] text-[1.06rem] leading-[1.5] text-white/80 sm:text-lg">{kayitHero.intro}</p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[22px] ring-1 ring-white/15 lg:aspect-[5/4]">
            <Image
              src="/hero/hero-1.jpg"
              alt="Anaşehir Koleji kampüsü"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <nav className="bg-ink/95" aria-label="Kayıt & İletişim bölümleri">
        <div className="mx-auto flex max-w-[1180px] flex-wrap gap-x-5 gap-y-2 px-4 py-3 text-sm text-white/70 sm:px-6 lg:px-10">
          {chapters.map((c) => (
            <a key={c.href} href={`#${c.href.split("#")[1]}`} className="hover:text-white">
              {c.name}
            </a>
          ))}
        </div>
      </nav>

      {/* Two separate actions (handoff 07 UX rule): exam application ≠ enrolment meeting */}
      <Section id="kayit-sureci" tone="ice">
        <div className="grid gap-5 md:grid-cols-2">
          <article
            id="bursluluk-sinavi"
            className="flex scroll-mt-[calc(var(--header)+4rem)] flex-col rounded-[22px] border border-line/70 bg-panel p-6 shadow-sm sm:p-8"
          >
            <p className="text-sm font-bold tracking-[0.12em] text-red uppercase">
              01 <span className="ml-2">{burslulukCard.label}</span>
            </p>
            <h2 className="display mt-4 text-[1.7rem] font-bold tracking-tight sm:text-3xl">{bursluluk.pageTitle}</h2>
            <p className="display mt-4 flex items-center gap-3 text-3xl font-extrabold tracking-tight text-ink uppercase sm:text-4xl">
              <CalendarDays className="h-8 w-8 shrink-0 text-red" strokeWidth={1.7} aria-hidden />
              {examDateLabel()?.toLocaleUpperCase("tr-TR")}
            </p>
            <ul className="mt-5 grid grid-cols-2 gap-3">
              {bursluluk.sessions.map((x) => (
                <li key={x.label} className="rounded-[14px] border border-line bg-canvas/40 px-4 py-3">
                  <span className="display flex items-center gap-2 text-2xl font-bold text-ink">
                    <Clock className="h-5 w-5 text-blue" strokeWidth={1.8} aria-hidden />
                    {x.time}
                  </span>
                  <span className="mt-0.5 block text-sm text-muted">{x.label}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-[1.02rem] font-semibold text-muted">Son başvuru: {deadlineLabel()}</p>
            <div className="mt-auto pt-7">
              <BtnPrimary href={bursluluk.href} size="lg">
                {burslulukCard.cta}
              </BtnPrimary>
            </div>
          </article>

          <article className="flex flex-col rounded-[22px] border border-line/70 bg-panel p-6 shadow-sm sm:p-8">
            <p className="text-sm font-bold tracking-[0.12em] text-red uppercase">
              02 <span className="ml-2">{gorusmeCard.label}</span>
            </p>
            <h2 className="display mt-4 text-[1.7rem] font-bold tracking-tight sm:text-3xl">{gorusmeCard.title}</h2>
            <p className="mt-4 text-[1.06rem] leading-[1.5] text-muted sm:text-lg">{gorusmeCard.text}</p>
            <div className="mt-auto flex flex-wrap gap-3 pt-7">
              <BtnPrimary href="#on-kayit" size="lg">
                {gorusmeCard.primary}
              </BtnPrimary>
              <BtnLine href="#bize-ulasin" size="lg">
                {gorusmeCard.secondary}
              </BtnLine>
            </div>
          </article>
        </div>

        <ol className="tone-navy mt-5 grid grid-cols-2 gap-x-4 gap-y-3 rounded-[18px] px-6 py-5 sm:grid-cols-4 sm:px-8">
          {kayitSteps.map((step, i) => (
            <li key={step} className="flex items-center gap-3">
              <span className="display text-sm font-bold text-blue">{String(i + 1).padStart(2, "0")}</span>
              <span className="display text-base font-semibold text-white">{step}</span>
            </li>
          ))}
        </ol>
      </Section>

      <section
        id="bize-ulasin"
        className="tone-navy relative overflow-hidden scroll-mt-[calc(var(--header)+0.75rem)]"
      >
        <div className="pointer-events-none absolute inset-0 opacity-25 grid-paper" />
        {/* Aliases: old "Ücret Bilgilendirme" / "Kampüs Turu" links land on this form. */}
        <span id="ucret-bilgilendirme" className="absolute top-0 scroll-mt-[calc(var(--header)+0.75rem)]" aria-hidden />
        <span id="kampus-turu" className="absolute top-0 scroll-mt-[calc(var(--header)+0.75rem)]" aria-hidden />
        <div
          id="on-kayit"
          className="relative mx-auto grid max-w-[1180px] scroll-mt-[calc(var(--header)+0.75rem)] items-start gap-6 px-4 py-10 sm:px-6 sm:py-12 lg:grid-cols-[minmax(0,1fr)_minmax(22rem,32rem)] lg:gap-x-12 lg:gap-y-6 lg:px-10 lg:py-14"
        >
          <div>
            <h2 className="display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.6rem] lg:leading-[1.12]">
              Bize Ulaşın
            </h2>
            <p className="mt-3 max-w-[42ch] text-sm text-white/70 sm:text-base">
              Kayıt görüşmesi, ücret bilgilendirme ve kampüs turu talepleri için formu doldurun.
            </p>
          </div>
          <LeadForm className="min-w-0 lg:col-start-2 lg:row-span-2" />
          <div>
            <dl className="grid gap-3 text-sm sm:grid-cols-2">
              <div className="rounded-[14px] bg-white/8 p-4 ring-1 ring-white/12">
                <dt className="text-white/50">Telefon</dt>
                <dd className="mt-1">
                  <a href={telHref(site.phoneTel)} className="font-semibold text-white">
                    {site.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div className="rounded-[14px] bg-white/8 p-4 ring-1 ring-white/12">
                <dt className="text-white/50">Bilgi ve randevu</dt>
                <dd className="mt-1">
                  <a href={telHref(site.admissionsPhoneTel)} className="font-semibold text-white">
                    {site.admissionsPhoneDisplay}
                  </a>
                </dd>
              </div>
              <div className="rounded-[14px] bg-white/8 p-4 ring-1 ring-white/12 sm:col-span-2">
                <dt className="text-white/50">E-posta</dt>
                <dd className="mt-1">
                  <a href={`mailto:${site.email}`} className="font-semibold text-white">
                    {site.email}
                  </a>
                </dd>
              </div>
              <div className="rounded-[14px] bg-white/8 p-4 ring-1 ring-white/12 sm:col-span-2">
                <dt className="text-white/50">Saatler</dt>
                <dd className="mt-1 text-white/85">
                  Hafta içi {site.hoursWeekday} · Cumartesi {site.hoursSaturday}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <Section tone="ice" title="Kampüslerimiz">
        <div className="grid gap-4 lg:grid-cols-3">
          {campuses.map((c) => (
            <article key={c.id} className={`rounded-[14px] border-l-4 bg-panel p-6 shadow-sm ${c.featured ? "border-l-red" : "border-l-blue"}`}>
              <h3 className="display text-lg font-semibold">{c.name}</h3>
              <p className="mt-2 text-sm text-blue">{c.levels}</p>
              <p className="mt-3 text-sm text-muted">{c.address}</p>
              <ul className="mt-3 space-y-1">
                {c.phones.map((p) => (
                  <li key={p.tel}>
                    <a href={telHref(p.tel)} className="font-semibold text-ink">
                      {p.display}
                    </a>
                  </li>
                ))}
              </ul>
              <a href={mapsSearchUrl(c.mapsQuery)} target="_blank" rel="noreferrer" className="mt-4 inline-block text-sm text-blue">
                Yol tarifi alın
              </a>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="navy" eyebrow="Harita" title={`${featured.name}, ${featured.address}`}>
        <div className="overflow-hidden rounded-[14px] ring-1 ring-white/15">
          <MapEmbed query={featured.mapsQuery} title="Anaşehir Koleji harita" className="h-80" />
        </div>
      </Section>

      <section className="tone-navy relative overflow-hidden py-[clamp(3rem,6vw,4.5rem)] text-center">
        <div className="pointer-events-none absolute inset-0 opacity-20 grid-paper" />
        <p className="display relative text-3xl font-semibold text-white sm:text-4xl">{kayitClosing.title}</p>
        <p className="display relative mt-3 text-2xl text-blue italic sm:text-3xl">{kayitClosing.slogan}</p>
      </section>
    </>
  );
}
