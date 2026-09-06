export const site = {
  name: "Anaşehir Okulları",
  slogan: "Gelecek Anaşehir'de başlar",
  email: "info@anasehirkoleji.com",
  web: "www.anasehirkoleji.com",
  phoneDisplay: "444 69 61",
  phoneTel: "4446961",
  whatsapp: "904446961",
  hoursWeekday: "07:30–19:00",
  hoursSaturday: "10:30–17:00",
  founded: 2005,
  students: "1000+",
  staff: "100+",
  social: {
    youtube: "https://www.youtube.com/channel/UCLblj2b4UFscwpOXObKX6Xw",
    instagram: "https://www.instagram.com/anasehirokullari/",
    facebook: "https://www.facebook.com/anasehirankana",
  },
  portals: {
    k12: "https://giris.k12net.com",
    vezne: "https://www.param.com.tr",
    param: "https://www.param.com.tr",
    canadianCollege: "https://canada-english.com/tr/smrt",
    ankaraEgitim: "https://www.ankaraegitimplatformu.com",
  },
  radio: {
    stream: "http://164.132.93.130:9904/;",
    appStore:
      "https://itunes.apple.com/tr/app/ana%C5%9Fehir-radyo/id1348207785?l=tr&mt=8",
    playStore:
      "https://play.google.com/store/apps/details?id=com.evmetek.anasehirradyo",
  },
} as const;

export function telHref(raw: string) {
  return `tel:${raw.replace(/\s/g, "")}`;
}

export function waHref(number = site.whatsapp) {
  return `https://wa.me/${number}`;
}
