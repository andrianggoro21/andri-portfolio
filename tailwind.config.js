/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-color": "#080022",
        "bg-color2": "#0F0239",
        "bg-color3": "#000210",
        "bg-button": "#7B4AE2",
        "sub-title": "#817A90",
        "bar-color1": "#8C76D5",
        "bar-color2": "#331F74",
        "bg-tools": "#321471",
        "bg-email": "#2D294C",
        "bg-light": "#2C185E",
        "bg-see": "#8882CA",
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
      },
      fontSize: {
        28: "28px",
        56: "56px",
        48: "48px",
      },
      height: {
        3: "3px",
        200: "200px",
        500: "500px",
        550: "550px",
        600: "600px",
        700: "700px",
      },
      width: {
        300: "300px",
        350: "350px",
        400: "400px",
        500: "500px",
        550: "550px",
        600: "600px",
      },
      screens: {
        'xs': {'max': '359px'},
      }
    },
  },
  plugins: [],
};
