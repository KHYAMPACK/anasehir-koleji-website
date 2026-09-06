import type { Metadata } from "next";
import { MediaPlaceholder } from "@/components/MediaPlaceholder";
import { PageHero, Section } from "@/components/PageHero";
import { ProseCards } from "@/components/ProseCards";
import {
  aboutHistory,
  aboutPurpose,
  ataturkMission,
  missionItems,
  parentInfo,
  values,
  vision,
  whenYouEnter,
} from "@/lib/copy";
import { administration, founders, generalManager } from "@/lib/people";

export const metadata: Metadata = { title: "Kurumsal" };

const toc = [
  ["#hakkimizda", "Hakkımızda"],
  ["#gorev", "Görevimiz"],
  ["#vizyon", "Vizyon"],
  ["#degerler", "Değerler"],
  ["#sen", "Bu okula girdiğin zaman"],
  ["#kurucular", "Kurucular"],
  ["#yonetim", "Genel müdür"],
  ["#idari", "İdari"],
  ["#veli", "Veli bilgilendirme"],
] as const;

const gorevCols = ["bg-panel text-ink", "bg-blush text-ink", "bg-ink text-white"];

export default function KurumsalPage() {
  return (
    <>
      <PageHero
        eyebrow="Kurumsal"
        title="Anaşehir’in hikâyesi, görevi ve insanları."
        lead="Tek sayfa. Ayrı müdür URL’leri yok — o sayfalar mevcut sitede boştu."
      />

      <nav className="bg-ink/95" aria-label="Kurumsal bölümler">
        <div className="mx-auto flex max-w-[1180px] flex-wrap gap-x-5 gap-y-2 px-4 py-3 text-sm text-white/70 sm:px-6 lg:px-10">
          {toc.map(([href, label]) => (
            <a key={href} href={href} className="hover:text-white">
              {label}
            </a>
          ))}
        </div>
      </nav>

      <Section id="hakkimizda" tone="ice" eyebrow="Hakkımızda" title="2005’ten Bağlıca kolejine.">
        <div className="relative grid gap-4 lg:grid-cols-4">
          <span className="absolute top-8 right-4 left-4 hidden h-0.5 bg-red/40 lg:block" />
          {aboutHistory.map((item) => (
            <article key={item.year} className="relative rounded-[14px] bg-panel p-5 pt-8 shadow-sm">
              <span className="display absolute -top-1 left-5 bg-red px-2 py-0.5 text-sm font-semibold text-white">
                {item.year}
              </span>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="paper" eyebrow="Amaç" title="Ne için varız.">
        <ProseCards paragraphs={aboutPurpose} tone="paper" />
      </Section>

      <Section id="misyon-gorsel" tone="navy">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <MediaPlaceholder
            label="Atatürk — tarihi fotoğraf"
            ratio="aspect-[5/4]"
          />
          <blockquote className="display text-2xl font-semibold leading-snug text-white sm:text-3xl">
            “{ataturkMission}”
          </blockquote>
        </div>
      </Section>

      <Section id="gorev" tone="ice" eyebrow="Görevimiz" title="Nitelikli birey yetiştirmek.">
        <ul className="grid items-stretch gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {missionItems.map((item, i) => (
            <li
              key={item}
              className={`flex min-h-[10.5rem] flex-col rounded-[14px] p-4 text-sm leading-snug ${gorevCols[i % 3]}`}
            >
              <span className="display mb-2 text-xs opacity-60">
                {String(i + 1).padStart(2, "0")}
              </span>
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section id="vizyon" tone="blush" eyebrow="Vizyon" title="Cumhuriyete bağlı, SKS’li, örnek.">
        <p className="display max-w-[28ch] text-3xl font-semibold leading-snug">{vision}</p>
      </Section>

      <Section id="degerler" tone="navy" eyebrow="Değerlerimiz" title="Yedi tutum.">
        <ul className="flex flex-wrap gap-3">
          {values.map((v) => (
            <li
              key={v}
              className="rounded-full bg-white/10 px-4 py-2 text-sm text-white ring-1 ring-white/20"
            >
              {v}
            </li>
          ))}
        </ul>
      </Section>

      <Section
        id="sen"
        tone="ice"
        eyebrow="Bu okula girdiğin zaman sen"
        title="On dört satır."
      >
        <ul className="grid gap-2 sm:grid-cols-2">
          {whenYouEnter.map((w) => (
            <li
              key={w}
              className="display rounded-[12px] border-l-4 border-red bg-ink px-5 py-6 text-xl font-semibold tracking-wide text-white sm:text-2xl"
            >
              {w}
            </li>
          ))}
        </ul>
      </Section>

      <Section id="kurucular" tone="paper" eyebrow="Kurucularımız" title="Çekinmez ailesi.">
        <div className="grid gap-6 lg:grid-cols-2">
          {founders.map((p) => (
            <article key={p.name} className="overflow-hidden rounded-[14px] bg-canvas shadow-sm">
              <div className="bg-ink px-5 py-3 text-white">
                <p className="eyebrow text-white/50">{p.title}</p>
                <h3 className="display mt-1 text-2xl font-semibold">{p.name}</h3>
              </div>
              <div className="grid gap-4 p-5 sm:grid-cols-[7rem_1fr]">
                <MediaPlaceholder label="Portre" ratio="aspect-square" />
                <p className="text-sm leading-relaxed text-muted">{p.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section id="yonetim" tone="ice" eyebrow="Yönetim" title={generalManager.name}>
        <div className="grid gap-6 lg:grid-cols-[14rem_1fr]">
          <MediaPlaceholder label="Portre" ratio="aspect-[3/4]" />
          <div>
            <p className="eyebrow">{generalManager.title}</p>
            <p className="mt-4 leading-relaxed text-muted">{generalManager.bio}</p>
          </div>
        </div>
      </Section>

      {generalManager.quote && (
        <section className="tone-navy py-16">
          <blockquote className="mx-auto max-w-[900px] px-4 display text-xl leading-relaxed text-white sm:px-6 sm:text-2xl lg:px-10">
            “{generalManager.quote}”
            <footer className="mt-6 text-sm font-normal tracking-normal text-white/50">
              Naran Dağseven
            </footer>
          </blockquote>
        </section>
      )}

      <Section id="idari" tone="blush" eyebrow="İdari" title="Aynı çatı altında.">
        <div className="grid gap-4 md:grid-cols-3">
          {administration.map((p) => (
            <article key={p.name} className="rounded-[14px] bg-panel p-5">
              <p className="eyebrow">{p.title}</p>
              <h3 className="display mt-2 text-lg font-semibold">{p.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{p.bio}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="veli" tone="ice" eyebrow="Veli bilgilendirme" title="K12, SMS, toplantı — KVKK değil.">
        <p className="mb-6 max-w-[70ch] text-muted">{parentInfo.k12Intro}</p>
        <ol className="grid gap-3 sm:grid-cols-2">
          {parentInfo.k12Items.map((item, i) => (
            <li
              key={item}
              className="flex gap-3 rounded-[14px] bg-panel p-4 text-sm"
            >
              <span className="display shrink-0 text-red">
                {String.fromCharCode(65 + i)}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ol>
        <p className="mt-4 max-w-[70ch] text-sm text-muted">{parentInfo.k12Close}</p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {[
            ["SMS", parentInfo.sms],
            ["Veli bilgilendirme toplantıları", parentInfo.meetings],
            ["Veli–öğretmen görüşme günleri", parentInfo.conference],
            ["Okul Aile Birliği", parentInfo.oab],
          ].map(([h, t], i) => (
            <div
              key={h}
              className={`rounded-[14px] p-5 ${i % 2 === 0 ? "bg-panel" : "bg-blush"}`}
            >
              <h3 className="display font-semibold">{h}</h3>
              <p className="mt-2 text-sm text-muted">{t}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-[14px] bg-blush p-6">
          <h3 className="display font-semibold">Anaşehir velisi</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{parentInfo.parentRole}</p>
        </div>
      </Section>
    </>
  );
}
