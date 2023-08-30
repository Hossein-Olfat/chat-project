/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // fontFamily: {
      //   estedad_black: "estedad-black",
      //   estedad_bold: "estedad-bold",
      //   estedad_light: "estedad-light",
      //   estedad_medium: "estedad-medium",
      //   estedad_thin: "estedad-thin",
      // },
      screens: {
        ssm: { max: "425px" },
      },
    },
  },
  plugins: [],
};
