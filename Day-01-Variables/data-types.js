let x = "100";
console.log(typeof x);


let y = {
  name: "Muzamil"
};

console.log(typeof y);

let JS = null;

JS = "JavaScript";

console.log(typeof JS);


let score = 90;

{
    let score = 100;
    console.log(score);
}

console.log(typeof score);


// Challenge 1 — Student Introduction

// Create variables:
// name
// age
// city
// Output:
// Hello!
// My name is Ali Reza.
// I am 24 years old.
// I live in Quetta.

// Use template literals.

let userName = "Ali Reza";
let age = 24;
let city = "Quetta";

console.log(`Hello! 
My name is ${userName}. My type of name is ${typeof userName}.
I am ${age} years old and my type of age is ${typeof age}.
I live in ${city} and my type of city is ${typeof city}.`);

console.log("********************************")

// Challenge 2 — Favorite Things

// Create variables:

// favoriteLanguage
// favoriteAnime
// favoriteFood
// Give it any value and print the output with their types  

const favoriteLanguage = "JavaScript.";
const favoriteAnime = "Demon Slayer.";
const favoriteFood = "Biryani."

console.log(`My favorite language is ${favoriteLanguage} | Type is: ${typeof favoriteLanguage}`);
console.log(`My favorite anime is ${favoriteAnime} | Type is: ${typeof favoriteAnime}`);
console.log(`My favorite food is ${favoriteFood}| Type is: ${typeof favoriteFood}`);
// console.log(`${favoriteLanguage} ${favoriteAnime} ${favoriteFood}`);


// Challenge 3 — Data Type Checker

// Create:
// let username = "Muzamil";
// let age = 21;
// let isStudent = true;
// let marks = null;
// let result;

// Print the type of each variable using typeof.

let username = "Muzamil";
let Age = 21;
let isStudent = true;
let marks = null;
let result;
console.log(typeof username);
console.log(typeof Age);
console.log(typeof isStudent);
console.log(typeof marks);
console.log(typeof result);


// =====================================================================

// Mini Project 1 — Data Type Inspector
// Create:

// let name = "Muzamil";
// let age = 21;
// let isStudent = true;
// let city = null;
// let result;

// Output:
// Value: Muzamil
// Type: string

// Value: 21
// Type: number

// Value: true
// Type: boolean

// Value: null
// Type: object

// Value: undefined
// Type: undefined

console.log("###################################");

let fullName = "Muzamil";
let student_age = 21;
let is_Student = true;
let City = null;
let Result;

console.log(`value: ${fullName}
type: ${typeof fullName}

value: ${student_age}
type: ${typeof student_age}

value: ${is_Student}
type: ${typeof is_Student}

value: ${City}
type: ${typeof City}

value: ${Result}
type: ${typeof Result}`);

console.log("###################################");

// ===============================================================================


// Mini Project 2 — Gaming Character Card

// Create:

// characterName
// level
// isAlive
// weapon
// guild

// Example:

// const characterName = "Shadow";
// const level = 25;
// const isAlive = true;
// const weapon = "Katana";
// const guild = null;

// Output:

// ====================
// CHARACTER CARD
// ====================

// Name: Shadow
// Level: 25
// Alive: true
// Weapon: Katana
// Guild: null

// ====================

// Then print the type of each variable.


const characterName = "Shadow";
const level = 25;
const isAlive = true;
const weapon = "Katana";
const guild = null;

console.log("====================");
console.log("CHARACTER CARD");
console.log("====================");

console.log(`character Name is ${characterName} type of characterName is ${typeof characterName}
character level is ${level} type of character level is ${typeof level}
character Alive is ${isAlive} type of character isAlive is ${typeof isAlive}
character weapon is ${weapon} type of character weapon is ${typeof weapon}
character value is ${guild} type of character guild is ${typeof guild}`);

// ===============================================================================

// Mini Project 5 — Student Database
// Create:

// studentName
// studentAge
// studentGrade
// isPassed

// Output:
// ====================
// STUDENT RECORD
// ====================

// Name: Rehman Ali
// Age: 23
// Grade: A
// Passed: true

// ====================
// Then:

// Type of Name: string
// Type of Age: number
// Type of Grade: string
// Type of Passed: boolean

const studentName = "Rehman Ali";
const studentAge = 22;
const studentGrade = "A";
const isPassed = true;

console.log("====================");
console.log("STUDENT RECORD");
console.log("====================");

let totalInfo = (`Name: ${studentName} \nAge: ${studentAge}\nGrade: ${studentGrade}\nPassed: ${isPassed}`);
let typeOf = (`Type of Name: ${typeof studentName} \nType of Age: ${typeof studentAge}\nType of Grade: ${typeof studentGrade}\nType of Passed: ${typeof isPassed}`);

console.log(totalInfo);
console.log(typeOf);

// ===============================================================================

// Mini Project 4
// Tech Stack Card

// Store:
// HTML
// CSS
// JavaScript
// Git
// GitHub

// inside variables.
// Output:
// =====================
// MY TECH STACK
// =====================

// 1. HTML
// 2. CSS
// 3. JavaScript
// 4. Git
// 5. GitHub

// =====================
// Then print:

// Total Skills: 5


const HTML = "HTML";
const CSS = "CSS";
const JavaScript = "JavaScript";
const Git = "Git";
const GitHub = "GitHub";
const totalSkills = 5;

console.log("=====================");
console.log("MY TECH STACK");
console.log("=====================");

console.log(`1. ${HTML}`);
console.log(`2. ${CSS}`);
console.log(`3. ${JavaScript}`);
console.log(`4. ${Git}`);
console.log(`5. ${GitHub}`);
console.log(`Total Skills: ${totalSkills}`);
