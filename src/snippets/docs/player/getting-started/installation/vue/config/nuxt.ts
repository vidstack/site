export default defineNuxtConfig({
  vue: {
    // @hl-start
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag.startsWith('media-'),
      },
    },
    // @hl-end
  },
});
