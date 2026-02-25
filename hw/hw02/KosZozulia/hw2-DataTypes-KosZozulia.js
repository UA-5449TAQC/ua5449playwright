///1 ТИПИ ДАНИХ

let strValue = "Kos Matros";
console.log(typeof strValue);

let numbValue = 45;
console.log(typeof numbValue);

let bigIn = 20n;
console.log(typeof bigIn);

let boolValue = true;
console.log(typeof boolValue); 

let undefValue;
console.log(typeof undefValue);

let objValue = {name: "Kos", age: 35};
console.log(typeof objValue);

let symValue = Symbol("sym");
console.log(typeof symValue);   

let nulValue = null;
console.log(nulValue);
console.log(typeof nulValue);

// 2 Динамічна типізація

let x = undefined;
console.log(x, typeof x);

x = 45;
console.log(x, typeof x);

x= "45";
console.log(x, typeof x);

// Динамічна типізація дає змогу змінити тип змінної в процесі виконання коду програми.

// 3.  Перетворення у String

let num = 100;
let strNum = String(num);
console.log(strNum, typeof strNum);

let num2 = 100;
let strNum2 = num2+"";
console.log(strNum2, typeof strNum2);

// 4.  Перетворення у Number
let value = "250";
let numValue = Number(value);
console.log(numValue, typeof numValue);

let value2 = "250";
let numValue2 = +value2;
console.log(numValue2, typeof numValue2);

console.log(parseInt("12.75px")); // повертає тільки цілу частину числа, ігноруючи все після крапки (12)
console.log(parseFloat("12.75px")); // повертає число з плаваючою крапкою, включаючи дробну частину (12.75)
console.log(parseInt("text")); // повертає NaN, оскільки рядок не містить числа взагалі

// 5. Перевірка на число
console.log(isNaN("123")); // false, оскільки "123" можна перетворити на число
console.log(isNaN("123abc")); // true, оскільки "123abc" не можна перетворити на число
console.log(isNaN(null)); // false, оскільки null перетворюється на 0
console.log(isNaN(undefined)); // true, оскільки undefined не є числом
console.log(isNaN(true)); // false, оскільки true перетворюється на 1

// 6 Перетворення у Boolean
let str = "Hello";
let boolStr = Boolean(str);
console.log(boolStr, typeof boolStr); // true, оскільки непорожній рядок перетворюється на true

let str1 = "";
let boolStr1 = Boolean(str1);
console.log(boolStr1, typeof boolStr1); // false, оскільки порожній рядок перетворюється на false

let num3 = 0;
let boolNum3 = Boolean(num3);
console.log(boolNum3, typeof boolNum3); // false, оскільки 0 перетворюється на false   

let num4 = 1;
let boolNum4 = Boolean(num4);
console.log(boolNum4, typeof boolNum4); // true, оскільки будь-яке число, крім 0, перетворюється на true

let nullValue2 = null;
let boolNull = Boolean(nullValue2);
console.log(boolNull, typeof boolNull); // false, оскільки null перетворюється на false 

let undefValue2 = undefined;
let boolUndef = Boolean(undefValue2);
console.log(boolUndef, typeof boolUndef); // false, оскільки undefined перетворюється на false

let not = "1";
let boolNot = !!not;
console.log(boolNot, typeof boolNot); // true, оскільки "1" перетворюється на true, а !! використовується для подвійного логічного заперечення, щоб отримати булеве значення

// 7. Пріорітет операторів
console.log(10 - 20 / 5); // (6) Спочатку виконується ділення (20 / 5 = 4), потім віднімання (10 - 4 = 6)
console.log((10 - 20) / 5); // (-2) Спочатку виконується дужки (10 - 20 = -10), потім ділення (-10 / 5 = -2)    

console.log(2 ** 4 * 2); // (32) Спочатку виконується піднесення до степеня (2 ** 4 = 16), потім множення (16 * 2 = 32)
console.log(2 ** (4 * 2)); // (256) Спочатку виконується дужки (4 * 2 = 8), потім піднесення до степеня (2 ** 8 = 256)

// 8 Робота з масивами

let StudentKos = ["Kos", "Matros", 35, 185];
console.log(StudentKos[0]); // "Kos"
console.log(StudentKos[3]); // 185

StudentKos[1] = "Zozulia";
console.log(StudentKos[1]); // "Zozulia"

StudentKos[6] = "QA Engineer";
console.log(StudentKos[6]); // "QA Engineer"

console.log(StudentKos.length); // 7, оскільки масив тепер містить 7 елементів (індекси від 0 до 6) 

let StudentKos = ["Kos", "Matros", 35, 185];
for (let i = 0; i < StudentKos.length; i++) {
    console.log(StudentKos[i]);
}

let StudentKos = ["Kos", "Matros", 35, 185];
for (let element of StudentKos) {
    console.log(element);
}

// 9 Методи масивів

const numbers = [2, 4, 6, 8, 10];
push(numbers, 12);
console.log(numbers); // [2, 4, 6, 8, 10, 12]   Додався елемент в кінцець масиву 
pop (numbers);
console.log(numbers); // [2, 4, 6, 8, 10]  Видалився останній елемент масиву
shift(numbers);
console.log(numbers); // [4, 6, 8, 10] Видалився перший елемент масиву
unshift(numbers, 0);
console.log(numbers); // [0, 4, 6, 8, 10] Додався елемент в початок масиву
slice (numbers, 0, 10);
console.log(numbers); // [0, 4, 6, 8, 10] Метод slice не змінює оригінальний масив, він повертає новий масив, який містить вибрані елементи. У цьому випадку, оскільки ми не зберегли результат виклику slice в нову змінну, оригінальний масив numbers залишається незмінним.
splice (numbers, 2);
console.log(numbers); // [0, 4] Метод splice видаляє елементи з масиву, починаючи з вказаного індексу (2) і видаляє всі елементи до кінця масиву. У цьому випадку, елементи 6, 8 і 10 були видалені, залишивши лише 0 і 4 в масиві.

// 10 Методи map, filter, reduce

const numberss = [5, 10, 15, 20, 25];
const kvadratNumbers = numberss.map(function(num) {return num** 2})
console.log(kvadratNumbers); // [25, 100, 225, 400, 625] Метод map створює новий масив, де кожен елемент є результатом функції  для відповідного елемента в оригінальному масиві numbers. Кожне число підніс до квадрату.


const bigger12 = numberss.filter(function(num) {return num > 12});
console.log(bigger12); // [15, 20, 25] Метод filter створює новий масив, який містить лише ті елементи оригінального масиву, які більші за 12 були включені в новий масив.

function reducer (total,value) {return total + value};
const sum = numberss.reduce(reducer);
console.log(sum); // 75 Метод reduce виконує функцію reducer для кожного елемента масиву numbers, зберігаючи проміжний результат (total) і передаючи його разом з наступним елементом (value) до наступного виклику функції. У кінці, sum містить загальну суму всіх чисел в масиві numbers, що дорівнює 75.    