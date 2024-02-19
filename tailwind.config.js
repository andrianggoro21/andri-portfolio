/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-color': '#080022',
        'bg-color2': '#0F0239',
        'bg-button': '#7B4AE2'
      },
      fontFamily: {
        'raleway': ['Raleway', 'sans-serif'],
      },
      fontSize: {
        '56': '56px',
        // tambahkan ukuran font lainnya sesuai kebutuhan
      }
    },
  },
  plugins: [],
}

