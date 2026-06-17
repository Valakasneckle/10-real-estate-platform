export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  role: string;
  location: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    id: "t-001",
    quote:
      "EstateFlow made our home search effortless. We filtered by neighborhood, compared properties side by side, and connected with an agent who knew the market inside out.",
    author: "David & Rachel K.",
    role: "First-time buyers",
    location: "Boston, MA",
    rating: 5,
  },
  {
    id: "t-002",
    quote:
      "As a relocation client, I needed clarity fast. The property detail pages and neighborhood guides gave me confidence before I even scheduled a viewing.",
    author: "Priya S.",
    role: "Corporate relocation",
    location: "Austin, TX",
    rating: 5,
  },
  {
    id: "t-003",
    quote:
      "Our agency uses EstateFlow-style presentation for listings. Clean cards, strong photography placement, and inquiry CTAs that actually convert.",
    author: "Michael Torres",
    role: "Broker, Torres Realty Group",
    location: "Chicago, IL",
    rating: 4,
  },
];
