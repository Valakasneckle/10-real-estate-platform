import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { NeighborhoodCard } from "@/components/real-estate/NeighborhoodCard";
import { neighborhoods } from "@/data/neighborhoods";
import { Button } from "@/components/ui/Button";

export function Neighborhoods() {
  return (
    <Section
      eyebrow="Neighborhoods"
      title="Explore areas that fit your lifestyle"
      description="Discover average prices, lifestyle tags, and available inventory by neighborhood."
      className="bg-white"
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {neighborhoods.slice(0, 6).map((n) => (
          <NeighborhoodCard key={n.id} neighborhood={n} />
        ))}
      </div>
      <div className="mt-10 text-center">
        <Link href="/neighborhoods">
          <Button variant="outline">View all neighborhoods</Button>
        </Link>
      </div>
    </Section>
  );
}
