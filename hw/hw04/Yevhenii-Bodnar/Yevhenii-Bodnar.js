//1. Even numbers using 'for' loop
console.log("1.Even numbers using 'for' loop")

//1.1 for with step = EN++
for (let EN = 2; EN < 20; EN++) {
  if (EN % 2 === 0) {
    console.log(EN);
  }
}

//1.2 for with step = 4
for (let EN = 2; EN < 20; EN += 4) {
  console.log(EN);
}

//2. Countdown using 'while' loop
console.log("2.Countdown using 'while' loop")

let n = 10; //
while (n > 0) {
  console.log(n)
  n--;
};
console.log("Start");

//3. Sum of numbers using 'Do while'
console.log("3.Sum of numbers using 'Do while'")

const numbers = [5, 12, 8, 0, 10];
let a = 0; // variable for index of array to iterate through the array
let sum = 0; // variable for sum of numbers
do { // do-while loop to iterate through the array and calculate the sum
  sum += numbers[a]; // add the current number to the sum
  a++; // move to the next index
} while (a < numbers.length && numbers[a - 1] !== 0); // continue the loop while there are more numbers and the last number is not 0
console.log("Sum of numbers until 0: " + sum); // print the sum of numbers until 0 is found

// 4. Array modification using 'for' loop
console.log("4. Array modification using 'for' loop")

const users = ["ivan", "olga", "petro", "anna"];
for (let i = 0; i < users.length; i++){
  users[i] = users[i][0].toUpperCase() + users[i].slice(1); // capitalize the first letter of each name 
}
console.log(users); // print the array with capitalized names

// 5. Search in array using 'break'
console.log("5. Search in array using 'break'")

let nums = [3, 7, 1, 9, 5];
let targetnum = 7; // number to search for in the array
for (let i = 0; i < nums.length; i++) { // loop through the array
  if (nums[i] === targetnum) { // if the current number is equal to the target number
    console.log("Знайдено!"); // print a message indicating that the number was found
    break; // exit the loop since the target number has been found
  }
}

//6. Filtering values using 'continue'
console.log("6. Filtering values using 'continue'")

let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
for (let i = 0; i < values.length; i++) { // loop through the array
  if (values[i] % 3 === 0) { // if the current number is divisible by 3
    continue; // skip the rest of the loop and move to the next iteration
  }
  console.log(values[i]); // print the current number if it is not divisible by 3
}
//OR
console.log("OR");

for (let i = 1; i <= 15; i++) { // loop through numbers from 1 to 15
  if (i % 3 === 0) {
    continue; // skip the rest of the loop and move to the next iteration if the number is divisible by 3
  }
  console.log(i);
}

// 7. Work with objects using 'for...in' loop
console.log("7. Work with objects using 'for...in' loop");

const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2022,
  color: "black"
};
for (let key in car) { // loop through the properties of the car object
  console.log(key + ": " + car[key]); // print the key and its corresponding value
}

// 8. Sum of array values using 'for...of' loop
console.log("8. Sum of array values using 'for...of' loop");

const prices = [150, 200, 50, 430, 100];
let SumPrices = 0; // variable to store the total price

for (let price of prices) { // loop through the array using 'for...of'
  SumPrices += price; // add each price to the total
}
console.log("Sum of prices: " + SumPrices); 

// 9. Conversion of array values using 'for...of' loop
console.log("9. Conversion of array values using 'for...of' loop");

let message = "JavaScript";
for (let char of message) { // loop through each character in the string
  console.log(char + "-"); // print each character
}

// 10 Searching  for the maximum value in an array of a random numbers
console.log("10. Searching  for the maximum value in an array of a random numbers")

 console.log("10.1 for (let num of randomNumbers)");

let randomNumbers = [];// array to store random numbers
for (let i = 0; i < 100; i++) { // loop to generate 100 random numbers
   randomNumbers.push(Math.floor(Math.random() * 100)); // generate a random number between 0 and 99 and add it to the array
}
console.log(randomNumbers); // print the array of random numbers
let maxNumber = randomNumbers[0]; // variable to store the maximum number, initialized to the first element of the array
for (let num of randomNumbers) { // loop through the array to find the maximum number
  if (num > maxNumber) { // if the current number is greater than the current maximum
    maxNumber = num; // update the maximum number
  }
}
console.log("Maximum number: " + maxNumber); // print the maximum number  

//OR
console.log("OR 10.1.1 let i = 0; i < 100; i++");

let randomNumbers1 = [];// array to store random numbers
for (let i = 0; i < 100; i++) { // loop to generate 100 random numbers
   randomNumbers1.push(Math.floor(Math.random() * 100)); // generate a random number between 0 and 99 and add it to the array
}
console.log(randomNumbers1); // print the array of random numbers
let maxNumber1 = randomNumbers1[0]; // variable to store the maximum number, initialized to the first element of the array
for (let i = 0; i < randomNumbers1.length; i++) { // loop through the array to find the maximum number
  if (randomNumbers1[i] > maxNumber1) { // if the current number is greater than the current maximum
    maxNumber1 = randomNumbers1[i]; // update the maximum number
  }
}
console.log("Maximum number1: " + maxNumber1); // print the maximum number  