//let courseName = "Web development - The comltete Cuide";
//let coursePrice = 39;
//let courseGoals = ["Learn web development", "Become a web developer","Have a fun"];

//alert(courseName);
//alert(coursePrice);
//alert(courseGoals);


let onlineCourse = {
    name: "Web development - The comltete Cuide", 
    price: 39,
    goals: ["Learn web development", "Become a web developer","Have a fun"]
};
alert(onlineCourse.name);
alert(onlineCourse.price);
alert(onlineCourse.goals);

alert(onlineCourse.goals[1])


function getListItem (array, arrayIndex) {
    let arrayElement = array[arrayIndex]
    return arrayElement
}

let firstGoals = getListItem(onlineCourse.goals, 0);
alert(firstGoals)