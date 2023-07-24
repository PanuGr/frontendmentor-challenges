const errorMessages = document.querySelectorAll(".error");
const inputs = document.querySelectorAll("input[type='number']");
const submit = document.querySelector("button");
const labels = document.querySelectorAll("label");

function showError(n) {
  labels[n].style.color = "#ff5757";
  labels[n].style.fontWeight = "700";
  inputs[n].style.borderColor = "#ff5757";
}

function validate(e) {
  // Check if inputs are empty
  if (
    inputs[0].value === "" ||
    inputs[1].value === "" ||
    inputs[2].value === ""
  ) {
    if (inputs[0].value === "") {
      showError(0);
      errorMessages[0].innerText = "This field is required";
    }
    if (inputs[1].value === "") {
      showError(1);
      errorMessages[1].innerText = "This field is required";
    }

    if (inputs[2].value === "") {
      showError(2);
      errorMessages[2].innerText = "This field is required";
    }
    return false;
  }

  //if day/month have bad value
  if (inputs[0].validity.rangeUnderflow || inputs[0].validity.rangeOverflow) {
    errorMessages[0].innerText = "Must be a valid day";
    return false;
  }
  if (inputs[1].validity.rangeUnderflow || inputs[1].validity.rangeOverflow) {
    errorMessages[1].innerText = "Must be a valid month";
    return false;
  }

  //if year in future
  const currentYear = new Date().getFullYear();
  if (inputs[2].value > currentYear) {
    errorMessages[2].innerText = "Must be in the past";
    return false;
  }

  // Check for valid date
  const isValidDate = isValidDayInMonth(
    inputs[0].value,
    inputs[1].value,
    inputs[2].value
  );
  if (!isValidDate) {
    errorMessages[0].innerText = "Invalid date";
    return false;
  }
  return true;
}

function isValidDayInMonth(day, month, year) {
  const maxDaysInMonth = new Date(year, month, 0).getDate();
  return day <= maxDaysInMonth;
}

function showResults(e) {
  e.preventDefault();
  //remove invalid styling
  labels.forEach((label) => {
    label.style.color = "initial";
    label.style.fontWeight = "400";
  });
  inputs.forEach((input) => {
    input.style.borderColor = "initial";
  });
  errorMessages.forEach((message) => [(message.innerText = "")]);

  //validate
  if (validate()) {
    //add class for animation
    const ageResult = document.querySelectorAll(".age-number");
    ageResult.forEach((ageResult) => {
      ageResult.classList.add("animate__animated", "animate__zoomInDown");
    });

    //construct age
    const dateNow = new Date();
    let years = dateNow.getFullYear() - inputs[2].value;
    let months = dateNow.getMonth() - inputs[1].value;
    let days = dateNow.getDate() - inputs[0].value;

    months = (months + 12) % 12;

    // Check if the current day is smaller than the input day
    if (dateNow.getDate() < days) {
      months -= 1;
    }

    // Check if the current month is smaller than the input month
    if (dateNow.getMonth() < months) {
      years -= 1;
    }
    //show results
    ageResult[0].innerText = years;
    ageResult[1].innerText = months;
    ageResult[2].innerText = days;
    // Empty the values for next calculation
    inputs[0].value = "";
    inputs[1].value = "";
    inputs[2].value = "";
  }
}

submit.addEventListener("click", showResults);
