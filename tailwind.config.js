/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        ssm: "320px",
      },
      colors: {
        base: "#192229",
      },
    },
  },
  plugins: [],
};
