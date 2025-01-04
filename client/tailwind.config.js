/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/daisyui/dist/**/*.js",
    "node_modules/react-daisyui/dist/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#607c3c",
          50: "#EDFED8",
          200: "#D2E69E",
          400: "#abc32f",
          600: "#809c13",
          900: "#809c13",
        },
        secondary: "#FFFFFF",
        tertiary: "#F5F5F5",
      },
    },
    plugins: [require("daisyui")],
  },
};
