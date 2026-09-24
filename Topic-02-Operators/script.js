let a = 10
let b = 3
console.log(a%b)


let firstName = "Muzamil";
let lastName = "Hussaini";

console.log(firstName + " " + lastName);

console.log("5" * 5);

let x = 10;

x += 10;
x *= 2;

console.log(x);

let score = 100;

score -= 20;
score /= 2;

console.log(score);

let j = 17;
let u = 2;
// console.log(j / u)

if (j % u === 0) {
    console.log("Even")
} else {
    console.log("ODD")
}

// Challenge 1 — Area of Rectangle 

let length = 10;
let width = 5;

let area = length * width
console.log(area);


// Challenge 2 — Student Percentage

let obtainedMarks = 450;
let totalMarks = 500;

let percentage = obtainedMarks / totalMarks * 100;

console.log(`The percentage of student is ${percentage}%`);


// Challenge 3 — Monthly Savings 

let income = 50000;
let expenses = 35000;

// Calculate:
// Savings: 15000

let saving = income - expenses;
console.log(`Savings: ${saving}`);


// Challenge 4 — Age Calculator
// Create:

// let birthYear = 2005;
// let currentYear = 2026;

// Output:
// Age: 21

let birthYear = 2005;
let currentYear = 2026;
let birthMonth = 1;
let currentMonth = 8;

let birthDay = 6;
let currentDay = 28;

let year = currentYear - birthYear;
let month = currentMonth - birthMonth; 
let day = currentDay - birthDay

let age = `Age: \n${year} years ${month} months ${day} days.`
// console.log(`Age: ${age}`);

console.log(age)



// Challenge 5 — Total Bill

// Create:
// Burger = 250
// Fries = 150
// Drink = 100

// Calculate total bill.
// Output:

// Total Bill: 500

let Burger = 250;
let Fries = 150;
let Drink = 100;

let totalBill = Burger + Fries + Drink;
console.log(`Total Bill: ${totalBill}`);



// Interview Style Question 1

// Predict:
let q = 5;

console.log(q++); // 5 post-increment first it will print the actual value

console.log(q); // 6 then after actual value, it will increase the value

// Interview Style Question 2

// Predict:

let w = 5;

console.log(++w); // 6  pre-increment first it will print the answer increase the value and print it out.

console.log(w); // 6 after that when ever you call it, it will show exact actual value that printed already.