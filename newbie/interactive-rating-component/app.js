const dialog = document.querySelector('dialog');
const submitButton = document.querySelector('input[type="submit"]');
const stars = document.querySelectorAll('.rating');
const thankMessageBlock = document.querySelector('main');
const thankMessage = document.querySelector('.rating-result');
let rating;


stars.forEach(star => {
    star.addEventListener('click', () => {
        rating = star.value;
        thankMessage.innerText = `You selected ${star.value} out of 5`;

    });
});

if (typeof dialog.showModal !== 'function') {
    dialog.hidden = true;
    alert("We appreciate you taking the time to give us a rating. However your browser does not support this feature. If you ever need more support, do not hesitate to get in touch");
}

submitButton.addEventListener('click', () => {
    if (rating === undefined) {
        alert("Please select a rating");
        location.reload();
    }
    else { thankMessageBlock.style.visibility = 'visible'; }
});


