"use client";

import { useState } from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { BtnPrimary } from "./Buttons";
import { sections } from "@/lib/nav";
import { site, telHref } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [openMobile, setOpenMobile] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-panel/90 backdrop-blur-md">
      <div className="mx-auto flex h-[var(--header-row1)] max-w-[1560px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-10 xl:grid xl:grid-cols-[1fr_auto_1fr]">
        <span aria-hidden className="hidden xl:block" />

        <div className="xl:justify-self-center">
          <Logo />
        </div>

        <div className="hidden items-center gap-3 xl:flex xl:justify-self-end">
          <a
            href={telHref(site.phoneTel)}
            className="text-sm font-semibold text-blue no-underline"
          >
            Ara {site.phoneDisplay}
          </a>
          <BtnPrimary href="/kayit-iletisim#kampus-turu">Kampüs Turu Planla</BtnPrimary>
        </div>

        <button
          type="button"
          className="rounded-full border border-line px-3 py-2 text-sm xl:hidden"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Kapat" : "Menü"}
        </button>
      </div>

      <div className="hidden border-t border-line/70 xl:block">
        <nav
          className="mx-auto flex h-[var(--header-row2)] max-w-[1560px] items-center justify-center gap-6 px-4 text-[0.86rem] text-ink sm:px-6 lg:px-10"
          aria-label="Ana"
          onMouseLeave={() => setOpenSection(null)}
        >
          {sections.map((s) => (
            <div
              key={s.name}
              className="relative flex items-center py-2"
              onMouseEnter={() => setOpenSection(s.name)}
            >
              <Link href={s.href} className="hover:text-blue" onClick={() => setOpenSection(null)}>
                {s.name}
              </Link>
              <button
                type="button"
                className="ml-1 px-1 py-1 text-[0.6rem] hover:text-blue"
                aria-expanded={openSection === s.name}
                aria-label={`${s.name} alt menüsünü aç`}
                onClick={() => setOpenSection((v) => (v === s.name ? null : s.name))}
              >
                ▾
              </button>
              {openSection === s.name && (
                <div className="absolute left-0 top-full z-50 min-w-64 rounded-xl border border-line bg-panel p-2 shadow-[0_12px_32px_rgba(20,35,58,0.1)]">
                  {s.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block rounded-lg px-3 py-2 text-sm hover:bg-blue-soft"
                      onClick={() => setOpenSection(null)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>

      {open && (
        <div className="max-h-[calc(100svh-var(--header))] overflow-y-auto border-t border-line bg-panel px-4 py-4 xl:hidden">
          <nav className="flex flex-col text-ink" aria-label="Mobil">
            {sections.map((s) => (
              <div key={s.name} className="border-b border-line/70 py-1">
                <div className="flex items-center justify-between">
                  <Link
                    href={s.href}
                    className="flex-1 py-2.5 font-semibold"
                    onClick={() => setOpen(false)}
                  >
                    {s.name}
                  </Link>
                  <button
                    type="button"
                    className="px-2 py-2.5 text-xs text-muted"
                    aria-expanded={openMobile === s.name}
                    aria-label={`${s.name} alt menüsünü aç`}
                    onClick={() => setOpenMobile((v) => (v === s.name ? null : s.name))}
                  >
                    {openMobile === s.name ? "▴" : "▾"}
                  </button>
                </div>
                {openMobile === s.name && (
                  <div className="flex flex-col gap-1 pb-3 pl-2">
                    {s.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="py-1.5 text-sm text-muted"
                        onClick={() => setOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="flex flex-col gap-3 pt-4">
              <Link href="/radyo" onClick={() => setOpen(false)}>
                Anaşehir Radyo
              </Link>
              <Link href="/sss" onClick={() => setOpen(false)}>
                Sık sorulanlar
              </Link>
              <a href={telHref(site.phoneTel)} className="font-semibold text-blue">
                Ara {site.phoneDisplay}
              </a>
              <BtnPrimary href="/kayit-iletisim#kampus-turu">Kampüs Turu Planla</BtnPrimary>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
