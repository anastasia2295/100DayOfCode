let paragraphElement = document.body.firstElementChild;
 // let paragraphElement = document.body.querySelector(p)

function changeParagraphText() {
    paragraphElement.textContent = "Clicked"
}

 paragraphElement.addEventListener("click", changeParagraphText)