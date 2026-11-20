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
    "inline-flex min-h-11 items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold transition duration-200 font-mono focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neon",
    variant === "primary" && "border-2 border-neon bg-neon/10 text-neon hover:bg-neon/20 hover:shadow-neon-sm",
    variant === "secondary" && "border border-neon/30 bg-neon/5 text-neon/80 hover:bg-neon/10 hover:text-neon",
    variant === "ghost" && "text-slate-300 hover:bg-neon/5 hover:text-neon",
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
