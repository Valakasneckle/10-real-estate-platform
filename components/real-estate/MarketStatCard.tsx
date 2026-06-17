import {
  Building2,
  Clock,
  DollarSign,
  Home,
  MapPin,
  Users,
} from "lucide-react";
import type { MarketStat } from "@/data/market-stats";
import { Card } from "@/components/ui/Card";

const icons = {
  listings: Home,
  price: DollarSign,
  days: Clock,
  inquiries: Users,
  neighborhoods: MapPin,
  agents: Building2,
};

export function MarketStatCard({ stat }: { stat: MarketStat }) {
  const Icon = icons[stat.icon];

  return (
    <Card className="p-5">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-estate-charcoal/50">
            {stat.label}
          </p>
          <p className="mt-2 font-display text-3xl text-estate-charcoal">
            {stat.value}
          </p>
        </div>
        <div className="rounded-xl bg-estate-gold/10 p-2.5">
          <Icon className="h-5 w-5 text-estate-gold" />
        </div>
      </div>
      <p className="mt-3 text-xs leading-5 text-estate-charcoal/55">
        {stat.description}
      </p>
    </Card>
  );
}
