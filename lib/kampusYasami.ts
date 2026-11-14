/**
 * Uygulamalı Branş Dersleri — client revision (Nov 2026, /eksikler item 11):
 * the old "Etkinlik Dersi / Kulüp Dersi" model, its activity hour, the
 * "25 branş arasından tercih" and "kulüp yerleştirmesi" wording are gone.
 * These four are part of the weekly timetable; no separate hour is shown.
 * Copy is the client's, verbatim.
 */
export const branchLessons = {
  title: "Uygulamalı Branş Dersleri",
  text: "Öğrencilerimizin sosyal, sanatsal ve fiziksel gelişimlerini destekleyen branşlarımızı ayrı bir kulüp uygulaması olarak değil, haftalık ders programına entegre edilmiş dersler olarak sunuyoruz.",
  items: ["Dans", "Spor", "Görsel Sanatlar", "Drama"],
} as const;

/** Akşam Etütleri / Ödev Saati — client copy, verbatim. */
export const eveningStudy = {
  title: "Akşam Etütleri / Ödev Saati",
  time: "16.50–18.20",
  text: "Okul sonrası isteğe bağlı ve ücretli olarak sunulan etüt programımızda öğrencilerimizin günlük ödevlerini tamamlamaları, ders tekrarları yapmaları ve eksik kazanımlarını pekiştirmeleri desteklenmektedir.",
} as const;

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

/**
 * Kampüs ve Okul Yaşamı — client designer handoff 06, "yayına hazır" copy.
 * Verbatim; don't rewrite.
 */
export const kampusCopy = {
  eyebrow: "ANAŞEHİR’DE YAŞAM",
  title: ["Öğrenmenin Ötesinde.", "Yaşamın İçinde."],
  intro:
    "Anaşehir Koleji’nde okul yaşamını akademik derslerle sınırlamıyoruz. Spor, sanat, kulüp çalışmaları ve sosyal etkinliklerle öğrencilerimizin ilgi alanlarını keşfetmesini, kendilerini ifade etmesini ve birlikte üretmesini destekliyoruz.",
  spor: {
    label: "Spor ve Hareket",
    title: "Hareketle Güçlenen Bireyler.",
    text: "Yaşa uygun spor ve hareket etkinlikleriyle öğrencilerimizin fiziksel gelişimini, takım ruhunu ve sağlıklı yaşam alışkanlıklarını destekliyoruz.",
  },
  sanat: {
    label: "Sanat ve Yaratıcılık",
    title: "Hayal Et. İfade Et. Üret.",
    text: "Görsel sanatlar, müzik ve yaratıcı çalışmalarla öğrencilerimizin estetik bakış açısını ve kendilerini ifade etme becerilerini geliştiriyoruz.",
  },
  kulupler: {
    label: "Kulüpler ve Sosyal Yaşam",
    title: "İlgi Alanlarını Keşfet.",
    text: "Kulüp ve sosyal etkinliklerde öğrencilerimizin meraklarını takip etmelerine, sorumluluk almalarına ve iş birliği içinde gelişmelerine alan açıyoruz.",
  },
  kampus: {
    label: "Kampüs Deneyimi",
    title: "Öğrenmeye Alan Açan Bir Kampüs.",
    text: "Sınıflardan ortak yaşam alanlarına uzanan okul ortamımızda öğrencilerimizin kendilerini güvende hissederek öğrenmesini ve sosyalleşmesini önemsiyoruz.",
  },
  gunluk: {
    label: "Günlük Yaşam",
    title: "Dengeli Bir Okul Günü.",
    text: "Akademik çalışmalar, hareket, dinlenme ve sosyal etkinlikleri bir arada düşünerek öğrencilerimize yaşlarına uygun, planlı bir okul deneyimi sunuyoruz.",
  },
  buttons: { kampus: "Kampüsümüzü Keşfedin", yasam: "Okul Yaşamını İnceleyin" },
  closing: "Okul, Yalnızca Öğrenilen Değil; Yaşanılan Bir Yerdir.",
  /** Short card captions from the handoff's page-1 layout. */
  cards: [
    { title: "Spor", caption: "Hareket ve takım ruhu", href: "#spor", color: "var(--red)" },
    { title: "Sanat", caption: "İfade ve yaratıcılık", href: "#sanat", color: "var(--blue)" },
    { title: "Kulüpler", caption: "Merak ve keşif", href: "#kulupler", color: "#c9a24a" },
    { title: "Günlük Akış", caption: "Dengeli okul günü", href: "#gunluk-akis", color: "var(--ink)" },
  ],
} as const;
