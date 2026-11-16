"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { Album } from "@/lib/torenler";

/**
 * Ceremony albums: one tab per event, a photo grid, and a lightbox
 * (click a photo; arrows / ← → to browse, Esc or × to close).
 */
export function EventAlbums({ albums }: { albums: Album[] }) {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState<number | null>(null);
  const album = albums[active];
  const count = album.photos.length;

  useEffect(() => {
    if (open == null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((i) => (i == null ? i : (i + 1) % count));
      if (e.key === "ArrowLeft") setOpen((i) => (i == null ? i : (i - 1 + count) % count));
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, count]);

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Törenler">
        {albums.map((a, i) => (
          <button
            key={a.slug}
            type="button"
            role="tab"
            aria-selected={i === active}
            onClick={() => setActive(i)}
            className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
              i === active ? "bg-ink text-white" : "bg-panel text-ink ring-1 ring-line hover:ring-blue"
            }`}
          >
            {a.title}
            <span className={`ml-2 font-normal ${i === active ? "text-white/60" : "text-muted"}`}>{a.date}</span>
          </button>
        ))}
      </div>

      <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4" role="tabpanel" aria-label={album.title}>
        {album.photos.map((p, i) => (
          <li key={p.src}>
            <button
              type="button"
              onClick={() => setOpen(i)}
              aria-label={`${album.title}, fotoğraf ${i + 1}: büyüt`}
              className="group relative block aspect-square w-full overflow-hidden rounded-[14px] bg-panel-2"
            >
              <Image
                src={p.src}
                alt={`${album.title}, fotoğraf ${i + 1}`}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </button>
          </li>
        ))}
      </ul>

      {open != null && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-[#081020]/92 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`${album.title}, fotoğraf ${open + 1} / ${count}`}
          onClick={() => setOpen(null)}
        >
          <div className="relative h-full max-h-[86vh] w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <Image
              src={album.photos[open].src}
              alt={`${album.title}, fotoğraf ${open + 1}`}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm font-semibold text-white/80">
            {open + 1} / {count}
          </p>
          <button
            type="button"
            onClick={() => setOpen(null)}
            aria-label="Kapat"
            className="absolute top-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
          >
            <X className="h-6 w-6" aria-hidden />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setOpen((open - 1 + count) % count);
            }}
            aria-label="Önceki fotoğraf"
            className="absolute top-1/2 left-3 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
          >
            <ChevronLeft className="h-6 w-6" aria-hidden />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setOpen((open + 1) % count);
            }}
            aria-label="Sonraki fotoğraf"
            className="absolute top-1/2 right-3 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
          >
            <ChevronRight className="h-6 w-6" aria-hidden />
          </button>
        </div>
      )}
    </div>
  );
}
