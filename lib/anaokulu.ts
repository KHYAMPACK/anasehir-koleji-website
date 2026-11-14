/**
 * Anaokulu page (/okullarimiz/anaokulu) — client copy (Nov 2026), verbatim:
 * the full Anaokulu text + the separate "branş eğitimi" brief.
 *
 * Left out per the user's no-slogans rule: the hero tagline, every section
 * motto ("Her Büyük Yolculuk…", "İlk Adımlar, Büyük Keşifler." etc.), the
 * branch-card mottos, "İki Yabancı Dille Geleceğe Güçlü Bir Başlangıç.",
 * "Her Yaşta Keşif. Her Alanda Gelişim.", the "Çünkü…" line and the closing
 * "Gelecek Burada Başlar!". Factual subheads are kept.
 */

export type Para = { text: string; strong?: boolean };

export const anaokuluIntro: Para[] = [
  { text: "Anaşehir Koleji Anaokulunda çocuklarımızın ilk eğitim deneyimlerini güven, sevgi, merak ve keşif üzerine inşa ediyoruz." },
  { text: "Her çocuğun kendine özgü bir öğrenme hızı, farklı ilgi alanları ve keşfedilmeyi bekleyen potansiyeli olduğuna inanıyoruz." },
  { text: "AGM 360° Anaşehir Gelişim Modeli kapsamında oyun temelli öğrenmeyi; yabancı dil eğitimi, LEGO Education, dans, drama, spor ve hareket, görsel sanatlar, müzik ve ritim, bilimsel keşif ve sosyal-duygusal gelişimle bütünleştiriyoruz." },
  { text: "3, 4 ve 5 yaş gruplarımıza yönelik eğitim programımızı çocuklarımızın yaş ve gelişim özelliklerine göre farklılaştırıyoruz." },
  { text: "Hedefimiz yalnızca çocuklarımızı ilkokula hazırlamak değil; öğrenmeyi seven, kendini ifade edebilen, yaratıcı düşünebilen, özgüveni gelişen ve farklı alanlarda yeteneklerini keşfeden bireyler olarak gelişimlerini desteklemektir." },
];

/** From the "Yakından Tanıyın" block. */
export const anaokuluFacts = [
  { label: "Yaş Grupları", value: "3, 4 ve 5 Yaş" },
  { label: "Sınıf Mevcutları", value: "16–18 Öğrenci" },
  { label: "Yabancı Dil", value: "3 ve 4 Yaş İngilizce | 5 Yaş İngilizce ve Almanca" },
  { label: "Branş Dersleri", value: "LEGO Education, Dans, Drama, Spor ve Hareket, Görsel Sanatlar, Müzik ve Ritim" },
] as const;

/* ── Branş eğitimi (separate brief) ─────────────────────────── */

export type BransIcon = "languages" | "blocks" | "dance" | "drama" | "sport" | "palette" | "music";

export const bransSection = {
  title: "3 Yaştan İtibaren Zenginleştirilmiş Branş Eğitimi",
  lead: "Anaşehir Koleji Anaokulunda 3, 4 ve 5 yaş gruplarımızın tamamında uyguladığımız branş dersleriyle çocuklarımızın bilişsel, sosyal, fiziksel ve sanatsal gelişimlerini bütüncül bir yaklaşımla destekliyoruz.",
  cards: [
    { icon: "languages", title: "İngilizce Eğitimi", text: "3 yaşta başlayan İngilizce eğitimimizle dil farkındalığını, dinleme ve temel iletişim becerilerini oyun temelli etkinliklerle destekliyoruz." },
    { icon: "blocks", title: "LEGO Education", text: "Tasarım, yaratıcılık, problem çözme, iş birliği ve ince motor becerilerini deneyimleyerek geliştiriyoruz." },
    { icon: "dance", title: "Dans Dersi", text: "Ritim, koordinasyon, beden farkındalığı ve yaratıcı hareket becerilerini destekliyoruz." },
    { icon: "drama", title: "Drama Dersi", text: "Yaratıcı düşünme, özgüven, iletişim ve sosyal etkileşim becerilerini geliştiriyoruz." },
    { icon: "sport", title: "Spor ve Hareket Dersi", text: "Denge, koordinasyon, temel motor becerileri ve hareket yoluyla öğrenmeyi destekliyoruz." },
    { icon: "palette", title: "Görsel Sanatlar Dersi", text: "Renk, şekil, doku ve farklı malzemelerle çocuklarımızın yaratıcılığını ve sanatsal ifade becerilerini geliştiriyoruz." },
    { icon: "music", title: "Müzik ve Ritim Dersi", text: "İşitsel dikkat, ritim duygusu, dinleme ve müzikal ifade becerilerini destekliyoruz." },
  ] as { icon: BransIcon; title: string; text: string }[],
  languages: {
    title: "5 Yaşta İngilizce + Almanca",
    paragraphs: [
      "Anaşehir Koleji'nde İngilizce eğitimi 3 yaşta başlar, 4 yaşta devam eder. 5 yaş grubumuzda ise İngilizce programımıza Almanca dersleri eklenir.",
      "Çocuklarımızın iki farklı yabancı dille erken yaşta tanışmalarını, oyun ve iletişim temelli öğrenme deneyimleriyle destekliyoruz.",
    ],
  },
  closing:
    "Anaşehir Koleji'nde öğrenme, 3 yaştan itibaren farklı disiplinlerle zenginleşir. Her çocuğun ilgi alanlarını keşfetmesini ve potansiyelini geliştirmesini destekliyoruz.",
};

