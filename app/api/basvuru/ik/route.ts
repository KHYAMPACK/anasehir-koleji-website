import { phoneDigits, validateIk } from "@/lib/formValidation";
import { HONEYPOT, invalidResponse, sendToPanel } from "@/lib/panel";

const TEXT_FIELDS = ["adSoyad", "telefon", "eposta", "pozisyon", "brans", "deneyim", "mezuniyet", "onYazi"];

/** İK iş başvurusu → panel (multipart, with the CV file). */
export async function POST(request: Request) {
  let data: FormData;
  try {
    data = await request.formData();
  } catch {
    return invalidResponse({});
  }
  if (data.get(HONEYPOT)) return Response.json({ id: null }, { status: 201 });

  const fields = Object.fromEntries([...data.entries()].filter(([, v]) => typeof v === "string"));
  const cv = data.get("cv");
  const errors = validateIk(fields, cv instanceof File ? cv : null);
  if (Object.keys(errors).length || !(cv instanceof File)) return invalidResponse(errors);

  const out = new FormData();
  for (const k of TEXT_FIELDS) {
    const v = data.get(k);
    if (typeof v === "string" && v.trim()) out.set(k, k === "telefon" ? phoneDigits(v) : v.trim());
  }
  out.set("aydinlatmaOkundu", "true");
  out.set("aydinlatmaOkunduAt", new Date().toISOString());
  out.set("cv", cv, cv.name);
  return sendToPanel("ik", out, false, [...TEXT_FIELDS, "cv", "aydinlatmaOkundu"]);
}
