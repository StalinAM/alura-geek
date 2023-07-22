/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["Raleway Variable"],
    },
    extend: {
      gridTemplateColumns: {
        "box-x": "repeat(auto-fill, minmax(140px, 150px))",
      },
    },
  },
  plugins: [],
};
