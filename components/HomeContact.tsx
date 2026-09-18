import { campuses, mapsEmbedUrl, mapsSearchUrl } from "@/lib/campuses";
import { site, telHref, waHref } from "@/lib/site";
import { WhatsAppLeadForm } from "./WhatsAppLeadForm";

const featured = campuses.find((c) => c.featured)!;

export function HomeContact() {
  return (
    <section aria-label="İletişim">
      <div className="overflow-hidden border-y border-line bg-panel">
        <iframe
          title="Anaşehir Koleji Bağlıca harita"
          src={mapsEmbedUrl(featured.mapsQuery)}
          className="h-[min(22rem,50vh)] w-full border-0 sm:h-80"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="tone-ice py-[clamp(2.6rem,5vw,4rem)]">
        <div className="mx-auto grid max-w-[1180px] gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start lg:gap-12 lg:px-10">
          <div className="space-y-8">
            <div>
              <p className="display text-sm font-semibold text-blue">Adres</p>
              <p className="mt-2 max-w-[36ch] text-ink">{featured.address}</p>
              <a
                href={mapsSearchUrl(featured.mapsQuery)}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-block text-sm font-semibold text-blue"
              >
                Google Haritalar’da aç →
              </a>
            </div>

            <div>
              <p className="display text-sm font-semibold text-red">Telefon & WhatsApp</p>
              <p className="mt-2 text-ink">
                Telefon:{" "}
                <a href={telHref(site.phoneTel)} className="font-semibold">
                  {site.phoneDisplay}
                </a>
              </p>
              <p className="mt-1 text-ink">
                Bilgi ve randevu:{" "}
                <a href={telHref(site.admissionsPhoneTel)} className="font-semibold">
                  {site.admissionsPhoneDisplay}
                </a>
              </p>
              <a
                href={waHref()}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-block text-sm font-semibold text-blue"
              >
                WhatsApp ile yazın →
              </a>
            </div>

            <div>
              <p className="display text-sm font-semibold text-ink">Saatler</p>
              <p className="mt-2 text-ink">
                Hafta içi {site.hoursWeekday}
                <span className="text-muted"> · </span>
                Cumartesi {site.hoursSaturday}
              </p>
              <p className="mt-2 text-sm text-muted">
                <a href={`mailto:${site.email}`} className="text-ink">
                  {site.email}
                </a>
                {" · "}
                <a
                  href={site.social.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="text-ink"
                >
                  @anasehirokullari
                </a>
              </p>
            </div>
          </div>

          <WhatsAppLeadForm />
        </div>
      </div>
    </section>
  );
}
