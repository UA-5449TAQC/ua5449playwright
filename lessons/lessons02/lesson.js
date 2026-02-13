// console.log("Hello, World!");

// x = 5; // This will work, but it's not recommended to use variables without declaring them first.
// console.log(x);

// var a = 10;// Using 'var' to declare a variable. It's function-scoped and can be redeclared and updated.
// console.log(a);

// let word; // Using 'let' to declare a variable. It's block-scoped and can be updated but not redeclared in the same scope.
// console.log(word);

// const b = 20; // Using 'const' to declare a variable. It's block-scoped and cannot be updated or redeclared. It must be initialized at the time of declaration.
// console.log(b);
// b = 30; // This will cause an error because 'b' is a constant and cannot be reassigned.
// /*
// this is multiple line comment
// */
// word = "This is a variable.";

// console.log(word);

// let a = 10;
// console.log(typeof a, a);
// a = "Now I'm a string!";
// console.log(typeof a, a);
// a = true;
// console.log(typeof a, a);
// a = null;
// console.log(typeof a, a);
// a = undefined;
// console.log(typeof a, a);
// a = { name: "Alice", age: 30 };
// console.log(typeof a, a);
// a = [1, 2, 3, 4, 5];
// console.log(typeof a, a);

// console.log(a)


// let a = 20;
// console.log(typeof a, a); // 20
// let data = String(a);
// console.log(data); // "20"
// console.log(typeof data); // "string"


// a = 20;
// data = a + "";
// console.log(data); // "20"
// console.log(typeof data); // "string"
// console.log(1+2+3+4+"a"+5+6+7); // "10a567"


// let a = "20";
// let num = Number(a);
// console.log(num); // 20
// console.log(typeof num); // "number"

// let a = "20";
// let num = +a;
// console.log(num); // 20
// console.log(typeof num); // "number"
// console.log(+"abc"); // NaN (Not a Number) because "abc" cannot be converted to a number.
// console.log(+""); // 0 (An empty string is converted to 0)
// console.log(+"   "); // 0 (A string with only whitespace is also converted to 0)
// console.log(+"123abc"); // NaN (A string that starts with numbers but has non-numeric characters is not a valid number)
// console.log(typeof NaN); // "number" (NaN is of type "number" in JavaScript)
// console.log(typeof Infinity); // "number" (Infinity is of type "number" in JavaScript)
// a = Number.MAX_VALUE;
// console.log(a); // 1.7976931348623157e+308 (The largest positive finite number that can be represented in JavaScript)
// a = Number.MIN_VALUE;
// console.log(a); // 5e-324 (The smallest positive finite number that can be represented in JavaScript)
// a = Number.MAX_VALUE * 2;
// console.log(a); // Infinity (Multiplying the largest finite number by 2 results in Infinity)
// console.log(parseInt("7")); // 7
// console.log(parseInt("7.9")); // 7
// console.log(parseInt("7.1")); // 7
// console.log(parseInt("789nm1111")); // 789
// console.log(parseInt("nm")); // NaN

// let num = parseFloat("7.0");
// console.log(typeof num, num); // 7.0
// num = parseFloat("7.98");
// console.log(typeof num, num); // 7.98
// num = parseFloat("7.1");
// console.log(typeof num, num); // 7.1
// num = parseFloat("789nm1111");
// console.log(typeof num, num); // 789
// num = parseFloat("nm");
// console.log(typeof num, num); // NaN
// console.log(1+2.5+3.445+10+15.5); // 32.945

// let a = 1;
// console.log(isNaN(a), +a); // false 1
// a = "1";
// console.log(isNaN(a), +a); // false 1
// a = "1m";
// console.log(isNaN(a), +a); // true NaN
// a = null;
// console.log(isNaN(a), +a); // false 0
// a = undefined;
// console.log(isNaN(a), +a); // true NaN


// let a = "1";
// let bln = Boolean(a);
// console.log(bln); // true
// console.log(typeof bln); // "boolean" 

// a = "1";
// bln = !!a;
// console.log(bln); // true
// console.log(typeof bln); // "boolean"

// console.log(2**10); // 1024 (2 raised to the power of 10)
// console.log(10**-2); // 0.01 (10 raised to the power of -2, which is the same as 1 divided by 10 squared)
// console.log(9**0.5); // 3 (9 raised to the power of 0.5, which is the same as the square root of 9)



