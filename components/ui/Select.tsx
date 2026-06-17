import { forwardRef, type SelectHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export const Select = forwardRef<
  HTMLSelectElement,
  SelectHTMLAttributes<HTMLSelectElement>
>(({ className, children, ...props }, ref) => (
  <select
    ref={ref}
    className={cn(
      "h-11 w-full rounded-lg border border-estate-warm bg-white px-3 text-sm text-estate-charcoal outline-none transition focus:border-estate-gold focus:ring-1 focus:ring-estate-gold/30",
      className
    )}
    {...props}
  >
    {children}
  </select>
));
Select.displayName = "Select";
