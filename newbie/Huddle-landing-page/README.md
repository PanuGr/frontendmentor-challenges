# Frontend Mentor - Huddle landing page

## Overview

This project is a solution to the [Huddle landing page with single introductory section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/huddle-landing-page-with-a-single-introductory-section-4B8wL2Zs9). The goal of this challenge is to create a responsive landing page for Huddle, with a two-column layout that adjusts according to the screen size.

## Used Technologies

- **HTML5**: Semantic HTML5 markup is used to structure the content of the page.
- **CSS3 / SCSS**: SCSS is used for styling the page, including CSS Grid for layout.
- **JavaScript**: Used for interactive elements and form validation.
- **IonIcons**: Open source icon library used for social media icons.
- **Google Fonts**: 'Open Sans' and 'Poppins' fonts are imported from Google Fonts for typography.

## Cool Features/Techniques Worth Mentioning

### CSS Grid Layout

The layout of the page is created using CSS Grid, which allows for a flexible and responsive design. The grid-template-rows property is used to define the layout for different sections of the page, and grid-template-columns is used to create a responsive two-column layout without the need for media queries.

```scss
body {
  display: grid;
  grid-template-rows: auto 1fr auto;
  background-color: var(--Violet);
  background-image: url("./images/bg-mobile.svg");
  background-repeat: no-repeat;
  background-size: contain;
  text-align: center;
  color: white;
}

main {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
}
```

### Mobile-First Workflow

The project is built with a mobile-first approach, ensuring that the design is responsive and looks good on all devices. The background image and layout adjust automatically based on the screen size.

```scss
@media (min-width: 650px) {
  body {
    background-image: url("./images/bg-desktop.svg");
    max-width: 1600px;
    margin: auto;
  }
  header img {
    width: 20%;
  }
  main {
    gap: 2rem;
    padding: 1rem;
    text-align: initial;
    align-items: center;
  }
}
```

### Custom Button and Hover States

Custom styles are applied to the register button and social media icons to enhance the user experience. The button changes color on hover, and the icons have a hover effect that changes their color and border.

```scss
.register {
  margin: 1rem 0;
  color: var(--Violet);
  background-color: white;
  padding: 0.5rem 4rem;
  display: inline-block;
  border-radius: 30px;
  box-shadow: 3px 5px 7px 0px rgba(0, 0, 0, 0.45);
  &:hover {
    background-color: var(--Magenta);
    color: wheat;
  }
}

footer ion-icon {
  margin: 0 5px;
  border: 1px solid white;
  border-radius: 100%;
  padding: 5px;
  &:hover {
    color: #c91dc9;
    opacity: initial;
    border-color: #c91dc9;
  }
}
```

These techniques and features contribute to a well-structured, responsive, and user-friendly landing page for Huddle.
![](./images/screenshot.jpg)
