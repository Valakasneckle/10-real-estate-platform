import { Hero } from "@/components/sections/Hero";
import { PropertySearch } from "@/components/sections/PropertySearch";
import { FeaturedProperties } from "@/components/sections/FeaturedProperties";
import { Neighborhoods } from "@/components/sections/Neighborhoods";
import { MarketStats } from "@/components/sections/MarketStats";
import { Agents } from "@/components/sections/Agents";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <PropertySearch />
      <FeaturedProperties />
      <Neighborhoods />
      <MarketStats />
      <Agents />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
