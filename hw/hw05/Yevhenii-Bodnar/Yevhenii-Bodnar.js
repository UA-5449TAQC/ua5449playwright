// 1. Conditional Sum
console.log ("\n1. Conditional Sum");

function sumWithConditions(limit) {
    let sum = 0; // Initialize sum to 0
    let i = 1; // Start from 1
while (i <= limit && i <= 40) { // Loop until the limit or 40, whichever is smaller
    if (i % 3 !== 0) { // Check if i is not a multiple of 3
        sum += i; // Add i to sum if it's not a multiple of 3
    }
    i++; // Increment i
}
return sum; // Return the final sum
}
console.log("Sum with conditions (limit 50): " + sumWithConditions(50));

// 2. Multiplication Table as String using nested 'for' loops
console.log ("\n2. Multiplication Table as String using nested 'for' loops");

function generateMultiplicationTable(size) {
  let table = ""; 

  for (let i = 1; i <= size; i++) { // Outer loop to iterate from 1 to size value
    for (let j = 1; j <= size; j++) { // Nested loop inside Outer loop to iterate through rows and columns
      table += `${i} x ${j} = ${i * j}\n`; // Adding multiplication result in such format to the table
    }
  }

  return table;
}

console.log(generateMultiplicationTable(4)); 

// 2.1 Dividing table as String using nested 'for' loops
console.log ("\n2.1 Dividing table as String using nested 'for' loops");

function generateDivisionTable(size) {
    let table1 = '';
    for (let i = 1; i <= size; i++) {
        for (let j = 1; j <= size; j++) {
            table1 += `${i} ÷ ${j} = ${(i / j).toFixed(2)}\n`; // backtiks used to create a template           
        }
    }
    return table1;
}

console.log(generateDivisionTable(4));

// 3. Smart Calculator
console.log ("\n3. Smart Calculator");

function calculate(a, b, operator) { 
  switch (operator) { // Switch statement to use different operations
    case "+":
      return a + b;

    case "-":
      return a - b;

    case "*":
      return a * b;

    case "/":
      if (b === 0) {
        return "Cannot divide by zero"; 
      }
      return a / b;

    default:
      return "Invalid operator"; // Return an error message for invalid operators
  }
}

console.log(calculate(10, 5, "+")); // addition 10 + 5
console.log(calculate(10, 0, "/")); // division 10 / 0
console.log(calculate(10, 5, "%")); // invalid operator %

//4. Power Function (Without **)
console.log ("\n4. Power Function (Without **)");

function power(base, exponent) {
  if (exponent < 0) {
    return "Negative exponent not supported";
  }
  if (exponent === 0) {
    return 1; 
  }
  let result = 1;
  let count = 0;
  while (count < exponent) { // While loop to multiply base by itself exponent times
    result *= base; 
    count++;
  } 
  return result;
}
console.log(power(2, 3));  // 8
console.log(power(5, 0));  // 1
console.log(power(2, -2)); // "Negative exponent not supported"

//5. Multiply All Numbers (Rest Parameters)
console.log ("\n5. Multiply All Numbers (Rest Parameters)");

function multiplyAll(...numbers) { 
  if (numbers.length === 0) {
    return 1; // Return 1 if numbers aren't given 
  }
  let result1 = 1;
  let NumberIsValid = false; 

  for (let number of numbers) { 
    if (typeof number === "number" && !isNaN(number)) { // Check if the number is valid
      result1 *= number;
      NumberIsValid = true;
    }
  }
  return NumberIsValid ? result1 : 0;
}

console.log(multiplyAll(2, 3, 4));     // 24
console.log(multiplyAll(2, "a", 4));   // 8
console.log(multiplyAll("a", "b"));    // 0
console.log(multiplyAll());       // 1

// 6. Execute Callback
console.log ("\n6. Execute Callback");

function executeOperation(a, b, operation) { // Verify if the operation is a function. If not - return an error message
  if (typeof operation !== "function") { 
    return "Operation must be a function";
  }

  return operation(a, b);  // if  the operation is a function - execute it
}
function sum(a, b) { 
  return a + b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  if (b === 0) {
    return "Cannot divide by zero";
  }
  return a / b;
}
console.log(executeOperation(10, 5, sum));
console.log(executeOperation(10, 5, "sum"));
console.log(executeOperation(10, 5, multiply));
console.log(executeOperation(10, 5, divide));
console.log(executeOperation(10, 0, divide));

//7.Recursive Factorial
console.log ("\n7. Recursive Factorial");

function factorial(n) {

  if (!Number.isInteger(n) || n < 0) { // Verify if n is >=0. If not - return an error message
    return ("Error:Input should be an integer >= 0");
  }

  if (n === 0) { // Support 0! = 1
    return 1;
  }

  return n * factorial(n - 1); // recursive call to calculate factorial of n-1 and multiply it by n
}
console.log(factorial(5));   // 120
console.log(factorial(0));   // 1
console.log(factorial(-2)); // "Error:Input should be an integer >= 0"

//8. Counter Using Closure
console.log ("\n8. Counter Using Closure");

function createCounter(initialValue = 0) {
  let count = initialValue; // Initialize count with the initial value

  return function() { // Return a closure that increments and returns the count
    count++;
    return count;
  };
}
const counter1 = createCounter(5); // Create a counter with initial value 5

console.log(counter1()); // 6
console.log(counter1()); // 7
console.log(counter1());  // 8

//9. Limited  Guess Game (Closure)
console.log ("\n9. Limited  Guess Game (Closure)");

function createGuessGame(secretNumber, maxAttempts=3) {
  let Attempts = 0; 
  return function(guess) { // Closue function ti check a guess against a secret number
    if (Attempts >= maxAttempts) { // Check if the maximum number of attempts has been reached
      return "Access denied";
    }
    Attempts++; 
    if (guess === secretNumber) { // Check if the guess is correct
      return "Correct!";
    } else {
      return "Wrong";
    }
  };
}

const guess = createGuessGame(7, 2);

console.log(guess(3)); // "Wrong"
console.log(guess(2)); // "Wrong"
console.log(guess(7)); // "Access denied"

// 10. Scope Demonstration
console.log ("\n10. Scope Demonstration");

function demonstrateScope() {
  let x = 50; // Outer function

  function inner() { // Inside nested function
    let x = 10; 
    return `Inner function uses x = ${x}`;
  }

  return `Outer function uses x = ${x}
${inner()}`;
}

console.log(demonstrateScope());