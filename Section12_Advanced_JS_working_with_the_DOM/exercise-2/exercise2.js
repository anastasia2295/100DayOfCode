// 1) Выберите два элемента <button> и сохраните их в двух разных переменных.
// - Выбрать первую кнопку без добавления или использования какого-либо "id"

const firstButtonElement = document.querySelector("button");

// - Выберите вторую кнопку, используя "id"

const secondButtonElement = document.getElementById("button-add-blue")

// 2) Добавить прослушиватель события "щелчка" к обеим кнопкам (с двумя разными функциями).
// Функции должны использовать "console.dir()" для нажатых кнопок.

function remuveParagraph(event){
console.dir(firstButtonElement);
};
firstButtonElement.addEventListener("click", remuveParagraph);

function changeBackroundColor(event){
    console.dir(event.target)
    };
    secondButtonElement.addEventListener("click", changeBackroundColor);

// - Выводим первую кнопку, используя переменную, в которой она хранится
// - Вывести вторую кнопку БЕЗ использования переменной, в которой она хранится
// 3) Теперь выберите и сохраните абзацы, упомянутые в тексте, который вы видите на странице
// (первый и третий абзац)

const firstParagraphElement = document.body.children[2].children[1];
console.log(firstParagraphElement);

const thirdParagraphElement = document.body.children[2].children[3];
//const thirdParagraphElement = firstParagraphElement.nextElementSibling.nextElementSibling;

console.log(thirdParagraphElement);

// - Выберите ОБА абзаца, углубившись в документ и "перейдя" к
// упомянутые элементы
// - Если вы боретесь со сверлением DOM, используйте вместо этого "id", но смотрите решение!
// 4) Измените функции из (2) так, чтобы:
// - Первая кнопка удаляет третий абзац (то есть <p> перед ним)

function remuveParagraph(event){
    thirdParagraphElement.remove();
    };

    firstButtonElement.addEventListener("click", remuveParagraph);
    

// - Вторая кнопка меняет цвет фона первого абзаца на синий

function changeBackroundColor(event){
    firstParagraphElement.style.backgroundColor = "blue"
    };

    secondButtonElement.addEventListener("click", changeBackroundColor);

// 5) Решить (4) как путем изменения "встроенных стилей", так и путем добавления классов CSS
// Примечание. Сначала вам нужно добавить эти классы в файл styles.css!

