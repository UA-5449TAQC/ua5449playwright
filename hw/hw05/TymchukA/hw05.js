// 1. Conditional Sum
function sumWithConditions(limit) {
  let sum = 0;       // змінна для накопичення суми
  let number = 1;    // починаємо рахувати з 1

  // цикл працює поки number <= limit
  while (number <= limit) {

    // якщо число стало більше 40 — зупиняємо цикл
    if (number > 40) {
      break;
    }

    // якщо число НЕ ділиться на 3 — додаємо до суми
    if (number % 3 !== 0) {
      sum += number;
    }

    // переходимо до наступного числа
    number += 1;
  }

  // повертаємо фінальну суму
  return sum;
}

// 2. Multiplication Table as String
function generateMultiplicationTable(size) {
  let result = ""; // тут будемо накопичувати рядок таблиці

  // зовнішній цикл — перше число в множенні
  for (let i = 1; i <= size; i += 1) {

    // внутрішній цикл — друге число
    for (let j = 1; j <= size; j += 1) {

      // додаємо вираз у рядок
      result += `${i} x ${j} = ${i * j}`;

      // додаємо перенос рядка, крім останнього елемента
      if (!(i === size && j === size)) {
        result += "\n";
      }
    }
  }

  // повертаємо готову таблицю
  return result;
}
// 3. Smart Calculator
function calculate(a, b, operator) {

  // перевіряємо оператор і виконуємо відповідну операцію
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

    // перевірка ділення на нуль
    if (b === 0) {
      return "Cannot divide by zero";
    }

    return a / b;
  }

  // якщо оператор не підтримується
  return "Invalid operator";
}
// 4. Power Function (Without **)
function power(base, exponent) {

  // якщо показник степеня від'ємний — повертаємо повідомлення
  if (exponent < 0) {
    return "Negative exponent not supported";
  }

  // будь-яке число в степені 0 = 1
  if (exponent === 0) {
    return 1;
  }

  let result = 1;

  // множимо base саме на себе exponent разів
  for (let i = 0; i < exponent; i += 1) {
    result *= base;
  }

  return result;
}
// 5. Multiply All Numbers (Rest Parameters)
function multiplyAll(...numbers) {

  // якщо аргументів взагалі немає
  if (numbers.length === 0) {
    return 1;
  }

  let product = 1;          // результат множення
  let hasValidNumber = false; // чи знайдено хоча б одне число

  for (let i = 0; i < numbers.length; i += 1) {

    // перевіряємо, чи елемент є числом
    if (typeof numbers[i] === "number" && !Number.isNaN(numbers[i])) {
      product *= numbers[i];
      hasValidNumber = true;
    }
  }

  // якщо аргументи були, але жоден не число
  if (!hasValidNumber) {
    return 0;
  }

  return product;
}
// 6. Execute Callback
function executeOperation(a, b, operation) {

  // перевіряємо, чи operation є функцією
  if (typeof operation !== "function") {
    return "Operation must be a function";
  }

  // викликаємо передану функцію
  return operation(a, b);
}
// 7. Recursive Factorial
function factorial(n) {

  // перевіряємо, що n — ціле число >= 0
  if (!Number.isInteger(n) || n < 0) {
    throw new Error("Input must be an integer greater than or equal to 0");
  }

  // базовий випадок рекурсії
  if (n === 0 || n === 1) {
    return 1;
  }

  // рекурсивний виклик
  return n * factorial(n - 1);
}
// 8. Counter Using Closure
function createCounter(initialValue = 0) {

  let count = initialValue; // приватна змінна

  // повертаємо функцію, яка має доступ до count
  return function () {
    count += 1;
    return count;
  };
}
// 9. Limited Guess Game (Closure)
function createGuessGame(secretNumber, maxAttempts = 3) {

  let remainingAttempts = maxAttempts;

  // функція для перевірки числа
  return function (guessedNumber) {

    // якщо спроб більше немає
    if (remainingAttempts <= 0) {
      return "Access denied";
    }

    remainingAttempts -= 1;

    if (guessedNumber === secretNumber) {
      return "Correct";
    }

    return "Wrong";
  };
}

// 10. Scope Demonstration
function demonstrateScope() {

  let x = 50; // змінна у зовнішній функції

  function innerFunction() {

    // ця змінна перекриває зовнішню (shadowing)
    let x = 10;

    return `Inner function uses x = ${x}.`;
  }

  return `${innerFunction()}\nOuter function uses x = ${x}.`;
}