export type PropertyType =
  | "apartment"
  | "house"
  | "condo"
  | "townhouse"
  | "penthouse"
  | "villa";

export type PropertyStatus = "for-sale" | "for-rent" | "pending";

export type Property = {
  id: string;
  slug: string;
  title: string;
  type: PropertyType;
  location: {
    city: string;
    neighborhood?: string;
    state?: string;
    country: string;
  };
  price: number;
  beds: number;
  baths: number;
  area: number;
  description: string;
  longDescription: string;
  image: string;
  gallery: string[];
  features: string[];
  agentId: string;
  status: PropertyStatus;
  featured: boolean;
};

const img = "/images/properties/placeholder.svg";

export const properties: Property[] = [
  {
    id: "ef-001",
    slug: "harborview-residence",
    title: "Harborview Residence",
    type: "apartment",
    location: {
      city: "Boston",
      neighborhood: "Seaport",
      state: "MA",
      country: "USA",
    },
    price: 875000,
    beds: 2,
    baths: 2,
    area: 118,
    description:
      "Sunlit corner apartment with harbor views, open-plan living, and premium finishes.",
    longDescription:
      "Harborview Residence offers floor-to-ceiling windows, a chef's kitchen with quartz countertops, and a primary suite with walk-in closet. Building amenities include concierge, fitness center, and rooftop terrace. Ideal for professionals seeking waterfront lifestyle with urban convenience.",
    image: img,
    gallery: [img, img, img],
    features: [
      "Harbor views",
      "Concierge service",
      "Rooftop terrace",
      "In-unit laundry",
      "EV charging",
    ],
    agentId: "agent-001",
    status: "for-sale",
    featured: true,
  },
  {
    id: "ef-002",
    slug: "willow-creek-estate",
    title: "Willow Creek Estate",
    type: "house",
    location: {
      city: "Austin",
      neighborhood: "Westlake",
      state: "TX",
      country: "USA",
    },
    price: 1450000,
    beds: 4,
    baths: 3,
    area: 285,
    description:
      "Spacious family home on a quiet cul-de-sac with mature trees and a private pool.",
    longDescription:
      "Willow Creek Estate features an open great room, gourmet kitchen, and seamless indoor-outdoor flow to a covered patio and pool. The primary wing includes a spa bath and private office nook. Top-rated schools and trails nearby.",
    image: img,
    gallery: [img, img, img],
    features: [
      "Private pool",
      "Covered patio",
      "Home office",
      "3-car garage",
      "Smart home ready",
    ],
    agentId: "agent-002",
    status: "for-sale",
    featured: true,
  },
  {
    id: "ef-003",
    slug: "skyline-penthouse",
    title: "Skyline Penthouse",
    type: "penthouse",
    location: {
      city: "Chicago",
      neighborhood: "River North",
      state: "IL",
      country: "USA",
    },
    price: 2890000,
    beds: 3,
    baths: 3,
    area: 220,
    description:
      "Top-floor penthouse with wraparound terrace and panoramic city skyline views.",
    longDescription:
      "Skyline Penthouse delivers private elevator access, 12-foot ceilings, and a terrace designed for entertaining. Interior finishes include wide-plank oak, marble baths, and a wine storage wall. Full-service building with 24-hour security.",
    image: img,
    gallery: [img, img, img, img],
    features: [
      "Private elevator",
      "Wraparound terrace",
      "Wine storage",
      "24-hour security",
      "Valet parking",
    ],
    agentId: "agent-001",
    status: "for-sale",
    featured: true,
  },
  {
    id: "ef-004",
    slug: "coastal-villa-malibu",
    title: "Coastal Villa Malibu",
    type: "villa",
    location: {
      city: "Malibu",
      neighborhood: "Carbon Beach",
      state: "CA",
      country: "USA",
    },
    price: 5200000,
    beds: 5,
    baths: 5,
    area: 410,
    description:
      "Oceanfront villa with infinity pool, floor-to-ceiling glass, and direct beach access.",
    longDescription:
      "Coastal Villa Malibu is a statement residence with double-height living, chef's kitchen, and primary suite opening to ocean views. Outdoor living includes infinity pool, fire pit lounge, and private beach path. Designed for seamless California coastal living.",
    image: img,
    gallery: [img, img, img],
    features: [
      "Oceanfront",
      "Infinity pool",
      "Beach access",
      "Guest casita",
      "Home theater",
    ],
    agentId: "agent-003",
    status: "for-sale",
    featured: true,
  },
  {
    id: "ef-005",
    slug: "maple-condo-downtown",
    title: "Maple Condo Downtown",
    type: "condo",
    location: {
      city: "Denver",
      neighborhood: "LoDo",
      state: "CO",
      country: "USA",
    },
    price: 425000,
    beds: 1,
    baths: 1,
    area: 72,
    description:
      "Modern downtown condo steps from dining, transit, and mountain views.",
    longDescription:
      "Maple Condo Downtown offers efficient urban living with a bright open layout, balcony with mountain glimpses, and building gym. Walk to Union Station, breweries, and parks. Perfect starter home or investment rental.",
    image: img,
    gallery: [img, img],
    features: [
      "Mountain views",
      "Walk to transit",
      "Building gym",
      "Balcony",
      "Secure entry",
    ],
    agentId: "agent-002",
    status: "for-sale",
    featured: false,
  },
  {
    id: "ef-006",
    slug: "brookside-townhouse",
    title: "Brookside Townhouse",
    type: "townhouse",
    location: {
      city: "Brooklyn",
      neighborhood: "Park Slope",
      state: "NY",
      country: "USA",
    },
    price: 1180000,
    beds: 3,
    baths: 2,
    area: 165,
    description:
      "Classic brownstone-style townhouse with garden-level patio and modern updates.",
    longDescription:
      "Brookside Townhouse blends historic charm with contemporary updates: renovated kitchen, restored hardwoods, and a private rear patio. Three levels of living plus finished basement. Steps from Prospect Park and top restaurants.",
    image: img,
    gallery: [img, img, img],
    features: [
      "Private patio",
      "Renovated kitchen",
      "Finished basement",
      "Near Prospect Park",
      "Historic details",
    ],
    agentId: "agent-001",
    status: "pending",
    featured: false,
  },
  {
    id: "ef-007",
    slug: "lakeside-apartment",
    title: "Lakeside Apartment",
    type: "apartment",
    location: {
      city: "Seattle",
      neighborhood: "South Lake Union",
      state: "WA",
      country: "USA",
    },
    price: 695000,
    beds: 2,
    baths: 2,
    area: 105,
    description:
      "Lake Union views, modern amenities, and walkable tech-campus proximity.",
    longDescription:
      "Lakeside Apartment features an open kitchen-living area, two equal-sized bedrooms, and floor-to-ceiling windows framing water and city. Building includes co-working lounge, bike storage, and pet-friendly policy.",
    image: img,
    gallery: [img, img],
    features: [
      "Lake views",
      "Co-working lounge",
      "Pet friendly",
      "Bike storage",
      "Amazon campus nearby",
    ],
    agentId: "agent-003",
    status: "for-sale",
    featured: false,
  },
  {
    id: "ef-008",
    slug: "sunset-villa-scottsdale",
    title: "Sunset Villa Scottsdale",
    type: "villa",
    location: {
      city: "Scottsdale",
      neighborhood: "Silverleaf",
      state: "AZ",
      country: "USA",
    },
    price: 3100000,
    beds: 4,
    baths: 4,
    area: 340,
    description:
      "Desert modern villa with resort pool, mountain views, and golf course access.",
    longDescription:
      "Sunset Villa Scottsdale showcases desert contemporary architecture: rammed earth accents, expansive glass walls, and indoor-outdoor living around a resort-style pool. Gourmet kitchen, wine room, and casita for guests. Gated community with championship golf.",
    image: img,
    gallery: [img, img, img],
    features: [
      "Resort pool",
      "Mountain views",
      "Golf course access",
      "Guest casita",
      "Wine room",
    ],
    agentId: "agent-002",
    status: "for-sale",
    featured: false,
  },
];

export const featuredProperties = properties.filter((p) => p.featured);

export function getPropertyBySlug(slug: string) {
  return properties.find((p) => p.slug === slug);
}

export function getRelatedProperties(slug: string, limit = 3) {
  const current = getPropertyBySlug(slug);
  if (!current) return [];
  return properties
    .filter((p) => p.slug !== slug && p.type === current.type)
    .slice(0, limit);
}

export const propertyCities = Array.from(
  new Set(properties.map((p) => p.location.city))
).sort();
