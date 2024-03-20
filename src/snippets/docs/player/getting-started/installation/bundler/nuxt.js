import { vite as vidstack } from 'vidstack/plugins';

export default defineNuxtConfig({
  vite: {
    plugins: [vidstack()],
  },
});
