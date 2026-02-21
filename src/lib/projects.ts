// Local business website projects (affordable, simple, real-world examples)

export type StaticProject = {
    id: string;
    name: string;
    slug: string;
    description: string;
    tags: string[];
    value: string;
    demoUrl?: string;
};

export const projects: StaticProject[] = [
    {
        id: '0',
        name: 'Cafe Website',
        slug: 'cafe-website',
        description: 'Complete cafe website with menu, location, and contact information. Optimized for mobile users and fast loading.',
        tags: ['React', 'Tailwind CSS', 'Responsive'],
        value: 'Customers can easily find menu items, contact info, and location on their phones.',
        demoUrl: 'https://cafe-bhavan.vercel.app', // Placeholder - you can add your real link
    },
    {
        id: '1',
        name: 'Restaurant Menu Site',
        slug: 'restaurant-menu',
        description: 'Digital restaurant menu with categories, prices, and photo placeholders. Easy for customers to browse and order.',
        tags: ['Next.js', 'Framer Motion', 'Responsive'],
        value: 'Reduced wait time - customers can view menu on their phones before ordering.',
    },
    {
        id: '2',
        name: 'Small Business Landing Page',
        slug: 'small-business-landing',
        description: 'Professional landing page for local businesses with services, testimonials, and contact form.',
        tags: ['React', 'Tailwind CSS', 'SEO Optimized'],
        value: 'Higher conversion rate - potential customers get all info they need at a glance.',
    },
    {
        id: '3',
        name: 'Local Tourism Page',
        slug: 'local-tourism',
        description: 'Informational website for local tourism with guides, attractions, and booking links.',
        tags: ['React', 'Tailwind CSS', 'Google Maps Integration'],
        value: 'Attracts more visitors - travelers can easily find and book local experiences.',
    },
    {
        id: '4',
        name: 'Service Provider Website',
        slug: 'service-provider',
        description: 'Simple website for local service businesses (plumbers, electricians, etc.) with service listings and contact form.',
        tags: ['Next.js', 'Tailwind CSS', 'Contact Form'],
        value: '24/7 lead generation - potential customers can request service anytime.',
    },
    {
        id: '5',
        name: 'Simple E-commerce Store',
        slug: 'simple-ecommerce',
        description: 'Minimalist online store for small products with shopping cart and checkout.',
        tags: ['Next.js', 'Stripe Integration', 'Responsive'],
        value: 'New revenue stream - sells products 24/7 without manual work.',
    },
];
