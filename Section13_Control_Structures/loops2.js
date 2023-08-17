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


const highlightLinksButtonElement = document.querySelector("#highlight-links button")

function highlightLinks(){
const anchorElements = document.querySelectorAll("#highlight-links a")

for (const anchorElement of anchorElements) {
anchorElement.classList.add("highlight")
}

}

highlightLinksButtonElement.addEventListener("click", highlightLinks)