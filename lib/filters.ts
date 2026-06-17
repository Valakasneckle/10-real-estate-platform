import type { Property, PropertyType } from "@/data/properties";

export type PropertyFilters = {
  q: string;
  location: string;
  type: "" | PropertyType;
  minPrice: number | null;
  maxPrice: number | null;
  beds: number | null;
  sort: "featured" | "price-asc" | "price-desc" | "newest";
};

function parseNumber(value: string | null) {
  if (!value) return null;
  const n = Number(value);
  return Number.isFinite(n) && n >= 0 ? n : null;
}

export function parsePropertyFilters(searchParams: {
  [key: string]: string | string[] | undefined;
}): PropertyFilters {
  const get = (key: string) => {
    const v = searchParams[key];
    return Array.isArray(v) ? v[0] : v ?? "";
  };

  const typeRaw = get("type");
  const validTypes: PropertyType[] = [
    "apartment",
    "house",
    "condo",
    "townhouse",
    "penthouse",
    "villa",
  ];
  const type = validTypes.includes(typeRaw as PropertyType)
    ? (typeRaw as PropertyType)
    : "";

  const sortRaw = get("sort");
  const sort: PropertyFilters["sort"] =
    sortRaw === "price-asc" ||
    sortRaw === "price-desc" ||
    sortRaw === "newest"
      ? sortRaw
      : "featured";

  return {
    q: get("q").trim(),
    location: get("location").trim(),
    type,
    minPrice: parseNumber(get("minPrice") || null),
    maxPrice: parseNumber(get("maxPrice") || null),
    beds: parseNumber(get("beds") || null),
    sort,
  };
}

export function filterProperties(
  properties: Property[],
  filters: PropertyFilters
) {
  const q = filters.q.toLowerCase();
  const location = filters.location.toLowerCase();

  let result = properties.filter((p) => {
    if (filters.type && p.type !== filters.type) return false;
    if (filters.minPrice !== null && p.price < filters.minPrice) return false;
    if (filters.maxPrice !== null && p.price > filters.maxPrice) return false;
    if (filters.beds !== null && p.beds < filters.beds) return false;

    if (location) {
      const loc = `${p.location.city} ${p.location.neighborhood ?? ""}`.toLowerCase();
      if (!loc.includes(location)) return false;
    }

    if (q) {
      const hay = [
        p.title,
        p.location.city,
        p.location.neighborhood ?? "",
        p.description,
      ]
        .join(" ")
        .toLowerCase();
      if (!hay.includes(q)) return false;
    }

    return true;
  });

  switch (filters.sort) {
    case "price-asc":
      result = [...result].sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      result = [...result].sort((a, b) => b.price - a.price);
      break;
    case "newest":
      result = [...result].sort((a, b) => b.id.localeCompare(a.id));
      break;
    default:
      result = [...result].sort(
        (a, b) => Number(b.featured) - Number(a.featured)
      );
  }

  return result;
}
