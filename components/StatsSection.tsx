const STATS = [
  { icon: "🎓", value: "5000+", label: "Students Trained" },
  { icon: "🏙️", value: "50+", label: "Cities Covered" },
  { icon: "🏆", value: "1", label: "Global Icon Award 2023" },
  { icon: "⭐", value: "4.9/5", label: "Average Rating" },
];

export function StatsSection() {
  return (
    <section className="bg-white py-10 md:py-14">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-4 sm:px-6 md:grid-cols-4 md:gap-6">
        {STATS.map((s) => (
          <div
            key={s.label}
            className="rounded-xl border border-gold/15 bg-surface px-4 py-5 text-center shadow-sm transition hover:border-gold/40"
          >
            <div className="text-2xl" aria-hidden>
              {s.icon}
            </div>
            <p className="mt-2 font-display text-2xl font-bold text-navy md:text-3xl">
              {s.value}
            </p>
            <p className="mt-1 text-sm text-ink-muted">{s.label}</p>
            <div className="mx-auto mt-4 h-px w-12 bg-gold/70" />
          </div>
        ))}
      </div>
    </section>
  );
}
