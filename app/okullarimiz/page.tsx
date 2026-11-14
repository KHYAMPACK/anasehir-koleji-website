import type { Metadata } from "next";
import { BtnLine, BtnPrimary } from "@/components/Buttons";
import { PageHero, Section } from "@/components/PageHero";
import { ProgramCards } from "@/components/ProgramCards";
import { etutPoints, levelCards, okullarIntro } from "@/lib/okullarimiz";
import { SchoolLevels } from "@/components/SchoolLevels";
import { ContactCta } from "@/components/ContactCta";
import { ortaokulDay } from "@/lib/copy";
import { DailySchedule } from "@/components/DailySchedule";
import { branchLessons, eveningStudy } from "@/lib/kampusYasami";
import { BranchLessons } from "@/components/BranchLessons";
import { programs } from "@/lib/programs";
import { sections } from "@/lib/nav";

export const metadata: Metadata = { title: "Okullarımız" };

const chapters = sections.find((s) => s.name === "Okullarımız")!.items;

export default function OkullarimizPage() {
  return (
    <>
      <PageHero eyebrow={okullarIntro.eyebrow} title={okullarIntro.title} lead={okullarIntro.lead} />

      <nav className="bg-ink/95" aria-label="Okullarımız bölümleri">
        <div className="mx-auto flex max-w-[1180px] flex-wrap gap-x-5 gap-y-2 px-4 py-3 text-sm text-white/70 sm:px-6 lg:px-10">
          {chapters.map((c) => (
            <a key={c.href} href={`#${c.href.split("#")[1]}`} className="hover:text-white">
              {c.name}
            </a>
          ))}
        </div>
      </nav>

      <Section tone="blush">
        <SchoolLevels />
      </Section>

      {/* Anaokulu has its own page now; this chapter is the short entry point */}
      <Section id="anaokulu" tone="ice" title="Anaokulu" lead={levelCards[0].text}>
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-muted">
          <span><strong className="text-ink">3, 4 ve 5 Yaş</strong> grupları</span>
          <span><strong className="text-ink">16–18</strong> öğrencilik sınıflar</span>
          <span><strong className="text-ink">5 yaşta</strong> İngilizce + Almanca</span>
        </div>
        <div className="mt-6">
          <BtnPrimary href="/okullarimiz/anaokulu">Anaokulu Sayfası</BtnPrimary>
        </div>
      </Section>

      <Section id="ilkokul" tone="paper" eyebrow="İlkokul" title={programs.firstGrade.title} lead={programs.firstGrade.lead}>
        <ProgramCards points={programs.firstGrade.points} />
        <p className="display mt-6 text-lg font-semibold">{programs.firstGrade.closing}</p>
      </Section>

      <Section id="ortaokul" tone="ice" eyebrow="Ortaokul" title={programs.fifthGrade.title} lead={programs.fifthGrade.lead}>
        <ProgramCards points={programs.fifthGrade.points} />

        <div className="mt-12">
          <h3 className="display text-2xl font-bold text-ink">{branchLessons.title}</h3>
          <div className="mt-4">
            <BranchLessons />
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <BtnLine href="/egitim-modeli#yabanci-diller">Yabancı dil programı</BtnLine>
          <BtnLine href="#etut-merkezi">Akşam etütleri</BtnLine>
          <BtnLine href="/kampus-yasami">Kampüs yaşamı</BtnLine>
        </div>
      </Section>

      {/* Günlük ders akışı + servis saatleri (client brief) */}
      <Section id="gunluk-akis" tone="blush" title="Günlük Ders Akışı ve Servis Saatleri">
        <DailySchedule meals={ortaokulDay.meals} />
      </Section>

      <Section id="etut-merkezi" tone="paper" title={eveningStudy.title} lead={eveningStudy.text}>
        <ProgramCards points={etutPoints} />
      </Section>

      <ContactCta image="/hero/hero-3.jpg" />
    </>
  );
}
