import { Suspense } from "react";
import { PropertyFilters } from "@/components/real-estate/PropertyFilters";
import { PropertyGrid } from "@/components/real-estate/PropertyGrid";
import { properties } from "@/data/properties";
import {
  filterProperties,
  parsePropertyFilters,
} from "@/lib/filters";

export const metadata = {
  title: "Properties",
};

export default function PropertiesPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const filters = parsePropertyFilters(searchParams);
  const filtered = filterProperties(properties, filters);

  return (
    <div className="mx-auto max-w-6xl px-5 pb-16 pt-10">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="font-display text-4xl tracking-tight text-estate-charcoal">
            Properties
          </h1>
          <p className="mt-2 text-sm leading-6 text-estate-charcoal/65">
            Browse our curated catalog. Filter by location, type, price, and
            bedrooms.
          </p>
        </div>
        <div className="rounded-full border border-estate-warm bg-white px-4 py-2 text-xs tracking-wide text-estate-charcoal/70">
          {filtered.length} propert{filtered.length === 1 ? "y" : "ies"}
        </div>
      </div>

      <div className="mt-7">
        <Suspense
          fallback={
            <div className="rounded-2xl border border-estate-warm bg-white p-5 text-sm text-estate-charcoal/60">
              Loading filters…
            </div>
          }
        >
          <PropertyFilters />
        </Suspense>
      </div>

      <div className="mt-8">
        <PropertyGrid properties={filtered} />
      </div>
    </div>
  );
}
