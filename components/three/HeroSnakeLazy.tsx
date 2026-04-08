"use client";

import dynamic from "next/dynamic";

/**
 * Lazy-load the R3F snake scene client-side only.
 * - SSR disabled: Three.js needs window/document.
 * - Large bundle (~150KB gzipped): kept out of the critical path.
 * - Suspense fallback shows nothing — the hero text remains usable while it loads.
 */
export const HeroSnakeLazy = dynamic(
  () => import("./HeroSnake").then((m) => m.HeroSnake),
  { ssr: false, loading: () => null },
);