/* ── Yaş grupları ───────────────────────────────────────────── */

export const yasGruplariTitle = "Yaş Gruplarımız";

export const yasGruplari: { age: string; subtitle: string; paragraphs: Para[] }[] = [
  {
    age: "3 Yaş",
    subtitle: "Güvenli Uyum ve İlk Keşifler",
    paragraphs: [
      { text: "3 yaş grubumuzda çocuklarımızın okul yaşamına güvenle uyum sağlamalarını, öğretmenleriyle güçlü bağlar kurmalarını ve ilk arkadaşlık deneyimlerini kazanmalarını önemsiyoruz." },
      { text: "Oyun temelli öğrenme, duyusal etkinlikler, hikâyeler ve keşif çalışmalarıyla çocuklarımızın bilişsel, dil, motor ve sosyal-duygusal gelişimlerini destekliyoruz." },
      { text: "İngilizce eğitimi 3 yaş itibarıyla başlar. Şarkılar, oyunlar, görseller ve günlük iletişim etkinlikleriyle çocuklarımızın yabancı dille doğal bir ortamda tanışmalarını sağlıyoruz.", strong: true },
      { text: "LEGO Education derslerinde yaşlarına uygun yapı oluşturma, renk ve şekil tanıma, eşleştirme ve el-göz koordinasyonu becerilerini destekliyoruz." },
      { text: "Dans ve drama derslerinde ritim, taklit, hayal gücü ve kendini ifade etme becerilerine alan açıyoruz." },
      { text: "Spor ve Hareket Dersi ile temel motor becerileri, denge, koordinasyon ve beden farkındalığını geliştiriyoruz." },
      { text: "Görsel Sanatlar Dersi ile renkleri, dokuları ve farklı malzemeleri keşfetmelerini; çizim, boyama ve yaratıcı çalışmalarla kendilerini ifade etmelerini destekliyoruz." },
      { text: "Müzik ve Ritim Dersi ile sesleri tanıma, ritim tutma, dinleme, hareket ve müzikal farkındalık becerilerini geliştiriyoruz." },
      { text: "Bu dönemde temel önceliğimiz, çocuklarımızın okulu sevmesi, kendilerini güvende hissetmesi ve keşfetmeye istek duymasıdır." },
    ],
  },
  {
    age: "4 Yaş",
    subtitle: "Merak, Keşif ve Beceri Gelişimi",
    paragraphs: [
      { text: "4 yaş grubumuzda çocuklarımızın bağımsızlıklarını, sosyal ilişkilerini, yaratıcılıklarını ve problem çözme becerilerini geliştirmeye odaklanıyoruz." },
      { text: "Oyun temelli öğrenme, erken matematik, dil gelişimi ve fen-doğa etkinlikleriyle öğrenme deneyimlerini zenginleştiriyoruz." },
      { text: "İngilizce derslerimiz 4 yaş grubunda da devam eder. Oyunlar, hikâyeler, drama ve iletişim etkinlikleriyle çocuklarımızın İngilizceyi doğal öğrenme deneyimlerinin bir parçası olarak kullanmalarını destekliyoruz.", strong: true },
      { text: "LEGO Education derslerinde tasarlama, birleştirme, sınıflandırma, örüntü oluşturma ve birlikte problem çözme becerilerini geliştiriyoruz." },
      { text: "Dans ve drama derslerinde yaratıcı hareket, rol alma, beden dili, özgüven ve sosyal iletişim becerilerine odaklanıyoruz." },
      { text: "Spor ve Hareket Dersi kapsamında denge, koordinasyon, çeviklik, temel hareket becerileri ve grup oyunlarıyla fiziksel gelişimi destekliyoruz." },
      { text: "Görsel Sanatlar Dersi ile farklı sanat malzemelerini kullanma, renk ve biçim ilişkilerini keşfetme, özgün tasarımlar oluşturma ve yaratıcı ifade becerilerini geliştiriyoruz." },
      { text: "Müzik ve Ritim Dersi ile ritim tekrarları, müzikli oyunlar, sesleri ayırt etme, tempo çalışmaları ve birlikte müzik yapma deneyimlerine yer veriyoruz." },
      { text: "Amacımız, çocuklarımızın meraklarını öğrenmeye, düşüncelerini üretime ve deneyimlerini yeni becerilere dönüştürmelerine fırsat sunmaktır." },
    ],
  },
  {
    age: "5 Yaş",
    subtitle: "Çok Dilli Eğitim ve İlkokula Hazırlık",
    paragraphs: [
      { text: "5 yaş grubumuzda çocuklarımızın bilişsel, dil, sosyal-duygusal ve motor gelişimlerini desteklerken ilkokula hazırlık süreçlerini daha kapsamlı biçimde ele alıyoruz." },
      { text: "5 yaş eğitim programımızda İngilizce ve Almanca dersleri birlikte yer almaktadır.", strong: true },
      { text: "İngilizce çalışmalarımızı yaşa uygun iletişim etkinlikleriyle sürdürürken Almanca dersleriyle çocuklarımızın ikinci bir yabancı dille tanışmalarını sağlıyoruz." },
      { text: "LEGO Education derslerinde tasarım, planlama, problem çözme, yaratıcılık ve iş birliği becerilerini destekliyoruz." },
      { text: "Dans ve drama derslerinde bedensel ifade, yaratıcı düşünme, rol alma, iletişim ve grup çalışmasına daha fazla alan açıyoruz." },
      { text: "Spor ve Hareket Dersi ile koordinasyon, denge, hareket kontrolü, temel sportif beceriler ve takım çalışmasını destekleyen etkinlikler gerçekleştiriyoruz." },
      { text: "Görsel Sanatlar Dersi kapsamında farklı tekniklerle tasarım ve üretim çalışmalarına yer veriyor; çocuklarımızın hayal güçlerini, görsel algılarını ve ince motor becerilerini geliştiriyoruz." },
      { text: "Müzik ve Ritim Dersi ile ritim örüntüleri, tempo, dinleme, ses farkındalığı ve birlikte müzik yapma deneyimlerini destekliyoruz." },
      { text: "İlkokula hazırlık çalışmalarında ise ses farkındalığı, erken okuryazarlık, matematiksel düşünme, dikkat, yönerge takibi ve sorumluluk alma becerilerine odaklanıyoruz." },
      { text: "İlkokula hazırlığı yalnızca akademik kazanımlar olarak değil, çocuğun özgüvenini ve öğrenme isteğini güçlendiren bütüncül bir gelişim süreci olarak görüyoruz." },
    ],
  },
];

