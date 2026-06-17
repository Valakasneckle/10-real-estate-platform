import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => (
  <input
    ref={ref}
    className={cn(
      "h-11 w-full rounded-lg border border-estate-warm bg-white px-3 text-sm text-estate-charcoal placeholder:text-estate-charcoal/40 outline-none transition focus:border-estate-gold focus:ring-1 focus:ring-estate-gold/30",
      className
    )}
    {...props}
  />
));
Input.displayName = "Input";
