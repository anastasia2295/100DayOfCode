let paragraphElement = document.body.firstElementChild;
 // let paragraphElement = document.body.querySelector(p)

function changeParagraphText() {
    paragraphElement.textContent = "Clicked"
}

 paragraphElement.addEventListener("click", changeParagraphText);


 let inputElement = document.querySelector("input");

 function refrieveUserInput(event) {
   // let enteredText = inputElement.value
   let enteredText = event.target.value
   // let enteredText = event.data показывает только введеное значение
    console.log(enteredText)
  //  console.log(event)
 }
inputElement.addEventListener("input", refrieveUserInput);

