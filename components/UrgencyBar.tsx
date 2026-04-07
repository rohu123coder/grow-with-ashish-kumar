"use client";

import CountdownTimer from "@/components/CountdownTimer";
import { WHATSAPP_ENQUIRY } from "@/lib/links";

export function UrgencyBar() {
  return (
    <div
      className="sticky top-0 z-[9999] flex h-11 w-full items-center justify-between gap-2 border-b border-black/15 bg-[#C0392B] px-2 text-white shadow-md sm:px-4"
      role="banner"
    >
      <p className="hidden min-w-0 flex-1 truncate text-xs font-medium text-white lg:block lg:text-sm">
        <span aria-hidden>⚡</span> Early Bird Closing Soon — Price increases after May 10
      </p>
      <div className="flex min-w-0 flex-1 justify-center text-white lg:flex-none lg:flex-initial">
        <CountdownTimer targetDate="2026-05-10T23:59:59+05:30" />
      </div>
      <div className="flex shrink-0 items-center gap-2 text-xs sm:text-sm">
        <a
          href={WHATSAPP_ENQUIRY}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-white hover:underline"
        >
          💬 Chat on WhatsApp
        </a>
        <span className="hidden sm:inline text-white/90">7278822228</span>
      </div>
    </div>
  );
}
