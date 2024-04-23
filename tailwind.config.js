/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      aspectRatio: {
        '260/201': '260 / 201',
      },
      boxShadow: {
        'header': '0px 4px 10px 5px rgba(232, 232, 232, 0.25)',
        'about': '0px 0px 40px 5px rgba(0, 0, 0, 0.06)',

      },
      colors: {
        'primary': '#333',
        'secondary': '#373737',
        'bg_footer': '#F9F9F9',
        'blue': '#03337B',
        'red': '#E50000',
        'gray': '#87909D',
      },
    },
  },
  plugins: [],
}

