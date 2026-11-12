import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Target } from "lucide-react";
import { BtnPrimary } from "./Buttons";
import { levelCards, lgsBand } from "@/lib/okullarimiz";

/**
 * Okullarımız overview (client brief 04): three equal photo cards + the LGS
 * band as a separate programme strip. Styled with the site's own card
 * language (card-lift, 14px radius, ring arrow) rather than the brief's mock.
 * Phone: one column, photo on top, LGS band last.
 */
export function SchoolLevels() {
  return (
    <div>
      <div className="grid gap-5 md:grid-cols-3">
        {levelCards.map((c) => (
          <Link
            key={c.slug}
            href={c.href}
            className="card-lift group flex flex-col overflow-hidden rounded-[14px] bg-panel no-underline shadow-sm"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-panel-2">
              <Image
                src={c.image}
                alt={c.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                style={"position" in c ? { objectPosition: c.position } : undefined}
              />
              <span className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-[0.7rem] font-bold tracking-[0.14em] text-ink uppercase backdrop-blur">
                {c.name}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="display text-[1.4rem] leading-snug font-semibold tracking-tight text-ink">{c.motto}</h3>
              <p className="mt-3 text-[0.95rem] leading-[1.55] text-muted">{c.text}</p>
              <span className="mt-auto flex items-center justify-between gap-3 pt-6 text-sm font-semibold text-ink transition-colors group-hover:text-blue">
                {c.cta}
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-ink transition-[border-color,transform] duration-200 group-hover:translate-x-1 group-hover:border-blue"
                  aria-hidden
                >
                  <ArrowRight className="h-4 w-4" strokeWidth={2} />
                </span>
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* LGS Yolculuğu — a programme, not a level: its own band */}
      <div className="tone-navy relative mt-5 overflow-hidden rounded-[14px]">
        <div className="pointer-events-none absolute inset-0 opacity-20 grid-paper" />
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1.5 bg-red" aria-hidden />
        <div className="relative flex flex-col gap-6 px-6 py-7 sm:px-8 md:flex-row md:items-center md:justify-between md:gap-10">
          <div className="flex gap-4">
            <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-red text-white">
              <Target className="h-5 w-5" strokeWidth={1.8} aria-hidden />
            </span>
            <div className="min-w-0">
              <p className="eyebrow">{lgsBand.title}</p>
              <p className="display mt-1.5 text-xl font-semibold text-white sm:text-2xl">{lgsBand.motto}</p>
              <p className="mt-2 max-w-[62ch] text-sm leading-relaxed text-white/70">{lgsBand.text}</p>
            </div>
          </div>
          <div className="shrink-0">
            <BtnPrimary href={lgsBand.href}>{lgsBand.cta}</BtnPrimary>
          </div>
        </div>
      </div>
    </div>
  );
}
