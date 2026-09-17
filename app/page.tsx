import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BookOpen,
  Bus,
  Building2,
  CalendarDays,
  Dumbbell,
  DoorOpen,
  FlaskConical,
  LandPlot,
  MapPin,
  Palette,
  PencilLine,
  Play,
  Smile,
  Sparkles,
  Target,
  UserCheck,
  Users,
  Waves,
} from "lucide-react";
import { HomeHero } from "@/components/HomeHero";
import { BtnGhost, BtnLine, BtnPrimary } from "@/components/Buttons";
import { Section } from "@/components/PageHero";
import { campuses, mapsSearchUrl } from "@/lib/campuses";
import { schoolLevels } from "@/lib/okullarimiz";
import { programs } from "@/lib/programs";
import { site } from "@/lib/site";
import { founders, generalManager } from "@/lib/people";
import { ortaokulDay } from "@/lib/copy";
import { activityBranchCount } from "@/lib/kampusYasami";

const stats = [
  { icon: CalendarDays, n: String(site.founded), l: "Kuruluş" },
  { icon: Users, n: site.students, l: "Öğrenci" },
  { icon: UserCheck, n: site.staff, l: "Personel" },
  { icon: Sparkles, n: String(activityBranchCount), l: "Etkinlik Dalı" },
];

const holisticIcons = [Smile, Dumbbell, Palette, FlaskConical];

const dayIcons: Record<string, typeof BookOpen> = {
  "07:30": DoorOpen,
  "08:15–15:30": BookOpen,
  "15:30–16:15": Palette,
  "16:30": Bus,
  "16:30–18:15": PencilLine,
};

const campusHighlights = [
  { icon: Building2, label: "Üç bina", sub: "Hepsi Etimesgut'ta" },
  { icon: LandPlot, label: "Açık spor", sub: "Saha ve kortlar" },
  { icon: Waves, label: "Yüzme havuzu", sub: "Tüm kademeler" },
  { icon: Dumbbell, label: "Kapalı salon", sub: "Spor salonu" },
  { icon: MapPin, label: "Bağlıca", sub: "Merkezi kampüs" },
  { icon: Target, label: "Çoklu branş", sub: "Basket · Futbol · Tenis" },
];

