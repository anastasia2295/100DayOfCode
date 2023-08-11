// document.body.children[1].children[0].href = "https://www.google.com/?hl=ru";

// console.dir(document);

let anchorElement = document.getElementById("external-link");
anchorElement.href = "https://www.google.com/?hl=ru";

//anchorElement = document.querySelector("#external-id");
//anchorElement.href = "https://www.google.com/?hl=ru";

// добавление нового элемента
// 1,создать новый элемент

let newAnchorElement = document.createElement("a");
newAnchorElement.href = "https://www.google.com/?hl=ru";
newAnchorElement.textContent = "This leads to Google";

// 2,получить доступ к родительскому элементу, к которому будет привязан новый элемент

let firstParagraph = document.querySelector("p");

// 3,вставить новый элемент в родительский

firstParagraph.append(newAnchorElement);

