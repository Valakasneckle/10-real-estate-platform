import { Bath, Bed, MapPin, Maximize2 } from "lucide-react";
import type { Property } from "@/data/properties";
import { formatPrice } from "@/lib/format";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

const statusLabels: Record<Property["status"], string> = {
  "for-sale": "For Sale",
  "for-rent": "For Rent",
  pending: "Pending",
};

export function PropertyDetails({ property }: { property: Property }) {
  return (
    <div className="space-y-6">
      <div>
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="gold">{statusLabels[property.status]}</Badge>
          <Badge variant="outline">{property.type}</Badge>
        </div>
        <h1 className="mt-3 font-display text-3xl tracking-tight text-estate-charcoal md:text-4xl">
          {property.title}
        </h1>
        <p className="mt-2 flex items-center gap-1.5 text-estate-charcoal/65">
          <MapPin className="h-4 w-4" />
          {property.location.neighborhood
            ? `${property.location.neighborhood}, `
            : ""}
          {property.location.city}, {property.location.state}
        </p>
        <p className="mt-4 text-3xl font-semibold text-estate-charcoal">
          {formatPrice(property.price)}
        </p>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <Card className="p-4 text-center">
          <Bed className="mx-auto h-5 w-5 text-estate-gold" />
          <p className="mt-2 text-lg font-semibold text-estate-charcoal">
            {property.beds}
          </p>
          <p className="text-xs text-estate-charcoal/55">Bedrooms</p>
        </Card>
        <Card className="p-4 text-center">
          <Bath className="mx-auto h-5 w-5 text-estate-gold" />
          <p className="mt-2 text-lg font-semibold text-estate-charcoal">
            {property.baths}
          </p>
          <p className="text-xs text-estate-charcoal/55">Bathrooms</p>
        </Card>
        <Card className="p-4 text-center">
          <Maximize2 className="mx-auto h-5 w-5 text-estate-gold" />
          <p className="mt-2 text-lg font-semibold text-estate-charcoal">
            {property.area}
          </p>
          <p className="text-xs text-estate-charcoal/55">m² Area</p>
        </Card>
      </div>

      <div>
        <h2 className="font-display text-xl text-estate-charcoal">Overview</h2>
        <p className="mt-3 text-sm leading-7 text-estate-charcoal/75">
          {property.longDescription}
        </p>
      </div>

      <div>
        <h2 className="font-display text-xl text-estate-charcoal">Features</h2>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          {property.features.map((f) => (
            <li
              key={f}
              className="rounded-lg border border-estate-warm bg-estate-cream px-4 py-3 text-sm text-estate-charcoal/75"
            >
              {f}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
