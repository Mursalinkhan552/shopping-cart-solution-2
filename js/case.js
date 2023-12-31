

function updateCaseNumber(isIncrease) {
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberFieldString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberFieldString);


    let newCaseNumber;
    if (isIncrease) {
        newCaseNumber = previousCaseNumber + 1;
    }
    else {
        newCaseNumber = previousCaseNumber - 1;
    }

    caseNumberField.value = newCaseNumber;
    return newCaseNumber;
}

function updateCaseTotal(newCaseNumber) {
    const caseTotal = document.getElementById('case-total');

    const caseTotalPrice = newCaseNumber * 59;
    caseTotal.innerText = caseTotalPrice;

}

document.getElementById('btn-case-plus').addEventListener('click', function () {
    const newCaseNumber = updateCaseNumber(true);
    updateCaseTotal(newCaseNumber);
    calculateSubTotal();
    


})
document.getElementById('btn-case-minus').addEventListener('click', function () {
   const newCaseNumber = updateCaseNumber(false);
    updateCaseTotal(newCaseNumber);
    calculateSubTotal();
   
})