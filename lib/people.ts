export type Person = {
  name: string;
  title: string;
  bio: string;
  quote?: string;
};

export const founders: Person[] = [
  {
    name: "İlker Çekinmez",
    title: "Yönetim Kurulu Başkanı",
    bio: "Kurucumuz İlker Çekinmez, Füsun Çekinmez ile evli ve iki çocuk babasıdır. 1973 yılında Aydın’da doğdu. Öğretmen anne ve babanın üç çocuğundan ilki olan İlker Çekinmez; ilk-orta ve lise öğretimini Aydın’da tamamlayarak, ODTÜ Psikoloji bölümünden 1996 yılında mezun oldu. Eğitim Yönetimi ve Denetimi dalında yüksek lisans yaptı. Kayseri Melikgazi Süper Lisesi’nde İngilizce Öğretmeni olarak meslek hayatına atıldı. 1998 yılında Kuleli Askeri Lisesi’nde okul psikoloğu olarak askerlik görevini tamamlayan kurucumuz, TED İstanbul Koleji’nin kuruluşundan itibaren 9 yıl okul psikoloğu olarak çalıştı. Devlet okulu, askeri lise ve kolej olarak farklı okul türlerinde çalışma şansını yakalayan kurucumuz; bilgi ve birikimlerini kendi okullarında kullanmak üzere 2005 yılında üniversiteyi okuduğu şehir olan Ankara’da ilk anaokulunu kurdu. Ardından farklı semtlerde açtığı yeni şubelerle eğitime güç kattı. Çayyolu’nda ilk anaokulunu açarken kurmayı planladığı Anaşehir Koleji’ni, 2013 yılında Etimesgut Bağlıca’da eğitime kazandırdı. 2014 yılında tüm şubeleri Ankara Etimesgut İlçesi’nde toplayarak, Ankara Etimesgut İlçesi’nde eğitimde en iyi kurum olmayı başardı.",
  },
  {
    name: "Füsun Çekinmez",
    title: "Kurucu Müdür",
    bio: "Kurucumuz Füsun Çekinmez, Denizli’de doğdu. İlkokul ve ortaokul eğitimini Denizli’de tamamladıktan sonra Kayseri Lisesi’nden mezun oldu. AKÜ Kimya Bölümü’nden mezun olduktan sonra muhasebe ve çocuk gelişimi bölümlerini bitiren Füsun Çekinmez; İlker Çekinmez ile evli ve iki çocuk annesidir. Şu an tüm kurumlarımız Ankara Etimesgut İlçesi’nde Ankana Eğitim Kurumları altında Ankana Kids ve Anaşehir isimleriyle kreş, anaokulu, etüt merkezi, ilkokul ve ortaokul olarak hizmet vermektedir. “Amacımız; Atatürk ilke ve devrimleri doğrultusunda, nitelikli bireyler yetiştiren, örnek gösterilen ve öncelikli tercih edilen, öncü bir kurum olmaktır.” diyen kurucularımız; eğitimci anne babaların çocukları olarak eğitime gönül vermiş kişilerdir.",
  },
];

export const generalManager: Person = {
  name: "Naran Dağseven",
  title: "Genel Müdür",
  bio: "İlkokul eğitimini Amerika’da tamamlayan genel müdürümüz Naran Dağseven, ortaokul ve lise eğitimine TED Ankara Koleji’nde devam etti. Ardından ODTÜ Psikoloji Bölümü’nden mezun olarak, yine ODTÜ’de klinik psikoloji alanında yüksek lisans yaptı. Eğitimde Psikolojik Hizmetler alanında uzmanlık eğitimini tamamladı. Yıllarca Ankara’da özel okullarda öğretmenlik, yöneticilik ve eğitim koordinatörlüğü görevlerinde bulundu. Dağseven, okulumuzun kuruluşundan bu yana Anaşehir Koleji Genel Müdürlüğü görevini sürdürmekte olup, aynı zamanda uzman psikolog olarak çalışmalarına okulumuzda da devam etmektedir.",
  quote:
    "Yaşı ne olursa olsun her bireyin en iyi öğrenme yolu oyundur. Bu gerçekten hareketle okulumuzun eğitim sistemini oyun temelinde oluşturduk ve öğrencilerimizin keyif alarak, istekle öğrenmelerini sağlayacak bir program hazırladık. Okulumuzun misyonu ve eğitim felsefesi, öğrencinin; çağdaş, özgüvenli, insani değerlere önem veren, günü takip edebilen, bilgi donanımlı, yabancı dili çok iyi ama aynı zamanda eğlenmeyi, kültür ve sanatla ilgilenmeyi de bilen bireyler yetiştirmektir. Okulumuz bu misyona uygun ve bu felsefeyle davranan bir eğitim ve öğretim kurumu olarak yapılandırılmıştır. Tüm gençlerimizin bu şekilde yetişmesini dilerim. Saygılarımla.",
};

export const administration: Person[] = [
  {
    name: "Beyza Güzeloğlu",
    title: "Halkla İlişkiler Sorumlusu",
    bio: "Halkla İlişkiler Sorumlusu Beyza Güzeloğlu 1983 yılında Malatya’da doğdu. Cumhuriyet Lisesi’nden mezun olduktan sonra, Anadolu Üniversitesi Halkla İlişkiler ve Tanıtım Bölümü’nü bitirdi. 12 yıl özel sektörde farklı kurumlarda çalıştı. 2014 yılından beri Anaşehir Okulları bünyesinde çalışmaktadır.",
  },
  {
    name: "Erdal Kılıç",
    title: "İdari İşler Amiri",
    bio: "İdari İşler Amiri olarak görev yapan Erdal Kılıç, 1969 yılında Erzurum’da doğdu. Endüstri Meslek Lisesi mezunu olduktan sonra, Türk Silahlı Kuvvetleri bünyesinde 22 yıl çalıştı. 2014 yılından beri Anaşehir Okulları bünyesinde çalışmaktadır.",
  },
  {
    name: "Emre Gümüşkan",
    title: "Servis Koordinatörü",
    bio: "Okul servis hizmetlerimiz servis koordinatörümüz Emre Gümüşkan tarafından organize edilmektedir. Okulumuzda servis hizmetleri, kurumumuza ait modern araçlarla sağlanmaktadır. Her aracımızda servis öğretmeni bulunmaktadır. Her servisimize ait telefon vardır. Araçlarımız FiloTürk araç takip sistemi ile kontrol ve takip edilmektedir. Öğrencilerimiz güvenli şekilde evlerinden alınmakta ve bırakılmaktadır.",
  },
];
