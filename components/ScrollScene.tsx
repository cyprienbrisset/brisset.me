"use client";

import { useEffect } from "react";

/**
 * Single rAF loop that drives:
 *   - Parallax transforms on jungle layers and all .vine elements
 *   - The mini scroll-snake sidebar's vertical position
 *
 * Implementation notes:
 *   - One rAF instance per page mount; cleaned up on unmount.
 *   - DOM writes only happen when window.scrollY actually changed (delta dirty-check)
 *     so static frames are zero-cost.
 *   - All transforms use translate3d() for GPU compositing.
 */
export function ScrollScene() {
  useEffect(() => {
    const scrollSnake = document.getElementById("scroll-snake-body");
    const snakeBar    = document.querySelector<HTMLElement>(".scroll-snake");

    type Layer = { el: HTMLElement; speed: number; mirror: boolean };
    const layers: Layer[] = [];

    const farEl  = document.getElementById("jungle-far");
    const midEl  = document.getElementById("jungle-mid");
    const nearEl = document.getElementById("jungle-near");
    if (farEl)  layers.push({ el: farEl,  speed: 0.03, mirror: false });
    if (midEl)  layers.push({ el: midEl,  speed: 0.16, mirror: false });
    if (nearEl) layers.push({ el: nearEl, speed: 0.42, mirror: false });

    document.querySelectorAll<HTMLElement>(".vine").forEach((v) => {
      layers.push({
        el: v,
        speed: parseFloat(v.dataset.speed ?? "0.25"),
        mirror: v.classList.contains("vine-mirror"),
      });
    });

    let lastScrollY = window.scrollY;
    let rafId = 0;

    function tick() {
      const curY  = window.scrollY;
      const delta = curY - lastScrollY;
      lastScrollY = curY;

      if (delta !== 0) {
        for (let i = 0; i < layers.length; i++) {
          const l = layers[i];
          const y = (-curY * l.speed).toFixed(1);
          l.el.style.transform = l.mirror
            ? `translate3d(0, ${y}px, 0) scaleX(-1)`
            : `translate3d(0, ${y}px, 0)`;
        }

        if (scrollSnake && snakeBar) {
          const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
          const progress  = maxScroll > 0 ? curY / maxScroll : 0;
          const trackH    = snakeBar.clientHeight - 56;
          scrollSnake.style.transform = `translate(-50%, ${(progress * trackH).toFixed(1)}px)`;
        }
      }

      rafId = requestAnimationFrame(tick);
    }

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return null;
}
