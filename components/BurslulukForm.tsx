"use client";

import Link from "next/link";
import { useState } from "react";
import { bursluluk, deadlineLabel } from "@/lib/campaign";
import { useCampaignPhase } from "@/lib/useCampaignPhase";

/**
 * Bursluluk sınavı başvuru formu — UI only for now. Submitting does NOT
 * send or store anything yet; the backend (where applications go) is still
 * to be decided. The KVKK consent checkbox is required.
 */
export function BurslulukForm() {
  const [submitted, setSubmitted] = useState(false);
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
        <div className="rounded-[12px] border-2 border-dashed border-[#e0b800] bg-[#fff8d6] p-5">
          <p className="display font-semibold">Başvuru sistemi henüz bağlı değil</p>
          <p className="mt-1 text-sm text-muted">
            Bu ekran önizlemedir; başvurular henüz kaydedilmiyor.
          </p>
          <button type="button" onClick={() => setSubmitted(false)} className="mt-3 text-sm font-semibold text-blue">
            Forma geri dön
          </button>
        </div>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          className="grid gap-3 sm:grid-cols-2 sm:gap-4"
        >
          <label className="grid min-w-0 gap-1 text-sm">
            Öğrenci ad soyad *
            <input required name="ogrenciAd" autoComplete="off" className={field} />
          </label>
          <label className="grid min-w-0 gap-1 text-sm">
            Şu an okuduğu sınıf *
            <input required name="sinif" className={field} />
          </label>
          <label className="grid min-w-0 gap-1 text-sm sm:col-span-2">
            Sınav seansı *
            <select required name="seans" defaultValue="" className={field}>
              <option value="" disabled>
                Seans seçin
              </option>
              {bursluluk.sessions.map((s) => (
                <option key={s.label} value={s.time}>
                  {s.label} — {s.time}
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
          <label className="flex min-w-0 items-start gap-2 text-sm text-muted sm:col-span-2">
            <input required type="checkbox" name="aydinlatmaOkundu" className="mt-1 shrink-0" />
            <span>
              <Link href="/kvkk/bursluluk-sinavi" className="text-blue underline">
                Bursluluk Sınavı Başvuru Aydınlatma Metni
              </Link>
              ’ni okudum. *
            </span>
          </label>
          <button
            type="submit"
            className="rounded-full bg-red px-5 py-2.5 text-sm font-semibold text-white hover:bg-red-hover sm:col-span-2"
          >
            Başvur
          </button>
        </form>
      )}
    </div>
  );
}
