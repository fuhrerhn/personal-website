"use client";

import { useEffect, useRef } from "react";

// soft glow that follows the mouse, or flashes at the tap point on touch screens;
// skipped with reduced motion
export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    // touch screens: the glow flashes where you tap, then fades out
    if (!canHover) {
      let timer = 0;
      const onTap = (event: PointerEvent) => {
        window.clearTimeout(timer);
        el.style.setProperty("--glow-x", `${event.clientX}px`);
        el.style.setProperty("--glow-y", `${event.clientY}px`);
        el.style.opacity = "1";
        timer = window.setTimeout(() => {
          el.style.opacity = "0";
        }, 350);
      };
      window.addEventListener("pointerdown", onTap, { passive: true });
      return () => {
        window.clearTimeout(timer);
        window.removeEventListener("pointerdown", onTap);
      };
    }

    let frame = 0;
    const onMove = (event: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        el.style.setProperty("--glow-x", `${event.clientX}px`);
        el.style.setProperty("--glow-y", `${event.clientY}px`);
        el.style.opacity = "1";
      });
    };
    const onLeave = () => {
      el.style.opacity = "0";
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-30 opacity-0 transition-opacity duration-300"
      style={{
        background:
          "radial-gradient(600px circle at var(--glow-x, 50%) var(--glow-y, 50%), var(--color-glow), transparent 80%)",
      }}
    />
  );
}
