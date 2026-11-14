/**
 * Ölçme ve Değerlendirme Sistemi (Eğitim Modeli page) — client copy
 * (Nov 2026, /eksikler item 8), verbatim. Slogan lines left out per the
 * user's rule: the section tagline, each approach item's bold motto, and the
 * closing "Çünkü bizim için önemli olan…" line + tagline. Factual subheads
 * (e.g. "Ayda Bir Süreç Değerlendirme") are kept.
 */

export const olcmeIntro = {
  title: "Ölçme ve Değerlendirme Sistemi",
  lead: "Anaşehir Koleji'nde ölçme ve değerlendirme, yalnızca öğrencilerimizin ne kadar öğrendiğini belirlemek için değil, nasıl öğrendiklerini anlamak ve gelişimlerini desteklemek için yürütülen sistemli bir süreçtir.",
  paragraphs: [
    "AGM 360° Anaşehir Gelişim Modeli kapsamında akademik gelişimi; kazanım temelli değerlendirmeler, süreç değerlendirme uygulamaları, yazılı sınavlar, deneme sınavları, öğretmen gözlemleri ve bireysel geri bildirimlerle ele alıyoruz.",
    "Temel yaklaşımımız, öğrencilerimizi yalnızca sınav puanlarıyla değerlendirmek değil; güçlü yönlerini belirlemek, öğrenme eksikliklerini zamanında tespit etmek ve her öğrencimizin kendi potansiyeli doğrultusunda ilerlemesini desteklemektir.",
  ],
  highlight:
    "3. sınıftan 8. sınıfa kadar öğrencilerimizin akademik gelişimini, sınıf seviyelerine göre farklılaşan planlı ölçme ve değerlendirme uygulamalarıyla takip ediyoruz.",
} as const;

export type OlcmeApproach = {
  title: string;
  paragraphs: string[];
  /** Item 04's per-grade detail lives in the level tabs below. */
  pointsToLevels?: boolean;
};

export const olcmeApproachTitle = "Ölçme ve Değerlendirme Yaklaşımımız";

