import { neon, type NeonQueryFunction } from "@neondatabase/serverless";

let sql: NeonQueryFunction<false, false> | null = null;

/**
 * Lazy Neon client so `next build` succeeds without DATABASE_URL.
 * Throws only when a signup (or other DB call) actually runs.
 */
export function getSql() {
  if (sql) return sql;
  const url = process.env.DATABASE_URL;
  if (!url) {
    throw new Error(
      "DATABASE_URL is not set. Add it to .env.local (see .env.example)."
    );
  }
  sql = neon(url);
  return sql;
}
