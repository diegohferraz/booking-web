/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{mjs,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      'sans': ['Inter', 'sans-serif']
    },
    extend: {
      colors: {
        primary: '#40CAA1',
        secondary: '#2D2AA5',
        defaultText: '#19172A'
      },
      backgroundImage: {
        'hero-img': "url('/hero-bkg.jpg')"
      }
    }
  },
  plugins: []
}
