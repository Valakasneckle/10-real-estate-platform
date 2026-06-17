export type Agent = {
  id: string;
  name: string;
  role: string;
  location: string;
  phone: string;
  email: string;
  specialties: string[];
  listingsCount: number;
  rating: number;
  image: string;
  bio: string;
};

const img = "/images/agents/placeholder.svg";

export const agents: Agent[] = [
  {
    id: "agent-001",
    name: "Sarah Mitchell",
    role: "Senior Listing Agent",
    location: "Boston & New York",
    phone: "+1 (555) 201-4400",
    email: "s.mitchell@estateflow.example",
    specialties: ["Luxury condos", "Urban apartments", "First-time buyers"],
    listingsCount: 24,
    rating: 4.9,
    image: img,
    bio: "Sarah specializes in urban luxury properties and has helped over 200 families find their ideal home in competitive markets.",
  },
  {
    id: "agent-002",
    name: "Marcus Chen",
    role: "Residential Specialist",
    location: "Austin & Denver",
    phone: "+1 (555) 201-4401",
    email: "m.chen@estateflow.example",
    specialties: ["Single-family homes", "Investment properties", "Relocation"],
    listingsCount: 31,
    rating: 4.8,
    image: img,
    bio: "Marcus brings deep market knowledge across Texas and Colorado, with a focus on family homes and investment opportunities.",
  },
  {
    id: "agent-003",
    name: "Elena Rodriguez",
    role: "Luxury Property Advisor",
    location: "California & Arizona",
    phone: "+1 (555) 201-4402",
    email: "e.rodriguez@estateflow.example",
    specialties: ["Waterfront estates", "Villas", "High-net-worth clients"],
    listingsCount: 18,
    rating: 5.0,
    image: img,
    bio: "Elena advises on premium coastal and desert properties, delivering discreet service for discerning buyers and sellers.",
  },
  {
    id: "agent-004",
    name: "James Okonkwo",
    role: "Neighborhood Expert",
    location: "Chicago & Midwest",
    phone: "+1 (555) 201-4403",
    email: "j.okonkwo@estateflow.example",
    specialties: ["Penthouses", "Historic homes", "Market analysis"],
    listingsCount: 22,
    rating: 4.7,
    image: img,
    bio: "James combines neighborhood expertise with data-driven pricing strategies to help clients make confident decisions.",
  },
];

export function getAgentById(id: string) {
  return agents.find((a) => a.id === id);
}
