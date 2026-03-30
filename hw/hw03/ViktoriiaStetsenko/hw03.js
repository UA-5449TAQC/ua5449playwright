//1️. Арифметичні оператори
let a = 15;
let b = 4;

console.log(a + b); 
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a**2);

//2. Інкремент та декремент
let x = 5;

console.log(++x); 
console.log(x++);
console.log(--x);
/* Різниця між перфіксною і постфіксною формами полягає в тому, що префіксна форма збільшує/зменшує 
значення змінної перед її використанням, тоді як постфіксна форма спочатку збільшує/зменшує 
значення змінної після її використання.*/

// 3.Пріоритет операторів
let result1 = 2 + 3 * 4; // Результат: 14
let result2 = (2 + 3) * 4; // Результат: 20
let result3 = 10 - 5 + 2; // Результат: 7
/*Порядок виконання операцій визначається пріоритетом операторів. 
У виразі `result1`, оператор множення (*) має вищий пріоритет, тому виконується першим.
У виразі `result2`, дужки змінюють порядок виконання, тому спочатку виконується дія в дужках.
У виразі `result3`, оператори мають однаковий пріоритет, тому вони виконуються зліва направо.*/

//4.Робота зі строками та приведення типів
console.log(5 + "2"); // Результат: "52" (число 5 перетворюється на рядок і об'єднується з "2")
console.log("5" - 2); // Результат: 3 (рядок "5" перетворюється на число і віднімається 2)
console.log("10" + true); // Результат: "10true" (булеве значення true перетворюється на рядок і об'єднується з "10")
console.log("10" - true); // Результат: 9 (рядок "10" перетворюється на число, а true на 1, потім виконується віднімання)

//5.Порівняння та строга рівність

console.log(false == 0);
console.log(false === 0);
console.log("1" == 1);
console.log("1" === 1);
console.log(null == undefined);
console.log(null === undefined);
/* Різниця між `==` та `===` полягає в тому, що `==` виконує нестроге порівняння, яке дозволяє приводити типи, 
тоді як `===` виконує строго порівняння, яке не дозволяє приводити типи.*/

//6.Логічні оператори
console.log(0 || "Hello" || 5);
console.log(1 && 0 && 5);
console.log(null || undefined || "JS");
console.log(2 || 1 && 0);

let num = 50;
console.log(num>=0 && num <=100);
console.log(num<0 || num >100);

//7.Тернарний оператор
let age =20;
let result = age >=18 ? "Adult" : "Minor";
console.log(result);

//8. Конвертація типів
console.log(Number("25")); 
console.log(+"25");
console.log(parseInt("25.5px"));
console.log(parseFloat("25.5px"));

console.log(isNaN("123"));
console.log(isNaN("123abc"));
console.log(isNaN(true));
console.log(isNaN(undefined));

/*`isNaN("123")` - повертає false, оскільки "123" можна конвертувати в число.
`isNaN("123abc")` - повертає true, оскільки "123abc" не можна конвертувати в число.
`isNaN(true)` - повертає false, оскільки true конвертується в 1, що є числом.
`isNaN(undefined)` - повертає true, оскільки undefined не можна конвертувати в число.*/

//9. Робота з масивами

const cities = ["Rome", "Lviv", "Warsaw"];
cities[0] = "Kyiv";
cities.push("Berlin");
cities.unshift("Paris");
cities.pop();
console.log(cities.length);

const newCities = cities.slice(0, 2);
console.log(newCities);

const cityLengths = cities.map(city => city.length);
console.log(cityLengths);

//10. Умовні конструкції

let number = 15;
if (number > 0) {
  console.log("Positive")
} else if (number < 0){
  console.log ("Negative")
}else {
  console.log ("Zero")
}

switch (true) {
    case number > 0:
        console.log('Positive');
        break;
    case number < 0:
        console.log('Negative');
        break;
    case number === 0:
        console.log('Zero');
        break;
}
let newresult = number > 0 ? "Positive" : number < 0 ? "Negative" : "Zero";
console.log(newresult);