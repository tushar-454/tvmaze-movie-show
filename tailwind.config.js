/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'deep-teal': {
          50: '#f1fcf9',
          100: '#cef9ed',
          200: '#9ef1db',
          300: '#65e3c6',
          400: '#35ccaf',
          500: '#1cb096',
          600: '#148d7a',
          700: '#147164',
          800: '#155a51',
          900: '#164b43',
          950: '#07332f',
        },
      },
    },
  },
  plugins: [],
};
