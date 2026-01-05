// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import netlify from "@astrojs/netlify";

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [vue()],
  output: "server",
  adapter: netlify(),
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
