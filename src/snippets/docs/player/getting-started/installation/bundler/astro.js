import { defineConfig } from 'astro/config';
import { vite as vidstack } from 'vidstack/plugins';

export default defineConfig({
  vite: {
    plugins: [
      // Include filter to only check specific files for components and styles.
      vidstack({ include: /player\// }),
    ],
  },
});
