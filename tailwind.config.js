/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#348834'
        },
        bone: {
          DEFAULT: '#f8f4f4'
        },
        navy: {
          DEFAULT: '#2864ac'
        },
        contrast: {
          DEFAULT: '#bcc848'
        },
        myorange: {
          DEFAULT: '#f79738'
        }
      }
    },
    listStyleType: {
      roman: 'upper-roman',
      disc: 'disc',
      square: 'square'
    },
    minHeight: {
      '80': '20rem'
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
