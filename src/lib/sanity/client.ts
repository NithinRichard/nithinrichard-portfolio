import { createClient } from '@sanity/client';
import { env } from '@/t3-env';

const hasSanityConfig = Boolean(env.PUBLIC_SANITY_PROJECT_ID && env.PUBLIC_SANITY_DATASET);

const sanityClient = createClient({
  projectId: env.PUBLIC_SANITY_PROJECT_ID || 'dummy',
  dataset: env.PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
});

export { hasSanityConfig, sanityClient };
