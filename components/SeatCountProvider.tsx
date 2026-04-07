"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

const STORAGE_KEY = "hc_seats_remaining";

function randomBetween(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function clamp(n: number, lo: number, hi: number) {
  return Math.min(hi, Math.max(lo, n));
}

type SeatCountContextValue = {
  count: number | null;
};

const SeatCountContext = createContext<SeatCountContextValue>({ count: null });

export function SeatCountProvider({ children }: { children: ReactNode }) {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    let current: number;
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw === null) {
      current = randomBetween(84, 91);
    } else {
      const parsed = Number.parseInt(raw, 10);
      current = Number.isFinite(parsed)
        ? clamp(parsed, 12, 91)
        : randomBetween(84, 91);
    }

    const drop = randomBetween(1, 3);
    current = clamp(current - drop, 12, 91);
    window.localStorage.setItem(STORAGE_KEY, String(current));
    setCount(current);
  }, []);

  const value = useMemo(() => ({ count }), [count]);

  return (
    <SeatCountContext.Provider value={value}>
      {children}
    </SeatCountContext.Provider>
  );
}

export function useSeatCount() {
  return useContext(SeatCountContext).count;
}
