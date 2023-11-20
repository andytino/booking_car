/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        secondary: "#ADCE74",
        green: {
          50: '#ADCE74',
          100: "#61B15A"
        },
        yellow: {
          50: "#FFF76A"
        },
        orange :{
          50:"#FFCE89"
        },
        blue: {
          50: "#8B9CB3",
        },
        gray: {
          50: "#A9A9A9"
        }
      },
    },
  },
  plugins: [],
};
