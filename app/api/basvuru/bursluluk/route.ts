import { formErrors, HONEYPOT, sendToPanel } from "@/lib/panel";

/** Bursluluk başvurusu → panel (JSON). */
export async function POST(request: Request) {
  let data: Record<string, unknown>;
  try {
    data = await request.json();
  } catch {
    return Response.json({ error: formErrors.invalid }, { status: 400 });
  }
  if (data[HONEYPOT]) return Response.json({ id: null }, { status: 201 });

  const str = (k: string) => (typeof data[k] === "string" ? (data[k] as string).trim() : "");
  const body = {
    ogrenciAd: str("ogrenciAd"),
    sinif: str("sinif"),
    okul: str("okul"),
    seans: str("seans"),
    veliAd: str("veliAd"),
    telefon: str("telefon"),
    ...(str("eposta") ? { eposta: str("eposta") } : {}),
    aydinlatmaOkundu: data.aydinlatmaOkundu === true,
    aydinlatmaOkunduAt: new Date().toISOString(),
  };
  if (
    !body.aydinlatmaOkundu ||
    !["4", "5", "6", "7"].includes(body.sinif) ||
    !["10:00", "14:00"].includes(body.seans) ||
    !body.ogrenciAd || !body.okul || !body.veliAd || !body.telefon
  ) {
    return Response.json({ error: formErrors.invalid }, { status: 400 });
  }
  return sendToPanel("bursluluk", JSON.stringify(body), true);
}
