export function Footer() {
  return (
    <footer className="border-t border-gold/20 bg-surface py-10">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <p className="font-display text-xl font-bold text-gold sm:text-2xl">Helping Coaach</p>
        <p className="mt-2 text-sm text-ink-muted">Certified Astro-Vastu Consultancy by Ashissh Kumaar</p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-sm font-medium text-navy">
          <a href="https://helpingcoaach.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold hover:underline">helpingcoaach.com</a>
          <span className="text-ink-muted" aria-hidden>|</span>
          <a href="https://www.instagram.com/ashisshkumaar/" target="_blank" rel="noopener noreferrer" className="hover:text-gold hover:underline">@ashisshkumaar</a>
          <span className="text-ink-muted" aria-hidden>|</span>
          <span>7278822228</span>
        </div>
        <p className="mt-6 text-xs text-ink-muted">© 2026 Helping Coaach. All rights reserved.</p>
        <p className="mt-2 text-xs text-ink-muted">1 Day Astro Vastu Foundation Course — Mumbai, 24 May 2026</p>
      </div>
    </footer>
  );
}
