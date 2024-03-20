import { defineConfig } from '@solidjs/start/config';
import { vite as vidstack } from 'vidstack/plugins';

export default defineConfig({
  plugins: [vidstack()],
});
