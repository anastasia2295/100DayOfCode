// 1) Выберите два элемента <button> и сохраните их в двух разных переменных.
// - Выбрать первую кнопку без добавления или использования какого-либо "id"

let buttonRemove = document.body.children[2].children[4];

// - Выберите вторую кнопку, используя "id"

let buttonAddBlue = document.getElementById("button-add-blue")

// 2) Добавить прослушиватель события "щелчка" к обеим кнопкам (с двумя разными функциями).
// Функции должны использовать "console.dir()" для нажатых кнопок.

function clickСountButton2(event){
let enteredText = event.target.value;
console.dir(enteredText);
};
buttonAddBlue.addEventListener("click", clickСountButton2);

function clickСountButton1(event){
    let enteredText = event.target.value;
    console.dir(enteredText);
    };
    buttonRemove.addEventListener("click", clickСountButton1);

// - Выводим первую кнопку, используя переменную, в которой она хранится
// - Вывести вторую кнопку БЕЗ использования переменной, в которой она хранится
// 3) Теперь выберите и сохраните абзацы, упомянутые в тексте, который вы видите на странице
// (первый и третий абзац)
// - Выберите ОБА абзаца, углубившись в документ и "перейдя" к
// упомянутые элементы
// - Если вы боретесь со сверлением DOM, используйте вместо этого "id", но смотрите решение!
// 4) Измените функции из (2) так, чтобы:
// - Первая кнопка удаляет третий абзац (то есть <p> перед ним)

function clickСountButton1(event){
    let removeText = document.getElementById("third-paragraph");
    removeText.remove("third-paragraph");
    };
    buttonRemove.addEventListener("click", clickСountButton1);

// - Вторая кнопка меняет цвет фона первого абзаца на синий

function clickСountButton2(event){
    let enteredColor = document.getElementById("first-paragraph");
    enteredColor.classList.add("color-first-paragraph");
    };
    buttonAddBlue.addEventListener("click", clickСountButton2);

// 5) Решить (4) как путем изменения "встроенных стилей", так и путем добавления классов CSS
// Примечание. Сначала вам нужно добавить эти классы в файл styles.css!