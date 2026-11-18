"use client";

import { useState } from "react";
import type { Block } from "@/lib/legal";
import { KADEMELER, KAMPUSLER, validateIletisim } from "@/lib/formValidation";
import { FieldError, fieldProps, readErrorResponse, useFieldErrors } from "./FormErrors";
import { ReadToAccept } from "./legal/ReadToAccept";

/**
 * "Bize Ulaşın" form on /kayit-iletisim. Posts to /api/basvuru/iletisim, which
 * forwards to the Ekiz panel (panel.ekizyazilim.com) server-side. Fields are
 * checked in the browser first so the visitor sees which one is wrong.
 */
const SUMMARY = "Talebiniz gönderilmedi. Lütfen kırmızıyla işaretli alanları düzeltin.";
const GENERIC_ERROR = "Talebiniz şu anda gönderilemedi. Lütfen biraz sonra tekrar deneyin veya bizi arayın.";

export function LeadForm({ className = "", noticeBlocks }: { className?: string; noticeBlocks: Block[] }) {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { errors, show, clear, reset } = useFieldErrors();

  const base = "w-full min-w-0 max-w-full rounded-xl border border-line bg-canvas px-3 py-2.5 text-ink";
  const fp = (name: string) => fieldProps(name, errors, base);

  if (sent) {
    return (
      <div
        role="status"
        className={`tone-paper min-w-0 rounded-[16px] bg-panel p-6 text-ink shadow-[0_16px_40px_rgba(8,16,32,0.28)] sm:p-8 ${className}`}
      >
        <p className="display text-xl font-semibold text-ink">Talebiniz alındı</p>
        <p className="mt-2 text-sm text-muted">Teşekkür ederiz. En kısa sürede sizi arayacağız.</p>
        <button type="button" onClick={() => setSent(false)} className="mt-3 text-sm font-semibold text-blue">
          Yeni talep
        </button>
      </div>
    );
  }

  return (
    <form
      noValidate
      onChange={(e) => {
        const t = e.target as unknown as { name?: string };
        if (t.name) clear(t.name);
      }}
      onSubmit={async (e) => {
        e.preventDefault();
        if (sending) return;
        const form = e.currentTarget;
        setError(null);
        const fd = new FormData(form);
        const body = {
          ...Object.fromEntries([...fd.entries()].filter(([, v]) => typeof v === "string")),
          aydinlatmaOkundu: fd.has("aydinlatmaOkundu"),
        };
        const local = validateIletisim(body);
        if (Object.keys(local).length) {
          setError(SUMMARY);
          show(form, local);
          return;
        }
        reset();
        setSending(true);
        try {
          const res = await fetch("/api/basvuru/iletisim", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
          });
          if (res.status === 201) setSent(true);
          else {
            const { fields } = await readErrorResponse(res, GENERIC_ERROR);
            setError(Object.keys(fields).length ? SUMMARY : GENERIC_ERROR);
            show(form, fields);
          }
        } catch {
          setError(GENERIC_ERROR);
        } finally {
          setSending(false);
        }
      }}
      className={`tone-paper grid min-w-0 gap-3 rounded-[16px] bg-panel p-5 text-ink shadow-[0_16px_40px_rgba(8,16,32,0.28)] sm:grid-cols-2 sm:gap-4 sm:p-6 ${className}`}
    >
      <label className="grid min-w-0 gap-1 text-sm text-ink">
        Ad soyad *
        <input required autoComplete="name" {...fp("adSoyad")} />
        <FieldError name="adSoyad" errors={errors} />
      </label>
      <label className="grid min-w-0 gap-1 text-sm text-ink">
        Telefon *
        <input required type="tel" autoComplete="tel" placeholder="0532 123 45 67" {...fp("telefon")} />
        <FieldError name="telefon" errors={errors} />
      </label>
      <label className="grid min-w-0 gap-1 text-sm text-ink">
        Kademe *
        <select required defaultValue="" {...fp("kademe")}>
          <option value="" disabled>
            Kademe seçin
          </option>
          {KADEMELER.map((k) => (
            <option key={k}>{k}</option>
          ))}
        </select>
        <FieldError name="kademe" errors={errors} />
      </label>
      <label className="grid min-w-0 gap-1 text-sm text-ink sm:col-span-2">
        Kampüs *
        <select required defaultValue="" {...fp("kampus")}>
          <option value="" disabled>
            Kampüs seçin
          </option>
          {KAMPUSLER.map((k) => (
            <option key={k}>{k}</option>
          ))}
        </select>
        <FieldError name="kampus" errors={errors} />
      </label>
      <div className="grid gap-1 sm:col-span-2">
        <ReadToAccept
          blocks={noticeBlocks}
          docTitle="İletişim ve Kayıt Görüşmesi Aydınlatma Metni"
          docHref="/kvkk/iletisim-ve-kayit-gorusmesi"
        />
        <FieldError name="aydinlatmaOkundu" errors={errors} />
      </div>
      {/* Honeypot: hidden from people, bots fill it in */}
      <input type="text" name="web_sitesi" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      {error && (
        <p role="alert" className="rounded-[12px] border-l-4 border-red bg-blush px-4 py-3 text-sm font-semibold text-ink sm:col-span-2">
          {error}
        </p>
      )}
      <button
        type="submit"
        disabled={sending}
        className="rounded-full bg-red px-5 py-2.5 text-sm font-semibold text-white hover:bg-red-hover disabled:cursor-wait disabled:opacity-60 sm:col-span-2"
      >
        {sending ? "Gönderiliyor…" : "Bizi arayın"}
      </button>
    </form>
  );
}
