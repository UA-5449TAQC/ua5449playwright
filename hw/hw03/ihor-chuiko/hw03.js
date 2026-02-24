//01

let a = 15;
let b = 4;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a % b);
console.log(a ** 2);

//02

let x = 5;
console.log(x); // 5
console.log(++x); // значення x збільшилося на 1 і було використане
console.log(x++); // спершу було використане існуюче значення x і після того воно було збільшене на 1
console.log(x); // результат попередньої операції x = 7
console.log(--x); // зменшення x на 1 


//03

let result1 = 2 + 3 * 4; // стандартний порядок дій 1. множення/ділення  2. додавання/віднімання: 3 * 4 = 12, 2 + 12 = 14
let result2 = (2 + 3) * 4; // дії в дужках виконуються в першу чергу: 2 + 3 = 5, 5 * 4 = 20
let result3 = 10 - 5 + 2; // дії виконуються по порядку: 10 - 5 = 5, 5 + 2 = 7

console.log(result1);
console.log(result2);
console.log(result3);

//04
 
console.log(5 + "2"); // додвання string "2" перетворює все в string. Отримуємо string "52"
console.log("5" - 2); // віднімання number 2 перетворює string "5" в number. 5 - 2 = 3
console.log("10" + true); // так як "10" це string, true конвертується в string і виконується конкатенація
console.log("10" - true); // оператор віднімання є числовим, тому string "10" конвертується в number і віднімається 1 (true = 1; false = 0)

//05

// == конвертує до одного типу і потім порівнює значення
// === "строге" порівняння
console.log(false == 0); // оскільки при конвертації false = 0 (і навпаки), то результат порівняння true
console.log(false === 0); // оскільки false це не 0, то результат порівняння false
console.log("1" == 1); // string і number приводяться до одного типу і порівнюються 1 = 1, результат true
console.log("1" === 1); //  "1" не дорівнює 1, результат false 
console.log(null == undefined); //true
console.log(null === undefined); //false

//06

console.log(0 || "Hello" || 5);
console.log(1 && 0 && 5);
console.log(null || undefined || "JS");
console.log(2 || 1 && 0);

let numb = 100;
console.log(numb >= 0 && numb <= 100);
console.log(numb < 0 || numb > 100);

//07

var age = 7;
x = age >= 18 ? "Adult" : "Minor";
console.log(x);

//08

var first = +"25";
var second = Number("25");
var third = parseInt("25.5px");
var fourth = parseFloat("25.5px");
console.log(first + " is " + typeof(first));
console.log(second + " is " + typeof(second));
console.log(third + " is " + typeof(third));
console.log(fourth + " is " + typeof(fourth));

console.log(isNaN("123")); //конвертує в number (123)  і перевіряє чи це не number, результат false
console.log(isNaN("123abc")); //конвертує в number  і перевіряє чи це не number, результат true
console.log(isNaN(true)); //конвертує в number (1) і перевіряє чи це не number, результат false
console.log(isNaN(undefined)); //конвертує в number  і перевіряє чи це не number, результат true

//09

const cities = ["Rome", "Lviv", "Warsaw"];

cities[0] = "Kyiv";
cities.push("London");
cities.unshift("IF");
cities.pop();
console.log(cities);
console.log(cities.length);
var new_cities = cities.slice(0, 2);
console.log(new_cities);

var ciites_length = cities.map(city => city.length);
console.log(ciites_length);

//10

var number_if = -122;

if (number_if > 0) {
    console.log(number_if + " is Positive")
} else if (number_if < 0) {
    console.log(number_if + " is Negative")
} else console.log(number_if + " is Zero")


var number_switch = 0;

switch (true) {
    case number_switch > 0:
        console.log(number_switch + " is Positive");
        break;
    case number_switch < 0:
        console.log(number_switch + " is Negative");
        break;
    default:
        console.log(number_switch + " is Zero")
}

// Bonus
//works in browser console

var input = prompt("Enter value:");
var entered_number = Number(input);

if (Number.isFinite(entered_number)) {
    is_even = entered_number % 2 == 0? "Number is even": "Number is odd";
    console.log(is_even);
    is_in_range = entered_number >=1 && entered_number <=100? "The number is in range": "The number is out of range";
    console.log(is_in_range);
} else  console.log("Not a number");
