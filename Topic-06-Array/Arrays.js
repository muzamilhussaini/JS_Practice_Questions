let skills = ["HTML5", "CSS3", "JavaScript"];

console.log(skills);
console.log(skills[0]);
console.log(skills[1]);
console.log(skills[2]);

let numbers = [10, 20, 30];

console.log(numbers[0] + numbers[2]);

let anime = ["Naruto", "Demon Slayer", "One Piece"];

console.log(anime[3]);

let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits.length);

skills[2] = "React JS";
console.log(skills);
skills[3] = "JavaScript";
console.log(skills);

// ===============================================================================
// Challenge 1 — Sum All Numbers 

let number = [10, 20, 30, 40, 50];
let total = 0;

for (let i = 0; i < number.length; i++) {
    total += number[i];
}
console.log(total);

// ===============================================================================
// Challenge 2 — Count Even Numbers 

let num = [3, 8, 10, 7, 15, 20];
let count = 0;
for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 === 0) {
        // let arr = num[i]
        count++
    }
}
console.log(`Even numbers = ${count}`);


// ===============================================================================
// Challenge 3 — Largest Number
// create:
// [12, 45, 7, 99, 34];

// Output:
// Largest Number = 99
let numArr = [12, 45, 7, 99, 34];
let largest = 0;

for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] > largest) {
        largest = numArr[i]
    }
}
console.log(`largest number is ${largest}`)



// Challenge 4 — Search Fruit
let frs = ["Apple", "Banana", "Mango"];
// Check whether:
// "Mango"
// exists.
// Output:
// Found
// or
// Not Found

// Rules:

// Use loop
// Use if
// Don't use .includes()
let found = false;
for (let i = 0; i < frs.length; i++) {
    if (frs[i] === "Mango" || frs[i] === "mango") {
        found = true
    }
}

if (found) {
    console.log("Found");
} 
else {
    console.log("Not Found");
}


// ===============================================================================
// Challenge 5 — Student List 
let students = [
    "Ali",
    "Ahmed",
    "Muzamil",
    "Sara",
    "Juma"
];
// 1. Ali
// 2. Ahmed
// 3. Muzamil
// 4. Sara

for (let i = 0; i < students.length; i++) {
    let studentNames = `${i + 1}. ${students[i]}`
    console.log(studentNames);
}


// ===============================================================================
// Interview Style Challenge
// Create:

//[5, 10, 15, 20];
// Output:
// Sum = 50
// Average = 12.5

let numb = [5, 10, 15, 20, 45, 5];
let sum = 0;
for (let i = 0; i < numb.length; i++) {
    sum += numb[i]
}
console.log(`Sum = ${sum}`);
console.log(`Average = ${sum / numb.length}`);

// ===============================================================================
// Count Odd Numbers
let oddNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let countOddNumber = 0;

for (let i = 0; i < oddNumber.length; i++) {
    const element = oddNumber[i];
    if (element % 2 !== 0) {
        countOddNumber++
    }
}
console.log(`Odd Numbers ${countOddNumber}`);


// ===============================================================================
// Smallest Number 

let arrayNumber = [45, 12, 89, 3, 67];
let smallestNumber = 0;

for (let i = 0; i < arrayNumber.length; i++) {
    const element = arrayNumber[i];
    if (smallestNumber === 0) {
        smallestNumber = element;
    }
    if (smallestNumber > element) {
        smallestNumber = element;
    }
}
console.log(`Smallest Number = ${smallestNumber}`);


// ===============================================================================
// Count Names Starting With "A"

let names = [
    "Ali",
    "Ahmed",
    "Sara",
    "Ayesha",
    "Muzamil"
];
let includeLetters = 0;
for (let i = 0; i < names.length; i++) {
    const element = names[i];
    if (element.includes("A")) {
        includeLetters++
    }
}
console.log(`Names starting with A = ${includeLetters}`);


// ===============================================================================
// let skill = ["HTML", "CSS", "JavaScript"];

// console.log(skill.includes("CSS"));
// console.log(skill.includes("Python"));
// console.log(skill.indexOf("CSS"));
// console.log(skill.indexOf("Python"));

// console.log(skill.join());
// console.log(skill.join(" | "));


// ===============================================================================
// Check Skill
let skill = ["HTML", "CSS", "JavaScript"];

if (skill.includes("CSS")) {
    console.log("Skill Found");
} else {
    console.log("Skill Not Found");
}


// ===============================================================================
// Find Position

let fruit = ["Apple", "Banana", "Mango"];
console.log(`Mango is at index ${fruit.indexOf("Mango")}`);

// ===============================================================================
// Student List
let studnts = [
  "Ali",
  "Ahmed",
  "Sara",
  "Muzamil"
];

console.log(studnts.join(" | "));

// ===============================================================================
// Search Student
if (studnts.includes("Muzamil")) {
    console.log("Student Found");
} else {
    console.log("Student Not Found");
}

// ===============================================================================

let arr = ["A", "B", "C"];

arr.push("D");

console.log(arr.includes("D"));
console.log(arr.indexOf("C"));
console.log(arr.join("-"));


// ===============================================================================
// Mini Project Time 🚀

let courses = [
    "HTML",
    "CSS",
    "JavaScript",
    "React"
];

let selectedCourse = "JavaScript";

if (courses.includes(selectedCourse)) {
    console.log("Course Available");
} else {
    console.log("Course Not Available");
}

// ===============================================================================
// Shopping Cart
// Print:
// 1. Laptop
// 2. Mouse
// 3. Keyboard

let cart = [
    "Laptop",
    "Mouse",
    "Keyboard"
];

for (let i = 0; i < cart.length; i++) {
    const element = cart[i];
    let cartItems = `${i + 1}. ${element}`
    console.log(cartItems);
}

// ===============================================================================
// Search Product Position
let products = [
    "Mobile",
    "Laptop",
    "Headphones",
    "Camera"
];

if (products.includes("Laptop")) {
    console.log(`Laptop found at index ${products.indexOf("Laptop")}`)
} else {
    console.log("Product Not Found");
}

// ===============================================================================
// Student Attendance Report

let studentNames = [
    "Ali",
    "Ahmed",
    "Sara",
    "Muzamil"
];
// print
// Ali, Ahmed, Sara, Muzamil

console.log(studentNames.join(", "));
console.log(`Total Students: ${studentNames.length}`);


let books = [
    "Atomic Habits",
    "Deep Work"
];

books.unshift("Clean Code");

console.log(books.join(" | "))