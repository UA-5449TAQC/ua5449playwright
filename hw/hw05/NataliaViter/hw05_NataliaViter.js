//Task 1. Conditional Sum

/* function sumWithConditions(limit) {
    let sum = 0;
    let i = 1;
    while(i <= limit) {
        if (i > 40) {
            break;
        }
        if (i % 3 !== 0) {
            sum += i;
        }
        i++
    }
    return sum;
}
console.log(sumWithConditions(20));//147 */

//Task 2. Multiplication Table as String

/* function generateMultiplicationTable(size) {
    let result = "";
    for (let i = 1; i <=size; i++) {
        for (let a = 1; a <= size; a++) {
            result += i + " x " + a + " = " + (i * a) + "\n";
        }
    }
    return result;
}
console.log(generateMultiplicationTable(2));//1 x 1 = 1 1 x 2 = 2 2 x 1 = 2 2 x 2 = 4 */

//Task 3. Smart Calculator

/* function calculate(a, b, operator) {
    if (operator === "+") {
        return a + b;
    } 
    else if (operator === "-") {
        return a - b;
    } 
    else if (operator === "*") {
        return a * b;
    } 
    else if (operator === "/") {
        if (b === 0) {
            return "Cannot divide by zero";
        }
        return a / b;
    } 
    else {
        return "Invalid operator";
    }
}
console.log(calculate(6, 2, "+"));//8
console.log(calculate(6, 2, "-"));//4
console.log(calculate(6, 2, "*"));//12
console.log(calculate(6, 2, "/"));//3
console.log(calculate(6, 0, "/")); // Cannot divide by zero
console.log(calculate(6, 2, "%")); // Invalid operator */

//Task 4. Power Function (Without **)

/* function power(base, exponent) {
    if (exponent < 0) {
        return "Negative exponent not supported";
    }
    if (exponent === 0) {
        return 1;
    }
    let result = 1;
    for (let i = 1; i <= exponent; i++) {
        result *= base;
    }
    return result;
}
console.log(power(2, 3));//8
console.log(power(5, 6));//15625
console.log(power(0, 1));//0
console.log(power(3, -6));//Negative exponent not supported */

//Task 5. Multiply All Numbers (Rest Parameters)

/* function multiplyAll(...numbers) {
    if (numbers.length === 0) {
        return 1;
    }
    let item = 1;
    let hasValidNumber = false;
    for (let i = 0; i < numbers.length; i++) {
        if (typeof numbers[i] === "number" && !isNaN(numbers[i])) {
            item *= numbers[i];
            hasValidNumber = true;
        }
    }
    if (!hasValidNumber) {
        return 0;
    }
    return item;
}
console.log(multiplyAll(1, 2, 3));// 6
console.log(multiplyAll(4, "a", "b"));//4
console.log(multiplyAll("a", "b"));//0
console.log(multiplyAll());//1 */

//Task 6. Execute Callback

/* function executeOperation(a, b, operation) {
    if (typeof operation !== "function") {
        return "Operation must be a function";
    }

    return operation(a, b);
}
function sum(x, y) {
    return x + y;
};
console.log(executeOperation(2, 8, sum));//10
console.log(executeOperation(2, 8, "sum"));// Operation must be a function */

//Task 7. Recursive Factorial

/* function factorial(n) {
    if (!Number.isInteger(n) || n < 0) {
        throw new Error("Input must be an integer greater than or equal to 0");
    }
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}
try {
    console.log(factorial(6));  // 720
    console.log(factorial(0));  // 1
    console.log(factorial(-1)); // Input must be an integer greater than or equal to 0
} catch (error) {
    console.log(error.message);
} */

//Task 8. Counter Using Closure

/* function createCounter(initialValue = 0) {
    let count = initialValue;
    return function () {
        count++;
        return count;
    };
}
const counter1 = createCounter(25);
console.log(counter1());//1
console.log(counter1());//1
console.log(counter1());//1
console.log(counter1());//1
console.log(counter1());//1 */

//Task 9. Limited Guess Game (Closure)

/* function createGuessGame(secretNumber, maxAttempts = 3) {
    let remainingAttempts = maxAttempts;
    return function (guess) {
        if (remainingAttempts <= 0) {
            return "Access denied";
        }
        remainingAttempts--;
        if (guess === secretNumber) {
            return "Correct";
        } else {
            return "Wrong";
        }
    };
}
const game = createGuessGame(8, 2);
console.log(game(5)); // Wrong
console.log(game(8)); // Correct
console.log(game(8)); // Access denied */

//Task 10. Scope Demonstration

function demonstrateScope() {
    let x = 50;
    function innerFunction() {
        let x = 10; // shadowing
        return "Inside innerFunction x = " + x;
    }
    let outerMessage = "Inside demonstrateScope x = " + x;
    let innerMessage = innerFunction();
    return outerMessage + "\n" + innerMessage;
}
console.log(demonstrateScope());//Inside demonstrateScope x = 50 Inside innerFunction x = 10