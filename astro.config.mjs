import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  site: "https://github.com/StalinAM",
  base: "/alura-geek",
  integrations: [tailwind()],
  output: "server",
  adapter: netlify()
});