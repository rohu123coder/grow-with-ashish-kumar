"use client";

import { META_PIXEL_ID } from "@/lib/metaPixel";
import {
  ensureMetaPixelScript,
  initMetaPixelOnce,
  trackMetaPageViewOnce,
} from "@/lib/metaPixelPageView";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

/**
 * PageView: script bootstrap runs once; first path tracked after init.
 * Further PageViews only on client-side route changes (not popups/rerenders).
 */
export function MetaPixel() {
  const pathname = usePathname();
  const previousPath = useRef<string | null>(null);
  const bootstrapDone = useRef(false);

  useEffect(() => {
    ensureMetaPixelScript();
    initMetaPixelOnce();

    if (!bootstrapDone.current) {
      bootstrapDone.current = true;
      trackMetaPageViewOnce(pathname);
      previousPath.current = pathname;
      return;
    }

    if (previousPath.current === pathname) return;

    previousPath.current = pathname;
    trackMetaPageViewOnce(pathname);
  }, [pathname]);

  return (
    <noscript>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        height="1"
        width="1"
        style={{ display: "none" }}
        src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
        alt=""
      />
    </noscript>
  );
}
