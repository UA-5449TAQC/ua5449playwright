//1. Арифметичні оператори
/* let a = 15;
let b = 4;
console.log(a+b);//19
console.log(a-b);//11
console.log(a*b);//60
console.log(a/b);//3.75
console.log(a % b)//3
console.log(a **2)//225 */

//2. Інкремент та декремент
/* let x = 5;
let y = ++x;
console.log(x);//6
console.log(y);//6 */
/* let x = 5;
let y = x++;
console.log(x);//6
console.log(y);//5 */
/* let x = 5;
let y = --x;
console.log(x);//4
console.log(y);//4 */

//3. Пріоритет операторів
/* let a = 2;
let b = 3;
let c = 4;
let res = a + b * c;
console.log(res);//14 */
/* const m = 2;
const n = 3;
const l = 4;
const res = (m + n) * l;
console.log(res);//20 */
/* let k = 2;
let f = 5;
let n = 10;
let res = n - f + k;
console.log(res);//7 */

//4. Робота зі строками та приведення типів
/* let predicted = "52";
let res = 5 + "2";
console.log(res);//52 */
/* let predicted = "50";
let res = "5" - 2;
console.log(res);//3 */
/* let predicted = "true";
let res = "10" + true;
console.log(res);//10true */
/* let predicted = "10 - true";
let res = "10" - true;
console.log(res);//9 */

//5.Порівняння та строга рівність
/* console.log(false == 0);//true
console.log(false === 0);//false
console.log("1" == 1);//true
console.log("1" === 1);//false
console.log(null == undefined);//true
console.log(null === undefined);//false */

//6. Логічні оператори
/* console.log(0 || "Hello" || 5);//Hello 
console.log(1 && 0 && 5);//0 
console.log(null || undefined || "JS");//JS
console.log(2 || 1 && 0);//2  */
/* let num = 12;
console.log(num >=0 || num <=100);//true
let b = -2;
console.log(b >=0 && num <=100);//false */

//7. Тернарний оператор
/* let age = 35;
let t = age >=18 ? "Adult" : "Child";
console.log(t);//Adult */
/* let age = 17;
if (age >=18) {
    console.log("Adult");
} else {
    console.log("Minor");//Minor
}* */

//8. Конвертація типів
/* let str = '25';
let num = Number(str);
console.log(num);//25
console.log(typeof num);// number */
/* let str = "25"
let num = +str;
console.log(num);25 
console.log(typeof num);//number */
/* let str = "25.5px";
let num = parseInt(str);
console.log(num);//25     
console.log(typeof num);// number */
/* let str = "25.5px";
let num = Math.floor(parseFloat(str));
console.log(num);// 25 */
/* let str = "25.5px";
let num = parseFloat(str);
console.log(num);//25.5        
console.log(typeof num);//number */
/* let a = 123;
console.log(isNaN(123), +a);//false 123 */
/* let a = "123abc";
console.log(isNaN("123abc"), +a);//true NaN */
/* let a = true;
console.log(isNaN(true), +a);//false 1 */
/* let a = undefined;
console.log(isNaN(undefined), +a);// true Nan */

//9. Робота з масивами
/* const cities = ["Rome", "Lviv", "Warsaw"];
console.log(cities);//[ 'Rome', 'Lviv', 'Warsaw' ] */
/* const cities = ["Rome", "Lviv", "Warsaw"];
cities[3] = "Lviv";
console.log(cities);//[ 'Rome', 'Lviv', 'Warsaw', 'Lviv' ] */
/* const cities = ['Rome', 'Lviv', 'Warsaw', 'Lviv'];
cities.unshift("IF");
console.log(cities);//[ 'IF', 'Rome', 'Lviv', 'Warsaw', 'Lviv' ] */
/* const cities = ['IF', 'Rome', 'Lviv', 'Warsaw', 'Lviv'];
const lastElement = cities.pop();
console.log(cities);//[ 'IF', 'Rome', 'Lviv', 'Warsaw' ]
console.log(cities.length);//4  */
/* const cities = ['IF', 'Rome', 'Lviv', 'Warsaw', 'Lviv'];
const newCities = cities.slice(2);
console.log(newCities);//[ 'Lviv', 'Warsaw', 'Lviv' ] */
/* const cities = ["Rome", "Lviv", "Warsaw"];
const nameLengths = cities.map(city => city.length);
console.log(nameLengths);//[ 4, 4, 6 ] */

//10. Умовні конструкції
let number = 0;
if (number > 0) {
  console.log("Positive");
} else if (number < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
} 
/* let a = 8;
let t = a > 0 ? "Positive" : a < 0 ? "Negative" : "Zero";
console.log(t);//Positive  */
/* let number = -6;
switch (true) {
  case number > 0:
    console.log("Positive");
    break;
  case number < 0:
    console.log("Negative"); // Negative
    break;
  default:
    console.log("Zero");
} */
