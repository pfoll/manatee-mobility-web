"use server";

import { getSql } from "@/lib/db";

export type WaitlistState = {
  ok: boolean;
  message: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isUniqueViolation(err: unknown): boolean {
  if (!err || typeof err !== "object") return false;
  const e = err as { code?: string; message?: string };
  if (e.code === "23505") return true;
  const msg = (e.message ?? "").toLowerCase();
  return msg.includes("unique") || msg.includes("duplicate");
}

export async function joinWaitlist(
  _prev: WaitlistState,
  formData: FormData
): Promise<WaitlistState> {
  // Honeypot — bots fill this; humans never see it
  const company = String(formData.get("company") ?? "").trim();
  if (company) {
    return { ok: true, message: "You're on the list. We'll be in touch." };
  }

  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const name = String(formData.get("name") ?? "").trim() || null;
  const phone = String(formData.get("phone") ?? "").trim() || null;
  const city = String(formData.get("city") ?? "").trim() || "Naples";
  const utm_source = String(formData.get("utm_source") ?? "").trim() || null;
  const utm_medium = String(formData.get("utm_medium") ?? "").trim() || null;
  const utm_campaign = String(formData.get("utm_campaign") ?? "").trim() || null;

  if (!email || !EMAIL_RE.test(email)) {
    return { ok: false, message: "Please enter a valid email address." };
  }

  try {
    const sql = getSql();
    await sql`
      INSERT INTO waitlist_signups (email, name, phone, city, utm_source, utm_medium, utm_campaign)
      VALUES (${email}, ${name}, ${phone}, ${city}, ${utm_source}, ${utm_medium}, ${utm_campaign})
    `;
    return {
      ok: true,
      message: "You're on the list. We'll reach out as Naples rides open.",
    };
  } catch (err) {
    if (isUniqueViolation(err)) {
      return {
        ok: true,
        message: "You're already on the list — we'll be in touch.",
      };
    }
    console.error("waitlist signup failed", err);
    return {
      ok: false,
      message: "Something went wrong. Please try again in a moment.",
    };
  }
}
