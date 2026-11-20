"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 1024;
      if (isMobile) {
        if (lenisRef.current) {
          lenisRef.current.destroy();
          lenisRef.current = null;
        }
        return;
      }

      if (!lenisRef.current) {
        initLenis();
      }
    };

    const initLenis = () => {
      if (window.innerWidth < 1024) return;

      const lenis = new Lenis({
        duration: 1.0,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: 1,
        infinite: false,
      });

      lenisRef.current = lenis;

      let rafId: number;
      function raf(time: number) {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      }
      rafId = requestAnimationFrame(raf);
      return rafId;
    };

    let rafId = initLenis();
    window.addEventListener("resize", handleResize);

    return () => {
      if (lenisRef.current) lenisRef.current.destroy();
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("resize", handleResize);
      lenisRef.current = null;
    };
  }, []);

  // Instant scroll to top on route change without artificial timeouts or stop locks
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return <>{children}</>;
}
