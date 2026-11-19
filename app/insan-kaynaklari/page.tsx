import type { Metadata } from "next";
import Image from "next/image";
import { ArrowDown, Award, GraduationCap, Handshake, TrendingUp } from "lucide-react";
import { IsBasvuruForm } from "@/components/IsBasvuruForm";
import { Section } from "@/components/PageHero";
import { ikForm, ikHero, ikValues, isBasvuruNotice, type IkValueIcon } from "@/lib/ik";
import { parseLegal, readLegal } from "@/lib/legal";

export const metadata: Metadata = {
  title: "İnsan Kaynakları",
  description: "Anaşehir Koleji İnsan Kaynakları — genel iş başvuru formu.",
};

const valueIcons: Record<IkValueIcon, typeof Award> = {
  award: Award,
  growth: TrendingUp,
  handshake: Handshake,
  student: GraduationCap,
};

/** Alternating accents (site palette): red / light blue. */
const accents = ["#e30613", "#00b1eb"];

export default function InsanKaynaklariPage() {
  return (
    <>
      {/* Banner — navy with a real campus photo, quick jump to the form */}
      <section className="tone-navy relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-25 grid-paper" />
        <div className="relative mx-auto grid max-w-[1180px] items-center gap-10 px-4 py-14 sm:px-6 lg:min-h-[480px] lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:px-10 lg:py-16">
          <div className="min-w-0">
            <p className="text-sm font-bold tracking-[0.14em] text-blue uppercase">{ikHero.eyebrow}</p>
            <h1 className="display mt-4 max-w-[16ch] text-[2.15rem] leading-[1.08] font-extrabold tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">
              {ikHero.title}
            </h1>
            <a
              href="#is-basvuru-formu"
              className="mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-red px-6 font-bold text-white no-underline transition-colors hover:bg-red-hover"
            >
              {ikForm.title}
              <ArrowDown className="h-5 w-5" aria-hidden />
            </a>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[22px] ring-1 ring-white/15 lg:aspect-[5/4]">
            <Image
              src="/kampus/bina.jpg"
              alt="Anaşehir Koleji okul binası"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Değerlerimiz — four cards: 1 col mobile, 2 tablet, 4 desktop */}
      <Section tone="paper">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ikValues.map((v, i) => {
            const Icon = valueIcons[v.icon];
            const accent = accents[i % 2];
            return (
              <li
                key={v.title}
                className="flex flex-col rounded-[20px] border border-line/70 bg-panel p-6 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-24px_rgba(20,35,58,0.45)] sm:p-7"
              >
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-full"
                  style={{ background: `${accent}1a`, color: accent }}
                >
                  <Icon className="h-6 w-6" strokeWidth={1.7} aria-hidden />
                </span>
                <h2 className="display mt-5 text-xl font-semibold tracking-tight text-ink">{v.title}</h2>
                <span className="mt-3 h-0.5 w-8 rounded-full" style={{ background: accent }} aria-hidden />
              </li>
            );
          })}
        </ul>
      </Section>

      {/* Tek genel iş başvuru formu */}
      <Section id="is-basvuru-formu" tone="ice" title={ikForm.title} lead={ikForm.intro}>
        <div className="max-w-3xl">
          <IsBasvuruForm noticeBlocks={parseLegal(readLegal(isBasvuruNotice.file))} />
          <p className="mt-4 text-sm text-muted">{ikForm.note}</p>
        </div>
      </Section>
    </>
  );
}
