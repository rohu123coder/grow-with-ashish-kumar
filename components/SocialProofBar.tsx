"use client";

const tickerItems = [
  "🟢 Rahul from Andheri just booked Platinum",
  "🟢 Priya from Bandra booked Gold",
  "🟢 Amit from Powai booked Platinum",
  "🟢 Sunita from Dadar booked Gold",
  "🟢 Vikram from Thane booked Platinum",
  "🟢 Meena from Borivali booked Gold",
  "🟢 Rajesh from Malad just registered",
  "🟢 Kavita from Kandivali booked Platinum",
  "🟢 Deepak from Navi Mumbai booked Gold",
  "🟢 Anjali from Goregaon booked Platinum",
  "🟢 Suresh from Chembur just secured Gold",
  "🟢 Pooja from Mulund booked Platinum",
  "🟢 Nikhil from Vile Parle booked Gold",
  "🟢 Rekha from Kurla just booked Platinum",
  "🟢 Manish from Ghatkopar booked Gold",
  "🟢 Shruti from Lokhandwala booked Platinum",
  "🟢 Arun from Juhu just registered",
  "🟢 Divya from Worli booked Gold",
  "🟢 Sanjay from Lower Parel booked Platinum",
  "🟢 Nisha from Santacruz just booked Gold",
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
