"use client";

import { useEffect, useState } from "react";
import { RAZORPAY_BOOKING } from "@/lib/links";

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

  const openBooking = () => {
    window.open(RAZORPAY_BOOKING, "_blank", "noopener,noreferrer");
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
        <div className="mx-auto max-w-lg">
          <button
            type="button"
            onClick={openBooking}
            className="w-full rounded-lg bg-gradient-to-r from-gold to-gold-light py-3.5 text-sm font-bold text-navy"
          >
            <span aria-hidden>🔥</span> Book Your Seat Now — ₹500
          </button>
        </div>
      </div>
    </div>
  );
}
