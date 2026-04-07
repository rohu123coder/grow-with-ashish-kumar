const ITEMS = [
  {
    quote:
      "Ashish ji ne hamari factory aur ghar dono ka vastu kiya. Uske baad personal aur financial life completely change ho gayi.",
    who: "Workshop Participant, Indore",
  },
  {
    quote:
      "Vastu plus astrology ka combination bahut powerful hai. Itna practical knowledge pehle kabhi nahi mila.",
    who: "Student, Mumbai Batch",
  },
  {
    quote:
      "Simple remedies jo actually kaam karti hain. Ashish ji ka approach bilkul alag hai — modern aur practical.",
    who: "Attendee, Delhi Workshop",
  },
];

export function TestimonialsSection() {
  return (
    <section className="bg-surface py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center font-display text-2xl font-bold text-navy sm:text-3xl md:text-4xl">
          What Students Say
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {ITEMS.map((t) => (
            <article
              key={t.who}
              className="rounded-xl border border-gold/15 border-l-4 border-l-gold bg-white p-6 shadow-sm"
            >
              <div className="text-gold" aria-hidden>
                ★★★★★
              </div>
              <p className="mt-3 text-sm leading-relaxed text-ink sm:text-base">
                &quot;{t.quote}&quot;
              </p>
              <p className="mt-4 text-sm font-semibold text-ink-muted">
                — {t.who}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
