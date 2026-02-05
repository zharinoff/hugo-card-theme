/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '../../content/**/*.md',
    '../../layouts/**/*.html',
    './layouts/**/*.html',
    './assets/**/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

