export default defineNuxtConfig({
  vue: {
    // @hl-start
    compilerOptions: {
      isCustomElement: (tag) => tag.startsWith('media-'),
    },
    // @hl-end
  },
});
