# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Overview

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

![](./screenshot.jpg)

### Built with

- Semantic HTML5 markup
- Scss variables
- CSS Grid
- Mobile-first workflow

## My process

Briefly, I used scss and scss variables to store colors and font-family. I thought how could i set up those different colors in each card. I made utility classes and I add them dynamically with javascript.

```scss
.work {
  background-color: $work;
}
```

The variable has the same name as the data's title for each category. Therefore it's easy to add them when the cards are created.

```js
card.classList.add(title.toLowerCase());
```

The cards themselves are also created dynamically with javascript after I fetch the data.
I've created a loop over the buttons so when they are clicked the cards are updating the information.

```js
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    fetchData().then((data) => {
      for (let i = 0; i < data.length; i++) {
        document.querySelectorAll(".stat")[i] = data[i];
        document.querySelectorAll(".stat")[i].innerHTML =
          data[i].timeframes[event.target.id].current;
      }
    });
  });
});
```

The `event.target.id` corresponds to ids that I've added to the buttons. Those ids are again same with the data's timeframes so handling the data is easy.

Last I took the liberty to add share capabilities since the design had those eclipsis button.
I use the `Web share API`

```js
button.addEventListener("click", () => {
  if (navigator.share) {
    const title = document.title;
    const time = document.querySelector(".stat").textContent;
    const text = document.querySelector(".card-title").innerHTML;
    const url = document.location.href;
    const share = {
      title: title,
      text: text,
      url: url,
    };
    navigator.share(share);
  }
});
```
It's not fully supported yet but It was very easy to work with this, so i hope that it will get better browser support soon.
