# Frontend Mentor - Single price grid component solution

This is a solution to the [Single price grid component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/single-price-grid-component-5ce41129d0ff452fec5abbbc).

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See a hover state on desktop for the Sign Up call-to-action

## Overview

I like using flexbox. This was a simple design so I got to use flexbox with flex-basis for an automatic change on the layout.

```css
div {
  display: flex;
  flex-wrap: wrap;
}

div section {
  flex-grow: 1;
  flex-basis: calc(calc(500px - 100%) * 100);
  /*The layout will automatically change from row to column at around 500px */
}
```

### Screenshot

![](./images/screenshot.jpg)

### Links

- Solution URL: [Github repository](https://github.com/PanuGr/price-component)
- Live Site URL: [Github pages](https://panugr.github.io/price-component)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
## Author

- Website - [Panagiotis Panagiotakopoulos](https://panagiotis.netlify.com)
- Frontend Mentor - [PanuGr](https://www.frontendmentor.io/profile/PanuGr)
- Linkedin - [Panagiotakopoulos](https://www.linkedin.com/in/p-panagiotakopoulos/)
