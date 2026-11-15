/**
 * Akademik Takip Sistemi (Akademik Başarı page) — client copy (Nov 2026), verbatim.
 * Left out per the no-slogans rule: "Her Öğrencinin Gelişimini Verilerle
 * İzliyoruz.", "Ölçüyoruz. Analiz Ediyoruz. Gelişimi Destekliyoruz.", the bold
 * one-line subtitles under each of the 5 items, the closing "Çünkü…" line and
 * the "AGM 360° | Akademik Derinlik" tagline.
 */
export const akademikTakip = {
  title: "Akademik Takip Sistemi",
  intro: [
    "Anaşehir Koleji'nde akademik başarıyı yalnızca sınav sonuçlarıyla değil, öğrencilerimizin öğrenme süreçlerini bütüncül biçimde değerlendirerek ele alıyoruz.",
    "SEBİT VCloud destekli AnaşehirOnline sistemimizle öğrencilerimizin akademik performanslarını, kazanım düzeylerini ve gelişim alanlarını veri odaklı bir yaklaşımla takip ediyoruz.",
    "Ölçme ve değerlendirme sonuçlarını öğretmen gözlemleriyle bütünleştirerek öğrencilerimizin güçlü yönlerini belirliyor, öğrenme ihtiyaçlarına yönelik destek çalışmalarını planlıyoruz.",
  ],
  /** Shown directly under the SEBİT VCloud graphic (client instruction). */
  screen: {
    image: "/akademik/sebit-vcloud.jpg",
    title: "AnaşehirOnline | Akademik Takip ve Performans Analizi",
    text: "SEBİT VCloud altyapısıyla desteklenen akademik takip sistemimiz; dijital öğrenme içeriklerini, sınav analizlerini, sınıf karşılaştırmalarını ve bireysel gelişim raporlarını bir araya getirerek veri odaklı eğitim planlamamızı destekler.",
  },
  stepsTitle: "Akademik Gelişimin Her Aşamasında Sistemli Takip",
  steps: [
    {
      title: "Dijital Öğrenme ve Ölçme Araçları",
      paragraphs: [
        "AnaşehirOnline sistemimiz kapsamında tarama testleri, alıştırmalar, yazılı ve çalışma soruları ile LGS hazırlığına yönelik dijital içerikler öğrencilerimizin öğrenme süreçlerini destekler.",
        "Bu araçlarla öğrencilerimizin öğrendiklerini pekiştirmelerine, eksik kazanımlarını fark etmelerine ve akademik çalışmalarını daha planlı sürdürmelerine olanak sağlıyoruz.",
      ],
    },
    {
      title: "Sınav Sonuçları ve Akademik Karşılaştırmalar",
      paragraphs: [
        "Ölçme ve değerlendirme sonuçlarını ders, sınıf ve kurum düzeyinde inceleyerek akademik performansı farklı açılardan değerlendiriyoruz.",
        "Uygun raporlarda yer alan karşılaştırmalı başarı grafikleri, sınıflarımızın akademik gelişimini izlememize ve öğretim süreçlerinde geliştirilmesi gereken alanları belirlememize yardımcı olur.",
      ],
    },
    {
      title: "Bireysel Performans ve Kazanım Analizleri",
      paragraphs: [
        "Öğrencilerimizin akademik gelişimlerini yalnızca genel başarı ortalamalarıyla değil, bireysel performans ve kazanım sonuçlarıyla birlikte değerlendiriyoruz.",
        "Performans raporları aracılığıyla öğrencilerimizin güçlü olduğu alanları ve desteğe ihtiyaç duydukları konuları belirleyerek öğrenme süreçlerini geliştirmeye odaklanıyoruz.",
      ],
    },
    {
      title: "Gelişim ve İlerleme Raporları",
      paragraphs: [
        "Akademik takip sistemimizde farklı değerlendirmelerden elde edilen sonuçlar, öğrencilerimizin gelişimini zaman içerisinde incelememize yardımcı olur.",
        "Çalışma raporları, sınav analizleri ve yeterlik düzeyine ilişkin değerlendirmeler aracılığıyla öğretim süreçlerimizi planlıyoruz.",
      ],
    },
    {
      title: "Veri Odaklı Akademik Planlama",
      paragraphs: [
        "Akademik değerlendirmelerden elde edilen sonuçları eğitim planlamamızın bir parçası olarak kullanıyoruz.",
        "Öğrencilerimizin öğrenme ihtiyaçları doğrultusunda tekrar, pekiştirme, bireysel geri bildirim ve akademik destek çalışmalarını değerlendiriyoruz.",
      ],
    },
  ],
  levelsTitle: "Sınıf Düzeyine Göre Planlı Ölçme ve Değerlendirme",
  levels: [
    { level: "3–4. Sınıflar", text: "Her çeyrek dönem sonunda süreç değerlendirme." },
    { level: "5–6. Sınıflar", text: "Ayda bir süreç değerlendirme." },
    { level: "7. Sınıflar", text: "Ayda iki süreç değerlendirme." },
    { level: "8. Sınıflar", text: "Her hafta düzenli LGS deneme sınavı." },
  ],
  levelsNote:
    "Bu uygulamalardan elde ettiğimiz sonuçları akademik takip sistemimiz ve öğretmen değerlendirmeleriyle bütünleştirerek öğrencilerimizin gelişimlerini izliyoruz.",
  collabTitle: "Öğrenci, Öğretmen ve Veli İş Birliği",
  collab: [
    "Akademik gelişimin yalnızca okul içerisinde takip edilen bir süreç olmaması gerektiğine inanıyoruz.",
    "SEBİT VCloud destekli AnaşehirOnline sistemimiz, öğretmenlerimizin akademik değerlendirmelerini desteklerken öğrencilerimizin ve velilerimizin kendilerine sunulan eğitim içerikleri ile sonuçları takip edebilmelerine olanak sağlar.",
    "Öğretmen geri bildirimleri ve veli görüşmeleriyle bu dijital yapıyı tamamlayarak öğrencilerimizin gelişimini ortak bir sorumluluk anlayışıyla destekliyoruz.",
  ],
} as const;
