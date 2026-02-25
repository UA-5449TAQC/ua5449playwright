//1. Типи даних
let a = "Viktoriia"; 
let b = 11; 
let c = 9007199254740993n; 
let d = true; 
let e; 
let f = null; 
let g = Symbol("id"); 
let h = { name: "Viktoriia", age: 11 }; 

console.log(typeof a, a);
console.log(typeof b, b);
console.log(typeof c, c);
console.log(typeof d, d);
console.log(typeof e, e);
console.log(typeof f, f);
console.log(typeof g, g);
console.log(typeof h, h);

// 2.Динамічна типізація
let x;
x = undefined;
console.log(typeof x, x);

x = 45;
console.log(typeof x, x);

x = "45";
console.log(typeof x, x);
//Динамічна типізація означає, що одна і та сама змінна може автоматично міняти свій тип даних при переприсвоєнні.

    //3. Перетворення у String
let y = 100;
let str1 = String(y);
console.log(typeof str1, str1); 

let str2 = y + "";
console.log(typeof str2, str2);

//4. Перетворення у Number
let num = "250"; 
let num1 = Number(num); 
let num2 = +num;

console.log(typeof num1, num1);
console.log(typeof num2, num2);

console.log(parseInt("12.75px")); 
console.log(parseFloat("12.75px")); 
console.log(parseInt("text")); 

// Number("250") та +"250" перетворюють string у число 250.
// parseInt("12.75px") повертає 12, оскільки parseInt читає лише цілу частину числа до першого нечислового символу, а parseFloat("12.75px") повертає 12.75, оскільки parseFloat читає десяткові числа. parseInt("text") повертає NaN, оскільки рядок не починається з числа.
// parseFloat("12.75px") повертає 12.75, оскільки parseFloat читає десяткові числа  до першого нечислового символу, а parseInt("12.75px") повертає 12, оскільки parseInt читає лише цілу частину числа до першого нечислового символу.
// parseInt("text") повертає NaN, оскільки рядок не починається з числа.

//5. Перевірка на число
console.log(isNaN("123")); // false, оскільки "123" можна перетворити на число 123
console.log(isNaN("123abc")); // true, оскільки "123abc" не можна перетворити на число
console.log(isNaN(null)); // false, оскільки null перетворюється на 0, що є числом
console.log(isNaN(undefined)); // true, оскільки undefined не можна перетворити на число
console.log(isNaN(true)); // false, оскільки true перетворюється на 1, що є числом 

//6.Перетворення у Boolean
console.log(Boolean("Hello")); // true, оскільки непорожній рядок є істинним
console.log(Boolean("")); // false, оскільки порожній рядок є хибним
console.log(Boolean(0)); // false, оскільки 0 є хибним
console.log(Boolean(1)); // true, оскільки будь-яке ненульове число є істинним
console.log(Boolean(null)); // false, оскільки null є хибним
console.log(Boolean(undefined)); // false, оскільки undefined є хибним

console.log(!!"Hello"); // true
console.log(!!""); // false
console.log(!!0); // false
console.log(!!1); // true
console.log(!!null); // false
console.log(!!undefined); // false
/*Falsy значення - це ті, які при перетворенні в логічний тип (Boolean) дають результат false:
Порожній рядок (""),Число 0,null,undefined,NaN;*/

//7.Пріоритет операторів
console.log(10 - 20 / 5); //20/5=4, 10-4=6
console.log(2 ** 4 * 2); //2**4=16, 16*2=32

console.log((10 - 20) / 5); //10-20=-10, -10/5=-2
console.log(2 ** (4 * 2)); //4*2=8, 2**8=256

//8.Робота з масивами (базові операції)
let arr = ["apple", "banana", "cherry", "pear"];

console.log(arr[0]); 
console.log(arr[arr.length - 1]); 

arr[1] = "grape";
arr[6] = "orange";
console.log(arr.length);

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}  
 

for (const item of arr) {
  console.log(item);
}

//9. Методи масивів
let numbers = [2, 4, 6, 8, 10];

numbers.push(12);
console.log(numbers);

numbers.pop();
console.log(numbers);

numbers.shift();
console.log(numbers);

numbers.unshift(0);
console.log(numbers);

const newNumbers = numbers.slice(1, 4);
console.log(newNumbers);

numbers.splice(2, 1);
console.log(numbers);

//10. Методи map, filter, reduce
let numbers1 = [5, 10, 15, 20, 25];

let doubledNumbers = numbers1.map(num => num * 2);
console.log(doubledNumbers);

let filteredNumbers = numbers1.filter(num => num > 12);
console.log(filteredNumbers);

let sum = numbers1.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);


