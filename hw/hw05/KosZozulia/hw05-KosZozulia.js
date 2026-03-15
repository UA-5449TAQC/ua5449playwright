// Task 1. Conditional Sum
function sumWithConditions(limit) {
  let sum = 0;
  let current = 1;
  
  while (current <= limit) {
    if (current > 40) {
      break;
    }
    if (current % 3 !== 0) {
      sum += current;
    }
    current++;
  }
  
  return sum;
}

///Task 2. Multiplication Table as String
function generateMultiplicationTable(size) {
  let result = "";
  
  // Outer loop for the first number (1 to size)
  for (let i = 1; i <= size; i++) {
    // Inner loop for the second number (1 to size)
    for (let j = 1; j <= size; j++) {
      // Build the multiplication expression
      result += `${i} x ${j} = ${i * j}`;
      // Add newline except for the very last line
      if (!(i === size && j === size)) {
        result += "\n";
      }
    }
  }
  
  return result;
}

//Task 3. Smart Calculator
function calculate(a, b, operator) {
  
  if (operator !== "+" && operator !== "-" && operator !== "*" && operator !== "/") {
    return "Invalid operator";
  }

  if (operator === "/" && b === 0) {
    return "Cannot divide by zero";
  }
  
  if (operator === "+") {
    return a + b;
  } else if (operator === "-") {
    return a - b;
  } else if (operator === "*") {
    return a * b;
  } else if (operator === "/") {
    return a / b;
  }
}

// Results
//console.log(calculate(10, 5, "+"));  // 15
// console.log(calculate(10, 0, "/"));  // "Cannot divide by zero"
// console.log(calculate(10, 5, "%"));  // "Invalid operator"

/// Task 5. Multiply All Numbers (Rest Parameters)
function multiplyAll(...numbers) {
  if (numbers.length === 0) {
    return 1;
  }
  let validNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] === "number") {
      validNumbers.push(numbers[i]);
    }
  }
  if (validNumbers.length === 0) {
    return 0;
  }
    let result = 1;
  for (let i = 0; i < validNumbers.length; i++) {
    result *= validNumbers[i];
  }
  
  return result;
}

//Task 6. Execute Callback
function executeOperation(a, b, operation) {
    if (typeof operation !== "function") {
    return "Operation must be a function";
  }
  return operation(a, b);
}

// Task 7. Recursive Factorial
function factorial(n) {

  if (!Number.isInteger(n) || n < 0) {
    throw new Error("Input must be a non-negative integer");
  }
  
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(5));   // 120
console.log(factorial(0));   // 1
try {
   console.log(factorial(-2)); // Error
} catch (error) {   console.log(error.message);
}

//Task 8. Counter Using Closure
function createCounter(initialValue = 0) {
   let count = initialValue;
  return function() {
    count++; // Increment count by 1
    return count; // Return updated value
  };
}

const counter = createCounter(5);
 console.log(counter()); // 6
console.log(counter()); // 7
 console.log(counter()); // 8

//Task 9. Limited Guess Game (Closure)
function createGuessGame(secretNumber, maxAttempts = 3) {
   let attemptsLeft = maxAttempts;
   return function(guessedNumber) {
      if (attemptsLeft <= 0) {
      return "Access denied";
    }
      attemptsLeft--;
     if (guessedNumber === secretNumber) {
      return "Correct";
    } else {
      return "Wrong";
    }
  };
}

// const guess = createGuessGame(7, 2);
// console.log(guess(3)); // "Wrong"
// console.log(guess(5)); // "Wrong"
/// console.log(guess(7)); // "Access denied"

//Task 10. Scope Demonstration
function demonstrateScope() {
  // Outer function variable
  let x = 50;
  
  // Nested function that demonstrates variable shadowing
  function innerFunction() {
    // Inner function variable - shadows the outer x
    let x = 10;
    return "Inner function uses x = " + x + ".";
  }
  
  // Get the message from the inner function
  let innerMessage = innerFunction();
  
  // Outer function uses its own x (50)
  let outerMessage = "Outer function uses x = " + x + ".";
  
  // Return combined message demonstrating scope
  return innerMessage + "\n" + outerMessage;
}

// console.log(demonstrateScope());
/// Expected output:
// "Inner function uses x = 10.
// Outer function uses x = 50."
