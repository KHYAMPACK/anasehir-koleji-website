"use client";

import { useState } from "react";
import type { Block } from "@/lib/legal";
import { isBasvuruNotice } from "@/lib/ik";
import { FORM_ERROR_SUMMARY, IK_POSITIONS, validateIk } from "@/lib/formValidation";
import { FieldError, fieldProps, readErrorResponse, useFieldErrors } from "./FormErrors";
import { ReadToAccept } from "./legal/ReadToAccept";

/**
 * İK — iş başvuru formu. Posts multipart (with the CV) to /api/basvuru/ik,
 * which forwards to the Ekiz panel (panel.ekizyazilim.com) server-side.
 * CV limit 4 MB (Vercel request body limit ≈ 4.5 MB). Every field is checked
 * in the browser first, so the visitor sees which one is wrong.
 * KVKK: the client asked to reuse the site's existing aydınlatma metni
 * (Nov 2026); a dedicated çalışan adayı metni is on /eksikler.
 */
const GENERIC_ERROR = "Başvurunuz şu anda gönderilemedi. Lütfen biraz sonra tekrar deneyin veya bizi arayın.";

export function IsBasvuruForm({ noticeBlocks }: { noticeBlocks: Block[] }) {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { errors, show, clear, reset } = useFieldErrors();
  const field = "w-full min-w-0 rounded-xl border border-line bg-canvas px-3 py-2.5 text-ink";
  const fp = (name: string) => fieldProps(name, errors, field);

  if (submitted) {
    return (
      <div className="rounded-[16px] border-l-4 border-blue bg-blue-soft p-6" role="status">
        <p className="display font-semibold text-ink">Başvurunuz alındı.</p>
        <p className="mt-1 text-sm text-muted">Teşekkür ederiz. Başvurunuz değerlendirildikten sonra sizinle iletişime geçeceğiz.</p>
        <button type="button" onClick={() => setSubmitted(false)} className="mt-3 text-sm font-semibold text-blue">
          Yeni başvuru
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
        fd.set("aydinlatmaOkundu", fd.has("aydinlatmaOkundu") ? "true" : "false");
        const values = Object.fromEntries([...fd.entries()].filter(([, v]) => typeof v === "string"));
        const local = validateIk(values, fd.get("cv"));
        if (Object.keys(local).length) {
          setError(FORM_ERROR_SUMMARY);
          show(form, local);
          return;
        }
        reset();
        setSending(true);
        try {
          const res = await fetch("/api/basvuru/ik", { method: "POST", body: fd });
          if (res.status === 201) setSubmitted(true);
          else {
            const { message, fields } = await readErrorResponse(res, GENERIC_ERROR);
            setError(message);
            show(form, fields);
          }
        } catch {
          setError(GENERIC_ERROR);
        } finally {
          setSending(false);
        }
      }}
      className="tone-paper grid min-w-0 gap-3 rounded-[16px] bg-panel p-5 text-ink shadow-sm sm:grid-cols-2 sm:gap-4 sm:p-7"
    >
      <label className="grid min-w-0 gap-1 text-sm">
        Ad soyad *
        <input required autoComplete="name" {...fp("adSoyad")} />
        <FieldError name="adSoyad" errors={errors} />
      </label>
      <label className="grid min-w-0 gap-1 text-sm">
        Telefon *
        <input required type="tel" autoComplete="tel" placeholder="0532 123 45 67" {...fp("telefon")} />
        <FieldError name="telefon" errors={errors} />
      </label>
      <label className="grid min-w-0 gap-1 text-sm">
        E-posta *
        <input required type="email" autoComplete="email" {...fp("eposta")} />
        <FieldError name="eposta" errors={errors} />
      </label>
      <label className="grid min-w-0 gap-1 text-sm">
        Başvurulan pozisyon *
        <select required defaultValue="" {...fp("pozisyon")}>
          <option value="" disabled>
            Pozisyon seçin
          </option>
          {IK_POSITIONS.map((p) => (
            <option key={p}>{p}</option>
          ))}
        </select>
        <FieldError name="pozisyon" errors={errors} />
      </label>
      <label className="grid min-w-0 gap-1 text-sm">
        Branş / alan
        <input placeholder="Örn. Matematik, İngilizce, Muhasebe" {...fp("brans")} />
        <FieldError name="brans" errors={errors} />
      </label>
      <label className="grid min-w-0 gap-1 text-sm">
        Mesleki deneyim
        <select defaultValue="" {...fp("deneyim")}>
          <option value="">Seçin</option>
          <option>Deneyimsiz</option>
          <option>1–3 yıl</option>
          <option>4–10 yıl</option>
          <option>10 yıldan fazla</option>
        </select>
        <FieldError name="deneyim" errors={errors} />
      </label>
      <label className="grid min-w-0 gap-1 text-sm sm:col-span-2">
        Mezun olunan okul ve bölüm *
        <input required {...fp("mezuniyet")} />
        <FieldError name="mezuniyet" errors={errors} />
      </label>
      <label className="grid min-w-0 gap-1 text-sm sm:col-span-2">
        Özgeçmiş (CV) *
        <input
          required
          type="file"
          accept=".pdf,.doc,.docx"
          {...fieldProps(
            "cv",
            errors,
            `${field} file:mr-3 file:rounded-full file:border-0 file:bg-blue-soft file:px-3 file:py-1 file:text-sm file:font-semibold file:text-ink`,
          )}
        />
        {errors.cv ? <FieldError name="cv" errors={errors} /> : <span className="text-xs text-muted">PDF veya Word, en fazla 4 MB.</span>}
      </label>
      <label className="grid min-w-0 gap-1 text-sm sm:col-span-2">
        Ön yazı
        <textarea rows={4} {...fp("onYazi")} />
        <FieldError name="onYazi" errors={errors} />
      </label>
      <div className="grid gap-1 sm:col-span-2">
        <ReadToAccept blocks={noticeBlocks} docTitle={isBasvuruNotice.title} docHref={isBasvuruNotice.href} />
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
        {sending ? "Gönderiliyor…" : "Başvuruyu Gönder"}
      </button>
    </form>
  );
}
