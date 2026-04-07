"use client";

import { useEffect, useState } from "react";

const CLOSED_KEY = "hc_popup_closed";
const TWELVE_H = 12 * 60 * 60 * 1000;

const LIVE_NOTIFICATIONS = [
  "Rahul V. from Andheri just booked Platinum",
  "Priya S. from Bandra booked Gold seat",
  "Amit K. from Powai joined the Mumbai batch",
  "Sunita R. from Dadar just registered",
  "Vikram P. from Thane booked Platinum",
  "Meena T. from Borivali booked Gold",
  "Rajesh M. from Malad secured his seat",
  "Kavita N. from Kandivali booked Platinum",
  "Deepak J. from Navi Mumbai booked Gold",
  "Anjali G. from Goregaon just registered",
  "Suresh B. from Chembur booked Gold",
  "Pooja L. from Mulund booked Platinum",
  "Nikhil A. from Vile Parle booked Gold",
  "Rekha D. from Kurla just booked Platinum",
  "Manish C. from Ghatkopar booked Gold",
  "Shruti P. from Lokhandwala booked Platinum",
  "Arun S. from Juhu just registered",
  "Divya K. from Worli booked Gold",
  "Sanjay R. from Lower Parel booked Platinum",
  "Nisha M. from Santacruz booked Gold",
];

export function SalesPopup() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const raw = localStorage.getItem(CLOSED_KEY);
    if (raw) {
      const ts = parseInt(raw, 10);
      if (!Number.isNaN(ts) && Date.now() - ts < TWELVE_H) return;
    }

    setOpen(true);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setVisible(true));
    });
  }, []);

  useEffect(() => {
    if (!open) return;
    const timer = window.setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % LIVE_NOTIFICATIONS.length);
    }, 3200);
    return () => window.clearInterval(timer);
  }, [open]);

  const handleClose = () => {
    setVisible(false);
    localStorage.setItem(CLOSED_KEY, String(Date.now()));
    setTimeout(() => setOpen(false), 220);
  };

  if (!open) return null;

  return (
    <div
      className={`fixed z-[99999] w-[calc(100%-32px)] md:w-[320px] md:max-w-[320px] rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.25)] transition-all duration-300 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-[100px] opacity-0"
      } left-4 bottom-6 md:left-6 md:bottom-6 max-md:left-1/2 max-md:-translate-x-1/2 border border-gold/20 bg-[#12183f]/95 backdrop-blur-sm`}
      role="dialog"
      aria-modal="false"
      aria-label="Live seat booking updates"
    >
      <button
        type="button"
        onClick={handleClose}
        className="absolute right-2 top-1 z-20 rounded p-1 text-lg text-white/60 hover:text-white"
        aria-label="Close"
      >
        ×
      </button>

      <div className="px-4 py-3">
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-300">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          Live Booking Update
        </div>
        <p className="mt-2 pr-5 text-sm font-medium leading-snug text-white">
          {LIVE_NOTIFICATIONS[activeIdx]}
        </p>
        <div className="mt-2 flex items-center justify-between text-[11px] text-white/65">
          <span>Mumbai</span>
          <span>just now</span>
        </div>
      </div>
    </div>
  );
}
