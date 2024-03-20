import { defineConfig } from 'astro/config';
import { vite as vidstack } from 'vidstack/plugins';

export default defineConfig({
  vite: {
    plugins: [vidstack()],
  },
});
