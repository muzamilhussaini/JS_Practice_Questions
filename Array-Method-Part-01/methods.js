let arr = ["HTML", "CSS", "JS", "React"];

console.log(arr.slice(1, 3));
console.log(arr);

let array = ["HTML", "CSS", "JS"];

array.splice(1, 1);

console.log(array);

let rev = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

rev.reverse();
console.log(rev);

let sort = [5, 2, 3, 9, 1];

sort.sort();
console.log(sort);
sort.sort(function ascending(a, b) {
    return b - a;
});

console.log(sort);


// ========================================================================================
// Challenge 1 — Using .slice()
// Print:

// "CSS", "JavaScript", "React"
let courses = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js"
];

let slice = courses.slice(1, 4);

console.log(slice);
// console.log(courses);


// ========================================================================================
// Challenge 2 — Using .slice()

let fruits = [
    "Apple",
    "Banana",
    "Mango",
    "Orange",
    "Grapes"
];

console.log(fruits.slice(3, 5)); // OR console.log(fruits.slice(3));


// ========================================================================================
// Challenge 3 — Using .splice()
// Remove:
// "Bootstrap"

// Final output:
// ["HTML", "CSS", "JavaScript"]

let skills = [
    "HTML",
    "CSS",
    "Bootstrap",
    "JavaScript"
];

skills.splice(2, 1)
console.log(skills);


// ========================================================================================
// Challenge 4 — Using .splice()

let numbers = [
    10,
    20,
    30,
    40,
    50
];  //Remove: 20, 30

numbers.splice(1, 2);
console.log(numbers);


// ========================================================================================
// Challenge 5 — Using .reverse()
// Reverse the array.
let anime = [
    "Naruto",
    "Bleach",
    "One Piece",
    "Demon Slayer"
];

console.log(anime.reverse())


// ========================================================================================
// Challenge 6 — Using .sort()

let marks = [
    55,
    90,
    70,
    40,
    80
];
marks.sort()
console.log(marks);


// ========================================================================================
// Challenge 7 — Interview Style 😈
// 1. Remove "C"
// 2. Reverse the array

let alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E"
];
alphabet.splice(2, 1);
alphabet.reverse();
console.log(alphabet);


// ========================================================================================
// Challenge 8 — Interview Style 😈
// 1. Reverse
// 2. Sort

let revSort = [
    5,
    4,
    3,
    2,
    1
];

revSort.reverse()
revSort.sort()
console.log(revSort);


// ========================================================================================
// Mini Project — Student Manager 🚀
// Create array "Ali","Ahmed","Sara","Muzamil","Ayesha"

// Requirements:
// Step 1
// Create a new array containing only:
// [
//     "Ahmed",
//     "Sara",
//     "Muzamil"
// ]

// Step 2
// Remove:
// "Sara"


// Step 3
// Reverse the remaining array.

// Final Output
// [
//     "Muzamil",
//     "Ahmed"
// ] 

let students = [
    "Ali",
    "Ahmed",
    "Sara",
    "Muzamil",
    "Ayesha"
];
let newArray = students.slice(1, 4);

newArray.splice(1, 1);
console.log(newArray);
newArray.reverse()
console.log(newArray);



// Challenge A — Remove and Reverse
// [
//     "HTML",
//     "CSS",
//     "Bootstrap",
//     "JavaScript",
//     "React"
// ];

// Requirements:
// Remove "Bootstrap"
// Remove "React"
// Reverse

// Final output:

// ["JavaScript","CSS","HTML"];

let courseArray = ["HTML", "CSS", "Bootstrap", "JavaScript", "React"];

courseArray.splice(2, 1);
courseArray.splice(3, 1);
console.log(courseArray.reverse());


// Challenge B — Largest Number After Sort
// [
//     45,
//     12,
//     89,
//     3,
//     67
// ];

// Sort
// Reverse
// Print the largest number using index access

// Expected:
// 89

let largestArray = [45, 12, 89, 3, 67];
let findingLargest = 0;
largestArray.sort(function sorting(a, b) {
    return a - b;
});
largestArray.reverse();
console.log(largestArray[0])

// console.log(largestArray);
for (let i = 0; i < largestArray.length; i++) {
    const element = largestArray[i];
    if (findingLargest < element) {
        findingLargest = element
    }
}
console.log(findingLargest);


// Challenge C — Student Search
// [
//     "Ali",
//     "Ahmed",
//     "Sara",
//     "Muzamil"
// ];

// If "Muzamil" exists:
// Student Found at index ?

let studentArray = ["Ali", "Ahmed", "Sara", "Muzamil"];

if (studentArray.includes("Muzamil")) {
    console.log(`Student Found at index: ${studentArray.indexOf("Muzamil")}`);
}


// Mini Project — Anime Manager 🚀

let animeArray = [
    "Naruto",
    "Bleach",
    "One Piece",
    "Demon Slayer",
    "Attack on Titan"
];

let newAnimeArray = animeArray.slice(1,4);
console.log(newAnimeArray);
newAnimeArray.splice(1,1);
console.log(newAnimeArray);
newAnimeArray.reverse();
console.log(newAnimeArray);