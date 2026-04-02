//01

function sumWithConditions(limit) {
    let number= 1;
    let totalSum = 0;
    while (number <= limit) {
        if (number % 3 != 0) {
            if (number <= 40) {
            totalSum += number;
            }
        }
        number ++;
    }
    return "Total sum is: " + totalSum;
}

console.log(sumWithConditions(6));

//02

function generateMultiplicationTable(size) {
    let result = "";
    for (let firstM = 1; firstM <= size; firstM ++) {
        for (let secondM = 1; secondM <= size; secondM ++) {
            result += firstM + " x " + secondM + " = " + firstM * secondM + "\n";
        }
    }
    return result;
}

console.log(generateMultiplicationTable(5));

//03

function calculate(a, b, operator) {
    result = 0;
    switch (operator) {
        case "+": 
            result = a + b;
            break;
        case "-":
            result = a - b;
            break;
        case "*":
            result = a * b;
            break;
        case "/":
            result = b != 0? a / b: "Division by zero error";
            break;
        default:
        result = "Invalid operator" 
    }
    return result;
}

console.log(calculate(2, 6, "!"));

//04

function power(base, exponent) {
    let result = 1;
    if (exponent == 0) {
        result;
    } else if (exponent < 0) {
        result = "Negative exponent not supported";
    } else
    for (let i = 1; i <= exponent; i++) {
        result *= base;
    }
    return result;
}

console.log(power(22, -3));

//05

function multiplyAll(...numbers) {
    let sum = 1;
    if (numbers.length == 0) {
        sum;
    } else if (numbers.every(item => !Number.isFinite(item))) {
        sum = 0;
    } else
    for (let num of numbers) {
        if (Number.isFinite(num)) {
             sum *= num;
        }
    }  
    return sum;
}

console.log((multiplyAll(2, 3, 4)));
console.log(multiplyAll(2, "a", 4));
console.log(multiplyAll("a", "b"));
console.log(multiplyAll());


//06

function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}   
function divide(a, b) {
    if (b === 0) {
        return "Division by zero error";
    }
    return a / b;
}

function executeOperation(a, b, operation) {
    if (typeof(operation) === "function") {
        return operation(a, b);
    } else return "Operation must be a function";
}

console.log(executeOperation(2, 3, add));
console.log(executeOperation(2, 3, subtract));
console.log(executeOperation(2, 3, multiply));
console.log(executeOperation(2, 3, divide));
console.log(executeOperation(2, 0, divide));
console.log(executeOperation(0, 2, divide));

//07

function factorial(n) {
    if (n == 0) {
        return 1
    } else if (n < 0 || typeof(n) != 'number') {
        return 'Error'
    } else
        return n * factorial(n - 1);
}

console.log(factorial(5));
console.log(factorial(0));
console.log(factorial(-5));
console.log(factorial("a"));
console.log(factorial(6));

//08

function createCounter(initialValue = 0) {
    let count = initialValue;

    return function(counter) {
        count ++;
        return count;
    }
    return counter;

}

const counter = createCounter(11);
console.log(counter());
console.log(counter());
console.log(counter());

//09

function createGuessGame(secretNumber, maxAttempts = 3) {
    let attempts = maxAttempts;

    return function (guess) {
        if (attempts <= 0) {
            return "Access denied";            
        } 
        
        attempts --;

        if (guess === secretNumber) {
            return "Correct";
        } else return "Wrong";
    }
}
const guess = createGuessGame(5, 2);

console.log(guess(7)); 
console.log(guess(5)); 
console.log(guess(3)); 
console.log(guess(3));

//10

function demonstrateScope() {
    let x = 60;

    function inner() {
        let x = 10;
        return "Innner function uses x = " + x;
    }
    
    return inner() + "\nOuter function uses x = " + x ;

}

console.log(demonstrateScope());