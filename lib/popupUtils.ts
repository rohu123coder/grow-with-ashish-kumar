const SEATS_KEY = "hc_seats_remaining";

export function getSeatCount(): number {
  if (typeof window === "undefined") return 84;
  const stored = window.localStorage.getItem(SEATS_KEY);
  if (!stored) {
    const initial = Math.floor(Math.random() * 8) + 84;
    window.localStorage.setItem(SEATS_KEY, initial.toString());
    return initial;
  }
  return parseInt(stored, 10) || 84;
}

export function decrementSeats(): number {
  const current = getSeatCount();
  const decrement = Math.floor(Math.random() * 3) + 1;
  const newCount = Math.max(12, current - decrement);
  window.localStorage.setItem(SEATS_KEY, newCount.toString());
  return newCount;
}
