//conversion rates constant
const USDtoCADRate = 1.36; 
const CADtoUSDRate = 0.73;

// function to convert USD to CAD
function convertUSDtoCAD(amount) {
    return (amount * USDtoCADRate).toFixed(3);
}

// function to convert CAD to USD
function convertCADtoUSD(amount) {
    return (amount * CADtoUSDRate).toFixed(3);
}

document.addEventListener('DOMContentLoaded', function() {
    const convertButton = document.querySelector('.convert-button');
    const usdInput = document.getElementById('amount');
    const cadInput = document.getElementById('converted');

    convertButton.addEventListener('click', function() {
        // input validation
        if (usdInput.value && cadInput.value) {
            alert('Please enter an amount in either USD or CAD, not both.');
        } else if (usdInput.value) {
            const usdAmount = parseFloat(usdInput.value);
            if (!isNaN(usdAmount)) {
                cadInput.value = convertUSDtoCAD(usdAmount);
            } else {
                alert('Please enter a valid number for USD.');
            }
        } else if (cadInput.value) {
            const cadAmount = parseFloat(cadInput.value);
            if (!isNaN(cadAmount)) {
                usdInput.value = convertCADtoUSD(cadAmount);
            } else {
                alert('Please enter a valid number for CAD.');
            }
        } else {
            alert('Please enter an amount to convert.');
        }
    });
});
