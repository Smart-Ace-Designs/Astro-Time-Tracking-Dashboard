/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        // Primary
        "sad-blue": "hsl(246, 80%, 60%)",
        "sad-peach": "hsl(15, 100%, 70%)", // Work
        "sad-soft-blue": "hsl(195, 74%, 62%)", // Play
        "sad-light-red": "hsl(348, 100%, 68%)", // Study
        "sad-lime-green": "hsl(145, 58%, 55%)", // Exercise
        "sad-violet": "hsl(264, 64%, 52%)", // Social
        "sad-soft-orange": "hsl(43, 84%, 65%)", // Self-Care

        // Neutral
        "sad-very-dark-blue": "hsl(226, 43%, 10%)",
        "sad-dark-blue": "hsl(235, 46%, 20%)",
        "sad=desaturated-blue": "hsl(235, 45%, 61%)",
        "sad-pale-blue": "hsl(236, 100%, 87%)",
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
    },
  },
  plugins: [],
};
