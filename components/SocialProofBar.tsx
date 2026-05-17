"use client";

const tickerItems = [
  "🟢 Rahul from Andheri just booked a seat",
  "🟢 Priya from Bandra secured her seat",
  "🟢 Amit from Powai just registered",
  "🟢 Sunita from Dadar booked her seat",
  "🟢 Vikram from Thane just booked",
  "🟢 Meena from Borivali secured a seat",
  "🟢 Rajesh from Malad just registered",
  "🟢 Kavita from Kandivali booked a seat",
  "🟢 Deepak from Navi Mumbai just joined",
  "🟢 Anjali from Goregaon secured her seat",
  "🟢 Suresh from Chembur just booked",
  "🟢 Pooja from Mulund registered",
  "🟢 Nikhil from Vile Parle booked a seat",
  "🟢 Rekha from Kurla just secured her seat",
  "🟢 Manish from Ghatkopar booked",
  "🟢 Shruti from Lokhandwala just registered",
  "🟢 Arun from Juhu secured his seat",
  "🟢 Divya from Worli just booked",
  "🟢 Sanjay from Lower Parel registered",
  "🟢 Nisha from Santacruz booked her seat",
];

export function SocialProofBar() {
  const line = tickerItems.join(" · ") + " · ";

  return (
    <section
      className="border-y-2 border-gold/25 bg-navy py-3 text-gold shadow-[inset_0_1px_0_rgba(240,212,122,0.12)]"
      aria-label="Recent bookings"
      style={{ ["--marquee-duration" as string]: "30s" }}
    >
      <div className="relative overflow-hidden">
        <div className="marquee whitespace-nowrap text-sm font-semibold tracking-wide text-gold">
          <span className="pr-16">{line}</span>
          <span className="pr-16" aria-hidden>
            {line}
          </span>
        </div>
      </div>
    </section>
  );
}
