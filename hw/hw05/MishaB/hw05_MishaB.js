// 🔹Task 1. Conditional Sum

function sumWithConditions(limit) {
    let i = 1;      
    let sum = 0;
    while (i <= limit) {

        if (i > 40) break;         // якщо більше 40 → стоп

        if (i % 3 === 0) {         // якщо ділиться на 3
            i++;                   // пропускаємо
            continue;
        }

        sum += i;                  // додаємо до суми
        i++;                       // наступне число
    }

    return sum;
}



// 🔹Task 2. Multiplication Table as String

function generateMultiplicationTable(size) {
    let result = "";

    for (let i = 1; i <= size; i++) {       
        for (let j = 1; j <= size; j++) {   

            result += i + " x " + j + " = " + (i * j) + "\n";
           

        }
    }

    return result;
}

// 🔹Task 3. Smart Calculator

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
            return "Cannot divide by zero";
        }
        return a / b;
    }

    return "Invalid operator";
}


// Task 4. Power Function (Without **)

function power(base, exponent) {

    if (exponent < 0) {
        return "Negative exponent not supported";
    }

    if (exponent === 0) {
        return 1;
    }

    let result = 1;

    for (let i = 1; i <= exponent; i++) {
        result *= base; // множимо base кілька разів
    }

    return result;
}

// Task 5. Multiply All Numbers (Rest Parameters)

function multiplyAll(...numbers) {

    if (numbers.length === 0) {
        return 1; // якщо нічого не передали
    }

    let result = 1;
    let hasNumber = false; // щоб перевірити чи були числа

    for (let value of numbers) {

        if (typeof value === "number") {
            result *= value;   // множимо
            hasNumber = true;  // знайшли хоча б одне число
        }
    }

    if (!hasNumber) {
        return 0; // якщо не було жодного числа
    }

    return result;
}


// Task 6. Execute Callback

function executeOperation(a, b, operation) {

    if (typeof operation !== "function") {
        return "Operation must be a function";
    }

    return operation(a, b); // викликаємо функцію
}


// Task 7. Recursive Factorial

function factorial(n) {

    if (!Number.isInteger(n) || n < 0) {
        throw new Error("Invalid input");
    }

    if (n === 0) {
        return 1;
    }

    return n * factorial(n - 1);
}

// Task 8. Counter Using Closure

function createCounter(initialValue = 0) {

    let count = initialValue; // "приватна" змінна

    return function () {
        count++;        // збільшуємо
        return count;   // повертаємо
    };
}

// 9 Limited Guess Game (Closure)

function createGuessGame(secretNumber, maxAttempts = 3) {

    let attemptsLeft = maxAttempts; // скільки спроб залишилось

    return function (guess) {

        if (attemptsLeft <= 0) {
            return "Access denied";
        }

        attemptsLeft--; // зменшуємо кількість спроб

        if (guess === secretNumber) {
            return "Correct";
        }

        return "Wrong";
    };
}

// 10 Scope Demonstration

function demonstrateScope() {

    let x = 50; // зовнішня змінна

    function inner() {
        let x = 10; // внутрішня змінна (перекриває зовнішню)

        return "Inner function uses x = " + x;
    }

    let innerResult = inner();

    return innerResult + ". Outer function uses x = " + x + ".";
}