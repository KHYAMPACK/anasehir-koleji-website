"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, CalendarDays, HeartHandshake, Play, Smile } from "lucide-react";
import { BtnLine, BtnPrimary } from "./Buttons";
import { Wordmark } from "./Logo";
import { NeedsDataTag } from "./NeedsData";
import { bursluluk, examDateLabel } from "@/lib/campaign";
import { useCampaignPhase } from "@/lib/useCampaignPhase";
import { site } from "@/lib/site";

const desktopSlides = [
  { src: "/hero/hero-1.jpg", alt: "Anaşehir Koleji kampüsü — kuş bakışı" },
  { src: "/hero/hero-2.jpg", alt: "Anaşehir Koleji öğrencileri kampüste" },
  { src: "/hero/hero-3.jpg", alt: "Anaşehir Koleji öğrencileri" },
];

const mobileSlides = [
  { src: "/hero/hero-mobile-1.jpg", alt: "Anaşehir Koleji öğrencileri kampüste" },
  { src: "/hero/hero-mobile-2.jpg", alt: "Anaşehir Koleji kampüsü — kuş bakışı" },
];

const values = [
  { icon: BookOpen, label: "Nitelikli Eğitim" },
  { icon: HeartHandshake, label: "Güçlü Değerler" },
  { icon: Smile, label: "Mutlu Bireyler" },
];

const MOBILE_QUERY = "(max-width: 639px)";

function subscribe(callback: () => void) {
  const mq = window.matchMedia(MOBILE_QUERY);
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function getIsMobile() {
  return window.matchMedia(MOBILE_QUERY).matches;
}

function getIsMobileServer() {
  return false;
}

export function HomeHero() {
  const campaignOpen = useCampaignPhase() === "open";
  // Subscribes to the viewport breakpoint directly — the sanctioned way to
  // read external/browser state without the SSR-mismatch or
  // setState-in-effect pitfalls a matchMedia + useEffect combo runs into.
  const isMobile = useSyncExternalStore(subscribe, getIsMobile, getIsMobileServer);
  const [current, setCurrent] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const slides = isMobile ? mobileSlides : desktopSlides;
  // Mobile/desktop slide arrays differ in length, so normalize with modulo
  // at render time rather than resetting state when the breakpoint flips.
  const active = current % slides.length;

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    timer.current = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 5500);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [slides.length]);

  return (
    <section className="relative isolate flex min-h-[calc(100svh-var(--header))] items-end overflow-hidden text-white">
      {slides.map((s, i) => (
        <div
          key={s.src}
          aria-hidden={i !== active}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${i === active ? "opacity-100" : "opacity-0"}`}
        >
          <Image
            src={s.src}
            alt={s.alt}
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover"
          />
        </div>
      ))}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/10" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/20 to-transparent" />

      <div className="pointer-events-none absolute inset-x-0 top-6 z-10 flex justify-center sm:hidden">
        <Wordmark className="h-9 w-auto brightness-0 invert" />
      </div>

      <div className="tone-dark relative z-10 mx-auto w-full max-w-[1180px] px-4 pb-14 pt-24 sm:px-6 sm:pb-16 lg:px-10">
        {campaignOpen && (
          <Link
            href={bursluluk.href}
            className="group mb-6 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 py-2 pr-3 pl-4 text-sm text-white no-underline shadow-[0_8px_30px_rgba(8,16,32,0.35)] backdrop-blur-md transition-colors duration-300 hover:border-white/35 hover:bg-white/15"
          >
            {/* live dot */}
            <span className="relative flex h-2.5 w-2.5 shrink-0" aria-hidden>
              <span className="absolute inset-0 rounded-full bg-red motion-safe:animate-ping" />
              <span className="relative h-2.5 w-2.5 rounded-full bg-red" />
            </span>
            <span className="font-semibold">{bursluluk.title}</span>
            {examDateLabel() ? (
              <>
                <span className="h-4 w-px bg-white/25" aria-hidden />
                <span className="inline-flex items-center gap-1.5 text-white/80">
                  <CalendarDays className="h-4 w-4" strokeWidth={1.8} aria-hidden />
                  {examDateLabel()}
                </span>
              </>
            ) : (
              <NeedsDataTag id="bursluluk-detaylari" />
            )}
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red text-white transition-transform duration-300 group-hover:translate-x-0.5">
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.4} aria-hidden />
            </span>
          </Link>
        )}
        <p className="eyebrow text-white/70">Anaşehir Koleji · 2005’ten beri</p>
        <h1 className="display mt-4 text-[2rem] leading-[1.12] font-semibold tracking-tight sm:text-5xl lg:text-[3.3rem] lg:leading-[1.08]">
          {site.heroHeadline.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h1>
        <p className="display mt-4 text-2xl text-blue italic sm:text-3xl">{site.slogan}</p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          {campaignOpen ? (
            <>
              <BtnPrimary href={bursluluk.href}>Bursluluk Sınavına Başvur</BtnPrimary>
              <BtnLine href="/kayit-iletisim#kampus-turu">Kampüsü Keşfet</BtnLine>
            </>
          ) : (
            <>
              <BtnPrimary href="/kayit-iletisim#kampus-turu">Kampüsü Keşfet</BtnPrimary>
              <BtnLine href="/kayit-iletisim#on-kayit">Kayıt Görüşmesi Planla</BtnLine>
            </>
          )}
          <span className="ml-1 flex items-center gap-2 text-sm font-semibold text-white/90">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/30">
              <Play className="h-3.5 w-3.5 translate-x-[1px]" fill="currentColor" aria-hidden />
            </span>
            Tanıtım filmi — yakında
          </span>
        </div>

        <ul className="mt-9 flex flex-wrap gap-x-8 gap-y-3">
          {values.map((v) => (
            <li key={v.label} className="flex items-center gap-2 text-sm font-semibold">
              <v.icon className="h-5 w-5 text-blue" strokeWidth={1.75} aria-hidden />
              {v.label}
            </li>
          ))}
        </ul>

        <div className="mt-10 flex gap-2">
          {slides.map((s, i) => (
            <button
              key={s.src}
              type="button"
              aria-label={`${i + 1}. görsele geç`}
              aria-current={i === active}
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === active ? "w-8 bg-white" : "w-4 bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
