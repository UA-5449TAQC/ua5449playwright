

// let a = 10;
// let b = "10";
// console.log(a*2);
// console.log(b*2, typeof (b*2));
// let c = "abc";
// console.log(c*2, typeof (c*2));

// a = 10;
// console.log(++a);
// console.log(a++);
// console.log(a);


// console.log(9**0.5);
// console.log(3**2);
// console.log((-3)**0.5);

// console.log("5" - 2); // 3
// console.log(8 / "4"); // 2
// console.log(8 / "a4"); // NaN
// console.log(8 / "4a"); // NaN
// let a = 5;
// let b = "5";
// let d;
// let c = d= a + b;
// console.log(c, typeof c);

// console.log(10 == 10); // true
// console.log(10 == "10"); // true

// console.log(10 < 10); // false
// console.log(10 < 11); // true
// console.log("a" < "b"); // true
// console.log("abc" < "aBc"); // false


// console.log(10 === 10); // true
// console.log(10 === "10"); // false
// console.log(10 !== 10); // false
// console.log(10 !== "10"); // true
// console.log(NaN == NaN); // false
// let a = NaN;
// let b = NaN;
// console.log(a == b); // false

// let age = 18;
// console.log(age >= 18 && age < 60); // true
// console.log(age < 18 || age >= 60); // false

// // return tru if a in [10, 20] or a in [30, 40]
// let a = 15;
// console.log((a >= 10 && a <= 20) || (a >= 30 && a <= 40)); // true
// console.log((a >= 10 && a <= 20 || a >= 30) && a <= 40); // true

// console.log(10 && "text" && "15"); // "15"
// console.log(10 && 0 && "15"); // 0
// console.log(0 && 10 && "15"); // 0
// console.log(10 || "text" || "15"); // 10
// console.log(0 || "text" || "15"); // "text"
// console.log(0 || "" || "15"); // "15"
// console.log(0 || "" || null); // null

// is_false = [0, "", null, undefined, NaN, false]


// let age = 18;
// let t = age >= 18 ? "You are an adult" : "You are a child";
// console.log(t);
// age = 15;
// t = age >= 18 ? "You are an adult" : "You are a child";
// console.log(t);


// let age = 8;

// if (age >= 18) {
//     console.log("You are an adult");
// }

// console.log("End of the program");

// let age = 18;

// if (age >= 18) {
//     console.log("You are an adult");
// } else {
//     console.log("You are a child");
// }
// console.log("End of the program");

// ages = [5, 15, 25, 35, 45, 55, 65];

// for (let i = 0; i < ages.length; i++) {
//     let age = ages[i];

//     if (age < 6) {
//         console.log(age, "You are a child");
//     } else {
//         if (age < 18) {
//             console.log(age, "You are a teenager");
//         } else {
//             if (age < 60) {
//                 console.log(age, "You are an adult");
//             } else {
//                 console.log(age, "You are a senior");
//             }
//         }
//     }
// }


// for (let i = 0; i < ages.length; i++) {
//     let age = ages[i];

//     if (age < 6) {
//         console.log(age, "You are a child");
//     } else if (age < 18) {
//         console.log(age, "You are a teenager");
//     } else if (age < 60) {
//             console.log(age, "You are an adult");
//     } else {
//         console.log(age, "You are a senior");
//     }
    
// }

// statuses_code = [200, 201, 202, 400, 401, 403, 404, 500, 502];

// for (let i = 0; i < statuses_code.length; i++) {
//     let status_code = statuses_code[i]; 
//     if (status_code === 200) {
//         console.log(status_code, "OK");
//     } else if (status_code === 201) {
//         console.log(status_code, "Created");
//     } else if (status_code === 400) {
//         console.log(status_code, "Bad Request");
//     } else if (status_code === 401) {
//         console.log(status_code, "Unauthorized");
//     } else if (status_code === 403) {
//         console.log(status_code, "Forbidden");
//     } else if (status_code === 404) {
//         console.log(status_code, "Not Found");
//     } else if (status_code === 500) {
//         console.log(status_code, "Internal Server Error");
//     } else {
//         console.log(status_code, "Unknown status code");
//     }
// }

// for (let i = 0; i < statuses_code.length; i++) {
//     let status_code = statuses_code[i]; 
//     switch (status_code) {
//         case 200:
//             console.log(status_code, "OK");
//             break;
//         case 201:
//             console.log(status_code, "Created");
//             break; 
//         case 400:
//             console.log(status_code, "Bad Request");
//             break;
//         case 401:
//             console.log(status_code, "Unauthorized");
//             break;
//         case 403:
//             console.log(status_code, "Forbidden");
//             break;
//         case 404:
//             console.log(status_code, "Not Found");
//             break;
//         case 500:
//             console.log(status_code, "Internal Server Error");
//             break;
//         default:
//             console.log(status_code, "Unknown status code");
//     }
// }


// arr = [1, 2, 3, 4, 5];
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);
// arr[0] = 10;
// console.log(arr);

// arr[10] = 100;
// console.log(arr);
// arr[7] = 50;
// console.log(arr);

// console.log(arr.length);

// let arr = ["first", "second", "third"]; 
// console.log(arr.length, arr);
// arr.push("fourth");
// console.log(arr.length, arr);
// arr.push(5, "sixth");
// console.log(arr.length, arr);
// arr.push([7, 8]);
// console.log(arr.length, arr);
// arr.unshift("zero");
// console.log(arr.length, arr);
// arr.unshift(-2, -1);
// console.log(arr.length, arr);
// let last_element = arr.pop();
// console.log(last_element, arr.length, arr);
// let first_element = arr.shift();
// console.log(first_element, arr.length, arr);


let arr = [1, 2, 3, 4, 5];
// let sl= arr.slice(1, 4);
// console.log(sl, arr);
// sl = arr.slice(2);
// console.log(sl, arr);
// sl = arr.slice(-3, -1);
// console.log(sl, arr);


console.log(arr);
let removed = arr.splice(2, 2, "a", "b", "c");
console.log(removed, arr);
removed = arr.splice(2, 2);
console.log(removed, arr);
arr = arr.concat([6, 7]);
arr.push([8, 9]);
arr = arr.concat("ten");
console.log(arr);

arr.forEach((element, index) => {
    console.log(`index: ${index}, element: ${element}`);
});

let newArr = arr.map((element, index) => {
    console.log(`index: ${index}, element: ${element}`);
    if (typeof element === "number") { 
        return element*2;
    } else if (typeof element === "string") {
        return element.toUpperCase();
    } else {
        return element;
    }
});
console.log(arr);
console.log(newArr);
