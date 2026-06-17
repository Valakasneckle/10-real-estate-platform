import { Section } from "@/components/ui/Section";
import { MarketStatCard } from "@/components/real-estate/MarketStatCard";
import { marketStats } from "@/data/market-stats";

export function MarketStats() {
  return (
    <Section
      eyebrow="Market insights"
      title="Real estate at a glance"
      description="Key metrics that help buyers and agents understand market activity."
      className="bg-estate-beige/50"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {marketStats.map((stat) => (
          <MarketStatCard key={stat.id} stat={stat} />
        ))}
      </div>
    </Section>
  );
}
