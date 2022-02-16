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
        'hero-desktop': "url('images/bg-hero-desktop.svg')",
        'hero-mobile': "url('images/bg-hero-mobile.svg')"
      }
    },
  },
  plugins: [],
}
