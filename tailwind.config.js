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
        "white-text-gradient": `linear-gradient(360.58deg, #FFFFFF 43.76%, rgba(255, 255, 255, 0) 106.82%)`,
        "red-text-gradient": `linear-gradient(360.3deg, #E77975 43.99%, rgba(255, 255, 255, 0) 105.7%)`,
      },
      fontFamily: {
        primary: ["PressStart"],
        pressStart: ["PressStart"],
        daysOne: ["DaysOne"],
      },
      colors: {
        lightRed: "#ff9596",
        customRed: "#cf1714",
        dark: "#121212",
        "custom-black": "#121212",
        "custom-dark-gray": "#202020",
        "custom-mid-gray": "#303030",
        "custom-light-gray": "#6F7273",
        "custom-light-gray-2": "#c4c2c3",
        "custom-yellow": "#FFBA21",
        "custom-green": "#56BC78",
        "custom-orange": "#FF5722",
        "custom-red": "#DF1D00",
        "custom-light-red": "#E77975",
        // orange -> #fdba74
        // red -> #f87171
        // gray-300 -> #d1d5db
      },
      screens: {
        "3xl": "2160px",
        "4xl": "3000px",
      },
    },
  },
  plugins: [],
};
