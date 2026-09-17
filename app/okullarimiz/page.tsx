import type { Metadata } from "next";
import { BtnLine } from "@/components/Buttons";
import { PageHero, Section } from "@/components/PageHero";
import { ComingSoon, ProgramCards } from "@/components/ProgramCards";
import { etutPoints } from "@/lib/okullarimiz";
import { ortaokulDay } from "@/lib/copy";
import { programs } from "@/lib/programs";
import { sections } from "@/lib/nav";

export const metadata: Metadata = { title: "Okullarımız" };

const chapters = sections.find((s) => s.name === "Okullarımız")!.items;

export default function OkullarimizPage() {
  return (
    <>
      <PageHero
        eyebrow="Okullarımız"
        title="Anaokulundan ortaokula, aynı çizgi."
        lead="Her kademede aynı yakın ilgi, aynı güvenli ortam."
      />

      <nav className="bg-ink/95" aria-label="Okullarımız bölümleri">
        <div className="mx-auto flex max-w-[1180px] flex-wrap gap-x-5 gap-y-2 px-4 py-3 text-sm text-white/70 sm:px-6 lg:px-10">
          {chapters.map((c) => (
            <a key={c.href} href={`#${c.href.split("#")[1]}`} className="hover:text-white">
              {c.name}
            </a>
          ))}
        </div>
      </nav>

      <Section id="anaokulu" tone="ice" eyebrow="Anaokulu" title="Oyunla başlayan öğrenme." lead="Kreş ve anaokulu kademesi; güvenli, oyun temelli bir ilk adım.">
        <ComingSoon />
      </Section>

      <Section id="ilkokul" tone="paper" eyebrow="İlkokul" title={programs.firstGrade.title} lead={programs.firstGrade.lead}>
        <ProgramCards points={programs.firstGrade.points} />
        <p className="display mt-6 text-lg font-semibold">{programs.firstGrade.closing}</p>
      </Section>

      <Section id="ortaokul" tone="ice" eyebrow="Ortaokul" title={programs.fifthGrade.title} lead={programs.fifthGrade.lead}>
        <ProgramCards points={programs.fifthGrade.points} />

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_18rem]">
          <ol className="relative space-y-0 pl-2">
            <span className="absolute top-3 bottom-3 left-[1.15rem] w-0.5 bg-red" />
            {ortaokulDay.steps.map((s) => (
              <li key={s.time} className="relative flex gap-4 pb-6">
                <span className="relative z-10 mt-1 h-4 w-4 shrink-0 rounded-full bg-red ring-4 ring-canvas" />
                <div className="flex-1 rounded-[14px] bg-panel p-4 shadow-sm">
                  <p className="display text-sm font-semibold text-red">{s.time}</p>
                  <h3 className="mt-1 font-semibold">{s.title}</h3>
                  <p className="mt-1 text-sm text-muted">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="space-y-4">
            <div className="rounded-[14px] bg-blush p-5 text-sm leading-relaxed text-muted">{ortaokulDay.meals}</div>
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <BtnLine href="/egitim-modeli#yabanci-diller">Yabancı dil programı</BtnLine>
          <BtnLine href="#etut-merkezi">Etüt merkezi</BtnLine>
          <BtnLine href="/kampus-yasami">Kampüs yaşamı</BtnLine>
        </div>
      </Section>

      <Section id="etut-merkezi" tone="paper" eyebrow="Anaşehir Etüt Merkezi" title="Okul biter, gelişim devam eder." lead="Derslerin bitiminden sonra isteğe bağlı, ücretli etüt programı.">
        <ProgramCards points={etutPoints} />
      </Section>
    </>
  );
}
