"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { bursluluk } from "@/lib/campaign";
import { useCampaignPhase } from "@/lib/useCampaignPhase";

const INTERVAL_MS = 5000;

/**
 * The client's three grade banners (5. sınıf, 6–7. sınıf, 8. sınıf) as a
 * full-width strip under the homepage hero. Every banner links to the
 * bursluluk form (/bursluluk#basvuru — on phones that opens the form popup).
 * Crossfades every 5 s; banners have slightly different ratios, so they are
 * shown whole (contain) on a navy that matches their background.
 * Hidden once applications close.
 */
export function BurslulukBanners() {
  const open = useCampaignPhase() === "open";
  const banners = bursluluk.banners;
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!open || banners.length < 2 || paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setCurrent((c) => (c + 1) % banners.length), INTERVAL_MS);
    return () => clearInterval(t);
  }, [open, banners.length, paused]);

  if (!open || banners.length === 0) return null;

  const go = (d: number) => setCurrent((c) => (c + d + banners.length) % banners.length);

  return (
    <section
      aria-roledescription="carousel"
      aria-label={`${bursluluk.title} afişleri`}
      className="group relative bg-[#06142e]"
      onFocus={(e) => e.target.matches(":focus-visible") && setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="relative mx-auto grid max-w-[1920px] aspect-[8/3]">
        {banners.map((b, i) => {
          const on = i === current;
          return (
            <Link
              key={b.src}
              href={`${bursluluk.href}#basvuru`}
              aria-hidden={!on}
              tabIndex={on ? 0 : -1}
              aria-label={`${b.alt} — başvur`}
              className={`col-start-1 row-start-1 transition-opacity duration-700 ease-in-out ${on ? "z-10 opacity-100" : "pointer-events-none z-0 opacity-0"}`}
            >
              <Image
                src={b.src}
                alt={b.alt}
                fill
                sizes="(max-width: 1920px) 100vw, 1920px"
                className="object-contain"
                priority={i === 0}
              />
            </Link>
          );
        })}

        {banners.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Önceki afiş"
              className="absolute top-1/2 left-2 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/35 text-white opacity-0 transition-opacity group-hover:opacity-100 focus-visible:opacity-100 sm:flex"
            >
              <ChevronLeft className="h-6 w-6" aria-hidden />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Sonraki afiş"
              className="absolute top-1/2 right-2 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/35 text-white opacity-0 transition-opacity group-hover:opacity-100 focus-visible:opacity-100 sm:flex"
            >
              <ChevronRight className="h-6 w-6" aria-hidden />
            </button>
          </>
        )}
      </div>

      {banners.length > 1 && (
        <div className="flex justify-center gap-2 py-2.5">
          {banners.map((b, i) => (
            <button
              key={b.src}
              type="button"
              onClick={() => setCurrent(i)}
              aria-label={`${i + 1}. afiş`}
              aria-current={i === current}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? "w-8 bg-white" : "w-4 bg-white/40 hover:bg-white/70"}`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
