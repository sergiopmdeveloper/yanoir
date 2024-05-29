/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.astro"],
  theme: {
    extend: {
      colors: {
        "theme-green": "#98C173",
        "theme-red": "#DA2528",
        "theme-black": "#000000",
      },
      screens: {
        xs: "480px",
      },
    },
  },
};
