module.exports = {
  content: ["./index.html"],
  theme: {
    
    fontFamily: {
      sans: ['Manrope', 'sans-serif']
    },

    extend: {
      backgroundImage: {
        'background': "url('./images/bg-pattern.svg')",
        'circles': "url('./images/pattern-circles.svg')",
        'slider':"url('./images/icon-slider.svg')",
      },
      colors: {
        green: '#10D5C2',
        softGreen: '#A5F3EB',
        softRed: '#FEECE7',
        red: '#FF8C66',
        softBlue: '#BDCCFF',
        bluish: {
          100: '#FAFBFF',
          200: '#EAEEFB',
          300: '#CDD7EE',
          400: '#858FAD',
          500: '#293356'
        }

      },
      listStyleType: {
        check: "url('./images/icon-check.svg')",
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: { darkTheme: 'false' }
}