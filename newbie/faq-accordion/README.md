# Frontend Mentor - FAQ accordion card solution

## Overview

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam).

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Screenshot

![](./images/accordion.jpg)

### Links

- Solution URL: [Github repository](https://github.com/PanuGr/faq-accordion)
- Live Site URL: [github pages](https://panugr.github.io/faq-accordion)

## My process

I decided to build this faq-accordion using just HTML and CSS.

In my .html file, I am using the `details` and `summary` tags which were perfect for this design.
Then the card is divided in 2 parts with a `figure` and a `section` tag. The figure contains 1 main image and the section contains the accordion.

In my .scss file, I have stored the colors in a map-array. The whole content is centered by `display:grid;`, `place-content:center;` and my card is displayed as flexbox for bigger screens.

The opening of the accordion is also styled and controlled from css.

Most of the images are displayed and positioned with the `::before`/`::after` selector.

### Built with

- Semantic HTML5 markup
- SCSS variable, maps, nesting
- Flexbox
- Mobile-first workflow

### What I learned

It was nice that I could use the `details` tag and learn more about controlling and styling it:
```scss
details[open] {
  summary {
    font-weight: 700; //font-weight on the title
    &::after {
      transform: rotate(180deg); //rotation of the arrow-icon
    }
  }
  p {
    color: map-get($map: $colors, $key: lightgray);
  }
}
```
Also working with many images overlapping each other was challenging and I had to get creative.
### Continued development

I am still not comfortable working with svgs but this time was better than last time, so that's improvement 🙂

### Useful resources

- [`<details>`: The Details disclosure element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details) - This article from MDN explains the details-tag and it helped me understand how to style its build-in marker.
- [Details & Symmary](https://youtu.be/PQtpZZQU0u0) - A quick tutorial video about these 2 html tags.

## Author

- Website - [Panagiotis Panagiotakopoulos](https://panagiotis.netlify.com)
- Frontend Mentor - [PanuGr](https://www.frontendmentor.io/profile/PanuGr)
- Linkedin - [Panagiotakopoulos](https://www.linkedin.com/in/p-panagiotakopoulos/)
