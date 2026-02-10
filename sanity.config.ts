import { visionTool } from '@sanity/vision';
import { createClient } from '@sanity/client';
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { Logo } from './desk/logo';
import { schemas } from './schemas';
import { myTheme } from './theme';

const sanityClient = createClient({
  projectId: process.env.PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.PUBLIC_SANITY_DATASET || '',
  apiVersion: '2024-01-01',
  useCdn: false,
});

const { projectId, dataset } = sanityClient.config();

if (!projectId || !dataset)
  throw new Error(
    'Both projectId and dataset must be set in order for the Sanity admin dashboard to properly function',
  );

const config = defineConfig({
  name: 'nithin-richard',
  title: 'Nithin Richard',
  projectId,
  dataset,
  icon: Logo,
  plugins: [structureTool(), visionTool()],
  tools: (prev) => {
    if (import.meta.env.DEV) {
      return prev;
    }
    return prev.filter((tool) => tool.name !== 'vision');
  },
  schema: {
    types: schemas,
  },
  theme: myTheme,
});

export default config;
