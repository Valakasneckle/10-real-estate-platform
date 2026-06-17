import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { PropertyGrid } from "@/components/real-estate/PropertyGrid";
import { featuredProperties } from "@/data/properties";
import { Button } from "@/components/ui/Button";

export function FeaturedProperties() {
  return (
    <Section
      eyebrow="Featured"
      title="Handpicked properties"
      description="Curated listings across premium markets — updated weekly."
      className="bg-estate-cream"
    >
      <PropertyGrid properties={featuredProperties} />
      <div className="mt-10 text-center">
        <Link href="/properties">
          <Button variant="outline">View all properties</Button>
        </Link>
      </div>
    </Section>
  );
}
