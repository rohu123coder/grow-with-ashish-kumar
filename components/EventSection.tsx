import { WHATSAPP_ENQUIRY } from "@/lib/links";

export function EventSection() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center font-display text-2xl font-bold text-navy sm:text-3xl md:text-4xl">
          Event Details
        </h2>

        <div className="mt-10 rounded-2xl border border-gold/25 bg-surface p-5 shadow-sm md:p-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <ul className="space-y-4 text-sm text-ink sm:text-base">
              <li>
                <span className="font-semibold text-navy">📅 Date:</span> Sunday, 24 May 2026
              </li>
              <li>
                <span className="font-semibold text-navy">⏰ Time:</span> 8:00 AM – 4:00 PM (Full Day)
              </li>
              <li>
                <span className="font-semibold text-navy">📍 Venue:</span> Bal Gandharva Rang Mandir, Sheila Gopal Raheja Auditorium
                <br />
                505, Bandra West, Mumbai – 400050
              </li>
              <li>
                <span className="font-semibold text-navy">💬 Enquiries:</span> 7278822228
                <a
                  href={WHATSAPP_ENQUIRY}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-3 font-semibold text-gold underline-offset-2 hover:underline"
                >
                  Chat on WhatsApp
                </a>
              </li>
            </ul>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {[
                { icon: "🍽️", label: "Lunch Provided" },
                { icon: "☕", label: "Tea & Refreshments" },
                { icon: "📝", label: "Course Stationery" },
                { icon: "💡", label: "Expert-Led Live Session" },
              ].map((f) => (
                <div
                  key={f.label}
                  className="rounded-xl border border-gold/20 bg-white px-3 py-4 text-center text-sm font-medium text-navy shadow-sm"
                >
                  <span className="text-xl" aria-hidden>
                    {f.icon}
                  </span>
                  <p className="mt-2">{f.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-950">
            <p>
              <span aria-hidden>⚠️</span> No recording will be provided for this session. This is a live, in-person only experience.
            </p>
          </div>
        </div>

        <div className="mt-8 overflow-hidden rounded-xl ring-1 ring-gold/20">
          <iframe
            title="Bal Gandharva Rang Mandir, Bandra West"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.099!2d72.8295!3d19.0544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8d6f7e0f4b5%3A0x1234!2sBal%20Gandharva%20Rang%20Mandir!5e0!3m2!1sen!2sin"
            width="100%"
            height={300}
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
