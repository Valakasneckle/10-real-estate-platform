import Image from "next/image";
import Link from "next/link";
import type { Neighborhood } from "@/data/neighborhoods";
import { formatPrice } from "@/lib/format";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

export function NeighborhoodCard({
  neighborhood,
}: {
  neighborhood: Neighborhood;
}) {
  return (
    <Link href="/neighborhoods">
      <Card className="group overflow-hidden transition-shadow hover:shadow-md">
        <div className="relative aspect-[16/9] overflow-hidden bg-estate-beige">
          <Image
            src={neighborhood.image}
            alt={neighborhood.name}
            fill
            className="object-cover transition duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
        <div className="p-5">
          <h3 className="font-display text-lg text-estate-charcoal">
            {neighborhood.name}
          </h3>
          <p className="text-sm text-estate-charcoal/55">{neighborhood.city}</p>
          <p className="mt-2 line-clamp-2 text-sm leading-6 text-estate-charcoal/65">
            {neighborhood.description}
          </p>
          <p className="mt-3 text-sm font-semibold text-estate-charcoal">
            Avg. {formatPrice(neighborhood.averagePrice)}
          </p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {neighborhood.lifestyleTags.map((tag) => (
              <Badge key={tag} variant="blue" className="text-[10px]">
                {tag}
              </Badge>
            ))}
          </div>
          <p className="mt-3 text-xs text-estate-charcoal/50">
            {neighborhood.propertyCount} properties available
          </p>
        </div>
      </Card>
    </Link>
  );
}
