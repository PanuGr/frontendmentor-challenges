# Frontend Mentor - Base Apparel coming soon page solution

# Documentation for Base Apparel Coming Soon Page

## Overview

This project is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). The goal of this challenge is to create a responsive coming soon page for a fashion store. Users should be able to view the optimal layout for the site depending on their device's screen size, see hover states for all interactive elements on the page, and receive error messages when the form is submitted if the input field is empty or the email address is not formatted correctly.

## Used Technologies

- **HTML5**: Semantic HTML5 markup is used to structure the content of the page.
- **CSS3 / SCSS**: SCSS is used for styling the page, including CSS Grid for layout and custom form validation styling.
- **JavaScript**: JavaScript is used for form validation to ensure the email input is correctly formatted.
- **Google Fonts**: The 'Josefin Sans' font is imported from Google Fonts for typography.
- **Frontend Mentor**: The challenge and design files are provided by Frontend Mentor.

## Cool Features/Techniques Worth Mentioning

### CSS Grid Layout

The layout of the page is created using CSS Grid, which allows for a flexible and responsive design. The grid-template-areas property is used to define the layout for different sections of the page, making it easy to adjust the layout for different screen sizes.

```css
body {
  display: grid;
  grid-template-areas:
    "header"
    "hero"
    "main"
    "footer";
}

@media (min-width: 800px) {
  body {
    grid-template-columns: 1fr clamp(300px, 50vw, 610px);
    grid-template-areas:
      "header hero"
      "main hero"
      "footer hero";
  }
}
```

### Custom Form Validation

The form validation is handled using custom JavaScript to display error messages and styles when the email input is invalid. The built-in form validation is disabled using the `novalidate` attribute, and custom styles are applied to display error messages.

```html
<form novalidate>
  <input type="email" name="email" id="email" placeholder="Email Address" required aria-required="true" aria-label="Add your email address">
  <img src="./images/icon-error.svg" alt="">
  <input type="submit" value="" aria-label="submit your email">
  <p class="email-error">Please provide a valid email</p>
</form>
```

```scss
input[type="email"]:focus:invalid {
  border: 2px solid $soft-red;
}
```

### JavaScript Form Validation Function

A JavaScript function is used to validate the email input. If the email is invalid, the error message and error icon are displayed.

```javascript
const input = document.querySelector('input');
function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function formValidation(e) {
  e.preventDefault();
  if (!validateEmail(input.value)) {
    document.querySelector('.email-error').style.visibility = 'visible';
    document.querySelector('form img').style.visibility = 'visible';
  } else {
    location.reload();
  }
};
document.querySelector('input[type=submit]').addEventListener('click', formValidation);
```

### Mobile-First Workflow

The project is built with a mobile-first approach, ensuring that the design is responsive and looks good on all devices. Media queries are used to adjust the layout and styles for larger screens.

```scss
@media (min-width: 800px) {
  body {
    background-image: url("./images/bg-pattern-desktop.svg");
    background-position: 0% 60%;
    background-repeat: no-repeat;
    background-size: cover;
    justify-items: center;
  }
}
```

These techniques and features contribute to a well-structured, responsive, and user-friendly coming soon page.
### Screenshot

![](./images/screenshot.jpg)

## Acknowledgments

[Solution from Ike Tom](https://www.frontendmentor.io/solutions/mobile-first-less-grid-js-pCjbeLkPk)
I had trouble figuring out the custom form validation. His solution helped me fill the blanks.
