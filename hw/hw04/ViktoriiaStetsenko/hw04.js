// Завдання 1: Парні числа (`for`)
for (let num = 2; num <= 20; num += 2) {
  console.log(num);
}


// Завдання 2: Зворотний відлік (`while`)
let num = 10;
while (num >= 1) {
  console.log(num);
  num--;
}
console.log("Старт");

// Завдання 3: Сума чисел (`do..while`)

const numbers = [5, 12, 8, 0, 10];
let sum = 0;
let i = 0;

do {
  sum += numbers[i];
  i++;
} while (i < numbers.length && numbers[i] !== 0);

console.log(sum);

// 4. Завдання 4: Модифікація масиву (`for`)
const users = ["ivan", "olga", "petro", "anna"];

for (let i = 0; i < users.length; i++) {
  const name = users[i];
  const firstLetter = name[0].toUpperCase();
  const rest = name.slice(1);
  users[i] = firstLetter + rest;
}

console.log(users);

// 5. Пошук у масиві (`break`)
const arr = [1, 4, 8, 7, 4, 3];

for (let num = 0; num < arr.length; num++) {
  if (arr[num] === 7) {
    console.log("Знайдено!");
    break;
  }
}

// 6. Фільтрація значень (`continue`)
for (let num = 1; num <= 15; num++) {
  if (num % 3 === 0) {
    continue;
  }
  console.log(num);
}

// Завдання 7: Робота з об'єктом (`for..in`)
const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2022,
  color: "black",
};

for (const key in car) {
  console.log(key + ":" + car[key]);
}

// Завдання 8: Сума елементів масиву (`for..of`)
const prices = [150, 200, 50, 430, 100];

let newSum = 0;

for (const price of prices) {
  newSum += price;
}

console.log(newSum);

// Завдання 9: Перетворення рядка (`for..of`)
let message = "JavaScript";

for (const symbol of message) {
  console.log(symbol + "-");
}

// Завдання 10: Пошук максимального числа
const newArr = [3, 5, 6, 8, 2, 0, 9, 25, 3, 1];

let maxNum = newArr[0];

for (let num = 0; num < newArr.length; num++) {
  if (newArr[num] > maxNum) {
    maxNum = newArr[num];
  }
}

console.log(maxNum);