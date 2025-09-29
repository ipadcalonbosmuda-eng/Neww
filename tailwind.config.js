/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'ppmori': ['PPMori', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        'plasmatic-green': '#00d4aa',
        'plasmatic-teal': '#00a88a',
      },
    },
  },
  plugins: [],
};
