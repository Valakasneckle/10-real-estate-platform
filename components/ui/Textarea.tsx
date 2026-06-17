import { forwardRef, type TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export const Textarea = forwardRef<
  HTMLTextAreaElement,
  TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn(
      "min-h-[120px] w-full resize-none rounded-lg border border-estate-warm bg-white px-3 py-2 text-sm leading-6 text-estate-charcoal placeholder:text-estate-charcoal/40 outline-none transition focus:border-estate-gold focus:ring-1 focus:ring-estate-gold/30",
      className
    )}
    {...props}
  />
));
Textarea.displayName = "Textarea";
