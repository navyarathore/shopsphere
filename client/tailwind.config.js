/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        amazon: {
          blue: '#131921',
          lightblue: '#232f3e',
          yellow: '#febd69',
          orange: '#f90',
        },
      },
    },
  },
  plugins: [],
}
