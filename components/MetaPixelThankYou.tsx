"use client";

import {
  META_CUSTOM_EVENTS,
  META_PURCHASE_VALUE,
  trackMetaCustomEvent,
  trackMetaEvent,
} from "@/lib/metaPixel";
import { useEffect, useRef } from "react";

export function MetaPixelThankYou() {
  const fired = useRef(false);

  useEffect(() => {
    if (fired.current) return;
    fired.current = true;

    trackMetaEvent("Purchase", {
      value: META_PURCHASE_VALUE,
      currency: "INR",
      content_name: "Astro Vastu Mumbai — Seat Booking",
      content_type: "product",
    });

    trackMetaCustomEvent(META_CUSTOM_EVENTS.thankYou, {
      value: META_PURCHASE_VALUE,
      currency: "INR",
    });
  }, []);

  return null;
}
