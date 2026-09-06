"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BtnGhost, BtnPrimary } from "./Buttons";
import { Wordmark } from "./Logo";
import { site } from "@/lib/site";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const beats = [
  {
    kicker: "Anaşehir Okulları",
    title: site.slogan,
    text: "Etimesgut’ta kreşten liseye; Atatürk’e bağlı, SKS’li bir okul hayatı.",
  },
  {
    kicker: "02  ·  SKS",
    title: "25 dal. Her gün bir etkinlik.",
    text: "Spor, kültür ve sanat dersleri ücretsiz. Öğrenci 10 seçer, 5’ine yerleşir.",
  },
  {
    kicker: "03  ·  Kampüs",
    title: "Üç bina. Merkez Bağlıca.",
    text: "Kolej, anaokulu ve Ankana Kids — hepsi Etimesgut’ta.",
  },
  {
    kicker: "04",
    title: "Anaşehir Okulları",
    text: "Gelecek Anaşehir’de başlar.",
  },
];

export function HeroJourney() {
  const wrap = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      ScrollTrigger.config({ ignoreMobileResize: true });

      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const cards = gsap.utils.toArray<HTMLElement>(".hero-beat");

      if (reduce) {
        gsap.set(cards, { opacity: 1, y: 0, position: "relative" });
        return;
      }

      gsap.set(cards, { opacity: 0, y: 28 });
      gsap.set(cards[0], { opacity: 1, y: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrap.current,
          start: "top top",
          end: "+=300%",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      cards.forEach((card, i) => {
        if (i === 0) return;
        tl.to(cards[i - 1], { opacity: 0, y: -24, duration: 0.35 }, "+=0.15");
        tl.to(card, { opacity: 1, y: 0, duration: 0.45 }, "<0.05");
      });
    },
    { scope: wrap },
  );

  return (
    <section ref={wrap} className="grid-paper relative isolate overflow-hidden">
      <div className="grid-vignette pointer-events-none absolute inset-0" />
      <div className="absolute -right-24 top-1/4 h-72 w-72 rounded-full bg-red/15 blur-3xl" />
      <div className="absolute -left-16 bottom-10 h-56 w-56 rounded-full bg-blue/20 blur-3xl" />
      <div className="relative mx-auto flex min-h-[calc(100svh-var(--header))] max-w-[1180px] flex-col justify-center px-4 py-16 sm:px-6 sm:py-20 lg:px-10">
        <div className="flex items-center gap-6 text-center md:items-start md:text-left">
          <span className="mt-2 hidden h-[min(18rem,40vh)] w-1.5 shrink-0 rounded-full bg-red md:block" />
          <div className="flex min-w-0 w-full flex-1 flex-col items-center md:items-start">
            <Wordmark className="mb-8 h-20 w-auto max-w-[min(92vw,28rem)] md:h-24" />
            <div className="relative w-full max-w-[40rem]">
              {beats.map((beat, i) => (
                <div
                  key={beat.kicker}
                  className={`hero-beat ${i === 0 ? "relative" : "absolute inset-x-0 top-0"}`}
                >
                  <p className="eyebrow">{beat.kicker}</p>
                  <h1 className="display mt-4 text-[1.85rem] font-semibold tracking-tight text-ink sm:text-5xl lg:text-[3.2rem] lg:leading-[1.12]">
                    {beat.title}
                  </h1>
                  <p className="mx-auto mt-4 max-w-[46ch] text-sm text-muted sm:mt-5 sm:text-base md:mx-0">
                    {beat.text}
                  </p>
                </div>
              ))}
            </div>
            <div className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-3 sm:mt-10 md:justify-start">
              <BtnPrimary href="/iletisim#on-kayit">Ön Kayıt</BtnPrimary>
              <BtnGhost href="/ortaokul">Ortaokulu görün</BtnGhost>
            </div>
            <p className="mt-8 text-xs tracking-[0.16em] text-muted uppercase sm:mt-10">
              Kaydırın
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
