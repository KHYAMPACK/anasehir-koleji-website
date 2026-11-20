import Link from "next/link";
import { Logo } from "./Logo";
import { SocialLinks } from "./SocialLinks";
import { CookiePreferencesLink } from "./legal/CookieBanner";
import { site, telHref } from "@/lib/site";
import { campuses } from "@/lib/campuses";
import { sections, utilityLinks } from "@/lib/nav";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-line bg-[#10192c] text-[#e8edf6]">
      <div className="mx-auto grid max-w-[1560px] gap-10 px-4 py-14 sm:px-6 lg:grid-cols-5 lg:px-10">
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
          <p className="eyebrow text-[#8b96ad]">Bölümler</p>
          <ul className="mt-4 space-y-2 text-sm">
            {sections.map((s) => (
              <li key={s.href}>
                <Link href={s.href}>{s.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow text-[#8b96ad]">Hızlı Erişim</p>
          <ul className="mt-4 space-y-2 text-sm">
            {utilityLinks.map((item) => (
              <li key={item.name}>
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
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
            {site.portals.map((p) => (
              <li key={p.href}>
                <a href={p.href} target="_blank" rel="noreferrer">
                  {p.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <SocialLinks tone="dark" />
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1560px] flex-wrap items-center justify-between gap-3 px-4 py-4 text-xs text-[#8b96ad] sm:px-6 lg:px-10">
          <p>© {new Date().getFullYear()} Anaşehir Koleji · Etimesgut / Ankara</p>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            <Link href="/kvkk">KVKK</Link>
            <Link href="/gizlilik">Gizlilik</Link>
            <CookiePreferencesLink />
            <Link href="/sss">SSS</Link>
          </div>
        </div>
        {/* Developer credit, centred on its own line — approved by the school (Nov 2026) */}
        <div className="flex justify-center px-4 pb-5 text-xs text-[#8b96ad]">
          <a
            href="https://ekizyazilim.com"
            title="Ekiz Yazılım — web sitesi ve yazılım"
            className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 hover:text-white"
          >
            Powered by
            {/* eslint-disable-next-line @next/next/no-img-element -- tiny static SVG */}
            <img src="/brand/ekiz-mark.svg" alt="" width={18} height={18} className="h-[18px] w-[18px]" />
            <span className="font-semibold">Ekiz Yazılım</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
