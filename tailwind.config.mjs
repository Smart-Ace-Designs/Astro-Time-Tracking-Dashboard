/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  safelist: [
    "bg-theme-soft-orange",
    "bg-theme-soft-blue",
    "bg-theme-light-red",
    "bg-theme-lime-green",
    "bg-theme-primary-violet",
    "bg-theme-light-yellow",
  ],
  theme: {
    extend: {
      screens: {
        sm: "640px", // default value
        md: "800px", // wider medium breakpoint
        lg: "1200px", // adjusted large breakpoint
        xl: "1280px", // default value
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
      colors: {
        "theme-blue": "hsl(246, 80%, 60%)",
        "theme-soft-orange": "hsl(15, 100%, 70%)", //work
        "theme-soft-blue": "hsl(195, 74%, 62%)", //play
        "theme-light-red": "hsl(348, 100%, 68%)", //study
        "theme-lime-green": "hsl(145, 58%, 55%)", //exercise
        "theme-primary-violet": "hsl(264, 64%, 52%)", //social
        "theme-light-yellow": "hsl(43, 84%, 65%)", //self care

        "theme-very-dark-blue": "hsl(226, 43%, 10%)",
        "theme-dark-blue": "hsl(235, 46%, 20%)",
        "theme-hover-blue": "hsl(235, 46%, 35%)",
        "theme-desaturated-blue": "hsl(235, 45%, 61%)",
        "theme-pale-blue": "hsl(236, 100%, 87%)",
      },
    },
  },
  plugins: [],
};
