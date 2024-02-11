import { sveltekit } from '@sveltejs/kit/vite';
import { vite as vidstack } from 'vidstack/plugins';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    // Include filter to only check specific files for components and styles.
    vidstack({ include: /player\// }),
    sveltekit(),
  ],
});
