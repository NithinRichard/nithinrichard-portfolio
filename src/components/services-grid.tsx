import {
  ServiceCard,
  ServiceCardBenefitListItem,
  ServiceCardCallToAction,
  ServiceCardDescription,
  ServiceCardList,
  ServiceCardPrice,
  ServiceCardTitle,
} from '@/components/service-card';
import { useMotionValue } from 'framer-motion';
import { type MouseEvent } from 'react';

function ServicesGrid() {
  const mousePositionX = useMotionValue(0);
  const mousePositionY = useMotionValue(0);

  function handleMouseMove({ clientX, clientY }: MouseEvent) {
    mousePositionX.set(clientX);
    mousePositionY.set(clientY);
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      className="group grid gap-6 lg:grid-cols-2"
    >
      {/* Local Business Websites */}
      <ServiceCard
        parentMousePositionX={mousePositionX}
        parentMousePositionY={mousePositionY}
        className="rounded-ss-xl max-lg:rounded-t-xl lg:col-span-2"
      >
        <div>
          <ServiceCardTitle>Cafe & Restaurant Websites</ServiceCardTitle>
          <ServiceCardPrice>₹5,000 - ₹15,000</ServiceCardPrice>
          <ServiceCardDescription>
            Complete restaurant/cafe website with menu, location, contact form, and online ordering integration.
          </ServiceCardDescription>
          <ServiceCardList>
            <ServiceCardBenefitListItem>Menu with categories</ServiceCardBenefitListItem>
            <ServiceCardBenefitListItem>Contact form for reservations</ServiceCardBenefitListItem>
            <ServiceCardBenefitListItem>Mobile-optimized design</ServiceCardBenefitListItem>
            <ServiceCardBenefitListItem>Online ordering (WhatsApp/Stripe)</ServiceCardBenefitListItem>
            <ServiceCardBenefitListItem>24/7 availability</ServiceCardBenefitListItem>
          </ServiceCardList>
        </div>
        <ServiceCardCallToAction />
      </ServiceCard>

      {/* Small Business Landing Page */}
      <ServiceCard
        parentMousePositionX={mousePositionX}
        parentMousePositionY={mousePositionY}
        className="lg:col-span-1 lg:rounded-es-xl"
      >
        <div>
          <ServiceCardTitle>Small Business Landing Page</ServiceCardTitle>
          <ServiceCardPrice>₹3,000 - ₹7,000</ServiceCardPrice>
          <ServiceCardDescription>
            Professional landing page for local businesses with services, testimonials, and contact form.
          </ServiceCardDescription>
          <ServiceCardList>
            <ServiceCardBenefitListItem>Clear value proposition</ServiceCardBenefitListItem>
            <ServiceCardBenefitListItem>Testimonials section</ServiceCardBenefitListItem>
            <ServiceCardBenefitListItem>Contact form for leads</ServiceCardBenefitListItem>
            <ServiceCardBenefitListItem>SEO optimized</ServiceCardBenefitListItem>
          </ServiceCardList>
        </div>
        <ServiceCardCallToAction />
      </ServiceCard>

      {/* Full-Stack Web App */}
      <ServiceCard
        parentMousePositionX={mousePositionX}
        parentMousePositionY={mousePositionY}
        className="lg:col-span-1 lg:rounded-se-xl"
      >
        <div>
          <ServiceCardTitle>Full-Stack Web App</ServiceCardTitle>
          <ServiceCardPrice>Custom quote</ServiceCardPrice>
          <ServiceCardDescription>
            Complete web applications with modern frontend, robust backend, database design, and deployment-ready architecture.
          </ServiceCardDescription>
          <ServiceCardList>
            <ServiceCardBenefitListItem>React/Next.js frontend</ServiceCardBenefitListItem>
            <ServiceCardBenefitListItem>Node.js backend</ServiceCardBenefitListItem>
            <ServiceCardBenefitListItem>PostgreSQL database</ServiceCardBenefitListItem>
            <ServiceCardBenefitListItem>Authentication & security</ServiceCardBenefitListItem>
          </ServiceCardList>
        </div>
        <ServiceCardCallToAction />
      </ServiceCard>

      {/* Simple E-commerce */}
      <ServiceCard
        parentMousePositionX={mousePositionX}
        parentMousePositionY={mousePositionY}
        className="rounded-ee-xl max-lg:rounded-b-xl lg:col-span-2"
      >
        <div>
          <ServiceCardTitle>Simple E-commerce Store</ServiceCardTitle>
          <ServiceCardPrice>₹10,000 - ₹25,000</ServiceCardPrice>
          <ServiceCardDescription>
            Online store for small products with shopping cart, checkout, and product management.
          </ServiceCardDescription>
          <ServiceCardList>
            <ServiceCardBenefitListItem>Product catalog</ServiceCardBenefitListItem>
            <ServiceCardBenefitListItem>Shopping cart & checkout</ServiceCardBenefitListItem>
            <ServiceCardBenefitListItem>Stripe payment integration</ServiceCardBenefitListItem>
            <ServiceCardBenefitListItem>Easy product management</ServiceCardBenefitListItem>
            <ServiceCardBenefitListItem>Mobile-friendly shopping</ServiceCardBenefitListItem>
          </ServiceCardList>
        </div>
        <ServiceCardCallToAction />
      </ServiceCard>
    </div>
  );
}

export { ServicesGrid };
