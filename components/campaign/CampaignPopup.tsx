"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarClock, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { bursluluk, examDateLabel } from "@/lib/campaign";
import { useDismissed } from "@/lib/useDismissed";
import { useCampaignPhase } from "@/lib/useCampaignPhase";
import { useConsent } from "@/lib/consent";
import { NeedsDataTag } from "../NeedsData";

const DELAY_MS = 4000;

/**
 * First-visit popup: appears once per visitor after a short delay, never on
 * the /bursluluk page itself. Closing it (×, backdrop, Esc or the CTA)
 * stores the dismissal so it doesn't come back.
 */
export function CampaignPopup() {
  const pathname = usePathname();
  const [dismissed, dismiss] = useDismissed("bursluluk-popup");
  const [due, setDue] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  const phase = useCampaignPhase();
  const consentDecided = useConsent() != null;
  const enabled = phase === "open" && consentDecided && bursluluk.showPopup && pathname !== bursluluk.href;
  const open = enabled && due && !dismissed;

  useEffect(() => {
    if (!enabled) return;
    const t = setTimeout(() => setDue(true), DELAY_MS);
    return () => clearTimeout(t);
  }, [enabled]);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && dismiss();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, dismiss]);

  if (!open) return null;

  const [day, ...rest] = (examDateLabel() ?? "").split(" ");
  const month = rest[0] ?? "";
  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center p-4 sm:items-center">
      <div className="absolute inset-0 bg-ink/60 backdrop-blur-[2px]" onClick={dismiss} aria-hidden />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="bursluluk-popup-title"
        className="tone-dark relative w-full max-w-md text-white overflow-hidden rounded-[18px] shadow-[0_24px_60px_rgba(8,16,32,0.45)]"
        style={{ background: "#0b2144" }}
      >
        {/* Student photo, cut diagonally at the bottom — same look as the hero slide */}
        <div className="relative h-36 sm:h-44 [clip-path:polygon(0_0,100%_0,100%_72%,0_100%)]">
          <Image src="/hero/hero-2.jpg" alt="" fill sizes="448px" className="object-cover object-[60%_30%]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b2144]/10 to-[#0b2144]/60" />
        </div>
        {/* Red + blue accent along the cut, drawn with the same polygon so it follows the edge */}
        <span
          className="absolute inset-x-0 top-0 h-36 bg-red sm:h-44"
          style={{ clipPath: "polygon(0 calc(100% - 9px), 100% calc(72% - 9px), 100% 72%, 0 100%)" }}
          aria-hidden
        />
        <span
          className="absolute inset-x-0 top-0 h-36 bg-blue sm:h-44"
          style={{ clipPath: "polygon(0 calc(100% - 13px), 100% calc(72% - 13px), 100% calc(72% - 9px), 0 calc(100% - 9px))" }}
          aria-hidden
        />

        <button
          ref={closeRef}
          type="button"
          onClick={dismiss}
          aria-label="Kapat"
          className="absolute top-3 right-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-[#0b2144]/70 text-white hover:bg-[#0b2144]"
        >
          <X className="h-5 w-5" aria-hidden />
        </button>

        <div className="relative px-6 pt-1 pb-6 sm:px-8 sm:pb-7">
          <h2 id="bursluluk-popup-title" className="display text-[2.5rem] leading-[0.95] font-extrabold text-white tracking-tight uppercase sm:text-5xl">
            Bursluluk
            <br />
            Sınavı
          </h2>

          <div className="mt-5 flex flex-wrap items-stretch gap-x-2 gap-y-3">
            {day ? (
              <span className="display -skew-x-[10deg] bg-red px-5 py-2 text-3xl leading-none font-extrabold text-white uppercase shadow-[0_14px_30px_-12px_rgba(227,6,19,0.7)]">
                <span className="inline-block skew-x-[10deg]">
                  {day} {month}
                </span>
              </span>
            ) : (
              <NeedsDataTag id="bursluluk-detaylari" />
            )}
            <span className="display flex items-center -skew-x-[10deg] bg-blue px-4 py-2 text-base font-extrabold text-[#0b2144] uppercase">
              <span className="inline-block skew-x-[10deg]">{bursluluk.grades.join(" · ")}. Sınıflar</span>
            </span>
          </div>

          <p className="mt-4 flex items-center gap-2 text-sm font-semibold text-white/80">
            <CalendarClock className="h-5 w-5 text-white/70" strokeWidth={1.6} aria-hidden />
            Seanslar: {bursluluk.sessions.map((x) => x.time).join(" · ")}
          </p>

          <Link
            href={bursluluk.href}
            onClick={dismiss}
            className="mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-full bg-red font-bold text-white no-underline transition-colors hover:bg-red-hover"
          >
            Bursluluk Sınavına Başvur
            <ArrowRight className="h-5 w-5" aria-hidden />
          </Link>
          <button type="button" onClick={dismiss} className="mt-3 w-full text-sm font-semibold text-white/60 hover:text-white">
            Daha sonra
          </button>
        </div>
      </div>
    </div>
  );
}
