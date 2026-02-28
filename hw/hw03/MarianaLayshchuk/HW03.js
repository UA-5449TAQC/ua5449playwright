// 1

let a = 15;
let b = 4;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a % b);
console.log(a ** 2);

// 2

let x = 5;
console.log(++x); // x збільшилося на 1, тоді його було використано
console.log(x++); // було використано існуюче x, а тоді х було збільшене на 1
console.log(--x); // зменшення x на 1 

// 3

let res_1 = 2 + 3 * 4; // результат 14
let res_2 = (2 + 3) * 4; // результат 20
let res_3 = 10 - 5 + 2; // результат 7

console.log(res_1);
console.log(res_2);
console.log(res_3);

// 4
 
console.log(5 + "2"); // додвання string до number. Результат string "52"
console.log("5" - 2); // віднімання number перетворює string в number. Результат - 3
console.log("10" + true); // true конвертується в string і виконується конкатенація
console.log("10" - true); // оператор віднімання є числовим, тому string "10" конвертується в number і віднімається 1 (true = 1; false = 0)

// 5

// == конвертує до одного типу і порівнює значення
// === це строге порівняння, яке перевіряє: Значення і Тип. Якщо типи різні → одразу false
console.log(false == 0); // оскільки false = 0, то результат true
console.log(false === 0); // оскільки false bollean, a 0 number, то результат порівняння false
console.log("1" == 1); // string і number приводяться до одного типу, результат true
console.log("1" === 1); // string "1" не дорівнює 1, результат false 
console.log(null == undefined); // результат true
console.log(null === undefined); // false

// 6

console.log(0 || "Hello" || 5);
console.log(1 && 0 && 5);
console.log(null || undefined || "JS");
console.log(2 || 1 && 0);

let number = 100;
console.log(number >= 0 && number <= 100);
console.log(number < 0 || number > 100);

// 7

var age = 7;
x = age >= 18 ? "Adult" : "Minor";
console.log(x);

// 8

var one = +"25";
var two = Number("25");
var three = parseInt("25.5px");
var four = parseFloat("25.5px");
console.log(one + " is " + typeof(one));
console.log(two + " is " + typeof(two));
console.log(three + " is " + typeof(three));
console.log(four + " is " + typeof(four));

console.log(isNaN("123")); // конвертує в number (123) і перевіряє чи це не number, результат false
console.log(isNaN("123abc")); // результат true, адже 123abc конвертоване в number, не є number
console.log(isNaN(true)); // результат false, тому що true конвертоване в number дає 1, що є number
console.log(isNaN(undefined)); //конвертує в number  і перевіряє чи це не number, результат true

// 9

const cities = ["Rome", "Lviv", "Warsaw"];

//Замініть перший елемент
cities[0] = "IF";
console.log(cities)
//Додайте елемент у кінець масиву
cities.push("Prague");
console.log(cities)
//Додайте елемент на початок
cities.unshift("Boryslav");
console.log(cities)
//Видаліть останній елемент
cities.pop();
console.log(cities)
//Виведіть довжину масиву
console.log(cities.length);
//Створіть новий масив, використовуючи `slice()`
var cities_2 = cities.slice(0, 3);
console.log(cities_2);
//Використайте `map()` для створення нового масиву з довжиною назв міст.
var cities_length = cities.map(city => city.length);
console.log(cities_length);

//10

var number_1 = 0;

if (number_1 > 0) {
    console.log("Positive")
}
else if (number_1 < 0) {
    console.log("Negative")
}
else console.log("is Zero")