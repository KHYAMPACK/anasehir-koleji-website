import Link from "next/link";
import { Logo } from "./Logo";
import { site, telHref } from "@/lib/site";
import { campuses } from "@/lib/campuses";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-line bg-[#10192c] text-[#e8edf6]">
      <div className="mx-auto grid max-w-[1560px] gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-10">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm text-[#a9b4cc]">{site.slogan}</p>
          <p className="mt-3 text-sm text-[#a9b4cc]">
            Hafta içi {site.hoursWeekday}
            <br />
            Cumartesi {site.hoursSaturday}
          </p>
        </div>

        <div>
          <p className="eyebrow text-[#8b96ad]">Bağlantılar</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/kurumsal">Kurumsal</Link>
            </li>
            <li>
              <Link href="/ortaokul">Ortaokul</Link>
            </li>
            <li>
              <Link href="/yabanci-dil">Yabancı Dil</Link>
            </li>
            <li>
              <Link href="/sks">SKS</Link>
            </li>
            <li>
              <Link href="/radyo">Anaşehir Radyo</Link>
            </li>
            <li>
              <Link href="/sss">Sık sorulanlar</Link>
            </li>
            <li>
              <Link href="/iletisim">İletişim</Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="eyebrow text-[#8b96ad]">Kampüsler</p>
          <ul className="mt-4 space-y-3 text-sm text-[#c5cde0]">
            {campuses.map((c) => (
              <li key={c.id}>
                <span className="block text-white">{c.name}</span>
                {c.phones[0].display}
              </li>
            ))}
          </ul>
          <a
            href={telHref(site.phoneTel)}
            className="mt-4 inline-block text-xl font-semibold text-white"
          >
            {site.phoneDisplay}
          </a>
          <p className="mt-1 text-sm text-[#a9b4cc]">{site.email}</p>
        </div>

        <div>
          <p className="eyebrow text-[#8b96ad]">Portallar</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href={site.portals.k12} target="_blank" rel="noreferrer">
                K12NET Giriş
              </a>
            </li>
            <li>
              <a href={site.portals.vezne} target="_blank" rel="noreferrer">
                Online Vezne
              </a>
            </li>
            <li>
              <a href={site.portals.param} target="_blank" rel="noreferrer">
                PARAM
              </a>
            </li>
            <li>
              <a href={site.portals.canadianCollege} target="_blank" rel="noreferrer">
                Canadian College / Smrt
              </a>
            </li>
            <li>
              <a href={site.portals.ankaraEgitim} target="_blank" rel="noreferrer">
                Ankara Eğitim Platformu
              </a>
            </li>
          </ul>
          <div className="mt-6 flex gap-4 text-sm">
            <a href={site.social.instagram} target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href={site.social.facebook} target="_blank" rel="noreferrer">
              Facebook
            </a>
            <a href={site.social.youtube} target="_blank" rel="noreferrer">
              YouTube
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1560px] flex-wrap items-center justify-between gap-3 px-4 py-4 text-xs text-[#8b96ad] sm:px-6 lg:px-10">
          <p>© {new Date().getFullYear()} Anaşehir Okulları · Etimesgut / Ankara</p>
          <div className="flex gap-4">
            <Link href="/kvkk">KVKK</Link>
            <Link href="/gizlilik">Gizlilik</Link>
            <Link href="/sss">SSS</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
