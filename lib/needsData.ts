/**
 * Single registry of everything the site is still waiting on from the
 * school. Every <NeedsData id="..."> on the site points here, and the
 * hidden /eksikler page lists the whole registry as a checklist.
 *
 * Before launch: `grep -r "NeedsData" app components` must come back empty.
 */
/**
 * Client asked for the yellow flags to be hidden on the live site (Nov 2026).
 * false → every NeedsData / NeedsDataTag renders nothing and sections that
 * only hold missing content are hidden (pages check this flag). The
 * /eksikler checklist always shows the full registry.
 * Flip to true to review the gaps in context again.
 */
export const showDataFlags = false;

export type NeedsDataEntry = {
  /** What is missing, as the client should read it. */
  label: string;
  /** Exactly what we need them to send. */
  ask: string;
  /** Where it shows on the site. */
  href: string;
};

export const needsData = {
  "cozum-ortaklari": {
    label: "Çözüm ortakları: eksik logolar ve onay",
    ask: "İsim ve kategori onayı (görsel yapay zekâyla üretildiği için). Eradil ve Royal House London için daha büyük/SVG logo (sitelerinde yalnızca küçük sürüm var; SEBIT ve K12net güncellendi).",
    href: "/hakkimizda#is-birliklerimiz",
  },
  "agm-uygulamada": {
    label: "AGM Uygulamada: 4 fotoğraf",
    ask: "Metinler geldi; fotoğraflar bekleniyor: (1) Bilim ve Bahar Şenliği proje sunumu/öğrenci etkinliği, (2) SEBİT SDU Türkiye geneli tam puan başarısı veya akademik başarı töreni (izinli), (3) spor etkinliği veya yarışma başarısı, (4) INGED İngilizce Drama Yarışması veya okul sahne etkinliği.",
    href: "/egitim-modeli#agm-uygulamada",
  },
  "kademe-fotograflari": {
    label: "Kademe fotoğrafları",
    ask: "İlkokul ve Ortaokul için kademeye özgü gerçek fotoğraf (yatay, 16:10 veya 4:3). Anaokulu için Bağlıca Anaokulu fotoğrafı geldi ve sitede.",
    href: "/okullarimiz",
  },
  "kampus-fotograflari": {
    label: "Kampüs alanı fotoğrafları",
    ask: "Laboratuvar, spor salonu, yemekhane, konferans salonu, yüzme havuzu, halı saha, bahçe, görsel atölye, müzik sınıfı, Lego sınıfı, Anaşehir Radyo ve okul öncesi alanlarının güncel fotoğrafları.",
    href: "/kampus-yasami#kampus",
  },
  "lgs-sonuclari": {
    label: "Yıllara göre LGS sonuçları",
    ask: "Her yıl için öğrenci sayısı, ortalama puan, derece/yüzdelikler ve yerleşilen liseler.",
    href: "/akademik-basari#sonuclarimiz",
  },
  "ogrenci-basarilari": {
    label: "Öğrenci başarıları: sanatsal başarılar",
    ask: "Akademik (SDU Türkiye 1.'si) ve sportif başarı görselleri geldi ve sitede. Sanatsal başarılar ve yeni başarı görselleri geldikçe gönderin.",
    href: "/akademik-basari#ogrenci-basarilari",
  },
  mezunlar: {
    label: "Mezun bilgileri",
    ask: "Mezunların yerleştiği okullar ve (izinli) mezun hikâyeleri.",
    href: "/akademik-basari#mezunlarimiz",
  },
  haberler: {
    label: "Haberler",
    ask: "Güncel haberler — başlık, tarih, kısa metin, fotoğraf.",
    href: "/kampus-yasami#anasehirde-yasam",
  },
  etkinlikler: {
    label: "Etkinlikler",
    ask: "Yaklaşan etkinlikler — ad, tarih, yer, görsel.",
    href: "/kampus-yasami#anasehirde-yasam",
  },
  "toren-gezi-fotograflari": {
    label: "Tören ve gezi fotoğrafları",
    ask: "29 Ekim ve 10 Kasım 2026 fotoğrafları geldi ve sitede. Diğer tören ve gezi fotoğrafları (hangi etkinlik, hangi yıl) geldikçe gönderin.",
    href: "/kampus-yasami#torenlerimiz",
  },
  "galeri-fotograflari": {
    label: "Galeri fotoğraf/videoları",
    ask: "Kampüs yaşamından fotoğraf ve videolar.",
    href: "/kampus-yasami#anasehirde-yasam",
  },
  "sosyal-medya": {
    label: "Sosyal medya hesapları",
    ask: "Instagram, Facebook ve YouTube dışında hesap var mı (TikTok, X, LinkedIn vb.)? Aramada bulamadık; varsa adresleri.",
    href: "/#sosyal-medya",
  },
  "instagram-akisi": {
    label: "Instagram akışı",
    ask: "Instagram gönderilerinin sitede gösterilmesi için hesap erişimi (Meta onayı) veya seçilecek gönderiler.",
    href: "/#sosyal-medya",
  },
  "burs-oranlari": {
    label: "Bursluluk: burs oranları",
    ask: "Burs oranlarının sitede yayınlanıp yayınlanmayacağına okul yönetimi karar verecek. Yayınlanacaksa sınav başarısına göre verilecek oranlar.",
    href: "/bursluluk#basvuru",
  },
} as const satisfies Record<string, NeedsDataEntry>;

export type NeedsDataId = keyof typeof needsData;
