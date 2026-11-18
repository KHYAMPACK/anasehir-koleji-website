"use client";

import Link from "next/link";
import { useState } from "react";
import { bursluluk, deadlineLabel } from "@/lib/campaign";
import type { Block } from "@/lib/legal";
import { ReadToAccept } from "./legal/ReadToAccept";
import { useCampaignPhase } from "@/lib/useCampaignPhase";

/**
 * Bursluluk sınavı başvuru formu. Posts to /api/basvuru/bursluluk, which
 * forwards to the Ekiz panel (panel.ekizyazilim.com) server-side. The "aydınlatma metnini okudum" box is required and can only
 * be ticked after the text has been read (ReadToAccept).
 */
const GENERIC_ERROR = "Başvurunuz şu anda gönderilemedi. Lütfen biraz sonra tekrar deneyin veya bizi arayın.";

export function BurslulukForm({ noticeBlocks }: { noticeBlocks: Block[] }) {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const phase = useCampaignPhase();

  if (phase !== "open") {
    return (
      <div className="rounded-[16px] bg-panel p-6 text-center shadow-sm sm:p-8">
        <p className="display text-xl font-semibold text-ink">{bursluluk.pageTitle} başvuruları sona erdi.</p>
        <p className="mt-2 text-sm text-muted">Son başvuru tarihi: {deadlineLabel()}</p>
      </div>
    );
  }

  const field =
    "w-full min-w-0 rounded-xl border border-line bg-canvas px-3 py-2.5 text-ink";

  return (
    <div className="tone-paper grid min-w-0 gap-4 rounded-[16px] bg-panel p-5 text-ink shadow-sm sm:p-6">
      {/* Client-supplied short notice (verbatim). It is NOT a consent request. */}
      <div className="rounded-[12px] border-l-4 border-red bg-blush p-4">
        <p className="display text-sm font-semibold text-ink">Kişisel Verileriniz Hakkında Bilgilendirme</p>
        <p className="mt-1 text-sm text-muted">
          Anaşehir Koleji Bursluluk Sınavı başvurunuz kapsamında öğrenci ve veli bilgileri, başvurunun alınması,
          sınavın düzenlenmesi ve sonuçların bildirilmesi amacıyla işlenmektedir.
        </p>
        <p className="mt-2 text-sm text-muted">
          Kişisel verilerin işlenmesine ilişkin ayrıntılı bilgiye{" "}
          <Link href="/kvkk/bursluluk-sinavi" className="font-semibold text-blue underline">
            Bursluluk Sınavı Başvuru Aydınlatma Metni
          </Link>{" "}
          üzerinden ulaşabilirsiniz.
        </p>
        <p className="mt-2 text-xs text-muted italic">Bu bilgilendirme bir açık rıza talebi değildir.</p>
      </div>

      {submitted ? (
        <div className="rounded-[12px] border-l-4 border-blue bg-blue-soft p-5" role="status">
          <p className="display font-semibold">Başvurunuz alındı.</p>
          <p className="mt-1 text-sm text-muted">Teşekkür ederiz. Başvurunuzla ilgili sizinle iletişime geçeceğiz.</p>
          <button type="button" onClick={() => setSubmitted(false)} className="mt-3 text-sm font-semibold text-blue">
            Yeni başvuru
          </button>
        </div>
      ) : (
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            if (sending) return;
            setSending(true);
            setError(null);
            const fd = new FormData(e.currentTarget);
            const body = Object.fromEntries([...fd.entries()].filter(([, v]) => typeof v === "string"));
            try {
              const res = await fetch("/api/basvuru/bursluluk", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...body, aydinlatmaOkundu: fd.has("aydinlatmaOkundu") }),
              });
              if (res.status === 201) setSubmitted(true);
              else setError(((await res.json().catch(() => null)) as { error?: string } | null)?.error ?? GENERIC_ERROR);
            } catch {
              setError(GENERIC_ERROR);
            } finally {
              setSending(false);
            }
          }}
          className="grid gap-3 sm:grid-cols-2 sm:gap-4"
        >
          <label className="grid min-w-0 gap-1 text-sm">
            Öğrenci ad soyad *
            <input required name="ogrenciAd" autoComplete="off" className={field} />
          </label>
          <label className="grid min-w-0 gap-1 text-sm">
            Şu an okuduğu sınıf *
            <select required name="sinif" defaultValue="" className={field}>
              <option value="" disabled>
                Sınıf seçin
              </option>
              {bursluluk.grades.map((g) => (
                <option key={g} value={g}>
                  {g}. sınıf
                </option>
              ))}
            </select>
          </label>
          <label className="grid min-w-0 gap-1 text-sm sm:col-span-2">
            Eğitim gördüğü okul *
            <input required name="okul" className={field} />
          </label>
          <label className="grid min-w-0 gap-1 text-sm sm:col-span-2">
            Sınav seansı *
            <select required name="seans" defaultValue="" className={field}>
              <option value="" disabled>
                Seans seçin
              </option>
              {bursluluk.sessions.map((s) => (
                <option key={s.label} value={s.time.replace(".", ":")}>
                  {s.label} — {s.time} ({s.grades})
                </option>
              ))}
            </select>
          </label>
          <label className="grid min-w-0 gap-1 text-sm">
            Veli ad soyad *
            <input required name="veliAd" autoComplete="name" className={field} />
          </label>
          <label className="grid min-w-0 gap-1 text-sm">
            Veli telefon *
            <input required name="telefon" type="tel" autoComplete="tel" className={field} />
          </label>
          <label className="grid min-w-0 gap-1 text-sm sm:col-span-2">
            E-posta
            <input name="eposta" type="email" autoComplete="email" className={field} />
          </label>
          <div className="sm:col-span-2">
            <ReadToAccept
              blocks={noticeBlocks}
              docTitle="Bursluluk Sınavı Başvuru Aydınlatma Metni"
              docHref="/kvkk/bursluluk-sinavi"
            />
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
            {sending ? "Gönderiliyor…" : "Başvur"}
          </button>
        </form>
      )}
    </div>
  );
}
