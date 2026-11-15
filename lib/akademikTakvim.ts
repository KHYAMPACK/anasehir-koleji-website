/**
 * 2026–2027 Akademik Takvim — client copy (Nov 2026), verbatim.
 * Client notes: quarter-end evaluations get a red calendar marker; the LGS camp
 * (3 Mayıs–11 Haziran) and the LGS date (13 Haziran) get their own
 * "2027 LGS Hazırlık ve Sınav Takvimi" area.
 * Left out per the no-slogans rule: "Planlı Bir Eğitim Yılı, Şeffaf Bir
 * Bilgilendirme Süreci.", "Her Sınıf Düzeyine Özel, Planlı Akademik Takip"
 * and "Gelecek Burada Başlar!".
 */

/** quarter = çeyrek sonu değerlendirme (red marker), lgs, tatil, plain. */
export type TakvimKind = "quarter" | "lgs" | "break" | "plain";

export type TakvimEvent = {
  date: string;
  label: string;
  /** Second line under the label (e.g. "Birinci Dönemin Sona Ermesi"). */
  note?: string;
  kind: TakvimKind;
};

export const takvimIntro = {
  title: "2026–2027 Akademik Takvim",
  lead: "Anaşehir Koleji olarak akademik takvimimizi Millî Eğitim Bakanlığının resmî çalışma takvimi doğrultusunda oluşturuyor; eğitim dönemlerini, tatilleri, sınavları ve ölçme-değerlendirme süreçlerini velilerimizin kolaylıkla takip edebileceği şekilde sunuyoruz.",
} as const;

export const donemler: { title: string; events: TakvimEvent[] }[] = [
  {
    title: "1. Dönem",
    events: [
      { date: "7–11 Eylül 2026", label: "Anaokulu ve 1. Sınıflar Uyum Haftası", kind: "plain" },
      { date: "14 Eylül 2026 Pazartesi", label: "Eğitim-Öğretim Yılının Başlangıcı", kind: "plain" },
      { date: "3–13 Kasım 2026", label: "Anaşehir Koleji 1. Dönem 1. Yazılı Sınav Haftası", kind: "plain" },
      { date: "13 Kasım 2026 Cuma", label: "1. Çeyrek Sonu Süreç Değerlendirme Uygulaması", kind: "quarter" },
      { date: "16–20 Kasım 2026", label: "Birinci Dönem Ara Tatili", kind: "break" },
      { date: "23 Kasım 2026 Pazartesi", label: "Eğitime Yeniden Başlangıç", kind: "plain" },
      {
        date: "22 Ocak 2027 Cuma",
        label: "2. Çeyrek Sonu Süreç Değerlendirme Uygulaması",
        note: "Birinci Dönemin Sona Ermesi",
        kind: "quarter",
      },
    ],
  },
  {
    title: "Yarıyıl Tatili",
    events: [
      {
        date: "25 Ocak–5 Şubat 2027",
        label: "Yarıyıl Tatili",
        note: "Öğrencilerimizin dinlenme, yenilenme ve ikinci döneme hazırlanma fırsatı bulacağı yarıyıl tatili.",
        kind: "break",
      },
    ],
  },
  {
    title: "2. Dönem",
    events: [
      { date: "8 Şubat 2027 Pazartesi", label: "İkinci Dönemin Başlangıcı", kind: "plain" },
      { date: "5 Mart 2027 Cuma", label: "3. Çeyrek Sonu Süreç Değerlendirme Uygulaması", kind: "quarter" },
      { date: "8–12 Mart 2027", label: "İkinci Dönem Ara Tatili", kind: "break" },
      { date: "15 Mart 2027 Pazartesi", label: "Eğitime Yeniden Başlangıç", kind: "plain" },
      { date: "3 Mayıs – 11 Haziran 2027", label: "8. Sınıflar Yoğunlaştırılmış LGS Kamp Programı", kind: "lgs" },
      { date: "13 Haziran 2027 Pazar", label: "Liselere Geçiş Sistemi (LGS) Merkezî Sınavı", kind: "lgs" },
      {
        date: "25 Haziran 2027 Cuma",
        label: "4. Çeyrek Sonu Süreç Değerlendirme Uygulaması",
        note: "2026–2027 Eğitim-Öğretim Yılının Sona Ermesi",
        kind: "quarter",
      },
    ],
  },
];

