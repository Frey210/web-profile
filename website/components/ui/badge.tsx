import { cn } from "@/lib/utils";

export function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex max-w-full items-center whitespace-normal border border-neon/20 bg-neon/5 px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-widest leading-5 text-neon",
        className
      )}
    >
      {children}
    </span>
  );
}
