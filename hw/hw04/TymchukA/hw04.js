"use strict";

//  Завдання 1: Парні числа (for)
// Вивести всі парні числа від 2 до 20
for (let i = 2; i <= 20; i ++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

//  Завдання 2: Зворотний відлік (while)
// Від 10 до 1, потім "Старт!"
let countdown = 10;
while (countdown >= 1) {
  console.log(countdown);
  countdown--;
}
console.log("Старт!");

// Завдання 3: Сума чисел (do..while)
// Зупинитися, якщо зустрінеться 0 або масив закінчиться
const numbers = [5, 12, 8, 0, 10];

let sum = 0;
let idx = 0;

if (numbers.length > 0) {
  do {
    const value = numbers[idx];
    if (value === 0) break;
    sum += value;
    idx++;
  } while (idx < numbers.length);
}

console.log("Сума до 0 (або кінця масиву):", sum);

// Завдання 4: Модифікація масиву (for)
const users = ["ivan", "olga", "petro", "anna"];

for (let i = 0; i < users.length; i++) {
  const name = users[i];
  users[i] = name[0].toUpperCase() + name.slice(1); 
}

console.log(users); // ["Ivan", "Olga", "Petro", "Anna"]

// Завдання 5: Пошук у масиві (break)
const arr = [3, 11, 6, 9, 7, 2, 15];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 7) {
    console.log("Знайдено!");
    break;
  }
}

//  Завдання 6: Фільтрація значень (continue)
for (let i = 1; i <= 15; i++) {
  if (i % 3 === 0) continue;
  console.log(i);
}

//  Завдання 7: Робота з об'єктом (for..in)
const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2022,
  color: "black"
};

for (const key in car) {
  console.log(`${key}: ${car[key]}`);
}

//  Завдання 8: Сума елементів масиву (for..of)
const prices = [150, 200, 50, 430, 100];

let total = 0;
for (const price of prices) {
  total += price;
}
console.log("Загальна сума:", total);

//  Завдання 9: Перетворення рядка (for..of)
let message = "JavaScript";

for (const ch of message) {
  console.log(ch + "-");
}

//  Завдання 10: Пошук максимального числа
const randomNumbers = [];

for (let i = 0; i < 10; i++) {
  randomNumbers.push(Math.floor(Math.random() * 100)); // 0..99
}

let max = randomNumbers[0];

for (let i = 1; i < randomNumbers.length; i++) {
  if (randomNumbers[i] > max) {
    max = randomNumbers[i];
  }
}

console.log("Масив:", randomNumbers);
console.log("Максимальне число:", max);