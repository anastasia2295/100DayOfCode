// 1. Выберите элемент <h1>, "заглянув в DOM" и
// сохранить его в переменной с именем по вашему выбору

let h1Element = document.body.firstElementChild; 
h1Element = document.body.children[0];

console.dir(h1Element);
// 2. Используем переменную из (1) и получаем доступ к "родителю"
// элемент сохраненного элемента <h1> (т.е. к элементу <body>)

console.dir(h1Element.parentElement);

// БОНУС: попробуйте использовать переменную из (1), чтобы получить доступ к
// одноуровневый элемент (то есть элемент <p> рядом с элементом <h1>)

console.dir(h1Element.nextElementSibling);

// 3. Выберите элемент <h1> с помощью getElementById и сохраните в
// та же или новая переменная (на ваше усмотрение)

h1Element = document.getElementById("first-title");
console.dir(h1Element);

// 4. Выберите второй элемент <p> с помощью querySelector (вы можете
// нужно что-то добавить в HTML-код, например. класс)
// и сохранить его в новой переменной с именем по вашему выбору

let paragraph = document.querySelector(".paragraph");
console.dir(paragraph);

// 5. ДОПОЛНИТЕЛЬНОЕ ЗАДАНИЕ: попробуйте изменить текстовое содержимое элемента <p>
// вы выбрали в (4) и установили любой другой текст по вашему выбору

paragraph.textContent = "This is chellenge";