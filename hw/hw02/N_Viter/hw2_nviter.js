//1. Типи даних
//let myString = "Hello, Natalie!";
//console.log("myString:", myString, "| type:", typeof myString);
//let myNumber = 12;
//console.log("myNumber:", myNumber, "| type:", typeof myNumber);
//let myBigInt = 1234567890123456789012345678901234567890n;
//console.log("myBigInt:", myBigInt, "| type:", typeof myBigInt);
//let myBoolean = true;
//console.log("myBoolean:", myBoolean, "| type:", typeof myBoolean);
//let myUndefined;
//console.log("myUndefined:", myUndefined, "| type:", typeof myUndefined);
//let myNull = null;
//console.log("myNull:", myNull, "| type:", typeof myNull);
//let myObject = { name: "Natalie", age: 25 };
//console.log("myObject:", myObject, "| type:", typeof myObject);
//let mySymbol = Symbol("unique");
//console.log("mySymbol:", mySymbol, "| type:", typeof mySymbol);

// 2. Динамічна типізація
//let = 'x';
//x = undefined;
//console.log("Value:", x, "| Type:", typeof x);
//x = 45;
//console.log("Value:", x, "| Type:", typeof x);
//x = "45";
//console.log("Value:", x, "| Type:", typeof x);

//3. Перетворення у String
//let num = 100;
//let str = num.toString();
//console.log(str);
//console.log(typeof str);
//let num = 100;
//let str = String(num);
//console.log(str);
//console.log(typeof str);

//4. Перетворення у Number
//let str = '250';
//let num = Number(str);
//console.log(num);
//console.log(typeof num);
//let str = "250"
//let num = +str;
//console.log(num);
//console.log(typeof num);

//5. Перевірка на число
//let a = 123;//false 123
//console.log(isNaN(a), +a);
//a = "123abc"//true NaN
//console.log(isNaN(a), +a);
//a = null; // false 0
//console.log(isNaN(a), +a);
//a = undefined;//true NaN
//console.log(isNaN(a), +a);
//a = true;//false 1
//console.log(isNaN(a), +a);

//6. Перетворення у Boolean
/* let a = "Hello";//true  boolean
let bln = Boolean(a);
console.log(bln);
console.log(typeof bln); */
/* let a = "Hello";//true  boolean
bln = !!a;
console.log(bln);
console.log(typeof bln); */
/* let a = "";//false  boolean
bln = !!a;
console.log(bln);
console.log(typeof bln); */
/* let a = 0;//false  boolean
bln = !!a;
console.log(bln);
console.log(typeof bln); */
/* let a = 1;//true  boolean
bln = !!a;
console.log(bln);
console.log(typeof bln); */
/* let a = null;//false  boolean
bln = !!a;
console.log(bln);
console.log(typeof bln); */
/* let a = undefined;//false  boolean
bln = !!a;
console.log(bln);
console.log(typeof bln); */

//7. Пріоритет операторів
/* console.log(10 - 20 / 5);//6
console.log(2 ** 4 * 2);//32 */
/* console.log(10 - (20 / 5));//6
console.log(2 ** (4 * 2));//256 */
/* console.log((10 - 20) / 5);//-2
console.log(2 ** (4 * 2));//256 */

//8. Робота з масивами (базові операції)
/* const places = ['Поле','Ліс','Гай','Дорога'];//Поле Дорога
console.log(places[0]);
console.log(places[3]); */
/* const places = ['Поле','Ліс','Гай','Дорога'];//[ 'Поле', 'Море', 'Гай', 'Дорога' ]
places[1] = "Море";
console.log(places); */
/* const places = ['Поле','Ліс','Гай','Дорога'];//4//
places[1] = "Море";
console.log(places.length); */
/* const places = ['Поле','Море','Гай','Дорога'];//[ 'Поле', 'Море', 'Гай', 'Дорога', <2 empty items>, 'Oзеро' ] - 7 елементів в масиві
places[6] = "Oзеро";
console.log(places);
console.log(places.length);
for (let i = 0; i < places.length; i++) {
    console.log(i, places[i]);// [ 'Поле', 'Море', 'Гай', 'Дорога', <2 empty items>, 'Oзеро' ]70 Поле1 Море2 Гай3 Дорога4 undefined5 undefined 6 Oзеро
}
for (let element of places) {
    console.log(element);//2 Гай3 Дорога4 undefined5 undefined6 OзероПолеМореГайДорогаundefinedundefined Oзеро
} */

// 9. Методи масивів
/* const numbers = [2, 4, 6, 8, 10];
numbers.push(22);
console.log(numbers);//[ 2, 4, 6, 8, 10, 22 ]
const lastElement = numbers.pop();
console.log(numbers,lastElement); //[ 2, 4, 6, 8, 10 ] 22
const firstElement = numbers.shift()
console.log(numbers, firstElement);//[ 4, 6, 8, 10 ] 2 */
/* const numbers = [4, 6, 8, 10];
numbers.unshift(-1);
/* console.log(numbers);//[ -1, 4, 6, 8, 10 ]
new_numbers = numbers.slice(4, 6);
console.log(new_numbers, numbers);// [ -1, 4, 6, 8, 10 ][ 10 ] [ -1, 4, 6, 8, 10 ]  */
/* const new_numbers = numbers.splice(4, 1);
console.log(new_numbers); 
console.log(numbers);// [ 10 ][ -1, 4, 6, 8 ] */

//10. Методи map, filter, reduce
/* const numbers = [5, 10, 15, 20, 25];
console.log(numbers);//[ 5, 10, 15, 20, 25 ]
const multiplied = numbers.map(num => num * 2);
console.log(multiplied);//[ 10, 20, 30, 40, 50 ]
const greaterThan12 = numbers.filter(num => num > 12);
console.log(greaterThan12);//[ 15, 20, 25 ]
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);//75 */