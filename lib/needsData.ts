/**
 * Single registry of everything the site is still waiting on from the
 * school. Every <NeedsData id="..."> on the site points here, and the
 * hidden /eksikler page lists the whole registry as a checklist.
 *
 * Before launch: `grep -r "NeedsData" app components` must come back empty.
 */
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
    label: "Çözüm ortaklarının logoları",
    ask: "Devam edilen ve yeni çözüm ortaklarının listesi, logoları (PNG/SVG) ve web adresleri.",
    href: "/hakkimizda#is-birliklerimiz",
  },
  "kurumsal-is-birlikleri": {
    label: "Kurumsal iş birliği yapılan kurumlar",
    ask: "Sözleşmeli tüm resmi ve özel kurumların adları, logoları ve web site adresleri.",
    href: "/hakkimizda#is-birliklerimiz",
  },
  "egitim-yaklasimi-metin": {
    label: "Eğitim yaklaşımı metni",
    ask: "Okulun eğitim yaklaşımını anlatan metin.",
    href: "/egitim-modeli#egitim-yaklasimi",
  },
  "akademik-sistem-metin": {
    label: "Akademik sistem metni",
    ask: "Akademik sistemin nasıl işlediğini anlatan metin.",
    href: "/egitim-modeli#akademik-sistem",
  },
  "olcme-degerlendirme-metin": {
    label: "Ölçme-değerlendirme içeriği",
    ask: "Sınav, deneme ve değerlendirme sisteminin açıklaması.",
    href: "/egitim-modeli#olcme-degerlendirme",
  },
  "anaokulu-icerik": {
    label: "Anaokulu içeriği",
    ask: "Anaokulu programı, yaş grupları ve öne çıkan uygulamalar.",
    href: "/okullarimiz#anaokulu",
  },
  "etkinlik-dersi-saati": {
    label: "Etkinlik dersi saati",
    ask: "Etkinlik dersinin yeni gün akışındaki saat aralığı.",
    href: "/okullarimiz#ortaokul",
  },
  "servis-saatleri": {
    label: "Servis kalkış saatleri",
    ask: "Okul çıkışı ve etüt sonrası servis kalkış saatleri.",
    href: "/okullarimiz#ortaokul",
  },
  "kampus-fotograflari": {
    label: "Kampüs alanı fotoğrafları",
    ask: "Laboratuvar, spor salonu, yemekhane, konferans salonu, yüzme havuzu, halı saha, bahçe, görsel atölye, müzik sınıfı, Lego sınıfı, Anaşehir Radyo ve okul öncesi alanlarının güncel fotoğrafları.",
    href: "/kampus-yasami#kampusumuz",
  },
  "saglik-bilgileri": {
    label: "Sağlık birimi bilgileri",
    ask: "Revir, sağlık personeli ve sağlık uygulamaları bilgisi.",
    href: "/kampus-yasami#guvenlik-saglik",
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
    href: "/yasam#haberler",
  },
  etkinlikler: {
    label: "Etkinlikler",
    ask: "Yaklaşan etkinlikler — ad, tarih, yer, görsel.",
    href: "/yasam#etkinlikler",
  },
  "akademik-takvim": {
    label: "Akademik takvim",
    ask: "Bu yılın dönem başlangıç/bitiş tarihleri, tatiller ve sınav haftaları.",
    href: "/yasam#akademik-takvim",
  },
  "toren-gezi-fotograflari": {
    label: "Tören ve gezi fotoğrafları",
    ask: "Geçmiş yıllardan tören ve gezi fotoğrafları (hangi etkinlik, hangi yıl).",
    href: "/yasam#galeri",
  },
  "galeri-fotograflari": {
    label: "Galeri fotoğraf/videoları",
    ask: "Kampüs yaşamından fotoğraf ve videolar.",
    href: "/yasam#galeri",
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
  "kvkk-onam-metni": {
    label: "KVKK aydınlatma ve açık rıza metni",
    ask: "Kurumun onaylı KVKK aydınlatma metni ve bursluluk başvurusu için açık rıza (onam) metni.",
    href: "/bursluluk",
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
