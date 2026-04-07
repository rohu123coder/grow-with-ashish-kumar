"use client";

import { useState } from "react";
import { courseImages } from "@/lib/courseImages";

const FAQS = [
  {
    q: "Is recording provided?",
    a: "No. This is a live in-person only event. No recording will be shared post-session.",
  },
  {
    q: "Is prior knowledge of Vastu required?",
    a: "Absolutely not. This is a Foundation Course designed for complete beginners.",
  },
  {
    q: "What language will be used?",
    a: "The course is conducted in Hindi with English terminology for technical concepts.",
  },
  {
    q: "What is the refund policy?",
    a: "Seats once booked are non-refundable. Transfer to another person is allowed before 3 days of the event.",
  },
  {
    q: "What should I bring?",
    a: "Just yourself and enthusiasm. Stationery is fully provided.",
  },
  {
    q: "How do I register?",
    a: "Click any 'Book Seat' button on this page to connect on WhatsApp. Our team will guide you through payment and confirmation.",
  },
];

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden bg-white py-12 md:py-16">
      <div className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 overflow-hidden opacity-[0.06] md:h-80 md:w-80">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={courseImages.podium.src}
          alt=""
          width={courseImages.podium.width}
          height={courseImages.podium.height}
          className="h-full w-full object-cover"
          aria-hidden
        />
      </div>
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="text-center font-display text-2xl font-bold text-navy sm:text-3xl md:text-4xl">
          Frequently Asked Questions
        </h2>
        <div className="mt-10 space-y-3">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className="overflow-hidden rounded-xl border border-gold/20 bg-surface shadow-sm"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left text-sm font-semibold text-navy transition hover:bg-gold/5 sm:text-base"
                >
                  <span>{item.q}</span>
                  <span
                    className={`text-gold transition-transform ${isOpen ? "rotate-180" : ""}`}
                    aria-hidden
                  >
                    ▼
                  </span>
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <p className="border-t border-gold/10 px-4 py-3 text-sm leading-relaxed text-ink-muted">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
