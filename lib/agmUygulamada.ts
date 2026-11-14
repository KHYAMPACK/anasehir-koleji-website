/**
 * AGM Uygulamada (Eğitim Modeli page) — client copy (Nov 2026, /eksikler
 * item 6), verbatim. Slogan lines (section tagline, per-item mottos, closing
 * line) are intentionally left out (user rule).
 *
 * Photos: the brief names one archive photo per item but didn't include the
 * files. Set `photo: "/uygulamada/xyz.jpg"` when they arrive — the card then
 * shows the photo instead of the icon header.
 */
export type UygulamaItem = {
  title: string;
  text: string;
  icon: "flask" | "trophy" | "bike" | "drama";
  /** Card accent (AGM 360° area colours). */
  from: string;
  to: string;
  photo?: string;
};

export const agmUygulamada = {
  title: "AGM Uygulamada",
  intro:
    "Anaşehir Koleji'nde öğrenme, sınıfın sınırlarını aşar. Bilimsel çalışmalar, sanatsal etkinlikler, sportif başarılar ve akademik projelerle öğrencilerimizin bilgi ve becerilerini gerçek deneyimlere dönüştürmelerini destekliyoruz.",
  items: [
    {
      title: "Bilim ve Bahar Şenliği",
      text: "Bilim ve Bahar Şenliği çalışmalarımızla öğrencilerimizin bilimsel düşünme, araştırma ve üretkenlik becerilerini destekleyen öğrenme deneyimlerine alan açıyoruz.",
      icon: "flask",
      from: "#2453ad",
      to: "#0b2b6b",
    },
    {
      title: "Akademik Başarı ve Gelişim",
      text: "Ulusal ölçme-değerlendirme uygulamalarında elde edilen öğrenci başarıları, akademik takip ve gelişim odaklı yaklaşımımızın somut çıktıları arasında yer alıyor.",
      icon: "trophy",
      from: "#e5232d",
      to: "#a10f17",
    },
    {
      title: "Spor ve Bireysel Başarı",
      text: "Yüzme ve bisiklet başta olmak üzere farklı spor dallarındaki çalışmalar ve öğrenci başarılarıyla fiziksel gelişimi, öz disiplini ve spor kültürünü destekliyoruz.",
      icon: "bike",
      from: "#2196e6",
      to: "#0b5aab",
    },
    {
      title: "İngilizce Drama ve Sahne Sanatları",
      text: "İngilizce drama ve sahne çalışmalarıyla öğrencilerimizin yabancı dil kullanımını, yaratıcılıklarını ve kendilerini ifade etme becerilerini destekliyoruz.",
      icon: "drama",
      from: "#f7892a",
      to: "#cf540d",
    },
  ] as UygulamaItem[],
};
