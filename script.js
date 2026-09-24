// // 1. Largest of Two Integers
// // Write a JavaScript program that displays the largest integer among two integers.

// let num1 = 55;
// let num2 = 25;

// if(num1 > num2) {
//     console.log((`${num1} is larger than ${num2}`));
// } else if (num2 > num1) {
//     console.log(num2, "is larger than", num1);
// } else {
//     console.log("Both are equal values.")
// };

// // -----------------------------------------------------------------------------------------------------------------------------------------------

// // 2. Sign of Product of Three Numbers
// // Write a JavaScript conditional statement to find the sign of the product of three numbers. Display an alert box with the specified sign.
// // Sample numbers : 3, -7, 2
// // Output : The sign is -


// let sign = alert("specified sign")
// var numb1 = 3;
// var numb2 = -7;
// var numb3 = 2;
// let product = numb1 * numb2 * numb3;

// if(product > 0) {
//     alert("The sign is +");
// } else if (product < 0) {
//     alert("The sign is -");
// } else if (product == 0){
//     alert("The sign is zero");
// } else {
//     alert("Invalid values.");
// };

// // -----------------------------------------------------------------------------------------------------------------------------------------------

// // 4. Largest of Five Numbers
// // Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the results.
// // Sample numbers : -5, -2, -6, 0, -1
// // Output : 0

// let a = -5;
// let b = -2;
// let c = -6;
// let d = 0;
// let e = -1;

// let largest = a;
// if(b > largest) {
//     largest = b;
// }if(c > largest) {
//     largest = c;
// }if(d > largest) {
//     largest = d;
// }if(e > largest) {
//     largest = e;
// };
// alert(`The largest number is ${largest}`);


// // -----------------------------------------------------------------------------------------------------------------------------------------------

// // 5. Odd or Even Loop
// // Write a JavaScript for loop that iterates from 0 to 15. For each iteration, it checks if the current number is odd or even, and displays a message on the screen.
// // Sample Output :
// // "0 is even"
// // "1 is odd"
// // "2 is even"
// // ----------
// // ----------

// for (let i = 0; i <= 15; i++) {
//     if(i % 2 == 0) {
//         console.log(i, "is even.");
//     } else {
//         console.log(i, "is odd")
//     }
// };


// // -----------------------------------------------------------------------------------------------------------------------------------------------

// 6. Student Grades Calculation
// Write a JavaScript program that computes the average marks of the following students. Then, this average is used to determine the corresponding grade.

// Student Name	Marks
// David	80
// Vinoth	77
// Divya	88
// Ishitha	95
// Thomas	68
// The grades are computed as follows :
// Range	Grade
// <60	F
// <70	D
// <80	C
// <90	B
// <100	A


let name = prompt("Enter your name: ")
let marks = prompt("Enter your marks please: ");
let grades;
if(name == "Ishitha" && marks == 95 || marks > 90 || marks < 100) {
    grades = "A"
} else if (name == "Divya" && marks == 88 || marks < 90 || marks > 80) {
    grades = "B"
} else if(name == "David" && marks == 80 || marks < 80 || marks > 70) {
    grades = "C"
}
console.log(grades)

