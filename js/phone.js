
function updatePhoneNumber(isIncrease) {
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberFieldString = phoneNumberField.value;
    const previousPhoneNumber = parseInt(phoneNumberFieldString);


    let newPhoneNumber;
    if (isIncrease) {
        newPhoneNumber = previousPhoneNumber + 1;
    }
    else {
        newPhoneNumber = previousPhoneNumber - 1;
    }

    phoneNumberField.value = newPhoneNumber;
    return newPhoneNumber;
}

function updatePhoneTotal(newPhoneNumber) {
    const phoneTotal = document.getElementById('phone-total');
    const phoneTotalPrice = newPhoneNumber * 1219;
    phoneTotal.innerText = phoneTotalPrice;
}



document.getElementById('btn-phone-plus').addEventListener('click', function () {
    const newPhoneNumber = updatePhoneNumber(true);
    updatePhoneTotal(newPhoneNumber);
    calculateSubTotal()

})
document.getElementById('btn-phone-minus').addEventListener('click', function () {
    const newPhoneNumber = updatePhoneNumber(false)
    updatePhoneTotal(newPhoneNumber);
    calculateSubTotal();

})