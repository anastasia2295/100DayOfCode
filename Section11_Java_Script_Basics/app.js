let age = 28;

let hobbies = ["Sports", "Cooking", "Reading"];

let job = { 
    title: "Developer", 
    place: "New York", 
    salary: 50000
};
let adultYears; 
function calculateAdultYears (userAge) {
return  userAge - 18;
}
adultYears = calculateAdultYears(age);

console.log(adultYears);
age = 45;
adultYears = calculateAdultYears(age);
console.log(adultYears);

let person ={
    name: "Max",
    greet () {
       console.log("hello!");
}
};
person.greet();