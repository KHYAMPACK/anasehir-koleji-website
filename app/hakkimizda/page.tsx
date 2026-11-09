import type { Metadata } from "next";
import Image from "next/image";
import { NeedsData } from "@/components/NeedsData";
import { Section } from "@/components/PageHero";
import { PartnerLogos } from "@/components/PartnerLogos";
import { aboutGallery, aboutIntro, historyShort } from "@/lib/anasehir";
import { whenYouEnter } from "@/lib/copy";
import { institutionalPartners, solutionPartners } from "@/lib/partners";
import { founders } from "@/lib/people";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Hakkımızda" };

const tickerItems = [
  site.slogan.replace(/!$/, ""),
  "Bağlıca’nın ilk özel okulu",
  ...whenYouEnter.slice(0, 7),
  "Nitelikli Eğitim",
  "Güçlü Değerler",
  "Mutlu Bireyler",
];

function Em({ children, tone = "ink" }: { children: React.ReactNode; tone?: "ink" | "blue" | "red" }) {
  const color =
    tone === "blue" ? "text-blue" : tone === "red" ? "text-red" : "text-ink";
  return (
    <strong className={`display font-semibold ${color}`}>{children}</strong>
  );
}

export default function HakkimizdaPage() {
  return (
    <>
      <section className="tone-ice overflow-hidden">
        <div className="mx-auto grid max-w-[1180px] items-start gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-16 lg:px-10 lg:py-[4.5rem]">
          <div className="order-1 flex gap-4 sm:gap-5">
            <span className="mt-1 hidden h-[4.5rem] w-1.5 shrink-0 rounded-full bg-red sm:block" aria-hidden />
            <div className="min-w-0">
              <p className="eyebrow">{aboutIntro.eyebrow}</p>
              <h1 className="display mt-3 max-w-[16ch] text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-[2.65rem] lg:leading-[1.14]">
                Neden Anaşehir Koleji?
              </h1>

              <div className="mt-6 space-y-4 max-w-[44ch] text-[0.98rem] leading-relaxed text-muted">
                <p>
                  <Em>2005’ten beri</Em> Etimesgut <Em>Bağlıca</Em>’da;{" "}
                  <Em tone="blue">akademik başarı</Em>, <Em>spor</Em>, <Em>sanat</Em> ve{" "}
                  <Em>değerleri</Em> birlikte büyütüyoruz.
                </p>
                <p>
                  <Em tone="red">Bağlıca’nın ilk özel okulu</Em> olarak her öğrenciyi{" "}
                  <Em>tanıyan</Em>, <Em tone="blue">yakın takip</Em> eden bir eğitim
                  anlayışıyla ilerliyoruz.
                </p>
              </div>

              <div className="mt-8 grid gap-3 sm:mt-10 sm:gap-4">
                <article className="rounded-[14px] border border-line/70 bg-panel p-5 shadow-sm sm:p-6">
                  <p className="eyebrow">Vizyonumuz</p>
                  <p className="display mt-3 max-w-[28ch] text-lg font-semibold leading-snug text-ink sm:text-xl">
                    Cumhuriyete bağlı,{" "}
                    <span className="text-blue">spor-kültür ve sanatla</span> ilgili,{" "}
                    <span className="text-red">örnek</span> bireyler.
                  </p>
                </article>
                <article className="rounded-[14px] border border-line/70 bg-panel p-5 shadow-sm sm:p-6">
                  <p className="eyebrow">Misyonumuz</p>
                  <p className="display mt-3 max-w-[28ch] text-lg font-semibold leading-snug text-ink sm:text-xl">
                    <span className="text-red">Öncü</span> bir kurum: nitelikli, örnek, tercih
                    edilen.
                  </p>
                </article>
              </div>
            </div>
          </div>

          <div className="order-2 grid grid-cols-2 gap-3 sm:gap-3.5">
            <div className="relative col-span-2 aspect-[16/9] overflow-hidden rounded-[16px] bg-panel-2">
              <Image
                src={aboutGallery[0].src}
                alt={aboutGallery[0].alt}
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
                priority
              />
            </div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[16px] bg-panel-2">
              <Image
                src={aboutGallery[1].src}
                alt={aboutGallery[1].alt}
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
            <div className="grid gap-3 sm:gap-3.5">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[16px] bg-panel-2">
                <Image
                  src={aboutGallery[2].src}
                  alt={aboutGallery[2].alt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[16/10] overflow-hidden rounded-[16px] bg-panel-2">
                <Image
                  src={aboutGallery[3].src}
                  alt={aboutGallery[3].alt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="tone-navy overflow-hidden border-y border-white/10 py-3.5" aria-hidden>
        <div className="marquee-track flex w-max items-center gap-0 whitespace-nowrap">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={`${item}-${i}`} className="inline-flex items-center gap-8 px-4">
              <span className="display text-sm font-semibold tracking-[0.04em] text-white/85 sm:text-[0.95rem]">
                {item}
              </span>
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-red" />
            </span>
          ))}
        </div>
      </div>

      <Section id="hikayemiz" tone="paper" title="Hikâyemiz">
        <NeedsData id="hikayemiz-metin" />
      </Section>

      <Section id="2005ten-bugune" tone="paper" title="2005'ten Bugüne">
        <div className="relative grid gap-4 lg:grid-cols-4">
          <span className="absolute top-8 right-4 left-4 hidden h-0.5 bg-red/40 lg:block" />
          {historyShort.map((item) => (
            <article key={item.year} className="relative rounded-[14px] bg-panel p-5 pt-8 shadow-sm">
              <span className="display absolute -top-1 left-5 bg-red px-2 py-0.5 text-sm font-semibold text-white">
                {item.year}
              </span>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="kurucularimiz" tone="blush" title="Kurucularımız">
        <div className="grid gap-6 lg:grid-cols-2">
          {founders.map((p) => (
            <article key={p.name} className="overflow-hidden rounded-[14px] bg-canvas shadow-sm">
              <div className="bg-ink px-5 py-3 text-white">
                <p className="eyebrow text-white/50">{p.title}</p>
                <h3 className="display mt-1 text-2xl font-semibold">{p.name}</h3>
              </div>
              <div className="grid gap-4 p-5 sm:grid-cols-[7rem_1fr]">
                <NeedsData id="kurucu-portreleri" label="Portre" ratio="aspect-square" compact />
                <p className="text-sm leading-relaxed text-muted">{p.shortBio}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* The client flagged the old management list as wrong — every card is
          a placeholder until the current list (name, title, photo) arrives. */}
      <Section id="yonetim" tone="ice" title="Yönetim">
        <NeedsData id="yonetim-listesi" />
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 4 }, (_, i) => (
            <article key={i} className="rounded-[14px] bg-panel p-4 shadow-sm">
              <NeedsData id="yonetim-listesi" label="Portre" ratio="aspect-[3/4]" compact />
              <p className="mt-3 text-sm font-semibold text-ink">Ad Soyad</p>
              <p className="text-xs text-muted">Unvan</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="is-birliklerimiz" tone="paper" title="İş Birliklerimiz">
        <h3 className="display mb-4 text-xl font-semibold">Çözüm Ortaklarımız</h3>
        <PartnerLogos partners={solutionPartners} needs="cozum-ortaklari" />
        <h3 className="display mt-10 mb-4 text-xl font-semibold">Kurumsal İş Birliklerimiz</h3>
        <PartnerLogos partners={institutionalPartners} needs="kurumsal-is-birlikleri" />
      </Section>
    </>
  );
}
