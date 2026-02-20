//1. Ariphmetic operators
let a = 15;
let b = 4;

console.log(
a + b,
a - b,
a * b,
a / b,
a % b,
a ** 2
); 

//2. Increment and decrement

let x =5;
console.log(
++x, //first add 1, then return value x (x + 1) = 6
x++, //first return value (6), then add 1 to x = we will see 6 (from the prevuous operation), but x will be 7 after this
--x, //first subtract 1, then return value x = 6 again, because it was 7 from the previous operation
);

//3. Priority of operators

let result1 = 2 + 3 * 4; // * is first, so 3*4 = 12, then +2 = 14
let result2 = (2 + 3) * 4; // () is first, so 2+3 = 5, then *4 = 20
let result3 = 10 - 5 + 2; // + and - have the same priorty, goes from left to right, so 10-5 = 5, then +2 = 7

//4. Strings and conversion

console.log(5 + "2"); // if there is a string, then + is ALWAYS concatenation, so we get "52" || successful guess
console.log("5" - 2); // - can be applied to numbers only, so JS tries to convert "5" to a number, then 5 - 2 = 3 || successful guess
console.log("10" + true); // + is concatenation, so we get "10true" || successful guess
console.log("10" - true); // - can be applied to numbers only, so JS tries to convert BOTH "10" and true to a number (true = 1), then 10 - 1 = 9 || successful guess

//5. Comparison operators

console.log(false == 0); // == is 'weak' comparison (tries to convert to the same type) so first it convert -> false = 0 in boolean -> 0 = 0 -> true || successful guess
console.log(false === 0); // === is 'strict' (only the same type can return true), -> false || successful guess
console.log("1" == 1); // first convert 1 to number; 1 =1 -> true || successful guess
console.log("1" === 1); // different types, -> false || successful guess
console.log(null == undefined); // means the same -> true || successful guess
console.log(null === undefined); // different types -> false || successful guess

//6. Logical operators

console.log(0 || "Hello" || 5); // "Hello" || successful guess
console.log(null || undefined || "JS"); // "JS" || successful guess
console.log(2 || 1 && 0); // 2 || successful guess, && can be understood as *, || as +

let numb = 101;

if (numb <= 100 && numb >= 0) {
    console.log ("The number is in range of 0-100")
} else {
    console.log ("The number is not in range of 0-100")
 }

 //7. Ternary operator

 let age = 10;

 console.log(age >= 18 ? "Adult" : "Minor"); // can be understood as a question "Is age >= 18?"" If yes - first option, if no - second

 //8. Type conversion
 let toNum = "25";
 let toNum2 = "25.5px";

console.log(Number(toNum));
console.log(+toNum); //converts to number but don't add 1 like in case of ++
console.log(parseInt(toNum2)); //tries to find Int at the beginning
console.log(parseFloat(toNum2)); //tries to find float at the beginning

console.log(
isNaN("123"), //NaN first tries to convert to number. "123" -> 123 is a number -> false
isNaN("123abc"), //"123abc" can't be converted to number -> NaN is NaN-> true
isNaN(null), //null is converted to 0 -> false
isNaN(undefined), //undefined can't be converted to number -> NaN is NaN -> true
isNaN(true), //true is converted to 1 -> false
)

//9. Arrays
const cities = ["Rome", "Lviv", "Warsaw"];
cities[0] = "New-York";
cities.push("Orlando");
cities.unshift("Terra");
cities.pop();

console.log(cities.length);

const newCities = cities.slice(2, 4);
console.log(newCities, cities);

const cityLength = cities.map((city, index) => city.length); //length is also applicable for strings

console.log(cityLength);

//10. Conditionals

let num = 10;

if (num > 0) {
    console.log("Positive");
} else if (num < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}

switch (num) {
    case num > 0:
        console.log("Positive");
        break;
    case num < 0:
        console.log("Negative");
        break;
    default: // there are no other cases for num except 0, so we can use default
        console.log("Zero");
}
//first I wrote case (num > 0) but it didn't work. reason - switch compares num value with the value of case. so I had 10 === (10 > 0), which is false

resultNum = num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero"; // can be understood as a question "Is num > 0?" If yes - "Positive", if no - we have another question "Is num < 0?", if yes - "Negative", if no again - "Zero"
console.log(resultNum);

//Additional task
//I found out that prompt works only in browser. I tested it in browser console

let enterNum = prompt("Enter a number"); 

console.log(
    isNaN(enterNum) ? "Entered value is not a number" : "Entered value is a number",
    +enterNum % 2 === 0 ? "\nEntered number is even" : "\nEntered number is odd", //we should convert string to number first
    +enterNum  > 0 && +enterNum < 100 ? "\nEntered number is in range of 0-100" : "\nEntered number is not in range of 0-100" //should convert again because +enterNum doesn't change the value of enterNum
)