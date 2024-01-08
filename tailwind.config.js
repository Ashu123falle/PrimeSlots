/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './Components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'figtree': ['Figtree', 'sans-serif'],
        'Figtree': ['Figtree', 'sans-serif'],
        'Playfair': ['Playfair Display', 'serif'],
        'Nexa-Regular':['Nexa','sans-serif'],
      },
      screens: {
        'xs': '180px',
        '3xl': '1650px' // min-width
      },
    },
  },
  plugins: [],
}
