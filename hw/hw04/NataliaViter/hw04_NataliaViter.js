//Завдання 1: Парні числа (for)
/* for (let i = 2; i <= 20; i += 2) {
  console.log(i);// 2 4 6 8 10 12 14 16 18 20
}
 */
//Завдання 2: Зворотний відлік (while)
/* let n = 10;
while (n >= 1) {
    console.log(n);
    n--;
}
console.log('Старт!'); 10 9 8 7 6 5 4 3 2 1 Старт!*/

//Завдання 3: Сума чисел (do..while)
/* const numbers = [5, 12, 8, 0, 10];
let m = 0;
do {
    console.log(numbers[m]);// 5 12 8 0 10
    m++
} 
while (m < numbers.length ); */

/* const numbers = [5, 12, 8, 0, 10];
let i = 0;
let sum = 0;
do {
  sum += numbers[i];
  i++;
} while (i < numbers.length);
console.log("Загальна сума:", sum);//Загальна сума: 35 */

/* const numbers = [5, 12, 8, 0, 10];
let i = 0;
let sum = 0;
do {
  if (numbers[i] === 0) {
    break; // зупиняємо цикл, якщо зустріли 0
  }
  sum += numbers[i];
  i++;
} while (i < numbers.length);
console.log("Загальна сума:", sum); // Загальна сума: 25 - не додало 10 так як перед ним зустрівся 0 і цикл зупинився. */

//Завдання 4: Модифікація масиву (for)
/* const users = ["ivan", "olga", "petro", "anna"];
for (let i = 0; i < users.length; i++) {
  users[i] = users[i][0].toUpperCase() + users[i].slice(1);
}
console.log(users);//[ 'Ivan', 'Olga', 'Petro', 'Anna' ] */

//Завдання 5: Пошук у масиві (break)
/* const numbers = [2, 8, 7, 56, 14, 9, 15];
for(let i = 0; i < numbers.length; i++) {
  if (numbers[i] === 7) {
    console.log("Знайдено!");// Знайдено!
    break; // зупиняємо цикл одразу після знаходження 7
  }
} */

//Завдання 6: Фільтрація значень (continue)
/* for (let i = 1; i <= 15; i++) {
  if (i % 3 === 0) {
    continue; // пропускаємо числа, які діляться на 3
  }
  console.log(i);// 1 2 4 5 7 8 10 11 13 14
} */

//Завдання 7: Робота з об'єктом (for..in)
/* const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2022,
  color: "black"
};
for (let key in car) {
    console.log (key + ": " + car[key]);//brand: Toyota model: Camry year: 2022 color: black
} */

//Завдання 8: Сума елементів масиву (for..of)
/* const prices = [150, 200, 50, 430, 100];
let total = 0;
for (const price of prices) {
    total += price;
};
console.log("Сума", total);//Сума 930 */

//Завдання 9: Перетворення рядка (for..of)
/* let message = "JavaScript";
for (let i = 0; i < message.length; i++) {
console.log(message[i] + "-");
} */
    
//Завдання 10: Пошук максимального числа
/* const numbers = [20, 500, 478, 32, 6, 563, 564, 869, 5, 36];
let max = numbers[0];
for (let num of numbers) {
  if (num > max) {
    max = num;
  }
}
console.log("Найбільше число:", max);//Найбільше число: 869 */