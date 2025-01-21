/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  safelist: [
    "bg-primarySoftOrange",
    "bg-primarySoftBlue",
    "bg-primaryLightRed",
    "bg-primaryLimeGreen",
    "bg-primaryViolet",
    "bg-primaryLightYellow",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
      colors: {
        primaryBlue: "hsl(246, 80%, 60%)",
        primarySoftOrange: "hsl(15, 100%, 70%)", //work
        primarySoftBlue: "hsl(195, 74%, 62%)", //play
        primaryLightRed: "hsl(348, 100%, 68%)", //study
        primaryLimeGreen: "hsl(145, 58%, 55%)", //exercise
        primaryViolet: "hsl(264, 64%, 52%)", //social
        primaryLightYellow: "hsl(43, 84%, 65%)", //self care

        secondaryVeryDarkBlue: "hsl(226, 43%, 10%)",
        secondaryDarkBlue: "hsl(235, 46%, 20%)",
        secondaryDesaturatedBlue: "hsl(235, 45%, 61%)",
        secondaryPaleBlue: "hsl(236, 100%, 87%)",
      },
    },
  },
  plugins: [],
};
