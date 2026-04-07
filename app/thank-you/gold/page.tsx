export default function ThankYouGoldPage() {
  return (
    <main className="min-h-screen bg-[#0F1240] px-4 py-10 text-white">
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-2xl items-center justify-center">
        <section className="w-full rounded-2xl border border-gold/35 bg-white/5 p-6 text-center shadow-2xl backdrop-blur-sm sm:p-8">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 text-4xl text-emerald-400 ring-2 ring-emerald-400/40">
            ✓
          </div>

          <p className="mx-auto mt-4 inline-flex rounded-full border border-gold/40 bg-gold/15 px-3 py-1 text-xs font-semibold text-gold-light">
            Gold Member 🥇
          </p>

          <h1 className="mt-4 font-playfair text-3xl font-bold leading-tight text-white sm:text-4xl">
            Payment Successful! You&apos;re In 🎉
          </h1>
          <p className="mt-3 text-sm text-white/80 sm:text-base">
            Welcome to the Astro-Vastu Mastery Course family
          </p>

          <div className="mt-6 rounded-xl border border-gold/25 bg-[#12174a] p-4 text-left shadow-lg sm:p-5">
            <h2 className="mb-3 font-semibold text-gold-light">Event Details</h2>
            <ul className="space-y-2 text-sm text-white/90 sm:text-base">
              <li>📅 Date: Sunday, 24 May 2026</li>
              <li>⏰ Time: 8:00 AM – 4:00 PM (Full Day)</li>
              <li>
                📍 Venue: Bal Gandharva Rang Mandir, Sheila Gopal Raheja Auditorium,
                505, Bandra West, Mumbai – 400050
              </li>
              <li>📞 Enquiries: 7278822228</li>
            </ul>
          </div>

          <a
            href="https://chat.whatsapp.com/FEyCB2JOwHwIuudztYPHpE"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-[#25D366] px-5 py-3.5 text-base font-bold text-white shadow-lg transition hover:brightness-105"
          >
            Join Gold WhatsApp Group →
          </a>
          <p className="mt-3 text-xs text-white/70 sm:text-sm">
            Join our exclusive group for updates, reminders &amp; pre-course material
          </p>
        </section>
      </div>
    </main>
  );
}
