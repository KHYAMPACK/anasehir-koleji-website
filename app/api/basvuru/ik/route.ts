import { CV_EXTENSIONS, CV_MAX_BYTES, formErrors, HONEYPOT, sendToPanel } from "@/lib/panel";

/** İK iş başvurusu → panel (multipart, with the CV file). */
export async function POST(request: Request) {
  let data: FormData;
  try {
    data = await request.formData();
  } catch {
    return Response.json({ error: formErrors.invalid }, { status: 400 });
  }
  if (data.get(HONEYPOT)) return Response.json({ id: null }, { status: 201 });

  const cv = data.get("cv");
  if (!(cv instanceof File) || cv.size === 0) return Response.json({ error: formErrors.invalid }, { status: 400 });
  if (cv.size > CV_MAX_BYTES) return Response.json({ error: formErrors.tooBig }, { status: 413 });
  if (!CV_EXTENSIONS.some((ext) => cv.name.toLowerCase().endsWith(ext))) {
    return Response.json({ error: formErrors.invalid }, { status: 400 });
  }
  if (data.get("aydinlatmaOkundu") !== "true") return Response.json({ error: formErrors.invalid }, { status: 400 });

  const out = new FormData();
  for (const k of ["adSoyad", "telefon", "eposta", "pozisyon", "brans", "deneyim", "mezuniyet", "onYazi"]) {
    const v = data.get(k);
    if (typeof v === "string" && v.trim()) out.set(k, v.trim());
  }
  out.set("aydinlatmaOkundu", "true");
  out.set("aydinlatmaOkunduAt", new Date().toISOString());
  out.set("cv", cv, cv.name);
  return sendToPanel("ik", out, false);
}
