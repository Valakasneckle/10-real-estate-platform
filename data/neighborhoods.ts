export type Neighborhood = {
  id: string;
  slug: string;
  name: string;
  city: string;
  description: string;
  averagePrice: number;
  lifestyleTags: string[];
  propertyCount: number;
  image: string;
};

const img = "/images/properties/placeholder.svg";

export const neighborhoods: Neighborhood[] = [
  {
    id: "nb-001",
    slug: "seaport-boston",
    name: "Seaport",
    city: "Boston",
    description:
      "Waterfront district with modern towers, dining, and harbor walks. Popular with young professionals.",
    averagePrice: 920000,
    lifestyleTags: ["Waterfront", "Walkable", "Nightlife"],
    propertyCount: 48,
    image: img,
  },
  {
    id: "nb-002",
    slug: "westlake-austin",
    name: "Westlake",
    city: "Austin",
    description:
      "Established neighborhood with top schools, hill country views, and family-friendly streets.",
    averagePrice: 1350000,
    lifestyleTags: ["Family-friendly", "Top schools", "Suburban"],
    propertyCount: 62,
    image: img,
  },
  {
    id: "nb-003",
    slug: "river-north-chicago",
    name: "River North",
    city: "Chicago",
    description:
      "Gallery district turned luxury hub with high-rises, art scene, and fine dining.",
    averagePrice: 2100000,
    lifestyleTags: ["Urban luxury", "Arts", "Dining"],
    propertyCount: 35,
    image: img,
  },
  {
    id: "nb-004",
    slug: "park-slope-brooklyn",
    name: "Park Slope",
    city: "Brooklyn",
    description:
      "Tree-lined blocks near Prospect Park, brownstones, and a strong community feel.",
    averagePrice: 1150000,
    lifestyleTags: ["Historic", "Parks", "Community"],
    propertyCount: 41,
    image: img,
  },
  {
    id: "nb-005",
    slug: "south-lake-union",
    name: "South Lake Union",
    city: "Seattle",
    description:
      "Tech-forward waterfront area with modern apartments and lake access.",
    averagePrice: 780000,
    lifestyleTags: ["Tech hub", "Waterfront", "Modern"],
    propertyCount: 29,
    image: img,
  },
  {
    id: "nb-006",
    slug: "silverleaf-scottsdale",
    name: "Silverleaf",
    city: "Scottsdale",
    description:
      "Gated golf community with desert views, resort amenities, and luxury estates.",
    averagePrice: 2800000,
    lifestyleTags: ["Golf", "Gated", "Desert luxury"],
    propertyCount: 22,
    image: img,
  },
];
