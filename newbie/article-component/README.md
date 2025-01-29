# Frontend Mentor - Article preview component solution

### Screenshot
![](./images/screenshot.jpg)

## Overview

This project is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). The goal of this challenge is to create a responsive article preview component that adjusts to different screen sizes and includes social media share links that appear when the share icon is clicked.

## Used Technologies

- **HTML5**: Semantic HTML5 markup is used to structure the content of the page.
- **CSS3 / SCSS**: SCSS is used for styling the page, including Flexbox and CSS Grid for layout.
- **JavaScript**: JavaScript is used to handle the toggle functionality for the share tooltip.
- **Font Awesome**: Open source icon library used for social media icons.
- **Google Fonts**: 'Manrope' font is imported from Google Fonts for typography.

## Cool Features/Techniques Worth Mentioning

### CSS Grid and Flexbox Layout

The layout of the component is created using a combination of CSS Grid and Flexbox, allowing for a flexible and responsive design. CSS Grid is used for the overall layout, while Flexbox is used for aligning elements within the grid.

```scss
main {
  margin: 2rem;
  min-width: 320px;
  max-width: 475px;
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 200px 1fr;
}

section {
  padding-top: 2rem;
  display: grid;
  grid-template-columns: 10% 80% 10%;
}
```

### Custom Share Tooltip

A custom share tooltip is created using JavaScript and CSS. The tooltip appears when the share button is clicked and includes links to share the article on Facebook, Twitter, and Pinterest.

```html
<button aria-label="Open share menu">
  <i class="fas fa-share fa-2x" aria-hidden="true"></i>
</button>
<div class="tooltip" role="tooltip">
  <div class="tooltip-text">
    <p>SHARE</p>
    <a href="https://www.facebook.com/sharer.php" aria-label="Share on facebook"><i class="fab fa-facebook-square" aria-hidden="true"></i></a>
    <a href="https://twitter.com/intent/tweet" aria-label="Share on twitter"><i class="fab fa-twitter" aria-hidden="true"></i></a>
    <a href="http://pinterest.com/pin/create/link/" aria-label="Share on pinterest"><i class="fab fa-pinterest" aria-hidden="true"></i></a>
  </div>
</div>
```

### JavaScript Toggle Function

A JavaScript function is used to handle the toggling of the share tooltip. When the share button is clicked, the tooltip's visibility is toggled, and CSS classes are added or removed to handle transitions.

```javascript
const button = document.querySelector("button");
const tooltip = document.querySelector(".tooltip");

function toggle() {
  if (tooltip.style.visibility === 'visible') {
    tooltip.style.visibility = 'hidden'
    button.classList.remove('active-state')
    tooltip.classList.remove('transitions')
  } else {
    tooltip.style.visibility = 'visible'
    button.classList.add('active-state')
    tooltip.classList.add('transitions')
  }
}
button.addEventListener('click', toggle);
```

### Responsive Design

The component is designed to be responsive and adjusts its layout based on the screen size. Media queries are used to change the layout for larger screens.

```scss
@media (min-width: 760px) {
  main {
    grid-template-columns: minmax(150px, 40%) 1fr;
    grid-template-rows: none;
    max-width: 740px;
  }
  .tooltip {
    visibility: hidden;
    left: 615px;
    bottom: 100px;
    width: fit-content;
    border-radius: 5px;
    padding: 0.5rem;
  }
}
```

These techniques and features contribute to a well-structured, responsive, and user-friendly article preview component.
