let productNameInputElement = document.getElementById("product-name");
let remainingCharsElement = document.getElementById("remaining-chars");

//console.dir(productUserInputElement)

let maxAllowedChars = productNameInputElement.maxLength;

function updateRemainingCaracters(event) {
    let enteredText = event.target.value;
    let enteredTextLength = enteredText.length;

    let remainingCharacters = maxAllowedChars - enteredTextLength;

    remainingCharsElement.textContent = remainingCharacters;
if (remainingCharacters === 0){
    remainingCharsElement.classList.add("error");
    productNameInputElement.classList.add("error");
} else if (remainingCharacters <= 10){
    remainingCharsElement.classList.add("warning");
    productNameInputElement.classList.add("warning");
}
else {
    remainingCharsElement.classList.remove("warning", "error");
    productNameInputElement.classList.remove("warning","error" );

}
}


productNameInputElement.addEventListener("input", updateRemainingCaracters);