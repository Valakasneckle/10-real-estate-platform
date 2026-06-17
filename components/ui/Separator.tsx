import { cn } from "@/lib/utils";

export function Separator({ className }: { className?: string }) {
  return (
    <hr
      className={cn("border-0 border-t border-estate-warm", className)}
      aria-hidden
    />
  );
}
