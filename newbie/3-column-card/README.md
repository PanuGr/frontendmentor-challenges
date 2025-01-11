# Frontend Mentor - 3-column preview card component solution

## Overview
This project is a solution to the [3-column preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/3column-preview-card-component-pH92eAR2-). The goal of the challenge is to create a responsive 3-column preview card component that displays information about different types of cars.

## Technologies Used
- Semantic HTML5 markup
- SCSS variables and nesting
- Flexbox
- Mobile-first workflow

## Features
- Responsive design that adapts to different screen sizes
- Hover states for interactive elements (buttons)
- Clean and organized layout using Flexbox
- Semantic HTML for better accessibility

## Cool Code Techniques
1. **SCSS Variables and Nesting:**
   The project uses SCSS for styling, which allows for the use of variables and nesting. This makes the code more maintainable and readable. For example:
   ```scss
   $Bright-orange: hsl(31, 77%, 52%);
   $Dark-cyan: hsl(184, 100%, 22%);
   $Very-dark-cyan: hsl(179, 100%, 13%);
   ```

2. **Flexbox Layout:**
   The layout is achieved using Flexbox, which provides a flexible and efficient way to arrange the columns. The columns are stacked on top of each other on smaller screens and aligned side by side on larger screens:
   ```scss
   @media (min-width: 700px) {
     main {
       display: flex;
     }
   }
   ```

3. **Mobile-first Workflow:**
   The project follows a mobile-first approach, where the styles for mobile devices are defined first, and then media queries are used to adjust the layout for larger screens:
   ```scss
   @media (min-width: 700px) {
     body {
       height: 100vh;
     }
     main {
       max-width: $Desktop;
       display: flex;
     }
   }
   ```

4. **Button Hover States:**
   The buttons have a hover state implemented using SCSS, which changes the background and text color when the button is hovered over, providing a visual cue for interactivity:
   ```scss
   button {
     &:hover,
     &:active,
     &:focus {
       cursor: pointer;
       color: $gray-background-headings-buttons;
       background-color: initial;
     }
   }
   ```

## Conclusion

This project showcases a well-structured and responsive 3-column preview card component using modern web technologies such as HTML5, SCSS, and Flexbox. The mobile-first workflow ensures that the component looks great on all devices, and the use of SCSS variables and nesting enhances the maintainability of the code. The hover states on the buttons add an interactive element to the design, making it more user-friendly.

## Screenshot
[Mobile version](./images/mobile.jpg)
[Desktop version](./images/desktop.jpg) 
