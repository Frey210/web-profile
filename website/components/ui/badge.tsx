import { cn } from "@/lib/utils";

export function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex max-w-full items-center whitespace-normal rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-[11px] font-medium tracking-wider text-amber-200",
        className
      )}
    >
      {children}
    </span>
  );
}
