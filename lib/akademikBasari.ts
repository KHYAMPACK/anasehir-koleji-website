export const akademikBasariPages = {
  sonuclarimiz: {
    lead: "Yıllara göre LGS ve akademik sonuçlarımız.",
  },
  ogrenciBasarilari: {
    lead: "Öğrencilerimizin akademik, sanatsal ve sportif başarıları.",
  },
  mezunlarimiz: {
    lead: "Anaşehir'den mezun olan öğrencilerimizin yolculuğu.",
  },
} as const;

/*
 * Brief 05 — "Akademik Güç ve LGS". Client's "yayına hazır" copy, verbatim.
 * Layout rule: academic confidence first (hero), then the process (cycle),
 * then the two program cards.
 */
export const akademikYaklasim = {
  eyebrow: "Anaşehir’de Akademik Yaklaşım",
  title: ["Güçlü Temeller.", "Ölçülebilir Gelişim."],
  lead: "Anaşehir Koleji’nde akademik başarıyı planlı öğretim, kazanım odaklı değerlendirme ve bireysel destek süreçleriyle ele alıyoruz. Öğrencilerimizin öğrenme yolculuğunu düzenli olarak izliyor, ihtiyaçlarına göre gelişim adımları planlıyoruz.",
  chartTitle: "Akademik Takip",
  chartCaption: "Kazanım · analiz · bireysel destek",
} as const;

/**
 * Gelişim döngüsü steps + the line shown when each step is active.
 * Planla / Analiz Et / Destekle / Yeniden Ölç reuse the client's own
 * Akademik Sistem sentences; Ölç uses the client's Ölçme ve Değerlendirme text;
 * Uygula is the client's own sentence (Nov 2026).
 */
export const gelisimDongusu = [
  { step: "Planla", text: "Her dersin kazanımlarını ve öğrenme hedeflerini belirliyoruz." },
  { step: "Uygula", text: "Planlanan öğretim süreçlerini ve öğrenme etkinliklerini, öğrencilerimizin bireysel ihtiyaçlarını gözeterek sınıf içi ve sınıf dışı uygulamalarla hayata geçiriyor; edinilen bilgi ve becerilerin günlük yaşama aktarılmasını destekliyoruz." },
  { step: "Ölç", text: "Derslerde hedeflenen bilgi ve becerilerin ne ölçüde kazanıldığını belirlemek amacıyla konu ve kazanım odaklı değerlendirmelerden yararlanıyoruz." },
  { step: "Analiz Et", text: "Öğrenme düzeyini ve gelişime açık kazanımları değerlendiriyoruz." },
  { step: "Destekle", text: "Öğrencinin ihtiyacına göre akademik destek çalışmaları planlıyoruz." },
  { step: "Yeniden Ölç", text: "Yapılan çalışmaların öğrenmeye katkısını takip ediyoruz." },
] as const;

export const akademikSistem = [
  { title: "Planlı Öğretim", text: "Her dersin kazanımlarını ve öğrenme hedeflerini belirliyoruz." },
  { title: "Ölçme ve Analiz", text: "Öğrenme düzeyini ve gelişime açık kazanımları değerlendiriyoruz." },
  { title: "Bireysel Destek", text: "Öğrencinin ihtiyacına göre akademik destek çalışmaları planlıyoruz." },
  { title: "Yeniden Değerlendirme", text: "Yapılan çalışmaların öğrenmeye katkısını takip ediyoruz." },
] as const;

export const ikiOdak = {
  heading: "İki Odak. Tek Akademik Sistem.",
  akademikGuc: {
    title: "Akademik Güç",
    text: "Kazanım takibi, ölçme ve değerlendirme, bireysel öğrenme desteği.",
    cta: "Akademik Sistemimizi İnceleyin",
    href: "#akademik-sistem",
  },
  lgs: {
    title: "LGS Yolculuğu",
    motto: "Hedefe Odaklı. Planlı. Güçlü.",
    text: "LGS hazırlık sürecinde konu ve kazanım takibini, deneme analizlerini, eksik tamamlama çalışmalarını ve bireysel rehberliği bir bütün olarak ele alıyoruz. Amacımız öğrencilerimizin sınava bilgi, strateji ve öz güvenle hazırlanmasını desteklemek.",
    cta: "LGS Yolculuğunu Keşfedin",
    href: "#lgs-sistemi",
  },
} as const;

export const akademikKapanis = "Her Öğrencinin Gelişimi Bizim İçin Değerlidir.";
