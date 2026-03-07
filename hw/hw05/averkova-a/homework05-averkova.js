// Task 1. Conditional Sum

function sumWithConditions(limit) {
    let sum = 0;
    let counter = 1;
    
    while (limit > 0 && counter <= 40) { // loop until we have added all numbers or reached 40s number. Note: it could be done with "if (counter > 40) break;" but this looks more clear to me
        if (counter % 3 === 0) {
            limit--; 
            counter++;
            continue; // skip numbers divisible by 3
        } else
        {
        sum += counter; 
        limit--; 
        counter++;
        }
    }
    return sum;
}
console.log(sumWithConditions(50)); // Should be 547

// Task 2. Multiplication Table as String

function generateMultiplicationTable(size) {
    let table = "";
    
    for (let i = 1; i <= size; i++) { // i if a multiplier
        for (let j = 1; j <= size; j++) { // j is a multiplicand
            table += `${i} * ${j} = ${i * j}\n`; // /n is for new line
        }
    }
    return table;
}
console.log(generateMultiplicationTable(3));

// Task 3. Smart Calculator

function calculate(a, b, operator) {
    if (b === 0 && operator === "/") { // check for division by zero first to break the function before it tries to do the division
        return "Cannot divide by zero";
    }
    switch (operator) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return a / b;
        default:
            return "Invalid operator";
    }
}
console.log(calculate(10, 5, "+"));  // 15
console.log(calculate(10, 0, "/"));  // "Cannot divide by zero"
console.log(calculate(10, 5, "%"));  // "Invalid operator"

// Task 4. Power Function (Without **)

function power(base, exponent) {
    let result = base; // we will multiply base by itseslf
    if (exponent === 0) {
        return 1; // any number to the power of 0 is 1
    }   else if (exponent < 0) {    
        return "Negative exponent not supported";
    }
        else {
            for (let i = 1; i < exponent; i++){
                result *= base; 
            }
        }
    return result;    
}

console.log(power(2,3));
console.log(power(5, 0));
console.log(power(2, -2));

// Task 5. Multiply All Numbers (Rest Parameters)

// First (long) solution
function multiplyAllLong(...numbers) {

    if (numbers.length === 0) { // check if array is not empty
        return 1;
    }

    let indicator = 0; 
    for (const number of numbers) {  // check if there are any numbers in the array
            if (isNaN(number) === false) {
                indicator++;
            }
        
    }
    if (indicator === 0) { // if there are no numbers in the array, return 0
        return 0;
    }

    let mult = 1; 
    for (const number of numbers) { 
            if (isNaN(number) === false) { // if item is Number -> calculate
                mult *= number;
            }
        }
    
    return mult;
}

// Second (short) solution
function multiplyAll(...numbers) {

        if (numbers.length === 0) { // check if array is not empty
        return 1;
    }

    let hasNumber = false; // to track numbers in array
    let mult = 1; // start from 1 because we will multiply items on mult

    for (const number of numbers) { 
            if (isNaN(number) === false) { // verify is element a number
                mult *= number;
                hasNumber = true;
            }
        }
    
    return hasNumber ? mult: 0 // if there were no numbers, hasNumber remains False and returns 0
}

console.log(multiplyAll(2, 3, 4));
console.log(multiplyAll(2, "a", 4));
console.log(multiplyAll("a", "b"));
console.log(multiplyAll());

// Task 6. Execute Callback

function executeOperation(a, b, operation) {
        if (typeof(operation) != "function") { // check is it function
        return "Operation must be a function";
    }
        return(operation(a, b))
}

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

console.log(executeOperation(5, 10, add));
console.log(executeOperation(5, 10, multiply));

// Task 7. Recursive Factorial

function factorial(n) {
    if (n === 0) { // base case, recursion will exit on this condition
        return 1;
    }

    return n * factorial(n - 1); // will go from n to 1, 1-1=0 -> return 1 from the base case. e.g. n = 3, then 3*2*1*1 
}
console.log(factorial(3));

// Task 8. Counter Using Closure

function createCounter(initialValue = 0) {

    function counter() {
        initialValue += 1;
        return initialValue;
    }

    return counter;
}

const result = createCounter(5);
console.log(result());
console.log(result());

// Task 9. Limited Guess Game (Closure)

function createGuessGame(secretNumber, maxAttempts = 3) {

    function game(number) {
        if (maxAttempts === 0) {
            console.log("Access Denied");
        } else if (number === secretNumber) {
            console.log("Correct");
        } else {
            console.log("Wrong");
            maxAttempts--;
        }
    }
    return game;
}

const guess = createGuessGame(7, 2);
guess(3);
guess(5);
guess(7); // "Access Denied"

// Task 10. Scope Demonstration

// Solution with console.log
function demonstrateScope() {

    let x = 50; 
    function innerScope() {
        let x = 10;
        console.log(`Inner scope uses x = ${x}`);
    }

    innerScope();
    console.log(`Outer scope uses x = ${x}`); // innerScope returned 10 but didn't rewrite the outer X, so it will be 50 here

}
demonstrateScope();

//Solution with return

function demonstrateScope1() {

    let x = 50;

    function innerScope() {
        let x = 10;
        return `Inner function uses x = ${x}.`
    }

    const innerMsg = innerScope();
    const outerMsg = `Outer function uses x = ${x}.`

    return innerMsg + "\n" + outerMsg;

}

console.log(demonstrateScope1());