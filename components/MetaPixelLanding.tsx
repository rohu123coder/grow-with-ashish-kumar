"use client";

import {
  META_CUSTOM_EVENTS,
  trackMetaCustomEvent,
  trackMetaEvent,
} from "@/lib/metaPixel";
import { useEffect, useRef } from "react";

/** Fires landing-page standard + custom conversion events once per visit. */
export function MetaPixelLanding() {
  const fired = useRef(false);

  useEffect(() => {
    if (fired.current) return;
    fired.current = true;

    trackMetaEvent("Lead", {
      content_name: "Mumbai Astro Vastu Foundation Course",
      content_category: "Course Landing",
    });

    trackMetaEvent("ViewContent", {
      content_name: "Mumbai Astro Vastu Foundation Course",
      content_type: "product",
    });

    trackMetaCustomEvent(META_CUSTOM_EVENTS.landing, {
      page: "home",
    });
  }, []);

  return null;
}
