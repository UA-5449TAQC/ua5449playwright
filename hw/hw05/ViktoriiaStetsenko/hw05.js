// Task 1. Conditional Sum
function sumWithConditions(limit) {
  let sum = 0;
  let i = 1;

  while (i <= limit) {
    if (i > 40) {
      break;
    }

    if (i % 3 === 0) {
      i++;
      continue;
    }
    sum += i;
    i++;
  }
  return sum;
}

console.log(sumWithConditions(41));

// Task 2. Multiplication Table as String
function generateMultiplicationTable(size) {
  let tbl = "";
  for (let a = 1; a <=size; a++) {
    for (let b = 1; b <=size; b++) {
      let result = a * b; 
      let str = `${a} * ${b} = ${result}\n`;
      tbl += str;
    } 
  } 
  return tbl;
}

console.log (generateMultiplicationTable(3));

// Task 3. Smart Calculator

function calculate(a, b, operator) {
  switch (operator) {
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
      return "Invalid operator";
  }
} 
  
console.log(calculate(2,0,"/"));

// Task 4. Power Function (Without **)
function power(base, exponent) {
  if (exponent === 0) {
    return 1;
  } else if (exponent < 0) {
    return "Negative exponent not supported";
  } else {
    let result = 1;
    for (let i = 0;i < exponent;i++) {
      result *= base;
    } 
    return result;
  }
} 

console.log(power(-4, 2))

//Task 5. Multiply All Numbers (Rest Parameters)
function multiplyAll(...numbers) {
  let result = 1;
  let isAnyNumber = numbers.some(item => typeof item === "number");
  
  if (numbers.length === 0) {
    return 1;
  }
  if (!isAnyNumber) {
    return 0;
  } 
  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] === 'number') {
      result *= numbers[i];
    }
  } 
  return result;
}
console.log(multiplyAll(2,3))

// Task 6. Execute Callback 
// function sum(a,b) {
//   return a+b;
// }

function executeOperation(a, b, operation) {
  if (typeof operation !== "function") {
    return "Operation must be a function";
  } 
  return operation(a,b);
}

console.log("Result:", executeOperation(3, 3, power))

//Task 7. Recursive Factorial
function factorial(n) {
  if (!Number.isInteger(n) || n < 0) {
    throw new Error("Invalid input");
  }
  
  if (n === 0) {
    return 1;
  }
  
  return n * factorial(n - 1);
}

console.log(factorial(0));

// Task 8. Counter Using Closure
function createCounter(initialValue = 0) {
  let count = initialValue;
  return function () {
    return count += 1
  }
}

let a = createCounter();
console.log(a());
console.log(a());
console.log(a());
console.log(a());

// Task 9. Limited Guess Game (Closure)
function createGuessGame(secretNumber, maxAttempts = 3) {
let remainingAttemps = maxAttempts

  return function(number) {
    if (remainingAttemps === 0) {
      return "Access denied";
    };
    
    remainingAttemps --;
    
    if (number === secretNumber) {
      return "Correct";
    }
    
    return "Wrong";
    }
  }
      
let n = createGuessGame(5);
console.log(n(2));
console.log(n(3));
console.log(n(5));
console.log(n(8));

// Task 10. Scope Demonstration
function demonstrateScope() {
  let x = 50;
  return function newFunction(y = x) {
    let x = 10;
    return `Inner function uses x = ${x}. \nOuter function uses x = ${y}.`;
  }
}

let result = demonstrateScope();
console.log(result());
///////////////
function demonstrateScope1() {
  let x = 50;
  
  function newFunction() {
    let x = 10;
    return `Inner function uses x = ${x}.`;
  }
  return `${newFunction()}\nOuter function uses x = ${x}.`
}

console.log(demonstrateScope1());
