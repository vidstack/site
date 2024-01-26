export default defineNuxtConfig({
  vite: {
    // @hl-start
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag.startsWith('media-'),
      },
    },
    // @hl-end
  },
});
