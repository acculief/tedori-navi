/**
 * GA4イベント送信の薄いラッパー。
 * gtag.js は layout.tsx の <Script> で読み込み済み（window.gtag）。
 * SSR / gtag未読込時は何もしない。
 */
export function trackEvent(name: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  window.gtag?.("event", name, params ?? {});
}
