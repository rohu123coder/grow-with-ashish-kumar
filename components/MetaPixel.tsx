"use client";

import { META_PIXEL_ID, trackMetaEvent } from "@/lib/metaPixel";
import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

/** Prevents duplicate PageView (script + effect, React Strict Mode, re-renders). */
let lastPageViewPath: string | null = null;

function trackPageViewOnce(pathname: string) {
  if (lastPageViewPath === pathname) return;
  if (typeof window.fbq !== "function") return false;

  trackMetaEvent("PageView");
  lastPageViewPath = pathname;
  return true;
}

export function MetaPixel() {
  const pathname = usePathname();

  useEffect(() => {
    if (trackPageViewOnce(pathname)) return;

    const interval = window.setInterval(() => {
      if (trackPageViewOnce(pathname)) {
        window.clearInterval(interval);
      }
    }, 50);

    return () => window.clearInterval(interval);
  }, [pathname]);

  return (
    <>
      <Script id="meta-pixel-base" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${META_PIXEL_ID}');
        `}
      </Script>
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
    </>
  );
}