// let arr = Array(); // Creating an empty array using the Array constructor.
// console.log(arr); // []
// arr = Array(5); // Creating an array with a length of 5. The elements are not initialized, so they are empty slots.
// console.log(arr); // [ <5 empty items> ]
// console.log(arr[0]); // undefined (Accessing an uninitialized element returns undefined)
// arr = Array(1, 2, 3, 4, 5); // Creating an array with specific elements using the Array constructor.
// console.log(arr);   // [1, 2, 3, 4, 5]
// arr = []; // Creating an empty array using array literal syntax.
// console.log(arr); // []
// arr = [1, 2, 3, 4, 5]; // Creating an array with specific elements using array literal syntax.
// console.log(arr); // [1, 2, 3, 4, 5]
// arr = [1, "two", true, null, undefined, { name: "Alice" }, [1, 2, 3]]; // Creating an array with mixed data types.
// console.log(arr); // [1, "two", true, null, undefined, { name: "Alice" }, [1, 2, 3]]
// arr[0] = "test data"; // Modifying the first element of the array.
// console.log(arr); // ["test data", "two", true, null, undefined, { name: "Alice" }, [1, 2, 3]]
// console.log(arr.length); // 7 (The length property of the array returns the number of elements in the array)
// console.log(arr[arr.length-1]); // [1, 2, 3] (Accessing the last element of the array)

// let arr = [1, 2, 3, 4, 5];
// console.log(arr[0]); // 1 (Accessing the first element of the array)
// console.log(arr[2]); // 3 (Accessing the third element of the array)
// console.log(arr[5]); // undefined (Accessing an index that is out of bounds returns undefined)
// console.log(arr[-1]); // undefined (Negative indices are not valid in JavaScript arrays)
// console.log(arr[100]); // undefined (Accessing an index that is out of bounds returns undefined)
// console.log(arr.length); // 5 (The length property of the array returns the number of elements in the array)
// arr[10] = 11; // Adding an element at index 10. This will create empty slots for indices 5 to 9.
// console.log(arr); // [1, 2, 3, 4, 5, <5 empty items>, 11] (The array now has a length of 11, with empty slots for indices 5 to 9)
// console.log(arr.length); // 11 (The length property of the array now returns 11, even though there are only 6 defined elements)

// for (let i = 0; i < arr.length; i++) {
//     // console.log("index: " + i + ", value: " + arr[i]); // This will print the index and the value at that index for each element in the array. For empty slots, it will print undefined.
//     console.log(`a[${i}]=${arr[i]}`); // Using template literals to achieve the same result as the previous line.
// }
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == undefined) arr[i] = 0; // This will replace any undefined elements (empty slots) in the array with 0.
// }
// console.log(arr); // [1, 2, 3, 4, 5, 0, 0, 0, 0, 0, 11] (The array now has all empty slots replaced with 0)

// for (let element of arr) {
//     console.log(element); 
//     if (element == 0) {
//         element = 100; // This will not modify the original array because 'element' is a copy of the value in the array, not a reference to it.
//     }
// }
// console.log(arr); // [1, 2, 3, 4, 5, 0, 0, 0, 0, 0, 11] (The original array remains unchanged because the modification was made to the loop variable 'element', which is a copy of the value in the array)

arr = [1, 2, 3, 4, 5];
console.log(arr);
arr.push(6); // Adding an element to the end of the array using the push method.
console.log(arr);
let lastElement = arr.pop(); // Removing the last element of the array using the pop method and storing it in a variable.
console.log(arr, lastElement);
let firstElement = arr.shift(); // Removing the first element of the array using the shift method and storing it in a variable.
console.log(arr, firstElement);
arr.unshift(0); // Adding an element to the beginning of the array using the unshift method.
console.log(arr);
new_arr = arr.slice(2, 4); // Creating a new array that is a slice of the original array from index 2 to index 4 (not including index 4) using the slice method.
console.log(new_arr, arr);

arr = arr.concat(new_arr); // To modify the original array, we need to assign the result of concat back to arr.
console.log(arr); // [0, 2, 3, 4, 5, 6, 3, 4] (The original array now includes the elements from new_arr at the end)
arr.push(new_arr); // Adding the entire new_arr as a single element to the end of arr using the push method. This will create a nested array at the end of arr.
console.log(arr); // [0, 2, 3, 4, 5, 6, 3, 4, [3, 4]] (The original array now has a nested array at the end containing the elements of new_arr)