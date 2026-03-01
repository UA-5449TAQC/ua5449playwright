/* 
Task 1.1 - Створіть змінні різних типів:
1. String represents sequence of characters
2. Number represents numeric values
3. BigInt represents very large integers (greater than 2^53)
4. Boolean represents boolean value either false or true
5. Undefined represents undefined value
6. Null represents null
7. Symbol represents unique identifier
8. Object represents instance of a class
*/ 

let name = "Mykhailo";
let size = 180;
let bigIntNumber = 9007199254740991n;
let ActiveStatus = true;
let MyUndefinedValue;
let MyNullValue = null;
let Supersymbol = Symbol("A");
let Userdata = { name: "Mykhailo", age: 30, city: "Kharkiv" };

/* 
Task 1.2 - Виведіть у консоль значення кожної змінної та її тип за допомогою typeof
*/
console.log(name,typeof name);
console.log(size,typeof size);
console.log(bigIntNumber,typeof bigIntNumber);
console.log(ActiveStatus,typeof ActiveStatus);
console.log(MyUndefinedValue,typeof MyUndefinedValue);
console.log(MyNullValue,typeof MyNullValue);
console.log(Supersymbol,typeof Supersymbol);
console.log(Userdata,typeof Userdata);

/* 
Task 2 - Динамічна типізація. Динамічна типізація означає, що одна і та сама змінна може автоматично міняти свій тип даних при переприсвоєнні.
*/

let x;
x = undefined;
console.log(x,typeof x);
x = 45;
console.log(x,typeof x);
x = "45";
console.log(x,typeof x);
x = true;


//Task 3 - Перетворення у String.


let MyNumber = 100;
let MyNumberAsString = String(MyNumber);
console.log(MyNumberAsString,typeof MyNumberAsString);

let MyNumberAsString2 = MyNumber + "";
console.log(MyNumberAsString2,typeof MyNumberAsString2);

//Task 4 - Перетворення у Number.

let TFO = "250";
let TFOasNumber = Number(TFO); //Перетворює весь рядок у число.
console.log(TFOasNumber,typeof TFOasNumber);

let TFOasNumber2 = +"TFO"; //Унарний плюс робить те саме — швидке перетворення в число.
console.log(TFOasNumber2,typeof TFOasNumber2); 

console.log(parseInt("12.75px")); //Повертає 12, оскільки parseInt читає лише цілу частину числа до першого нечислового символу.
console.log(parseFloat("12.75px")); //Повертає 12.75, оскільки parseFloat читає десяткові числа до першого нечислового символу.
console.log(parseInt("text")); //Повертає NaN, оскільки рядок не починається з числа. Not a Number

//Task 5 - Перевірка на число.

console.log(isNaN("123")); //Повертає false, оскільки "123" можна перетворити на число.
console.log(isNaN("123abc")); //Повертає true, оскільки "123abc" не можна перетворити на число.
console.log(isNaN(null)); //Повертає false, оскільки null перетворюється на 0, що є числом.
console.log(isNaN(undefined)); //Повертає true, оскільки undefined не можна перетворити на число.
console.log(isNaN(true)); //Повертає false, оскільки true перетворюється на 1, що є числом.

//Task 6.1 - Перетворення у Boolean.

console.log(Boolean("Hello")); //Повертає true, оскільки непорожній рядок є істинним.
console.log(Boolean("")); //Повертає false, оскільки порожній рядок є хибним.
console.log(Boolean(0)); //Повертає false, оскільки 0 є хибним.
console.log(Boolean(1)); //Повертає true, оскільки будь-яке ненульове число є істинним.
console.log(Boolean(null)); //Повертає false, оскільки null є хибним.
console.log(Boolean(undefined)); //Повертає false, оскільки undefined є хибним.

//Task 6.2 Те саме через подвійне заперечення !!

console.log(!!"Hello");     // true  → !перетворює в false, ще раз ! → true
console.log(!!"");          // false → !"" = true, !true = false
console.log(!!0);           // false → !0 = true, !true = false
console.log(!!1);           // true  → !1 = false, !false = true
console.log(!!null);        // false → !null = true, !true = false
console.log(!!undefined);   // false → !undefined = true, !true = false

//Task 7 - Пріоритет операторів.

console.log(10 - 20 / 5); // спочатку виконується ділення, а вже потім віднімання, тому результат буде 10 - 4 = 6.
console.log(2 ** 4 * 2); // спочатку піднесення до степені, а вже потім множення, тому результат буде 16 * 2 = 32.
// Змініть порядок виконання за допомогою дужок.
console.log((10 - 20) / 5);
console.log(2 ** (4 * 2));


//Task 8 - Робота з масивами (базові операції)

// Створюємо масив з 4 елементів
let arr = [11, 22, 33, 44];
// Виводимо перший та останній елемент
console.log(arr[0]);                  // перший елемент (індекс 0)
console.log(arr[arr.length - 1]);     // останній елемент
// Замінюємо другий елемент (індекс 1)
arr[1] = 2222;
console.log(arr); // перевірка
// Додаємо елемент з індексом 6
arr[6] = 666;
console.log(arr); // між 3 і 6 з’являться "порожні" місця
// Виводимо довжину масиву
console.log(arr.length); // довжина стане 7
// Перебір через for (по індексах)
for (let i = 0; i < arr.length; i++) {
    console.log("for:", arr[i]);
}
// Перебір через for...of (по значеннях)
for (let value of arr) {
    console.log("for...of:", value);
}


//Task 9 - Методи масивів

const numbers = [2, 4, 6, 8, 10];
// Додати число в кінець
numbers.push(12);              // додає 12 в кінець масиву
console.log(numbers);          // [2, 4, 6, 8, 10, 12]

// Видалити останній елемент
numbers.pop();                 // видаляє останній елемент (12)
console.log(numbers);          // [2, 4, 6, 8, 10]

// Видалити перший елемент
numbers.shift();               // видаляє перший елемент (2)
console.log(numbers);          // [4, 6, 8, 10]

// Додати елемент на початок
numbers.unshift(1);            // додає 1 на початок
console.log(numbers);          // [1, 4, 6, 8, 10]

// slice() — створює новий масив
let newArray = numbers.slice(1, 3);  
// бере елементи з індексу 1 до 3 (не включаючи 3)
console.log(newArray);         // [4, 6]
console.log(numbers);          // оригінальний масив НЕ змінюється

// 6️⃣ splice() — видаляє елемент за індексом
numbers.splice(2, 1);          
// почати з індексу 2, видалити 1 елемент
console.log(numbers);          // [1, 4, 8, 10]




//Task 10 - Методи map, filter, reduce

const numbers = [5, 10, 15, 20, 25];
// map() — створює новий масив, застосовуючи функцію до кожного елемента
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [10, 20, 30, 40, 50]

// filter() — створює новий масив, включаючи лише ті елементи, які відповідають умові
const filtered = numbers.filter(num => num > 12);
console.log(filtered); // [15, 20, 25]

// reduce() — застосовує функцію до накопичувача та кожного елемента, зводячи масив до одного значення
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 75 (5 + 10 + 15 + 20 + 25)

