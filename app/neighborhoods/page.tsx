import { NeighborhoodCard } from "@/components/real-estate/NeighborhoodCard";
import { neighborhoods } from "@/data/neighborhoods";
import { MarketStats } from "@/components/sections/MarketStats";

export const metadata = {
  title: "Neighborhoods",
};

export default function NeighborhoodsPage() {
  return (
    <>
      <div className="mx-auto max-w-6xl px-5 pb-8 pt-10">
        <div className="max-w-2xl">
          <h1 className="font-display text-4xl tracking-tight text-estate-charcoal">
            Neighborhoods
          </h1>
          <p className="mt-3 text-base leading-7 text-estate-charcoal/70">
            Explore lifestyle, average prices, and available inventory across
            curated markets. Find the area that matches how you want to live.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {neighborhoods.map((n) => (
            <NeighborhoodCard key={n.id} neighborhood={n} />
          ))}
        </div>
      </div>
      <MarketStats />
    </>
  );
}
