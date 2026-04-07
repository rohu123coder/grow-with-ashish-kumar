"use client";

import { useSeatCount } from "@/components/SeatCountProvider";

type SeatCounterProps = {
  className?: string;
  labelStyle?: "live" | "only";
};

export function SeatCounter({
  className = "",
  labelStyle = "only",
}: SeatCounterProps) {
  const count = useSeatCount();

  if (count === null) {
    return (
      <span className={className}>
        <span className="inline-block h-4 w-24 animate-pulse rounded bg-white/20" />
      </span>
    );
  }

  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <span className="relative flex h-2.5 w-2.5 shrink-0" aria-hidden>
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-urgency opacity-60" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-urgency pulse-dot" />
      </span>
      {labelStyle === "live" ? (
        <>
          <span className="font-semibold text-urgency">LIVE:</span>
          <span className="font-bold tabular-nums">{count} seats remaining</span>
          <span className="hidden text-ink-muted sm:inline">— filling fast</span>
        </>
      ) : (
        <span className="font-bold tabular-nums">Only {count} seats remaining</span>
      )}
    </span>
  );
}
