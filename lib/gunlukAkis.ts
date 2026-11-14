/**
 * Günlük Ders Akışı ve Servis Saatleri — client brief (Nov 2026), verbatim.
 * Shown as one section on /okullarimiz (#gunluk-akis): two headed blocks
 * (lesson flow, bus departures) + the client's explanation text.
 */
export const gunlukAkis = {
  title: "Günlük Ders Akışı ve Servis Saatleri",
  flowTitle: "Günlük Ders Akışı",
  flow: [
    { time: "08.30–16.40", label: "Eğitim ve Öğretim" },
    { time: "16.50–18.20", label: "Akşam Etütleri / Ödev Saati" },
  ],
  busTitle: "Servis Kalkış Saatleri",
  buses: [
    { time: "16.45", label: "Normal Okul Çıkışı" },
    { time: "18.25", label: "Akşam Etüdü Sonrası" },
  ],
  paragraphs: [
    "Anaşehir Koleji'nde öğrencilerimizin okul çıkışları ve servis hareketleri günlük eğitim programımızla uyumlu olarak planlanmaktadır.",
    "Normal eğitim programı sonunda servislerimiz saat 16.45'te, akşam etüt programına katılan öğrencilerimiz için ise saat 18.25'te hareket etmektedir.",
  ],
  note: "Akşam Etütleri / Ödev Saati uygulamamız isteğe bağlı ve ücretlidir.",
} as const;