const okullarCards = [
  {
    href: "/okullarimiz#ilkokul",
    name: schoolLevels[1].name,
    tagline: schoolLevels[1].tagline,
    image: "/hero/hero-3.jpg",
    alt: "Anaşehir Koleji ilkokul öğrencileri",
  },
  {
    href: "/okullarimiz#ortaokul",
    name: schoolLevels[2].name,
    tagline: schoolLevels[2].tagline,
    image: "/hero/hero-2.jpg",
    alt: "Anaşehir Koleji ortaokul öğrencileri",
  },
  {
    href: "/akademik-basari#lgs-sistemi",
    name: "LGS Yolculuğu",
    tagline: programs.lgs.title,
    image: "/hero/hero-mobile-1.jpg",
    alt: "Anaşehir Koleji LGS hazırlığı",
  },
  {
    href: "/okullarimiz#etut-merkezi",
    name: schoolLevels[3].name,
    tagline: schoolLevels[3].tagline,
    image: "/hero/hero-1.jpg",
    alt: "Anaşehir Koleji Bağlıca kampüsü",
  },
];

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <Section tone="paper">
        <div className="grid gap-3 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.l} className="rounded-[14px] border border-line bg-panel px-5 py-6">
              <s.icon className="h-6 w-6 text-blue" strokeWidth={1.75} aria-hidden />
              <p className="display mt-3 text-3xl font-semibold text-ink">{s.n}</p>
              <p className="mt-1 text-sm text-muted">{s.l}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="ice">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(18rem,22rem)_minmax(0,1fr)] lg:gap-10 xl:gap-12">
          <div className="min-w-0">
            <h2 className="display text-[1.85rem] font-semibold leading-[1.12] tracking-tight text-ink sm:text-[2.15rem]">
              Anaşehir
              <br />
              Eğitim Modeli
            </h2>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-muted">{programs.holistic.lead}</p>
            <div className="mt-5">
              <BtnLine href="/egitim-modeli" size="lg">Eğitim Modelimizi Keşfedin</BtnLine>
            </div>
          </div>

          <ul className="grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4 lg:gap-0">
            {programs.holistic.points.map((p, i) => {
              const Icon = holisticIcons[i];
              return (
                <li
                  key={p.title}
                  className={`min-w-0 ${
                    i === 0
                      ? "lg:pr-5 xl:pr-6"
                      : "lg:border-l lg:border-line lg:px-5 xl:px-6"
                  }`}
                >
                  <Icon className="h-7 w-7 text-blue" strokeWidth={1.6} aria-hidden />
                  <h3 className="display mt-4 text-[0.95rem] font-semibold leading-snug text-ink lg:min-h-[2.6em]">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-[0.8rem] leading-relaxed text-muted">{p.text}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </Section>

      <Section tone="blush">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="display text-2xl font-semibold tracking-tight sm:text-3xl">
            Okullarımız & Etüt Merkezi
          </h2>
          <BtnLine href="/okullarimiz" size="lg">
            Tüm Programları Gör
          </BtnLine>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {okullarCards.map((k) => (
            <Link
              key={k.href}
              href={k.href}
              className="card-lift group flex flex-col overflow-hidden rounded-[14px] bg-panel shadow-sm"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-panel-2">
                <Image
                  src={k.image}
                  alt={k.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
              </div>
              <div className="relative flex flex-1 flex-col p-5 pr-16 pb-6">
                <h3 className="display text-lg font-semibold">{k.name}</h3>
                <p className="mt-1.5 text-sm text-muted">{k.tagline}</p>
                <span
                  className="absolute right-5 bottom-5 flex h-10 w-10 items-center justify-center rounded-full border-2 border-ink text-ink transition-colors duration-200 group-hover:border-blue group-hover:text-blue"
                  aria-hidden
                >
                  <ArrowRight className="h-4 w-4" strokeWidth={2} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section tone="navy" eyebrow="Anaşehir'de Bir Gün" title="Akademik ve sosyal, dengeli bir gün.">
        <p className="max-w-[62ch] text-white/70">{ortaokulDay.lead}</p>
        <div className="relative mt-10">
          <span className="absolute top-6 right-6 left-6 hidden h-0.5 bg-white/15 lg:block" />
          <ol className="grid gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {ortaokulDay.steps.map((s) => {
              const Icon = dayIcons[s.time] ?? Sparkles;
              return (
                <li key={s.time} className="relative flex flex-col items-center text-center">
                  <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-red text-white ring-4 ring-ink">
                    <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                  </span>
                  <p className="display mt-3 text-sm font-semibold text-white">{s.time}</p>
                  <p className="mt-1 text-sm font-semibold text-white/90">{s.title}</p>
                  <p className="mt-1 text-xs text-white/55">{s.text}</p>
                </li>
              );
            })}
          </ol>
        </div>
        <div className="mt-8 text-center">
          <BtnLine href="/okullarimiz#ortaokul" size="lg">Günlük Akışı Keşfedin</BtnLine>
        </div>
      </Section>

      <section className="overflow-hidden border-y border-line">
        <div className="grid lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1.05fr)_minmax(14rem,0.75fr)]">
          {/* Akademik Başarı */}
          <div className="tone-navy relative min-h-[22rem] overflow-hidden">
            <div className="pointer-events-none absolute inset-0 opacity-20 grid-paper" />
            <div className="relative z-10 flex h-full min-h-[22rem] flex-col justify-between gap-8 px-6 py-8 sm:px-8 lg:flex-row lg:items-end lg:gap-10 lg:px-10 lg:py-10">
              <div className="flex max-w-[22rem] flex-col">
                <h2 className="display text-2xl font-semibold tracking-tight text-white sm:text-[1.85rem]">
                  Akademik Başarı
                </h2>
                <p className="mt-2 text-sm text-white/70">{programs.lgs.title}</p>
                <div className="mt-8 lg:mt-auto lg:pt-10">
                  <BtnLine href="/akademik-basari#sonuclarimiz" size="lg">
                    LGS Sonuçlarımız
                  </BtnLine>
                </div>
              </div>

              <div className="max-w-[18rem] text-sm leading-relaxed text-white/75">
                <p className="text-xs font-semibold tracking-[0.14em] text-blue uppercase">LGS Sistemi</p>
                <p className="mt-2 font-semibold text-white">{programs.lgs.points[0].title}</p>
                <p className="mt-1 text-white/65">{programs.lgs.closing}</p>
              </div>
            </div>
          </div>

          {/* Kampüsü Keşfedin */}
          <div className="flex min-h-[22rem] flex-col bg-panel px-6 py-8 sm:px-8 lg:px-9 lg:py-10">
            <h2 className="display text-2xl font-semibold tracking-tight text-ink sm:text-[1.85rem]">
              Kampüsü Keşfedin
            </h2>
            <p className="mt-2 max-w-[38ch] text-sm text-muted">
              Etimesgut Bağlıca’da modern, güvenli ve ilham veren bir öğrenme ortamı.
            </p>

            <ul className="mt-8 grid grid-cols-3 gap-x-2 gap-y-5 sm:grid-cols-6 sm:gap-x-1 lg:mt-10">
              {campusHighlights.map((f) => (
                <li key={f.label} className="flex min-w-0 flex-col items-center text-center">
                  <f.icon className="h-6 w-6 text-blue" strokeWidth={1.5} aria-hidden />
                  <p className="mt-2 text-[0.68rem] font-semibold leading-snug text-ink">{f.label}</p>
                  <p className="mt-0.5 text-[0.62rem] leading-snug text-muted">{f.sub}</p>
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-8">
              <BtnGhost href="/kayit-iletisim#kampus-turu" size="lg">
                Kampüs Turu Planla
              </BtnGhost>
            </div>
          </div>

          {/* Campus photo */}
          <div className="relative min-h-[16rem] lg:min-h-full">
            <Image
              src="/hero/hero-1.jpg"
              alt="Anaşehir Koleji Bağlıca kampüsü"
              fill
              sizes="(max-width: 1024px) 100vw, 30vw"
              className="object-cover"
            />
            <Link
              href="/kayit-iletisim#kampus-turu"
              className="absolute right-5 bottom-5 flex h-14 w-14 items-center justify-center rounded-full bg-panel text-ink shadow-[0_10px_28px_rgba(20,35,58,0.22)] transition-transform duration-200 hover:scale-105"
              aria-label="Kampüs turu planla"
            >
              <Play className="h-5 w-5 fill-current" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      <Section tone="paper" eyebrow="Yönetim" title="Bir okulu bina değil, insanları özel kılar.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[...founders, generalManager].map((p) => (
            <article key={p.name} className="flex gap-4 rounded-[14px] bg-blush p-5">
              <div className="grid-paper h-16 w-16 shrink-0 rounded-full border border-dashed border-line bg-panel-2" />
              <div className="min-w-0">
                <h3 className="display text-base font-semibold">{p.name}</h3>
                <p className="text-xs text-blue">{p.title}</p>
                <p className="mt-2 text-sm text-muted">{p.shortBio}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-6">
          <BtnLine href="/anasehir#yonetim" size="lg">Yönetimi Tanıyın</BtnLine>
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
            <p className="mt-3 max-w-[52ch] text-white/70">
              Anaşehir ailesinin bir parçası olun. Kayıt süreci, kampüs turu ve tüm sorularınız için
              bizimle iletişime geçin.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <BtnPrimary href="/kayit-iletisim#on-kayit" size="lg">Kayıt Görüşmesi Planla</BtnPrimary>
            <BtnLine href="/kayit-iletisim#bize-ulasin" size="lg">Bize Ulaşın</BtnLine>
          </div>
        </div>
      </section>
    </>
  );
}
