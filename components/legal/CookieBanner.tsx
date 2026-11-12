"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  consentCategories,
  onOpenCookiePreferences,
  openCookiePreferences,
  saveConsent,
  useConsent,
  type ConsentCategory,
} from "@/lib/consent";

const ALL_OFF = { islevsel: false, analitik: false, pazarlama: false };
const ALL_ON = { islevsel: true, analitik: true, pazarlama: true };

/**
 * Cookie panel — shown on the first visit and whenever "Çerez Tercihlerimi
 * Yönet" is clicked. Copy is the client's. The three actions have the same
 * visual weight (client rule 3); optional toggles start OFF (rule 5).
 */
export function CookieBanner() {
  const consent = useConsent();
  const [forced, setForced] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [draft, setDraft] = useState<Record<ConsentCategory, boolean>>(ALL_OFF);

  useEffect(
    () =>
      onOpenCookiePreferences(() => {
        setDraft(consent ? { islevsel: consent.islevsel, analitik: consent.analitik, pazarlama: consent.pazarlama } : ALL_OFF);
        setExpanded(true);
        setForced(true);
      }),
    [consent],
  );

  const open = forced || consent === null;
  if (!open) return null;

  const decide = (choice: Record<ConsentCategory, boolean>) => {
    saveConsent(choice);
    setForced(false);
    setExpanded(false);
  };

  const btn =
    "min-h-[46px] flex-1 basis-[8.5rem] whitespace-nowrap rounded-full border-2 border-ink bg-ink px-4 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-ink";

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="cerez-baslik"
      className="tone-paper fixed inset-x-3 bottom-3 z-[70] max-h-[calc(100svh-1.5rem)] overflow-y-auto rounded-[20px] bg-panel p-5 text-ink shadow-[0_24px_60px_-12px_rgba(8,16,32,0.45)] ring-1 ring-line sm:inset-x-auto sm:left-5 sm:bottom-5 sm:w-[30rem] sm:p-6"
    >
      <p id="cerez-baslik" className="display text-lg font-bold">Gizliliğiniz Bizim İçin Önemli</p>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        Anaşehir Koleji internet sitesinin güvenli çalışması için zorunlu çerezler kullanılmaktadır. Analitik,
        işlevsel ve pazarlama çerezleri ise yalnızca tercihiniz doğrultusunda etkinleştirilir.
      </p>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        Tercihlerinizi dilediğiniz zaman değiştirebilirsiniz.{" "}
        <Link href="/gizlilik" className="font-semibold text-blue underline">
          Çerez Politikası
        </Link>
      </p>

      {expanded && (
        <ul className="mt-4 divide-y divide-line rounded-[14px] border border-line">
          {consentCategories.map((c) => (
            <li key={c.key} className="flex items-center justify-between gap-4 px-4 py-3">
              <span className="text-sm font-semibold">{c.label}</span>
              {c.key === "zorunlu" ? (
                <span className="text-xs font-semibold text-muted">Her zaman aktif</span>
              ) : (
                <label className="relative inline-flex cursor-pointer items-center">
                  <input
                    type="checkbox"
                    className="peer sr-only"
                    checked={draft[c.key]}
                    onChange={(e) => setDraft((d) => ({ ...d, [c.key as ConsentCategory]: e.target.checked }))}
                    aria-label={c.label}
                  />
                  <span className="h-6 w-11 rounded-full bg-line transition-colors peer-checked:bg-blue peer-focus-visible:ring-2 peer-focus-visible:ring-ink" />
                  <span className="absolute left-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform peer-checked:translate-x-5" />
                </label>
              )}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-5 flex flex-wrap gap-2">
        <button type="button" className={btn} onClick={() => decide(ALL_OFF)}>
          Tümünü Reddet
        </button>
        {expanded ? (
          <button type="button" className={btn} onClick={() => decide(draft)}>
            Kaydet
          </button>
        ) : (
          <button type="button" className={btn} onClick={() => setExpanded(true)}>
            Tercihleri Yönet
          </button>
        )}
        <button type="button" className={btn} onClick={() => decide(ALL_ON)}>
          Tümünü Kabul Et
        </button>
      </div>
    </div>
  );
}

/** Footer / KVKK page link that reopens the panel (client rule 8). */
export function CookiePreferencesLink({ className = "" }: { className?: string }) {
  return (
    <button
      type="button"
      className={`underline-offset-2 hover:underline ${className}`}
      onClick={openCookiePreferences}
    >
      Çerez Tercihlerimi Yönet
    </button>
  );
}
