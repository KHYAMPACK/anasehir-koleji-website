import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Trophy } from "lucide-react";
import { BtnPrimary } from "./Buttons";
import { atletizm, basariOne, basariSpor } from "@/lib/basarilar";

/**
 * Homepage teaser for /akademik-basari#ogrenci-basarilari: the SDU Türkiye
 * 1.'si poster as the lead, the sports posters as a small grid beside it.
 * Captions come from lib/basarilar.ts (only what each poster says).
 */
export function BasariTeaser() {
  const thumbs = [basariSpor, ...atletizm.items];

  return (
    <section className="tone-navy relative isolate overflow-hidden bg-ink py-[clamp(3rem,6vw,5rem)]">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-15 grid-paper" />
      <div className="pointer-events-none absolute -top-32 -left-24 -z-10 h-96 w-96 rounded-full bg-red/25 blur-3xl" aria-hidden />
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-10">
        <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="display flex items-center gap-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-red text-white">
              <Trophy className="h-5 w-5" strokeWidth={1.9} aria-hidden />
            </span>
            Öğrenci Başarıları
          </h2>
          <BtnPrimary href="/akademik-basari#ogrenci-basarilari" size="lg">
            Tüm Başarılar
          </BtnPrimary>
        </div>

        <div className="grid gap-5 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          {/* Lead: SDU Türkiye 1.'si */}
          <Link
            href="/akademik-basari#ogrenci-basarilari"
            className="group flex flex-col overflow-hidden rounded-[22px] bg-white/[0.06] no-underline ring-1 ring-white/12 transition-colors hover:bg-white/[0.1]"
          >
            <div className="overflow-hidden">
              <Image
                src={basariOne.image}
                alt={`${basariOne.name}: ${basariOne.event}, ${basariOne.result}`}
                width={basariOne.width}
                height={basariOne.height}
                sizes="(max-width: 1024px) 100vw, 540px"
                className="h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            </div>
            <div className="flex items-center gap-4 p-5 sm:p-6">
              <div className="min-w-0 flex-1">
                <p className="text-xs font-bold tracking-[0.12em] text-red uppercase">Akademik</p>
                <p className="display mt-0.5 text-xl font-semibold tracking-tight text-white">{basariOne.name}</p>
                <p className="mt-1 text-sm text-white/70">
                  {basariOne.event} · {basariOne.result}
                </p>
              </div>
              <ArrowRight className="h-5 w-5 shrink-0 text-white/60 transition-transform group-hover:translate-x-1" aria-hidden />
            </div>
          </Link>

          {/* Sports posters */}
          <div className="flex flex-col">
            <p className="mb-3 text-xs font-bold tracking-[0.12em] text-white/60 uppercase">Sportif</p>
            <ul className="grid flex-1 grid-cols-2 gap-3 sm:grid-cols-3">
              {thumbs.map((b) => (
                <li key={b.name}>
                  <Link
                    href="/akademik-basari#ogrenci-basarilari"
                    className="group block h-full overflow-hidden rounded-[16px] bg-white/[0.06] no-underline ring-1 ring-white/12 transition-colors hover:bg-white/[0.1]"
                  >
                    <div className="overflow-hidden">
                      <Image
                        src={b.image}
                        alt={`${b.name}: ${b.result}`}
                        width={b.width}
                        height={b.height}
                        sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 190px"
                        className="h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      />
                    </div>
                    <p className="display px-3 py-2.5 text-sm leading-snug font-semibold text-white">{b.name}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
