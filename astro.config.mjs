// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import vue from "@astrojs/vue";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [vue()],

  adapter: node({
    mode: "standalone",
  }),
  output: "server",

  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Rubik",
        cssVariable: "--font-rubik",
        weights: [300, 400, 500],
        styles: ["normal"],
      },
    ],
  },
});
