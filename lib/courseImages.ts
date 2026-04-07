import type { StaticImageData } from "next/image";

import casual from "../public/images/ashish_casual.jpeg";
import formal from "../public/images/ashish-formal.jpeg";
import podium from "../public/images/ashish-podium.jpeg";
import stage from "../public/images/ashish-stage.jpeg";
import whiteboard from "../public/images/ashish-whiteboard.jpeg";

/** Bundled image URLs (/_next/static/...) — works even when /public static serving misbehaves in dev. */
export const courseImages: Record<
  "stage" | "formal" | "whiteboard" | "podium" | "casual",
  StaticImageData
> = {
  stage,
  formal,
  whiteboard,
  podium,
  casual,
};
