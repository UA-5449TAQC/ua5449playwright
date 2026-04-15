//Operators
console.log("______________________Task 1_________________________")

let a = 15;
let b = 4;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** 2);


console.log("______________________Task 2_________________________")

let x = 5;

console.log(++x);   // returns 6, because the value of x is incremented before it is returned
console.log(x);     // returns 6

console.log(x++);   // returns 6, because the value of x is returned before it is incremented
console.log(x);     // returns 7

console.log(--x);   // returns 6, because the value of x is decremented before it is returned
console.log(x);     // returns 6


console.log("______________________Task 3_________________________")

let result1 = 2 + 3 * 4;
console.log(result1);       // returns 14, because multiplication is calculated before addition

let result2 = (2 + 3) * 4;
console.log(result2);       // returns 20, because brackets change the order of operations

let result3 = 10 - 5 + 2;
console.log(result3);       // returns 7, because subtraction and addition are evaluated from left to right


console.log("______________________Task 4_________________________")

console.log(5 + "2");       // 52, if one operand from addition is string, both converted to string
console.log("5" - 2);       // 3, other operations convert strings to numbers
console.log("10" + true);   // 10true, addition converts to string
console.log("10" - true);   // 9, division convert to numbers, true = 1


console.log("______________________Task 5_________________________")

console.log(false === 0);           // false, values have different types - boolean and number
console.log("1" == 1);              // true, loose equality compares values after converting to same type
console.log("1" === 1);             // false, different types
console.log(null == undefined);     // true
console.log(null === undefined);    // false


console.log("______________________Task 6_________________________")

console.log(0 || "Hello" || 5);         // "Hello", because || operator returns the first truthy value
console.log(1 && 0 && 5);               // 0, because && operator returns the first falsy value
console.log(null || undefined || "JS"); // "JS", "JS" is truthy, so it returns "JS"
console.log(2 || 1 && 0);               // 2, because && is calculated first, so 1 && 0 results in 0, then 2 || 0 resulting in 2

// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question("Enter a number: ", (p) => {
//     const num = Number(p);

//     const result1 = num >= 0 && num <= 100;
//     const result2 = num <0 || num > 100;

//     console.log("Number is between 0 and 100:", result1 );
//     console.log("Number is outside 0 and 100:", result2 );

//     rl.close();
// }
// );

console.log("______________________Task 7_________________________")

const age = 20;

const isAdult = age >= 18 ? "Adult" : "Minor";
console.log("Is the person an adult?", isAdult);


console.log("______________________Task 8_________________________")

let numA = "25";
let numA1 = Number(numA);
let numA2 = +numA; // Both Number() and unary plus convert the string "25" to the number 25.

console.log(numA1, numA2)

let numB = "25.5px";
let numB1 = parseInt(numB); // parseInt will extract the integer part, resulting in 25.
let numB2 = parseFloat(numB); // parseFloat will extract the floating-point number, resulting in 25.5.

console.log(numB1, numB2)

console.log(isNaN("123"),       // false, because "123" can be converted to a number
    isNaN("123abc"),    // true, because "123abc" cannot be converted to a number
    isNaN(null),        // false, because null is converted to 0
    isNaN(undefined),   // true, because undefined cannot be converted to a number
    isNaN(true)         // false, because true is converted to 1
);


console.log("______________________Task 9_________________________")

const cities = ["Rome", "Lviv", "Warsaw"];

cities[0] = "Paris";        //changed first element
console.log(cities);

cities.push("London");      //added element to the end
console.log(cities);

cities.unshift("Amsterdam") //added element to the beginning
console.log(cities);

cities.pop();               //removes element from the end
console.log(cities);

console.log(cities.length); //length of array 4

const newCities = cities.slice(2, 4); // new array via slice
console.log(cities);
console.log(newCities);

//const citiesLengths = cities.map(city => city.length);
const length = cities.map(function getLength(city) { return city.length });
console.log(length);


console.log("______________________Task 10_________________________")

//if...else

const number = 0;
console.log(number);

if (number > 0)
    console.log("Positive");
else if (number < 0)
    console.log("Negative");
else
    console.log("Zero");

//switch

switch (true) {
    case (number > 0):
        console.log("Positive");
        break;
    case (number < 0):
        console.log("Negative");
        break;
    default:
        console.log("Zero")
}

//ternary operator

console.log(number > 0 ? "Positive" : (number < 0 ? "Negative" : "Zero"));