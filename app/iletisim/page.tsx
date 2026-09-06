import type { Metadata } from "next";
import { LeadForm } from "@/components/LeadForm";
import { Section } from "@/components/PageHero";
import { campuses, mapsEmbedUrl, mapsSearchUrl } from "@/lib/campuses";
import { site, telHref } from "@/lib/site";

export const metadata: Metadata = { title: "İletişim" };

export default function IletisimPage() {
  const featured = campuses.find((c) => c.featured)!;

  return (
    <>
      <section
        id="on-kayit"
        className="tone-navy relative overflow-hidden scroll-mt-[calc(var(--header)+0.75rem)]"
      >
        <div className="pointer-events-none absolute inset-0 opacity-25 grid-paper" />
        <div className="relative mx-auto grid max-w-[1180px] items-start gap-6 px-4 py-10 sm:px-6 sm:py-12 lg:grid-cols-[minmax(0,1fr)_minmax(22rem,32rem)] lg:gap-x-12 lg:gap-y-6 lg:px-10 lg:py-14">
          <div>
            <p className="eyebrow">İletişim · Ön kayıt</p>
            <h1 className="display mt-3 max-w-[16ch] text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.6rem] lg:leading-[1.12]">
              Formu bırakın, biz arayalım.
            </h1>
            <p className="mt-3 max-w-[42ch] text-sm text-white/70 sm:text-base">
              Demo: gönderim sunucuya gitmez. Kampüsü, kademeyi ve SKS’yi
              yerinde sorun.
            </p>
          </div>
          <LeadForm className="min-w-0 lg:col-start-2 lg:row-span-2" />
          <div>
            <dl className="grid gap-3 text-sm sm:grid-cols-2">
              <div className="rounded-[14px] bg-white/8 p-4 ring-1 ring-white/12">
                <dt className="text-white/50">Telefon</dt>
                <dd className="mt-1">
                  <a href={telHref(site.phoneTel)} className="font-semibold text-white">
                    {site.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div className="rounded-[14px] bg-white/8 p-4 ring-1 ring-white/12">
                <dt className="text-white/50">E-posta</dt>
                <dd className="mt-1">
                  <a href={`mailto:${site.email}`} className="font-semibold text-white">
                    {site.email}
                  </a>
                </dd>
              </div>
              <div className="rounded-[14px] bg-white/8 p-4 ring-1 ring-white/12 sm:col-span-2">
                <dt className="text-white/50">Saatler</dt>
                <dd className="mt-1 text-white/85">
                  Hafta içi {site.hoursWeekday} · Cumartesi {site.hoursSaturday}
                </dd>
              </div>
            </dl>
            <ul className="mt-5 list-disc space-y-1 pl-5 text-sm text-white/65">
              <li>Kampüsü yerinde görün</li>
              <li>Kademe ve SKS’yi sorun</li>
              <li>K12 ve servis işleyişini dinleyin</li>
            </ul>
          </div>
        </div>
      </section>

      <Section tone="ice" eyebrow="Kampüsler" title="Üç bina, bir 444 hattı.">
        <div className="grid gap-4 lg:grid-cols-3">
          {campuses.map((c) => (
            <article
              key={c.id}
              className={`rounded-[14px] border-l-4 bg-panel p-6 shadow-sm ${c.featured ? "border-l-red" : "border-l-blue"}`}
            >
              <h3 className="display text-lg font-semibold">{c.name}</h3>
              <p className="mt-2 text-sm text-blue">{c.levels}</p>
              <p className="mt-3 text-sm text-muted">{c.address}</p>
              <ul className="mt-3 space-y-1">
                {c.phones.map((p) => (
                  <li key={p.tel}>
                    <a href={telHref(p.tel)} className="font-semibold text-ink">
                      {p.display}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href={mapsSearchUrl(c.mapsQuery)}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block text-sm text-blue"
              >
                Yol tarifi alın
              </a>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="navy" eyebrow="Harita" title="Bağlıca Koleji, Etimesgut Bul. No:89">
        <div className="overflow-hidden rounded-[14px] ring-1 ring-white/15">
          <iframe
            title="Anaşehir Koleji Bağlıca harita"
            src={mapsEmbedUrl(featured.mapsQuery)}
            className="h-80 w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </Section>

      <Section
        tone="blush"
        eyebrow="Servis"
        title="Kurum araçları, FiloTürk, servis öğretmeni."
        lead="Koordinatör Emre Gümüşkan. Her araçta öğretmen ve telefon. Öğrenci evinden alınır, bırakılır."
      >
        <p className="display text-2xl font-semibold">{site.phoneDisplay}</p>
        <p className="mt-2 text-sm text-muted">
          Türkiye’nin her yerinden bu numarayla ulaşabilirsiniz.
        </p>
      </Section>
    </>
  );
}
