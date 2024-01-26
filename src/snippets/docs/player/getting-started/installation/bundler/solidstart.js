import { defineConfig } from '@solidjs/start/config';
import { vite as vidstack } from 'vidstack/plugins';

export default defineConfig({
  plugins: [
    // Include filter to only check specific files for components and styles.
    vidstack({ include: /player\// }),
  ],
});
