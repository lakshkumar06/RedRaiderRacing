/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins"],
        sofia: ["Sofia Sans Semi Condensed"],
      },
      colors: {
        primary: '#FF1E00', // Example: Blue
        
        // Add more custom colors as needed
      },
    },
  },
  plugins: [],
}

