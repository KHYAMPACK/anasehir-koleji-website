import {
  CalendarDays,
  Sparkles,
  UserCheck,
  Users,
} from "lucide-react";
import { Agm360Wheel } from "@/components/Agm360Wheel";
import { HomeHero } from "@/components/HomeHero";
import { DevelopmentCycle } from "@/components/akademik/DevelopmentCycle";
import { akademikYaklasim } from "@/lib/akademikBasari";
import { CampusLifeTeaser } from "@/components/CampusLifeTeaser";
import { agm360 } from "@/lib/agm360";
import { HomeContact } from "@/components/HomeContact";
import { NeedsData } from "@/components/NeedsData";
import { BtnLine, BtnPrimary } from "@/components/Buttons";
import { Section } from "@/components/PageHero";
import { campuses, mapsSearchUrl } from "@/lib/campuses";
import { okullarIntro } from "@/lib/okullarimiz";
import { SchoolLevels } from "@/components/SchoolLevels";
import { site } from "@/lib/site";
import { historyShort, journey } from "@/lib/anasehir";
import { institutionalPartners, memberships, solutionPartnerGroups } from "@/lib/partners";
import { PartnerGrid } from "@/components/PartnerLogos";
import { SocialShowcase } from "@/components/SocialShowcase";
import { activityBranchCount } from "@/lib/kampusYasami";

