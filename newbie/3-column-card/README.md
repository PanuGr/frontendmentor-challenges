# Frontend Mentor - 3-column preview card component solution
This is a solution to the [3-column preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/3column-preview-card-component-pH92eAR2-).

### The challenge

Users should be able to:
- View the optimal layout depending on their device's screen size
- See hover states for interactive elements(buttons)

### Screenshot

[Mobile version](./images/mobile.jpg)
[Desktop version](./images/desktop.jpg)

### Links

- Solution URL: [Github repository](https://github.com/PanuGr/3-column-card)
- Live Site URL: [Github pages](https://panugr.github.io/3-column-card/)

## My process
For this layout I decided to use flexbox on bigger screens, so the columns will stack next to each other.
For mobiles, i just centered the layout and the columns are simply stacked on top of each other.
For each box i have created a class.

### Built with

- Semantic HTML5 markup
- SCSS variables and nesting
- Flexbox
- Mobile-first workflow

### What I learned
At first I thought to use the selector `::nth-child()` for my `section` containers but after a while, I noticed that this selector has higher specificity and it was creating problems with my button-styling. That's why I created 3 separate classes instead to control the design better. 

## Author

- Website - [Panagiotis Panagiotakopoulos](https://panagiotis.netlify.com)
- Frontend Mentor - [PanuGr](https://www.frontendmentor.io/profile/PanuGr)
- Linkedin - [Panagiotakopoulos](https://www.linkedin.com/in/p-panagiotakopoulos/)
