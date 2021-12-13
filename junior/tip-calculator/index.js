const bill = document.getElementById('bill');
const labels = document.querySelectorAll('.tips-flexbox label');
const tip = document.querySelectorAll('input[name="tip"]')
const customTip = document.getElementById('customTip');
const people = document.getElementById('people');
const resetButton = document.querySelector("input[type='reset']");
const tipAmount = document.getElementById('tipAmount');
const totalAmount = document.getElementById('totalAmount');

/*loop so when radio button is activated, only the corresponded label is painted+calculator*/
for (let i = 0; i < tip.length; i++) {
    const tipsLabel = tip[i].closest('label');
    tip[i].onclick = () => {
        for (let i = 0; i < labels.length; i++) {
            labels[i].style.color = 'white';
            labels[i].style.backgroundColor = '#00494d';
        }
        customTip.value = null;
        tipsLabel.style.color = "#00494d";
        tipsLabel.style.backgroundColor = "#26c2ad";
        calculate();
    }
}

/*loop so when custom tip is activated,all radio-labels are back to default*/
customTip.onclick = () => {
    for (let i = 0; i < labels.length; i++) {
        labels[i].style.color = 'white';
        labels[i].style.backgroundColor = '#00494d';
    }
}

/*validation check */
function validationCheck() {
    if (people.value === "" | people.value === '0') {
       /*  setTimeout(() => {
            document.querySelector('.form-error').style.visibility = 'visible';
        }, 3500); */

    } else {
        document.querySelector('.form-error').style.visibility = 'hidden';
        return true;
    }
}


//people.addEventListener('input', validationCheck);
people.addEventListener('input', calculate);
bill.addEventListener('input', calculate);
customTip.addEventListener('input', calculate);

function calculate() {
    if (validationCheck() === true) {

        tipAmount.innerHTML = '$0.00';
        totalAmount.innerHTML = "$" + Math.round((bill.value / people.value) * 100) / 100;
        let selectedTip = 0;
        if (document.querySelector('input[name="tip"]:checked')) {
            selectedTip = document.querySelector('input[name="tip"]:checked').value / 100;
        }
        else if (customTip.value) {
            selectedTip = customTip.value / 100;
        }

        const tips = bill.value * selectedTip;
        const totalCost = parseFloat(bill.value) + tips;
        totalAmount.innerHTML = "$" + Math.round((totalCost / people.value) * 100) / 100;
        tipAmount.innerHTML = "$" + Math.round((tips / people.value) * 100) / 100;
        resetButton.style.color = 'var(--dark-green)';
        resetButton.style.backgroundColor = "var(--light-green)";
    }

}

//reset everything without reloading the page
resetButton.addEventListener('click', () => {
    tipAmount.innerHTML = '$0.00';
    totalAmount.innerHTML = '$0.00';
    resetButton.style.color = 'var(--dark-green)';
    resetButton.style.backgroundColor = "#0d686d";
    document.querySelector('.form-error').style.visibility = 'hidden';
    labels.forEach(label => {
        label.style.color = 'white';
        label.style.backgroundColor = '#00494d';
    })
});
