//1. Типи даних. Створіть змінні різних типів.Виведіть у консоль значення кожної змінної та її тип за допомогою typeof.
//String
let str = "Hello, Playwright!";
console.log(str, typeof str);

//Number
let myNum = 88;
console.log(myNum, typeof myNum);

//BigInt
let bigInt = 25645686n;
console.log(bigInt, typeof bigInt);

//Boolean
let bool = true;
console.log(bool, typeof bool);

//Undefined
let word;
console.log(word, typeof word);

//Null
let nullVar = null;
console.log(nullVar, typeof nullVar);

//Object
let myObj = { name: "Yana", city: "Kyiv", age: 36 };
console.log(myObj, typeof myObj);

//Symbol
let mySymbol = Symbol("random");
console.log(mySymbol, typeof mySymbol);


//2.Динамічна типізація. 
// Створіть змінну x.Присвойте їй значення undefined.
let x;
console.log(x, typeof x);
// Потім число 45.
x = 45;
console.log(x, typeof x);
// Потім рядок "45".
x = "45";
console.log(x, typeof x);
// Поясніть, що означає "динамічна типізація". Динамічна типізація означає, що змінна може змінювати свій тип під час виконання програми.

//3.Перетворення у String.Перетворіть число 100 у рядок двома способами:через String(). Через додавання порожнього рядкаю Перевірте тип результату.
//Function String()
let a = 100;
console.log(a, typeof a);

let data String(a);
console.log(data, typeof data);
// Operation + and empty string
let a = 100;
let data = a + "";
console.log(data, typeof data);


//4.Перетворення у Number. 
// Перетворіть рядок "250" у число:
//через Number()
let a = "250";
let num = Number(a);
console.log(num, typeof num);

//через унарний +

let a = "250";
let num = +a;
console.log(num, typeof num); 

// Використайте і поясніть результат 
console.log(parseInt("12.75px")); //parseInt() перетворює рядок на ціле число, ігноруючи будь-які символи після числа. У цьому випадку він повертає 12.
console.log(parseFloat("12.75px")); //parseFloat() перетворює рядок на число з плаваючою точкой, ігноруючи будь-які символи після числа. У цьому випадку він повертає 12.75.
console.log(parseInt("text")); //parseInt() не може перетворити рядок "text" на число, тому він повертає NaN (Not a Number).



//5. Перевірка на число
//Перевірте значення за допомогою isNaN():

console.log(isNaN("123"));//isNaN() перевіряє, чи є передане значення не числом. У цьому випадку "123" є рядком, але він може бути перетворений на число, тому isNaN("123") повертає false.
console.log(isNaN("123abc"));//  isNaN("123abc") повертає true, оскільки рядок "123abc" не може бути перетворений на число.
console.log(isNaN(null));//isNaN(null) повертає false, оскільки null при перетворенні на число дає 0, а 0 не є NaN.
console.log(isNaN(undefined)); //isNaN(undefined) повертає true, оскільки undefined при перетворенні на число дає NaN.
console.log(isNaN(true));//isNaN(true) повертає false, оскільки true при перетворенні на число дає 1, а 1 не є NaN.

//6. Перетворення у Boolean
//Перевірте результат:
console.log(Boolean("Hello"));//Boolean() перетворює значення на логічний тип. У цьому випадку рядок "Hello" є непорожнім рядком, тому Boolean("Hello") повертає true.
console.log(Boolean(""));//Boolean("") повертає false, оскільки порожній рядок вважається хибним значенням.
console.log(Boolean(0));//Boolean(0) повертає false, оскільки 0 вважається хибним значенням.
console.log(Boolean(1));//Boolean(1) повертає true, оскільки 1 вважається істинним значенням.
console.log(Boolean(null));//Boolean(null) повертає false, оскільки null вважається хибним значенням.
console.log(Boolean(undefined));///Boolean(undefined) повертає false, оскільки undefined вважається хибним значенням.
//Використайте подвійне заперечення !! для тих самих значень.
console.log(!!"Hello");//Подвійне заперечення !! перетворює значення на логічний тип. У цьому випадку !!"Hello" повертає true, оскільки "Hello" є непорожнім рядком.
console.log(!!"");// !!"" повертає false, оскільки порожній рядок вважається хибним значенням.
console.log(!!0);// !!0 повертає false, оскільки 0 вважається хибним значенням.
console.log(!!1);// !!1 повертає true, оскільки 1 вважається істинним значенням.
console.log(!!null);// !!null повертає false, оскільки null вважається хибним значенням.
console.log(!!undefined);// !!undefined повертає false, оскільки undefined вважається хибним значенням.

