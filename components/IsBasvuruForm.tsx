"use client";

import { useState } from "react";
import type { Block } from "@/lib/legal";
import { isBasvuruNotice } from "@/lib/ik";
import { ReadToAccept } from "./legal/ReadToAccept";

/**
 * İK — iş başvuru formu. Posts multipart (with the CV) to /api/basvuru/ik,
 * which forwards to the Ekiz panel (panel.ekizyazilim.com) server-side.
 * CV limit 4 MB (Vercel request body limit ≈ 4.5 MB).
 * KVKK: the client asked to reuse the site's existing aydınlatma metni
 * (Nov 2026); a dedicated çalışan adayı metni is on /eksikler.
 */
const CV_MAX_BYTES = 4 * 1024 * 1024;
const GENERIC_ERROR = "Başvurunuz şu anda gönderilemedi. Lütfen biraz sonra tekrar deneyin veya bizi arayın.";

const positions = ["Öğretmen", "İdari Personel", "Destek Personeli", "Diğer"];

export function IsBasvuruForm({ noticeBlocks }: { noticeBlocks: Block[] }) {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const field = "w-full min-w-0 rounded-xl border border-line bg-canvas px-3 py-2.5 text-ink";

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
      onSubmit={async (e) => {
        e.preventDefault();
        if (sending) return;
        setError(null);
        const fd = new FormData(e.currentTarget);
        const cv = fd.get("cv");
        if (cv instanceof File && cv.size > CV_MAX_BYTES) {
          setError("Dosya çok büyük. Özgeçmiş en fazla 4 MB olabilir.");
          return;
        }
        fd.set("aydinlatmaOkundu", fd.has("aydinlatmaOkundu") ? "true" : "false");
        setSending(true);
        try {
          const res = await fetch("/api/basvuru/ik", { method: "POST", body: fd });
          if (res.status === 201) setSubmitted(true);
          else setError(((await res.json().catch(() => null)) as { error?: string } | null)?.error ?? GENERIC_ERROR);
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
        <input required name="adSoyad" autoComplete="name" className={field} />
      </label>
      <label className="grid min-w-0 gap-1 text-sm">
        Telefon *
        <input required name="telefon" type="tel" autoComplete="tel" className={field} />
      </label>
      <label className="grid min-w-0 gap-1 text-sm">
        E-posta *
        <input required name="eposta" type="email" autoComplete="email" className={field} />
      </label>
      <label className="grid min-w-0 gap-1 text-sm">
        Başvurulan pozisyon *
        <select required name="pozisyon" defaultValue="" className={field}>
          <option value="" disabled>
            Pozisyon seçin
          </option>
          {positions.map((p) => (
            <option key={p}>{p}</option>
          ))}
        </select>
      </label>
      <label className="grid min-w-0 gap-1 text-sm">
        Branş / alan
        <input name="brans" placeholder="Örn. Matematik, İngilizce, Muhasebe" className={field} />
      </label>
      <label className="grid min-w-0 gap-1 text-sm">
        Mesleki deneyim
        <select name="deneyim" defaultValue="" className={field}>
          <option value="">Seçin</option>
          <option>Deneyimsiz</option>
          <option>1–3 yıl</option>
          <option>4–10 yıl</option>
          <option>10 yıldan fazla</option>
        </select>
      </label>
      <label className="grid min-w-0 gap-1 text-sm sm:col-span-2">
        Mezun olunan okul ve bölüm *
        <input required name="mezuniyet" className={field} />
      </label>
      <label className="grid min-w-0 gap-1 text-sm sm:col-span-2">
        Özgeçmiş (CV) *
        <input
          required
          name="cv"
          type="file"
          accept=".pdf,.doc,.docx"
          className={`${field} file:mr-3 file:rounded-full file:border-0 file:bg-blue-soft file:px-3 file:py-1 file:text-sm file:font-semibold file:text-ink`}
        />
        <span className="text-xs text-muted">PDF veya Word, en fazla 4 MB.</span>
      </label>
      <label className="grid min-w-0 gap-1 text-sm sm:col-span-2">
        Ön yazı
        <textarea name="onYazi" rows={4} className={field} />
      </label>
      <div className="sm:col-span-2">
        <ReadToAccept blocks={noticeBlocks} docTitle={isBasvuruNotice.title} docHref={isBasvuruNotice.href} />
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
