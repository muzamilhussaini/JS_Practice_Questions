for(let i = 1; i <= 10; i++) {
    console.log(i)
}
for(let i = 10; i >= 1; i--) {
    console.log(i)
}

for (let i = 1; i <= 10; i += 2) {
    console.log(i);
}
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
    
}

for (let i = 0; i <= 10; i++) {
    if (i % 2 !== 0) {
        console.log(i)
    }
}

for (let i = 1; i <= 10 ; i++) {
    console.log(i * 5)
}

let total = 0;
for (let i = 0; i <= 5; i++) {
    total = total + i  
}
console.log(total);

// Challenge  — Multiplication Table

let number = 7;

for (let i = 1; i <= 10; i++) {
    console.log(number * i)
}


// Challenge Count Even Numbers

// Between: 1 and 20 and output should be 10
let count = 0;

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        count++
    }
}
console.log(count);


// Challenge — Countdown Rocket
// Print:

// 5
// 4
// 3
// 2
// 1
// Liftoff!

for (let i = 5; i >= 1; i--) {
    console.log(i);
    if (i === 1) {
        console.log("Liftoff!")
    }
}