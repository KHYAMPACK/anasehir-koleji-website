import type { Metadata } from "next";
import { PageHero, Section } from "@/components/PageHero";
import { ComingSoon, ProgramCards } from "@/components/ProgramCards";
import { akademikTakip, pdr } from "@/lib/egitimModeli";
import { programs } from "@/lib/programs";
import { sections } from "@/lib/nav";

export const metadata: Metadata = { title: "Eğitim Modeli" };

const chapters = sections.find((s) => s.name === "Eğitim Modeli")!.items;

export default function EgitimModeliPage() {
  return (
    <>
      <PageHero
        eyebrow="Anaşehir Eğitim Modeli"
        title={programs.holistic.title}
        lead={programs.holistic.lead}
      />

      <nav className="bg-ink/95" aria-label="Eğitim Modeli bölümleri">
        <div className="mx-auto flex max-w-[1180px] flex-wrap gap-x-5 gap-y-2 px-4 py-3 text-sm text-white/70 sm:px-6 lg:px-10">
          {chapters.map((c) => (
            <a key={c.href} href={`#${c.href.split("#")[1]}`} className="hover:text-white">
              {c.name}
            </a>
          ))}
        </div>
      </nav>

      <Section tone="ice">
        <ProgramCards points={programs.holistic.points} />
      </Section>

      <Section id="akademik-takip" tone="paper" eyebrow="Akademik Takip" title="Süreç odaklı, şeffaf takip." lead={akademikTakip.lead}>
        <ProgramCards points={akademikTakip.points} />
      </Section>

      <Section id="yabanci-diller" tone="ice" eyebrow="Yabancı Diller" title={programs.language.title} lead={programs.language.lead}>
        <ProgramCards points={programs.language.points} />
        <p className="display mt-6 text-lg font-semibold">{programs.language.closing}</p>
      </Section>

      <Section id="future-skills" tone="blush" eyebrow="Future Skills" title={programs.futureSkills.title} lead={programs.futureSkills.lead}>
        <ProgramCards points={programs.futureSkills.points} />
        <p className="display mt-6 text-lg font-semibold">{programs.futureSkills.closing}</p>
      </Section>

      <Section id="pdr-ogrenci-gelisimi" tone="ice" eyebrow="PDR & Öğrenci Gelişimi" title="Psikososyal gelişim önceliğimiz." lead={pdr.lead}>
        <ProgramCards points={pdr.points} />
      </Section>

      <Section id="olcme-degerlendirme" tone="paper" eyebrow="Ölçme-Değerlendirme" title="Süreç odaklı ölçme ve değerlendirme.">
        <ComingSoon />
      </Section>
    </>
  );
}
