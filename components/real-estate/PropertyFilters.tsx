"use client";

import { useMemo, useTransition } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Search, SlidersHorizontal } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Button } from "@/components/ui/Button";
import { propertyCities } from "@/data/properties";

export function PropertyFilters() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const state = useMemo(() => {
    const get = (k: string) => searchParams.get(k) ?? "";
    return {
      q: get("q"),
      location: get("location"),
      type: get("type"),
      minPrice: get("minPrice"),
      maxPrice: get("maxPrice"),
      beds: get("beds"),
      sort: get("sort") || "featured",
    };
  }, [searchParams]);

  function setParam(key: string, value: string) {
    const next = new URLSearchParams(searchParams.toString());
    if (!value) next.delete(key);
    else next.set(key, value);
    startTransition(() => router.replace(`${pathname}?${next.toString()}`));
  }

  function clearAll() {
    startTransition(() => router.replace(pathname));
  }

  const hasFilters =
    state.q ||
    state.location ||
    state.type ||
    state.minPrice ||
    state.maxPrice ||
    state.beds ||
    state.sort !== "featured";

  return (
    <div className="rounded-2xl border border-estate-warm bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm text-estate-charcoal/70">
          <SlidersHorizontal className="h-4 w-4 text-estate-gold" />
          Filter listings
          {isPending ? (
            <span className="text-xs text-estate-charcoal/40">Updating…</span>
          ) : null}
        </div>
        {hasFilters ? (
          <Button variant="ghost" size="sm" onClick={clearAll}>
            Clear all
          </Button>
        ) : null}
      </div>

      <div className="grid gap-3 md:grid-cols-12">
        <label className="relative md:col-span-4">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-estate-charcoal/40" />
          <Input
            className="pl-10"
            placeholder="Search properties…"
            value={state.q}
            onChange={(e) => setParam("q", e.target.value)}
          />
        </label>

        <label className="md:col-span-2">
          <Select
            value={state.location}
            onChange={(e) => setParam("location", e.target.value)}
          >
            <option value="">All cities</option>
            {propertyCities.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </Select>
        </label>

        <label className="md:col-span-2">
          <Select
            value={state.type}
            onChange={(e) => setParam("type", e.target.value)}
          >
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
          <Select
            value={state.beds}
            onChange={(e) => setParam("beds", e.target.value)}
          >
            <option value="">Any beds</option>
            <option value="1">1+</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
            <option value="5">5+</option>
          </Select>
        </label>

        <label className="md:col-span-2">
          <Select
            value={state.sort}
            onChange={(e) => setParam("sort", e.target.value)}
          >
            <option value="featured">Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="newest">Newest</option>
          </Select>
        </label>

        <label className="md:col-span-3">
          <Input
            type="number"
            placeholder="Min price"
            value={state.minPrice}
            onChange={(e) => setParam("minPrice", e.target.value)}
          />
        </label>

        <label className="md:col-span-3">
          <Input
            type="number"
            placeholder="Max price"
            value={state.maxPrice}
            onChange={(e) => setParam("maxPrice", e.target.value)}
          />
        </label>
      </div>
    </div>
  );
}
