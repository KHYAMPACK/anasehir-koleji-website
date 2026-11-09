/**
 * The 25 activity branches split across Spor / Sanat / Kulüpler — a
 * first-pass categorization (see plan notes), easy to re-sort later.
 */
export const sporBranches = [
  "Voleybol",
  "Futbol",
  "Basketbol",
  "Yüzme",
  "Okçuluk",
  "Jimnastik",
  "Paten",
  "Masa Tenisi",
] as const;

export const sanatBranches = [
  "Drama",
  "Modern Danslar",
  "Halk Dansları",
  "Bale",
  "Müzik",
  "Seramik",
  "Resim",
  "Tiyatro",
  "Plastik Sanatlar",
] as const;

export const kulupBranches = [
  "Satranç",
  "Bilgisayar",
  "Mental Aritmetik",
  "Zeka Oyunları",
  "El Sanatları",
  "Bilim Atölyesi",
  "Güzel Konuşma",
  "Hızlı Okuma",
] as const;

/** Kept in sync with the three branch lists above — never hardcode this number. */
export const activityBranchCount = sporBranches.length + sanatBranches.length + kulupBranches.length;

export const activityRulesShort = [
  { title: "25 Dal", text: "Anaokulundan itibaren geniş bir seçenek." },
  { title: "10 Seç, 5'ine Yerleş", text: "İlgiye göre seçim, kontenjana göre yerleşim." },
  { title: "Ücretsiz", text: "Etkinlik dersleri okulun hediyesidir." },
] as const;

export const socialResponsibility = [
  { title: "Kulüp Çalışmaları", text: "Öğretmen rehberliğinde yürütülen topluluklar." },
  { title: "Topluma Hizmet", text: "Sorumluluk bilinci kazandıran etkinlikler." },
  { title: "Kendini Keşfetme", text: "Güven, uyum ve iş birliği becerileri." },
] as const;

export const safetyHealth = [
  { title: "Kurum Araçları", text: "Modern servis araçları, FiloTürk ile takip." },
  { title: "Servis Öğretmeni", text: "Her araçta öğretmen ve iletişim hattı." },
  { title: "Güvenli Giriş-Çıkış", text: "Öğrenci kontrollü teslim alınır ve bırakılır." },
] as const;

/**
 * Campus areas the school asked to show with photos (photos to be shot by
 * the school). Set `photo` to a /public path when it arrives — until then
 * the slot renders a "veri bekleniyor" placeholder.
 */
export const facilities: { name: string; photo?: string }[] = [
  { name: "Laboratuvar" },
  { name: "Spor Salonu" },
  { name: "Yemekhane" },
  { name: "Konferans Salonu" },
  { name: "Yüzme Havuzu" },
  { name: "Halı Saha" },
  { name: "Bahçe Alanları" },
  { name: "Görsel Sanatlar Atölyesi" },
  { name: "Müzik Sınıfı" },
  { name: "Lego Sınıfı" },
  { name: "Anaşehir Radyo" },
  { name: "Okul Öncesi" },
];