export const olcmeApproach: OlcmeApproach[] = [
  {
    title: "Hazırbulunuşluk ve Başlangıç Değerlendirmeleri",
    paragraphs: [
      "Öğrencilerimizin önceki öğrenmelerini, mevcut kazanım düzeylerini ve akademik gelişim ihtiyaçlarını anlamaya yönelik değerlendirmeler gerçekleştiriyoruz.",
      "Elde ettiğimiz bulguları, öğretim süreçlerinin öğrencilerimizin bireysel ihtiyaçlarına uygun şekilde planlanmasında kullanıyoruz.",
    ],
  },
  {
    title: "Kazanım Temelli Ölçme",
    paragraphs: [
      "Derslerde hedeflenen bilgi ve becerilerin ne ölçüde kazanıldığını belirlemek amacıyla konu ve kazanım odaklı değerlendirmelerden yararlanıyoruz.",
      "Bu sayede öğrencilerimizin güçlü olduğu alanları ve gelişime ihtiyaç duyduğu kazanımları belirleyerek öğretim süreçlerini daha etkili hâle getirmeyi amaçlıyoruz.",
    ],
  },
  {
    title: "Yazılı Sınavlar ve Süreç Değerlendirmeleri",
    paragraphs: [
      "İlkokulda öğrencilerimizin akademik ve bireysel gelişimlerini yaşlarına uygun öğretmen gözlemleri, ders içi etkinlikler, öğrenme ürünleri ve süreç değerlendirme çalışmalarıyla takip ediyoruz.",
      "Ortaokulda ise ilgili mevzuat ve öğretim programları doğrultusunda yazılı sınavlar, ders içi çalışmalar ve diğer ölçme-değerlendirme yöntemlerinden yararlanıyoruz.",
      "Öğrencilerimizin yalnızca sonuçlarını değil; derse katılımlarını, çalışma alışkanlıklarını ve öğrenme süreçlerini de dikkate alıyoruz.",
    ],
  },
  {
    title: "Planlı Süreç Değerlendirmeleri ve Deneme Sınavları",
    paragraphs: [
      "Anaşehir Koleji'nde ölçme ve değerlendirme uygulamalarımızı öğrencilerimizin yaş, sınıf düzeyi ve akademik ihtiyaçları doğrultusunda planlıyoruz.",
      "Amacımız, her değerlendirmeyi öğrencilerimizin gelişimine katkı sağlayan anlamlı bir öğrenme fırsatına dönüştürmektir.",
    ],
    pointsToLevels: true,
  },
  {
    title: "Soru ve Kazanım Analizleri",
    paragraphs: [
      "Süreç değerlendirme uygulamaları ve deneme sınavlarından elde edilen sonuçları ders ve kazanım düzeyinde değerlendiriyoruz.",
      "Öğrencilerimizin güçlü olduğu konuları ve öğrenme eksikliklerini belirlemeye odaklanıyoruz.",
      "Yanlış ve boş bırakılan soruların işaret ettiği öğrenme ihtiyaçlarını inceleyerek gerekli görülen alanlarda tekrar, pekiştirme ve ek çalışma süreçleri planlıyoruz.",
      "Böylece değerlendirme sonuçlarının yalnızca bir rapor olarak kalmasını değil, sonraki öğretim süreçlerine yön vermesini hedefliyoruz.",
    ],
  },
  {
    title: "Bireysel Akademik Gelişim Takibi",
    paragraphs: [
      "Öğrencilerimizin akademik gelişimini tek bir değerlendirme sonucuyla sınırlandırmıyoruz.",
      "Dönem boyunca gerçekleştirilen ölçme uygulamalarından elde edilen sonuçları önceki veriler ve öğretmen gözlemleriyle birlikte değerlendiriyoruz.",
      "Öğrencilerimizin güçlü yönlerini, öğrenme ihtiyaçlarını ve zaman içindeki gelişimlerini takip ederek akademik süreçlerini daha yakından izlemeyi amaçlıyoruz.",
    ],
  },
  {
    title: "Geri Bildirim ve Akademik Destek",
    paragraphs: [
      "Ölçme ve değerlendirme sonuçlarının öğrencilerimizin öğrenme süreçlerine somut katkı sağlamasını önemsiyoruz.",
      "Bu doğrultuda gelişim odaklı geri bildirimler sunuyor; ihtiyaç duyulan kazanımlarda tekrar çalışmaları, ek alıştırmalar ve uygun akademik destek uygulamaları planlıyoruz.",
      "Temel hedefimiz, öğrenme eksikliklerini zamanında belirlemek ve öğrencilerimizin akademik gelişimlerini sürekli desteklemektir.",
    ],
  },
  {
    title: "Dijital Ölçme ve Değerlendirme",
    paragraphs: [
      "SEBİT VCloud destekli AnaşehirOnline sistemimiz, öğrencilerimizin akademik gelişimlerinin dijital ortamda takip edilmesini destekler.",
      "Sınav sonuçları, akademik değerlendirmeler, ödevler ve öğrenme süreçlerine ilişkin bilgiler, ilgili kademenin kullanım kapsamına göre öğrencilerimiz ve velilerimiz tarafından takip edilebilir.",
      "Böylece öğretmen, öğrenci ve veli arasındaki akademik iletişimin daha düzenli, şeffaf ve veri odaklı yürütülmesini amaçlıyoruz.",
    ],
  },
];

export type OlcmeLevel = {
  stage: string;
  grades: string;
  /** Client's factual subhead for the level. */
  subtitle: string;
  /** Short frequency badge, derived from the subtitle (null = no fixed rhythm). */
  rhythm: string | null;
  paragraphs: string[];
};

export const olcmeLevelsTitle = "Her Kademede Gelişime Uygun Değerlendirme";

