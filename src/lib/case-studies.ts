type CaseStudyDetails = {
  summary: string;
  role: string;
  stack: string[];
  highlights: string[];
  outcomes: string[];
  screenshots: {
    src: string;
    label: string;
  }[];
};

const caseStudies: Record<string, CaseStudyDetails> = {
  'shopify-store': {
    summary:
      'Designed and implemented a Shopify storefront focused on product discovery, fast browsing, and conversion-friendly shopping flows for fashion buyers.',
    role: 'Built and customized the storefront UI, theme behavior, and core conversion flow.',
    stack: ['Shopify', 'Liquid', 'HTML', 'CSS', 'JavaScript'],
    highlights: [
      'Customized the storefront layout for cleaner navigation and category browsing.',
      'Optimized product-page structure to improve readability and add-to-cart clarity.',
      'Refined mobile experience for browsing, filtering, and checkout transitions.',
      'Improved visual consistency across homepage, collection, and product templates.',
    ],
    outcomes: [
      'Delivered a production-ready Shopify website with better UX consistency.',
      'Reduced friction in discovery-to-checkout path on mobile and desktop.',
      'Improved presentation quality for products, collections, and promotions.',
    ],
    screenshots: [],
  },
};

export { caseStudies, type CaseStudyDetails };
