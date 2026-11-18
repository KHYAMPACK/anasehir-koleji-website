/**
 * Form submissions → panel.ekizyazilim.com (Ekiz panel, Nov 2026).
 * Server-only: imported by the /api/basvuru/* route handlers, never by client
 * code, so PANEL_API_KEY (Vercel env) never reaches the browser.
 */
const PANEL_URL = "https://panel.ekizyazilim.com/api/forms";

export const CV_MAX_BYTES = 4 * 1024 * 1024;
export const CV_EXTENSIONS = [".pdf", ".doc", ".docx"];

/** Friendly Turkish messages; the panel's raw error is never shown. */
export const formErrors = {
  invalid: "Lütfen formdaki bilgileri kontrol edip tekrar deneyin.",
  tooBig: "Dosya çok büyük. Özgeçmiş en fazla 4 MB olabilir.",
  server: "Başvurunuz şu anda gönderilemedi. Lütfen biraz sonra tekrar deneyin veya bizi arayın.",
} as const;

export async function sendToPanel(form: "bursluluk" | "ik", body: BodyInit, json: boolean) {
  const key = process.env.PANEL_API_KEY;
  if (!key) {
    console.error("[panel] PANEL_API_KEY is not set");
    return Response.json({ error: formErrors.server }, { status: 500 });
  }
  try {
    const res = await fetch(`${PANEL_URL}/${form}`, {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, ...(json ? { "Content-Type": "application/json" } : {}) },
      body,
      cache: "no-store",
    });
    if (res.status === 201) {
      const data = (await res.json().catch(() => ({}))) as { id?: string };
      return Response.json({ id: data.id ?? null }, { status: 201 });
    }
    const detail = await res.text().catch(() => "");
    console.error(`[panel] ${form} → ${res.status} ${detail.slice(0, 300)}`);
    if (res.status === 400) return Response.json({ error: formErrors.invalid }, { status: 400 });
    if (res.status === 413) return Response.json({ error: formErrors.tooBig }, { status: 413 });
    return Response.json({ error: formErrors.server }, { status: 502 });
  } catch (err) {
    console.error(`[panel] ${form} request failed`, err);
    return Response.json({ error: formErrors.server }, { status: 502 });
  }
}

/** Hidden honeypot field: bots fill it, people don't. Pretend success. */
export const HONEYPOT = "web_sitesi";
