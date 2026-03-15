/* Data types */
console.log("______________________Task 1_________________________")

// String
let string = "Lorem ipsum.";
console.log("Value: " + string, "Type: " + typeof string);

// Number
let number = 31;
console.log("Value: " + number, "Type: " + typeof number);

// BigInt
let bigInt = 999999999999999999999n
console.log("Value: " + bigInt, "Type: " + typeof bigInt);

// Boolean
let boolean = true;
console.log("Value: " + boolean, "Type: " + typeof boolean);

// Undefined
let undefinedVar;
console.log("Value: " + undefinedVar, "Type: " + typeof undefinedVar);

// Null
let nullVar = null;
console.log("Value: " + nullVar, "Type: " + typeof nullVar);

// Object
let object = { name: "Anna", eyeColor: "green" };
console.log("Value: ", object, "Type: " + typeof object);

// Symbol
let symbol = Symbol("unique");
console.log("Value: " + symbol.toString(), "Type: " + typeof symbol);


/* Weak typing */

console.log("______________________Task 2_________________________")


let x = undefined;
console.log(x, typeof x);

x = 45;
console.log(x, typeof x);

x = "45"
console.log(x, typeof x);


/* String type conversion */

console.log("______________________Task 3_________________________")

let hdt1 = String(100); // String() function converts the number 100 to a string "100".
console.log(hdt1, typeof hdt1);

let hdt2 = 100 + ""; // + operator prioritizes string concatenation over math addition.
console.log(hdt2, typeof hdt2);


/* Number type conversion */
console.log("______________________Task 4_________________________");

let thf = "250";
console.log(thf, typeof thf);

let thf1 = Number(thf);
console.log(thf1, typeof thf1);

let thf2 = +thf;
console.log(thf2, typeof thf2);

console.log(
    parseInt("12.75px"),
    parseFloat("12.75px"),
    parseInt("text")
);


/* Check for NaN */

console.log("______________________Task 5_________________________");

console.log(
    isNaN("123"),       // false, because "123" can be converted to a number
    isNaN("123abc"),    // true, because "123abc" cannot be converted to a number
    isNaN(null),        // false, because null is converted to 0
    isNaN(undefined),   // true, because undefined cannot be converted to a number
    isNaN(true)         // false, because true is converted to 1
);


/* Boolean type conversion */

console.log("______________________Task 6_________________________");

console.log(
    Boolean("Hello"),   // true, because non-empty strings are truthy
    Boolean(""),        // false, because an empty string is falsy
    Boolean(0),         // false, because 0 is falsy
    Boolean(1),         // true, because non-zero numbers are truthy
    Boolean(null),      // false, because null is falsy
    Boolean(undefined)  // false, because undefined is falsy  
);

console.log(
    !!"hello",          // double negation of true is true
    !""                 // negation of false is true
);


/* Operator precedence */

console.log("______________________Task 7_________________________");

console.log(10 - 20 / 5);       // division, then subtraction
console.log(2 ** 4 * 2);        // exponentiation then multiplication

console.log((10 - 20) / 5);       // subtraction before division
console.log(2 ** (4 * 2));        // multiplication before exponentiation


/* Array operations */

console.log("______________________Task 8_________________________");

let arr = ["cat", "cucumber", "dog", "parrot"];

// print first and last elements of array
console.log(arr[0], arr[arr.length - 1]);

// change second element of array
arr[1] = "tomato";
console.log(arr[1]);

// add new alement with index 6
arr[6] = 'potato';
console.log(arr);

// size of array
console.log(arr.length)

// iterate through array
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for (let i of arr) {
    console.log(i);
}


/* Array operations */

console.log("______________________Task 9_________________________");

const numbers = [2, 4, 6, 8, 10]

numbers.push(12)
console.log(numbers)

numbers.pop()
console.log(numbers)

numbers.shift()
console.log(numbers)

let new_numbers = numbers.slice(1, 3)
console.log(new_numbers)

numbers.splice(2, 2)
console.log(numbers)


/* Array methods */

console.log("______________________Task 10_________________________");

const numArr = [5, 10, 15, 20, 25];
console.log(numArr)

const numArrMap = numArr.map(function (num) { return num * 2 })
console.log(numArrMap)

const numArrFilter = numArr.filter(function (num) { return num > 12 })
console.log(numArrFilter)

const sum = numArr.reduce(reducer)
function reducer(total, value) { return total + value }
console.log(sum)