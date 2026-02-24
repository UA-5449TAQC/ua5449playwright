"use strict";

// =====================================================
// 1) Типи даних
// =====================================================
console.log("===== 1) Data types + typeof =====");

const str = "Homework 02"; // String
const num = 111; // Number
const big = 123456789012345678901234567890n; // BigInt (суфікс n)
const bool = true; // Boolean
let undef; // Undefined (змінна оголошена, але не ініціалізована)
const nul = null; // Null (особливий тип значення)
const obj = { name: "Alina", role: "student" }; // Object
const sym = Symbol("id"); // Symbol (унікальний ідентифікатор)

console.log("str:", str, "| typeof:", typeof str);
console.log("num:", num, "| typeof:", typeof num);
console.log("big:", big, "| typeof:", typeof big);
console.log("bool:", bool, "| typeof:", typeof bool);
console.log("undef:", undef, "| typeof:", typeof undef);
console.log("nul:", nul, "| typeof:", typeof nul); // історична особливість: typeof null === "object"
console.log("obj:", obj, "| typeof:", typeof obj);
console.log("sym:", sym, "| typeof:", typeof sym);

// =====================================================
// 2) Динамічна типізація
// =====================================================
console.log("\n===== 2) Dynamic typing =====");

let x;

x = undefined;
console.log("x =", x, "| typeof:", typeof x);

x = 45;
console.log("x =", x, "| typeof:", typeof x);

x = "45";
console.log('x = "45"', x, "| typeof:", typeof x);

/*
Динамічна типізація означає:
- тип належить НЕ змінній, а значенню всередині змінної;
- одна і та сама змінна може в різний момент містити значення різних типів.
*/

// =====================================================
// 3) Перетворення у String
// =====================================================
console.log("\n===== 3) To String =====");

const n1 = 100;

const s1 = String(n1); // спосіб 1
const s2 = n1 + " "; // спосіб 2 (конкатенація з рядком)

console.log("String(100):", s1, "| typeof:", typeof s1);
console.log('100 + "":', s2, "| typeof:", typeof s2);

// =====================================================
// 4) Перетворення у Number
// =====================================================
console.log("\n===== 4) To Number =====");

const strNum = "250";

const num1 = Number(strNum); // спосіб 1
const num2 = +strNum; // спосіб 2 (унарний плюс)

console.log('Number("250"):', num1, "| typeof:", typeof num1);
console.log('+"250":', num2, "| typeof:", typeof num2); //Number("250") і +"250" дають 250 (число), бо рядок повністю числовий.

console.log('parseInt("12.75px"):', parseInt("12.75px")); // 12 (зчитує цілу частину числа до нечислового символу)
console.log('parseFloat("12.75px"):', parseFloat("12.75px")); // 12.75 (зчитує дробове число до нечислового символу)
console.log('parseInt("text"):', parseInt("text")); // NaN (немає числа на початку рядка)


// =====================================================
// 5) Перевірка на число (isNaN)
// =====================================================
console.log("\n===== 5) isNaN checks =====");

console.log('isNaN("123"):', isNaN("123")); // false, бо "123" можна перетворити в число 123
console.log('isNaN("123abc"):', isNaN("123abc")); // true, бо Number("123abc") -> NaN
console.log("isNaN(null):", isNaN(null)); // false, бо Number(null) -> 0
console.log("isNaN(undefined):", isNaN(undefined)); // true, бо Number(undefined) -> NaN
console.log("isNaN(true):", isNaN(true)); // false, бо Number(true) -> 1


// =====================================================
// 6) Перетворення у Boolean
// =====================================================
console.log("\n===== 6) To Boolean =====");

const values = ["Hello", "", 0, 1, null, undefined];

for (const v of values) {
  console.log("Value:", v, "| Boolean():", Boolean(v), "| !!:", !!v);
}

/*
Falsy значення в JS (перетворюються на false):
- false
- 0, -0, 0n (BigInt нуль)
- "" (порожній рядок)
- null
- undefined
- NaN
Усе інше — truthy.
*/

// =====================================================
// 7) Пріоритет операторів
// =====================================================
console.log("\n===== 7) Operator precedence =====");

// 10 - 20 / 5
// Спочатку /, потім -
console.log("10 - 20 / 5 =", 10 - 20 / 5); // 10 - 4 = 6

