// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        marty: {
          black: "#000000",
          charcoal: "#0a0a0b",
          navy: "#0b1220",
          steel: "#cdd5e0",
          purple: "#a27bbf",
          gold: "#c2a35a",
        },
      },
      backgroundImage: {
        "deck-gradient": "linear-gradient(to bottom, #000000, #0a0a0b, #0b1220)",
      },
    },
  },
  plugins: [],
};