import { vite as vidstack } from 'vidstack/plugins';

export default defineNuxtConfig({
  vite: {
    plugins: [
      // Include filter to only check specific files for components and styles.
      vidstack({ include: /player\// }),
    ],
  },
});
