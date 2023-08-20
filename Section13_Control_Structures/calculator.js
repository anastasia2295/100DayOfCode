const numberElement1 = document.getElementById("user-number1")
const numberElement2 = document.getElementById("user-number2")
let resultNumberElement = document.getElementById("result")
console.dir(document)

const additionButton = document.getElementById("addition")
const subtractionButton = document.getElementById("subtraction")
const multiplicationButton = document.getElementById("multiplication")
const divisionButton = document.getElementById("division")

function calculatedAdd(){
const enteredNumber1 = numberElement1.value 
const enteredNumber2 = numberElement2.value 
 resultNumberElement.textContent = enteredNumber1 + enteredNumber2
 
}

function calculatedSub(){
    const enteredNumber1 = numberElement1.value 
const enteredNumber2 = numberElement2.value 
}

function calculatedMult() {
    const enteredNumber1 = numberElement1.value 
    const enteredNumber2 = numberElement2.value 
}

function calculatedDiv () { 
    const enteredNumber1 = numberElement1.value 
    const enteredNumber2 = numberElement2.value 
}

additionButton.addEventListener("click", calculatedAdd)
subtractionButton.addEventListener("click",calculatedSub)
multiplicationButton.addEventListener("click",calculatedMult)
divisionButton.addEventListener("click", calculatedDiv)
