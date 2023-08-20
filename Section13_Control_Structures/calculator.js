const numberElement1 = document.getElementById("user-number1".value)
const numberElement2 = document.getElementById("user-number2".value)
let resultNumberElement = document.getElementById("result")
console.dir(document)

const additionButton = document.getElementById("addition")
const subtractionButton = document.getElementById("subtraction")
const multiplicationButton = document.getElementById("multiplication")
const divisionButton = document.getElementById("division")

function calculatedAdd(event){

 let resultElement = numberElement1 + numberElement2
    resultNumberElement.textContent = resultElement
    console.log(resultElement)
    
}

function calculatedSub(){
    resultNumberElement.textContent = numberElement1 - numberElement2
}

function calculatedMult() {

}

function calculatedDiv () { 

}

additionButton.addEventListener("click", calculatedAdd)
subtractionButton.addEventListener("click",calculatedSub)
multiplicationButton.addEventListener("click",calculatedMult)
divisionButton.addEventListener("click", calculatedDiv)
