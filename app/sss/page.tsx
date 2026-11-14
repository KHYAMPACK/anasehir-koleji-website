import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactCta } from "@/components/ContactCta";
import { SssExplorer } from "@/components/sss/SssExplorer";
import { readSss } from "@/lib/sss";

export const metadata: Metadata = {
  title: "Sıkça Sorulan Sorular",
  description: "Anaşehir Koleji hakkında velilerin merak ettiği sorular ve yanıtları.",
};

export default function SssPage() {
  const categories = readSss();

  return (
    <>
      <section className="tone-navy relative overflow-hidden pt-14 pb-20 sm:pt-16 sm:pb-24">
        <div className="pointer-events-none absolute inset-0 opacity-20 grid-paper" />
        <div className="relative mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-10">
          <p className="text-sm font-bold tracking-[0.14em] text-blue uppercase">Anaşehir Koleji | Veli Rehberi</p>
          <h1 className="display mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">Sıkça Sorulan Sorular</h1>
          {/* Client intro, verbatim */}
          <p className="mt-5 max-w-[66ch] text-white/80 sm:text-lg">
            Çocuğunuzun eğitimiyle ilgili kararların ne kadar önemli olduğunu biliyoruz. Anaşehir Koleji&apos;nin eğitim
            yaklaşımını, akademik sistemini, öğrenci gelişim süreçlerini ve günlük okul yaşamını tüm yönleriyle
            tanıyabilmeniz için merak ettiğiniz soruları yanıtlıyoruz.
          </p>
        </div>
      </section>

      {/* useSearchParams (?q= from the homepage teaser) needs a Suspense boundary */}
      <Suspense>
        <SssExplorer categories={categories} />
      </Suspense>

      <ContactCta image="/hero/hero-1.jpg" />
    </>
  );
}
