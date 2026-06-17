import { cn } from "@/lib/utils";

type BadgeVariant = "default" | "gold" | "blue" | "outline";

const variants: Record<BadgeVariant, string> = {
  default: "bg-estate-beige text-estate-charcoal border-estate-warm",
  gold: "bg-estate-gold/15 text-estate-gold border-estate-gold/30",
  blue: "bg-estate-blue/10 text-estate-blue border-estate-blue/20",
  outline: "bg-transparent text-estate-charcoal/70 border-estate-warm",
};

export function Badge({
  className,
  variant = "default",
  children,
}: {
  className?: string;
  variant?: BadgeVariant;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium tracking-wide",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
