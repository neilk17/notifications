/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'red': 'hsl(1, 90%, 64%)',
      'blue': 'hsl(219, 85%, 26%)',
      'gray-blue-1': 'hsl(210, 60%, 98%)',
      'gray-blue-2': 'hsl(211, 68%, 94%)',
      'gray-blue-3': 'hsl(205, 33%, 90%)',
      'gray-blue-4': 'hsl(219, 14%, 63%)',
      'gray-blue-5': 'hsl(219, 12%, 42%)',
      'gray-blue-6': 'hsl(224, 21%, 14%)',
    },
    fontFamily: {
      sans: ['Plus Jakarta Sans', 'sans-serif'],
    },
    extend: {

    },
  },
  plugins: [],
}
