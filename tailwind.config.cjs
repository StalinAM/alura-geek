/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["Raleway Variable"],
    },
    extend: {
      gridTemplateColumns: {
        "box-s": "repeat(auto-fill, minmax(140px, 157px))",
        "box-x": "repeat(auto-fill, minmax(140px, 170px))",
      },
    },
  },
  plugins: [],
};
