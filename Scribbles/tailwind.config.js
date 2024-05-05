/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'scribbles-purple': '#422A3C',
        'scribbles-dark-purple': '#785B77',
        'scribbles-light-purple': '#BA7894',
        'scribbles-pink': '#ECBFD3',
        'scribbles-light-pink': '#EED7E1',
        'scribbles-light': '#FFF2F8'
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["light"],
  }
}