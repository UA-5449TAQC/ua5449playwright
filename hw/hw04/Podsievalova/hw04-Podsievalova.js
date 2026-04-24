//1: Парні числа (for)
for (let i = 2; i <= 20; i += 2) {
console.log(i);
}

//2: Зворотний відлік (while) 
let count = 10;
while (count >= 1) {
  console.log(count);
  count--;
}

console.log("Старт!");

//3: Сума чисел (do..while) Дано масив:

let i = 0;
let sum = 0;

do {
  sum += numbers[i];
  i++;
} while (i < numbers.length && numbers[i - 1] !== 0);

console.log(sum);

//4.4: Модифікація масиву (for)

const users = ["ivan", "olga", "petro", "anna"];
for (let i = 0; i < users.length; i++) {
  users[i] = users[i].charAt(0).toUpperCase() + users[i].slice(1);
}
console.log(users);

//5: Пошук у масиві (break)

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === 7) {
    console.log("знайдено!");
    break;
  }
}

//6: Фільтрація значень (continue)

for (let i = 1; i <= 15; i++) {
  if (i % 3 === 0) {
    continue;
  }
  console.log(i);
}

//7: Робота з об'єктом (for..in)

const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2022,
  color: "black"
};

for (let key in car) {
  console.log(`${key}: ${car[key]}`);
}       

//8: Сума елементів масиву (for..of)

const prices = [150, 200, 50, 430, 100];

let total = 0;
for (let price of prices) {
  total += price;
}
console.log(total);


//9: Перетворення рядка (for..of)

let message = "JavaScript";

for (let char of message) {
  console.log(char + "-");
}   

//10: Пошук максимального числа

const random = [3, 54, 87, 12, 3, 15];

let maxNumber = random[0];   
for (let number of random) {
  if (number > maxNumber) {
    maxNumber = number;
  }
}
console.log(maxNumber);