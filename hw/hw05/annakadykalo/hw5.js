//Functions

console.log("______________________Task 1_________________________")

function sumWithConditions(limit) {
    let sum = 0
    let count = 0;
    while (count <= limit && count <= 40) {
        if (count % 3 === 0) {
            count++;
            continue
        }
        sum += count;
        console.log("sum: " + sum + ". Added number " + count);
        count++;
    }
    return sum;
}

console.log(sumWithConditions(50))



console.log("______________________Task 2_________________________")

function generateMultiplicationTable(size) {
    let table = '';
    for (let i = 1; i <= size; i++) {
        for (let j = 1; j <= 10; j++) {    // this will generate output not as in example but IMAO this is how multiplication table should look like
            table += (i + ' x ' + j + ' = ' + (i * j) + '\n');
        }
        table += '\n';
    }
    return table;
}

console.log(generateMultiplicationTable(3));


console.log("______________________Task 3_________________________")

function calculate(a, b, operator) {
    switch (operator) {
        case ("+"):
            return a + b;
        case ("-"):
            return a - b;
        case ("*"):
            return a * b;
        case ("/"):
            return (b != 0) ? a / b : "Cannot divide by zero";
        default:
            return "Invalid operator";
    }
}

console.log(calculate(1, 3, '+'));
console.log(calculate(1, 3, '-'));
console.log(calculate(1, 3, '*'));
console.log(calculate(1, 4, '/'));
console.log(calculate(1, 4, '%'));


console.log("______________________Task 4_________________________")

function power(base, exponent) {
    if (exponent === 0) return 1; // any number to the power of 0 is 1
    if (exponent < 0) return "Negative exponent not supported";

    let result = base;
    for (let i = 1; i < exponent; i++) {
        result *= base;
    }
    return result;
}

console.log(power(2, 3)); // 8
console.log(power(5, 0)); // 1
console.log(power(2, -2)); // "Negative exponent not supported"


console.log("______________________Task 5_________________________")

function multiplyAll(...numbers) {
    if (numbers.length === 0) return 1;

    if (!numbers.find(n => typeof n == "number")) return 0;
    // if (!numbers.every(n => typeof n == 'number')) return 0;

    let result = 1;
    for (num of numbers) {
        if (typeof num !== "number")
            continue
        result *= num;
    }
    return result;
}

console.log(multiplyAll(2, 3, 4));     // 24
console.log(multiplyAll(2, "a", 4));   // 8
console.log(multiplyAll("a", "b"));    // 0
console.log(multiplyAll());            // 1


console.log("______________________Task 6_________________________")

function executeOperation(a, b, operation) {
    if (typeof operation !== "function")
        return "Operation must be a function";
    return operation(a, b);
}

console.log(executeOperation(5, 3, (x, y) => x + y)); // 8
console.log(executeOperation(5, 3, (x, y) => x - y)); // 2
console.log(executeOperation(5, 3, (x, y) => x * y)); // 15
console.log(executeOperation(5, 3, (x, y) => x / y)); // 1.666...
console.log(executeOperation(5, 3, "+")); // "Operation must be a function"


console.log("______________________Task 7_________________________")

function factorial(n) {
    // 3! = 3*2*1
    if (typeof n !== "number" || n % 1 !== 0 || n < 0)
        return "Error";
    if (n === 0)
        return 1;
    return factorial(n - 1) * n;
}

console.log(factorial(5));   // 120
console.log(factorial(0));   // 1
console.log(factorial(-2));  // Error
console.log(factorial(1.25)); // Error


console.log("______________________Task 8_________________________")

function createCounter(initialValue = 0) {
    let count = initialValue;

    return function () { return ++count }
}

const counter = createCounter(5);

console.log(counter()); // 6
console.log(counter()); // 7
console.log(counter()); // 8


console.log("______________________Task 9_________________________")

function createGuessGame(secretNumber, maxAttempts = 3) {
    let attemptCount = 0;
    return (attempt) => {
        attemptCount++;
        if (attemptCount > maxAttempts) return "Access denied"
        return (attempt === secretNumber) ? "Correct" : "Wrong";
    }
}

const guess = createGuessGame(7, 2);

console.log(guess(3)); // "Wrong"
console.log(guess(5)); // "Wrong"
console.log(guess(7)); // "Access denied"


console.log("______________________Task 10_________________________")

function demonstrateScope() {
    let x = 50;
    console.log("Outer function uses x = ", x)
    return () => {
        let x = 10
        console.log("Inner function uses x = ", x)
    }
}

demonstrateScope()();

/*
Example return value:

"Inner function uses x = 10.
Outer function uses x = 50."
*/
