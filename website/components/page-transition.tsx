"use client";

import { usePathname } from "next/navigation";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <div key={pathname} className={pathname === "/" ? "w-full" : "page-enter w-full"}>
      {children}
    </div>
  );
}
