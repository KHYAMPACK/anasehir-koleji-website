import type { Metadata } from "next";
import { BtnLine, BtnPrimary } from "@/components/Buttons";
import { VideoStage } from "@/components/MediaPlaceholder";
import { Section } from "@/components/PageHero";
import { ProseCards } from "@/components/ProseCards";
import {
  etutCopy,
  ortaokulDay,
  ortaokulLanguage,
  sksRules,
  socialActivities,
} from "@/lib/copy";

export const metadata: Metadata = { title: "Ortaokul" };

export default function OrtaokulPage() {
  return (
    <>
      <section className="relative isolate min-h-[min(92svh,52rem)] overflow-hidden text-white">
        <VideoStage play="upper" label="Ortaokul tanıtım filmi — yer tutucu" />
        <div className="relative z-10 mx-auto flex min-h-[min(92svh,52rem)] max-w-[1180px] flex-col justify-end px-4 pb-16 pt-16 sm:px-6 sm:pb-20 lg:px-10">
          <p className="eyebrow text-white/55">Ortaokul · Bağlıca</p>
          <h1 className="display mt-3 max-w-[18ch] text-3xl font-semibold tracking-tight sm:text-5xl lg:text-[3.1rem] lg:leading-[1.1]">
            Akademik gün, sonra SKS, sonra isteğe bağlı etüt.
          </h1>
          <p className="mt-4 max-w-[54ch] text-sm text-white/75 sm:text-base">
            {ortaokulDay.lead}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <BtnPrimary href="/iletisim#on-kayit">Ön Kayıt</BtnPrimary>
            <a
              href="#bir-gun"
              className="inline-flex items-center rounded-full border border-white/35 px-5 py-2.5 text-sm font-semibold text-white"
            >
              Bir günü görün
            </a>
          </div>
        </div>
      </section>

      <Section id="bir-gun" tone="ice" eyebrow="Bir gün" title="Saatler sırayla.">
        <div className="grid gap-8 lg:grid-cols-[1fr_18rem]">
          <ol className="relative space-y-0 pl-2">
            <span className="absolute top-3 bottom-3 left-[1.15rem] w-0.5 bg-red" />
            {ortaokulDay.steps.map((s) => (
              <li key={s.time} className="relative flex gap-4 pb-6">
                <span className="relative z-10 mt-1 h-4 w-4 shrink-0 rounded-full bg-red ring-4 ring-canvas" />
                <div className="flex-1 rounded-[14px] bg-panel p-4">
                  <p className="display text-sm font-semibold text-red">{s.time}</p>
                  <h3 className="mt-1 font-semibold">{s.title}</h3>
                  <p className="mt-1 text-sm text-muted">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="space-y-4">
            <div className="rounded-[14px] bg-blush p-5 text-sm leading-relaxed text-muted">
              {ortaokulDay.meals}
            </div>
            <div className="rounded-[14px] bg-ink p-5 text-sm leading-relaxed text-white/80">
              {ortaokulDay.saturday}
            </div>
          </div>
        </div>
      </Section>

      <section className="relative isolate min-h-[28rem] overflow-hidden text-white lg:min-h-[36rem]">
        <VideoStage label="Öğretmenlerimiz — yer tutucu" />
        <div className="relative z-10 mx-auto grid min-h-[28rem] max-w-[1180px] items-end px-4 py-16 sm:px-6 lg:min-h-[36rem] lg:grid-cols-2 lg:px-10 lg:py-20">
          <div />
          <div className="rounded-[16px] bg-ink/75 p-6 backdrop-blur-sm ring-1 ring-white/15 lg:p-8">
            <p className="eyebrow text-white/55">Kadro</p>
            <h2 className="display mt-2 text-2xl font-semibold sm:text-3xl">
              Öğretmenlerimiz
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-white/75">
              Film geldiğinde bu bant gerçek çekimin üzerine oturacak.
            </p>
          </div>
        </div>
      </section>

      <Section
        tone="paper"
        eyebrow="Yabancı dil"
        title="Önce sevdirmek."
        lead={ortaokulDay.languages}
      >
        <ProseCards paragraphs={ortaokulLanguage} tone="paper" />
        <p className="mt-4 text-sm text-ink">
          İngilizce birinci dil; ikinci dil Almanca, Fransızca veya Rusça.
        </p>
        <div className="mt-6">
          <BtnLine href="/yabanci-dil">Yabancı dil programı</BtnLine>
        </div>
      </Section>

      <Section tone="blush" eyebrow="Etüt" title="16:30–18:15, ücretli.">
        <ProseCards paragraphs={etutCopy} tone="blush" />
      </Section>

      <Section tone="ice" eyebrow="Sosyal etkinlikler" title="Kulüp ve toplum hizmeti.">
        <ProseCards paragraphs={socialActivities} tone="ice" />
      </Section>

      <Section tone="navy" eyebrow="SKS" title="10 seçim, 5 yerleşme.">
        <ProseCards paragraphs={sksRules} tone="navy" />
        <p className="mt-6 text-sm text-white/80">{ortaokulDay.socialGoal}</p>
        <div className="mt-6">
          <BtnLine href="/sks">25 dalın listesi</BtnLine>
        </div>
      </Section>
    </>
  );
}
