"use client";

import { SeatCounter } from "@/components/SeatCounter";
import { RAZORPAY_GOLD, RAZORPAY_PLATINUM } from "@/lib/links";

export function PricingSection() {
  const openLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="pricing" className="scroll-mt-[52px] bg-navy py-12 md:scroll-mt-11 md:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl md:text-4xl">Choose Your Seat</h2>
          <p className="mt-3 text-gold">Prices increase as seats fill — book at lowest price now</p>
        </div>

        <div className="mt-8 flex justify-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white">
            <span aria-hidden>🔴</span>
            <SeatCounter labelStyle="live" className="text-white" />
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:items-stretch">
          <div className="flex flex-col rounded-2xl border-2 border-gold bg-white p-6 shadow-xl md:p-8">
            <p className="text-xs font-bold uppercase tracking-wider text-ink-muted">Standard</p>
            <p className="mt-3 font-display text-4xl font-bold text-navy">₹1,580</p>
            <p className="text-sm text-ink-muted"><span className="line-through">₹2,500</span></p>
            <p className="mt-1 text-sm font-semibold text-success">You save ₹920</p>
            <div className="my-6 h-px bg-gold/30" />
            <ul className="flex-1 space-y-3 text-sm text-ink">
              {[
                "Full Day Access (8 AM – 4 PM)",
                "Lunch + Tea Included",
                "Course Stationery Kit",
              ].map((line) => (
                <li key={line} className="flex gap-2"><span className="text-success">✅</span><span>{line}</span></li>
              ))}
            </ul>
            <button
              type="button"
              onClick={() => openLink(RAZORPAY_GOLD)}
              className="mt-8 w-full rounded-lg border-2 border-gold py-3.5 text-sm font-bold text-gold transition hover:bg-gold/10"
            >
              Book Gold Seat →
            </button>
          </div>

          <div className="relative flex flex-col rounded-2xl border-2 border-gold bg-white p-0 shadow-[0_0_40px_-10px_rgba(201,168,76,0.65)] md:p-0">
            <div className="absolute -top-3 left-1/2 z-10 -translate-x-1/2 rounded-full bg-gradient-to-r from-gold to-gold-light px-4 py-1 text-xs font-bold text-navy shadow">
              MOST POPULAR
            </div>
            <div className="rounded-t-2xl bg-gradient-to-r from-gold via-gold-light to-gold px-6 pb-6 pt-8 md:px-8">
              <p className="text-xs font-bold uppercase tracking-wider text-navy/80">Platinum</p>
              <p className="mt-2 font-display text-4xl font-bold text-navy">₹2,100</p>
              <p className="text-sm text-navy/80"><span className="line-through">₹3,500</span></p>
              <p className="mt-1 text-sm font-bold text-navy">You save ₹1,400</p>
            </div>
            <div className="flex flex-1 flex-col px-6 pb-6 pt-4 md:px-8 md:pb-8">
              <p className="text-sm font-semibold text-navy">Everything in Gold PLUS:</p>
              <ul className="mt-4 flex-1 space-y-3 text-sm text-ink">
                {[
                  "Priority seating in the first 5 rows only — 80 Platinum seats in this category",
                  "Priority Q&A with Ashissh Kumaar",
                  "Exclusive Bonus Digital Resource PDF",
                  "Early Entry Access",
                ].map((line) => (
                  <li key={line} className="flex gap-2"><span className="text-success">✅</span><span>{line}</span></li>
                ))}
              </ul>
              <button
                type="button"
                onClick={() => openLink(RAZORPAY_PLATINUM)}
                className="mt-8 w-full rounded-lg bg-gradient-to-r from-gold to-gold-light py-4 text-base font-bold text-navy shadow-md transition hover:brightness-105"
              >
                <span aria-hidden>🔥</span> Book Platinum Seat →
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 space-y-2 text-center text-sm text-white/90">
          <p>💬 Group Bookings (5+ people): 7278822228 for special rates</p>
          <p>🔒 Secure Registration via WhatsApp | Instant Confirmation</p>
          <p className="text-white/70">⚠️ Seats are non-transferable and non-refundable</p>
        </div>
      </div>
    </section>
  );
}
