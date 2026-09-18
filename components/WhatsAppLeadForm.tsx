"use client";

import { useState } from "react";
import { waHref } from "@/lib/site";

const field =
  "w-full min-w-0 rounded-xl border border-line bg-canvas px-3 py-2.5 text-ink placeholder:text-muted/70";

export function WhatsAppLeadForm({ className = "" }: { className?: string }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const lines = [
      "Merhaba Anaşehir Koleji,",
      "",
      `Ad Soyad: ${name.trim()}`,
      `Telefon: ${phone.trim()}`,
      "",
      message.trim(),
    ];
    window.open(waHref(undefined, lines.join("\n")), "_blank", "noopener,noreferrer");
  }

  return (
    <form
      onSubmit={onSubmit}
      className={`rounded-[16px] bg-panel p-6 shadow-[0_12px_36px_rgba(20,35,58,0.1)] sm:p-7 ${className}`}
    >
      <h3 className="display text-xl font-semibold text-ink">Mesaj Bırakın</h3>
      <p className="mt-1 text-sm text-muted">
        Gönderince WhatsApp açılır; mesajınız hazır gelir.
      </p>

      <div className="mt-5 grid gap-3">
        <label className="grid gap-1 text-sm font-medium text-ink">
          Adınız
          <input
            required
            name="ad"
            autoComplete="name"
            placeholder="Ad Soyad"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={field}
          />
        </label>
        <label className="grid gap-1 text-sm font-medium text-ink">
          Telefon
          <input
            required
            name="telefon"
            type="tel"
            autoComplete="tel"
            placeholder="05xx xxx xx xx"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={field}
          />
        </label>
        <label className="grid gap-1 text-sm font-medium text-ink">
          Mesajınız
          <textarea
            required
            name="mesaj"
            rows={4}
            placeholder="Kademe, kampüs turu veya sorunuzu yazın…"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={`${field} resize-y`}
          />
        </label>
      </div>

      <button
        type="submit"
        className="mt-5 w-full rounded-full bg-red px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-hover"
      >
        WhatsApp ile gönder
      </button>
      <p className="mt-3 text-xs leading-relaxed text-muted">
        Göndererek{" "}
        <a href="/kvkk" className="text-blue underline">
          KVKK Aydınlatma Metni
        </a>
        ’ni okuduğunuzu ve WhatsApp’a yönlendirileceğinizi kabul edersiniz.
      </p>
    </form>
  );
}
