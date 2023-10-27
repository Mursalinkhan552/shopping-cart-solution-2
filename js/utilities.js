
function getTextElementValueById(elementId) {

    const phoneTotalElement = document.getElementById(elementId)
    const phoneTotalElementString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(phoneTotalElementString);
    return currentPhoneTotal;
}

function setTextValueById(elementId, value){
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}

function calculateSubTotal() {
    // calculate sub total
    const currentPhoneTotal = getTextElementValueById('phone-total');
    const currentCaseTotal = getTextElementValueById('case-total');
    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    setTextValueById('sub-total', currentSubTotal);
    
    // Tax calculate 
    const taxAmountString = (currentSubTotal * 0.01).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setTextValueById('tax-amount', taxAmount);
    // final calculate 
    const finalAmount = currentSubTotal + taxAmount;
    setTextValueById('final-total', finalAmount);

}