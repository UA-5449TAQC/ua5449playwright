//1. Арифметичні оператори


let a = 15;
let b = 4;

console.log(a + b);// додавання
console.log(a - b);// віднімання
console.log(a * b);// множення
console.log(a % b);// остача від ділення
console.log(a ** 2);// піднесення до степеня

//2. Оператори інкременту та декременту 

let x = 5;
console.log(x); // 5

x = 5;
console.log(++x); // значення x збільшилося на 1 і було використане

x = 5;
console.log(x++); // спершу було використане існуюче значення x і після того воно було збільшене на 1

x = 5;
console.log(--x); // зменшення x на 1

// Префіксний (++x / --x) — спочатку змінює значення,
// потім повертає його.
// Постфіксний (x++ / x--) — спочатку повертає старе значення,
// а вже після цього змінює його.


//3.Пріоритет операторів
//Обчисліть результат:

let result1 = 2 + 3 * 4;
console.log(result1) // Результат буде 14, оскільки множення має вищий пріоритет, ніж додавання. Спочатку виконується 3 * 4, що дає 12, а потім додається 2, отримуючи 14.
let result2 = (2 + 3) * 4;
console.log(result2) // Результат буде 20, оскільки дужки змінюють порядок виконання операцій. Спочатку виконується додавання 2 + 3, що дає 5, а потім цей результат множиться на 4, отримуючи 20.
let result3 = 10 - 5 + 2;
console.log(result3) // Результат буде 7, оскільки оператори додавання і віднімання мають однаковий пріоритет і виконуються зліва направо. Спочатку виконується 10 - 5, що дає 5, а потім додається 2, отримуючи 7.


//5. Порівняння та строга рівність

console.log(false == 0);
console.log(false === 0);
console.log("1" == 1);
console.log("1" === 1);
console.log(null == undefined);
console.log(null === undefined);

//== порівнює тільки значення і може автоматично змінювати типи даних.
//=== порівнює і значення, і тип даних без автоматичного перетворення.

//6. Логічні оператори

console.log(0 || "Hello" || 5);
console.log(1 && 0 && 5);
console.log(null || undefined || "JS");
console.log(2 || 1 && 0);

a =5
console.log(a >= 0 && a <= 100); //чи число входить у діапазон від 0 до 100 включно
console.log(a < 0 || a > 100); //чи число знаходиться поза цим діапазоном

//7. Тернарний оператор
let age = 36;
let result = age >= 18 ? "Adult" : "Minor";
console.log(result);

//8. Конвертація типів

// "25" у число (двома способами)
//"25.5px" у ціле число
//"25.5px" у дробове число

let g = "20";
let num = Number(g);
console.log(num); 
console.log(typeof num);

let k = "20";
let num2 = +k;
console.log(num2);     
console.log(typeof num2);

let m = "25.5px";
let num3 = parseInt(m);
console.log(num3);     
console.log(typeof num3);   

let n = "25.5px";
let num4 = parseFloat(n);
console.log(num4);     
console.log(typeof num4);


//2.часстина
console.log(isNaN("123")); //isNaN() перевіряє, чи є передане значення не числом. У цьому випадку "123" є рядком, але він може бути перетворений на число, тому isNaN("123") повертає false.
console.log(isNaN("123abc")); // true, оскільки "123abc" не може бути перетворено на число
console.log(isNaN(true)); // false, оскільки true перетворюється на 1
console.log(isNaN(undefined)); // true, оскільки undefined не є числом

//9. Робота з масивами

const cities = ["Rome", "Lviv", "Warsaw"];
console.log(cities.length); 
cities[0] = "Kyiv"; // Замініть перший елемент
cities.push("Berlin"); // Додайте елемент у кінець масиву
cities.unshift("Paris"); // Додайте елемент на початок
cities.pop(); // Видаліть останній елемент
console.log(cities.length); // Виведіть довжину масиву
const moreCities = cities.slice(1, 3); // Створіть новий масив, використовуючи slice()
const cityLengths = cities.map(city => city.length); // Використайте map() для створення нового масиву з довжиною назв міст
console.log(cityLengths);


//10.Умовні конструкції


// Створіть змінну number.
let number = 6;

if (number > 0) {
    console.log("Positive");
} else if (number < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}

// Через switch
switch (true) {
    case number > 0:
        console.log("Positive");
        break;
    case number < 0:
        console.log("Negative");
        break;
    case number === 0:
        console.log("Zero");
        break;
}

// Через тернарний оператор
let result6 = number > 0 ? "Positive" : number < 0 ? "Negative" : "Zero";
console.log(result6);
