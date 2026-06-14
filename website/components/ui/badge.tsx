import { cn } from "@/lib/utils";

export function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex max-w-full items-center whitespace-normal rounded-md border border-cyan-300/18 bg-cyan-300/8 px-2.5 py-1 text-xs font-medium leading-5 text-cyan-100",
        className
      )}
    >
      {children}
    </span>
  );
}
