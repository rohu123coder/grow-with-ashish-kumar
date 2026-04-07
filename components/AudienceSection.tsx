"use client";

import { courseImages } from "@/lib/courseImages";
import { scrollToPricing } from "@/lib/scroll";

const YES = [
  "Vastu consultants wanting structured, certifiable knowledge",
  "Astrology practitioners adding Vastu to their skillset",
  "Real estate agents & property investors",
  "Business owners wanting to align space with success",
  "Homeowners wanting to apply remedies themselves",
  "Anyone beginning their Astro-Vastu journey",
];

const NO = [
  "You want only recorded/online content",
  "You want pure theory with no practical application",
  "You are not willing to invest 1 full day",
];

export function AudienceSection() {
  return (
    <section className="relative overflow-hidden bg-surface py-12 md:py-16">
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 overflow-hidden opacity-[0.06]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={courseImages.casual.src}
          alt=""
          width={courseImages.casual.width}
          height={courseImages.casual.height}
          className="h-full w-full object-cover object-top"
          aria-hidden
        />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center font-display text-2xl font-bold text-navy sm:text-3xl md:text-4xl">Is This Course For You?</h2>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-success/25 bg-emerald-50/80 p-5 shadow-sm backdrop-blur-sm md:p-6">
            <h3 className="text-lg font-bold text-success">✅ YES — THIS IS FOR YOU</h3>
            <ul className="mt-4 space-y-2 text-sm text-ink sm:text-base">
              {YES.map((item) => (
                <li key={item} className="flex gap-2"><span className="text-success">•</span><span>{item}</span></li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-urgency/20 bg-red-50/60 p-5 shadow-sm backdrop-blur-sm md:p-6">
            <h3 className="text-lg font-bold text-urgency/90">❌ SKIP THIS IF</h3>
            <ul className="mt-4 space-y-2 text-sm text-ink-muted sm:text-base">
              {NO.map((item) => (
                <li key={item} className="flex gap-2"><span aria-hidden>•</span><span>{item}</span></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="mx-auto max-w-2xl text-base font-bold text-navy sm:text-lg">
            If even 1 point in the YES list resonates — your seat is waiting.
          </p>
          <button
            type="button"
            onClick={() => scrollToPricing()}
            className="mt-6 inline-flex items-center gap-2 rounded-lg border-2 border-gold bg-white px-6 py-3.5 text-sm font-bold text-gold shadow-sm transition hover:bg-gold/10"
          >
            Book My Seat Now <span aria-hidden>→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
