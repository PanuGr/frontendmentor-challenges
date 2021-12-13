# Frontend Mentor - Base Apparel coming soon page solution

## Overview

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0).

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Screenshot

![](./images/screenshot.jpg)

### Links

- Solution URL: [Github repository](https://github.com/PanuGr/coming-soon)
- Live Site URL: [Github pages](https://panugr.github.io/coming-soon)

## My process

Another interesting challenge from Front Mentor. This time I had the opportunity to work on my css grid skills and form validation.
For the layout I used the grid-template-areas to position the picture and the main content.
```css
body {
  grid-template-areas:
    "header hero"
    "main hero"
    "footer hero";
}
```
The form validation was trickier than I thought.
I like using the build-in validation because there in no need for overcomplexity so I started styling the form's error with css.
```css
input[type="email"]:focus:invalid {
  border: 2px solid red;
}
```
However I realized that the design had custom design for the validation errors, their position and colors so I had to remove the build-in form validation( I used the `novalidate` attribute) and to include some javascript.

### Built with

- Semantic HTML5 markup
- Scss
- CSS Grid
- Mobile-first workflow

### Useful resources

- [Basic form validation](https://www.webtrickshome.com/faq/how-to-display-error-message-in-html-form-with-javascript-form-validation-without-using-alert) - This helped me to start with custom form validation.

## Author

- Website - [Panagiotis Panagiotakopoulos](https://panagiotis.netlify.com)
- Frontend Mentor - [PanuGr](https://www.frontendmentor.io/profile/PanuGr)
- Linkedin - [Panagiotakopoulos](https://www.linkedin.com/in/p-panagiotakopoulos/)

## Acknowledgments

[Solution from Ike Tom](https://www.frontendmentor.io/solutions/mobile-first-less-grid-js-pCjbeLkPk)
I had trouble figuring out the custom form validation. His solution helped me fill the blanks.
