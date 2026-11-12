import { akademikSistem } from "./akademikBasari";

export const akademikTakip = {
  lead: "Ders süreçlerinde düzenli ölçme, değerlendirme ve geri bildirimle takip.",
  /** Same four items as the Akademik Başarı page (client brief 05). */
  points: akademikSistem,
} as const;

export const pdr = {
  lead: "Özgüvenli, empatik ve mutlu bireyler yetiştiren psikososyal destek.",
  points: [
    { title: "Bireysel Görüşme", text: "İhtiyaca göre öğrenciyle birebir çalışma." },
    { title: "Aile İşbirliği", text: "Veli ile düzenli bilgi paylaşımı." },
    { title: "Gelişim Takibi", text: "Akademik ve sosyal gelişim birlikte izlenir." },
  ],
} as const;
