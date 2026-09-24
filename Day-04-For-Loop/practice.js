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

// Sum of Even Numbers

let even = 0;

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        even += i;
    } 
}
console.log(even);


// Sum of Odd Numbers

let odd = 0;
for (let i = 1; i <= 10; i++) {
    if (i % 2 !== 0){
        odd += i;
    }
}
console.log(odd);

let counts = 5;
for (let i = 1; i <= 5; i++) {
    let row = "*";
    for (let j = 1; j <= i; j++) {
        row += j
    }
    console.log(row);
}

for (let i = 1; i <= 3; i++) {
    console.log("Outer:", i);
}



let row = "";

for (let j = 1; j <= 3; j++) {
    row += j;
}

console.log(row);

for (let i = 1; i <= 2; i++) {

    for (let j = 1; j <= 3; j++) {
        console.log(i, j);
    }

}


for(let i = 1; i <= 5; i++) {
    let row = "";

    for(let j = 1; j <= i; j++) {
        row += i
    };
    console.log(row);
};

for (let i = 5; i >= 1; i--) {
    let row = "";
    for(let j = 1; j <= i; j++) {
        row += i
    }
    console.log(row);
}

for (let i = 1; i <= 5; i++) {
    let row = "";
    for(let j = 5; j >= i; j--) {
        row += i
    }
    console.log(row);
}

for (let i = 1; i <= 5; i++) {
    let row = "";

    for (let j = 5; j >= i; j--) {
        row += "*";
    }

    console.log(row);
}

for(let i = 1; i <= 5; i++) {
    let row = "";
    for(let j = 1; j <= 5; j++) {
        row += i;
    }
    console.log(row);
}

for(let i = 1; i <= 3; i++) {
    // let row = "";
    for(let j = 1; j <= 3; j++) {
        console.log(`${i} * ${j} = ${i * j}`)
    }
}


let ttl = 0;

for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 2; j++) {
        ttl += i;
    }
}

console.log(ttl);


// Challenge A — Number Triangle

// Create a pattern:

// 1
// 22
// 333
// 4444
// 55555

for (let i = 1; i <= 6; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += i;
    }
    console.log(row)
}

// Challenge B — Star Box

// Create:

// *****
// *****
// *****
// *****
// *****

for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= 5; j++) {
        row += "*";
    }
    console.log(row);
}

// Challenge C — Reverse Number Triangle

// Create:

// 666666
// 55555
// 4444
// 333
// 22
// 1

for (let i = 6; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += i;
    }
    console.log(row);
}

// Challenge D — Even Numbers Pattern

// Create:

// 2
// 24
// 246
// 2468
// 246810

// This one is trickier. 😈

for (let i = 1; i <= 10; i++) {
    if (i %  2 === 0) {
        let row = "";
        for (let j = 1; j <= i; j++) {
            if (j % 2 === 0) {
                row += j;
            }
        }
        console.log(row);
    }
}

// Mini Project — ATM Menu
// Create a program with:
// let balance = 5000;
// let choice = "withdraw";
// let amount = 2000;

// No loops required.

let balance = 5000;
let choice = "withdraw";
let amount = 2000;

if (choice === "check") {
    console.log(balance);
} else if (choice === "withdraw" && amount <= balance) {
    console.log("withdraw successfully");
} else if (amount > balance) {
    console.log("insufficient funds");
} else {
    console.log("invalid option");
};


let table = 2
for (let i = 1; i <= 10; i++) {
    let result = table * i
    console.log(`${table} * ${i} = ${result}`)
}

for (let i = 3; i <= 3; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`)
    }
}

for (let i = 1; i <= 5; i++) {
    let top = "";
    for (let j = 1; j <= i; j++) {
        top += j
    }
    console.log(top);
}
for (let q = 4; q >= 1; q--) {
    
    let bottom = ""
    for (let k = 1; k <= q; k++) {
        bottom += k
    }
    console.log(bottom)
}

for (let i = 1; i <= 5; i++) {
    let top = "";
    for (let j = 1; j <= i; j++) {
        top += "*"
    }
    console.log(top);
    if (i === 5) {
        for (let q = 4; q >= 1; q--) {
            
            let bottom = ""
            for (let k = 1; k <= q; k++) {
                bottom += "*"
            }
            console.log(bottom)
        }
    }
}
