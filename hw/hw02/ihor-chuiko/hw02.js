// 01 data types

var str = 'This is a string';
var numb = 13;
var big_Int = 123456789012345678901234567890n;
var bool = true;
var undef
var empty = null;
var obj = [1, 2];
var symb = Symbol('Some symbol');

console.log (str + " is type of", typeof(str));
console.log (numb + " is type of", typeof(numb));
console.log (big_Int + " is type of", typeof(big_Int));
console.log (bool + " is type of", typeof(bool));
console.log (undef + " is type of", typeof(undef));
console.log (empty + " is type of", typeof(empty));
console.log (obj + " is type of", typeof(obj));
console.log ( symb, typeof(symb));

// 02 dynamyc types

var x
console.log(typeof(x));

x = 45;
console.log(typeof(x));

x = '45';
console.log(typeof(x));

// 03 conversion to string

let num = 100;
toString = num + "";
console.log(typeof(toString));

toString2 = String(num);
console.log(typeof(toString2));

// 04 conversion to number

let str = "250";
toNumber = Number(str);
console.log(typeof(toNumber));

toNumber2 = +str;
console.log(typeof(toNumber2));

//05

//isNaN() конвертує значення в тип number і перевіряє чи результат не є числом

console.log(isNaN("123")); //123 є числом, результат false
console.log(isNaN("123abc"));//123abc не є числом, результат true
console.log(isNaN(null));//null конвертується в 0, результат false 
console.log(isNaN(undefined));//не можливо конвертувати в число, результат true 
console.log(isNaN(true));//true конвертується в 1, результат false

//06 

//Boolean() перевіряє чи існує значення, якщо так тоді true інакше false

console.log(Boolean("Hello"));//значення існує, true
console.log(Boolean(""));//порожній рядок, false
console.log(Boolean(0));//значення існує, але воно = 0, false 
console.log(Boolean(1));//true
console.log(Boolean(null));//порожній значення, false
console.log(Boolean(undefined));//невизначено, false

//з подвійним запереченням результати ті ж самі

console.log(Boolean(!!"Hello"));
console.log(Boolean(!!""));
console.log(Boolean(!!0));
console.log(Boolean(!!1));
console.log(Boolean(!!null));
console.log(Boolean(!!undefined));

//07 operators priority

console.log(10 - 20 / 5); //математичні операції виконуються по порядку обчислення: 1. Множення/ділення 2. Додавання/віднімання
console.log(2 ** 4 * 2); // Піднесення 2 до 4 степеню, множення результату на 2

console.log((10 - 20) / 5); //спершу виконуються дії в дужках. -10/5=-2
console.log(2 ** (4 * 2)); // спершу виконуються дії в дужках. 2^8=256

//08 arrays

var arr = [1, 2, 3, 4];
console.log(arr[0], arr[3]);
arr[1] = "second";
arr[6] = "new";
console.log(arr.length);

for (let i = 0; i < arr.length; i++) {
    console.log("arr[" + i + "] = " + arr[i]);
}

for (const index of arr) {
    console.log(index);
}

//09 arrays methods

const numbers = [2, 4, 6, 8, 10];
console.log(numbers);
numbers.push(22);
console.log(numbers);
numbers.pop();
console.log(numbers);
numbers.shift();
console.log(numbers);
numbers.unshift(0);
console.log(numbers);
new_numbers = numbers.slice(2, 4);
console.log(new_numbers);
numbers.splice(3,1);
console.log(numbers);

//10 arrays methods 2

const numbers2 = [5, 10, 15, 20, 25];

var double_numbers = numbers2.map(num => num * 2);
console.log(double_numbers);

var filtered = numbers2.filter(num => num >12);
console.log(filtered);

var sum = numbers2.reduce((total, item) => {
    return total + item;
}, 0);
console.log(sum);

//bonus

var arr = [1, 2, "5", 4, 3];
let array_sum = 0;

if (arr.every(item => typeof item === "number")) {
    for (const item of arr) {
        array_sum += item
    }
    console.log("Total sum of array is " + array_sum);
    
    var array_avg = array_sum / arr.length;
    console.log("Array average is " + array_avg);
    
    var max_value = Math.max(...arr);
    console.log("Max value is " + max_value);
    
    var min_value = Math.min(...arr);
    console.log("Min value is " + min_value);

}  else console.log("Not all elements in the array are numbers")
