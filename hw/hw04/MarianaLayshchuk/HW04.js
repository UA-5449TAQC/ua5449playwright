// 1

for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}

// 2

let i = 10;

while (i>=1) {
    console.log(i);
i--;
}

console.log("Start!")

// 3

const numbers = [5, 12, 8, 0, 10];
i = 0;
let finalsum = 0;

do {
    if (numbers[i] === 0) {
        break;
    }

    finalsum +=numbers[i];
    i++;
}
while (i < numbers.length);
console.log(finalsum);

// 4

const users = ["ivan", "olga", "petro", "anna"];

for (let n = 0; n < users.length; n++) {
  users[n] = users[n][0].toUpperCase() + users[n].slice(1);
}

console.log(users);

 // 5

 const new_array = [3, 5, 12, 8, 9, 7, 4, 0]
 i = 0;
 while (i < new_array.length) {
    if (new_array[i] === 7) {
    console.log("Знайдено!");
    break;
  }
  i++;
    }

 // 6

 for (let k = 1; k <= 15; k++) {

  if (k % 3 === 0) {
    continue; // пропускаємо числа, кратні 3
  }
  console.log(k);
}

// 7
const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2022,
  color: "black"
};

for (let key in car) {
  console.log(`${key}: ${car[key]}`);
}

// 8
const prices = [150, 200, 50, 430, 100];

let all_price = 0;

for (let n of prices) {
  all_price += n;
}
console.log(all_price)

// 9

let message = "JavaScript";

for (let char of message) {
  console.log(char + "-");
}

// 10

const my_array = [12, 45, 7, 89, 23, 56];
let max = my_array[0];

for (let i = 1; i < my_array.length; i++) {
  if (my_array[i] > max) {
    max = my_array[i]; // оновлюємо max, якщо знаходимо більше число
  }
}

console.log("Найбільше число:", max);
