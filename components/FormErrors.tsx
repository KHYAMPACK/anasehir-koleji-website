"use client";

import { useCallback, useState } from "react";
import type { FieldErrors } from "@/lib/formValidation";

/** Red message under a form field (bursluluk + İK forms). */
export function FieldError({ name, errors }: { name: string; errors: FieldErrors }) {
  const msg = errors[name];
  if (!msg) return null;
  return (
    <span id={`${name}-hata`} className="text-xs font-semibold text-red">
      {msg}
    </span>
  );
}

/** Input classes + aria props for a field that may have an error. */
export function fieldProps(name: string, errors: FieldErrors, base: string) {
  const bad = Boolean(errors[name]);
  return {
    name,
    className: `${base} ${bad ? "border-red ring-1 ring-red/40" : ""}`,
    "aria-invalid": bad || undefined,
    "aria-describedby": bad ? `${name}-hata` : undefined,
  };
}

/**
 * Field-error state for a form: show() sets the errors and moves focus to the
 * first wrong field; clear(name) drops one error as soon as the visitor edits it.
 */
export function useFieldErrors() {
  const [errors, setErrors] = useState<FieldErrors>({});

  const show = useCallback((form: HTMLFormElement, next: FieldErrors) => {
    setErrors(next);
    const first = Object.keys(next)[0];
    if (!first) return;
    const el = form.elements.namedItem(first);
    if (el instanceof HTMLElement) {
      el.focus();
      el.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  }, []);

  const clear = useCallback((name: string) => {
    setErrors((e) => {
      if (!e[name]) return e;
      const rest = { ...e };
      delete rest[name];
      return rest;
    });
  }, []);

  return { errors, show, clear, reset: () => setErrors({}) };
}

/** Reads a /api/basvuru/* error response: summary + per-field messages. */
export async function readErrorResponse(res: Response, fallback: string) {
  const data = (await res.json().catch(() => null)) as { error?: string; fields?: FieldErrors } | null;
  return { message: data?.error ?? fallback, fields: data?.fields ?? {} };
}
