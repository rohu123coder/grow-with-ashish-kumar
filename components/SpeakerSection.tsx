export function SpeakerSection() {
  return (
    <section className="border-t border-gold/20 bg-surface py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="relative mx-auto max-w-md lg:mx-0">
            <div className="overflow-hidden rounded-xl shadow-[0_20px_50px_-15px_rgba(201,168,76,0.35)] ring-1 ring-gold/20">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/ashish-stage2.jpeg"
                alt="Ashissh Kumaar in formal black bandhgala jacket"
                className="h-auto w-full object-cover"
                decoding="async"
              />
            </div>
            <div className="absolute bottom-4 right-4 rounded-full border border-gold bg-gradient-to-r from-gold to-gold-light px-4 py-2 text-xs font-bold text-navy shadow-lg sm:text-sm">
              <span aria-hidden>🏆</span> Global Icon Award 2023
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-gold">
              Your Guide
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold text-navy sm:text-4xl">
              Ashissh Kumaar
            </h2>
            <p className="mt-2 font-medium text-gold">
              India&apos;s #1 Certified Astro-Vastu Consultant
            </p>
            <p className="mt-3 inline-block rounded-full border border-gold/40 bg-white px-3 py-1 text-sm font-semibold text-navy">
              Founder — Helping Coaach
            </p>

            <ul className="mt-6 space-y-3 text-ink-muted">
              {[
                "Certified Astro-Vastu Consultant with years of expertise",
                "Winner — Global Icon Award 2023",
                "10000+ people trained across 50+ cities",
                "Specializes in no-demolition Vastu consultancy",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <blockquote className="mt-8 border-l-4 border-gold bg-gold/5 px-4 py-3 text-sm italic text-navy sm:text-base">
              &quot;Vastu is not superstition — it is the science of energy and
              space. Once you understand it, everything in your life
              changes.&quot;
              <footer className="mt-2 text-sm font-semibold not-italic text-gold">
                — Ashissh Kumaar
              </footer>
            </blockquote>

            <div className="mt-6 flex flex-wrap gap-4 text-sm text-ink-muted">
              <a
                href="https://helpingcoaach.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-navy underline-offset-4 hover:text-gold hover:underline"
              >
                🌐 helpingcoaach.com
              </a>
              <span className="hidden sm:inline" aria-hidden>
                |
              </span>
              <a
                href="https://instagram.com/ashisshkumaar"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-navy underline-offset-4 hover:text-gold hover:underline"
              >
                📸 @ashisshkumaar
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
