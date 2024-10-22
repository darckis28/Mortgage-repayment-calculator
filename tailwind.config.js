/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Lime: {
          DEFAULT: "hsl(61, 70%, 52%)",
          light: "hsl(61, 70%, 70%)",
        },
        Red: "hsl(4, 69%, 50%)",
        Slate: {
          100: "hsl(202, 86%, 94%)",
          300: "hsl(203, 41%, 72%)",
          500: "hsl(200, 26%, 54%)",
          700: "hsl(200, 24%, 40%)",
          900: "hsl(202, 55%, 16%)",
          xl: "hsl(202, 55%, 10%)",
        },
      },
      fontFamily: {
        "Plus-Jakarta-Sans": ["Plus Jakarta Sans", "sans-serif"],
      },
      size: {
        140: "3rem",
      },
    },
  },
  plugins: [],
};
