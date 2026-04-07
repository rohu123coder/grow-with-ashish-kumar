"use client";

import { useEffect, useState } from "react";
import { RAZORPAY_GOLD, RAZORPAY_PLATINUM } from "@/lib/links";

export function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting);
      },
      { root: null, threshold: 0, rootMargin: "-80px 0px 0px 0px" }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  const openLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-[9997] md:hidden transition-transform duration-300 ease-out ${
        visible ? "pointer-events-auto translate-y-0" : "pointer-events-none translate-y-full"
      }`}
      aria-hidden={!visible}
    >
      <div
        className={`border-t-2 border-gold bg-navy px-3 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-8px_30px_rgba(0,0,0,0.25)] transition-opacity duration-300 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="mx-auto flex max-w-lg gap-2">
          <button
            type="button"
            onClick={() => openLink(RAZORPAY_GOLD)}
            className="flex-1 rounded-lg border border-gold py-3 text-sm font-bold text-gold"
          >
            Gold ₹1,580
          </button>
          <button
            type="button"
            onClick={() => openLink(RAZORPAY_PLATINUM)}
            className="flex-1 rounded-lg bg-gradient-to-r from-gold to-gold-light py-3 text-sm font-bold text-navy"
          >
            <span aria-hidden>🔥</span> Platinum ₹2,100
          </button>
        </div>
      </div>
    </div>
  );
}
