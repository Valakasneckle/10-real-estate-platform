import { cn } from "@/lib/utils";

export function Card({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-estate-warm/80 bg-white shadow-sm",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
