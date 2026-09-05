export type UtmParams = {
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
};

export function readUtmsFromSearchParams(
  searchParams: URLSearchParams | Record<string, string | string[] | undefined>
): UtmParams {
  const get = (key: string): string | null => {
    if (searchParams instanceof URLSearchParams) {
      const v = searchParams.get(key);
      return v && v.trim() ? v.trim() : null;
    }
    const raw = searchParams[key];
    const v = Array.isArray(raw) ? raw[0] : raw;
    return v && v.trim() ? v.trim() : null;
  };

  return {
    utm_source: get("utm_source"),
    utm_medium: get("utm_medium"),
    utm_campaign: get("utm_campaign"),
  };
}
