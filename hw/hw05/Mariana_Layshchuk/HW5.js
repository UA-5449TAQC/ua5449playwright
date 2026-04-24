// Task 1. Conditional Sum

// Create a function:
// function sumWithConditions(limit) {}

// * Use a `while` loop.
// * Sum numbers from `1` to `limit`.
// * Skip numbers divisible by 3.
// * Stop if number becomes greater than 40.
// * Return the final sum.

// function sumWithConditions(limit) {

//     let number = 1;
//     let sum = 0;

//     while (number<=limit) {
//         if (number > 40) {
//         break;    
//         }
    
//     number++;

//     if (number%3 === 0) {
//         number++;
//         continue;
//     }

//     sum +=number;
//     number++;
// }

// return sum;
// }
// console.log(sumWithConditions(43));


//Task 2. Multiplication Table as String

//Create a function:

//function generateMultiplicationTable(size) {}

//Requirements:

// * Use nested `for` loops.
// * Generate multiplication table from 1 to `size`.
// * Return the result as a single formatted string.
// * Each expression must be on a new line. 

function generateMultiplicationTable(size) {
  let result = "";

  for (let i = 1; i <= size; i++) {
    for (let j = 1; j <= size; j++) {
      result += i + " x " + j + " = " + (i * j);

      if (!(i === size && j === size)) {
        result += "\n";
      }
    }
  }

  return result;
}

console.log(generateMultiplicationTable(9));


// Task 3. Smart Calculator
// Create a function: function calculate(a, b, operator) {}

// Requirements:

// Support: +, -, *, /
// Handle division by zero
// Return "Invalid operator" if incorrect operator
// Return result
// Example:
// calculate(10, 5, "+");  // 15
// calculate(10, 0, "/");  // "Cannot divide by zero"
// calculate(10, 5, "%");  // "Invalid operator"

function calculate(a, b, operator) {
  if (operator === "+") {
    return a + b;
  }

  if (operator === "-") {
    return a - b;
  }

  if (operator === "*") {
    return a * b;
  }

  if (operator === "/") {
    if (b === 0) {
      return "Cannot / by zero";
    }
    return a / b;
  }

  return "Invalid operator";
}

console.log(calculate(5, 7, "+"));

// Task 4. Power Function (Without **)
// Create a function: function power(base, exponent) {}

// Requirements:

// Use a loop (not **)
// Handle exponent = 0
// Handle negative exponent (return string "Negative exponent not supported")
// Example:
// power(2, 3);  // 8
// power(5, 0);  // 1
// power(2, -2); // "Negative exponent not supported"

function power(base, exponent) {
  if (exponent < 0) {
    return "Not supported";
  }

  if (exponent === 0) {
    return 1;
  }

  let result = 1;

  for (let i = 0; i < exponent; i++) {
    result *= base;
  }

  return result;
}

console.log(power(17, -7));

// Task 5. Multiply All Numbers (Rest Parameters)
// Create a function:

// function multiplyAll(...numbers) {}
// Requirements:

// Multiply only numeric values
// Ignore non-number values
// If no valid numbers → return 0
// If no arguments → return 1
// Example:
// multiplyAll(2, 3, 4);     // 24
// multiplyAll(2, "a", 4);   // 8
// multiplyAll("a", "b");    // 0
// multiplyAll();            // 1

function multiplyAll(...numbers) {
  // If no arguments → return 1
  if (numbers.length === 0) {
    return 1;
  }

  let result = 1;
  let hasValidNumber = false;

  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] === "number" && !isNaN(numbers[i])) {
      result *= numbers[i];
      hasValidNumber = true;
    }
  }

  // If no valid numbers then 0
  if (!hasValidNumber) {
    return 0;
  }

  return result;
}

console.log((multiplyAll(4, 7, 4)));
console.log(multiplyAll(1, "a", 4));
console.log(multiplyAll("a", "b"));
console.log(multiplyAll());

// Task 6. Execute Callback
// Create a function:

// function executeOperation(a, b, operation) {}

// Check that operation is a function
// If not → return "Operation must be a function"
// Execute callback and return result
// Example:
// function sum(a, b) {
//   return a + b;
// }

// executeOperation(10, 5, sum);      // 15
// executeOperation(10, 5, "sum");    // "Operation must be a function"

function executeOperation(a, b, operation) {
  if (typeof operation !== "function") {
    return "Operation must be a function";
  }

  return operation(a, b);
}

function sum(a, b) {
  return a + b;
}


console.log(executeOperation(2, 14, sum));
console.log(executeOperation(20, 3, "sum"));

// Task 7. Recursive Factorial
// Create a function:

// function factorial(n) {}
// Requirements:

// Validate that n is integer ≥ 0
// Support 0! = 1
// Throw Error if invalid input
// Use recursion

function factorial(n) {
  // Validate input
  if (!Number.isInteger(n) || n < 0) {
    throw new Error("Should be a non-negative integer");
  }

  // Base case
  if (n === 0) {
    return 1;
  }

  return n * factorial(n - 1);
}

console.log(factorial(4)); 
console.log(factorial(0));

//  Task 8. Counter Using Closure
// Create a function:

// function createCounter(initialValue = 0) {}

// Use closure
// Keep count private
// Return a function (not object)
// Each call increases count by 1
// Return updated value
// Example:
// const counter = createCounter(5);

function createCounter(initialValue = 0) {
  let count = initialValue;

  return function () {
    count += 1;
    return count;
  };
}
const counter = createCounter(5);

console.log(counter());


// Task 9. Limited Guess Game (Closure)
// Create a function:

// function createGuessGame(secretNumber, maxAttempts = 3) {}

// Use closure
// Store remaining attempts
// Return inner function that accepts guessed number
// After attempts finished → always return "Access denied"
// Return "Correct" or "Wrong"

function createGuessGame(secretNumber, maxAttempts = 3) {
  let attemptsLeft = maxAttempts;

  return function (guess) {
    if (attemptsLeft <= 0) {
      return "Access denied";
    }

    attemptsLeft--;

    if (guess === secretNumber) {
      return "Correct";
    }

    return "Wrong";
  };
}

const guess = createGuessGame(7, 2);

console.log(guess(7));

// Task 10. Scope Demonstration
// Create a function:

// function demonstrateScope() {}

// Inside function declare variable x = 50
// Inside nested function declare variable x = 10
// Return a string explaining which value is used where
// Demonstrate shadowing
// Do NOT use objects

function demonstrateScope() {
  let x = 50;

  function inner() {
    let x = 10;
    return `Inner function uses x = ${x}.`;
  }

  return `${inner()}\nOuter function uses x = ${x}.`;
}

console.log(demonstrateScope());

