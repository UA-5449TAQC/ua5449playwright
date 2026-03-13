//1. Data types

//1.1 String
console.log("1. Data types");
let a1 = "Jonson"
console.log(typeof a1, a1)

//1.2 Number
let a2 = 42
console.log(typeof a2, a2)

//1.3 BigInt
let a3 = 1234567890123456789012345678901234567890n
console.log(typeof a3, a3)

//1.4 Boolean
let a4 = false
console.log(typeof a4, a4)

//1.5 Undefined
let a5
console.log(typeof a5, a5)

//1.6 Null
let a6 = null
console.log(typeof a6, a6)

//1.7 Object
let a7 = { name: "Jakson", age: 30 }
console.log(typeof a7, a7)

//1.8 Symbol
let a8 = Symbol("unique")
console.log(typeof a8, a8)

//2. Dynamic typing - is means that variables type can be changed dynamically trough the proceess 
console.log("2. Dynamic typing");

let x
console.log(x)
x= 45
console.log(x)
x= "45string"
console.log(x)

//3. Convert into String
console.log("3. Convert into String");

//3.1 Function String()
let x1 = 100
let y1 = String(x1)
console.log(typeof y1, y1)

//3.2 Operation+ and empty string
let x2 = 100
let y2 = x2 + ""
console.log(typeof y2, y2)

//4. Convert into Number
console.log("4. Convert into Number");

//4.1 Function Number()
let x3 = "250"
let y3 = Number(x3)
console.log(typeof y3, y3)

//4.2 Unary operation +
let x4 = "250"
let y4 = + x4
console.log(typeof y4, y4)

//4.3 Explain pasrseInt and parseFloat results
console.log(parseInt("12.75px")) // "12.75px" string is converted to Integer 12
console.log(parseFloat("12.75px")) // "12.75px" string is converted to Fractional number 12.75
console.log(parseInt("text")) // "text" string is Nan because can't be converted to a number

//5. Check values by isNan()// to undestand if a value represents a number
console.log("5. Check values by isNan()");
// False if can be converted to a number
// True if it can't be converted to a number

console.log(isNaN("123")) // False - "123" is converted to a number 123
console.log(isNaN("123abc")) // True - "123abc" isn't fully converted to a number
console.log(isNaN(null)) // False - null is converted to a number 0
console.log(isNaN(undefined)) // True - undefined is converted to NaN
console.log(isNaN(true)) // False - true is converted to a number 1

//6. Convert to Boolean
console.log("6. Convert to Boolean");

//6.1 Convert to Boolean by function Boolean()

console.log(Boolean("Hello")); // true
console.log(Boolean("")); // false
console.log(Boolean(0)); // false
console.log(Boolean(1)); // true
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false

// Convert by using Double Boolean NOT !!

console.log(!!"Hello"); //true
console.log(!!""); // false
console.log(!!0); // false
console.log(!!1); //true
console.log(!!null); // false
console.log(!!undefined); // false

// falsy 
// "" - because no text in string
//  0 - because 0 is considered as nothing
// null - because null doesn't have a value
// undefined - because value isn't defined 

//7. Operator prioroty
console.log("7. Operator priority");

console.log(10 - 20 / 5); // 1st action=20/5 --> 2nd action 10-4--> result = 6
console.log(2 ** 4 * 2); // 1st action 2**4 --> 2nd action 16*2 --> result = 32

//change brackets
console.log((10 - 20) / 5); // 1st action=10-20 --> 2nd action -10/5--> result = -2
console.log(2 ** (4 * 2)); // 1st action 4*2 --> 2nd action 2*8 --> result = 256

// 8. Arrays
console.log("8. Arrays");

let countries = ["Spain", "Portugal", "France","Scotland"];
console.log(countries)

//8.1 First and last element
console.log(countries[0]);
console.log(countries[3]);

//8.2 Change 2nd element
countries[1]="Wales";
console.log(countries);

//8.3 Add new element with index 6
countries[6]="Ireland";
console.log(countries);

//8.4 Array lenght
console.log(countries.length);

//8.5 Iterate Array
// for of loop
for (let i of countries){
    console.log(i);
}

// for loop
for (let i1 = 0; i1 < countries.length; i1++) {
    console.log(countries[i1]);
}

// 9. Arrays methods
console.log("9. Arrays methods");

const numbers = [2, 4, 6, 8, 10];

//9.1 Add the number to the end
numbers.push(13);
console.log(numbers);
//9.2 Delete the last element
numbers.pop();
console.log(numbers);
//9.3 Delete the 1st element
numbers.shift();
console.log(numbers);
//9.4 Add the element in the begining
numbers.unshift(0);
console.log(numbers);
//9.5 Slice for creating new array
let numbers2 = numbers.slice (0, 4);
console.log(numbers);
//9.6 Splice for delete element with index 
numbers2.splice(0, 1);
console.log(numbers2);

//10. Methods map. filter, reduce
console.log("10. Methods map, filter, reduce");

const numbers3= [5, 10, 15, 20, 25];

//10.1 map (), every element x2
const numbers4 = numbers3.map( function(number){return number*2});
console.log(numbers4);

//10.2 filter(), get numbers >12 
const numbers5 = numbers4.filter(function(number){return number > 12 })
console.log(numbers5);

//10.3 reduce(), get sum of all elements
function reducer(total, value) { return total + value;}
const sum = numbers5.reduce(reducer);
console.log(sum);