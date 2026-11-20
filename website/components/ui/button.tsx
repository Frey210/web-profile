import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  [key: string]: unknown;
};

export function Button({ href, children, variant = "primary", className, ...props }: ButtonProps) {
  const classes = cn(
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-xl px-6 py-2.5 text-sm font-medium transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300",
    variant === "primary" &&
      "bg-[#fafafa] text-[#0a0a0a] hover:bg-[#c4a882] hover:text-[#0a0a0a] hover:-translate-y-0.5 shadow-sm font-semibold",
    variant === "secondary" &&
      "border border-[#222222] bg-[#141414] text-[#a0a0a0] hover:text-[#fafafa] hover:border-[#333333] hover:bg-[#1a1a1a] hover:-translate-y-0.5",
    variant === "ghost" &&
      "text-[#a0a0a0] hover:text-[#fafafa] hover:bg-white/5",
    className
  );

  if (href) {
    return (
      <Link href={href} prefetch={false} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
