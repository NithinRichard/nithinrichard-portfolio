// Static project data - no Sanity CMS required

export type StaticProject = {
    id: string;
    name: string;
    slug: string;
    description: string;
    tags: string[];
    value: string;
};

export const projects: StaticProject[] = [
    {
        id: '1',
        name: 'Tasheel Lab Management Platform',
        slug: 'tasheel-lab',
        description: 'Complete lab workflow application with patient registration, order management, sample lifecycle tracking, result entry, report generation, and PDF printing.',
        tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
        value: 'Integrated lab operations into one reliable digital system.',
    },
    {
        id: '2',
        name: 'Secure Authentication & Access Control',
        slug: 'auth-system',
        description: 'JWT-based authentication with role-based access control, session management, and API security for multi-role access (Admin, Receptionist, Lab User, Collection Staff).',
        tags: ['JWT', 'Express', 'Security', 'RBAC'],
        value: 'Secure, scalable access control for enterprise applications.',
    },
    {
        id: '3',
        name: 'Booking & Phlebotomist Operations',
        slug: 'booking-system',
        description: 'Full booking flow with location-aware slot selection, phlebotomist assignment, real-time availability checks, and rescheduling/cancellation support.',
        tags: ['React', 'Node.js', 'PostgreSQL', 'Scheduling'],
        value: 'Streamlined home collection scheduling and field operations.',
    },
    {
        id: '4',
        name: 'Masters Management Suite',
        slug: 'masters-management',
        description: 'CRUD modules for roles, regions, labs, tests, specimens, time slots, barcodes, partners, and related mappings using reusable service/repository patterns.',
        tags: ['TypeScript', 'Knex.js', 'PostgreSQL', 'APIs'],
        value: 'Consistent data management and easier long-term maintenance.',
    },
    {
        id: '5',
        name: 'Reliability & Test Coverage',
        slug: 'testing',
        description: 'Jest-based testing framework with service-level unit tests, mock setups, and edge case coverage for critical business logic.',
        tags: ['Jest', 'Testing', 'QA', 'Reliability'],
        value: 'Confidence in code quality and reduced production bugs.',
    },
];
