// Part_1 Create variables with different types

var str = 'My first String';
var numb = 34;
var big_Int = 84783842748348n;
var bool = true;
var undef
var empty = null;
var obj = [1, 2, 3, 4, 5];
var symb = Symbol('My Symbol');

console.log (str + " is type of", typeof(str));
console.log (numb + " is type of", typeof(numb));
console.log (big_Int + " is type of", typeof(big_Int));
console.log (bool + " is type of", typeof(bool));
console.log (undef + " is type of", typeof(undef));
console.log (empty + " is type of", typeof(empty));
console.log (obj + " is type of", typeof(obj));
console.log ( symb, " is type of", typeof(symb));


//Part_2 Dynamic Types

var x
console.log(typeof(x));

x = 45;
console.log(typeof(x));

x = '45';
console.log(typeof(x));

//Part_3 Conversion To String

let num = 100;
toString = num + "";
console.log(typeof(toString));

toString_2 = String(num);
console.log(typeof(toString_2));

//Part_4 Conversion To Number

let text = "250";
toNumber = Number(text);
console.log(typeof(toNumber));

toNumber_2 = +text;
console.log(typeof(toNumber_2));

console.log(parseInt("12.75px")); // перетворює в число 12.75 і повертає цілу частину числа
console.log(parseFloat("12.75px")); // перетворює в число 12.75 число разом зі значенням після крапки
console.log(parseInt("text")); // повертає NaN оскільки не може перетворити текст в число

//Part_5

//isNaN() конвертує значення в тип number і перевіряє чи результат не є числом

console.log(isNaN("123")); //123 це число, результат false
console.log(isNaN("123abc"));//123abc не число, результат true
console.log(isNaN(null));//null конвертується в 0, результат false 
console.log(isNaN(undefined));//не можливо конвертувати в число, результат true 
console.log(isNaN(true));//true конвертується в 1, результат false

//Part_6 

//Boolean() перевіряє чи існує значення, якщо так тоді true, інакше false

console.log(Boolean("Hello"));//значення існує, true
console.log(Boolean(""));//порожній рядок, false
console.log(Boolean(0));//значення існує, і дорівнює 0, false 
console.log(Boolean(1));//true
console.log(Boolean(null));//порожнє значення, false
console.log(Boolean(undefined));//невизначено, false

//Перевіримо з подвійним запереченням

console.log(Boolean(!!"Hello")); //true
console.log(Boolean(!!"")); //false
console.log(Boolean(!!0)); //false
console.log(Boolean(!!1)); //true
console.log(Boolean(!!null)); //false
console.log(Boolean(!!undefined)); //false

//Part_7 Operators Priority

console.log(10 - 20 / 5); //Порядку обчислення: 1. Множення/ділення 2. Додавання/віднімання
console.log(2 ** 4 * 2); // Піднесення 2 до степеня, множення результату на 2

console.log((10 - 20) / 5); //спершу виконуються дії в дужках
console.log(2 ** (4 * 2)); // спершу виконуються дії в дужках

//Part_8 Arrays

var arr = [10, 20, 30, 40];
console.log(arr[0], arr[3]);
arr[1] = "Twenty";
arr[6] = "Test";
console.log(arr.length);

for (let i = 0; i < arr.length; i++) {
console.log("arr[" + i + "] = " + arr[i]);
}

for (const index of arr) {
console.log(index);
}

//Part_9 Arrays Methods

const numbers = [2, 4, 6, 8, 10];
console.log(numbers);
numbers.push(22);
console.log(numbers);
numbers.pop();
console.log(numbers);
numbers.shift();
console.log(numbers);
numbers.unshift(11);
console.log(numbers);
new_numbers = numbers.slice(2, 4);
console.log(new_numbers);
numbers.splice(3,1);
console.log(numbers);

//Part_10 Arrays Methods

const numbers2 = [5, 10, 15, 20, 25];

var double_numbers = numbers2.map(num => num * 2); //говий масив, де кожне число помножене на 2
console.log(double_numbers);

var filtered = numbers2.filter(num => num >12); //числа більше 12
console.log(filtered);

var sum = numbers2.reduce((total, item) => {
return total + item; //сума всіх елементів
}, 0);
console.log(sum);