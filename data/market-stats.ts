export type MarketStat = {
  id: string;
  label: string;
  value: string;
  description: string;
  icon: "listings" | "price" | "days" | "inquiries" | "neighborhoods" | "agents";
};

export const marketStats: MarketStat[] = [
  {
    id: "ms-001",
    label: "Active Listings",
    value: "248",
    description: "Properties currently available across all markets",
    icon: "listings",
  },
  {
    id: "ms-002",
    label: "Average Sale Price",
    value: "$1.2M",
    description: "Median price across featured markets this quarter",
    icon: "price",
  },
  {
    id: "ms-003",
    label: "Average Days on Market",
    value: "32",
    description: "Typical time from listing to accepted offer",
    icon: "days",
  },
  {
    id: "ms-004",
    label: "Buyer Inquiries",
    value: "1,840",
    description: "Viewing requests and inquiries this month",
    icon: "inquiries",
  },
  {
    id: "ms-005",
    label: "Neighborhoods Covered",
    value: "36",
    description: "Curated areas with local market insights",
    icon: "neighborhoods",
  },
  {
    id: "ms-006",
    label: "Trusted Agents",
    value: "48",
    description: "Licensed advisors in our partner network",
    icon: "agents",
  },
];
