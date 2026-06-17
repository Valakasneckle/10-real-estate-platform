import type { Property } from "@/data/properties";
import { PropertyCard } from "@/components/real-estate/PropertyCard";

export function PropertyGrid({
  properties,
  emptyTitle = "No properties found",
  emptyBody = "Try adjusting your filters or search terms to see more listings.",
}: {
  properties: Property[];
  emptyTitle?: string;
  emptyBody?: string;
}) {
  if (properties.length === 0) {
    return (
      <div className="rounded-2xl border border-estate-warm bg-estate-cream p-12 text-center">
        <h3 className="font-display text-2xl text-estate-charcoal">
          {emptyTitle}
        </h3>
        <p className="mt-2 text-sm text-estate-charcoal/65">{emptyBody}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      {properties.map((p) => (
        <PropertyCard key={p.id} property={p} />
      ))}
    </div>
  );
}
