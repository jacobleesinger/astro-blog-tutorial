import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: 'https://fabulous-lokum-4b89c9.netlify.app/',
  integrations: [preact()]
});