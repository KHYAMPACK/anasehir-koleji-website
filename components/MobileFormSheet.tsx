"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

/** Same breakpoint as the phone-only campaign bar (Tailwind `sm`). */
const PHONE = "(max-width: 639px)";

/**
 * Phone-only form popup. On a phone, any link to one of `ids` on this page
 * (e.g. "Hemen Başvur" → #basvuru), or landing here with that hash from
 * another page (e.g. /kayit-iletisim#on-kayit), opens a bottom sheet with a
 * short `info` block above the form instead of scrolling to the inline one.
 * Tablets and desktops keep the normal anchor scroll; the inline form stays
 * on the page for visitors who scroll down to it themselves.
 */
export function MobileFormSheet({
  ids,
  title,
  info,
  children,
}: {
  /** Anchor ids on this page that lead to the form. */
  ids: string[];
  title: string;
  info: React.ReactNode;
  /** The form itself (rendered only while the sheet is open). */
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const key = ids.join(",");

  const close = useCallback(() => {
    setOpen(false);
    // Drop the hash so the same link / a reload doesn't reopen it unexpectedly.
    if (ids.includes(decodeURIComponent(window.location.hash.slice(1)))) {
      window.history.replaceState(window.history.state, "", window.location.pathname + window.location.search);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  useEffect(() => {
    const isPhone = () => window.matchMedia(PHONE).matches;
    const wanted = (hash: string) => ids.includes(decodeURIComponent(hash.replace(/^#/, "")));

    // Arrived with the hash (cross-page link, or a shared URL).
    const fromHash = () => {
      if (isPhone() && wanted(window.location.hash)) setOpen(true);
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);

    // Same-page links: catch the tap before Next's <Link> / the browser scroll.
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      if (!isPhone()) return;
      const a = (e.target as Element | null)?.closest?.("a[href]");
      if (!(a instanceof HTMLAnchorElement) || a.target === "_blank") return;
      const url = new URL(a.href, window.location.href);
      if (url.origin !== window.location.origin || url.pathname !== window.location.pathname) return;
      if (!wanted(url.hash)) return;
      e.preventDefault();
      e.stopPropagation();
      setOpen(true);
    };
    window.addEventListener("click", onClick, true);

    return () => {
      window.removeEventListener("hashchange", fromHash);
      window.removeEventListener("click", onClick, true);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, close]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[75] flex items-end justify-center">
      <div className="absolute inset-0 bg-ink/60 backdrop-blur-[2px]" onClick={close} aria-hidden />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="form-sheet-title"
        className="tone-paper relative flex max-h-[94svh] w-full flex-col overflow-hidden rounded-t-[22px] bg-canvas text-ink shadow-[0_-18px_50px_rgba(8,16,32,0.4)]"
      >
        <div className="flex items-center justify-between gap-4 border-b border-line bg-panel px-5 py-3.5">
          <p id="form-sheet-title" className="display text-lg leading-snug font-bold">
            {title}
          </p>
          <button
            ref={closeRef}
            type="button"
            onClick={close}
            aria-label="Kapat"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full hover:bg-canvas"
          >
            <X className="h-5 w-5" aria-hidden />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto overscroll-contain px-4 pt-4 pb-[max(1.25rem,env(safe-area-inset-bottom))]">
          {info}
          <div className="mt-4">{children}</div>
        </div>
      </div>
    </div>
  );
}