const stats = [
  { icon: CalendarDays, n: String(site.founded), l: "Kuruluş" },
  { icon: Users, n: site.students, l: "Öğrenci, geçmişten bugüne" },
  { icon: UserCheck, n: site.staff, l: "Eğitim Paydaşı" },
  { icon: Sparkles, n: String(activityBranchCount), l: "Etkinlik Dalı" },
];

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <section className="tone-paper hidden py-5 md:block lg:py-6">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-4 gap-2.5">
            {stats.map((s) => (
              <div key={s.l} className="rounded-[12px] border border-line bg-panel px-4 py-3.5">
                <s.icon className="h-4 w-4 text-blue" strokeWidth={1.75} aria-hidden />
                <p className="display mt-2 text-xl font-semibold text-ink lg:text-2xl">{s.n}</p>
                <p className="mt-0.5 text-xs text-muted">{s.l}</p>              </div>
            ))}
          </div>
        </div>
      </section>

      <Section id="egitim-modeli" tone="ice">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-12">
          <div className="min-w-0">
            <p className="eyebrow flex items-center gap-3">
              <span className="h-5 w-1 rounded-full bg-red" aria-hidden />
              Eğitim Modelimiz
            </p>
            <h2 className="display mt-4 text-5xl font-extrabold tracking-tight italic sm:text-6xl">
              <span className="text-[#0b2d5e]">AGM</span> <span className="text-red">360°</span>
            </h2>
            <p className="display mt-2 text-sm font-bold tracking-[0.18em] text-ink uppercase">
              {agm360.fullName}
            </p>
            <p className="display mt-6 text-2xl leading-snug font-semibold text-ink italic sm:text-[1.75rem]">
              {agm360.tagline[0]}
              <br />
              {agm360.tagline[1]}
            </p>
            <NeedsData id="agm360-aciklama" compact className="mt-6" />
            <div className="mt-7">
              <BtnLine href="/egitim-modeli" size="lg">Modelin Tüm Detaylarını İncele</BtnLine>
            </div>
          </div>

          <Agm360Wheel />
        </div>
      </Section>

      <Section tone="blush">
        <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <div className="max-w-[60ch]">
            <p className="eyebrow flex items-center gap-3">
              <span className="h-5 w-1 rounded-full bg-red" aria-hidden />
              {okullarIntro.eyebrow}
            </p>
            <h2 className="display mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
              {okullarIntro.title}
            </h2>
            <p className="mt-4 text-[1.02rem] leading-[1.6] text-muted">{okullarIntro.lead}</p>
          </div>
          <BtnLine href="/okullarimiz" size="lg">
            Tüm Programları Gör
          </BtnLine>
        </div>
        <SchoolLevels />
      </Section>

      <CampusLifeTeaser />

      {/* Akademik Başarı — the development cycle from /akademik-basari */}
      <Section tone="paper">
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <div className="max-w-[62ch]">
            <p className="eyebrow flex items-center gap-3">
              <span className="h-5 w-1 rounded-full bg-red" aria-hidden />
              Akademik Gelişim Döngüsü
            </p>
            <h2 className="display mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Akademik Başarı</h2>
            <p className="mt-4 text-[1.02rem] leading-[1.6] text-muted">{akademikYaklasim.lead}</p>
          </div>
          <BtnLine href="/akademik-basari" size="lg">
            Akademik Başarı
          </BtnLine>
        </div>
        <DevelopmentCycle />
      </Section>

      <Section tone="paper">
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-14">
          <div>
            <p className="eyebrow">2005&apos;ten Bugüne</p>
            <h2 className="display mt-3 max-w-[22ch] text-2xl font-semibold tracking-tight sm:text-3xl">
              {journey.title}
            </h2>
            <p className="mt-4 max-w-[52ch] text-muted">{journey.intro}</p>
            <blockquote className="display mt-6 border-l-4 border-red pl-5 text-lg font-semibold text-ink">
              {journey.pullQuote}
            </blockquote>
            <div className="mt-7">
              <BtnLine href="/hakkimizda" size="lg">Anaşehir&apos;i Keşfedin</BtnLine>
            </div>
          </div>
          <ol className="grid gap-4 sm:grid-cols-2 sm:gap-3">
            {historyShort.map((h) => (
              <li
                key={h.year}
                className="flex items-baseline gap-4 rounded-[14px] bg-blush px-5 py-4 sm:block sm:p-4"
              >
                <span className="display w-14 shrink-0 text-xl font-semibold text-red sm:w-auto">{h.year}</span>
                <p className="text-sm leading-relaxed text-muted sm:mt-1 sm:text-xs">{h.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section id="sosyal-medya" tone="ice">
        <SocialShowcase />
        <NeedsData id="instagram-akisi" className="mt-8" />
      </Section>

      <Section tone="paper" eyebrow="İş Birliklerimiz" title="Çözüm Ortaklarımız ve İş Birliklerimiz">
        <PartnerGrid partners={solutionPartnerGroups.flatMap((g) => g.partners).slice(0, 6)} />
        <p className="mt-4 text-sm text-muted">
          + {institutionalPartners.length} kurumsal iş birliği · {memberships.length} üyelik
        </p>
        <div className="mt-6">
          <BtnLine href="/hakkimizda#is-birliklerimiz" size="lg">Tüm İş Birlikleri</BtnLine>
        </div>
      </Section>

      <Section tone="blush">
        <div className="grid gap-4 lg:grid-cols-3">
          {campuses.map((c) => (
            <article
              key={c.id}
              className={`rounded-[14px] border-l-4 bg-panel p-6 shadow-sm ${c.featured ? "border-l-red" : "border-l-blue"}`}
            >
              <h3 className="display text-lg font-semibold">{c.name}</h3>
              <p className="mt-2 text-sm text-blue">{c.levels}</p>
              <p className="mt-3 text-sm text-muted">{c.address}</p>
              <p className="mt-2 text-sm font-semibold">{c.phones.map((p) => p.display).join(" · ")}</p>
              <a
                href={mapsSearchUrl(c.mapsQuery)}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block text-sm text-blue"
              >
                Yol tarifi
              </a>
            </article>
          ))}
        </div>
      </Section>

      <section className="tone-navy relative overflow-hidden py-[clamp(3rem,6vw,4.5rem)]">
        <div className="pointer-events-none absolute inset-0 opacity-20 grid-paper" />
        <div className="relative mx-auto flex max-w-[1180px] flex-col items-start justify-between gap-6 px-4 sm:px-6 md:flex-row md:items-center lg:px-10">
          <div>
            <p className="display text-2xl italic text-blue sm:text-3xl">{site.slogan}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <BtnPrimary href="/kayit-iletisim#on-kayit" size="lg">Kayıt Görüşmesi Planla</BtnPrimary>
            <BtnLine href="/bursluluk" size="lg">Bursluluk Sınavı Başvurusu</BtnLine>
          </div>
        </div>
      </section>

      <HomeContact />
    </>
  );
}
