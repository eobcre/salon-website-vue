/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,vue}'],
  theme: {
    extend: {
      colors: {
        'dark-gray': '#303030',
      },
    },
  },
  plugins: [],
};