/* ── Sınıf mevcudu ──────────────────────────────────────────── */

export const sinifMevcudu = {
  title: "16–18 Kişilik Sınıflar",
  paragraphs: [
    "Anaokulumuzda 3, 4 ve 5 yaş gruplarımızın sınıf mevcutlarını 16–18 öğrenci aralığında planlıyoruz.",
    "Sınıf yapımızı oluştururken öğretmen-öğrenci etkileşimini, çocuklarımızın bireysel ihtiyaçlarını ve aktif öğrenme fırsatlarını önemsiyoruz.",
    "Hedefimiz, her çocuğun kendini rahatça ifade edebildiği, öğretmeni tarafından yakından tanındığı ve gelişiminin dikkatle takip edildiği bir öğrenme ortamı sunmaktır.",
  ],
} as const;

/* ── Eğitim programımız (12) ────────────────────────────────── */

export type ProgramIcon =
  | "puzzle" | "languages" | "blocks" | "dance" | "drama" | "sport"
  | "palette" | "music" | "flask" | "heart" | "sparkles" | "sprout";

export const egitimProgramiTitle = "Eğitim Programımız";

export const egitimProgrami: { icon: ProgramIcon; title: string; subtitle?: string; paragraphs: string[] }[] = [
  { icon: "puzzle", title: "Oyun Temelli Öğrenme", paragraphs: ["Serbest oyun, yapılandırılmış oyun ve grup etkinlikleriyle çocuklarımızın merak, keşif, iletişim, düşünme ve problem çözme becerilerini destekliyoruz."] },
  {
    icon: "languages",
    title: "Erken Yaşta Yabancı Dil Eğitimi",
    subtitle: "3 Yaşta İngilizce, 5 Yaşta İngilizce ve Almanca",
    paragraphs: [
      "Anaşehir Koleji'nde İngilizce eğitimi 3 yaş itibarıyla başlar ve 4 yaş grubunda devam eder.",
      "5 yaş grubumuzda ise İngilizceye Almanca dersleri eklenir.",
      "Yabancı dil eğitimini oyun, müzik, drama, hikâye ve günlük yaşam etkinlikleriyle bütünleştirerek çocuklarımızın yeni dillere karşı merak ve özgüven geliştirmelerini destekliyoruz.",
    ],
  },
  {
    icon: "blocks",
    title: "LEGO Education",
    paragraphs: [
      "3, 4 ve 5 yaş gruplarımızda uyguladığımız LEGO Education dersleriyle çocuklarımızın yaratıcılıklarını, ince motor becerilerini, problem çözme yetkinliklerini ve iş birliği alışkanlıklarını destekliyoruz.",
      "Her yaş grubunda etkinliklerin zorluk düzeyini gelişim özelliklerine göre farklılaştırarak çocuklarımızın deneyerek, tasarlayarak ve üreterek öğrenmelerine fırsat sunuyoruz.",
    ],
  },
  {
    icon: "dance",
    title: "Dans Dersi",
    paragraphs: [
      "3, 4 ve 5 yaş gruplarımızda yer alan dans dersleriyle çocuklarımızın ritim duygularını, koordinasyonlarını, beden farkındalıklarını ve yaratıcı hareket becerilerini destekliyoruz.",
      "Müzik ve hareketi bir araya getiren etkinliklerle özgüvenlerini, grup uyumlarını ve kendilerini beden diliyle ifade etme becerilerini geliştirmeyi amaçlıyoruz.",
    ],
  },
  {
    icon: "drama",
    title: "Drama Dersi",
    paragraphs: [
      "Drama derslerimizle çocuklarımızın hayal güçlerini, sosyal iletişimlerini, duygularını ifade etme becerilerini ve özgüvenlerini destekliyoruz.",
      "Yaş gruplarına uygun rol oyunları, hikâye canlandırmaları ve yaratıcı drama etkinlikleriyle öğrenmeyi deneyime dönüştürüyoruz.",
    ],
  },
  {
    icon: "sport",
    title: "Spor ve Hareket Dersi",
    paragraphs: [
      "3, 4 ve 5 yaş gruplarımızda uyguladığımız Spor ve Hareket Dersi ile çocuklarımızın temel motor becerilerini, denge, koordinasyon, beden farkındalığı ve fiziksel özgüvenlerini destekliyoruz.",
      "Yaşa uygun hareket parkurları, eğitsel oyunlar, koordinasyon çalışmaları ve grup etkinlikleriyle hareket etmeyi günlük yaşamın doğal ve keyifli bir parçası hâline getiriyoruz.",
      "Çocuklarımızın fiziksel becerilerini geliştirirken paylaşma, sıra bekleme, kurallara uyma ve birlikte hareket etme alışkanlıklarına da katkı sağlıyoruz.",
    ],
  },
  {
    icon: "palette",
    title: "Görsel Sanatlar Dersi",
    paragraphs: [
      "3, 4 ve 5 yaş gruplarımızda yer alan Görsel Sanatlar Dersi ile çocuklarımızın estetik duyarlılıklarını, hayal güçlerini ve yaratıcı düşünme becerilerini destekliyoruz.",
      "Boyama, çizim, kolaj, farklı malzemelerle tasarım ve üç boyutlu çalışmalar aracılığıyla çocuklarımızın renk, şekil, doku ve görsel ifade becerilerini geliştiriyoruz.",
      "Sanat çalışmalarında tek tip sonuçlar elde etmek yerine her çocuğun kendine özgü fikirlerini ve üretim sürecini önemsiyoruz.",
    ],
  },
  {
    icon: "music",
    title: "Müzik ve Ritim Dersi",
    paragraphs: [
      "3, 4 ve 5 yaş gruplarımızda uyguladığımız Müzik ve Ritim Dersi ile çocuklarımızın işitsel dikkatlerini, ritim duygularını, dinleme becerilerini ve müzikal farkındalıklarını destekliyoruz.",
      "Şarkılar, ritim oyunları, beden perküsyonu ve yaşa uygun müzik araçlarıyla çocuklarımızın müziği yaşayarak keşfetmelerine fırsat sunuyoruz.",
      "Müzik çalışmalarını yalnızca sanatsal gelişim değil; dikkat, hafıza, koordinasyon, iletişim ve grup uyumunu destekleyen bir öğrenme alanı olarak değerlendiriyoruz.",
    ],
  },
  {
    icon: "flask",
    title: "Bilim, Doğa ve Keşif",
    paragraphs: [
      "Yaşa uygun fen ve doğa etkinlikleriyle çocuklarımızın çevrelerini tanımalarını, neden-sonuç ilişkileri kurmalarını ve araştırma meraklarını geliştirmelerini destekliyoruz.",
      "Doğa gözlemleri, basit deneyler ve keşif etkinlikleriyle öğrenmeyi günlük yaşamın bir parçası hâline getiriyoruz.",
    ],
  },
  {
    icon: "heart",
    title: "Sosyal-Duygusal Gelişim",
    paragraphs: [
      "Paylaşma, sıra bekleme, empati, arkadaşlık kurma, iş birliği ve duygularını ifade etme becerilerini günlük sınıf yaşamının bir parçası olarak ele alıyoruz.",
      "Öğretmen gözlemleri ve ihtiyaç duyulan rehberlik çalışmalarıyla çocuklarımızın sosyal-duygusal gelişimini destekliyoruz.",
    ],
  },
  {
    icon: "sparkles",
    title: "Yaşam Becerileri ve Bağımsızlık",
    paragraphs: [
      "Öz bakım, kişisel sorumluluk, düzen oluşturma, karar verme ve günlük yaşam becerilerini yaş gruplarımıza uygun etkinliklerle destekliyoruz.",
      "Çocuklarımızın bağımsızlık kazanmalarını ve günlük yaşam sorumluluklarını güvenle üstlenmelerini önemsiyoruz.",
    ],
  },
  {
    icon: "sprout",
    title: "Doğa ve Sürdürülebilir Yaşam Bilinci",
    paragraphs: [
      "Doğa gözlemleri, bitki yetiştirme, geri dönüşüm farkındalığı ve kaynakları bilinçli kullanma etkinlikleriyle çocuklarımızın çevreye duyarlı alışkanlıklar geliştirmelerini amaçlıyoruz.",
    ],
  },
];

