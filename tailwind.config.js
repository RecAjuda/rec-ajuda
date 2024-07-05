/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "min-h-700": { raw: "(min-height: 700px)" },
      xs: "500px",
      xs1: "570px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    },
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        poppies: ["Poppies", "sans-serif"],
      },
    },
  },
  plugins: [],
};
