//1 Conditional Sum

function sumWithConditions(limit) {
    let sum = 0;
    let number = 1;        
    while (number <= limit) {
        if (number > 40) {
            break;
        }
        if (number % 3 !== 0) {
            sum += number;
        }
        number++;
    }
    return sum;
}

//2 Multiplication Table as String

function generateMultiplicationTable(size) {
    let result = '';
    for (let i = 1; i <= size; i++) {
        for (let o = 1; o <= size; o++) {
            result += `${i} x ${o} = ${i * o}\n`;
        }
    }
    return result;
}

//3 Smart Calculator

function calculate(a, b, operator) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            if (b === 0) {
                return "Cannot divide by zero";
            }
            return a / b;
        default:
            return "Invalid operator";
    }
}

//4 Power Function (Without **)

function power(base, exponent) {
    if (exponent < 0) {
        return "Negative exponent not supported";
    } else if (exponent === 0) {
        return 1;
    } else {
        let result = 1;
        for (let i = 0; i < exponent; i++) {
            result *= base;
        }
        return result;
    }   
}

//5  Multiply All Numbers (Rest Parameters)
// Create a function:

function multiplyAll(...numbers) {
  if (numbers.length === 0) {
    return 1;
  }

  let result = 1;
  let hasValidNumber = false;

  for (let num of numbers) {
    if (typeof num === 'number') {
      result *= num;
      hasValidNumber = true;
    }
  }

  return hasValidNumber ? result : 0;
}

// 6 Execute Callback


function executeOperation(a, b, operation) {
    if (typeof operation !== 'function') {
        return "Operation must be a function";
    }       
    return operation(a, b);
}

// 7  Recursive Factorial

function factorial(n) {
    if (typeof n !== 'number' || n < 0 || !Number.isInteger(n)) {
        throw new Error("Input must be a non-negative integer");
    }   
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

// 8 Counter Using Closure

function createCounter(initialValue = 0) {
    let count = initialValue;   
    return function() {
        count++;
        return count;
    };
}

// 9 Limited Guess Game (Closure)

function createGuessGame(secretNumber, maxAttempts = 3) {
    let attemptsLeft = maxAttempts;
    return function(guess) {
        if (attemptsLeft <= 0) {
            return "Access denied";
        }
        attemptsLeft--;
        if (guess === secretNumber) {
            return "Correct";
        } else {
            return "Wrong";
        }
    };
}

// 10 Scope Demonstration

function demonstrateScope() {
    let x = 50;
    function nestedFunction() {
        let x = 10;
        return `Inside nested function: x = ${x}`;
    }
    return `Inside outer function: x = ${x}\n${nestedFunction()}`;
}   