# Frontend Mentor - Stats preview card component solution

## Overview
I am starting a series of Front-end challenges from the [Frontend Mentor](https://www.frontendmentor.io) so I can practice and improve. The first challenge is a card component.
Here is a solution to the [Stats preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62). 


### The challenge
Users should be able to:
- View the optimal layout depending on their device's screen size. There are 2 sizes, mobile and desktop.

### Screenshot
[Mobile version](./images/mobile-screenshot.jpg)
[Desktop version](./images/desktop-screenshot.jpg)

### Links
- Solution URL: [Github repository](https://github.com/PanuGr/stats-preview-card)
- Live Site URL: [Github pages](https://panugr.github.io/stats-preview-card)

## My process
### Built with

- Semantic HTML5 markup
- SCSS variables
- SCSS nesting
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

When I started the challenge I thought I totally knew what I'm about to do. I would separate the card into 2 `sections`, displayed as `flex` (my favorite layout) and I would use a `div` as an overlay on top of an `img` tag. Easy-piesy...or so I thought!
Soon I realized that a div, positioned absolute over the image doesn't work well with flexbox. So, I decided to change my approach and try something different.
Instead a div, I use the `::after` pseudo-element as an overlay of a `background-image` and
instead of flexbox, I use `grid`, even though i don't feel comfortable using it.
To my surprise, what i was trying to do for hours, came together effortlessly in minutes!


```scss
main {
  display:grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.5fr 1fr;
  }
.overlay {
  background-image: url("./images/image-header-mobile.jpg");}
.overlay::after {
    content: "";
    background-color: $violet;
    opacity: 0.5;
    display: block;
    width: 100%;
    height: 100%;
  }
```

### Continued development
This challenge challenged my comfort area for sure and it made me understand that i should use the grid system more often in my layouts.
## Author

- Website - [Panagiotis Panagiotakopoulos](https://panagiotis.netlify.com)
- Frontend Mentor - [PanuGr](https://www.frontendmentor.io/profile/PanuGr)
- Linkedin - [Panagiotakopoulos](https://www.linkedin.com/in/p-panagiotakopoulos/)
