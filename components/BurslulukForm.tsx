"use client";

import Link from "next/link";
import { useState } from "react";
import { bursluluk, deadlineLabel } from "@/lib/campaign";
import type { Block } from "@/lib/legal";
import { FORM_ERROR_SUMMARY, validateBursluluk } from "@/lib/formValidation";
import { FieldError, fieldProps, readErrorResponse, useFieldErrors } from "./FormErrors";
import { ReadToAccept } from "./legal/ReadToAccept";
import { useCampaignPhase } from "@/lib/useCampaignPhase";

/**
 * Bursluluk sınavı başvuru formu. Posts to /api/basvuru/bursluluk, which
 * forwards to the Ekiz panel (panel.ekizyazilim.com) server-side. Every field
 * is checked in the browser first, so the visitor sees which one is wrong. The
 * "aydınlatma metnini okudum" box is required and can only be ticked after the
 * text has been read (ReadToAccept).
 */
const GENERIC_ERROR = "Başvurunuz şu anda gönderilemedi. Lütfen biraz sonra tekrar deneyin veya bizi arayın.";

export function BurslulukForm({ noticeBlocks }: { noticeBlocks: Block[] }) {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { errors, show, clear, reset } = useFieldErrors();
  const phase = useCampaignPhase();

  if (phase !== "open") {
    return (
      <div className="rounded-[16px] bg-panel p-6 text-center shadow-sm sm:p-8">
        <p className="display text-xl font-semibold text-ink">{bursluluk.pageTitle} başvuruları sona erdi.</p>
        <p className="mt-2 text-sm text-muted">Son başvuru tarihi: {deadlineLabel()}</p>
      </div>
    );
  }

  const field = "w-full min-w-0 rounded-xl border border-line bg-canvas px-3 py-2.5 text-ink";
  const fp = (name: string) => fieldProps(name, errors, field);

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
            const local = validateBursluluk(body);
            if (Object.keys(local).length) {
              setError(FORM_ERROR_SUMMARY);
              show(form, local);
              return;
            }
            reset();
            setSending(true);
            try {
              const res = await fetch("/api/basvuru/bursluluk", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
              });
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
          className="grid gap-3 sm:grid-cols-2 sm:gap-4"
        >
          <label className="grid min-w-0 gap-1 text-sm">
            Öğrenci ad soyad *
            <input required autoComplete="off" {...fp("ogrenciAd")} />
            <FieldError name="ogrenciAd" errors={errors} />
          </label>
          <label className="grid min-w-0 gap-1 text-sm">
            Şu an okuduğu sınıf *
            <select required defaultValue="" {...fp("sinif")}>
              <option value="" disabled>
                Sınıf seçin
              </option>
              {bursluluk.grades.map((g) => (
                <option key={g} value={g}>
                  {g}. sınıf
                </option>
              ))}
            </select>
            <FieldError name="sinif" errors={errors} />
          </label>
          <label className="grid min-w-0 gap-1 text-sm sm:col-span-2">
            Eğitim gördüğü okul *
            <input required {...fp("okul")} />
            <FieldError name="okul" errors={errors} />
          </label>
          <label className="grid min-w-0 gap-1 text-sm sm:col-span-2">
            Sınav seansı *
            <select required defaultValue="" {...fp("seans")}>
              <option value="" disabled>
                Seans seçin
              </option>
              {bursluluk.sessions.map((s) => (
                <option key={s.label} value={s.time.replace(".", ":")}>
                  {s.label} — {s.time}
                </option>
              ))}
            </select>
            <FieldError name="seans" errors={errors} />
          </label>
          <label className="grid min-w-0 gap-1 text-sm">
            Veli ad soyad *
            <input required autoComplete="name" {...fp("veliAd")} />
            <FieldError name="veliAd" errors={errors} />
          </label>
          <label className="grid min-w-0 gap-1 text-sm">
            Veli telefon *
            <input required type="tel" autoComplete="tel" placeholder="0532 123 45 67" {...fp("telefon")} />
            <FieldError name="telefon" errors={errors} />
          </label>
          <label className="grid min-w-0 gap-1 text-sm sm:col-span-2">
            E-posta
            <input type="email" autoComplete="email" {...fp("eposta")} />
            <FieldError name="eposta" errors={errors} />
          </label>
          <div className="grid gap-1 sm:col-span-2">
            <ReadToAccept
              blocks={noticeBlocks}
              docTitle="Bursluluk Sınavı Başvuru Aydınlatma Metni"
              docHref="/kvkk/bursluluk-sinavi"
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
            {sending ? "Gönderiliyor…" : "Başvur"}
          </button>
        </form>
      )}
    </div>
  );
}
