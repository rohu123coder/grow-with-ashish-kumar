"use client";

import Image from "next/image";
import { SeatCounter } from "@/components/SeatCounter";
import { RAZORPAY_GOLD, RAZORPAY_PLATINUM } from "@/lib/links";

const HERO_IMAGE = "/images/ashish-stage2.png";

export function HeroSection() {
  const openLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="hero" className="relative overflow-hidden bg-navy pb-10 pt-10 md:pb-16 md:pt-14">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_80%_-20%,rgba(201,168,76,0.2),transparent_55%),radial-gradient(ellipse_60%_40%_at_0%_100%,rgba(15,18,64,0.9),transparent_50%)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="order-2 max-w-xl lg:order-1">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/50 bg-gold/15 px-3 py-1 text-xs font-semibold text-gold-light sm:text-sm">
              <span aria-hidden>🏆</span> Global Icon Award 2023 Winner
            </p>
            <h1 className="font-display text-3xl font-bold leading-[1.15] text-white sm:text-4xl md:text-5xl lg:text-[2.75rem] xl:text-5xl">
              <span className="block sm:inline sm:whitespace-normal">Master The Ancient Science of </span>
              <span className="block text-gold sm:inline">Astro Vastu</span>
              <span className="mt-2 block text-white">in Just 1 Day</span>
            </h1>
            <p className="mt-4 text-base text-white/75 sm:text-lg">
              India&apos;s Most Practical Foundation Course — from Vastu basics to advanced numerology remedies
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full border border-gold/60 bg-white/5 px-3 py-1.5 text-xs font-medium text-gold-light backdrop-blur-sm sm:text-sm">📅 24 May 2026</span>
              <span className="rounded-full border border-gold/60 bg-white/5 px-3 py-1.5 text-xs font-medium text-gold-light backdrop-blur-sm sm:text-sm">⏰ 8 AM – 4 PM</span>
              <span className="rounded-full border border-gold/60 bg-white/5 px-3 py-1.5 text-xs font-medium text-gold-light backdrop-blur-sm sm:text-sm">📍 Bandra West, Mumbai</span>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <button
                type="button"
                onClick={() => openLink(RAZORPAY_PLATINUM)}
                className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-gold to-gold-light px-5 py-3.5 text-sm font-bold text-navy shadow-lg transition hover:brightness-105 sm:text-base"
              >
                <span aria-hidden>🔥</span>&nbsp;Book Platinum — ₹2,100
              </button>
              <button
                type="button"
                onClick={() => openLink(RAZORPAY_GOLD)}
                className="inline-flex items-center justify-center rounded-lg border-2 border-gold bg-transparent px-5 py-3.5 text-sm font-semibold text-gold-light transition hover:bg-white/10 sm:text-base"
              >
                Book Gold — ₹1,580
              </button>
            </div>

            <p className="mt-4 flex flex-wrap gap-x-3 gap-y-1 text-xs text-white/70 sm:text-sm">
              <span>✅ Lunch Included</span>
              <span>✅ Stationery</span>
              <span>❌ No Recording</span>
            </p>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-[0_25px_60px_-12px_rgba(201,168,76,0.35)] ring-2 ring-gold/40 sm:aspect-[3/4]">
                <Image
                  src={HERO_IMAGE}
                  alt="Ashissh Kumaar teaching on stage with large screen behind him"
                  fill
                  className="object-cover object-center"
                  style={{ mixBlendMode: "lighten" }}
                  sizes="(max-width: 1024px) 100vw, min(560px, 50vw)"
                  priority
                />
              </div>

              <div className="absolute right-3 top-3 rounded-full border border-gold/50 bg-navy/90 px-3 py-1.5 text-xs font-semibold text-gold-light shadow-lg backdrop-blur-sm sm:text-sm">
                10000+ Lives Transformed <span aria-hidden>🌟</span>
              </div>

              <div className="absolute bottom-3 left-3 right-3 sm:left-auto sm:w-auto">
                <div className="rounded-xl border border-gold/40 bg-navy/95 px-3 py-2 text-xs shadow-xl backdrop-blur-sm sm:text-sm sm:ml-auto sm:max-w-xs">
                  <div className="font-semibold text-gold-light">
                    <span aria-hidden>🔴</span> Live Seat Counter
                  </div>
                  <SeatCounter className="mt-1 text-white" />
                </div>
              </div>

              <div className="pointer-events-none absolute bottom-28 left-3 hidden max-w-[220px] rounded-xl border border-gold/30 bg-navy/90 p-3 text-xs text-white shadow-lg backdrop-blur-sm sm:block md:bottom-32">
                <div className="text-gold" aria-hidden>★★★★★</div>
                <p className="mt-1 font-medium text-white/95">&quot;Vastu ne meri factory aur ghar dono badal diye&quot;</p>
                <p className="mt-1 text-white/65">— Satisfied Student, Indore</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mx-auto mt-8 max-w-6xl px-4 sm:hidden">
        <div className="rounded-xl border border-gold/35 bg-white/10 p-3 text-sm text-white shadow-md backdrop-blur-sm">
          <div className="text-gold" aria-hidden>★★★★★</div>
          <p className="mt-1 font-medium text-white">&quot;Vastu ne meri factory aur ghar dono badal diye&quot;</p>
          <p className="mt-1 text-xs text-white/65">— Satisfied Student, Indore</p>
        </div>
      </div>
    </section>
  );
}
