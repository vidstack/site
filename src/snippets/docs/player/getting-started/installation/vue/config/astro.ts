import vue from '@astrojs/vue';
import { defineConfig } from 'astro/config';

export default defineConfig({
  vite: {
    plugins: [
      vue({
        // @hl-start
        template: {
          compilerOptions: {
            isCustomElement: (tag) => tag.startsWith('media-'),
          },
        },
        // @hl-end
      }),
    ],
  },
});
