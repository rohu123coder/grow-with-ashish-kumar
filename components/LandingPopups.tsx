"use client";

import { ExitPopup } from "@/components/ExitPopup";
import { SalesPopup } from "@/components/SalesPopup";

export function LandingPopups() {
  return (
    <>
      <SalesPopup />
      <ExitPopup salesPopupOpen={false} />
    </>
  );
}
