"use client";

import CountdownTimer from "@/components/CountdownTimer";
import { SeatCounter } from "@/components/SeatCounter";
import { RAZORPAY_GOLD, RAZORPAY_PLATINUM, WHATSAPP_ENQUIRY } from "@/lib/links";

export function FinalCTASection() {
  const openLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="bg-navy py-14 md:py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h2 className="font-display text-2xl font-bold text-gold sm:text-3xl md:text-4xl">
          Your Astro Vastu Journey Begins on 24 May
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-white/90 sm:text-lg">
          Join Ashissh Kumaar and transform how you see spaces, numbers, and energy — forever.
        </p>

        <div className="mt-10 flex justify-center">
          <CountdownTimer targetDate="2026-05-10T23:59:59+05:30" />
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <button
            type="button"
            onClick={() => openLink(RAZORPAY_PLATINUM)}
            className="inline-flex w-full max-w-xs items-center justify-center rounded-lg bg-gradient-to-r from-gold to-gold-light px-6 py-4 text-base font-bold text-navy shadow-lg transition hover:brightness-105 sm:w-auto"
          >
            <span aria-hidden>🔥</span>&nbsp;Book Platinum — ₹2,100
          </button>
          <button
            type="button"
            onClick={() => openLink(RAZORPAY_GOLD)}
            className="inline-flex w-full max-w-xs items-center justify-center rounded-lg border-2 border-gold px-6 py-4 text-base font-bold text-gold transition hover:bg-white/5 sm:w-auto"
          >
            Book Gold — ₹1,580
          </button>
        </div>

        <div className="mt-10 flex items-center justify-center gap-3 text-lg font-bold text-white sm:text-2xl">
          <span>7278822228</span>
          <a
            href={WHATSAPP_ENQUIRY}
            target="_blank"
            rel="noopener noreferrer"
            className="text-base font-semibold text-gold underline-offset-2 hover:underline"
          >
            💬 Chat on WhatsApp
          </a>
        </div>

        <p className="mx-auto mt-6 max-w-xl text-sm font-semibold text-urgency sm:text-base">
          ⚠️ <SeatCounter className="inline-flex font-semibold" /> · No recording · Live only · Prices go up May 10
        </p>
      </div>
    </section>
  );
}
