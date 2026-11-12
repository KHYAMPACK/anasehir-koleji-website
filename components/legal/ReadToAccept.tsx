"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { CheckCircle2, X } from "lucide-react";
import type { Block } from "@/lib/legal";
import { LegalDocument } from "./LegalDocument";

/**
 * "…Aydınlatma Metni'ni okudum" checkbox that can only be ticked AFTER the
 * text has been read (client requirement, Nov 2026).
 *
 * Clicking the checkbox or the document name opens the full text in a dialog.
 * "Okudum" at the bottom stays disabled until the visitor scrolls to the end;
 * pressing it marks the text as read and ticks the box. The checkbox is
 * `required`, so the form can't be sent without it.
 */
export function ReadToAccept({
  blocks,
  docTitle,
  docHref,
  name = "aydinlatmaOkundu",
  suffix = "’ni okudum.",
  required = true,
}: {
  blocks: Block[];
  /** Shown in the label and as the dialog title. */
  docTitle: string;
  /** Standalone page of the same text (opened from the dialog footer). */
  docHref: string;
  name?: string;
  suffix?: string;
  required?: boolean;
}) {
  const [read, setRead] = useState(false);
  const [checked, setChecked] = useState(false);
  const [open, setOpen] = useState(false);
  const [atEnd, setAtEnd] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const checkEnd = useCallback(() => {
    const el = scrollRef.current;
    if (el && el.scrollTop + el.clientHeight >= el.scrollHeight - 24) setAtEnd(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    // Short texts that need no scrolling count as read once shown.
    const t = setTimeout(checkEnd, 50);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      clearTimeout(t);
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, checkEnd]);

  const confirmRead = () => {
    setRead(true);
    setChecked(true);
    setOpen(false);
  };

  return (
    <div className="grid gap-1.5">
      <label className="flex min-w-0 items-start gap-2 text-sm text-muted">
        <input
          required={required}
          type="checkbox"
          name={name}
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          onClick={(e) => {
            if (!read) {
              e.preventDefault();
              setOpen(true);
            }
          }}
          className="mt-1 shrink-0"
        />
        <span>
          <button type="button" onClick={() => setOpen(true)} className="text-left font-semibold text-blue underline">
            {docTitle}
          </button>
          {suffix}
          {required && " *"}
        </span>
      </label>
      {!read && (
        <p className="pl-6 text-xs text-muted">Onaylayabilmek için önce metni sonuna kadar okuyun.</p>
      )}

      {open && (
        <div className="fixed inset-0 z-[80] flex items-end justify-center p-0 sm:items-center sm:p-6">
          <div className="absolute inset-0 bg-ink/60 backdrop-blur-[2px]" onClick={() => setOpen(false)} aria-hidden />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="okundu-baslik"
            className="tone-paper relative flex h-[92svh] w-full max-w-3xl flex-col overflow-hidden rounded-t-[22px] bg-panel text-ink shadow-[0_24px_60px_rgba(8,16,32,0.45)] sm:h-[85vh] sm:rounded-[22px]"
          >
            <div className="flex items-start justify-between gap-4 border-b border-line px-5 py-4 sm:px-7">
              <p id="okundu-baslik" className="display text-lg leading-snug font-bold">{docTitle}</p>
              <button
                ref={closeRef}
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Kapat"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full hover:bg-canvas"
              >
                <X className="h-5 w-5" aria-hidden />
              </button>
            </div>

            <div ref={scrollRef} onScroll={checkEnd} className="flex-1 overflow-y-auto px-5 py-5 sm:px-7">
              <LegalDocument blocks={blocks} />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line px-5 py-4 sm:px-7">
              <a href={docHref} target="_blank" rel="noreferrer" className="text-sm font-semibold text-blue underline">
                Ayrı sayfada aç
              </a>
              <div className="flex items-center gap-3">
                {!atEnd && <span className="text-xs text-muted">Metnin sonuna kadar kaydırın</span>}
                <button
                  type="button"
                  disabled={!atEnd}
                  onClick={confirmRead}
                  className="inline-flex min-h-[46px] items-center gap-2 rounded-full bg-red px-6 text-sm font-semibold text-white transition-opacity disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <CheckCircle2 className="h-4 w-4" aria-hidden />
                  Okudum
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
