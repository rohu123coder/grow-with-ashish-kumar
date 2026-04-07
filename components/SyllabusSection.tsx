"use client";

import { courseImages } from "@/lib/courseImages";
import { scrollToPricing } from "@/lib/scroll";

const MODULES = [
  { n: 1, icon: "🏠", title: "Basics of Vastu", desc: "Core principles every Vastu practitioner must master first" },
  { n: 2, icon: "🌿", title: "Yellow & White Mustard Remedies", desc: "Powerful traditional remedies with instant modern application" },
  { n: 3, icon: "🔢", title: "Complete Numerology", desc: "Lucky Car Numbers · Mobile Numbers · Address Numerology" },
  { n: 4, icon: "🏷️", title: "Brand Building with Astro Numerology", desc: "Business name · City · Currency · Partner alphabets" },
  { n: 5, icon: "💫", title: "Advanced Astro-Vastu Remedies", desc: "Deep techniques used by top consultants across India" },
  { n: 6, icon: "🌍", title: "Land Energy Reading", desc: "Check land energy before buying, building, or investing" },
];

export function SyllabusSection() {
  return (
    <section className="relative overflow-hidden bg-white py-12 md:py-16">
      <div
        className="pointer-events-none absolute -right-24 top-20 hidden h-72 w-72 rounded-full opacity-[0.07] md:block lg:h-96 lg:w-96"
        aria-hidden
        style={{ backgroundImage: `url(${courseImages.whiteboard.src})`, backgroundSize: "cover" }}
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold">Complete Syllabus</p>
          <h2 className="mt-2 font-display text-2xl font-bold text-navy sm:text-3xl md:text-4xl">8 Hours. 6 Modules. Life-Changing Knowledge.</h2>
          <p className="mx-auto mt-3 max-w-2xl text-ink-muted">From zero to practitioner — in a single day</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {MODULES.map((m) => (
            <article key={m.n} className="rounded-xl border border-gold/25 bg-surface p-5 shadow-sm transition hover:border-gold/50 hover:shadow-md">
              <div className="flex items-start gap-3">
                <span className="text-2xl" aria-hidden>{m.icon}</span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-gold">Module {m.n}</p>
                  <h3 className="mt-1 font-semibold text-navy">{m.title}</h3>
                  <p className="mt-2 text-sm text-ink-muted">{m.desc}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <button
            id="pricing-scroll-cta"
            type="button"
            onClick={() => scrollToPricing()}
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-gold to-gold-light px-6 py-3.5 text-sm font-bold text-navy shadow-md transition hover:brightness-105"
          >
            Reserve Your Seat — Limited Availability <span aria-hidden>→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
