# Features

## Platform Features

- Premium homepage with full buyer journey sections
- Multi-page site: properties, agents, neighborhoods, contact
- Dynamic property detail routes
- Market statistics overview
- Testimonials and FAQ sections
- Portfolio-ready documentation and architecture notes

## Property Search Features

- Location selector (city)
- Property type filter (apartment, house, condo, townhouse, penthouse, villa)
- Price range (min/max)
- Bedroom count filter
- Search button redirects to filtered catalog
- URL query parameters for shareable search state

## Listing Features

- Property grid with responsive columns
- Property cards with image, price, beds, baths, area
- Featured badge and status labels
- Sort by featured, price, or newest
- Empty state when no matches
- Related properties on detail page

## Agent Features

- Agent profile cards with photo placeholder
- Role, location, rating, and listings count
- Specialty tags
- Email and phone contact links (placeholder data)
- Agent card on property detail page linked by `agentId`

## Lead Generation Features

- Contact page inquiry form
- Property detail sidebar inquiry form
- Fields: name, email, phone, location, budget, property type, message
- CTA sections on homepage
- "Schedule a viewing" button on detail pages

## UI Features

- Clean white and warm neutral interface
- Gold, beige, navy, and soft blue accents
- Playfair Display + Inter typography pairing
- Large property imagery placeholders
- Subtle Framer Motion animations
- Mobile-first responsive layout
- Sticky navigation and detail sidebar

## Developer Features

- TypeScript data models
- Reusable component architecture
- `cn()` utility for class merging (clsx + tailwind-merge)
- Format helpers for price and area
- Filter parsing and application in `lib/filters.ts`
- Static data files for easy content updates
- MIT license and `.env.example`
