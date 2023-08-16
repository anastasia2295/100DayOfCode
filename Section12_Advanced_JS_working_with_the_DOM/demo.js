let productNameInputElement = document.getElementById("product-name");
let remainingCharsElement = document.getElementById("remaining-chars");

//console.dir(productUserInputElement)

let maxAllowedChars = productNameInputElement.maxLength;

function updateRemainingCaracters(event) {
    let enteredText = event.target.value;
    let enteredTextLength = enteredText.length;

    let remainingCharacters = maxAllowedChars - enteredTextLength;

    remainingCharsElement.textContent = remainingCharacters;
if (remainingCharacters <= 10){
    remainingCharsElement.classList.add("warning");
    productNameInputElement.classList.add("warning");
}
}


productNameInputElement.addEventListener("input", updateRemainingCaracters);