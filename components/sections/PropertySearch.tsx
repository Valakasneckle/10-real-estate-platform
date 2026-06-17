"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Search } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Button } from "@/components/ui/Button";
import { propertyCities } from "@/data/properties";

export function PropertySearch() {
  const router = useRouter();
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [beds, setBeds] = useState("");

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    const params = new URLSearchParams();
    if (location) params.set("location", location);
    if (type) params.set("type", type);
    if (minPrice) params.set("minPrice", minPrice);
    if (maxPrice) params.set("maxPrice", maxPrice);
    if (beds) params.set("beds", beds);
    router.push(`/properties?${params.toString()}`);
  }

  return (
    <Section
      eyebrow="Search"
      title="Find properties that match your lifestyle"
      description="Filter by location, type, price, and bedrooms — then explore full listing details."
      className="bg-white"
    >
      <form
        onSubmit={handleSearch}
        className="rounded-2xl border border-estate-warm bg-estate-cream p-6 shadow-sm md:p-8"
      >
        <div className="grid gap-4 md:grid-cols-12">
          <label className="md:col-span-3">
            <span className="mb-1.5 block text-xs font-medium text-estate-charcoal/60">
              Location
            </span>
            <Select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            >
              <option value="">Any city</option>
              {propertyCities.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </Select>
          </label>

          <label className="md:col-span-2">
            <span className="mb-1.5 block text-xs font-medium text-estate-charcoal/60">
              Property type
            </span>
            <Select value={type} onChange={(e) => setType(e.target.value)}>
              <option value="">All types</option>
              <option value="apartment">Apartment</option>
              <option value="house">House</option>
              <option value="condo">Condo</option>
              <option value="townhouse">Townhouse</option>
              <option value="penthouse">Penthouse</option>
              <option value="villa">Villa</option>
            </Select>
          </label>

          <label className="md:col-span-2">
            <span className="mb-1.5 block text-xs font-medium text-estate-charcoal/60">
              Min price
            </span>
            <Input
              type="number"
              placeholder="400,000"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
            />
          </label>

          <label className="md:col-span-2">
            <span className="mb-1.5 block text-xs font-medium text-estate-charcoal/60">
              Max price
            </span>
            <Input
              type="number"
              placeholder="2,000,000"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
          </label>

          <label className="md:col-span-2">
            <span className="mb-1.5 block text-xs font-medium text-estate-charcoal/60">
              Bedrooms
            </span>
            <Select value={beds} onChange={(e) => setBeds(e.target.value)}>
              <option value="">Any</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
              <option value="5">5+</option>
            </Select>
          </label>

          <div className="flex items-end md:col-span-1">
            <Button type="submit" className="w-full" aria-label="Search properties">
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </form>
    </Section>
  );
}
