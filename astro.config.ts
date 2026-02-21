import partytown from '@astrojs/partytown';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';
import robotsTxt from 'astro-robots-txt';
import webmanifest from 'astro-webmanifest';
import { defineConfig } from 'astro/config';
import serviceWorker from 'astrojs-service-worker';
import { siteConfig } from './src/lib/config/site';

const { name, backgroundColor, themeColor, url } = siteConfig;

// https://astro.build/config
const config = defineConfig({
  site: url,
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
  prefetch: {
    prefetchAll: true,
  },
  experimental: {
    clientPrerender: true,
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    react(),
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    }),
    serviceWorker(),
    sitemap(),
    robotsTxt(),
    webmanifest({
      name,
      short_name: name,
      background_color: backgroundColor,
      theme_color: themeColor,
      display: 'standalone',
      prefer_related_applications: true,
      start_url: '/',
      icon: './public/favicon.svg',
      config: {
        outfile: 'site.webmanifest',
        iconPurpose: ['any', 'maskable'],
        insertAppleTouchLinks: true,
      },
    }),
  ],
});

export default config;
