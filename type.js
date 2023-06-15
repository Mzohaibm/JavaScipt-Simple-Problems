// problem 1
// 1:Write a JavaScript program to display the current day and time in the following format.
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38
let hours = document.getElementsByClassName("hours")[0];
let mins = document.getElementsByClassName("min")[0];
let secs = document.getElementsByClassName("sec")[0];

const Time = function () {
  TodayDate = new Date();
  let hour = TodayDate.getHours();
  let min = TodayDate.getMinutes();
  let sec = TodayDate.getSeconds();
  if (hour > 12) {
    hour = hour - 12;
  } else {
    hour = 12;
  }
  hours.innerHTML = hour;
  mins.innerHTML = min;
  secs.innerHTML = sec;
};
setInterval(Time, 1000);
// 2:Write a JavaScript program to calculate multiplication and division of two numbers (input from user)
// second problem
let num1 = prompt("Plz enter your first number");
parseFloat(num1);
let num2 = prompt("Plz enter your second number");
parseFloat(num2);
let multiplication = num1 * num2;
let division = num1 / num2;
console.log("the multiplication " + multiplication);
console.log("the division " + division);

// problem 3
// push data in array
// 3:how to push data in array?
const Recipe = ["Water", "milk", "orange", "butter"];
Recipe.push("Banana", "Apple");
Recipe.map((e) => {
  console.log(`These things are necessary ${e}`);
});

// 4:how to push data in Array of object?
// problem 4
// pushing data in array of object

const myArray = [
  { name: "Zohaib", age: 20, class: "BSSE" },
  { name: "Ali", age: "20", class: "BSIT" },
];
const add = { fruits: ["apple", "banana"], vegeTables: ["onion", "ginger"] };
myArray.push(add);
let total = "";
myArray.forEach((element, i) => {
  total += `Hey Amm ${element.name} age ${element.age} class ${element.class} and my Favourite fruits ${add.fruits[1]} and vegeTables are ${add.vegeTables[0]} and the index is ${i}`;
});
console.log(total);
// 5:how to push data in object:
// push data in object
const Students = {
  Name: ["Ali", "Ahmad", "Asad"],
  Class: "10th",
  City: "Lahore",
};
Students.age = [20, 12, 14];
console.log(Students);
for (let i of Object.values(Students)) {
  console.log(Object.keys(Students), i);
}