export const olcmeLevels: OlcmeLevel[] = [
  {
    stage: "Anaokulu",
    grades: "4–6 Yaş",
    subtitle: "Gözlem, Deneyim ve Gelişim Odaklı Değerlendirme",
    rhythm: null,
    paragraphs: [
      "Anaokulumuzda değerlendirme sürecinin merkezinde çocuğun gelişimi yer alır.",
      "Öğretmen gözlemleri, oyun temelli etkinlikler, gelişim çalışmaları ve öğrenci ürünleri aracılığıyla çocuklarımızın bilişsel, dil, sosyal-duygusal, motor ve öz bakım becerilerini takip etmeyi önemsiyoruz.",
      "Amacımız çocuklarımızı birbirleriyle karşılaştırmak değil, her çocuğun bireysel gelişimini anlamak ve desteklemektir.",
    ],
  },
  {
    stage: "İlkokul",
    grades: "1–2. Sınıflar",
    subtitle: "Temel Beceriler ve Gelişim Odaklı İzleme",
    rhythm: null,
    paragraphs: [
      "1 ve 2. sınıflarda okuma-yazma, temel matematik becerileri, öğrenmeye uyum ve çalışma alışkanlıkları ön plandadır.",
      "Öğrencilerimizi öğretmen gözlemleri, sınıf içi etkinlikler, öğrenme ürünleri ve yaşa uygun değerlendirmelerle takip ediyoruz.",
    ],
  },
  {
    stage: "İlkokul",
    grades: "3–4. Sınıflar",
    subtitle: "Her Çeyrek Dönem Sonunda Süreç Değerlendirme",
    rhythm: "Her çeyrek dönem",
    paragraphs: [
      "3 ve 4. sınıflarda her çeyrek dönem sonunda gerçekleştirdiğimiz süreç değerlendirme uygulamalarıyla öğrencilerimizin akademik gelişimlerini takip ediyoruz.",
      "Okuduğunu anlama, matematiksel düşünme, problem çözme ve temel ders kazanımlarını değerlendirmeye önem veriyoruz.",
      "Elde edilen sonuçları öğrencilerin öğrenme ihtiyaçlarını belirlemek ve öğretim süreçlerini geliştirmek amacıyla kullanıyoruz.",
    ],
  },
  {
    stage: "Ortaokul",
    grades: "5–6. Sınıflar",
    subtitle: "Ayda Bir Süreç Değerlendirme",
    rhythm: "Ayda 1",
    paragraphs: [
      "5 ve 6. sınıflarda her ay uyguladığımız süreç değerlendirme çalışmalarıyla öğrencilerimizin akademik kazanımlarını düzenli olarak takip ediyoruz.",
      "Değerlendirme sonuçlarından hareketle öğrencilerimizin güçlü yönlerini ve gelişime ihtiyaç duydukları konuları belirliyor, akademik destek çalışmalarını planlıyoruz.",
    ],
  },
  {
    stage: "Ortaokul",
    grades: "7. Sınıflar",
    subtitle: "Ayda İki Süreç Değerlendirme",
    rhythm: "Ayda 2",
    paragraphs: [
      "7. sınıfta ayda iki kez gerçekleştirdiğimiz süreç değerlendirme uygulamalarıyla akademik gelişimi daha sık aralıklarla takip ediyoruz.",
      "Bu süreçte kazanım hâkimiyeti, problem çözme, yorumlama ve akademik çalışma becerilerinin geliştirilmesini önemsiyoruz.",
      "Öğrencilerimizin 8. sınıfa güçlü bir akademik temel ve düzenli çalışma alışkanlığıyla geçmelerini hedefliyoruz.",
    ],
  },
  {
    stage: "Ortaokul",
    grades: "8. Sınıflar",
    subtitle: "Her Hafta Deneme Sınavı ve LGS Hazırlığı",
    rhythm: "Her hafta deneme",
    paragraphs: [
      "8. sınıfta her hafta gerçekleştirdiğimiz deneme sınavlarıyla öğrencilerimizin LGS hazırlık süreçlerini sistemli biçimde takip ediyoruz.",
      "Sınav sonuçlarını kazanım analizleri ve öğretmen değerlendirmeleriyle bütünleştirerek öğrencilerimizin akademik ilerlemelerini izliyoruz.",
      "Zaman yönetimi, yeni nesil soru çözme, sınav stratejileri ve eksik kazanımların tamamlanması üzerinde durarak öğrencilerimizin sınava hazırlık süreçlerini destekliyoruz.",
    ],
  },
];

export const olcmeStepsTitle = "Ölçme ve Değerlendirmeden Akademik Gelişime";

export const olcmeSteps = [
  { title: "Ölçüyoruz", text: "Öğrencilerimizin sınıf seviyelerine uygun değerlendirmelerle bilgi, beceri ve kazanım düzeylerini belirliyoruz." },
  { title: "Analiz Ediyoruz", text: "Güçlü yönlerini ve gelişime ihtiyaç duydukları kazanımları değerlendiriyoruz." },
  { title: "Planlıyoruz", text: "Elde edilen sonuçları öğretim ve akademik destek çalışmalarına yansıtıyoruz." },
  { title: "Destekliyoruz", text: "Öğrencilerimizin öğrenme ihtiyaçlarına uygun tekrar, pekiştirme ve destek fırsatları sunuyoruz." },
  { title: "Takip Ediyoruz", text: "Sonraki değerlendirmelerle öğrencilerimizin akademik gelişimlerini izliyoruz." },
] as const;

export const olcmeVeli = {
  title: "Velilerimiz İçin Şeffaf Gelişim Takibi",
  paragraphs: [
    "Çocuğunuzun akademik yolculuğunda yalnızca değerlendirme sonuçlarını değil, gelişim sürecini de bilmenizi önemsiyoruz.",
    "SEBİT VCloud destekli AnaşehirOnline sistemimiz, öğretmen geri bildirimleri ve veli görüşmeleri aracılığıyla öğrencilerimizin eğitim süreçlerine ilişkin bilgilere ulaşmanızı destekliyoruz.",
  ],
} as const;
