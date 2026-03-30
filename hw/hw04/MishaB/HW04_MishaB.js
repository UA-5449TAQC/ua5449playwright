// 🔁 Завдання 1: Парні числа (for)
for (let i = 2; i <= 20; i++) {
    if (i % 2 === - 0) {
        console.log(i);
    }
}


for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}


// ⏳ Завдання 2: Зворотний відлік (while)
let i = 10;
while (i >= 1) {
    console.log(i);
    i--;
}
console.log("Старт!"); // після циклу


// ➕ Завдання 3: Сума чисел (do..while)


const numbers = [5, 12, 8, 0, 10];
let i = 0;
let sum = 0;

do {
    if (numbers[i] === 0) break; // якщо 0 → зупинка

    sum += numbers[i];           // додаємо до суми
    i++;                         // наступний елемент

} while (i < numbers.length);

console.log(sum);



//🔠 Завдання 4: Модифікація масиву (for)

const users = ["ivan", "olga", "petro", "anna"];

for (let i = 0; i < users.length; i++) {
    users[i] = users[i][0].toUpperCase() + users[i].slice(1);
}

console.log(users);



//🔎 Завдання 5: Пошук у масиві (break)
const values = [2, 4, 6, 7, 9, 11];

for (const value of values) {
    if (value === 7) {
        console.log("Знайдено!");
        break;
    }
}


//⏭ Завдання 6: Фільтрація значень (continue)
for (let i = 1; i <= 15; i++) {
    if (i % 3 === 0) {
        continue;
    }
    console.log(i);
}



// 🚗 Завдання 7: Перебір об'єкта (for..in)
const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2022,
    color: "black"
};

for (const key in car) {
    console.log(`${key}: ${car[key]}`);
}



// 💰 Завдання 8: Сума елементів масиву
const prices = [150, 200, 50, 430, 100];
let total = 0;

for (const price of prices) {
    total += price;
}

console.log(`Загальна сума: ${total}`);





// 🔤 Завдання 9: Перебір рядка
let message = "JavaScript";

for (const char of message) {
    console.log(`${char}-`);
}



// 🔝 Завдання 10: Пошук максимального числа
const randomNumbers = [];

for (let i = 0; i < 10; i++) {
    randomNumbers.push(Math.floor(Math.random() * 100)); // числа від 0 до 99
}

let maxNumber = randomNumbers[0];

for (const num of randomNumbers) {
    if (num > maxNumber) {
        maxNumber = num;
    }
}

console.log("Масив:", randomNumbers);
console.log("Найбільше число:", maxNumber);