/* ── Bir gün ────────────────────────────────────────────────── */

export const birGun = {
  title: "Anaşehir Anaokulunda Bir Gün",
  lead: "Anaokulumuzdaki günlük akış, çocuklarımızın yaş ve gelişim özelliklerine göre planlanır.",
  steps: [
    { title: "Güne Merhaba ve Serbest Oyun", text: "Çocuklarımız güne öğretmenleri ve arkadaşlarıyla güvenli bir başlangıç yapar." },
    { title: "Paylaşım Çemberi", text: "Duygularımızı, düşüncelerimizi ve günlük deneyimlerimizi paylaşırız." },
    { title: "Oyun Temelli Öğrenme Etkinlikleri", text: "Dil, erken matematik, bilim ve düşünme becerilerini destekleyen çalışmalar gerçekleştiririz." },
    { title: "Yabancı Dil Dersleri", text: "3 ve 4 yaşta İngilizce; 5 yaşta İngilizce ve Almanca dersleriyle yabancı dil öğrenimini yaşa uygun etkinliklerle destekleriz." },
    { title: "LEGO Education ve Drama", text: "Tasarım, problem çözme, hayal gücü ve yaratıcı ifade becerilerine yönelik çalışmalar gerçekleştiririz." },
    { title: "Dans, Spor ve Hareket", text: "Ritim, koordinasyon, beden farkındalığı ve temel hareket becerilerini yaşa uygun etkinliklerle destekleriz." },
    { title: "Görsel Sanatlar", text: "Çizim, boyama, farklı malzemelerle tasarım ve yaratıcı üretim etkinlikleri gerçekleştiririz." },
    { title: "Müzik ve Ritim", text: "Şarkılar, müzikli oyunlar ve ritim çalışmalarıyla işitsel farkındalığı ve müzikal ifade becerilerini destekleriz." },
    { title: "Beslenme ve Dinlenme", text: "Çocuklarımızın günlük beslenme ve dinlenme ihtiyaçlarını yaş gruplarına uygun şekilde gözetiriz." },
    { title: "Açık Hava ve Keşif", text: "Bahçe oyunları ve doğa etkinlikleriyle hareket etmeyi, keşfetmeyi ve birlikte oynamayı destekleriz." },
    { title: "Gün Sonu ve Değerlendirme", text: "Günün deneyimlerini paylaşır, çocuklarımızın öğrendiklerini ifade etmelerine fırsat sunarız." },
  ],
} as const;

