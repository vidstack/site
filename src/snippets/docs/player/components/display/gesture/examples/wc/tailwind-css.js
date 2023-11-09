/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [pointerVariants],
};

function pointerVariants({ addVariant }) {
  addVariant('pointer-fine', '@media (pointer: fine)');
  addVariant('pointer-coarse', '@media (pointer: coarse)');
}
