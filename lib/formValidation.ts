/**
 * Field checks for the bursluluk and İK forms, shared by the browser (so the
 * visitor sees which field is wrong before sending) and the /api/basvuru/*
 * routes. The rules match the Ekiz panel API (Nov 2026).
 */
export type FieldErrors = Record<string, string>;

export const CV_MAX_BYTES = 4 * 1024 * 1024;
export const CV_EXTENSIONS = [".pdf", ".doc", ".docx"];
export const IK_POSITIONS = ["Öğretmen", "İdari Personel", "Destek Personeli", "Diğer"];

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Phone as the panel wants it: digits only (spaces, +, -, ( ) dropped). */
export const phoneDigits = (v: string) => v.replace(/\D/g, "");

const text = (v: unknown) => (typeof v === "string" ? v.trim() : "");

function checkName(errors: FieldErrors, key: string, v: string, label: string, max = 100) {
  if (!v) errors[key] = `${label} boş bırakılamaz.`;
  else if (v.length < 2) errors[key] = `${label} en az 2 karakter olmalı.`;
  else if (v.length > max) errors[key] = `${label} en fazla ${max} karakter olabilir.`;
}

function checkPhone(errors: FieldErrors, v: string) {
  const d = phoneDigits(v);
  if (!v) errors.telefon = "Telefon numarası boş bırakılamaz.";
  else if (/[^\d\s+()-]/.test(v)) errors.telefon = "Telefon numarasında yalnızca rakam kullanın.";
  else if (d.length < 10 || d.length > 13)
    errors.telefon = "Telefon numarası eksik veya hatalı. Örnek: 0532 123 45 67";
}

function checkEmail(errors: FieldErrors, v: string, required: boolean) {
  if (!v) {
    if (required) errors.eposta = "E-posta adresi boş bırakılamaz.";
  } else if (!EMAIL.test(v)) errors.eposta = "E-posta adresi geçerli değil. Örnek: ad@ornek.com";
}

const AYDINLATMA = "Başvurmak için aydınlatma metnini okuyup onaylayın.";

export function validateBursluluk(d: Record<string, unknown>): FieldErrors {
  const e: FieldErrors = {};
  checkName(e, "ogrenciAd", text(d.ogrenciAd), "Öğrenci ad soyad");
  if (!["4", "5", "6", "7"].includes(String(d.sinif ?? ""))) e.sinif = "Öğrencinin sınıfını seçin.";
  checkName(e, "okul", text(d.okul), "Okul adı", 150);
  if (!["10:00", "14:00"].includes(text(d.seans))) e.seans = "Sınav seansını seçin.";
  checkName(e, "veliAd", text(d.veliAd), "Veli ad soyad");
  checkPhone(e, text(d.telefon));
  checkEmail(e, text(d.eposta), false);
  if (d.aydinlatmaOkundu !== true && d.aydinlatmaOkundu !== "true") e.aydinlatmaOkundu = AYDINLATMA;
  return e;
}

export function validateIk(d: Record<string, unknown>, cv: unknown): FieldErrors {
  const e: FieldErrors = {};
  checkName(e, "adSoyad", text(d.adSoyad), "Ad soyad");
  checkPhone(e, text(d.telefon));
  checkEmail(e, text(d.eposta), true);
  if (!IK_POSITIONS.includes(text(d.pozisyon))) e.pozisyon = "Başvurduğunuz pozisyonu seçin.";
  if (!text(d.mezuniyet)) e.mezuniyet = "Mezun olduğunuz okul ve bölümü yazın.";
  const file = cv as { name?: string; size?: number } | null;
  if (!file || !file.size) e.cv = "Özgeçmiş (CV) dosyanızı ekleyin.";
  else if (!CV_EXTENSIONS.some((x) => (file.name ?? "").toLowerCase().endsWith(x)))
    e.cv = "Özgeçmiş PDF veya Word (.pdf, .doc, .docx) dosyası olmalı.";
  else if (file.size > CV_MAX_BYTES) e.cv = "Dosya çok büyük. Özgeçmiş en fazla 4 MB olabilir.";
  if (d.aydinlatmaOkundu !== true && d.aydinlatmaOkundu !== "true") e.aydinlatmaOkundu = AYDINLATMA;
  return e;
}

/**
 * The panel's 400 message names the field; find which of ours it is so the
 * visitor gets that field's message instead of a generic failure.
 */
export function fieldFromPanelError(message: string, fields: string[]): string | null {
  const m = message.toLowerCase();
  return fields.find((f) => m.includes(f.toLowerCase())) ?? null;
}

export const fieldFallback: FieldErrors = {
  ogrenciAd: "Öğrenci ad soyad bilgisini kontrol edin.",
  sinif: "Öğrencinin sınıfını kontrol edin.",
  okul: "Okul adını kontrol edin.",
  seans: "Sınav seansını kontrol edin.",
  veliAd: "Veli ad soyad bilgisini kontrol edin.",
  adSoyad: "Ad soyad bilgisini kontrol edin.",
  telefon: "Telefon numarası eksik veya hatalı. Örnek: 0532 123 45 67",
  eposta: "E-posta adresi geçerli değil. Örnek: ad@ornek.com",
  pozisyon: "Pozisyon seçimini kontrol edin.",
  brans: "Branş / alan bilgisini kontrol edin.",
  deneyim: "Deneyim seçimini kontrol edin.",
  mezuniyet: "Mezuniyet bilgisini kontrol edin.",
  onYazi: "Ön yazı çok uzun olabilir; kısaltıp tekrar deneyin.",
  cv: "Özgeçmiş dosyasını kontrol edin (PDF veya Word, en fazla 4 MB).",
  aydinlatmaOkundu: AYDINLATMA,
};

export const FORM_ERROR_SUMMARY = "Başvuru gönderilmedi. Lütfen kırmızıyla işaretli alanları düzeltin.";
