//1. Arithmetic operators
let a=15
let b=4
console.log(a+b); // addition
console.log(a-b) //substraction
console.log(a*b) //multiplication
console.log(a/b) //division
console.log(a%b) //reminder of the division
console.log (a**2) //exponentiation operator

//2. Incremenet & Decrement
let x=5
let y=++x//prefix increment
console.log(y)
let y1=x++ //postfix increment
console.log(y1)
let y2=--x //prefix decrement
console.log(y2)
//prefix form firstly increases a variable by 1, then retuns its value
//postfix from firstly returns the variable value, then increases it by 1

//3. Operator priority
let result1 = 2+3*4 // result=14; order: multiplication 3*4 ->addition 12+2
let result2 = (2+3)*4 // resut=20; order: bracket addition 2+3 -->multiplication 5*4
let result3 = 10-5+2 // results=7; order: substraction 10-5 --> addition 5+2
console.log(result1, result2, result3)

//4. Work with strings
console.log(5 + "2") // result=52 (string); binary addition converted 5 into a string since 2 is a string.
console.log("5" - 2) // result=3 (number); substraction converted 5 into a number since all other operators work only with numbers except addition
console.log("10" + true) // result=10true (string); binary addition converted true into a string since 10 is a string
console.log("10" - true) // result=9; substraction converted 10 into a number since all other operators work only with numbers except addition   

// 5. Comparison and strict equiality
console.log(false == 0); //result=true
console.log(false === 0); //result=false
console.log("1" == 1); // result=true
console.log("1" === 1); // result=false
console.log(null == undefined); //result=true
console.log(null === undefined) // result=false

//== compare values despite their type since operands of different types are converted to numbers
// === compare values only in the same type

// 6. Logical operators
//6.1
console.log(0 || "Hello" || 5); // result=Hello(since Hello -1st true argument); OR(logical addition)
console.log(1 && 0 && 5); // result=0 (since 0 - 1st false argument) ; AND (logical multiplication)
console.log(null || undefined || "JS"); // result=JS
console.log(2 || 1 && 0); // result=2 (AND(1&&0) - calcalated 1st, OR(2||0) - 2nd)

//6.2
// value in a range 0-100
const x1 = 101 
const res1 = x1 >=0 && x1 <= 100
console.log (res1)

// value outside of a range 0-100
const x2 = 101
const res2 = x2 < 0 || x2 > 100
console.log (res2)

//7. Conditional(ternary) operator
let age = 17
let age18 = 18
result_age = age >= age18  ? "Adult" : "Minor";
console.log(result_age)

// 8. Type Conversion

//8.1
//Convert string "25" to a number by Function Number()
let a1 = "25"
let num1 = Number(a1)
console.log(num1, typeof num1)

//Convert string "25" to a number by Unary operation +
let a2 = "25"
let num2 = +a2
console.log(num2, typeof num2)

//Convert string "25.5px" to an integer
console.log(parseInt("25.5px"))

//Convert string "25.5px" to a fractional number
console.log(parseFloat("25.5px"))

//8.2 Check via function isNan() - first converts the value to a number and then checks whether the result is NaN.
console.log(isNaN("123")); // result = false, because "123" converted to 123 that is a valid number
console.log(isNaN("123abc")); // result = true,  because "123abc" can't be converted to a valid number
console.log(isNaN(true)); // result = false, because 'true' is converted to 1 that is a valid number
console.log(isNaN(undefined)); // result = false, because 'undefined' is converted to NaN, isNan(Nan)=True

//9. Arrays
const cities = ["Rome", "Lviv", "Warsaw"] // Rome=0, Lviv=1, Warsaw=2

//9.1 Change 1st array element
cities[0] = "Ivano-Frankivsk"
console.log(cities[0])

//9.2 Add new element to the end
cities.push("Lviv")
console.log(cities)

//9.3 Add new element in the beginning
cities.unshift("Kharkiv")
console.log(cities)

//9.4 Delete the last element
cities.pop()
console.log(cities)

//9.5 Show the array length
console.log(cities.length)

//9.6 Create a new array via "slice"
let cities2 = cities.slice (1, 4)
console.log(cities2)

//9.7 Create a new array via "map" with lenght of city names from the previous array(cities2)
let cities3 = cities2.map(city => city.length)
console.log(cities3)

//10 Conditional statements
// if a number > 0 --> Positive
// if a number < 0 --> Negative
// if a number 0 --> Zero

//10.1 if...else if...else
let number10 = -5
if (number10 > 0) 
    {console.log("Positive")}
else if (number10 < 0)
     {console.log("Negative")}
else{console.log("Zero")}

//10.2 switch
let number102 = 0
switch(true) {
    case number102 > 0:
    console.log("Positive")
    break
        case number102 < 0:
    console.log("Negative")
    break
        case number102 == 0:
    console.log("Zero")
    break
    default:
        console.log ("No value")

}

//10.3 Ternary operator
let number103 = ""
resultn103=number103 > 0 ? "Positive" : number103 < 0 ? "Negative"
: number103 ===0 ? "Zero" : "No value"
console.log(resultn103)