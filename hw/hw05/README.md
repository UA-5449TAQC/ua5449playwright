# 🧠 Homework: Functions in JavaScript (No Objects)

> ⚠️ Important:
- All tasks must be solved **only by creating your own functions**.
- Do NOT use objects.
- Do NOT use classes.
- Do NOT write global execution logic (everything must be inside functions).
- Functions must return values (avoid console.log inside unless explicitly needed for testing).

---

## 🔹 Task 1. Conditional Sum

Create a function:

```js
function sumWithConditions(limit) {}
```

Requirements:

* Use a `while` loop.
* Sum numbers from `1` to `limit`.
* Skip numbers divisible by 3.
* Stop if number becomes greater than 40.
* Return the final sum.

### Example:

```js
sumWithConditions(50); 
// Example result: 547
```

---

## 🔹 Task 2. Multiplication Table as String

Create a function:

```js
function generateMultiplicationTable(size) {}
```

Requirements:

* Use nested `for` loops.
* Generate multiplication table from 1 to `size`.
* Return the result as a single formatted string.
* Each expression must be on a new line.

### Example:

```js
generateMultiplicationTable(3);

/*
"1 x 1 = 1
1 x 2 = 2
1 x 3 = 3
2 x 1 = 2
...
3 x 3 = 9"
*/
```

---

## 🔹 Task 3. Smart Calculator

Create a function:

```js
function calculate(a, b, operator) {}
```

Requirements:

* Support: `+`, `-`, `*`, `/`
* Handle division by zero
* Return `"Invalid operator"` if incorrect operator
* Return result

### Example:

```js
calculate(10, 5, "+");  // 15
calculate(10, 0, "/");  // "Cannot divide by zero"
calculate(10, 5, "%");  // "Invalid operator"
```

---

## 🔹 Task 4. Power Function (Without **)

Create a function:

```js
function power(base, exponent) {}
```

Requirements:

* Use a loop (not `**`)
* Handle exponent = 0
* Handle negative exponent (return string `"Negative exponent not supported"`)

### Example:

```js
power(2, 3);  // 8
power(5, 0);  // 1
power(2, -2); // "Negative exponent not supported"
```

---

## 🔹 Task 5. Multiply All Numbers (Rest Parameters)

Create a function:

```js
function multiplyAll(...numbers) {}
```

Requirements:

* Multiply only numeric values
* Ignore non-number values
* If no valid numbers → return 0
* If no arguments → return 1

### Example:

```js
multiplyAll(2, 3, 4);     // 24
multiplyAll(2, "a", 4);   // 8
multiplyAll("a", "b");    // 0
multiplyAll();            // 1
```

---

## 🔹 Task 6. Execute Callback

Create a function:

```js
function executeOperation(a, b, operation) {}
```

Requirements:

* Check that `operation` is a function
* If not → return `"Operation must be a function"`
* Execute callback and return result

### Example:

```js
function sum(a, b) {
  return a + b;
}

executeOperation(10, 5, sum);      // 15
executeOperation(10, 5, "sum");    // "Operation must be a function"
```

---

## 🔹 Task 7. Recursive Factorial

Create a function:

```js
function factorial(n) {}
```

Requirements:

* Validate that n is integer ≥ 0
* Support `0! = 1`
* Throw Error if invalid input
* Use recursion
* Return result

### Example:

```js
factorial(5);   // 120
factorial(0);   // 1
factorial(-2);  // Error
```

---

## 🔹 Task 8. Counter Using Closure

Create a function:

```js
function createCounter(initialValue = 0) {}
```

Requirements:

* Use closure
* Keep `count` private
* Return a function (not object)
* Each call increases count by 1
* Return updated value

### Example:

```js
const counter = createCounter(5);

counter(); // 6
counter(); // 7
counter(); // 8
```

---

## 🔹 Task 9. Limited Guess Game (Closure)

Create a function:

```js
function createGuessGame(secretNumber, maxAttempts = 3) {}
```

Requirements:

* Use closure
* Store remaining attempts
* Return inner function that accepts guessed number
* After attempts finished → always return `"Access denied"`
* Return `"Correct"` or `"Wrong"`

### Example:

```js
const guess = createGuessGame(7, 2);

guess(3); // "Wrong"
guess(5); // "Wrong"
guess(7); // "Access denied"
```

---

## 🔹 Task 10. Scope Demonstration

Create a function:

```js
function demonstrateScope() {}
```

Requirements:

* Inside function declare variable `x = 50`
* Inside nested function declare variable `x = 10`
* Return a string explaining which value is used where
* Demonstrate shadowing
* Do NOT use objects

### Example:

```js
demonstrateScope();

/*
Example return value:

"Inner function uses x = 10.
Outer function uses x = 50."
*/
```

---

# ✅ Submission Requirements

* All logic must be inside functions.
* No objects.
* No classes.
* Use `let` and `const`.
* Add comments explaining important parts.
* Submit via Pull Request.

🚀 Focus on functions, scope, recursion, and closures.

