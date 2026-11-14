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
    ask: "İsim ve kategori onayı (görsel yapay zekâyla üretildiği için). WeDo Robotics web adresi. SEBIT, K12net, Eradil ve Royal House London için daha büyük/SVG logo.",
    href: "/hakkimizda#is-birliklerimiz",
  },
  "kurumsal-is-birlikleri": {
    label: "Kurumsal iş birliği: eksik logolar",
    ask: "Etimesgut Kaymakamlığı ve ASELSAN için daha büyük logo; WhatsApp ile gelen 5 kurum logosunun (Aile, İçişleri, MSB, Jandarma, Kızılay) varsa yüksek çözünürlüklü/SVG hâli.",
    href: "/hakkimizda#is-birliklerimiz",
  },
  "agm-uygulamada": {
    label: "AGM Uygulamada: 4 fotoğraf",
    ask: "Metinler geldi; fotoğraflar bekleniyor: (1) Bilim ve Bahar Şenliği proje sunumu/öğrenci etkinliği, (2) SEBİT SDU Türkiye geneli tam puan başarısı veya akademik başarı töreni (izinli), (3) spor etkinliği veya yarışma başarısı, (4) INGED İngilizce Drama Yarışması veya okul sahne etkinliği.",
    href: "/egitim-modeli#agm-uygulamada",
  },
  "egitim-modeli-sss": {
    label: "Eğitim Modeli SSS cevapları",
    ask: "'AGM 360° nedir?', 'Future Skills hangi alanları kapsar?', 'PDR desteği nasıl sunulur?' sorularının cevapları.",
    href: "/egitim-modeli#agm-360",
  },
  "kademe-fotograflari": {
    label: "Kademe fotoğrafları",
    ask: "Anaokulu, İlkokul ve Ortaokul için her kademeye özgü gerçek fotoğraf (yatay, 16:10 veya 4:3). Şu an genel kampüs fotoğrafları kullanılıyor.",
    href: "/okullarimiz",
  },
  "kampus-fotograflari": {
    label: "Kampüs alanı fotoğrafları",
    ask: "Laboratuvar, spor salonu, yemekhane, konferans salonu, yüzme havuzu, halı saha, bahçe, görsel atölye, müzik sınıfı, Lego sınıfı, Anaşehir Radyo ve okul öncesi alanlarının güncel fotoğrafları.",
    href: "/kampus-yasami#kampus",
  },
  "saglik-bilgileri": {
    label: "Sağlık birimi bilgileri",
    ask: "Revir, sağlık personeli ve sağlık uygulamaları bilgisi.",
    href: "/kampus-yasami#guvenlik-saglik",
  },
  "akademik-takip-ekranlari": {
    label: "Akademik takip sistemi ekranları",
    ask: "Akademik takip sisteminden anonimleştirilmiş gerçek ekran görüntüleri (öğrenci adı/fotoğrafı olmadan) — Akademik Başarı sayfasının üst bölümündeki grafik paneli için.",
    href: "/akademik-basari",
  },
  "gelisim-dongusu-onay": {
    label: "Gelişim döngüsü: 2 açıklama onay bekliyor",
    ask: "Uygula ve Ölç adımları için bizim yazdığımız taslak cümlelerin onayı veya okulun kendi cümleleri. Diğer 4 adım okulun Akademik Sistem metinlerini kullanıyor.",
    href: "/akademik-basari#gelisim-dongusu",
  },
  "lgs-sonuclari": {
    label: "Yıllara göre LGS sonuçları",
    ask: "Her yıl için öğrenci sayısı, ortalama puan, derece/yüzdelikler ve yerleşilen liseler.",
    href: "/akademik-basari#sonuclarimiz",
  },
  "ogrenci-basarilari": {
    label: "Öğrenci başarıları",
    ask: "Akademik, sanatsal ve sportif ödüller — yıl, öğrenci/takım, yarışma, derece, fotoğraf.",
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
  "akademik-takvim": {
    label: "Akademik takvim",
    ask: "Bu yılın dönem başlangıç/bitiş tarihleri, tatiller ve sınav haftaları.",
    href: "/kampus-yasami#anasehirde-yasam",
  },
  "toren-gezi-fotograflari": {
    label: "Tören ve gezi fotoğrafları",
    ask: "Geçmiş yıllardan tören ve gezi fotoğrafları (hangi etkinlik, hangi yıl).",
    href: "/kampus-yasami#anasehirde-yasam",
  },
  "galeri-fotograflari": {
    label: "Galeri fotoğraf/videoları",
    ask: "Kampüs yaşamından fotoğraf ve videolar.",
    href: "/kampus-yasami#anasehirde-yasam",
  },
  "sosyal-medya": {
    label: "Sosyal medya hesapları",
    ask: "Instagram, Facebook ve YouTube dışındaki tüm hesapların adresleri (TikTok, X, LinkedIn vb.) ve mevcut adreslerin onayı.",
    href: "/#sosyal-medya",
  },
  "instagram-akisi": {
    label: "Instagram akışı",
    ask: "Instagram gönderilerinin sitede gösterilmesi için hesap erişimi (Meta onayı) veya seçilecek gönderiler.",
    href: "/#sosyal-medya",
  },
  "bursluluk-detaylari": {
    label: "Bursluluk sınavı bilgileri",
    ask: "Sınav tarihi, saati, yeri, hangi sınıflar katılabilir, burs oranları ve başvuru son tarihi.",
    href: "/bursluluk",
  },
  "ziyaretci-aydinlatma-metni": {
    label: "Web Sitesi Ziyaretçileri Aydınlatma Metni",
    ask: "KVKK sayfasındaki listede yer alan ancak metni gönderilmeyen belge.",
    href: "/kvkk",
  },
  "kvkk-pdf": {
    label: "KVKK belgelerinin PDF dosyaları",
    ask: "İmzalı/onaylı PDF'ler varsa gönderin; şu an PDF bağlantısı sayfanın yazdırılabilir hâlini açıyor.",
    href: "/kvkk",
  },
  "bursluluk-gorsel": {
    label: "Bursluluk kampanya görseli",
    ask: "Bursluluk sınavı için afiş/kampanya görseli (yatay ve dikey).",
    href: "/bursluluk",
  },
  "bursluluk-sss": {
    label: "Bursluluk sınavı SSS",
    ask: "Velilerin sık sorduğu sorular ve cevapları (sınav içeriği, sonuç açıklama, burs koşulları).",
    href: "/bursluluk#sss",
  },
} as const satisfies Record<string, NeedsDataEntry>;

export type NeedsDataId = keyof typeof needsData;