// Поясніть, які значення є falsy.
// Falsy значення в JavaScript: false, 0, -0, 0n, "", null, undefined, NaN.

//7. Пріоритет операторів
//Обчисліть та поясніть результат:

console.log(10 - 20 / 5);//Результат буде 6, оскільки оператор ділення (/) має вищий пріоритет, ніж оператор віднімання (-). Спочатку виконується ділення 20 на 5, що дає 4, а потім віднімаємо цей результат від 10, отримуючи 6.
console.log(2 ** 4 * 2);//Результат буде 32, оскільки оператор піднесення до степеня (**) має вищий пріоритет, ніж оператор множення (*). Спочатку виконується 2 ** 4, що дає 16, а потім множимо цей результат на 2, отримуючи 32.
//Змініть порядок виконання за допомогою дужок
console.log((10 - 20) / 5);//Результат буде -2, оскільки дужки змінюють порядок виконання. Спочатку виконується віднімання 10 - 20, що дає -10, а потім ділимо цей результат на 5, отримуючи -2.
console.log((2 ** 4) * 2);//Результат буде 32, оскільки дужки змінюють порядок виконання. Спочатку виконується піднесення до степеня 2 ** 4, що дає 16, а потім множимо цей результат на 2, отримуючи 32.


//8. Робота з масивами (базові операції)
// Створіть масив з 4 елементів (рядки або числа).
let array =["white", "black", "red", "yellow"];
console.log(array);
// Виведіть перший та останній елемент.
console.log(array[0]); // "white"
console.log(array[array.length - 1]); // "yellow"

// Замініть другий елемент.
array[1] = "blue";
console.log(array); // ["white", "blue", "red", "yellow"]
// Додайте новий елемент з індексом 6.
array[6] = "green";
console.log(array); // ["white", "blue", "red", "yellow", empty × 2, "green"]
// Виведіть довжину масиву.
console.log(array.length); // 7
// Переберіть масив:

// через for
for (let y = 0; y < array.length; y++) {
  console.log(array[y]);
}

// через for...of
for (let element of array) {
  console.log(element);
}  


//9. Методи масивів
//Створіть масив чисел:

const numbers = [2, 4, 6, 8, 10];
console.log(numbers);
//Додайте число в кінець (push).
numbers.push(12);
console.log(numbers);
// Видаліть останній елемент (pop).
numbers.pop();
console.log(numbers);
// Видаліть перший елемент (shift).
numbers.shift();
console.log(numbers);
// Додайте елемент на початок (unshift).
numbers.unshift(0);
console.log(numbers);
// Використайте slice() для створення нового масиву.
const newNumbers = numbers.slice(1, 4);// Метод slice() створює новий масив, який містить елементи з індексами від 1 до 3 (4 не включно) з масиву numbers. У цьому випадку newNumbers буде містити [4, 6, 8].
console.log(newNumbers);
// Використайте splice() для видалення елемента за індексом.
newNumbers.splice(2, 1);// Метод splice() видаляє 1 елемент за індексом 2 з масиву newNumbers. У цьому випадку він видалить число 8, і newNumbers буде містить [4, 6].   
console.log(newNumbers);


//10. Створіть масив:

const numbers2 = [5, 10, 15, 20, 25];
console.log(numbers2);
// За допомогою map() створіть новий масив, де кожне число помножене на 2.
const newNumbers2 = numbers2.map(num => num * 2);
console.log(newNumbers2);
// За допомогою filter() отримайте числа більше 12.
const filteredNumbers2 = numbers2.filter(num => num > 12);
console.log(filteredNumbers2);
// За допомогою reduce() знайдіть суму всіх елементів.
const sum2 = numbers2.reduce((acc, curr) => acc + curr, 0);
console.log(sum2);