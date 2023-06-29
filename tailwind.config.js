module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      width: {
        '635': '40rem',
        '800': '50rem',
        '45%': '45%'
      },
      height: {
        '40vh': '40vh',
        '100vh': '100vh'
      },
      spacing: {
        '5%': '5%'
      },
      zIndex: {
        '1': '1',
        '5': '5',
        '15': '15',
      },
      keyframes: {
        showBtns: {
          '0%': { justifyContent: 'space-evenly', opacity: '0' },
          '100%': { justifyContent: 'space-between', opacity: '1' },
        },
        changeProductImg: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      },
      animation: {
        showBtns: 'showBtns 1s both 2s',
        // changeProductImg: 'changeProductImg 2s both',
      }
    },
  },
  plugins: [],
}