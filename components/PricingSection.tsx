"use client";

import { SeatCounter } from "@/components/SeatCounter";
import { BOOKING_PRICE_INR, RAZORPAY_BOOKING } from "@/lib/links";

export function PricingSection() {
  const openBooking = () => {
    window.open(RAZORPAY_BOOKING, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="pricing" className="scroll-mt-[52px] bg-navy py-12 md:scroll-mt-11 md:py-20">
      <div className="mx-auto max-w-lg px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl md:text-4xl">
            Book Your Seat
          </h2>
          <p className="mt-3 text-gold">Limited seats — secure your spot now</p>
        </div>

        <div className="mt-8 flex justify-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white">
            <span aria-hidden>🔴</span>
            <SeatCounter labelStyle="live" className="text-white" />
          </div>
        </div>

        <div className="mt-10">
          <div className="relative flex flex-col rounded-2xl border-2 border-gold bg-white p-6 shadow-[0_0_40px_-10px_rgba(201,168,76,0.65)] md:p-8">
            <div className="absolute -top-3 left-1/2 z-10 -translate-x-1/2 rounded-full bg-gradient-to-r from-gold to-gold-light px-4 py-1 text-xs font-bold text-navy shadow">
              1-DAY FOUNDATION COURSE
            </div>
            <p className="mt-4 text-center text-xs font-bold uppercase tracking-wider text-ink-muted">
              Mumbai · 24 May 2026
            </p>
            <p className="mt-3 text-center font-display text-5xl font-bold text-navy">
              ₹{BOOKING_PRICE_INR}
            </p>
            <p className="text-center text-sm text-ink-muted">per seat · full day access</p>
            <div className="my-6 h-px bg-gold/30" />
            <ul className="space-y-3 text-sm text-ink">
              {[
                "Full Day Access (8 AM – 4 PM)",
                "Complete Astro-Vastu syllabus (7 modules)",
                "Course Stationery Kit",
                "Live training with Ashissh Kumaar",
              ].map((line) => (
                <li key={line} className="flex gap-2">
                  <span className="text-success">✅</span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={openBooking}
              className="mt-8 w-full rounded-lg bg-gradient-to-r from-gold to-gold-light py-4 text-base font-bold text-navy shadow-md transition hover:brightness-105"
            >
              <span aria-hidden>🔥</span> Book Your Seat Now →
            </button>
          </div>
        </div>

        <div className="mt-10 space-y-2 text-center text-sm text-white/90">
          <p>💬 Group Bookings (5+ people): 7278822228 for special rates</p>
          <p>🔒 Secure payment via Razorpay | Instant confirmation</p>
          <p className="text-white/70">⚠️ Seats are non-transferable and non-refundable</p>
        </div>
      </div>
    </section>
  );
}