/* ── Gelişim takibi + AGM ───────────────────────────────────── */

export const gelisimTakibi = {
  title: "Gelişim Takibi ve Veli İletişimi",
  paragraphs: [
    "Anaokulumuzda değerlendirme sürecini sınav ve notlandırma üzerine değil, çocuğun bireysel gelişimini anlamaya yönelik gözlem ve öğrenme deneyimleri üzerine kuruyoruz.",
    "Öğretmen gözlemleri, etkinliklere katılım ve öğrenme ürünleri aracılığıyla çocuklarımızın bilişsel, dil, sosyal-duygusal, motor ve öz bakım becerilerini takip ediyoruz.",
    "Velilerimizle kurduğumuz düzenli iletişim sayesinde okul ve aile iş birliğini güçlendirmeyi önemsiyoruz.",
    "Anaokulu veli iletişiminde kullanılan Ekid+ sistemi ve öğretmen görüşmeleriyle çocuklarımızın günlük okul yaşamı ve gelişim süreçlerine ilişkin bilgi paylaşımını destekliyoruz.",
  ],
} as const;

export const anaokuluAgm = {
  title: "AGM 360° ile Anaokulundan Başlayan Gelişim",
  paragraphs: [
    "AGM 360° Anaşehir Gelişim Modeli, okul öncesi dönemde çocuklarımızın gelişim özelliklerine uygun öğrenme deneyimleriyle hayat bulur.",
    "3 yaşta başlayan İngilizce eğitimi, 5 yaşta İngilizce ve Almancayla genişleyen yabancı dil programı; tüm yaş gruplarımızda uygulanan LEGO Education, dans, drama, spor ve hareket, görsel sanatlar ile müzik ve ritim dersleri, bütüncül eğitim yaklaşımımızın önemli bileşenleridir.",
    "Akademik hazırlık, sosyal-duygusal gelişim, yaratıcı düşünme, fiziksel gelişim, sanat ve doğa bilinci birbirini tamamlayan alanlar olarak ele alınır.",
  ],
} as const;

export const anaokuluTour = {
  title: "Anaşehir Anaokulunu Yakından Tanıyın",
  text: "Anaokulumuzun eğitim programını, öğrenme ortamlarını ve yaş gruplarına yönelik uygulamalarını yakından tanımak için sizleri kampüsümüzü keşfetmeye davet ediyoruz.",
} as const;
