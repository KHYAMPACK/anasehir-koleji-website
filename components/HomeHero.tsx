"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, BookOpen, CalendarClock, HeartHandshake, Phone, Play } from "lucide-react";
import { BtnLine, BtnPrimary } from "./Buttons";
import { Wordmark } from "./Logo";
import { bursluluk, examDateLabel } from "@/lib/campaign";
import { useCampaignPhase } from "@/lib/useCampaignPhase";
import { site, telHref } from "@/lib/site";

/**
 * Homepage hero = banner slider (client, Nov 2026):
 *   1. Bursluluk Sınavı banner (only while applications are open) — built in
 *      code from the client's banner, with real school photos instead of the
 *      AI-generated student and only confirmed facts.
 *   2. Campus hero — aerial photo under a navy fade, per the client reference.
 * Crossfade, auto-advance every 4.5 s, pauses on hover/focus, no auto-play
 * under reduced motion.
 */
const INTERVAL_MS = 4500;
const MOBILE_QUERY = "(max-width: 639px)";
const subscribe = (cb: () => void) => {
  const mq = window.matchMedia(MOBILE_QUERY);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
};
const useIsMobile = () => useSyncExternalStore(subscribe, () => window.matchMedia(MOBILE_QUERY).matches, () => false);

const values = [
  { icon: BookOpen, label: "Nitelikli Eğitim" },
  { icon: HeartHandshake, label: "Güçlü Değerler" },
  { icon: BadgeCheck, label: "Mutlu Bireyler" },
];

const NAVY = "#0b2144";
const yearsSinceFounding = new Date().getFullYear() - site.founded;

