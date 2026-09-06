"use client";

import { useState } from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { BtnPrimary } from "./Buttons";
import { site, telHref } from "@/lib/site";

const kademeler = [
  { href: "/ortaokul", label: "Ortaokul", live: true },
  { href: "#", label: "Anaokulu", live: false },
  { href: "#", label: "İlkokul", live: false },
  { href: "#", label: "Anadolu Lisesi", live: false },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [kademeOpen, setKademeOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-panel/90 backdrop-blur-md">
      <div className="mx-auto flex h-[var(--header)] max-w-[1560px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-10">
        <Logo />

        <nav className="hidden items-center gap-6 text-[0.9rem] text-ink lg:flex" aria-label="Ana">
          <Link href="/" className="hover:text-blue">
            Anasayfa
          </Link>
          <Link href="/kurumsal" className="hover:text-blue">
            Kurumsal
          </Link>
          <div className="relative">
            <button
              type="button"
              className="inline-flex items-center gap-1 hover:text-blue"
              aria-expanded={kademeOpen}
              onClick={() => setKademeOpen((v) => !v)}
            >
              Kademeler
              <span aria-hidden className="text-[0.65rem]">
                ▾
              </span>
            </button>
            {kademeOpen && (
              <div className="absolute left-0 top-full z-50 mt-2 min-w-52 rounded-xl border border-line bg-panel p-2 shadow-[0_12px_32px_rgba(20,35,58,0.1)]">
                {kademeler.map((item) =>
                  item.live ? (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="block rounded-lg px-3 py-2 hover:bg-blue-soft"
                      onClick={() => setKademeOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span
                      key={item.label}
                      className="flex items-center justify-between rounded-lg px-3 py-2 text-muted"
                    >
                      {item.label}
                      <span className="text-[0.65rem] uppercase tracking-wider">Yakında</span>
                    </span>
                  ),
                )}
              </div>
            )}
          </div>
          <Link href="/yabanci-dil" className="hover:text-blue">
            Yabancı Dil
          </Link>
          <Link href="/sks" className="hover:text-blue">
            SKS
          </Link>
          <Link href="/radyo" className="hover:text-blue">
            Radyo
          </Link>
          <Link href="/iletisim" className="hover:text-blue">
            İletişim
          </Link>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={telHref(site.phoneTel)}
            className="text-sm font-semibold text-blue no-underline"
          >
            Ara {site.phoneDisplay}
          </a>
          <BtnPrimary href="/iletisim#on-kayit">Ön Kayıt</BtnPrimary>
        </div>

        <button
          type="button"
          className="rounded-full border border-line px-3 py-2 text-sm lg:hidden"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Kapat" : "Menü"}
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-panel px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-3 text-ink" aria-label="Mobil">
            <Link href="/" onClick={() => setOpen(false)}>
              Anasayfa
            </Link>
            <Link href="/kurumsal" onClick={() => setOpen(false)}>
              Kurumsal
            </Link>
            <Link href="/ortaokul" onClick={() => setOpen(false)}>
              Ortaokul
            </Link>
            <p className="text-xs uppercase tracking-wider text-muted">Yakında — Anaokulu, İlkokul, Lise</p>
            <Link href="/yabanci-dil" onClick={() => setOpen(false)}>
              Yabancı Dil
            </Link>
            <Link href="/sks" onClick={() => setOpen(false)}>
              SKS
            </Link>
            <Link href="/radyo" onClick={() => setOpen(false)}>
              Radyo
            </Link>
            <Link href="/iletisim" onClick={() => setOpen(false)}>
              İletişim
            </Link>
            <a href={telHref(site.phoneTel)} className="font-semibold text-blue">
              Ara {site.phoneDisplay}
            </a>
            <BtnPrimary href="/iletisim#on-kayit">Ön Kayıt</BtnPrimary>
          </nav>
        </div>
      )}
    </header>
  );
}
