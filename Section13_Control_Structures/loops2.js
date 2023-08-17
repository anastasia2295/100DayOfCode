const calculateSumButtonELement = document.querySelector("#calculator button")


function calculateSum() {
const userNumberInputElement = document.getElementById("user-number")
const enteredNamber = userNumberInputElement.value;

let sumUpToNamber = 0;

for (i = 0; i<=enteredNamber; i++) {
sumUpToNamber = sumUpToNamber + i
}
const outputResultElement = document.getElementById("calculated-sum");

outputResultElement.textContent = sumUpToNamber;
outputResultElement.style.display = "block";
}


calculateSumButtonELement.addEventListener("click", calculateSum)