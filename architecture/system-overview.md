# System Overview

```mermaid
flowchart TD
    Visitor[Visitor] --> Website[EstateFlow Website]

    Website --> HomePage[Home Page]
    Website --> PropertiesPage[Properties Page]
    Website --> PropertyDetail[Property Detail Page]
    Website --> AgentsPage[Agents Page]
    Website --> NeighborhoodsPage[Neighborhoods Page]
    Website --> ContactPage[Contact Page]

    HomePage --> Hero[Hero]
    HomePage --> PropertySearch[Property Search]
    HomePage --> FeaturedProperties[Featured Properties]
    HomePage --> Neighborhoods[Neighborhoods]
    HomePage --> MarketStats[Market Stats]
    HomePage --> Agents[Agents]
    HomePage --> CTA[CTA]

    PropertiesPage --> Filters[Filters]
    PropertiesPage --> Search[Search]
    PropertiesPage --> PropertyGrid[Property Grid]

    PropertyDetail --> Gallery[Gallery]
    PropertyDetail --> Details[Property Details]
    PropertyDetail --> AgentCard[Agent Card]
    PropertyDetail --> MortgageCalc[Mortgage Calculator]
    PropertyDetail --> InquiryCTA[Inquiry CTA]

    ContactPage --> InquiryForm[Inquiry Form]
    InquiryForm --> FutureCRM[Future CRM Integration]
    InquiryForm --> FutureEmail[Future Email Notification]
```

## Explanation

Visitors enter EstateFlow through the homepage or directly via property, agent, or contact URLs. The homepage funnels users into property search or featured listings. The properties page applies filters and renders a grid of cards. Property detail pages provide full information, agent contact, mortgage estimates, and inquiry forms. Contact submissions are UI-only in this demo but are architected for future CRM and email integration.
