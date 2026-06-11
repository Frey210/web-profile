import { cn } from "@/lib/utils";

export function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("glass-panel rounded-lg p-6", className)}>{children}</div>;
}
