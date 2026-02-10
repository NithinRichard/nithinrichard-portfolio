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
      className="group grid gap-6 lg:grid-cols-5"
    >
      <ServiceCard
        parentMousePositionX={mousePositionX}
        parentMousePositionY={mousePositionY}
        className="rounded-ss-xl max-lg:rounded-t-xl lg:col-span-2"
      >
        <div>
          <ServiceCardTitle>Full-Stack Web App</ServiceCardTitle>
          <ServiceCardPrice>Custom quote</ServiceCardPrice>
          <ServiceCardDescription>
            Complete web applications with modern frontend, robust backend,
            database design, and deployment-ready architecture.
          </ServiceCardDescription>
          <ServiceCardList>
            <ServiceCardBenefitListItem>React / Next.js frontend</ServiceCardBenefitListItem>
            <ServiceCardBenefitListItem>Node.js / Express backend</ServiceCardBenefitListItem>
            <ServiceCardBenefitListItem>PostgreSQL database</ServiceCardBenefitListItem>
            <ServiceCardBenefitListItem>RESTful API design</ServiceCardBenefitListItem>
            <ServiceCardBenefitListItem>Authentication & security</ServiceCardBenefitListItem>
          </ServiceCardList>
        </div>
        <ServiceCardCallToAction />
      </ServiceCard>
      <ServiceCard
        parentMousePositionX={mousePositionX}
        parentMousePositionY={mousePositionY}
        className="lg:col-span-3 lg:rounded-es-xl"
      >
        <div>
          <ServiceCardTitle>API Development</ServiceCardTitle>
          <ServiceCardPrice>Custom quote</ServiceCardPrice>
          <ServiceCardDescription>
            Well-documented, scalable RESTful APIs with clean architecture
            and proper error handling.
          </ServiceCardDescription>
          <ServiceCardList>
            <ServiceCardBenefitListItem>Clean architecture patterns</ServiceCardBenefitListItem>
            <ServiceCardBenefitListItem>Comprehensive documentation</ServiceCardBenefitListItem>
            <ServiceCardBenefitListItem>Input validation & sanitization</ServiceCardBenefitListItem>
            <ServiceCardBenefitListItem>Rate limiting & security</ServiceCardBenefitListItem>
            <ServiceCardBenefitListItem>Testing & reliability</ServiceCardBenefitListItem>
          </ServiceCardList>
        </div>
        <ServiceCardCallToAction />
      </ServiceCard>
      <ServiceCard
        parentMousePositionX={mousePositionX}
        parentMousePositionY={mousePositionY}
        className="lg:col-span-3 lg:rounded-se-xl"
      >
        <div>
          <ServiceCardTitle>Dashboard & Admin Panels</ServiceCardTitle>
          <ServiceCardPrice>Custom quote</ServiceCardPrice>
          <ServiceCardDescription>
            Data-driven dashboards and admin interfaces for operational
            control and business insights.
          </ServiceCardDescription>
          <ServiceCardList>
            <ServiceCardBenefitListItem>Interactive data visualization</ServiceCardBenefitListItem>
            <ServiceCardBenefitListItem>Role-based access control</ServiceCardBenefitListItem>
            <ServiceCardBenefitListItem>CRUD operations</ServiceCardBenefitListItem>
            <ServiceCardBenefitListItem>Real-time updates</ServiceCardBenefitListItem>
            <ServiceCardBenefitListItem>Export & reporting</ServiceCardBenefitListItem>
          </ServiceCardList>
        </div>
        <ServiceCardCallToAction />
      </ServiceCard>

      <ServiceCard
        parentMousePositionX={mousePositionX}
        parentMousePositionY={mousePositionY}
        className="rounded-ee-xl max-lg:rounded-b-xl lg:col-span-2"
      >
        <div>
          <ServiceCardTitle>Custom Solution</ServiceCardTitle>
          <ServiceCardPrice>Let&apos;s talk</ServiceCardPrice>
          <ServiceCardDescription>
            Need a custom full-stack solution? I design and build scalable web products
            tailored to your business goals.
          </ServiceCardDescription>
        </div>
        <ServiceCardCallToAction />
      </ServiceCard>
    </div>
  );
}

export { ServicesGrid };
