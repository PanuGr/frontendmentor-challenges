# Frontend Mentor - Intro component with sign up form solution

## Overview

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say _"[Field Name] cannot be empty"_
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Looks like this is not an email"_

## What I learned
In this project I use the built-in form validation but I wrote the code below to show the errors.
It took a while to figure it out but I am very happy with the result. The validation works already when typing.

```js
const userInput = document.querySelectorAll('input:not(input[type="submit"])');
const errorMessages = document.querySelectorAll(".error-message");

userInput.forEach((input, index) => {
  input.addEventListener("blur", () => {
    if (!input.checkValidity()) {
      errorMessages[index].classList.remove("invisible");
    }
  });

  input.addEventListener("keyup", () => {
    if (input.checkValidity()) {
      errorMessages[index].classList.add("invisible");
    }
  });
});
```
I also use the `:invalid` css selector to style invalid inputs 

````css
input:focus:invalid {
  outline-color: var(--red);
  background: url("./images/icon-error.svg") no-repeat;
  background-position: 95%;
}
````
### Screenshot

![](./images/screenshot.jpg)



### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- Mobile-first workflow
