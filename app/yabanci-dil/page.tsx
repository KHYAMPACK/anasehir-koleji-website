import type { Metadata } from "next";
import { MediaPlaceholder } from "@/components/MediaPlaceholder";
import { PageHero, Section } from "@/components/PageHero";
import { ProseCards } from "@/components/ProseCards";
import { liseEnglish, primaryEnglishEn, primaryEnglishTr } from "@/lib/copy";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Yabancı Dil" };

export default function YabanciDilPage() {
  return (
    <>
      <PageHero
        eyebrow="Yabancı diller"
        title="İngilizceyi edinmek; lisede Kanada seçeneği."
        lead="Eski sitede ortaokul dil linki ilkokula gidiyordu. Burada lise, ilkokul ve ortaokul aynı sayfada."
      />

      <Section id="lise" tone="ice" eyebrow="Kanada" title={liseEnglish.title} lead={liseEnglish.lead}>
        <div className="rounded-[16px] border-l-4 border-l-red bg-panel p-6 shadow-sm">
          <ProseCards paragraphs={liseEnglish.paras} tone="paper" />
          <p className="mt-6 text-sm">
            Ayrıntı:{" "}
            <a
              href={site.portals.canadianCollege}
              target="_blank"
              rel="noreferrer"
              className="text-blue underline"
            >
              canada-english.com/tr/smrt
            </a>
          </p>
        </div>
      </Section>

      <Section
        tone="blush"
        id="ilkokul-ortaokul"
        eyebrow="İlkokul ve ortaokul"
        title="Anaşehir’de İngilizce"
      >
        <ProseCards paragraphs={primaryEnglishTr} tone="blush" />
      </Section>

      <Section tone="navy" eyebrow="English in Anaşehir" title="The same programme, in English.">
        <div className="grid gap-4 md:grid-cols-2" lang="en">
          {primaryEnglishEn.map((p) => (
            <p
              key={p.slice(0, 40)}
              className="rounded-[14px] bg-white/10 p-5 text-sm leading-relaxed text-white/80 ring-1 ring-white/10"
            >
              {p}
            </p>
          ))}
        </div>
      </Section>

      <Section tone="paper" eyebrow="Galeri" title="Dokuz kare — yer tutucu.">
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 9 }, (_, i) => (
            <MediaPlaceholder
              key={i}
              label={`yabanci-diller-anasehir-koleji-${i + 1}`}
              ratio="aspect-[4/3]"
            />
          ))}
        </div>
      </Section>
    </>
  );
}
