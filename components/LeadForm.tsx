"use client";

import { useState } from "react";
import { campuses } from "@/lib/campuses";

export function LeadForm({ className = "" }: { className?: string }) {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  const field =
    "w-full min-w-0 max-w-full rounded-xl border border-line bg-canvas px-3 py-2.5 text-ink";

  if (sent) {
    return (
      <div
        className={`tone-paper min-w-0 rounded-[16px] bg-panel p-6 text-ink shadow-[0_16px_40px_rgba(8,16,32,0.28)] sm:p-8 ${className}`}
      >
        <p className="display text-xl font-semibold text-ink">Talebiniz alındı</p>
        <p className="mt-2 text-sm text-muted">
          Demo: canlıda bu form e-posta veya kayıt sistemine düşecek.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className={`tone-paper grid min-w-0 gap-3 rounded-[16px] bg-panel p-5 text-ink shadow-[0_16px_40px_rgba(8,16,32,0.28)] sm:grid-cols-2 sm:gap-4 sm:p-6 ${className}`}
    >
      <label className="grid min-w-0 gap-1 text-sm text-ink">
        Ad soyad *
        <input required name="ad" className={field} />
      </label>
      <label className="grid min-w-0 gap-1 text-sm text-ink">
        Telefon *
        <input required name="telefon" type="tel" className={field} />
      </label>
      <label className="grid min-w-0 gap-1 text-sm text-ink">
        Kademe
        <select name="kademe" className={field}>
          <option>Anaokulu</option>
          <option>İlkokul</option>
          <option>Ortaokul</option>
          <option>Anadolu Lisesi</option>
        </select>
      </label>
      <label className="grid min-w-0 gap-1 text-sm text-ink sm:col-span-2">
        Kampüs
        <select name="kampus" className={field}>
          {campuses.map((c) => (
            <option key={c.id}>{c.name}</option>
          ))}
        </select>
      </label>
      <label className="flex min-w-0 items-start gap-2 text-sm text-muted sm:col-span-2">
        <input required type="checkbox" className="mt-1 shrink-0" />
        <span>
          <a href="/kvkk" className="text-blue underline">
            KVKK Aydınlatma Metni
          </a>
          ’ni okudum, iletişim kurulmasına açık rıza veriyorum.
        </span>
      </label>
      <button
        type="submit"
        className="rounded-full bg-red px-5 py-2.5 text-sm font-semibold text-white hover:bg-red-hover sm:col-span-2"
      >
        Bizi arayın
      </button>
    </form>
  );
}
