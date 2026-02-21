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
  // Local business case studies (examples for future development)
  'cafe-website': {
    summary:
      'Built a complete cafe website for a local Trivandrum cafe with menu, location, and contact information. Focused on mobile users and fast loading.',
    role: 'Designed the full website, implemented menu functionality, and ensured mobile responsiveness.',
    stack: ['React', 'Tailwind CSS', 'Responsive Design'],
    highlights: [
      'Clean, modern design that matches cafe aesthetic.',
      'Menu organized by category (breakfast, lunch, dinner, drinks).',
      'Mobile-optimized with easy navigation and quick loading.',
      'Contact form for reservations and inquiries.',
    ],
    outcomes: [
      'Customers can browse menu on their phones before visiting.',
      'Reduced phone calls - many customers check menu online first.',
      'Online ordering integration (in development).',
    ],
    screenshots: [],
  },
  'restaurant-menu': {
    summary:
      'Created a digital restaurant menu for a local establishment with categories, prices, and photo placeholders.',
    role: 'Designed menu layout, implemented category filtering, and added mobile-friendly navigation.',
    stack: ['Next.js', 'Framer Motion', 'Responsive Design'],
    highlights: [
      'Easy-to-browse menu organized by category.',
      'Quick load times even on mobile networks.',
      'Search functionality for finding dishes quickly.',
      'Photo placeholders for visual appeal.',
    ],
    outcomes: [
      'Customers can view menu on their phones while waiting.',
      'Reduced staff time answering menu questions.',
      'Easy to update menu (no need to reprint paper menus).',
    ],
    screenshots: [],
  },
  'small-business-landing': {
    summary:
      'Developed a professional landing page for a local small business with services, testimonials, and contact form.',
    role: 'Designed complete landing page with sections for services, benefits, testimonials, and contact.',
    stack: ['React', 'Tailwind CSS', 'SEO Optimized'],
    highlights: [
      'Professional design that builds trust with visitors.',
      'Clear value proposition and call-to-action.',
      'Testimonials section to build social proof.',
      'Contact form for lead generation.',
    ],
    outcomes: [
      'Higher conversion rate - visitors get all info they need.',
      'More qualified leads - customers who find value are more likely to contact.',
      'Better SEO - appears in local search results.',
    ],
    screenshots: [],
  },
};

export { caseStudies, type CaseStudyDetails };
