"use client";

import { useState } from "react";
import { NeedsData } from "./NeedsData";

/**
 * Bursluluk sınavı başvuru formu — UI only for now. Submitting does NOT
 * send or store anything yet; the backend (where applications go) is still
 * to be decided. The KVKK consent checkbox is required.
 */
export function BurslulukForm() {
  const [submitted, setSubmitted] = useState(false);

  const field =
    "w-full min-w-0 rounded-xl border border-line bg-canvas px-3 py-2.5 text-ink";

  return (
    <div className="tone-paper grid min-w-0 gap-4 rounded-[16px] bg-panel p-5 text-ink shadow-sm sm:p-6">
      {/* KVKK banner — required by the client on any data-collecting screen. */}
      <div className="rounded-[12px] border-l-4 border-red bg-blush p-4">
        <p className="display text-sm font-semibold text-ink">KVKK Aydınlatma ve Açık Rıza</p>
        <p className="mt-1 text-sm text-muted">
          Bu formda paylaştığınız kişisel veriler yalnızca bursluluk sınavı başvurusu kapsamında
          işlenecektir. Başvurmadan önce{" "}
          <a href="/kvkk" className="text-blue underline">
            KVKK Aydınlatma Metni
          </a>
          ’ni okuyunuz.
        </p>
        <NeedsData id="kvkk-onam-metni" className="mt-3" compact />
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
            Şu an okuduğu okul *
            <input required name="okul" className={field} />
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
            <input required type="checkbox" name="kvkkOnam" className="mt-1 shrink-0" />
            <span>
              <a href="/kvkk" className="text-blue underline">
                KVKK Aydınlatma Metni
              </a>
              ’ni okudum; kişisel verilerimin bursluluk sınavı başvurusu kapsamında işlenmesine
              açık rıza veriyorum. *
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
