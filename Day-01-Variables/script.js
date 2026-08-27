// Challenge - 1
// Write code that stores:
// Your name
// Your age
// Your university
// Then print:
// My name is Muzamil.
// I am 21 years old.
// I study at BUITEMS.
// Use template literals (backticks `).

const fullName = "Muzamil";
let age = 21;
let university = "BUITEMS";

console.log(`My name is ${fullName}.`);
console.log(`I am ${age} years old.`);
console.log(`I study at ${university}.`);


// Challenge 2 — Swapping
// Without changing the values directly:
// let a = 10;
// let b = 20;
// Make:
// a = 20;
// b = 10;

// Hint:
// Use a third variable.

let a = 10;
let b = 20;
let temp = a; // 10
a = b;
b = temp 
console.log(a)
console.log(b)



// Challenge 5 — Mini Profile Card
// Create variables for:
// Name
// Age
// University
// Favorite Language

// Output:
// ====================
// PROFILE CARD
// ====================
// Name: Muzamil
// Age: 21
// University: BUITEMS
// Favorite Language: JavaScript
// ====================

// Use template literals.

const Name = "Muzamil";
let Age = 21;
let University = "BUITEMS";
let FavoriteLanguage = "JavaScript" 

console.log("====================");
console.log("PROFILE CARD")
console.log("====================");
console.log(`Name: ${Name}`);
console.log(`Age: ${Age}`);
console.log(`University: ${University}`);
console.log(`Favorite Language: ${FavoriteLanguage}`);



let score = 50;

{
    let score = 80;
    console.log(score)
}

console.log(score);

let number = 50;

{
    number = 80;
}

console.log(number);

