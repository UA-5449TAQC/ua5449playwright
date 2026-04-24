// Loops

console.log("______________________Task 1_________________________")

for (let i = 2; i <= 20; i++) {
    if (i % 2 === 0)
        console.log(i);
}


console.log("______________________Task 2_________________________")

let i = 10;

while (i) {
    console.log(i--);
}

console.log("Start!");


console.log("______________________Task 3_________________________")

const numbers = [5, 12, 8, 0, 10];
let sum = 0, n = 0;

do {
    console.log(numbers[n]);
    n++;
    if (numbers[n] === 0) break;
} while (n < numbers.length)


console.log("______________________Task 4_________________________")

const users = ["ivan", "olga", "petro", "anna"];
const newUsers = [];

for (s of users) {
    newUsers.push(s[0].toUpperCase() + s.slice(1));
}

console.log(newUsers);


console.log("______________________Task 5_________________________")

const arr = [1, 18, 3, 25, 0, 7, 10];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 7) {
        console.log("Found 7!");
        break;
    }
    //console.log(arr[i]);
}


console.log("______________________Task 6_________________________")

for (let i = 1; i <= 15; i++) {
    if (i % 3 === 0)
        continue
    console.log(i)
}

console.log("______________________Task 7_________________________")

const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2022,
    color: "black"
};

for (let key in car) {
    console.log(key + ": " + car[key]);
}


console.log("______________________Task 8_________________________")

const prices = [150, 200, 50, 430, 100];
let totalPrice = 0;

for (p of prices) {
    totalPrice += p;
    console.log("Price increased on " + p + ". Total price now: " + totalPrice);
}


console.log("______________________Task 9_________________________")

let message = "JavaScript";

for (c of message) {
    console.log(c + '-')
}


console.log("______________________Task 10_________________________")

const randomArr = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
console.log(randomArr);

let numMax = randomArr[0];

for (r of randomArr) {
    if (r > numMax)
        numMax = r;
}

console.log("Max number: " + numMax)