// 2 ** 4 * 2
// ** має вищий пріоритет, ніж * 
console.log("2 ** 4 * 2 =", 2 ** 4 * 2); // 16 * 2 = 32

// Змінимо порядок дужками:
console.log("(10 - 20) / 5 =", (10 - 20) / 5); // -10/5 = -2
console.log("2 ** (4 * 2) =", 2 ** (4 * 2)); // 2^8 = 256

// =====================================================
// 8) Робота з масивами (базові операції)
// =====================================================
console.log("\n===== 8) Arrays basics =====");

const arr = ["a", "b", "c", "d"]; // 4 елементи
console.log("Array:", arr);

// перший та останній
console.log("First:", arr[0]);
console.log("Last:", arr[arr.length - 1]);

// замінимо другий елемент (індекс 1)
arr[1] = "B";
console.log("After replacing 2nd:", arr);

// додамо елемент з індексом 6 (індекси 4 і 5 стануть пустими слотами)
arr[6] = "Z";
console.log("After adding index 6:", arr);

// довжина масиву
console.log("Length:", arr.length); // 7

// перебір через for
console.log("Loop: for");
for (let i = 0; i < arr.length; i++) {
  console.log(i, "=>", arr[i]);
}

// перебір через for...of (значення)
console.log("Loop: for...of");
for (const item of arr) {
  console.log(item);
}

// =====================================================
// 9) Методи масивів
// =====================================================
console.log("\n===== 9) Array methods =====");

const numbers9 = [2, 4, 6, 8, 10];
console.log("Start:", numbers9);

// push
numbers9.push(12);
console.log("After push(12):", numbers9);

// pop
const popped = numbers9.pop();
console.log("After pop():", numbers9, "| popped:", popped);

// shift
const shifted = numbers9.shift();
console.log("After shift():", numbers9, "| shifted:", shifted);

// unshift
numbers9.unshift(1);
console.log("After unshift(1):", numbers9);

// slice (не змінює оригінал)
const sliced = numbers9.slice(1, 3); // елементи з індексу 1 до 2 включно
console.log("slice(1,3):", sliced, "| original:", numbers9);

// splice (змінює оригінал)
const removed = numbers9.splice(2, 1); // видалити 1 елемент з індексу 2
console.log("splice(2,1) removed:", removed, "| now:", numbers9);

// =====================================================
// 10) map, filter, reduce
// =====================================================
console.log("\n===== 10) map / filter / reduce =====");

const numbers10 = [5, 10, 15, 20, 25];
console.log("Original:", numbers10);

// map: *2
const doubled = numbers10.map((n) => n * 2);
console.log("Doubled (map):", doubled);

// filter: > 12
const greaterThan12 = numbers10.filter((n) => n > 12);
console.log("Greater than 12 (filter):", greaterThan12);

// reduce: sum
const sum = numbers10.reduce((acc, n) => acc + n, 0);
console.log("Sum (reduce):", sum);


// =====================================================
// 11) Додаткове завдання
// =====================================================
console.log("\n===== 11) Array statistics program =====");

/*
Програма:
1. Приймає масив чисел
2. Перевіряє, чи всі елементи є числами
3. Обчислює:
   - суму
   - середнє
   - мінімум
   - максимум
 */

function analyzeNumbers(arr) {
  console.log("Input array:", arr);

  // Перевірка: чи масив
  if (!Array.isArray(arr)) {
    console.log("Помилка: передане значення не є масивом.");
    return;
  }

  // Перевірка: чи всі елементи є числами
  const allNumbers = arr.every(
    (item) => typeof item === "number" && !Number.isNaN(item)
  );

  if (!allNumbers) {
    console.log("Помилка: не всі елементи масиву є числами.");
    return;
  }

  // Обчислення суми
  const sum = arr.reduce((acc, num) => acc + num, 0);

  // Середнє значення
  const average = sum / arr.length;

  // Мінімум і максимум
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  console.log("Sum:", sum);
  console.log("Average:", average);
  console.log("Min:", min);
  console.log("Max:", max);
}

// Виклик функції з тестовими даними
analyzeNumbers([6, 7, 11, 45, 1222]);
analyzeNumbers(366); // тест з помилкою
analyzeNumbers(["not", "numbers", 12]); // тест з помилкою
analyzeNumbers("not an array"); // тест з помилкою

