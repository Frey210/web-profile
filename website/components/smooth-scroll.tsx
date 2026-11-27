"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const desktopMotion = window.matchMedia("(min-width: 1024px) and (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)");

    function syncScroll() {
      lenisRef.current = desktopMotion.matches ? new Lenis({ autoRaf: true, duration: 1 }) : null;
    }

    function resetScroll() {
      lenisRef.current?.destroy();
      syncScroll();
    }

    syncScroll();
    desktopMotion.addEventListener("change", resetScroll);

    return () => {
      desktopMotion.removeEventListener("change", resetScroll);
      lenisRef.current?.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (window.location.hash) return;
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return <>{children}</>;
}
