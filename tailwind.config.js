/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'ice-blue': '#FF6B9D',
        'ice-light': '#FFB3D9',
        'ice-dark': '#C891FF',
        'ice-purple': '#9D4EDD',
        'ice-purple-light': '#C77DFF',
        'ice-purple-dark': '#7B2CBF',
      },
    },
  },
  plugins: [],
}
