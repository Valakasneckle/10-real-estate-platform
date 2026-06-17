export type FAQ = {
  id: string;
  question: string;
  answer: string;
};

export const faqs: FAQ[] = [
  {
    id: "faq-001",
    question: "How do I schedule a property viewing?",
    answer:
      "Browse listings, open a property detail page, and use the inquiry form or contact page to request a viewing. An agent will confirm availability within one business day.",
  },
  {
    id: "faq-002",
    question: "Can I filter properties by budget and bedrooms?",
    answer:
      "Yes. The properties page includes filters for price range, property type, bedrooms, and location. You can also use the home page search to jump straight to matching results.",
  },
  {
    id: "faq-003",
    question: "Are the listings on EstateFlow real?",
    answer:
      "This portfolio project uses realistic mock data to demonstrate platform UX and architecture. A production deployment would connect to a live MLS or property management API.",
  },
  {
    id: "faq-004",
    question: "How does the mortgage calculator work?",
    answer:
      "The calculator on each property detail page estimates monthly payments based on price, down payment, interest rate, and loan term. It is for planning purposes and not a loan offer.",
  },
  {
    id: "faq-005",
    question: "Do you work with rental properties?",
    answer:
      "The platform supports both for-sale and for-rent listing types. Filter by status on the properties page or mention your preference in the contact form.",
  },
];
