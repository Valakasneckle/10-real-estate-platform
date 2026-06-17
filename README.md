# EstateFlow — Real Estate Platform Website

A premium real estate platform website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Live Demo

**[https://real-estate-platform-website-three.vercel.app/](https://real-estate-platform-website-three.vercel.app/)**

## Screenshots

Add screenshots to the `screenshots/` folder, then they will display here:

| Page | Screenshot |
|------|------------|
| Home (desktop) | `./screenshots/01-home-desktop.png` |
| Home (mobile) | `./screenshots/02-home-mobile.png` |
| Properties | `./screenshots/03-properties-page.png` |
| Property detail | `./screenshots/04-property-detail.png` |
| Agents | `./screenshots/05-agents-page.png` |
| Contact | `./screenshots/06-contact-page.png` |
| Lighthouse | `./screenshots/07-lighthouse.png` |

## Project Overview

EstateFlow is a fictional premium real estate platform designed for property discovery, listing browsing, property detail pages, agent profiles, neighborhood insights, and buyer/renter inquiries. The project demonstrates how a real estate business can present inventory clearly, guide users through search and comparison, and convert visitors into viewing requests.

## Business Goal

The platform helps real estate businesses present listings clearly, improve property discovery, build buyer trust, and convert visitors into viewing requests or inquiries. Every page is structured around the buyer journey: discover → filter → compare → inquire.

## Key Features

- Premium real estate homepage with hero, search, and featured listings
- Property search section with location, type, price, and bedroom filters
- Property listing page with URL-driven filters and sort
- Dynamic property detail pages with gallery and related listings
- Agent profiles page with ratings and specialties
- Neighborhoods page with lifestyle tags and average prices
- Market stats section with key metrics
- Mortgage calculator UI on property detail pages
- Contact/inquiry page with budget and property type fields
- Responsive desktop and mobile layout
- Reusable component architecture (layout, sections, real-estate, ui)
- Conversion-focused CTA sections
- Clean Tailwind CSS styling with gold and neutral accents

## Tech Stack

- **Next.js** — App Router, dynamic routes, server components
- **TypeScript** — type-safe data models and components
- **Tailwind CSS** — utility-first styling and design tokens
- **Framer Motion** — subtle hero, card, and section animations
- **Lucide React** — consistent iconography
- **Vercel** — production deployment

## Architecture

- [System Overview](./architecture/system-overview.md)
- [Component Structure](./architecture/component-structure.md)
- [User Flow](./architecture/user-flow.md)
- [Deployment](./architecture/deployment.md)

## What This Project Demonstrates

- Real estate platform development
- Property catalog architecture with typed mock data
- Dynamic detail pages (`/properties/[slug]`)
- Search and filter UI with shareable URL state
- Trust-focused UX design (agents, testimonials, market stats)
- Responsive UI implementation
- Reusable component architecture
- Frontend architecture suitable for real client projects

## Getting Started

```bash
pnpm install
pnpm dev
```

Or with npm:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
pnpm build
```

Or:

```bash
npm run build
```

## Future Improvements

- Add real backend API and database
- Add property management dashboard for agents
- Add authentication and saved properties
- Add map search and geolocation filters
- Add CRM integration for lead routing
- Add booking/viewing scheduler
- Add email notifications for inquiries
- Add CMS integration for listing content
- Add advanced SEO landing pages by city and neighborhood
- Add analytics tracking and conversion funnels

## Case Study

Read the full business and technical case study: [docs/case-study.md](./docs/case-study.md)

## License

MIT — see [LICENSE](./LICENSE).
