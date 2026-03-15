// Завдання 1: Парні числа (for)
// Спосіб 1: Використання оператора % для перевірки на парність
console.log("Парні числа від 2 до 20 :");
for (let i = 2; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// Спосіб 2: Зміна кроку ітерації (i += 2)
console.log("Парні числа від 2 до 20 :");
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

//Завдання 2: Зворотний відлік (while)

console.log("Зворотний відлік:");
let countdown = 10;
while (countdown >= 1) {
    console.log(countdown);
    countdown--;
}
console.log("Старт!");

//Завдання 3: Сума чисел (do...while)
const numbers = [5, 12, 8, 0, 10];
let sum = 0;
let i = 0;

do {
    if (numbers[i] === 0) {
        break; // Зупиняємось, якщо зустрінеться число 0
    }
    sum += numbers[i];
    i++;
} while (i < numbers.length);

console.log("Підсумкова сума:", sum);

//Завдання 4: Модифікація масиву (for)

const users = ["ivan", "olga", "petro", "anna"];

for (let i = 0; i < users.length; i++) {
    // Перетворюємо першу літеру в велику, решту залишаємо малими
    users[i] = users[i][0].toUpperCase() + users[i].slice(1);
}

console.log("Змінений масив:", users);

//Завдання 5: Пошук у масиві (break)

const numbersArray = [3, 8, 15, 7, 22, 9, 7, 12];

for (let i = 0; i < numbersArray.length; i++) {
    if (numbersArray[i] === 7) {
        console.log("Знайдено!");
        break; 
    }
}

//Завдання 6: Фільтрація значень (continue)

console.log("Числа:");
for (let i = 1; i <= 15; i++) {
    if (i % 3 === 0) {
        continue; 
    }
    console.log(i);
}
//Завдання 7: Робота з об'єктом (for..in)

const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2022,
    color: "black"
};

console.log("Властивості об'єкта car:");
for (let key in car) {
    console.log(`${key}: ${car[key]}`);
}

//Завдання 8: Сума елементів масиву (for..of)

const prices = [150, 200, 50, 430, 100];
let totalSum = 0;

for (let price of prices) {
    totalSum += price;
}

console.log("Загальна сума цін:", totalSum);

//Завдання 9: Перетворення рядка (for..of)

let message = "JavaScript";

console.log("Символи рядка з дефісом:");
for (let char of message) {
    console.log(char + "-");
}

//Завдання 10: Пошук максимального числа

const randomNumbers = [45, 78, 12, 500, 34, 67, 23, 91, 501];
let maxNumber = randomNumbers[0]; 

for (let i = 1; i < randomNumbers.length; i++) {
    if (randomNumbers[i] > maxNumber) {
        maxNumber = randomNumbers[i]; 
    }
}

console.log("Найбільше число в масиві:", maxNumber);

