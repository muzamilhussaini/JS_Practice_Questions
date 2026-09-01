// Challenge 1 — Voting Eligibility

let age = 17;

if (age > 18) {
    console.log("You can vote.");
} else {
    console.log("You cannot vote.");
};


// Challenge 2 — Even or Odd 

let num = 25;

if (num % 2 === 0) {
    console.log("Even Number");
} else {
    console.log("Odd Number");
};


// Challenge 3 — Pass or Fail

let mark = 55;

if (mark >= 50) {
    console.log("Pass");
} else {
    console.log("Fail");
};


// Challenge 4 — Positive, Negative, or Zero

let number = -5;

if (number > 0) {
    console.log("Positive");
} else if (number < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
};


// Challenge 5 — Largest Number 

let a = 15;
let b = 20;

if (a > b) {
    console.log(`${a} is larger.`);
} else {
    console.log(`${b} is larger`);
};

// Challenge 6 — Grade Calculator 

// Take student marks 75
// Rules:

// 80+  -> A
// 60+  -> B
// 40+  -> C
// Below 40 -> Fail

// Expected Output:
// Grade B

let marks = 75;

if (marks >= 80) {
    console.log("Grade A");

} else if (marks >= 60) {
    console.log("Grade B");

} else if (marks >= 40) {
    console.log("Grade C");

} else {
    console.log("Fail");
};


// Challenge 7 — Largest of Three Numbers

let x = 20;
let y = 45;
let z = 30;

if (x > y && x > z) {
    console.log(`${x} is largest `);
} else if (y > x && y > z) {
    console.log(`${y} is largest`);
} else if (z > x && z > y) {
    console.log(`${z} is largest`);
} else if (x === y || x === z ) {
    console.log("same largest number")
} else {
    console.log("Error!")
};


// Challenge 8 — Temperature Checker 

let temperature = 42;
// Rules:

// 40+ -> Very Hot
// 30+ -> Hot
// 20+ -> Normal
// Below 20 -> Cold

if (temperature > 40) {
    console.log("Very Hot");
} else if (temperature > 30) {
    console.log("Hot");
} else if (temperature > 20){
    console.log("Normal");
} else {
    console.log("Cold");
};


// Challenge 9 — Simple ATM

let balance = 5000;
let withdrawAmount = 3000;

// Rules:
// If withdraw amount is less than or equal to balance:
// Withdrawal Successful
// Remaining Balance: 2000
// Otherwise:
// Insufficient Balance

if (withdrawAmount <= balance) {
    console.log("Withdrawal Successful");
    let remaining = balance - withdrawAmount
    console.log(`Remaining Balance: ${remaining}`);
} else {
    console.log("Insufficient Balance");
};


// Challenge 10 — Login System

let username = "admin";
let password = "1234";

// Rules:

// Username correct + password correct
// Login Successful
// Username correct + password wrong
// Wrong Password
// Username wrong
// User Not Found

if (username === "admin") {
    if (password === "1234") {
        console.log("Login Successful");
    } else {
        console.log("Wrong Password");
    };
} else {
    console.log("User Not Found");
};


// Mini Project 1 — Scholarship Eligibility 

let cgpa = 3.4;
let attendance = 82;

// Student gets scholarship only if:
// CGPA >= 3.0
// AND
// Attendance >= 80

// Output:
// Scholarship Eligible

// Otherwise:
// Scholarship Not Eligible

if (cgpa >= 3.0 && attendance >= 80) {
    console.log("Scholarship Eligible");
} else {
    console.log("Scholarship Not Eligible");
};


// Mini Project 2 — University Admission Checker

let matricMarks = 900;
let fscMarks = 850;
let entryTest = 72;

// Rules:
// Admission allowed if:

// Matric >= 800
// FSC >= 700
// Entry Test >= 60

// Output:
// Admission Approved

// or
// Admission Rejected

if (matricMarks >= 800 && fscMarks >= 700 && entryTest >= 60) {
    console.log("Admission Approved");
} else {
    console.log("Admission Rejected");
};


// Mini Project 3 — Number Analyzer 

// Program should tell:

// Number: -8
// Negative
// Even

// or

// Number: 5
// Positive
// Odd

let numb = -8;

if (numb < 0) {
    console.log(`Number: ${numb}`);
    console.log("Negative");
    if (numb % 2 === 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    };
} else if (numb > 0) {
    console.log(`Number: ${numb}`);
    console.log("Positive");
    if (numb % 2 !== 0) { 
        console.log("Odd"); 
    } else {
        console.log("Even"); 
    }
} else {
    console.log(`Number is: ${numb}`)
};



// Mini Project 4 — Simple E-Commerce Discount


// Rules:
// 10000+ -> 20% Discount
// 5000+  -> 10% Discount
// Below 5000 -> No Discount

// Output:

// Total Purchase: 12000
// Discount: 20%

let totalPurchase = 12000;
let finalPrice;

console.log(`Total Purchase: ${totalPurchase}`);

if (totalPurchase > 10000) {
    finalPrice = totalPurchase - (totalPurchase * 0.20);
    console.log("Discount: 20%");
} else if (totalPurchase > 5000 && totalPurchase < 10000) {
    finalPrice = totalPurchase - (totalPurchase * 0.10);
    console.log("Discount: 10%")
} else {
    console.log("Sorry dear! No Discount.");
    finalPrice = totalPurchase;
}
console.log(`The Final price is ${finalPrice}`);



// Challenge Q — Movie Ticket System

// A cinema has these rules:

// Age below 12
// Ticket = Free

// Age 12–17
// Ticket = Rs. 300

// Age 18–59
// Ticket = Rs. 500

// Age 60+
// Ticket = Rs. 200

let Age = 19;
let Ticket;

if (Age >= 12 && Age <= 17) {
    Ticket = `Rs. 300`;
} else if (Age >= 18 && Age <= 59) {
    Ticket = `Rs. 500`;
} else if (Age >= 60) {
    Ticket = `Rs. 200`;
} else {
    Ticket = `Free`
};
console.log(`For your age the ticket amount is ${Ticket}.`);


// Challenge 2 — Password Strength Checker
// Rules:

// Length less than 6
// Weak

// Length between 6 and 10
// Medium

// Length greater than 10
// Strong

// Input:
let passWord = "..."

// Output:

// Weak
// Medium
// Strong

if (passWord.length < 6) {
    console.log("Weak");
} else if (passWord.length >= 6 && passWord.length <= 10){
    console.log("Medium");
} else {
    console.log("Strong");
}
// console.log(passWord.length)


// Challenge 3 — Electricity Bill
// Rules:
// 0–100 units
// Rs. 10 per unit

// 101–200 units
// Rs. 15 per unit

// 201+ units
// Rs. 20 per unit

// Output:
// Total Bill: ?

let units = 101;

if (units > 0 && units <= 100) {
    units = units * 10;
} else if (units > 100 && units <= 200){
    units = units * 15;
} else {
    units = units * 20;
}

console.log(`Total Bill: ${units}`);


let year = 1600;
console.log(year % 400);

let leapYear;

if (year % 4 === 0 && year % 400 !== 0 && year % 100 !== 0 ) {
    leapYear = `Leap Year`;
} else if (year % 4 === 0 && year % 100 === 0 && year % 400 !== 0) {
    leapYear = `Not Leap Year`;
} else if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0) {
    leapYear = `Leap Year`;
} else if (year % 4 !== 0 && year % 100 !== 0 && year % 400 !== 0) {
    leapYear = `Not Leap Year`;
}

console.log(leapYear);
