"use client";

import CountdownTimer from "@/components/CountdownTimer";
import { getSeatCount } from "@/lib/popupUtils";
import { RAZORPAY_GOLD, RAZORPAY_PLATINUM } from "@/lib/links";
import { useEffect, useState } from "react";

export function ExitPopup({ salesPopupOpen }: { salesPopupOpen: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [seats, setSeats] = useState(84);

  useEffect(() => {
    const openPopup = () => {
      if (salesPopupOpen) return;
      setSeats(getSeatCount());
      setIsOpen(true);
      requestAnimationFrame(() =>
        requestAnimationFrame(() => setVisible(true))
      );
    };

    const autoOpenTimer = setTimeout(() => {
      openPopup();
    }, 1000);

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 5) {
        openPopup();
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      clearTimeout(autoOpenTimer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [salesPopupOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closePopup();
    };
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [isOpen]);

  const closePopup = () => {
    setVisible(false);
    setTimeout(() => setIsOpen(false), 200);
  };

  const openLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100000]" role="presentation">
      <button
        type="button"
        className={`absolute inset-0 border-0 transition-opacity ${visible ? "opacity-100 duration-300" : "opacity-0 duration-200"}`}
        style={{ backgroundColor: "rgba(0,0,0,0.75)" }}
        onClick={closePopup}
        aria-label="Close popup"
      />

      <div className="pointer-events-none relative flex min-h-full items-center justify-center p-3 sm:p-4">
        <div
          className={`pointer-events-auto relative z-10 max-h-[95vh] w-full max-w-[min(500px,95vw)] overflow-y-auto rounded-2xl bg-white shadow-2xl transition-all ease-out ${
            visible ? "duration-300 scale-100 opacity-100" : "duration-200 scale-[0.85] opacity-0"
          }`}
          role="dialog"
          aria-modal="true"
          aria-labelledby="exit-popup-title"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            type="button"
            onClick={closePopup}
            className="absolute right-2 top-2 z-20 rounded-full px-2 py-1 text-2xl leading-none text-gray-600 hover:bg-black/5"
            aria-label="Close"
          >
            ×
          </button>

          <div className="rounded-t-2xl bg-gradient-to-r from-red-600 to-red-800 px-5 pb-5 pt-6 text-center text-white">
            <div className="text-4xl" aria-hidden>⚠️</div>
            <h2 id="exit-popup-title" className="mt-2 font-display text-xl font-bold sm:text-2xl">Wait! Don&apos;t Miss This!</h2>
            <p className="mt-2 text-sm text-white/90 sm:text-base">You&apos;re about to leave without securing your seat</p>
          </div>

          <div className="bg-[#0F1240] px-5 py-5">
            <p className="text-center text-lg font-semibold text-gold sm:text-xl">Your Special Offer Expires In:</p>
            <div className="mt-3 flex justify-center">
              <CountdownTimer targetDate="2026-05-10T23:59:59+05:30" />
            </div>
            <p className="mt-4 text-center text-sm font-bold text-white">🔴 Only {seats} seats left at this price</p>
          </div>

          <div className="px-6 py-6">
            <ul className="space-y-2 text-sm text-ink sm:text-base">
              <li className="flex gap-2"><span className="text-gold">✅</span><span>Full day training with Ashissh Kumaar</span></li>
              <li className="flex gap-2"><span className="text-gold">✅</span><span>Lunch, Tea &amp; Stationery included</span></li>
              <li className="flex gap-2"><span className="text-gold">✅</span><span>Certificate + Advanced Remedies you won&apos;t find anywhere</span></li>
            </ul>

            <p className="mt-5 text-center text-sm font-semibold text-navy">
              🔥 Secure your seat now — select Platinum or Gold below
            </p>

            <div className="mt-4 flex flex-col gap-2 sm:flex-row">
              <button type="button" onClick={() => openLink(RAZORPAY_PLATINUM)} className="flex-1 rounded-lg border-2 border-gold py-2.5 text-sm font-bold text-gold transition hover:bg-gold/10">Platinum ₹2,100</button>
              <button type="button" onClick={() => openLink(RAZORPAY_GOLD)} className="flex-1 rounded-lg border-2 border-gold py-2.5 text-sm font-bold text-gold transition hover:bg-gold/10">Gold ₹1,580</button>
            </div>

            <button type="button" onClick={closePopup} className="mx-auto mt-5 block max-w-md text-center text-[11px] italic text-gray-500 underline-offset-2 hover:text-gray-700 hover:underline">
              No thanks, I don&apos;t want to transform my life
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
