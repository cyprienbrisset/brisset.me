"use client";

import { useEffect } from "react";

/**
 * Drives parallax transforms (jungle layers + .vine elements) and the
 * mini scroll-snake sidebar position from window.scrollY.
 *
 * Performance:
 *   - No perpetual rAF: we listen to scroll events (passive) and request a
 *     single frame to coalesce the work.
 *   - When the user is idle, zero CPU is spent.
 *   - Layer/vine list is built once at mount; transforms use translate3d
 *     so the compositor handles them on GPU.
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

    let pending = false;

    function update() {
      pending = false;
      const curY = window.scrollY;

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

    function onScroll() {
      if (pending) return;
      pending = true;
      requestAnimationFrame(update);
    }

    // Initial paint to position everything from current scrollY
    update();

    window.addEventListener("scroll",  onScroll, { passive: true });
    window.addEventListener("resize",  onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return null;
}
