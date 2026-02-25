//1. Data types
/*
String
Number
BigInt
Boolean
Undefined
Null
Object
Symbol
*/
let str = "String variable";
console.log(str, typeof(str));

let num = 35;
console.log(num, typeof(num));

let big = Number.MAX_SAFE_INTEGER + 1
console.log(big, typeof(big));

let bool = false;
console.log(bool, typeof(bool))

let undef; 
console.log(undef, typeof(undef));

let nul = null;
console.log(nul, typeof(nul)); 

let obj = {name: "Anastasiia", status:"online"};
console.log(obj, typeof(obj));

let symb = Symbol("i"); 
console.log(symb, typeof(symb));

//2. Dynamic typing
//dynamic typing - one variable can have values of different types;
//you can assign different types of values to the same variable and it will change

let x;
console.log(x, typeof(x));

x = 45; 
console.log(x, typeof(x)); //dynamic typing. x was undefined, now it's a number

x = "45";
console.log(x, typeof(x)); //x was a number, now it's a string

//3. String conversion

let a = 100;

let b = String(a);
console.log(b, typeof(b));

let c = a + "";
console.log(c, typeof(c));

//4. Number conversion

let string = "250";
let str_to_num = Number(string);
console.log(str_to_num, typeof(str_to_num));

let str_to_num2 = +string;
console.log(str_to_num2, typeof(str_to_num2));

console.log (parseInt("12.75px"), //tries to find Int at the beginning, ignores text in the end. Int = 12
parseFloat("12.75px"), //tries to find Float at the beginning, ignores text in the end. Float = 12.75
parseInt("text")); //tries to find Int at the beginning, but there is no Int. can't conver to string, returns NaN

//5. Verify on Number

//isNan - first converts to number
console.log(
isNaN("123"), //tries to convert to number -> 123 is number -> false
isNaN("123abc"),//tries to convert to number, it can't -> NaN is not a number -> true
isNaN(null), //tries to convert to number -> 0 is number -> false
isNaN(undefined), //tries to convert to number, it can't -> NaN is not a number -> true
isNaN(true), //tries to convert to number -> 1 is a number -> false
)

//6. Boolean conversion

console.log(
Boolean("Hello"), //any non-empty string -> true
Boolean(""), //empty string -> false
Boolean(0), //0 -> false
Boolean(1), //any non-zero number -> true
Boolean(null), //null always false
Boolean(undefined) //undefined always false
)

//first ! converts to boolean and then negates it, second ! negates it again, so we get the boolean value of the original object
console.log(
!!"Hello", //'Hello!' = true, !'Hello' -> false, !false -> true
!!"", // "" = false, !""  -> true, !false -> false
!!0, // 0 = false, !0 -> true, !true -> false
!!1, //1 = true, !1 -> false, !false -> true
!!null, //null = false, !null -> true, !true -> false
!!undefined // undefined = false, !undefined -> true, !true -> false
)

//7. Priority of operations

console.log(10 - 20 / 5); // division priority is higher, so 20/5 = 4, then 10 - 4 = 6
console.log(2 ** 4 * 2); //exponentiation priority is higher, so 2**4 = 16, then 16*2 = 32

console.log((10 - 20) / 5);
console.log(2 ** (4 * 2));

//8. Array basic operations

let array = [1, "two", 3, "four"];
console.log(array[0], array[3]); //first and last (because we start indexing from 0)
array[1] = 2; 
array[6] = "six";
console.log(array.length); 

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
};

for (let el of array) {
    console.log(el);
};

//9. Array methods

const numbers = [2, 4, 6, 8, 10]; //it doesnt mean that we can't change the array, we just can't reassign it to a new array. but we can change values itself
numbers.push(1);
numbers.pop();
numbers.shift();
numbers.unshift("0"); //another types are allowed
numbers[1] = "2"; //we can change values by index
console.log(numbers);

const strings = numbers.slice(0,2);
numbers.splice(0, 2);
console.log(strings, numbers);

//10. map, filter, reduce

const numbers1 = [5, 10, 15, 20, 25];

const newNumbers = numbers1.map((number, index) => { 
    return number*2; //go from [0] to [5] (index), take value (number) -> *2 -> add new value to newNumbers
});
console.log(newNumbers);

const bigNumbers = numbers1.filter(number => number > 12); //go from [0] to [5], take value -> check if it meets conditions -> if yes, add this value to bigNumbers
console.log(bigNumbers);

const summNumbers = numbers1.reduce((accumulator, currentValue) => accumulator + currentValue, 0); //accumulator iw where we store the selut; 0 is initial value of it (it is important to add)
console.log(summNumbers);

//Additional task

const arrNum = [6, 12, -4, 44, 5];
let summ = 0; //assign 0 because if don't assign value, it will be undefined and we can't add to undefined
let min; //don't assgn value because we don't know the smallest value in the array
let max; //don't assgn value because we don't know the biggest value in the array   

for (let i = 0; i < arrNum.length; i++) {
    if (!isNaN(arrNum[i])) {
        summ += arrNum[i];
        if (i === 0) { //this is initial assignment of min and max as arrNum[0] because we will compare other values with the first. this works only 1st time because i === 0 only in the first iteration
            min = arrNum[i];
            max = arrNum[i];
        } else { //this works all other iterations except the first one and compares values
            if (arrNum[i] < min) {
                min = arrNum[i];
            }
            if (arrNum[i] > max) {
                max = arrNum[i];
            }
        }
    }
}
console.log(`summ: ${summ} \nmin: ${min} \nmax: ${max}`);