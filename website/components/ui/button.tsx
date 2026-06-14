import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

export function Button({ href, children, variant = "primary", className }: ButtonProps) {
  const classes = cn(
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary",
    variant === "primary" && "bg-primary text-white shadow-glow hover:bg-blue-500",
    variant === "secondary" && "border border-secondary/40 bg-secondary/10 text-cyan-100 hover:bg-secondary/18",
    variant === "ghost" && "text-slate-200 hover:bg-white/8 hover:text-white",
    className
  );

  if (href) {
    return (
      <Link href={href} prefetch={false} className={classes}>
        {children}
      </Link>
    );
  }

  return <button className={classes}>{children}</button>;
}
