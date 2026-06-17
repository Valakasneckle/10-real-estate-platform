"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Bath, Bed, Maximize2, MapPin } from "lucide-react";
import type { Property } from "@/data/properties";
import { formatArea, formatPrice } from "@/lib/format";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

const typeLabels: Record<Property["type"], string> = {
  apartment: "Apartment",
  house: "House",
  condo: "Condo",
  townhouse: "Townhouse",
  penthouse: "Penthouse",
  villa: "Villa",
};

export function PropertyCard({ property }: { property: Property }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
    >
      <Link href={`/properties/${property.slug}`}>
        <Card className="group overflow-hidden transition-shadow hover:shadow-md">
          <div className="relative aspect-[4/3] overflow-hidden bg-estate-beige">
            <Image
              src={property.image}
              alt={property.title}
              fill
              className="object-cover transition duration-500 group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute left-4 top-4 flex gap-2">
              <Badge variant="gold">{typeLabels[property.type]}</Badge>
              {property.featured ? (
                <Badge variant="blue">Featured</Badge>
              ) : null}
            </div>
          </div>

          <div className="p-5">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <h3 className="truncate font-display text-lg text-estate-charcoal">
                  {property.title}
                </h3>
                <p className="mt-1 flex items-center gap-1 text-sm text-estate-charcoal/60">
                  <MapPin className="h-3.5 w-3.5 shrink-0" />
                  {property.location.city}
                  {property.location.neighborhood
                    ? `, ${property.location.neighborhood}`
                    : ""}
                </p>
              </div>
              <p className="shrink-0 text-lg font-semibold text-estate-charcoal">
                {formatPrice(property.price)}
              </p>
            </div>

            <p className="mt-3 line-clamp-2 text-sm leading-6 text-estate-charcoal/65">
              {property.description}
            </p>

            <div className="mt-4 flex items-center gap-4 border-t border-estate-warm pt-4 text-xs text-estate-charcoal/60">
              <span className="inline-flex items-center gap-1">
                <Bed className="h-4 w-4" />
                {property.beds} beds
              </span>
              <span className="inline-flex items-center gap-1">
                <Bath className="h-4 w-4" />
                {property.baths} baths
              </span>
              <span className="inline-flex items-center gap-1">
                <Maximize2 className="h-4 w-4" />
                {formatArea(property.area)}
              </span>
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
}
