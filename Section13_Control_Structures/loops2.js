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




const dummyUserData = {
firstName: "Max",
lastName: "Shworts",
age: 32
};
const displayUserDataButtonElement = document.querySelector("#user-data button")

function dispayUserData() { 
const outputDataElement = document.getElementById("output-user-data")
outputDataElement.innerHTML = "";

for (const key in dummyUserData){
    const newUserDataListElement = document.createElement("li");
    const outputText = key.toUpperCase() + ": " + dummyUserData[key];
    newUserDataListElement.textContent = outputText;
    outputDataElement.append(newUserDataListElement);
}
}

displayUserDataButtonElement.addEventListener("click", dispayUserData)





const rollDiceButtonElement = document.querySelector('#statistics button');

function rollDice() {
  return Math.floor(Math.random() * 6) + 1; // Math.floor(): 5.64 => 5
}

function deriveNumberOfDiceRolls() {
  const targetNumberInputElement = document.getElementById('user-target-number');
  const diceRollsListElement = document.getElementById('dice-rolls');

  const enteredNumber = targetNumberInputElement.value;
  diceRollsListElement.innerHTML = '';

  let hasRolledTargetNumber = false;
  let numberOfRolls = 0;

  while (!hasRolledTargetNumber) {
    const rolledNumber = rollDice();
    // if (rolledNumber == enteredNumber) {
    //   hasRolledTargetNumber = true;
    // }
    numberOfRolls++;
    const newRollListItemElement = document.createElement('li');
    const outputText = 'Roll ' + numberOfRolls + ': ' + rolledNumber;
    newRollListItemElement.textContent = outputText;
    diceRollsListElement.append(newRollListItemElement);
    hasRolledTargetNumber = rolledNumber == enteredNumber;
  }

  const outputTotalRollsElement = document.getElementById('output-total-rolls');
  const outputTargetNumberElement = document.getElementById('output-target-number');

  outputTargetNumberElement.textContent = enteredNumber;
  outputTotalRollsElement.textContent = numberOfRolls;
}

rollDiceButtonElement.addEventListener('click', deriveNumberOfDiceRolls);