# Technical Notes

## Frontend Architecture

EstateFlow uses the Next.js App Router with a layered component architecture. Pages compose section and domain components; data lives in typed static files under `data/`.

```
components/
├── layout/       # Navbar, Footer
├── sections/     # Homepage sections
├── real-estate/  # Property, agent, neighborhood components
└── ui/           # Shared primitives
```

## App Routing

| Route | Purpose |
|-------|---------|
| `/` | Homepage |
| `/properties` | Listing catalog with filters |
| `/properties/[slug]` | Property detail |
| `/agents` | Agent profiles |
| `/neighborhoods` | Neighborhood directory |
| `/contact` | Inquiry form |

Dynamic routes use `generateStaticParams` for all property slugs.

## Data Structure

```
data/
├── properties.ts    # 8 listings with full metadata
├── agents.ts        # 4 agents
├── neighborhoods.ts # 6 neighborhoods
├── market-stats.ts  # 6 market metrics
├── testimonials.ts  # 3 testimonials
└── faqs.ts          # 5 FAQ items
```

Each property includes: id, slug, title, type, location, price, beds, baths, area, descriptions, image, gallery, features, agentId, status, featured.

## Property Catalog

The properties page reads `searchParams`, parses filters via `lib/filters.ts`, and renders a filtered `PropertyGrid`. Filters update the URL through `PropertyFilters` (client component wrapped in Suspense).

## Dynamic Property Pages

Detail pages load property by slug, render `PropertyGallery`, `PropertyDetails`, linked `AgentCard`, `MortgageCalculator`, `ContactForm`, and related properties of the same type.

## Search and Filter UI

Filters: text search, city, type, min/max price, bedrooms, sort order. State is stored in URL query parameters for bookmarking and sharing.

## Styling

Tailwind CSS v4 with custom estate color tokens in `globals.css` and `tailwind.config.ts`. Utility classes drive spacing, typography, and responsive breakpoints.

## Animations

Framer Motion is used sparingly:

- Hero fade-in on homepage
- Property and agent card hover lift
- Testimonial section reveal on scroll
- FAQ accordion expand/collapse

## Responsiveness

Mobile-first grids collapse to single column. Navbar includes a hamburger menu on small screens. Property detail stacks sidebar below content on mobile.

## Deployment

Built for Vercel with default Next.js settings. Set `NEXT_PUBLIC_SITE_URL` in environment variables. See [architecture/deployment.md](../architecture/deployment.md).
