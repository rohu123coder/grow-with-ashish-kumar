import { META_PIXEL_ID, trackMetaEvent } from "@/lib/metaPixel";

type MetaPixelWindow = Window & {
  __metaPixelBootstrapped?: boolean;
  __metaPixelInitDone?: boolean;
  __metaPageViewPath?: string;
  __metaPageViewLock?: string;
};

/** Official Meta bootstrap — injected once; `if(f.fbq)return` prevents duplicate loaders. */
export function ensureMetaPixelScript(): void {
  if (typeof window === "undefined") return;
  const w = window as MetaPixelWindow;
  if (w.__metaPixelBootstrapped) return;
  w.__metaPixelBootstrapped = true;

  if (typeof w.fbq === "function") return;

  const el = document.createElement("script");
  el.id = "meta-pixel-bootstrap";
  el.textContent = `
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;t.id='meta-fbevents-js';
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
`;
  document.head.appendChild(el);
}

export function initMetaPixelOnce(): void {
  if (typeof window === "undefined") return;
  ensureMetaPixelScript();

  const w = window as MetaPixelWindow;
  if (w.__metaPixelInitDone) return;
  if (typeof w.fbq !== "function") return;

  w.fbq("init", META_PIXEL_ID);
  w.__metaPixelInitDone = true;
}

/**
 * Exactly one PageView per pathname per tab session.
 * Survives React Strict Mode, remounts, hydration, and parallel effects.
 */
export function trackMetaPageViewOnce(pathname: string): boolean {
  if (typeof window === "undefined" || !pathname) return false;

  const w = window as MetaPixelWindow;

  if (w.__metaPageViewPath === pathname) return true;
  if (w.__metaPageViewLock === pathname) return true;

  ensureMetaPixelScript();
  initMetaPixelOnce();
  if (typeof w.fbq !== "function") return false;

  w.__metaPageViewLock = pathname;

  try {
    trackMetaEvent("PageView");
    w.__metaPageViewPath = pathname;
    return true;
  } finally {
    if (w.__metaPageViewLock === pathname) {
      delete w.__metaPageViewLock;
    }
  }
}
