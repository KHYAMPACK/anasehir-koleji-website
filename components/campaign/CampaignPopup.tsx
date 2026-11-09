"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { bursluluk, examDateLabel } from "@/lib/campaign";
import { useDismissed } from "@/lib/useDismissed";
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

  const enabled = bursluluk.active && bursluluk.showPopup && pathname !== bursluluk.href;
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

  const date = examDateLabel();
  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center p-4 sm:items-center">
      <div className="absolute inset-0 bg-ink/60 backdrop-blur-[2px]" onClick={dismiss} aria-hidden />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="bursluluk-popup-title"
        className="tone-navy relative w-full max-w-md overflow-hidden rounded-[18px] p-6 shadow-[0_24px_60px_rgba(8,16,32,0.45)] sm:p-8"
      >
        <div className="pointer-events-none absolute inset-0 opacity-25 grid-paper" />
        <button
          ref={closeRef}
          type="button"
          onClick={dismiss}
          aria-label="Kapat"
          className="absolute top-3 right-3 z-10 flex h-9 w-9 items-center justify-center rounded-full text-xl leading-none text-white/70 hover:bg-white/10 hover:text-white"
        >
          ×
        </button>
        <div className="relative">
          <span className="inline-block rounded-full bg-red px-3 py-1 text-xs font-semibold text-white">
            Başvurular açık
          </span>
          <h2 id="bursluluk-popup-title" className="display mt-4 text-3xl font-semibold text-white">
            {bursluluk.title}
          </h2>
          <div className="mt-3 text-white/80">
            {date ?? <NeedsDataTag id="bursluluk-detaylari" />}
          </div>
          <Link
            href={bursluluk.href}
            onClick={dismiss}
            className="mt-6 flex h-12 w-full items-center justify-center rounded-full bg-red font-semibold text-white no-underline hover:bg-red-hover"
          >
            Başvur →
          </Link>
          <button type="button" onClick={dismiss} className="mt-3 w-full text-sm text-white/60 hover:text-white">
            Daha sonra
          </button>
        </div>
      </div>
    </div>
  );
}
