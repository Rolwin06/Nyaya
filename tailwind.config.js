/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nyaya: {
          ivory: '#F5EBDD',
          marble: '#EFE5D6',
          burgundy: '#711F24',
          'burgundy-hover': '#5E181C',
          gold: '#A77A35',
          'gold-light': '#C59A4E',
          'gold-dark': '#8A6224',
          brown: '#302016',
          'brown-muted': '#6B584C',
          parchment: '#E8D8BF',
          'sidebar-bg': '#F6EFE6',
          'input-bg': '#FAF5EC',
          'input-border': '#DFCDB8',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Cinzel', 'Georgia', 'serif'],
        cinzel: ['"Cinzel"', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'roman': '0 4px 20px -2px rgba(48, 32, 22, 0.08), 0 2px 6px -1px rgba(48, 32, 22, 0.04)',
        'sidebar': '2px 0 12px rgba(48, 32, 22, 0.04)',
      }
    },
  },
  plugins: [],
}
