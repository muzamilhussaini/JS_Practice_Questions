let a = 1;

while (a <= 3) {
    console.log(a);
    a++;
}

let b = 1;

do {
    console.log(b);
    b++;
}
while (b <= 5);

let c = 5;

do {
    console.log(c);
}
while (c < 5);

// Challenge 1 — While Loop 
let d = 1;

while(d <= 10) {
    console.log(d);
    d++;
}

// Challenge 2 — Countdown 
let e = 10;
while (e >= 1) {
    console.log(e);
    e--;
}
console.log("Liftoff!");

// Challenge 3 — Even Numbers 

let f = 1;
while (f <= 20) {
    if (f % 2 === 0) {
        console.log(f);
    }
    f++;
}

// Challenge 4 — Sum 
let total = 0;
let g = 1;

while(g <= 10) {
    total += g
    g++
}
console.log(total);

// 🔥 Challenge 5 — Do...While 
// 5
// 4
// 3
// 2
// 1

let h = 5;
do {
    console.log(h);
    h--;
}
while (h >= 1);

// 😈 Challenge 6 — Understand the Difference
// Create two programs.

// The first should use while.
// The second should use do...while.

// Start with:
// i = 10
// and use the condition:

// i < 5

// The while version should print nothing, while the do...while version should print 10 once.

let i = 10;
while (i < 5) {
    console.log(i);
    i++;
}

do {
    console.log(i);
    i++;
}

while (i < 5);

// 🧩 Mini Project — Password Attempts

// Create a simple password checker using while.

// Start with:

// correctPassword = "1234";
// password = "0000";

// Your program should:

// Check the password.
// If incorrect, increase the attempt count.
// Allow a maximum of 3 attempts.
// If the password is correct → print "Login successful"
// If 3 attempts are used without the correct password → print "Account locked"

let correctPassword = "1234";
let password = "0000";
let attempts = 1;

while (attempts <= 3) {
    if (password === correctPassword) {
        console.log("Login successful");
        break;
    } else {
        if (attempts > 2) {
            console.log("Account locked");
            break;
        }
        console.log("Try again!");
    } 
    attempts++
}

// 🧠  Sum of Even Numbers
// Starts from 1
// Goes up to 20

let sum = 0;
let j = 0;
while (j <= 20) {
    if (j % 2 === 0) {
        sum += j
    }
    j++;
}
console.log(sum);


// Challenge — Reverse a Number

// Create a while loop that reverses this number:

// 12345;

// Expected output:

// 54321

let number = 12345;
let reverse = 0;


while(number > 0) {
    reverse = reverse * 10 + (number % 10)
    // console.log(Math.floor(nu / 10));
    number = Math.floor(number / 10);
}
console.log(reverse);


// 🧠 Challenge — Count Digits

// Create a while loop that counts how many digits are in:

// 987654;
// Expected output:
// 6

let num = 987654;
let count = 0;

while (num > 0) {
    num = Math.floor(num / 10);
    count++;
}
console.log(count);


// 🔥 Challenge — Guessing Game Logic

// Create a simple guessing-game loop.

// You have:

// secretNumber 
// guess

// Rules:

// Keep looping while the guess is incorrect.
// If the guess is smaller than the secret number → print "Too low"
// If the guess is greater → print "Too high"
// When the guess becomes correct → print "Correct!" and stop the loop.

// For now, you can manually change guess inside the loop to test your logic.

let secretNumber = 7;
let guess = 5;

while (guess !== secretNumber ) {

    if (guess > secretNumber) {
        console.log("Too High")
        guess--;
    } else {
        console.log("Too Low");
        guess++;
    }
};
console.log("Correct!");

// 🚀 Mini Project — ATM PIN

// Create an ATM PIN system using a while loop.

// Requirements:

// Correct PIN = "1234"
// User gets 3 attempts
// If correct → "Access granted"
// If wrong but attempts remain → "Incorrect PIN. Try again."
// After the third wrong attempt → "Card blocked"
// Use break when the user successfully logs in or the card is blocked.

const correctPIN = "1234";
const enterPIN = "12343"
let attempt = 1;

while (attempt <= 3) {
    if (enterPIN === correctPIN) {
        console.log("Access granted");
        break;
    } 
    if (attempt >= 3) {
        console.log("Card is blocked");
        break;
    }
    console.log("Incorrect PIN. Try again");
    attempt++;
}


// Reverse Number Challenge
// This one is harder.
// Suppose:
// 12345

// and then:
// 1234
// The question is:
// How do we build:

// 5
// 54
// 543
// 5432
// 54321

// That's your puzzle. 😈

let digit = 12345;
let L = "";
while (digit > 0) {
    L += digit % 10;
    digit = Math.floor(digit / 10)
    console.log(L)
}