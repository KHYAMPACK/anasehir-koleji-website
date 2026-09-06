"use client";

import { site } from "@/lib/site";

export function RadioPlayer() {
  return (
    <div className="rounded-[14px] border border-line bg-panel p-6">
      <p className="display text-lg font-semibold">Anaşehir Radyo</p>
      <p className="mt-1 text-sm text-muted">Öğrenci DJ · Shoutcast</p>
      <audio
        className="mt-4 w-full"
        controls
        preload="none"
        src={site.radio.stream}
      >
        Tarayıcınız ses oynatıcısını desteklemiyor.
      </audio>
      <p className="mt-3 text-xs text-muted">
        Yayın HTTP adresinden gelir. HTTPS sitede tarayıcı karışık içeriği
        engellerse uygulamadan dinleyin.
      </p>
    </div>
  );
}
