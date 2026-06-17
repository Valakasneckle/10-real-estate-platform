import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import {
  getPropertyBySlug,
  getRelatedProperties,
  properties,
} from "@/data/properties";
import { getAgentById } from "@/data/agents";
import { PropertyGallery } from "@/components/real-estate/PropertyGallery";
import { PropertyDetails } from "@/components/real-estate/PropertyDetails";
import { AgentCard } from "@/components/real-estate/AgentCard";
import { MortgageCalculator } from "@/components/real-estate/MortgageCalculator";
import { ContactForm } from "@/components/real-estate/ContactForm";
import { PropertyGrid } from "@/components/real-estate/PropertyGrid";
import { Button } from "@/components/ui/Button";

export function generateStaticParams() {
  return properties.map((p) => ({ slug: p.slug }));
}

export default function PropertyDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const property = getPropertyBySlug(params.slug);
  if (!property) return notFound();

  const agent = getAgentById(property.agentId);
  const related = getRelatedProperties(property.slug);

  return (
    <div className="mx-auto max-w-6xl px-5 pb-16 pt-10">
      <Link
        href="/properties"
        className="inline-flex items-center gap-2 rounded-lg border border-estate-warm bg-white px-4 py-2 text-xs tracking-wide text-estate-charcoal/70 transition hover:border-estate-gold hover:text-estate-gold"
      >
        <ChevronLeft className="h-4 w-4" />
        Back to properties
      </Link>

      <div className="mt-6">
        <PropertyGallery images={property.gallery} title={property.title} />
      </div>

      <div className="mt-10 grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <PropertyDetails property={property} />
        </div>

        <aside className="lg:col-span-5">
          <div className="sticky top-24 space-y-6">
            <MortgageCalculator defaultPrice={property.price} />
            {agent ? <AgentCard agent={agent} /> : null}
            <ContactForm subject={property.title} />
            <Link href="/contact">
              <Button variant="secondary" className="w-full">
                Schedule a viewing
              </Button>
            </Link>
          </div>
        </aside>
      </div>

      {related.length > 0 ? (
        <section className="mt-16 border-t border-estate-warm pt-12">
          <h2 className="font-display text-2xl text-estate-charcoal">
            Related properties
          </h2>
          <p className="mt-2 text-sm text-estate-charcoal/60">
            Similar listings you may want to explore.
          </p>
          <div className="mt-6">
            <PropertyGrid properties={related} />
          </div>
        </section>
      ) : null}
    </div>
  );
}
