/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        audiowide: ['Audiowide'],
        bebas: ['Bebas Neue', 'sans-serif'],
        bigshoulders: ['Big Shoulders', 'sans-serif'],
        dynalight: ['Dynalight', 'cursive'],
        merriweather: ['Merriweather Sans', 'sans-serif'],
        mitr: ['Mitr', 'sans-serif'],
        mulish: ['Mulish', 'sans-serif'],
        pirata: ['Pirata One', 'cursive'],
        roboto: ['Roboto', 'sans-serif'],
        smoochsans: ['Smooch Sans', 'sans-serif'],
        ubuntu: ['Ubuntu', 'sans-serif'],
        vina: ['Vina Sans', 'sans-serif'],
        zendots: ['Zen Dots', 'sans-serif'],
      },
      colors: {
        customwhite: '#f0f8ff41'
      }
      
    },
  },
  plugins: [],
}
