

// function printHello() {
//     console.log("Hello");
//     console.log("\tHello");
//     console.log("\t\ttHello");
//     console.log("\tHello");
//     console.log("Hello");
// }

// printHello();
// printHello();
// console.log(printHello);
// s = printHello;
// s();


// function printInfo(name, age) {
//     console.log("Name: " + name);
//     console.log("Age: " + age);
// }

// printInfo("Alice", 30);
// printInfo("Bob", 25);
// printInfo(35, "Charlie");
// printInfo("Dave");
// printInfo();
// function printInfo(name="Unknown", age=18) {
//     console.log("Name: " + name);
//     console.log("\tAge: " + age);
// }


// function printInfo(name="Unknown", age=18) {
//     console.log("Arguments: " + arguments.length);
//     for (let i = 0; i < arguments.length; i++) {
//         console.log("\t\tArgument " + i + ": " + arguments[i]);
//     }
//     console.log("\tName: " + name);
//     console.log("\tAge: " + age);
// }
// printInfo("Alice", 30);
// printInfo("Bob");
// printInfo();
// let result = printInfo("Charlie", 35, "Extra argument", "Another extra argument");
// console.log("Result: " + result);


// function sum(max) {
//     let total = 0;
//     console.log("Generated number: ");
//     while (true) {
//         if (total >= max) {
//                 return total;
//         }
//         let randomNum = Math.floor(Math.random() * 10) + 1; // Random number between 1 and 10
//         console.log("\t" + randomNum);
//         total += randomNum
//     }
//     console.log("This will never be printed");
// }

// let result = sum(50);
// console.log("Final result: " + result);

// function factorial(n) {
//     if (n < 0) {
//         return "Error: Factorial is not defined for negative numbers.";
//     } else if (n === 0 || n === 1) {
//         return 1;
//     } else {
//         let str = n + "! = " + n;
//         for (let i = n - 1; i > 1; i--) {
//             n *= i;
//             str += " * " + i;
//         }
//         return [ n, str ];
//     }
// }
// // console.log(n) //ReferenceError: n is not defined

// console.log("Factorial of 5: " + factorial(5));
// console.log("Factorial of 0: " + factorial(0));
// console.log("Factorial of -3: " + factorial(-3));

// let name = "Alice";
// function printName() {
//     console.log("Name: " + name);
//     var name = "Bob";
//     console.log("Name inside function: " + name);
// }

// printName(); // Output: Name: Alice

// console.log(printName); // Output: Name: Alice
// // printName(); // Output: Name: undefined
// var printName = function(name) {
//     console.log(">>> Name: " + name);
// }

// printName("Alice");
// printName("Bob");
// function printNameD(name) {
//     console.log(">>> Name (D): " + name);
// }
// let names = ["Charlie", "Dave", "Eve"];
// console.log(">>> Names array: " + names);
// names.forEach(printNameD);
// console.log(">>> Names array: " + names);
// names.forEach(function (n) {
//     console.log(">>> Name: " + n);
// });

// printNameD("Frank");

// function add(x, y) {
//     return x + y;
// }
// function subtract(x, y) {
//     return x - y;
// }
// function multiply(x, y) {
//     return x * y;
// }   
// function divide(x, y) {
//     if (y === 0) {
//         return "Error: Division by zero is not allowed.";
//     }
//     return x / y;
// }

// function calculate(x, y, operation) {
//     return operation(x, y);
// }

// console.log("Addition: " + calculate(10, 5, add));
// console.log("Subtraction: " + calculate(10, 5, subtract));
// console.log("Multiplication: " + calculate(10, 5, multiply));
// console.log("Division: " + calculate(10, 5, divide));
// console.log("Division by zero: " + calculate(10, 0, divide));

// obj = {
//     name: "Alice",
//     age: 30,
//     values: [1, 2, 3],
//     obj2: {
//         city: "New York",
//         name: "Bob",
//         age: 25,
//         ddd: {
//             city: "New York",
//             name: "Bob",
//             age: 25,
//             values: [4, 5, 6]
//         },
//         values: [4, 5, 6]
//     }
// }

// console.log("Object: " + obj);

// function printObject(o, level=0) {
//     keys = Object.keys(o);
//     let prefix = "\t".repeat(level);
//     console.log(prefix + "Object keys: " + keys);
//     for (let i = 0; i < keys.length; i++) {
//         if (typeof o[keys[i]] === "object" && Array.isArray(o[keys[i]]) === false) {
//             console.log(prefix + keys[i] + ": ");
//             printObject(o[keys[i]], level+1);
//         } else {    
//             console.log(prefix + keys[i] + ": " + o[keys[i]]);
//         }
//     }
// }
// printObject(obj);


function add(x, y) {
    return x + y;
}
function subtract(x, y) {
    return x - y;
}
function multiply(x, y) {
    return x * y;
}   
function divide(x, y) {
    if (y === 0) {
        return "Error: Division by zero is not allowed.";
    }
    return x / y;
}

function calculate(x, y) {
    let coll = [];

    function op(operation) {
        coll.push(operation.name);
        console.log("Operation count: " + coll.length, "Operations: " + coll);
        return operation(x, y);
    }
    return op;
}

calc_10_5 = calculate(10, 5);
calc_8_4 = calculate(8, 4);

console.log("Addition: " + calc_10_5(add));
console.log("Addition: " + calc_8_4(add));
console.log("Subtraction: " + calc_10_5(subtract));
console.log("Multiplication: " + calc_10_5(multiply));
console.log("Division: " + calc_10_5(divide));
console.log("Division: " + calc_8_4(divide));
console.log("Division by zero: " + calc_10_5(divide));