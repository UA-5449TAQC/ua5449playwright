// Арифметичні оператори
let a = 15;
let b = 4;

let sum = a + b;
let difference = a - b;
let mult = a * b;
let divis = a / b;
let remainder = a % b;
let exponentiation = a ** 2;

console.log("Сума:", sum);
console.log("Різниця:", difference);
console.log("Добуток:", mult);
console.log("Частка:", divis);
console.log("Залишок від ділення:", remainder);
console.log("Піднесення до степеня:", exponentiation);


// 2. ІНКРЕМЕНТ І ДЕКРЕМЕНТ

//префіксний інкремент - спочатку збільшує потім виводить значення
let x = 5;
let y  = ++x; 

console.log( x);// Значення x після інкременту 6
console.log("Значення y після інкременту:", y);    // Значення y після інкременту 6

//постфіксний інкремент - спочатку виводить потім збільшує значення
x = 5;
let m = x++;
console.log("Значення x після постінкременту:", x); // Значення x після постінкременту 6
console.log("Значення m після постінкременту:", m); // Значення m після постінкременту 5

//префіксний декремент - спочатку зменшує потім виводить значення
x = 5;
let n = --x;
console.log("Значення x після декременту:", x); // Значення x після декременту 4
console.log("Значення n після декременту:", n); // Значення n після декременту 4       

//постфіксний декремент - спочатку виводить потім зменшує значення
x = 5;
let p = x--;
console.log("Значення x після постдекременту:", x); // Значення x після постдекременту 4
console.log("Значення p після постдекременту:", p); // Значення p після постдекременту 5

// 3. ПРІОРІТЕТ ОПЕРАТОРІВ

let result1 = 10 + 5 * 2; // Множення виконується раніше, ніж додавання
console.log("Результат 1:", result1); // Результат 1: 20

let result2 = (2 + 3) * 4; // Дужки змінюють порядок виконання, спочатку виконується додавання, потім множення
console.log("Результат 2:", result2); // Результат 2: 20

let result3 = 10 - 5 + 2;

// 4. РОБОТА ЗІ СТРОКАМИ ТА ПРИВЕДЕННЯ ТИПІВ

console.log(5 + "2") // Результат: "52" (для "+" виконується конкатенація, число 5 перетворюється на рядок і об'єднується з рядком "2")
console.log("5" - 2) // Результат: 3 (рядок "5" перетворюється на число і виконується віднімання)
console.log("10" + true); // Результат: "10true" (для "+" виконується конкатенація, число 10 перетворюється на рядок і об'єднується з рядком "true")
console.log("10" - true); // Результат: 9 (рядок "10" перетворюється на число, а true перетворюється на 1, виконується віднімання) true це 1, а false це 0

// 5. ПОРІВНЯННЯ ТА СТРОГА РІВНІСТЬ

// Нестрога рівність (==) виконує приведення типів перед порівнянням, тоді як строга рівність (===) порівнює як значення, так і типи без приведення.

console.log(false == 0) // Результат: true (false перетворюється на 0, тому 0 == 0)
console.log(false === 0) // Результат: false (строга рівність порівнює типи, тому false (boolean) не дорівнює 0 (number))
console.log("1" == 1); // Результат: true (рядок "1" перетворюється на число 1, тому 1 == 1)           
console.log("1" === 1);  // Результат: false (строга рівність порівнює типи, тому рядок "1" (string) не дорівнює числу 1 (number))
console.log(null == undefined); // Результат: true (null і undefined вважаються рівними при нестрогому порівнянні)
console.log(null === undefined); // Результат: false (строга рівність порівнює типи, тому null (object) не дорівнює undefined (undefined))   
 
// 6. ЛОГІЧНІ ОПЕРАТОРИ
// Falsy (вважаються “хибними”): false, 0 і -0, "" (порожній рядок), null, undefined, NaN

console.log(0 || "Hello" || 5); // Результат: "Hello" 
console.log(1 && 0 && 5); // Результат: 0 
console.log(null || undefined || "JS"); // Результат: "JS" 
console.log(2 || 1 && 0); // Результат: 2 

// Умова для перевірки, чи входить число у діапазон від 0 до 100 включно

let number = 50;

if (number >= 0 || number <= 100) {
    console.log("Число входить у діапазон від 0 до 100 включно");
} else {
    console.log("Число знаходиться поза діапазоном від 0 до 100");
}

if (number <0 || number > 100) {
    console.log("Число знаходиться поза діапазоном від 0 до 100");
} else {
    console.log("Число входить у діапазон від 0 до 100 включно");
}

// 7. ТЕРНАРНИЙ ОПЕРАТОР

let age = 17;
let result = age >= 18 ? "Adult" : "Minor";
console.log(result);

// 8. КОНВЕРТАЦІЯ ТИПІВ
  // * `"25"` у число (двома способами)
let text = "25";
let numberFromText = Number(text); 
console.log(numberFromText, typeof numberFromText); 

let text2 = "25";
let numberFromText2 = +text2;
console.log(numberFromText2, typeof numberFromText2);

    //`"25.5px"` у ціле число
let text3 = "25.5px";
let numberFromText3 = parseInt(text3);
console.log(numberFromText3, typeof numberFromText3);

     //`"25.5px"` у дробове число
let text4 = "25.5px";
let numberFromText4 = parseFloat(text4);
console.log(numberFromText4, typeof numberFromText4);

   //Перевірте через `isNaN()`
   console.log(isNaN("123")); // Результат: false (рядок "123" можна перетворити на число)
    console.log(isNaN("123abc")); // Результат: true (рядок "123abc" не можна перетворити на число)
    console.log(isNaN(true)); // Результат: false (булеве значення true перетворюється на 1, що є числом)
    console.log(isNaN(undefined)); // Результат: true (undefined не є числом)


    // 9. РОБОТА З МАСИВАМИ
    const cities = ["Rome", "Lviv", "Warsaw"];
    cities[0] = "Poltava";
    cities.push("Kyiv");
    cities.unshift("New York");
    cities.pop();
    console.log(cities.length);
    let students=cities.slice(1,3);
    console.log(students);
    let cityLengths = cities.map(city => city.length);
    console.log(cityLengths);
    

// 10. УМОВНІ КОНСТРУКЦІЇ

// 1. Через if...else if...else
let number1 = 10;
if (number1 > 0) {
    console.log("Positive");
} else if (number1 < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}

// 2. Через switch
let number2 = -3;
switch (true) {
    case number2 > 0:
        console.log("Positive");
        break;
    case number2 < 0:
        console.log("Negative");
        break;
    default:
        console.log("Zero");
}

// 3. Через тернарний оператор
let number3 = 0;
let resultNumber = number3 > 0 ? "Positive" : number3 < 0 ? "Negative" : "Zero";
console.log(resultNumber);