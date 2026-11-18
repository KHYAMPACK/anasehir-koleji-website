import { phoneDigits, validateIletisim } from "@/lib/formValidation";
import { HONEYPOT, invalidResponse, sendToPanel } from "@/lib/panel";

const FIELDS = ["adSoyad", "telefon", "kademe", "kampus", "aydinlatmaOkundu"];

/** "Bize Ulaşın" (/kayit-iletisim) → panel (JSON). */
export async function POST(request: Request) {
  let data: Record<string, unknown>;
  try {
    data = await request.json();
  } catch {
    return invalidResponse({});
  }
  if (data[HONEYPOT]) return Response.json({ id: null }, { status: 201 });

  const errors = validateIletisim(data);
  if (Object.keys(errors).length) return invalidResponse(errors);

  const str = (k: string) => String(data[k] ?? "").trim();
  const body = {
    adSoyad: str("adSoyad"),
    telefon: phoneDigits(str("telefon")),
    kademe: str("kademe"),
    kampus: str("kampus"),
    aydinlatmaOkundu: true,
    aydinlatmaOkunduAt: new Date().toISOString(),
  };
  return sendToPanel("iletisim", JSON.stringify(body), true, FIELDS);
}
