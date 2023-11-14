/** @type {import('tailwindcss').Config} */
module.exports = {
  // ...
  plugins: [
    // https://github.com/jamiebuilds/tailwindcss-animate
    require('tailwindcss-animate'),
    customVariants,
  ],
};

function customVariants({ matchVariant }) {
  // Strict version of `.group` to help with nested menus (i.e., submenus).
  matchVariant('parent-data', (value) => `.parent[data-${value}] > &`);
}
