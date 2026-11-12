"use client";

import { MapPin } from "lucide-react";
import { mapsEmbedUrl, mapsSearchUrl } from "@/lib/campuses";
import { saveConsent, useConsent } from "@/lib/consent";

/**
 * Google Maps embed that only loads after the visitor allows "İşlevsel
 * Çerezler" (client rule 9: maps and other embeds must respect consent —
 * Google sets third-party cookies and the request goes abroad).
 */
export function MapEmbed({ query, title, className = "" }: { query: string; title: string; className?: string }) {
  const consent = useConsent();

  if (consent?.islevsel) {
    return (
      <iframe
        title={title}
        src={mapsEmbedUrl(query)}
        className={`w-full border-0 ${className}`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    );
  }

  return (
    <div className={`tone-paper flex w-full flex-col items-center justify-center gap-4 px-6 text-center ${className}`}>
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-panel text-red shadow-sm">
        <MapPin className="h-6 w-6" strokeWidth={1.8} aria-hidden />
      </span>
      <p className="max-w-[46ch] text-sm text-muted">
        Harita Google tarafından sağlanır ve işlevsel çerez kullanır.
      </p>
      <div className="flex flex-wrap justify-center gap-2">
        <button
          type="button"
          onClick={() =>
            saveConsent({
              islevsel: true,
              analitik: consent?.analitik ?? false,
              pazarlama: consent?.pazarlama ?? false,
            })
          }
          className="min-h-[46px] rounded-full bg-ink px-5 text-sm font-semibold text-white hover:bg-ink/90"
        >
          Haritayı Göster
        </button>
        <a
          href={mapsSearchUrl(query)}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-[46px] items-center rounded-full border border-line bg-panel px-5 text-sm font-semibold text-ink no-underline hover:border-blue"
        >
          Google Haritalar’da aç
        </a>
      </div>
    </div>
  );
}
