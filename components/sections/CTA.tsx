import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function CTA() {
  return (
    <section className="bg-estate-charcoal py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-5 text-center">
        <h2 className="font-display text-3xl tracking-tight text-white md:text-4xl">
          Ready to find your next property?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-white/70">
          Browse listings, explore neighborhoods, or speak with an agent to
          schedule a private viewing.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/properties">
            <Button variant="secondary" size="lg">
              Browse Properties
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="/contact">
            <Button
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:border-estate-gold hover:text-estate-gold"
            >
              Request a Viewing
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
