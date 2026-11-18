import { phoneDigits, validateBursluluk } from "@/lib/formValidation";
import { HONEYPOT, invalidResponse, sendToPanel } from "@/lib/panel";

const FIELDS = ["ogrenciAd", "sinif", "okul", "seans", "veliAd", "telefon", "eposta", "aydinlatmaOkundu"];

/** Bursluluk başvurusu → panel (JSON). */
export async function POST(request: Request) {
  let data: Record<string, unknown>;
  try {
    data = await request.json();
  } catch {
    return invalidResponse({});
  }
  if (data[HONEYPOT]) return Response.json({ id: null }, { status: 201 });

  const errors = validateBursluluk(data);
  if (Object.keys(errors).length) return invalidResponse(errors);

  const str = (k: string) => String(data[k] ?? "").trim();
  const body = {
    ogrenciAd: str("ogrenciAd"),
    sinif: str("sinif"),
    okul: str("okul"),
    seans: str("seans"),
    veliAd: str("veliAd"),
    telefon: phoneDigits(str("telefon")),
    ...(str("eposta") ? { eposta: str("eposta") } : {}),
    aydinlatmaOkundu: true,
    aydinlatmaOkunduAt: new Date().toISOString(),
  };
  return sendToPanel("bursluluk", JSON.stringify(body), true, FIELDS);
}
