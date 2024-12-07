export function formatNumber(value: number, locale: string = "en-US"): string {
  const formatted = value.toLocaleString(locale);

  return formatted;
}
