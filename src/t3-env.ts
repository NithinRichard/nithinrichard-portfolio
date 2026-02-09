import { createEnv } from '@t3-oss/env-core';
import { z } from 'zod';

const env = createEnv({
  server: {
    DEV: z.boolean(),
    RESEND_API_KEY: z.string().default(''),
  },
  client: {
    PUBLIC_SANITY_PROJECT_ID: z.string().default(''),
    PUBLIC_SANITY_DATASET: z.string().default('production'),
    PUBLIC_GOOGLE_SITE_VERIFICATION: z.string().default(''),
    PUBLIC_GOOGLE_ANALYTICS_ID: z.string().default(''),
  },
  runtimeEnv: import.meta.env,
  // Process is not available in Astro, so we must set this explicitly
  skipValidation: import.meta.env.SKIP_ENV_VALIDATION === 'true',
  clientPrefix: 'PUBLIC_',
});

export { env };
