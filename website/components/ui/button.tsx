import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export function Button({ href, variant = "primary", children, className, onClick }: ButtonProps) {
  const base =
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-xl px-6 py-2.5 text-sm font-medium transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400";
  const styles = {
    primary:
      "bg-[#fafafa] text-[#0a0a0a] hover:bg-[#38bdf8] hover:text-[#0a0a0a] hover:-translate-y-0.5 shadow-sm font-semibold",
    secondary:
      "bg-[#141414] text-[#fafafa] border border-white/8 hover:border-white/20 hover:bg-[#1c1c1c] hover:-translate-y-0.5",
    ghost: "text-[#a0a0a0] hover:text-[#fafafa] hover:bg-white/5"
  };

  const classes = cn(base, styles[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
