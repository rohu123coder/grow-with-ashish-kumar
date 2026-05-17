/** Meta (Facebook) Pixel ID */
export const META_PIXEL_ID = "2594952787530512";

export const META_CUSTOM_EVENTS = {
  landing: "MumbaiAstroVastu_Landing",
  thankYou: "ThankYou_Purchase",
} as const;

export const META_PURCHASE_VALUE = 500;

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    _fbq?: (...args: unknown[]) => void;
  }
}

export function trackMetaEvent(
  event: string,
  params?: Record<string, unknown>
) {
  if (typeof window === "undefined" || typeof window.fbq !== "function") return;
  if (params) {
    window.fbq("track", event, params);
  } else {
    window.fbq("track", event);
  }
}

export function trackMetaCustomEvent(
  eventName: string,
  params?: Record<string, unknown>
) {
  if (typeof window === "undefined" || typeof window.fbq !== "function") return;
  if (params) {
    window.fbq("trackCustom", eventName, params);
  } else {
    window.fbq("trackCustom", eventName);
  }
}
