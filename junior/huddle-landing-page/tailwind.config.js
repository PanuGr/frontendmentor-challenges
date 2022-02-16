module.exports = {
  content: ["index.html"],
  theme: {
    fontFamily: {
      body: ['Open Sans'],
      headings: ['Poppins'],
    },

    extend: {
      colors: {
        'pink': '#ff52bf',
        'paleCyan': '#ebfbff',
        'darkCyan': '#00252e',
        'grayBlue': '#6c7781',

      },
      backgroundImage: {
        'hero-desktop': "url('https://raw.githubusercontent.com/PanuGr/frontendmentor-challenges/main/junior/huddle-landing-page/images/bg-hero-desktop.svg')",
        'hero-mobile': "url('images/bg-hero-mobile.svg')"
      }
    },
  },
  plugins: [],
}
