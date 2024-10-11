/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      maxWidth: {
        main: '62.5rem',
      },
      animation: {
        pulse: 'pulse 1s ease-in-out alternate infinite',
      },
      keyframes: {
        pulse: {
          '0%': { opacity: 0.5 },
          '100%': { opacity: 1 },
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-roboto-mono)'],
      },
    },
  },
  plugins: [],
};
