"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

/**
 * Lazy-load the R3F snake scene client-side only AND defer its mount to idle
 * time so it never competes with the LCP paint of the hero text.
 *
 * Sequence:
 *   1. SSR / first paint → only the hero text renders (LCP wins instantly)
 *   2. Hydration completes
 *   3. requestIdleCallback fires → we mount HeroSnakeInner
 *   4. Three.js bundle starts loading (already prefetched by next/dynamic)
 *   5. Canvas mounts and shader compiles in idle time
 */
const HeroSnakeInner = dynamic(
  () => import("./HeroSnake").then((m) => m.HeroSnake),
  { ssr: false, loading: () => null },
);

export function HeroSnakeLazy() {
  const [shouldMount, setShouldMount] = useState(false);

  useEffect(() => {
    type IdleWindow = Window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
    };
    const w = window as IdleWindow;
    if (typeof w.requestIdleCallback === "function") {
      w.requestIdleCallback(() => setShouldMount(true), { timeout: 1500 });
    } else {
      // Safari fallback: defer to next event loop tick + 200ms breathing room
      const id = window.setTimeout(() => setShouldMount(true), 200);
      return () => window.clearTimeout(id);
    }
  }, []);

  if (!shouldMount) return null;
  return <HeroSnakeInner />;
}
