import type { Metadata } from "next";
import { BtnPrimary } from "@/components/Buttons";
import { BurslulukForm } from "@/components/BurslulukForm";
import { Countdown } from "@/components/campaign/Countdown";
import { NeedsData, NeedsDataTag } from "@/components/NeedsData";
import { Section } from "@/components/PageHero";
import { bursluluk } from "@/lib/campaign";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Bursluluk Sınavı",
  description: `${site.name} Bursluluk Sınavı başvurusu.`,
};

export default function BurslulukPage() {
  return (
    <>
      <section className="tone-navy relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-30 grid-paper" />
        <div className="relative mx-auto grid max-w-[1180px] items-center gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:px-10">
          <div className="flex gap-5">
            <span className="mt-1 hidden h-16 w-1.5 shrink-0 rounded-full bg-red sm:block" />
            <div className="min-w-0">
              <p className="eyebrow">{site.name}</p>
              <h1 className="display mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-[3.4rem] lg:leading-[1.08]">
                {bursluluk.title}
              </h1>
              <div className="mt-8">
                <Countdown />
              </div>
              <div className="mt-8">
                <BtnPrimary href="#basvuru" size="lg">Hemen Başvur</BtnPrimary>
              </div>
            </div>
          </div>
          <NeedsData id="bursluluk-gorsel" ratio="aspect-[4/3]" />
        </div>
      </section>

      <Section tone="ice" eyebrow="Sınav Bilgileri" title="Bilmeniz gerekenler.">
        <dl className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {bursluluk.details.map((d) => (
            <div key={d.label} className="rounded-[14px] bg-panel p-5 shadow-sm">
              <dt className="eyebrow">{d.label}</dt>
              <dd className="display mt-2 text-lg font-semibold text-ink">
                {d.value ?? <NeedsDataTag id="bursluluk-detaylari" />}
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section id="basvuru" tone="paper" eyebrow="Başvuru" title="Başvuru formu.">
        <div className="max-w-[46rem]">
          <BurslulukForm />
        </div>
      </Section>

      <Section id="sss" tone="ice" eyebrow="SSS" title="Sık sorulan sorular.">
        <NeedsData id="bursluluk-sss" />
      </Section>
    </>
  );
}