export const olcmeTakvimi = {
  title: "Ölçme ve Değerlendirme Takvimi",
  levels: [
    { level: "3 ve 4. Sınıflar", text: "Her çeyrek dönem sonunda süreç değerlendirme uygulaması." },
    { level: "5 ve 6. Sınıflar", text: "Ayda bir süreç değerlendirme uygulaması." },
    { level: "7. Sınıflar", text: "Ayda iki süreç değerlendirme uygulaması." },
    { level: "8. Sınıflar", text: "Her hafta düzenli LGS deneme sınavı." },
  ],
  quartersTitle: "Çeyrek Sonu Süreç Değerlendirme Tarihleri",
  quarters: [
    { q: "1. Çeyrek", date: "13 Kasım 2026" },
    { q: "2. Çeyrek", date: "22 Ocak 2027" },
    { q: "3. Çeyrek", date: "5 Mart 2027" },
    { q: "4. Çeyrek", date: "25 Haziran 2027" },
  ],
  quartersNotes: [
    "Çeyrek sonu değerlendirmeleri, öğrencilerimizin ilgili dönemdeki akademik gelişimlerini ve kazanım düzeylerini izlemeye yönelik olarak planlanır.",
    "Diğer süreç değerlendirme uygulamaları ile deneme sınavlarının ayrıntılı tarihleri, eğitim planlamamız doğrultusunda velilerimizle paylaşılır.",
  ],
  mebTitle: "MEB Ülke Geneli Ortak Yazılı Sınavları",
  meb: [
    { date: "11 Kasım 2026", label: "6. Sınıf Matematik — 1. Dönem 1. Yazılı" },
    { date: "5 Ocak 2027", label: "7. Sınıf Türkçe — 1. Dönem 2. Yazılı" },
    { date: "6 Nisan 2027", label: "7. Sınıf Matematik — 2. Dönem 1. Yazılı" },
    { date: "8 Haziran 2027", label: "6. Sınıf Türkçe — 2. Dönem 2. Yazılı" },
  ],
  mebNote: "Diğer okul yazılı sınavlarının tarihleri, kurumumuzun sınav programıyla ayrıca duyurulur.",
} as const;

export const lgsTakvimi = {
  title: "2027 LGS Hazırlık ve Sınav Takvimi",
  camp: {
    title: "Yoğunlaştırılmış LGS Kamp Programı",
    date: "3 Mayıs – 11 Haziran 2027",
    paragraphs: [
      "Anaşehir Koleji'nde 8. sınıf öğrencilerimizin LGS hazırlık süreçlerini desteklemek amacıyla Yoğunlaştırılmış LGS Kamp Programı uygulanacaktır.",
      "Program kapsamında öğrencilerimizin akademik kazanımlarının pekiştirilmesi, eksik öğrenmelerinin giderilmesi, yeni nesil soru çözme becerilerinin geliştirilmesi ve sınav stratejilerinin güçlendirilmesi hedeflenmektedir.",
      "Haftalık deneme sınavlarından ve kazanım analizlerinden elde edilen sonuçlar doğrultusunda tekrar ve akademik destek çalışmaları planlanacaktır.",
      "Kamp programının ayrıntılı günlük ders akışı ve uygulama esasları öğrencilerimiz ve velilerimizle ayrıca paylaşılacaktır.",
    ],
  },
  exam: {
    title: "2027 LGS Merkezî Sınavı",
    date: "13 Haziran 2027 Pazar",
    text: "8. sınıf öğrencilerimizin katılacağı Liselere Geçiş Sistemi kapsamındaki merkezî sınav, Millî Eğitim Bakanlığının ilan ettiği takvim doğrultusunda gerçekleştirilecektir.",
  },
} as const;

export const burslulukTakvim = {
  title: "Bursluluk Sınavı",
  date: "16 Ocak 2027 Cumartesi",
  rows: [
    { label: "Seanslar", value: "10.00 ve 14.00" },
    { label: "Katılım", value: "4, 5, 6 ve 7. sınıflar" },
    { label: "Son Başvuru Tarihi", value: "15 Ocak 2027" },
  ],
} as const;

export const resmiTatiller = {
  title: "Resmî Tatiller ve Önemli Günler",
  items: [
    { date: "28 Ekim 2026 Öğleden Sonra – 29 Ekim 2026", label: "Cumhuriyet Bayramı" },
    { date: "1 Ocak 2027", label: "Yılbaşı Tatili" },
    {
      date: "8–11 Mart 2027",
      label: "Ramazan Bayramı Arifesi ve Bayram Tatili",
      note: "İkinci dönem ara tatiliyle aynı döneme denk gelmektedir.",
    },
    { date: "23 Nisan 2027", label: "Ulusal Egemenlik ve Çocuk Bayramı" },
    { date: "1 Mayıs 2027", label: "Emek ve Dayanışma Günü" },
    { date: "16–19 Mayıs 2027", label: "Kurban Bayramı" },
    { date: "19 Mayıs 2027", label: "Atatürk'ü Anma, Gençlik ve Spor Bayramı" },
  ],
} as const;

export const takvimBilgi = {
  title: "Akademik Takvim Bilgilendirmesi",
  paragraphs: [
    "Anaşehir Koleji'nde eğitim-öğretim süreçleri; akademik planlama, ölçme-değerlendirme ve öğrenci gelişim takibi esas alınarak yürütülmektedir.",
    "Sınav programları, süreç değerlendirmeleri, LGS hazırlık çalışmaları, veli toplantıları ve okul etkinlikleriyle ilgili güncel bilgilendirmeler ilgili iletişim kanallarımız ve SEBİT VCloud destekli AnaşehirOnline sistemimiz üzerinden paylaşılmaktadır.",
  ],
  note: "Akademik takvimde Millî Eğitim Bakanlığının kararları veya kurumumuzun eğitim planlaması doğrultusunda değişiklik yapılması gerekebilir. Güncellemeler velilerimize ayrıca duyurulur.",
} as const;
