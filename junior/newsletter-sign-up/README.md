# Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). 

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Github repository](https://github.com/PanuGr/frontendmentor-challenges/tree/main/junior/newsletter-sign-up)
- Live Site URL: [Live demo](https://panugr.github.io/frontendmentor-challenges/junior/newsletter-sign-up)


### Built with

- HTML5 
- dialog tag
- Scss
- CSS custom properties
- CSS Grid
- Mobile-first workflow

## My process
Writing the html code was quite straightforward, so I focused on the form and dialog element, styling the form and implementing a basic client-validation.

In html, I use the `input type="email"` which automatically provides a simple validation for emails.
It's not enough however, so I added a regex expression to validate email addresses.
`pattern="[A-Za-z0-9._+\-]+@[A-Za-z0-9\-]+\.[a-z]{2,6}"`
The `dialog` element opens by javascript when the email is submitted but closes automatically. The dismiss button is in a form tag with the `method="dialog"`

In css, I style the invalid inputs with the selector `:invalid`. Every empty input is automatically invalid. To change that behavior I added a `:focus` state, like this:
``````css
input:focus:invalid{}
``````
The error message is added with the `::after` pseudo-selector when the html `:has()` an invalid element.

The javascript isn't something exteme. The function validate checks if the input is valid or not. Then opens the dialog. The `.preventDefault()` function prevents the form from submitting. We just need to open the dialog. In a real-world example, we would send manually the data after opening the modal.

## Author

- Frontend Mentor - [@PanuGr](https://www.frontendmentor.io/profile/@PanuGr)
- Website - [Codealagreek](https://www.codealagreek.netlify.app)
- Youtube - [@codealagreek](https://www.youtube.com/@codealagreek)