/* ── Slide: Bursluluk Sınavı ─────────────────────────────────────────────── */
function BurslulukSlide({ priority }: { priority: boolean }) {
  const [day, ...rest] = (examDateLabel() ?? "").split(" ");
  const month = rest[0] ?? "";
  return (
    <div className="relative flex h-full items-end overflow-hidden sm:items-center" style={{ background: NAVY }}>
      {/* Real student photo, cut diagonally on the right (desktop) */}
      <div className="absolute inset-0 sm:right-auto sm:w-[52%] sm:[clip-path:polygon(0_0,100%_0,78%_100%,0_100%)]">
        <Image src="/hero/hero-2.jpg" alt="Anaşehir Koleji öğrencileri" fill priority={priority} sizes="(max-width: 640px) 100vw, 52vw" className="object-cover object-[72%_center]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b2144] via-[#0b2144]/70 to-[#0b2144]/20 sm:bg-gradient-to-r sm:from-transparent sm:via-transparent sm:to-[#0b2144]/40" />
      </div>
      {/* Accent stripes along the cut */}
      <span className="absolute inset-y-0 left-[38%] hidden w-3 -skew-x-[12deg] bg-red sm:block lg:left-[40.2%]" aria-hidden />
      <span className="absolute inset-y-0 left-[39.6%] hidden w-1.5 -skew-x-[12deg] bg-blue sm:block lg:left-[41.8%]" aria-hidden />

      <div className="tone-dark relative z-10 mx-auto w-full max-w-[1280px] px-4 pt-28 pb-16 sm:px-6 sm:py-16 lg:px-12">
        <div className="sm:ml-auto sm:w-[54%] lg:w-[50%]">
          {/* 21. yıl · Bağlıca'nın ilk özel okulu */}
          <div className="flex items-center gap-4">
            <span className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-full ring-2 ring-red/80 sm:h-20 sm:w-20">
              <span className="display text-2xl leading-none font-extrabold italic sm:text-3xl">{yearsSinceFounding}.</span>
              <span className="text-[0.65rem] font-bold tracking-[0.2em] uppercase">Yıl</span>
            </span>
            <span className="h-12 w-px bg-white/30" aria-hidden />
            <span className="display text-sm leading-tight font-bold tracking-wide uppercase sm:text-base">{site.tagline}</span>
          </div>

          <h2 className="display mt-6 text-[2.6rem] leading-[0.95] font-extrabold tracking-tight uppercase sm:text-6xl lg:text-[4.6rem]">
            Bursluluk
            <br />
            Sınavı
          </h2>
          <span className="mt-4 block h-1.5 w-40 rounded-full bg-red" aria-hidden />

          {/* Date band */}
          <div className="mt-6 flex items-stretch">
            <span className="display -skew-x-[10deg] bg-red px-6 py-2.5 text-4xl leading-none font-extrabold uppercase shadow-[0_14px_30px_-12px_rgba(227,6,19,0.7)] sm:px-8 sm:text-6xl">
              <span className="inline-block skew-x-[10deg]">
                {day} {month}
              </span>
            </span>
            <span className="ml-2 w-3 -skew-x-[10deg] bg-blue" aria-hidden />
          </div>

          {/* Sessions + grades */}
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-4">
            <span className="flex items-center gap-3">
              <CalendarClock className="h-9 w-9 text-white/90" strokeWidth={1.5} aria-hidden />
              <span className="h-10 w-px bg-white/30" aria-hidden />
              <span>
                <span className="block text-xs font-bold tracking-[0.18em] text-white/70 uppercase">Seanslar</span>
                <span className="display block text-2xl font-extrabold sm:text-3xl">
                  {bursluluk.sessions.map((s) => s.time).join(" · ")}
                </span>
              </span>
            </span>
            <span className="display -skew-x-[10deg] bg-blue px-5 py-2 text-lg font-extrabold text-[#0b2144] uppercase sm:text-2xl">
              <span className="inline-block skew-x-[10deg]">{bursluluk.grades.join(" · ")}. Sınıflar</span>
            </span>
          </div>

          {/* Actions */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <BtnPrimary href={bursluluk.href} size="lg">Bursluluk Sınavına Başvur</BtnPrimary>
            <a
              href={telHref(site.phoneTel)}
              className="hidden min-h-[52px] items-center gap-2.5 rounded-full px-6 sm:inline-flex font-bold text-white no-underline ring-2 ring-white/70 transition-colors hover:bg-white/10 sm:text-lg"
            >
              <Phone className="h-5 w-5 text-red" strokeWidth={2} aria-hidden />
              {site.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Slide: campus hero (client reference) ───────────────────────────────── */
function CampusSlide({ priority, isMobile, campaignOpen }: { priority: boolean; isMobile: boolean; campaignOpen: boolean }) {
  const img = isMobile
    ? { src: "/hero/hero-mobile-2.jpg", alt: "Anaşehir Koleji kampüsü — kuş bakışı" }
    : { src: "/hero/hero-1.jpg", alt: "Anaşehir Koleji kampüsü — kuş bakışı" };
  return (
    <div className="relative flex h-full items-end overflow-hidden sm:items-center" style={{ background: NAVY }}>
      {/* Photo sits in the right ~3/4 on large screens so the building clears the text */}
      <div className="absolute inset-0 lg:left-[22%]">
        <Image key={img.src} src={img.src} alt={img.alt} fill priority={priority} sizes="(max-width: 1024px) 100vw, 78vw" className="object-cover" />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(11,33,68,1)_0%,rgba(11,33,68,0.95)_24%,rgba(11,33,68,0.55)_45%,rgba(11,33,68,0)_68%)] max-sm:hidden" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b2144] via-[#0b2144]/70 to-[#0b2144]/10 sm:from-[#0b2144]/60 sm:via-transparent sm:to-transparent" />

      <div className="tone-dark relative z-10 mx-auto w-full max-w-[1280px] px-4 pt-28 pb-16 sm:px-6 sm:py-16 lg:px-12">
        <div className="flex items-center gap-4">
          <p className="text-xs font-bold tracking-[0.22em] text-blue uppercase sm:text-sm">Anaşehir Koleji | 2005’ten beri</p>
          <span className="hidden h-px w-20 bg-blue/60 sm:block" aria-hidden />
        </div>

        <h1 className="display mt-5 text-[2.3rem] leading-[1.06] font-bold tracking-tight sm:text-[3.4rem] lg:text-[4rem]">
          {site.heroHeadline.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h1>

        <div className="relative mt-5 inline-block">
          <p className="display text-[1.75rem] text-blue italic sm:text-[2.4rem]">{site.slogan}</p>
          <svg viewBox="0 0 400 18" preserveAspectRatio="none" className="absolute -bottom-3 left-0 h-3 w-[105%] text-red" aria-hidden>
            <path d="M2 14 C 90 4, 240 2, 398 6" fill="none" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" />
          </svg>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-3 sm:gap-4">
          {campaignOpen ? (
            <>
              <BtnPrimary href={bursluluk.href} size="lg">Bursluluk Sınavına Başvur</BtnPrimary>
              <BtnLine href="/kayit-iletisim#kampus-turu" size="lg">Kampüsü Keşfet</BtnLine>
            </>
          ) : (
            <>
              <BtnPrimary href="/kayit-iletisim#kampus-turu" size="lg">Kampüsü Keşfet</BtnPrimary>
              <BtnLine href="/kayit-iletisim#on-kayit" size="lg">Kayıt Görüşmesi Planla</BtnLine>
            </>
          )}
          <span className="flex items-center gap-3 pl-1 font-semibold text-white/95 sm:text-lg">
            <span className="flex h-12 w-12 items-center justify-center rounded-full ring-2 ring-white/70">
              <Play className="h-4 w-4 translate-x-[1px]" fill="currentColor" aria-hidden />
            </span>
            Tanıtım Filmi — Yakında
          </span>
        </div>

        <ul className="mt-12 flex flex-wrap items-center gap-y-3">
          {values.map((v, i) => (
            <li key={v.label} className={`flex items-center gap-2.5 pr-6 font-semibold sm:text-lg ${i > 0 ? "border-l border-white/25 pl-6" : ""}`}>
              <v.icon className="h-6 w-6 text-blue" strokeWidth={1.7} aria-hidden />
              {v.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ── Slider ──────────────────────────────────────────────────────────────── */
export function HomeHero() {
  const campaignOpen = useCampaignPhase() === "open";
  const isMobile = useIsMobile();
  const slides = campaignOpen ? (["bursluluk", "campus"] as const) : (["campus"] as const);
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const active = current % slides.length;

  useEffect(() => {
    if (slides.length < 2 || paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setCurrent((c) => (c + 1) % slides.length), INTERVAL_MS);
    return () => clearInterval(t);
  }, [slides.length, paused]);

  const labels = { bursluluk: "Bursluluk Sınavı", campus: "Anaşehir Koleji" };

  return (
    <section
      className="relative isolate grid min-h-[calc(100svh-var(--header))] overflow-hidden text-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Öne çıkanlar"
      style={{ background: NAVY }}
    >
      {slides.map((key, i) => {
        const on = i === active;
        return (
          <div
            key={key}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} / ${slides.length}: ${labels[key]}`}
            aria-hidden={!on}
            inert={!on}
            className={`col-start-1 row-start-1 transition-opacity duration-1000 ease-in-out ${on ? "z-10 opacity-100" : "z-0 opacity-0"}`}
          >
            {key === "bursluluk" ? (
              <BurslulukSlide priority={i === 0} />
            ) : (
              <CampusSlide priority={i === 0} isMobile={isMobile} campaignOpen={campaignOpen} />
            )}
          </div>
        );
      })}

      <div className="pointer-events-none absolute inset-x-0 top-6 z-20 flex justify-center sm:hidden">
        <Wordmark className="h-9 w-auto brightness-0 invert" />
      </div>

      {slides.length > 1 && (
        <div className="absolute inset-x-0 bottom-5 z-20 flex justify-center gap-2.5">
          {slides.map((key, i) => (
            <button
              key={key}
              type="button"
              onClick={() => setCurrent(i)}
              aria-label={`${labels[key]} — ${i + 1}. görsel`}
              aria-current={i === active}
              className={`h-2 rounded-full transition-all duration-300 ${i === active ? "w-10 bg-white" : "w-5 bg-white/40 hover:bg-white/70"}`}
            />
          ))}
        </div>
      )}

      {/* Link for screen readers / keyboard to the campaign page */}
      {campaignOpen && (
        <Link href={bursluluk.href} className="sr-only">
          {bursluluk.pageTitle} sayfasına git <ArrowRight aria-hidden />
        </Link>
      )}
    </section>
  );
}
