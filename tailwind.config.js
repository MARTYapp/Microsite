module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        ripple: {
          '0%': { opacity: '1', transform: 'scale(0.5)' },
          '100%': { opacity: '0', transform: 'scale(4)' },
        },
      },
      animation: {
        ripple: 'ripple 0.8s ease-out forwards',
      },
    },
  },
  plugins: [],
};<div
className="absolute w-16 h-16 animate-ripple bg-white/10 rounded-full pointer-events-none"
/>