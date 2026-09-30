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

        if (found) {
            console.log("Found");
        } 
        else {
            console.log("Not Found");
        }
    }

}



// ===============================================================================
// Challenge 5 — Student List 
let students = [
    "Ali",
    "Ahmed",
    "Muzamil",
    "Sara"
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

let numb = [5, 10, 15, 20];
let sum = 0;
for (let i = 0; i < numb.length; i++) {
    sum += numb[i]
}
console.log(`Sum = ${sum}`);
console.log(`Average = ${sum / 4}`);