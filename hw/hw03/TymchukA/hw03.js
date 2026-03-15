"use strict";

// ======================================================
// 1) Арифметичні оператори
// ======================================================

console.log("1) Арифметичні оператори\n");

let a = 15;
let b = 4;

console.log("a:", a);
console.log("b:", b);
console.log("Сума:", a + b);
console.log("Різниця:", a - b);
console.log("Добуток:", a * b);
console.log("Частка:", a / b);
console.log("Остача:", a % b);
console.log("a^2:", a ** 2);

// ======================================================
// 2) Інкремент та декремент
// ======================================================

console.log("\n2) Інкремент та декремент");

let x = 5;

console.log("Початкове x:", x);
console.log("Префіксний ++x:", ++x); // збільшує x, потім повертає
console.log("Постфіксний x++:", x++); // повертає x, потім збільшує
console.log("Після x++:", x);
console.log("Префіксний --x:", --x);


// ======================================================
// 3) Пріоритет операторів
// ======================================================

console.log("\n3) Пріоритет операторів");

let result1 = 2 + 3 * 4; //* має вищий пріоритет, тому виконується першою, потім додається 2
let result2 = (2 + 3) * 4; // дужки змінюють порядок виконання, тому спочатку виконується додавання, потім множення
let result3 = 10 - 5 + 2; // - та + мають однаковий пріоритет, тому виконуються зліва направо: спочатку 10 - 5, потім + 2

console.log("2 + 3 * 4 = " + result1); // 14
console.log("(2 + 3) * 4 = " + result2); // 20
console.log("10 - 5 + 2 = " + result3); // 7

// ======================================================
// 4) Робота зі строками та приведення типів
// ======================================================

console.log("\n4) Робота зі строками та приведення типів");

console.log(5 + "2");        // "52"
console.log("5" - 2);        // 3
console.log("10" + true);    // "10true"
console.log("10" - true);    // 9

/*
+ з рядком → конкатенація.
- завжди приводить до числа.
*/

// ======================================================
// 5) Порівняння та строга рівність
// ======================================================

console.log("\n5) Порівняння та строга рівність");

console.log(false == 0);        // true
console.log(false === 0);       // false
console.log("1" == 1);          // true
console.log("1" === 1);         // false
console.log(null == undefined); // true
console.log(null === undefined);// false

/*
== порівнює значення з приведенням типів, тому false і 0 вважаються рівними, так само як "1" і 1, null і undefined.
=== порівнює без приведення типів, тому false і 0 не рівні, "1" і 1 не рівні, null і undefined не рівні.
*/

// ======================================================
// 6) Логічні оператори
// ======================================================

console.log("\n6) Логічні оператори");

console.log(0 || "Hello" || 5);        // повертає "Hello" бо це перше "істинне" значення
console.log(1 && 0 && 5);              // повертає 0, бо це перше "хибне" значення
console.log(null || undefined || "JS");// повертає "JS" бо це перше "істинне" значення
console.log(2 || 1 && 0);              // повертає 2 бо це перше "істинне" значення

// Перевірка діапазону
function inRange(n) {
    
  if(n >= 0 && n <= 100)  
    return "Число " + n + " входить у діапазон 0–100";
    else 
        return "Число " + n + " не входить у діапазон 0–100";
}

console.log(inRange(34));
console.log(inRange(-7));
console.log(inRange(101));
console.log(inRange(0));


// ======================================================
// 7) Тернарний оператор
// ======================================================

console.log("\n7) Тернарний оператор");

let age = 20;
console.log("Age: " + age + " => " + (age >= 18 ? "Adult" : "Minor"));
age = 16;
console.log("Age: " + age + " => " + (age >= 18 ? "Adult" : "Minor"));

// ======================================================
// 8) Конвертація типів
// ======================================================

console.log("\n8) Конвертація типів");

console.log(Number("25"));//конвертує рядок "25" у число 25
console.log(+"25");//унарний плюс також конвертує рядок у число

console.log(parseInt("25.5px"));//конвертує рядок у ціле число
console.log(parseFloat("25.5px"));//конвертує рядок у число з плаваючою крапкою

console.log(isNaN("123"));//перевіряє, чи не є значення числом
console.log(isNaN("123abc"));//перевіряє, чи не є значення числом
console.log(isNaN(true));//перевіряє, чи не є значення числом
console.log(isNaN(undefined));//перевіряє, чи не є значення числом

// ======================================================
// 9) Масиви
// ======================================================

console.log("\n9) Масиви");

const cities = ["Rome", "Lviv", "Warsaw"];

cities[0] = "Chernivtsi";
cities.push("Berlin");
cities.unshift("Prague");
cities.pop();

console.log("Довжина:", cities.length);

const newCities = cities.slice(0, 2);
console.log(newCities);

const nameLengths = cities.map(city => city.length);
console.log(nameLengths);

// ======================================================
// 10) Умовні конструкції
// ======================================================

console.log("\n10) Умовні конструкції");

let number = -5;

// if...else
if (number > 0) {
  console.log("Positive "+number);
} else if (number < 0) {
  console.log("Negative "+number);
} else {
  console.log("Zero");
}

number = 0;
// switch
switch (true) {
  case number > 0:
    console.log("Positive "+number);
    break;
  case number < 0:
    console.log("Negative "+number);
    break;
  default:
    console.log("Zero");
}

number = 10;
// тернарний
console.log(number > 0 ? "Positive "+number : number < 0 ? "Negative "+number : "Zero");

// ======================================================
// Додаткове завдання
// ======================================================

console.log("\nДодаткове завдання");
function analyzeInputNumber(value) {
  const num = Number(value);

  if (Number.isNaN(num)) {
    console.log("Це не число: " + value);
    return;
  }

  console.log("Число:", num);

  console.log(num % 2 === 0 ? "Парне" : "Непарне");

  if (num >= 1 && num <= 100) {
    console.log("Входить у діапазон 1–100");
  } else {
    console.log("Не входить у діапазон 1–100");
  }
}
analyzeInputNumber("42");
analyzeInputNumber("-7");
analyzeInputNumber("abc"); 