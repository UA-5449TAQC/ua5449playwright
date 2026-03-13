// 1. Even numbers (for)

for (let i = 1; i <= 20; i++) { // skipping 0 because it is easier. if I've included 0, then I would have to add an extra condition to skip it
    if (i % 2 === 0) {
        console.log(i);
    }
}

// 2. Countdown (while)

let n = 10;
while (true) {
    console.log(n);
    n--;
    if (n === 0) {
        console.log("Start!");
        break;
    }
}

//3. Summary of numbers (do while) 
const numbers = [5, 12, 8, 0, 10];
let summ = 0;
let i = 0;
do {
    summ += numbers[i];
    i++;
} while (i < numbers.length);

console.log(summ);

//4. Array modification (for)

const users = ["ivan", "olga", "petro", "anna"];

for (let i = 0; i < users.length; i++) {
    users[i] = users[i][0].toUpperCase() + users[i].slice(1); // using slice because users[i][0] returns only 1st letter and slice adds the rest
}
console.log(users);

//5. Searching with break

const searchNumbers = [5, 12, 8, 7, 0, 7];

for (const num of searchNumbers) {
    if (num === 7) {
        console.log("Found!");
        break;
    }

}

//ADDITIONAL TASK
//another idea got to my mind: search for a SECOND 7 and only then stop. If no second 7 - print "Only one 7 found"
let count = 0;
for (const num of searchNumbers) {
    if (num === 7) {
        count++;
        if (count === 2) {
            break;
        }
    }
}
resultCount = count === 1 ? "Only one 7 found" : "Two 7 found"; // there is no option other than 1 or 2 so we can use ternary operator
console.log(resultCount);

//6. Filtering with continue

for (i = 1; i <= 15; i++) { // using <= because it was said "from 1 to 15" but anyway 15 would be never printed
    if (i % 3 === 0) {
        continue;
    }
    console.log(i);
}

//7. Working with objects (for in)

const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2022,
  color: "black"
};

for (const key in car) {
    console.log(`${key}: ${car[key]}`);
}

//8. Summary of array (for of)

const prices = [150, 200, 50, 430, 100];
let summary = 0;
for (const price of prices) {
    summary += price;
}
console.log(`Summary: ${summary}`);

//9. String modification (for of)

let message = "JavaScript";

for (const char of message) {
    console.log(`${char}-`);
}

//10. Searching for a max value

let arrayNum = [];
for (let i = 0; i < 10; i++) {
    arrayNum.push(Math.floor(Math.random() * 10)); // creating an array of 10 random numbers. using floor to get Int numbers because float numbers are kinda long (I don't like it)
}
console.log(`Random array: ${arrayNum}`);

let max;
for (const num of arrayNum) {
    if (max === undefined || num > max) { // if max is undefined (first iteration) or num is bigger than max, then we assign num to max. creating this logic instead of one-time assignment in the first iteration
        max = num;
    }
}
console.log(`Max value: ${max}`);
