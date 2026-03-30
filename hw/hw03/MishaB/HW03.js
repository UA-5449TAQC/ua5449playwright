// 1. Арифметичні оператори
let a = 15;
let b = 4;
console.log(a+b); //сума
console.log(a - b); //різниця
console.log(a * b); //добуток
console.log(a / b); //частка
console.log(a % b); // остача від ділення
console.log(a ** 2); // піднесення до степеня


// 2️⃣ Інкремент та декремент
let x = 5;
console.log(++x); // префіксний інкремент: спочатку збільшує x на 1, потім повертає нове значення (6)
console.log(x++); // постфіксний інкремент: спочатку повертає поточне значення x (6), потім збільшує x на 1 (тепер x стає 7)
console.log(--x); // префіксний декремент: спочатку зменшує x на 1, потім повертає нове значення (6)
//++x → спочатку змінює, потім використовує
// x++ → спочатку використовує, потім змінює

// 3️⃣ Пріоритет операторів
let result1 = 2 + 3 * 4;
let result2 = (2 + 3) * 4;
let result3 = 10 - 5 + 2;
console.log(result1); // 14, бо множення має вищий пріоритет, ніж додавання
console.log(result2); // 20, бо дужки змінюють порядок виконання операцій
console.log(result3); // 7, бо оператори однакової пріоритетності виконуються зліва направо

// 4️⃣ Робота зі строками та приведення типів
console.log(5 + "2");// "52" - число 5 перетворюється на строку і відбувається конкатенація
console.log("5" - 2);// 3 - строка "5" перетворюється на число і виконується віднімання
console.log("10" + true);// "10true" - число 10 перетворюється на строку і відбувається конкатенація
console.log("10" - true);// 9 - строка "10" перетворюється на число, true перетворюється на 1, виконується віднімання   


// 5️⃣ Порівняння та строга рівність
console.log(false == 0);// true - false перетворюється на 0, тому 0 == 0
console.log(false === 0);// false - це логічне значення, а 0 - це число, тому вони не однакові за типом
console.log("1" == 1);// true - строка "1" перетворюється на число 1, тому 1 == 1
console.log("1" === 1);// false - це строка, а 1 - це число, тому вони не однакові за типом
console.log(null == undefined);// true - null і undefined вважаються рівними при нестрогому порівнянні
console.log(null === undefined);// false - null і undefined не однакові за типом

// 6️⃣ Логічні оператори
console.log(0 || "Hello" || 5);// "Hello" - оператор || повертає перше істинне значення, а 0 є хибним, тому повертається "Hello"
console.log(1 && 0 && 5);// 0 - оператор && повертає перше хибне значення, а 1 є істинним, тому повертається 0
console.log(null || undefined || "JS");// "JS" - оператор || повертає перше істинне значення, null і undefined є хибними, тому повертається "JS"
console.log(2 || 1 && 0);// 2 - оператор && має вищий пріоритет, тому спочатку виконується 1 && 0, що дає 0, потім 2 || 0 дає 2

let num = 53;
if (num >= 0 && num <= 100) {
    console.log("Число входить в діапазон");
}
if (num < 0 || num > 100) {
    console.log("Число поза діапазоном");
}


//7️⃣ Тернарний оператор

let age = 09;
let status = (age >= 18) ? "Adult" : "Minor";
console.log(status);  


// 8️⃣ Конвертація типів

// "25" → число (2 способи)
Number("25");
+"25";

// "25.5px" → ціле число
parseInt("25.5px");

// "25.5px" → дробове число
parseFloat("25.5px");

isNaN("123");   // false - "123" можна конвертувати в число 123, яке не є NaN
isNaN("123abc");    // true - "123abc" не можна конвертувати в число, отже результат NaN
isNaN(true);        // false - true конвертується в 1, яке не є NaN
isNaN(undefined);   // true - undefined не можна конвертувати в число, отже результат NaN



// 9️⃣ Робота з масивами

const cities = ["Rome", "Lviv", "Warsaw"];
cities[0] = "New-York"; // заміна першого елемента масиву на "New-York"
cities.push("Orlando"); // додавання "Orlando" в кінець масиву
cities.unshift("Terra"); // додавання "Terra" на початок масиву
cities.pop(); // видалення останнього елемента масиву ("Orlando")
console.log(cities.length); // 4 - довжина масиву після додавання та видалення елементів

const newCities = cities.slice(0, 2); // створення нового масиву з елементів з індексами 0 та 1
console.log(newCities); // ["Terra", "New-York"]


// 🔟 Умовні конструкції

let number = 13;

// 1. Через if...else if...else
if (number > 0) {
  console.log("Positive");
} else if (number < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}

// 2. Через switch
switch (true) {
  case number > 0:
    console.log("Positive");
    break;
  case number < 0:
    console.log("Negative");
    break;
  default:
    console.log("Zero");
}

// 3. Через тернарний оператор
let result = number > 0 ? "Positive" : number < 0 ? "Negative" : "Zero";
console.log(result);