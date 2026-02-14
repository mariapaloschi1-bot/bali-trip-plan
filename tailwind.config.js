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
        'tropical-pink': '#FF6B9D',
        'tropical-lilac': '#C891FF',
        'tropical-purple': '#9D4EDD',
        'tropical-light': '#FFB3D9',
        'tropical-dark': '#7B2CBF',
        'tropical-coral': '#FF8FA3',
      },
    },
  },
  plugins: [],
}
