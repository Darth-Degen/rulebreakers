/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        main: "url('/images/background.png')",
        button: "url('/images/button.png')",
        container: "url('/images/container-transparent.png') 30 round",
        "white-gradient": `linear-gradient(360.58deg, #FFFFFF 43.76%, rgba(255, 255, 255, 0) 106.82%)`,
        "red-gradient": `linear-gradient(360.3deg, #E77975 43.99%, rgba(255, 255, 255, 0) 105.7%)`,
        "orange-gradient": `linear-gradient(180deg, #F3B24E 0%, #EB4B46 100%)`,
      },
      fontFamily: {
        primary: ["MoonieEyes"],
        secondary: ["Discgent"],
      },
      colors: {
        "custom-black": "#121212",
        "custom-white": "#F3F1EA",
        "custom-white-2": "#EBE6E6",
        "light-orange": "#F3B24E",
        "dark-orange": "#EB4B46",
        "mid-orange": "#ee6a49",
        "mid-gray": "#302E2E",

        "custom-dark-gray": "#202020",
        "custom-light-gray": "#6F7273",
        "custom-light-gray-2": "#c4c2c3",
        "custom-yellow": "#FFBA21",
        "custom-green": "#56BC78",
        "custom-orange": "#FF5722",
        "custom-red": "#DF1D00",
        "custom-light-red": "#E77975",
      },
      screens: {
        "3xl": "2160px",
        "4xl": "3000px",
      },
    },
  },
  plugins: [],
};
