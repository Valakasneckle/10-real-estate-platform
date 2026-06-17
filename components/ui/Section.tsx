import { cn } from "@/lib/utils";

export function Section({
  id,
  className,
  children,
  eyebrow,
  title,
  description,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
  eyebrow?: string;
  title?: string;
  description?: string;
}) {
  return (
    <section id={id} className={cn("py-16 md:py-24", className)}>
      <div className="mx-auto max-w-6xl px-5">
        {(eyebrow || title || description) && (
          <div className="mb-10 max-w-2xl">
            {eyebrow ? (
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-estate-gold">
                {eyebrow}
              </p>
            ) : null}
            {title ? (
              <h2 className="mt-2 font-display text-3xl tracking-tight text-estate-charcoal md:text-4xl">
                {title}
              </h2>
            ) : null}
            {description ? (
              <p className="mt-3 text-base leading-7 text-estate-charcoal/65">
                {description}
              </p>
            ) : null}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
